<template>
<div>
	<b-modal id="user-cru-modal" ref="user-cru-modal" :title="((cruType=='create')?'Add ':'Edit ')+'Superuser'" class="modal-top" hide-footer static no-close-on-esc no-close-on-backdrop>
     	<kr-form ref="user-form" v-slot="{flags,actions,data}" :options="formOptions" class="my-2">
	    	<user-form :data="data" @submit="!(flags.invalid || !flags.valid)?submit():''"></user-form>
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
			user_id:'',
			formOptions:{
		        fields:{
		        	role_id:{default:1},
		          	name:{value:'',rules:'required'},
		          	email:{rules:'required|email'},
		          	contact_number:{rules:''},
		          	status:{default:'active',rules:'required'},
		          	password:{rules:'min:8'}
		        },
		        urls:{
		          	post:'users'
		        },
		        successCallback:function(response){
		        	if(that.cruType=='create'){
		        		that.$emit('created',response.data.data);
		        		that.$refs['user-cru-modal'].hide()
		        	}else{
		        		that.$emit('updated',response.data.data);
		        		that.$refs['user-cru-modal'].hide()
		        	}
		        },
		    },
		}
	},
	methods:{
		showStatusConfirmationModal(){
			var that =this;
			let variant ='success';
			let msg = 'Please confirm that you want to reinstate this user.';
			if(this.form.model.status=='suspended'){
				msg = 'Please confirm that you want to suspend this user.';
				variant = 'danger';
			}
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
	         		that.submit();
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
				this.$refs['user-cru-modal'].show()
			}
			if(cruType=='update'){
				this.user_id = data.id;
				this.cruType='update';
				this.form.setModel(data);
				this.$refs['user-cru-modal'].show()
			}
			if(cruType=='status'){
				this.user_id = data.id;
				this.cruType='update';
				this.form.setModel(data);
				this.showStatusConfirmationModal();
			}
		},
		submit(){
			if(this.cruType=='create'){
				this.form.post();
			}
			else{
				this.form.patch(`users/${this.user_id}`);
			}
		},
	},
	computed:{
		form(){
			return this.$refs['user-cru-modal'].$scopedSlots.default()[0].context.$refs['user-form'];
		}
	},
	components:{
		'user-form': require(`./form-partials/partial.user.vue`).default,
	}
}
</script>