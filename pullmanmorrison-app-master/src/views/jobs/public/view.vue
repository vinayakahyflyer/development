<template>
	<div>
	  	<b-jumbotron bg-variant="jobotron">
		    <template v-slot:header>
		    	<div class="heading text-center">
			    	<span class="font-weight-bold" style="font-size: 24px;">{{job.job_title}}</span>
			    	<br/>
			    	<span class="font-weight-normal" style="font-size: 18px;">
			    		AT
			    		<span class="text-warning font-weight-bold">{{job.company_public}}</span>
			    	</span>
			    </div>
		    </template>

		    <template v-slot:lead>
		    	<div class="text-center job-header-description">
		    	<i class="ion ion-md-pin pr-2"></i>
		    		<template v-for="(location,location_idx) in job.locations">
                        <span class="text-uppercase">{{location}}</span>
                        |
                    </template>
                    	<span class="text-uppercase"> POSTED {{diffFromNow(job.created_at)}}</span> | 
			      		<template v-for="(type,type_idx) in job.employment_type">
                            <b-badge variant="success" class="text-capitalize _mr-10px _mb-10px _16px big text-success default">{{type}}</b-badge>
                        </template>
			    </div>
		   	</template>
	  	</b-jumbotron>
	  	<section class="bg-white">
		  	<div class="container">
		  		<div class="row pt-5 pb-5">
		  			<div class="col-12">
		  				<p class="h5 font-weight-bold">REFERENCE NO. {{job.reference_no}}</p>
		  				<div class="col-12 d-flex pl-0 pr-0" :class="{'_mb-20px':job.speciality==null||job.speciality.length==0,'_mb-10px':!(job.speciality==null||job.speciality.length==0)}">
		                    <div class="flex-shrink-0 h5 mb-0 _mr-10px font-weight-bold">SPECIALITY</div>
		                    <div class="mb-0" :class="{'na h5':job.speciality==null||job.speciality.length==0}">
		                        <template v-for="(speciality,speciality_idx) in job.speciality">
		                            <b-badge variant="secondary" class="h5 _mr-10px _mb-10px default">{{speciality}}</b-badge>
		                        </template>
		                    </div>
		                </div>
			      		<div class="_143px description _mb-20px" :class="{'na':!job.job_description_public}" v-html="job.job_description_public">
			      			{{job.job_description_public}}
			      		</div>
		                <div class="col-12 d-flex pl-0 pr-0" :class="{'_mb-20px':job.skillsets==null||job.skillsets.length==0,'_mb-10px':!(job.skillsets==null||job.skillsets.length==0)}">
		                    <div class="flex-shrink-0 h5 mb-0 _mr-10px font-weight-bold">SKILLSETS</div>
		                    <div class="mb-0" :class="{'na h5':job.skillsets==null||job.skillsets.length==0}">
		                        <template v-for="(skillset,skillset_idx) in job.skillsets">
		                            <b-badge variant="warning" class="h5 _mr-10px _mb-10px default">{{skillset}}</b-badge>
		                        </template>
		                    </div>
		                </div>	
		  				<div class="_mb-20px">
			      			<p class="h5 mb-0 font-weight-bold">ABOUT THE HIRER</p>
			      		</div>
			      		<div class="_143px description _mb-20px" :class="{'na':!job.description_public}" v-html="job.description_public">
			      			{{job.description_public}}
			      		</div>
		  			</div>
		  		</div>
		  		<div class="row pb-5" v-show="showApplicationForm">
		  			<div class="col-8" v-if="!applied">
		  				<h2 class="text-center">APPLY FOR THIS JOB</h2>
			  			 <kr-form ref="form" v-slot="{flags,actions,data}" :options="formOptions">
			  			 	<div class="row">
			  			 		<div class="col-6">
			  			 			<b-form-group label="Upload Your CV">
							      		{{filename}}
				  			 			<kr-file v-slot="{open}" :options="{
												maxFiles: 1,
									    		uploadInBackground: false,
											}" @uploaded="saveData">
								   			<b-button variant="" @click="open()"><i class="ion ion-md-cloud-upload mr-2"></i>Choose File</b-button>
		        						</kr-file>
		        					</b-form-group>
			  			 		</div>
			  			 	</div>
				  			<div class="row">
				  				<div class="col-6">
				  					<kr-form-i name="firstname" v-slot="{validation}" :rules="data.config.firstname.rules">
								      <b-form-group label="Firstname">
								        <b-input v-model="data.model.firstname" :state="validation"  @keyup.enter="$emit('submit',$event)"/>
								      </b-form-group>
								    </kr-form-i>
				  				</div>
				  				<div class="col-6">
				  					<kr-form-i name="lastname" v-slot="{validation}" :rules="data.config.lastname.rules">
								      <b-form-group label="Lastname">
								        <b-input v-model="data.model.lastname" :state="validation"  @keyup.enter="$emit('submit',$event)"/>
								      </b-form-group>
								    </kr-form-i>
				  				</div>
				  			</div>
				  			<div class="row">
				  				<div class="col-6">
				  					<kr-form-i name="email" v-slot="{validation}" :rules="data.config.email.rules">
								      <b-form-group label="Email">
								        <b-input v-model="data.model.email" :state="validation"  @keyup.enter="$emit('submit',$event)"/>
								      </b-form-group>
								    </kr-form-i>
				  				</div>
				  				<div class="col-6">
				  					<kr-form-i name="phone" v-slot="{validation}" :rules="data.config.phone.rules">
								      <b-form-group label="Contact No.">
								        <b-input v-model="data.model.phone" :state="validation"  @keyup.enter="$emit('submit',$event)"/>
								      </b-form-group>
								    </kr-form-i>
				  				</div>
				  			</div>
				  			<div class="row">
				  				<div class="col-12">
				  					<kr-form-i name="remarks" v-slot="{validation}" :rules="data.config.remarks.rules">
								      <b-form-group label="Message">
								        <b-textarea v-model="data.model.remarks" :state="validation" rows="5"  @keyup.enter="$emit('submit',$event)"/>
								      </b-form-group>
								    </kr-form-i>
				  				</div>	
				  			</div>
				  			<div class="flex">
				  				<b-button variant="outline-warning" :disabled="flags.invalid || !flags.valid" @click="actions.post()" >APPLY FOR THIS JOB</b-button>
				  			</div>
				  		</kr-form>
				  	</div>
				  	<div class="col-8" v-else>
		  				<h2 class="text-center">YOU HAVE APPLIED FOR THIS JOB</h2>
		  			</div>
		  		</div>
		  	</div>
		</section>
	</div>
</template>
<script>
export default{
	data(){
		var that = this;
		return{
			job:{},
			component_done_loading:false,
			formOptions:{
				fields:{
		          firstname:{value:'',rules:'required'},
		          lastname:{rules:'required'},
		          email:{rules:'email|required'},
		          phone:{rules:'required'},
		          remarks:{rules:''},
		          attachments:{default:[]},
		        },
		        urls:{
		          post:`p/jobs/${this.$route.params.id}`
		        },
		        successCallback:function(response){
		         	that.applied = true;
		        },
		        failCallback:function(errors){
		          var message = that._.get(errors,'response.data.message',errors.message);
		        },    
			},
			filename:'',
			applied:false,
		}
	},
	created(){
		var that = this;
		this.fetch().then(function(response){
			that.job = response.data.data;
		})
	},
	computed: {
	
		showApplicationForm () {
			
			return location.href.indexOf ( 'chatfuel' ) == -1;
			
		}	
		
	},
	methods:{
		saveData(data){
			if(data.filesUploaded.length==0){
				return;
			}
			let datum = data.filesUploaded[0];
			datum.url = process.env.VUE_APP_FILESTACK_SRC_URL+data.filesUploaded[0].key;
			datum.table = '';
			datum.record_id='';
			this.$refs.form.model.attachments = [];
			if(this.$refs.form.model.attachments.length==1){
				this.$refs.form.model.attachments.pop();
			}
			delete datum.status;
			this.$refs.form.model.attachments.push(datum);
			this.filename = data.filesUploaded[0].filename;
		},
		fetch(){
			return this.$http.get('p/jobs/'+this.$route.params.id);
		}
	}
}
</script>
<style scoped>	
	h1 .heading{
    	margin-bottom: 40px;
	}
	.bg-jobotron{
		background: #fafafa;
		margin-bottom:0px !important;
	}
	.job-header-description{
		color:#868e96;
	}
</style>