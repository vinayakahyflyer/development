<template>
<div>
	<b-modal id="contact-cru-modal" ref="contact-cru-modal" :title="((cruType=='create')?'Add ':'Edit ')+'Contact Person'" class="modal-top" hide-footer static no-close-on-esc no-close-on-backdrop>
     	<kr-form ref="contact-form" v-slot="{flags,actions,data}" :options="formOptions" class="my-2">
	    	<contact-form :data="data" @submit="!(flags.invalid || !flags.valid)?submit():''"></contact-form>
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
			contact_id:'',
			company_id:this.$attrs.company_id,
			formOptions:{
		        fields:{
		        	label:{default:'',rules:''},
		        	name:{default:'',rules:''},
		          	title:{value:'',rules:''},
		          	status:{default:'active',rules:'required'},
		          	email:{rules:'email'},
          			linkedin_url:{rules:''},
          			phone:{rules:''},
          			remarks:''
		        },
		        successCallback:function(response){
		        	if(that.cruType=='create'){
		        		that.$emit('created',response.data.data);
		        		that.$refs['contact-cru-modal'].hide()
		        	}else{
		        		that.$emit('updated',response.data.data);
		        		that.$refs['contact-cru-modal'].hide()
		        	}
		        },
		    },
		}
	},
	methods:{
		showDeleteConfirmationModal(){
	        this.$bvModal.msgBoxConfirm('Please confirm that you want to delete this contact.', {
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
		           this.$http.delete(`companies/${this.company_id}/contacts/${this.contact_id}`).then(function(response){
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
				this.$refs['contact-cru-modal'].show()
			}
			else if(cruType=='update'){
				this.contact_id = data.id;
				this.cruType='update';
				this.form.setModel(data);
				this.$refs['contact-cru-modal'].show()
			}
			else if(cruType=='delete'){
				this.contact_id = data.id;
				this.cruType='delete';
				this.showDeleteConfirmationModal();
			}
			
		},
		submit(){
			if(this.cruType=='create'){
				this.form.post(`companies/${this.company_id}/contacts`);
			}
			else{
				this.form.patch(`companies/${this.company_id}/contacts/${this.contact_id}`);
			}
		},
	},
	computed:{
		form(){
			return this.$refs['contact-cru-modal'].$scopedSlots.default()[0].context.$refs['contact-form'];
		}
	},
	components:{
		'contact-form': require(`./form-partials/partial.contact.vue`).default,
	}
}
</script>