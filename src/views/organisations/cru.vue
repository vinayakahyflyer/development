<template>
<div>
	<b-modal id="organisation-cru-modal" ref="organisation-cru-modal" :title="((cruType=='create')?'Add ':'Edit ')+'Organization'" class="modal-top" hide-footer static no-close-on-esc no-close-on-backdrop>
     	<kr-form ref="organisation-form" v-slot="{flags,actions,data}" :options="formOptions" class="my-2">
	    	<organisation-form :data="data"  @submit="!(flags.invalid || !flags.valid)?submit():''"></organisation-form>
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
			formOptions:{
		        fields:{
		          	organisation:{value:'',rules:'required'},
		          	contact_person:{rules:''},
		          	contact_email:{rules:'email'},
		          	contact_number:{rules:''},
		          	website:{rules:''},
		          	job_reference_prefix:{value:'',rules:''},
		        },
		        urls:{
		          	post:'organisations'
		        },
		        successCallback:function(response){
		        	if(that.cruType=='create'){
		        		that.$emit('created',response.data.data);
		        		that.$refs['organisation-cru-modal'].hide()
		        	}else{
		        		that.$emit('updated',response.data.data);
		        		that.$refs['organisation-cru-modal'].hide()
		        	}
		        },
		    },
		}
	},
	methods:{
		openModal(data={},cruType='create'){
			if(cruType=='create'){
				this.cruType='create';
				this.form.reset();
			}
			if(cruType=='update'){
				this.organisation_id = data.id;
				this.cruType='update';
				this.form.setModel(data);
			}
			this.$refs['organisation-cru-modal'].show()
		},
		submit(){
			if(this.cruType=='create'){
				this.form.post();
			}
			else{
				this.form.patch(`organisations/${this.organisation_id}`);
			}
		},
	},
	computed:{
		form(){
			return this.$refs['organisation-cru-modal'].$scopedSlots.default()[0].context.$refs['organisation-form'];
		}
	},
	components:{
		'organisation-form': require(`./form-partials/partial.organisation.vue`).default,
	}
}
</script>