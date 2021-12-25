<template>
<div>
	<b-modal id="job-cru-modal" ref="job-cru-modal" :title="((cruType=='create')?'Add ':'Edit ')+'Job'" class="modal-top" hide-footer static no-close-on-esc no-close-on-backdrop>
     	<kr-form ref="job-form" v-slot="{flags,actions,data}" :options="formOptions" class="my-2">
	    	<job-form :key="job_form_key" v-if="forms=='basic'" :data="data"  @submit="!(flags.invalid || !flags.valid)?submit():''"></job-form>
	    	<job-public-form v-if="forms=='public'" :data="data"  @submit="!(flags.invalid || !flags.valid)?submit():''"></job-public-form>
	    	<job-private-form v-if="forms=='private'" :data="data"  @submit="!(flags.invalid || !flags.valid)?submit():''"></job-private-form>
        	<b-btn pill variant="warning" :block="true" :disabled="flags.invalid || !flags.valid" @click="submit()"><i class="ion ion-md-save mr-2"></i><template v-if="cruType=='create'">Save</template><template v-else>Update</template></b-btn>
	    </kr-form>
	</b-modal>
</div>
</template>
<script>
export default{
	data(){
		var that = this;
		var basicFormFields = {
			status:{default:'draft',rules:''},
        	company_id:{default:this.$attrs.company_id,rules:'required'},
        	job_title:{rules:''},
        	pqe_lower:{default:'3',rules:''},
          	pqe_upper:{default:'7',rules:''},
          	locations:{default:[]},
          	speciality:{default:[]},
  			skillsets:{default:[],rules:''},
  			languages:{default:['English'],rules:''},
  			employment_type:{default:[],rules:''},
  			salary_range:{rules:''},
		};
		var privateFormFields = {
			job_description_private:{default:'',rules:''},
		};
		var publicFormFields = {
		    job_description_public:{default:'',rules:''},
		};
		return{
			cruType:'create',
			forms:'basic',
			job_id:'',
			company_id:this.$attrs.company_id,
			basicFormFields:basicFormFields,
			privateFormFields:privateFormFields,
			publicFormFields:publicFormFields,
			formOptions:{
		        fields:basicFormFields,
		        successCallback:function(response){
		        	if(that.cruType=='create'){
		        		that.$emit('created',response.data.data);
		        		that.$refs['job-cru-modal'].hide()
		        	}else{
		        		that.$emit('updated',response.data.data);
		        		that.$refs['job-cru-modal'].hide()
		        	}
		        },
		    },
		    job_form_key:1,
		}
	},
	methods:{
		resetFormDefinitions(){
			if(this.forms=='basic'){
				this.formOptions.fields = this.basicFormFields;
			}
			else if(this.forms=='public'){
				this.formOptions.fields = this.publicFormFields;
			}
			else if(this.forms=='private'){
				this.formOptions.fields = this.privateFormFields;
			}
			this.form.reset();
		},
		showDeleteConfirmationModal(){
	        this.$bvModal.msgBoxConfirm('Please confirm that you want to delete this job.', {
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
		           this.$http.delete(`jobs/${this.job_id}`).then(function(response){
		           		that.$emit('deleted');
		           }).catch(function(){

		           });
	         	}
	         		
	        })
	        .catch(err => {
	           // An error occurred
	        })
		},
		openModal(data={},cruType='create',included='basic'){
			this.forms = included;
			this.resetFormDefinitions();
			if(cruType=='create'){
				this.cruType='create';
				this.form.reset();
				this.$refs['job-cru-modal'].show()
			}
			else if(cruType=='update'){
				this.job_id = data.id;
				this.cruType='update';
				this.form.setModel(data);
				this.job_form_key++;
				this.$refs['job-cru-modal'].show()
			}
			else if(cruType=='delete'){
				this.job_id = data.id;
				this.cruType='delete';
				this.showDeleteConfirmationModal();
			}
			
		},
		submit(){
			if(this.cruType=='create'){
				this.form.post(`jobs`);
			}
			else{
				this.form.patch(`jobs/${this.job_id}`);
			}
		},
	},
	computed:{
		form(){
			return this.$refs['job-cru-modal'].$scopedSlots.default()[0].context.$refs['job-form'];
		}
	},
	components:{
		'job-form': require(`./form-partials/partial.job.vue`).default,
		'job-private-form': require(`./form-partials/partial.job-private.vue`).default,
		'job-public-form': require(`./form-partials/partial.job-public.vue`).default,
	}
}
</script>