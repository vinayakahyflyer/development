	 <template>
<div>
	<kr-form ref="attachment-form" v-slot="{flags,actions,data}" :options="formOptions" class="my-2">
	</kr-form>
</div>
</template>

<script>
export default{
	data(){
		var that = this;
		return{
			cruType:'create',
			attachment_id:'',
			formOptions:{
		        fields:{
		   			attachments:{default:[],rules:'required'},
		        },
		        successCallback:function(response){
		        	if(that.cruType=='create'){
		        		that.$emit('created',response.data.data);
		        	}else{
		        		that.$emit('updated',response.data.data);
		        	}
		        },
		    },
		}
	},
	methods:{
		showDeleteConfirmationModal(){
	        this.$bvModal.msgBoxConfirm('Please confirm that you want to delete this attachment.', {
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
		           	this.$http.delete(`attachments/${this.attachment_id}`).then(function(response){
		           		that.$emit('deleted');
		           	}).catch(function(){

		           	});
	         	}
	         	
	        })
	        .catch(err => {
	           // An error occurred
	        })
		},
		processSubmission(data={},cruType='create'){
			if(cruType=='create'){
				this.cruType='create';
				this.form.reset();
				this.form.setModel(data);
				this.submit();
			}
			/*else if(cruType=='update'){
				this.attachment_id = data.id;
				this.cruType='update';
				this.form.setModel(data);
				this.$refs['bar-cru-modal'].show()
			}*/
			else if(cruType=='delete'){
				this.attachment_id = data.id;
				this.cruType='delete';
				this.showDeleteConfirmationModal();
			}
		},
		submit(){
			if(this.cruType=='create'){
				this.form.post(`attachments`);
			}
		},
	},
	computed:{
		form(){
			return this.$refs['attachment-form'];
		}
	},
}
</script>