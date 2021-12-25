<template>
<div>
	<b-modal id="rectag-cru-modal" ref="rectag-cru-modal" :title="((cruType=='create')?'Add ':'Edit ')+'Area of Practice'" class="modal-top" hide-footer static no-close-on-esc no-close-on-backdrop>
     	<kr-form ref="rectag-form" v-slot="{flags,actions,data}" :options="formOptions" class="my-2">
	    	<rectag-form :data="data" @submit="!(flags.invalid || !flags.valid)?submit():''"></rectag-form>
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
			rectag_id:'',
			formOptions:{
		        fields:{
		          	recruiter_tag:{value:'',rules:'required'},
		          	aliases:{rules:''},
		        },
		        urls:{
		          	post:'recruiter_tags'
		        },
		        successCallback:function(response){
		        	if(that.cruType=='create'){
		        		that.$emit('created',response.data.data);
		        		that.$refs['rectag-cru-modal'].hide()
		        	}else{
		        		that.$emit('updated',response.data.data);
		        		that.$refs['rectag-cru-modal'].hide()
		        	}
		        },
		    },
		}
	},
	methods:{
		showStatusConfirmationModal(){
			var that =this;
			let variant ='danger';
			let msg = 'Please confirm that you want to delete this Area of Practice.';
	        this.$bvModal.msgBoxConfirm(msg, {
	          title: 'Please Confirm',
	          size: 'sm',
	          buttonSize: 'sm',
	          okVariant: variant,
	          okTitle: 'YES',
	          cancelTitle: 'NO',
	          footerClass: 'p-2',
	          hideHeaderClose: false,
	          centered: true,
	          class:'modal-top'
	        })
	        .then(value => {
	         	if(value){
	         		that.$http.delete(`recruiter_tags/${that.rectag_id}`).then(function(response){
	         			that.$emit('deleted');
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
				this.$refs['rectag-cru-modal'].show()
			}
			if(cruType=='update'){
				this.rectag_id = data.id;
				this.cruType='update';
				this.form.setModel(data);
				this.$refs['rectag-cru-modal'].show()
			}
			if(cruType=='status'){
				this.rectag_id = data.id;
				this.form.setModel(data);
				this.showStatusConfirmationModal();
			}
		},
		submit(){
			if(this.cruType=='create'){
				this.form.post();
			}
			else{
				this.form.patch(`recruiter_tags/${this.rectag_id}`);
			}
		},
	},
	computed:{
		form(){
			return this.$refs['rectag-cru-modal'].$scopedSlots.default()[0].context.$refs['rectag-form'];
		}
	},
	components:{
		'rectag-form': require(`./form-partials/partial.rectag.vue`).default,
	}
}
</script>
