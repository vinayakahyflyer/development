<template>
<div>
	<b-modal id="candidate-cru-modal" ref="candidate-cru-modal" :title="((cruType=='create')?'Add ':'Edit ')+'Candidate'" class="modal-top" hide-footer static no-close-on-esc no-close-on-backdrop>
     	<kr-form ref="candidate-form" v-slot="{flags,actions,data}" :options="formOptions" class="my-2">
	    	<candidate-form v-if="forms=='basic'" :data="data" @submit="!(flags.invalid || !flags.valid)?submit():''"></candidate-form>
	    	<salary-form v-if="forms=='salary'" :data="data" @submit="!(flags.invalid || !flags.valid)?submit():''"></salary-form>
	    	<recruiter-form v-if="forms=='recruiter'" :data="data" @submit="!(flags.invalid || !flags.valid)?submit():''"></recruiter-form>
	    	<summary-form v-if="forms=='summary'" :data="data" @submit="!(flags.invalid || !flags.valid)?submit():''"></summary-form>
	    	<location-form v-if="forms=='location'" :data="data" @submit="!(flags.invalid || !flags.valid)?submit():''"></location-form>
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
			vertical:{default:'legal',rules:''},
			status:{default:'active',rules:''},
			name:{default:'',rules:'required'},
			email:{default:'',rules:'email'},
			email_alt:{default:'',rules:'email'},
			phone:{default:'',rules:''},
			phone_alt:{default:'',rules:''},
			wechat:{default:'',rules:''},
			//pqe_start:{default:'1992',rules:''},
			birthdate:{default:'',rules:''},
			skillsets:{default:[],rules:''},
		};
		var salaryFormFields = {
			current_salary:{default:'',rules:''},
			current_bonuses:{default:'',rules:''},
			current_notice_period:{default:'',rules:''},
			expected_salary:{default:'',rules:''},
			expected_bonuses:{default:'',rules:''},
		};
		var recruiterFormFields = {
			linkedin_url:{default:'',rules:''},
			profile_url:{default:'',rules:''},
			speciality:{default:[],rules:''},
			recruiter_tags:{default:[],rules:''},
			other_tags:{default:'',rules:''},
			actively_looking:{default:'1',rules:''},
			response_level:{default:'',rules:''},
		};
		var summaryFormFields = {
			summary:{default:'',rules:''},
		};
		var locationFormFields = {
			nationality:{default:'',rules:''},
			identity_no:{default:'',rules:''},
			work_permit_no:{default:'',rules:''},
			locations:{default:[],rules:''},
		};
		return{
			cruType:'create',
			candidate_id:'',
			forms:'basic',
			basicFormFields:basicFormFields,
			salaryFormFields:salaryFormFields,
			recruiterFormFields:recruiterFormFields,
			summaryFormFields:summaryFormFields,
			locationFormFields:locationFormFields,
			formOptions:{
		        fields:basicFormFields,
		        urls:{
		          	post:'candidates'
		        },
		        successCallback:function(response){
		        	if(that.cruType=='create'){
		        		that.$emit('created',response.data.data);
		        		that.$refs['candidate-cru-modal'].hide()
		        	}else{
		        		that.$emit('updated',response.data.data);
		        		that.$refs['candidate-cru-modal'].hide()
		        	}
		        },
		    },
		}
	},
	methods:{
		resetFormDefinitions(){
			if(this.forms=='basic'){
				this.formOptions.fields = this.basicFormFields;
			}
			else if(this.forms=='salary'){
				this.formOptions.fields = this.salaryFormFields;
			}
			else if(this.forms=='recruiter'){
				this.formOptions.fields = this.recruiterFormFields;
			}
			else if(this.forms=='summary'){
				this.formOptions.fields = this.summaryFormFields;
			}
			else if(this.forms=='location'){
				this.formOptions.fields = this.locationFormFields;
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
				this.candidate_id = data.id;
				this.cruType='update';
				this.form.setModel(data);
			}
			this.$refs['candidate-cru-modal'].show()
		},
		submit(){
			if(this.cruType=='create'){
				this.form.post();
			}
			else{
				this.form.patch(`candidates/${this.candidate_id}`);
			}
		},
	},
	computed:{
		form(){
			return this.$refs['candidate-cru-modal'].$scopedSlots.default()[0].context.$refs['candidate-form'];
		}
	},
	components:{
		'candidate-form': require(`./form-partials/partial.candidate.vue`).default,
		'salary-form': require(`./form-partials/partial.salary.vue`).default,
		'recruiter-form': require(`./form-partials/partial.recruiters-only.vue`).default,
		'summary-form': require(`./form-partials/partial.summary.vue`).default,
		'location-form': require(`./form-partials/partial.location-details.vue`).default,
	}
}
</script>
