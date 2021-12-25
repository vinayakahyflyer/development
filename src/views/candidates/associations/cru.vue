<template>
<div>
	<b-modal id="association-cru-modal" ref="association-cru-modal" :title="((cruType=='create')?'Add ':'Edit ')+' Job Association'" class="modal-top" size="lg" hide-footer static no-close-on-esc no-close-on-backdrop>
     	<kr-form ref="association-form" v-slot="{flags,actions,data}" :options="formOptions" class="my-2">
     		<template v-for="(history,idx) in association.histories">
				<div class="row _mb-20px">
					<div class="col-3 d-flex justify-content-end">
						<div class="_122px align-self-center text-right _mr-20px">
							{{convertToReadableDate(history.created_at,'DD MMM YYYY').date}}
						</div>
						<div class="vl-pill align-self-center text-right text-warning">
							<i class="ion ion-md-radio-button-off"></i>
						</div>
						<div class="vl border-left border-warning" :class="{'start':idx==0,'end':idx==association.histories.length-1,'none':association.histories.length==1}"></div>
					</div>
					<div class="col-9">
						<b-card  :class="history.status" no-body>
					    	<div class="_p-9px">
						      	<div class="d-flex row justify-content-between">
						      		<div class="col-6 mb-0 remarks _122px font-weight-light" :class="{'na':!history.remarks}" v-html="history.remarks">
						        	</div>
						      		<div class="col-6 history d-flex justify-content-end">
										<b-badge v-if="history.status=='invited'" pill class="_122px invited _mb-9px _mr-10px _pl-20px text-left"><i class="ion ion-md-checkmark-circle-outline _mr-10px"></i>INVITED</b-badge> 
										<b-badge v-if="history.status=='shortlisted'" pill class="_122px short _mb-9px _mr-10px _pl-20px text-left"><i class="ion ion-md-checkmark-circle-outline _mr-10px"></i>DECLINED</b-badge>
										<b-badge v-if="history.status=='applied'" pill class="_122px applied _mb-9px _mr-10px _pl-20px text-left"><i class="ion ion-md-checkmark-circle-outline _mr-10px"></i> APPLIED</b-badge>
										<b-badge v-if="history.status=='rejected'" pill class="_122px rejected _mb-9px _mr-10px _pl-20px text-left"><i class="ion ion-md-close-circle-outline _mr-10px"></i>REJECTED</b-badge>
										<b-badge v-if="history.status=='interviewed'" pill class="_122px interviewed _mb-9px _mr-10px _pl-20px text-left"><i class="ion ion-md-checkmark-circle-outline _mr-10px"></i>INTERVIEWED</b-badge>
										<b-badge v-if="history.status=='hired'" pill class="_122px hired _mb-9px _mr-10px _pl-20px text-left"><i class="ion ion-md-checkmark-circle-outline _mr-10px"></i>HIRED</b-badge>
							      	</div>
							    </div>
						     </div>
						</b-card>
					</div>
				</div>
			</template>
	    	<association-form :data="data" :mode="cruType"></association-form>
        	<b-btn pill variant="warning" :block="true" :disabled="flags.invalid || !flags.valid" @click="submit()"><i class="ion ion-md-save mr-2"></i><template v-if="cruType=='create'">Save</template><template v-else>Update</template></b-btn>
	    </kr-form>

	</b-modal>
</div>
</template>

<script>
export default{
	data(){
		var that = this;
		return{
			cruType:'create',
			candidate_id:this.$attrs.candidate_id,
			association:{},
			formOptions:{
		        fields:{
		        	candidate_id:{default:this.$attrs.candidate_id,rules:''},
		        	candidates:{default:[this.$attrs.candidate_id],rules:''},
		        	//organisation_id:{default:this.krAuth.user().organisation_id,rules:''},
		        	job_id:{default:'',rules:''},
		        	status:{default:'invited',rules:''},
		        	remarks:{default:'',rules:''}
		        },
		        successCallback:function(response){
		        	if(that.cruType=='create'){
		        		that.$emit('created',response.data.data);
		        		that.$refs['association-cru-modal'].hide()
		        	}else{
		        		that.$emit('updated',response.data.data);
		        		that.$refs['association-cru-modal'].hide()
		        	}
		        },
		    },
		}
	},
	methods:{
		showDeleteConfirmationModal(){
	        this.$bvModal.msgBoxConfirm('Please confirm that you want to delete this job association.', {
	          title: 'Please Confirm',
	          size: 'sm',
	          buttonSize: 'sm',
	          okVariant: 'danger',
	          okTitle: 'YES',
	          cancelTitle: 'NO',
	          footerClass: 'p-2',
	          hideHeaderClose: false,
	          centered: true,
	          class:'modal-top'
	        })
	         .then(value => {
	         	if(value){
	         		var that = this;
		           	this.$http.delete(`job-associations/${this.association.id}`).then(function(response){
		           		that.$emit('deleted');
		           	}).catch(function(){

		           	});
	         	}
	         	
	        })
	        .catch(err => {
	           // An error occurred
	        })
		},
		openModal(data={},cruType='create'){
			this.association = {};
			if(cruType=='create'){
				this.cruType='create';
				this.form.reset();
				this.$refs['association-cru-modal'].show()
			}
			else if(cruType=='update'){
				var that = this;
				this.association.id = data.id;
				this.cruType='update';
				this.$http.get('/job-associations/'+this.association.id).then(function(response){
					that.association = response.data.data;
					that.form.setModel(response.data.data);
					that.$refs['association-cru-modal'].show()
				})
			}
			else if(cruType=='delete'){
				this.association = data;
				this.cruType='delete';
				this.showDeleteConfirmationModal();
			}
			
		},
		submit(){
			if(this.cruType=='create'){
				this.form.post(`job-associations`);
			}
			else{
				this.form.patch(`job-associations/${this.association.id}`);
			}
		},
	},
	computed:{
		form(){
			return this.$refs['association-cru-modal'].$scopedSlots.default()[0].context.$refs['association-form'];
		}
	},
	components:{
		'association-form': require(`./form-partials/partial.association.vue`).default,
	}
}
</script>
<style scoped>
	.history .badge{
		height: 28px;
    	line-height:23px;
    	width:140px;
	}
	.card.invited{
    	border:2px solid #def6f9 !important;
	}
	.card.applied{
	    border:2px solid #edeff2 !important;
	}
	.card.rejected{
	   border:2px solid #f9e5e4 !important;
	}
	.card.shortlisted{
	    border:2px solid #eff8fc !important;
	}
	.card.interviewed{
	    border:2px solid #e0e8fd !important;
	}
	.card.hired{
	    border:2px solid #d9f5ea !important;
	}
</style>
<style>
	.ui-timeline::before, .ui-timeline-item::after {
    	z-index: 0;
	}

</style>