<template>
<div>
	<b-modal id="company-cru-modal" ref="company-cru-modal" :title="((cruType=='create')?'Add ':'Edit ')+'Company'" class="modal-top" hide-footer static no-close-on-esc no-close-on-backdrop @shown="processModalShown">
     	<kr-form ref="company-form" v-slot="{flags,actions,data}" :options="formOptions" class="my-2">
	    	<company-form v-if="forms=='basic'" :data="data" @submit="!(flags.invalid || !flags.valid)?submit():''"></company-form>
	    	<company-public-form v-if="forms=='public'" :data="data" @submit="!(flags.invalid || !flags.valid)?submit():''"></company-public-form>
	    	<company-private-form v-if="forms=='private'" :data="data" @submit="!(flags.invalid || !flags.valid)?submit():''"></company-private-form>
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
			status:{default:'active',rules:''},
			company_private:{default:'',rules:''},
			company_public:{default:'',rules:''},
			contact:{default:'',rules:''},
			address:{default:'',rules:''},
			website:{default:'',rules:''},
			size:{default:'',rules:''},
      locations:{default:[]},
      locations_others:{default:[]},
			type:{default:'',rules:''},
  			industries:{default:[],rules:''},
		};
		var privateFormFields = {
			company_private:{default:'',rules:''},
			description_private:{default:'',rules:''},
		};
		var publicFormFields = {
			company_public:{default:'',rules:''},
		    description_public:{default:'',rules:''},
		};
		return{
			cruType:'create',
			company_id:'',
			forms:'basic',
			basicFormFields:basicFormFields,
			privateFormFields:privateFormFields,
			publicFormFields:publicFormFields,
			formOptions:{
		        fields:basicFormFields,
		        urls:{
		          	post:'companies'
		        },
		        successCallback:function(response){
		        	if(that.cruType=='create'){
		        		that.$emit('created',response.data.data);
		        		that.$refs['company-cru-modal'].hide()
		        	}else{
		        		that.$emit('updated',response.data.data);
		        		that.$refs['company-cru-modal'].hide()
		        	}
		        },
		    },
		}
	},
	methods:{
		processModalShown(){
			if(this.forms=='basic'){
				document.getElementById("private_name_input").focus();
			}
		},
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
		openModal(data={},cruType='create',included='basic'){
			this.forms = included;
			this.resetFormDefinitions();
			if(cruType=='create'){
				this.cruType='create';
				this.form.reset();
			}
			if(cruType=='update'){
				this.company_id = data.id;
				this.cruType='update';
				this.form.setModel(data);
			}
			this.$refs['company-cru-modal'].show()
		},
		submit(){
			if(this.cruType=='create'){
				this.form.post();
			}
			else{
				this.form.patch(`companies/${this.company_id}`);
			}
		},
	},
	computed:{
		form(){
			return this.$refs['company-cru-modal'].$scopedSlots.default()[0].context.$refs['company-form'];
		}
	},
	components:{
		'company-form': require(`./form-partials/partial.company.vue`).default,
		'company-private-form': require(`./form-partials/partial.company-private.vue`).default,
		'company-public-form': require(`./form-partials/partial.company-public.vue`).default,
	}
}
</script>
