<template>
<div>
	<b-modal id="communication-cru-modal" ref="communication-cru-modal" :title="((cruType=='create')?'Add ':'Edit ')+'Communication'" class="modal-top" hide-footer static no-close-on-esc no-close-on-backdrop>
     	<kr-form ref="communication-form" v-slot="{flags,actions,data}" :options="formOptions" class="my-2">
	    	<communication-form :data="data" @submit="!(flags.invalid || !flags.valid)?submit():''"></communication-form>
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
			communication_id:'',
			company_id:this.$attrs.company_id,
			formOptions:{
		        fields:{
		        	datetime:{default:this.moment().format('YYYY-MM-DD HH:mm:ss'),rules:''},
		        	person_contacted:{default:'',rules:''},
		          	
		          	//status:{default:null,rules:'required'},
		          	contacted_by:{default:'',rules:''},
          			remarks:'',
		        },
		        successCallback:function(response){
		        	if(that.cruType=='create'){
		        		that.$emit('created',response.data.data);
		        		that.$refs['communication-cru-modal'].hide()
		        	}else{
		        		that.$emit('updated',response.data.data);
		        		that.$refs['communication-cru-modal'].hide()
		        	}
		        },
		    },
		}
	},
	created(){
		this.formOptions.fields.contacted_by.default = this.krAuth.user().name
	},
	methods:{
		showDeleteConfirmationModal(){
	        this.$bvModal.msgBoxConfirm('Please confirm that you want to delete this communication.', {
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
		           	this.$http.delete(`companies/${this.company_id}/communications/${this.communication_id}`).then(function(response){
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
				this.$refs['communication-cru-modal'].show()
			}
			else if(cruType=='update'){
				this.communication_id = data.id;
				this.cruType='update';
				this.form.setModel(data);
				this.$refs['communication-cru-modal'].show()
			}
			else if(cruType=='delete'){
				this.communication_id = data.id;
				this.cruType='delete';
				this.showDeleteConfirmationModal();
			}
			
		},
		submit(){
			if(this.cruType=='create'){
				this.form.post(`companies/${this.company_id}/communications`);
			}
			else{
				this.form.patch(`companies/${this.company_id}/communications/${this.communication_id}`);
			}
		},
	},
	computed:{
		form(){
			return this.$refs['communication-cru-modal'].$scopedSlots.default()[0].context.$refs['communication-form'];
		}
	},
	components:{
		'communication-form': require(`./form-partials/partial.communication.vue`).default,
	}
}
</script>