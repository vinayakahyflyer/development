<template>
<div>
	<b-modal id="deal-cru-modal" ref="deal-cru-modal" :title="((cruType=='create')?'Add ':'Edit ')+'Deal'" class="modal-top" hide-footer static no-close-on-esc no-close-on-backdrop>
     	<kr-form ref="deal-form" v-slot="{flags,actions,data}" :options="formOptions" class="my-2">
	    	<deal-form :data="data" @submit="!(flags.invalid || !flags.valid)?submit():''"></deal-form>
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
			deal_id:'',
			candidate_id:this.$attrs.candidate_id,
			formOptions:{
		        fields:{
		        	title:{default:'',rules:''},
		        	summary:{default:'',rules:''},
		        },
		        successCallback:function(response){
		        	if(that.cruType=='create'){
		        		that.$emit('created',response.data.data);
		        		that.$refs['deal-cru-modal'].hide()
		        	}else{
		        		that.$emit('updated',response.data.data);
		        		that.$refs['deal-cru-modal'].hide()
		        	}
		        },
		    },
		}
	},
	methods:{
		showDeleteConfirmationModal(){
	        this.$bvModal.msgBoxConfirm('Please confirm that you want to delete this deal.', {
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
		           	this.$http.delete(`candidates/${this.candidate_id}/deals/${this.deal_id}`).then(function(response){
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
				this.$refs['deal-cru-modal'].show()
			}
			else if(cruType=='update'){
				this.deal_id = data.id;
				this.cruType='update';
				this.form.setModel(data);
				this.$refs['deal-cru-modal'].show()
			}
			else if(cruType=='delete'){
				this.deal_id = data.id;
				this.cruType='delete';
				this.showDeleteConfirmationModal();
			}
			
		},
		submit(){
			if(this.cruType=='create'){
				this.form.post(`candidates/${this.candidate_id}/deals`);
			}
			else{
				this.form.patch(`candidates/${this.candidate_id}/deals/${this.deal_id}`);
			}
		},
	},
	computed:{
		form(){
			return this.$refs['deal-cru-modal'].$scopedSlots.default()[0].context.$refs['deal-form'];
		}
	},
	components:{
		'deal-form': require(`./form-partials/partial.deal.vue`).default,
	}
}
</script>