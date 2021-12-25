<template>
<div>
	<b-modal id="education-cru-modal" ref="education-cru-modal" :title="((cruType=='create')?'Add ':'Edit ')+'Education'" class="modal-top" hide-footer static no-close-on-esc no-close-on-backdrop>
     	<kr-form ref="education-form" v-slot="{flags,actions,data}" :options="formOptions" class="my-2">
	    	<education-form :data="data" @submit="!(flags.invalid || !flags.valid)?submit():''"></education-form>
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
			education_id:'',
			candidate_id:this.$attrs.candidate_id,
			formOptions:{
		        fields:{
		        	remarks:'',
		        	start_year:{rules:''},
		        	end_year:{rules:''},
		        	institution:'',
		        	achievements:''
		        },
		        successCallback:function(response){
		        	if(that.cruType=='create'){
		        		that.$emit('created',response.data.data);
		        		that.$refs['education-cru-modal'].hide()
		        	}else{
		        		that.$emit('updated',response.data.data);
		        		that.$refs['education-cru-modal'].hide()
		        	}
		        },
		    },
		}
	},
	methods:{
		showDeleteConfirmationModal(){
	        this.$bvModal.msgBoxConfirm('Please confirm that you want to delete this education history.', {
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
		           	this.$http.delete(`candidates/${this.candidate_id}/educations/${this.education_id}`).then(function(response){
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
				this.$refs['education-cru-modal'].show()
			}
			else if(cruType=='update'){
				this.education_id = data.id;
				this.cruType='update';
				this.form.setModel(data);
				this.$refs['education-cru-modal'].show()
			}
			else if(cruType=='delete'){
				this.education_id = data.id;
				this.cruType='delete';
				this.showDeleteConfirmationModal();
			}
			
		},
		submit(){
			if(this.cruType=='create'){
				this.form.post(`candidates/${this.candidate_id}/educations`);
			}
			else{
				this.form.patch(`candidates/${this.candidate_id}/educations/${this.education_id}`);
			}
		},
	},
	computed:{
		form(){
			return this.$refs['education-cru-modal'].$scopedSlots.default()[0].context.$refs['education-form'];
		}
	},
	components:{
		'education-form': require(`./form-partials/partial.education.vue`).default,
	}
}
</script>