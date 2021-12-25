<template>
<div>
	<b-modal id="skillset-cru-modal" ref="skillset-cru-modal" :title="((cruType=='create')?'Add ':'Edit ')+'Skillset'" class="modal-top" hide-footer static no-close-on-esc no-close-on-backdrop>
     	<kr-form ref="skillset-form" v-slot="{flags,actions,data}" :options="formOptions" class="my-2">
	    	<skillset-form :data="data" @submit="!(flags.invalid || !flags.valid)?submit():''"></skillset-form>
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
			skillset_id:'',
			formOptions:{
		        fields:{
		          	skillset:{value:'',rules:'required'},
		          	aliases:{rules:''},
		        },
		        urls:{
		          	post:'skillsets'
		        },
		        successCallback:function(response){
		        	if(that.cruType=='create'){
		        		that.$emit('created',response.data.data);
		        		that.$refs['skillset-cru-modal'].hide()
		        	}else{
		        		that.$emit('updated',response.data.data);
		        		that.$refs['skillset-cru-modal'].hide()
		        	}
		        },
		    },
		}
	},
	methods:{
		showStatusConfirmationModal(){
			var that =this;
			let variant ='danger';
			let msg = 'Please confirm that you want to delete this skillset.';
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
	         		that.$http.delete(`skillsets/${that.skillset_id}`).then(function(response){
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
				this.$refs['skillset-cru-modal'].show()
			}
			if(cruType=='update'){
				this.skillset_id = data.id;
				this.cruType='update';
				this.form.setModel(data);
				this.$refs['skillset-cru-modal'].show()
			}
			if(cruType=='status'){
				this.skillset_id = data.id;
				this.form.setModel(data);
				this.showStatusConfirmationModal();
			}
		},
		submit(){
			if(this.cruType=='create'){
				this.form.post();
			}
			else{
				this.form.patch(`skillsets/${this.skillset_id}`);
			}
		},
	},
	computed:{
		form(){
			return this.$refs['skillset-cru-modal'].$scopedSlots.default()[0].context.$refs['skillset-form'];
		}
	},
	components:{
		'skillset-form': require(`./form-partials/partial.skillset.vue`).default,
	}
}
</script>