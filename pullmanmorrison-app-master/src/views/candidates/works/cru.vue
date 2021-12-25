<template>
<div>
	<b-modal id="work-cru-modal" ref="work-cru-modal" :title="((cruType=='create')?'Add ':'Edit ')+'Work'" class="modal-top" hide-footer static no-close-on-esc no-close-on-backdrop>
     	<kr-form ref="work-form" v-slot="{flags,actions,data}" :options="formOptions" class="my-2">
	    	<work-form :data="data" @submit="!(flags.invalid || !flags.valid)?submit():''"></work-form>
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
			work_id:'',
			candidate_id:this.$attrs.candidate_id,
			formOptions:{
		        fields:{
		        	remarks:'',
		        	start_year:{rules:''},
		        	end_year:{rules:''},
		        	start_month:{rules:''},
		        	end_month:{rules:''},
		        	title:'',
		        	department:'',
		        	company:'',
		        	locations:{default:[],rules:''},
		        },
		        successCallback:function(response){
		        	if(that.cruType=='create'){
		        		that.$emit('created',response.data.data);
		        		that.$refs['work-cru-modal'].hide()
		        	}else{
		        		that.$emit('updated',response.data.data);
		        		that.$refs['work-cru-modal'].hide()
		        	}
		        },
		    },
		}
	},
	methods:{
		showDeleteConfirmationModal(){
	        this.$bvModal.msgBoxConfirm('Please confirm that you want to delete this work history.', {
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
		           	this.$http.delete(`candidates/${this.candidate_id}/work_experiences/${this.work_id}`).then(function(response){
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
			if(cruType=='create'){
				this.cruType='create';
				this.form.reset();
				this.$refs['work-cru-modal'].show()
			}
			else if(cruType=='update'){
				this.work_id = data.id;
				this.cruType='update';
				data.start_year = data.start_year!=0?data.start_year:null;
				data.end_year = data.end_year!=0?data.end_year:null;
				data.start_month = data.start_month!=0?data.start_month:null;
				data.end_month = data.end_month!=0?data.end_month:null;
				this.form.setModel(data);
				this.$refs['work-cru-modal'].show()
			}
			else if(cruType=='delete'){
				this.work_id = data.id;
				this.cruType='delete';
				this.showDeleteConfirmationModal();
			}
			
		},
		submit(){
			if(this.cruType=='create'){
				this.form.post(`candidates/${this.candidate_id}/work_experiences`);
			}
			else{
				this.form.patch(`candidates/${this.candidate_id}/work_experiences/${this.work_id}`);
			}
		},
	},
	computed:{
		form(){
			return this.$refs['work-cru-modal'].$scopedSlots.default()[0].context.$refs['work-form'];
		}
	},
	components:{
		'work-form': require(`./form-partials/partial.work.vue`).default,
	}
}
</script>