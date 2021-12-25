<template>
<div v-if="component_done_loading">
	<b-card no-body class="default-border">
		<div class="_p-20px">
			<div class="row">
				<div class="col-md-2">

				</div>
				<div class="col-10">
					<div class="row">
						<div class="col-6">
							<p class="_215px _mb-10px font-weight-bold">
			          			{{candidate.name}}
			          		</p>
						</div>
						<div class="col-6 d-flex justify-content-end">
							<b-button v-if="!candidate.isBookmarked"class="_mr-20px" variant="outline-secondary" size="sm" style="height:25px" @click="toggleBookmark">Add Bookmark</b-button>
							<b-button v-else class="_mr-20px" variant="outline-primary" size="sm" style="height:25px" @click="toggleBookmark">Remove Bookmark</b-button>
			      			<span  class="_143px _mr-20px"><i class="ion ion-md-information-circle mr-2"></i> Status
						      	<b-badge v-if="candidate.status=='active'" variant="success" class="default">Active</b-badge>
						        <b-badge v-else-if="candidate.status=='flagged'" variant="success" class="default">Flagged</b-badge>
						        <b-badge v-else-if="candidate.status=='deleted'" variant="info" class="default">Deleted</b-badge>
						    </span>
						    <b-link :to="{name:'candidates.view',params:{id:candidate.id}}" target="_blank"><i class="ion ion-md-open mr-2"></i></b-link>
			          	</div>
					</div>
					<div class="row">
			          	<div class="col-xs-12 col-md-3">
			          		<p class="_16px _mb-10px font-weight-bold" :class="{'na':!candidate.current_company}">
			          			{{candidate.current_company}}
			          		</p>
			          		<p class="_16px _mb-10px font-weight-light" :class="{'na':!candidate.current_department}">{{candidate.current_department}}</span>
			          		<p class="_16px _mb-10px font-weight-semibold" :class="{'na':!candidate.current_title}">{{candidate.current_title}}</p>
			          		<p class="_16px _mb-10px font-weight-light">
				    			<i class="ion ion-md-pin _mr-10px"></i>
				    			<template v-for="(location,location_idx) in candidate.locations">
				    				<template v-if="location_idx!=0"><span class="mx-1">,</span></template>
				    				<span class="mr-1">{{location}}</span>
				    			</template>
				                <span v-if="candidate.locations==null||candidate.locations.length==0" class="na"></span>
				    		</p>
			          	</div>
			          	<div class="col-xs-12 col-md-6">
			          		<div class="row">
			          			<div class="_14.3px _mb-10px col-md-6 d-flex">
			          				<div><b>Bar</b> </div>
			          				<div class="font-weight-light _ml-10px" :class="{'na':!candidate.cache_bar}">
			          					<template v-for="(bar,bar_idx) in candidate.cache_bar">
					    					<template v-if="bar_idx!=0"><span class="mx-1">,</span></template>
					    					<span class="mr-1">{{bar.location}} {{bar.year?('('+bar.year+')'):''}}</span>
					    				</template>
				    				</div>
			          			</div>
			          			<p class="_14.3px _mb-10px col-md-4"><b>PQE</b>
			          				<span class="font-weight-light _ml-10px" :class="{'na':!candidate.pqe_start}">
				          				<template v-if="candidate.pqe_start">
				          					{{currentYear - candidate.pqe_start}}
				          				</template>
				          			</span>
			          			</p>
			          		</div>
			          		<div>
		              			<p class="_14.3px mb-0 font-weight-bold">Work Experiences</p>
		              			<div class="border-bottom border-warning w-50"></div>
		              			<p class="_14.3px font-weight-light">
		              				<template v-for="(work,idx) in candidate.cache_work_experiences">
		              					<template v-if="idx!=0">,</template>
		              					{{work.company}}
		              				</template>
		              				<template v-if="!candidate.cache_work_experiences">
		              					<span class="na"></span>
		              				</template>
		              			</p>
		              		</div>
		              		<div>
		              			<p class="_14.3px mb-0 font-weight-bold">Education</p>
		              			<div class="border-bottom border-warning w-50"></div>
		              			<p class="_14.3px font-weight-light">
		              				<template v-for="(education,idx) in candidate.cache_educations">
		              					<template v-if="idx!=0">,</template>
		              					{{education.institution}}
		              				</template>
		              				<template v-if="!candidate.cache_educations">
		              					<span class="na"></span>
		              				</template>
		              			</p>
		              		</div>
			          	</div>
			          	<div class="col-xs-12 col-md-3">
			          		<p class="_143px _mb-20px font-weight-bold"><i class="ion ion-md-mail _mr-10px"></i>
			          			<span :class="{'na':!candidate.email}">{{candidate.email}}</span>
			          		</p>
			          		<p class="_143px _mb-20px"><i class="ion ion-md-call _mr-10px"></i>
			          			<span :class="{'na':!candidate.phone}">{{candidate.phone}}</span>
			          		</p>
			          		<p class="_143px _mb-20px"><i class="fab fa-weixin _mr-10px"></i>
			          			<span :class="{'na':!candidate.wechat}">{{candidate.wechat}}</span>
			          		</p>
			          	</div>
		          	</div>
		          	<div class="row">
			          	<!--
		          		<div class="col-9 d-flex">
		          			<div class="flex-shrink-0 _16px mb-0 _mr-10px font-weight-semibold"><i class="ion ion-md-ribbon _mr-10px"style="line-height:22px"></i> Skillsets</div>
			          		<div class="mb-0" :class="{'na _16px':candidate.skillsets==null||candidate.skillsets.length==0}">
				          		<template v-for="(skillset,skillset_idx) in candidate.skillsets">
									<b-badge variant="warning" class="_143px _mr-10px _mb-10px default">{{skillset}}</b-badge>
								</template>
							</div>
		          		</div>
		          		-->

			          	<div class="col-3 d-flex _mb-10px" v-if="$can('update','Candidate')">
			          		<div class="d-sm-flex ml-auto">
							  <!--
							  <b-dropdown variant="warning" class="default-border">
							  	<template v-slot:button-content>
							    	<div class="border-right d-inline pr-2">More Actions</div>
							    </template>
							   	<kr-file v-slot="{open}" @uploaded="uploadLinkedInProfile" :options="{
									maxFiles: 1,
								    uploadInBackground: false,
								    accept:['.htm','.html']
								}">
							   		<b-dropdown-item @click="open()"><i class="ion ion-md-cloud-upload mr-2"></i>Upload LinkedIn Profile</b-dropdown-item>
	        					</kr-file>
							  </b-dropdown>
							  -->
							</div>

			          	</div>
			        </div>
				</div>
			</div>
			 <div v-if="candidate.updated_at" class="text-right _122px  text-muted font-italic"> Last updated on {{convertToReadableDate(candidate.updated_at,'ddd, DD MMM YYYY').date}} ({{convertToReadableDate(candidate.updated_at,'ddd, DD MMM YYYY').dateObj.fromNow()}})</div>
		</div>
	</b-card>
	 <div class="row">
    	<div class="col-md-8">
		    <b-card no-body class="default-border _mt-20px">
				<div class="_px-20px _pb-20px">
				  	<b-card-header header-tag="p" class="with-elements border-top-0 border-left-0 border-right-0 border-warning pl-0 pr-0" style="border-width:2px">
			        	<div class="card-header-title"> <i class="ion ion-md-eye _mr-10px"></i>RECRUITERS ONLY</div>
			        	<div v-if="$can('update','Candidate')" class="card-header-elements ml-auto">
			        		<b-button pill variant="warning" @click="$refs['candidate-cru-component'].openModal(candidate,'update','recruiter')"> <i class="ion ion-md-create"></i>&nbsp; Edit</b-button>
			       		</div>
			      	</b-card-header>
			      	<div class="row  _pt-20px">
			      		<div class="col-sm-4">
			      			<p class="_143px mb-0"><i class="ion ion-logo-linkedin _mr-10px"></i>LinkedIn URL</p>
				      		<span v-if="!candidate.linkedin_url" class="_ml-20px na"></span>
				      		<div v-else class="_ml-20px _122px">
				      			<a :href="candidate.linkedin_url" target="_blank">{{candidate.linkedin_url}}</a>
				      		</div>
			      		</div>
			      		<div class="col-sm-4">
			      			<p class="_143px mb-0"><i class="ion ion-md-business _mr-10px"></i>Profile URL</p>
				      		<span v-if="!candidate.profile_url" class="_ml-20px na"></span>
				      		<div v-else class="_ml-20px _122px">
				      			<a :href="candidate.profile_url" target="_blank">{{candidate.profile_url}}</a>
				      		</div>
			      		</div>
			      		<div class="col-sm-4">
			      			<p class="_143px mb-0"><i class="ion ion-md-ribbon _mr-10px"></i>Speciality</p>
				      		<div class="_ml-20px">
		      					<template v-for="(speciality,speciality_idx) in candidate.speciality">
									<b-badge variant="secondary" class="_143px _mr-10px _mb-10px default">{{speciality}}</b-badge>
								</template>
				            	<span v-if="candidate.speciality==null||candidate.speciality.length==0" class="na"></span>
				            </div>
			      		</div>
			      	</div>
			      	<div class="row  _pt-20px">
			      		<div class="col-sm-4">
			      			<p class="_143px mb-0"><i class="ion ion-md-eye _mr-10px"></i>Open to Work</p>
				      		<div class="_ml-20px _122px">
				      			{{candidate.actively_looking=='1'?'Yes':'No'}}
				      		</div>
			      		</div>
			      		<div class="col-sm-4">
			      			<p class="_143px mb-0"><i class="ion ion-md-eye _mr-10px"></i>Response Level</p>
				      		<div class="_ml-20px _122px">
				      			{{candidate.response_level ? candidate.response_level : '-'}}
				      		</div>
			      		</div>
			      	</div>
			      	<div class="row _pt-20px">
			      		<div class="col-12">
			          		<p class="_143px mb-0"><i class="ion ion-md-ribbon _mr-10px"></i>Areas of Practice (Legal)</p>
			          		<div class="_ml-20px">
					     		<template v-for="(tag,tag_idx) in candidate.recruiter_tags">
									<b-badge variant="warning" class="_143px _mr-10px _mb-10px default">{{tag}}</b-badge>
								</template>
	              				<template v-show="candidate.other_tags">
	              					, {{candidate.other_tags}}
	              				</template>
								<span v-if="(candidate.recruiter_tags==null||candidate.recruiter_tags.length==0)&&candidate.other_tags == ''" class="na"></span>
							</div>
			          	</div>
			      	</div>
		    	</div>
		    </b-card>
    		<b-card no-body class="default-border _mt-20px">
		  		<div class="_px-20px _pb-20px">
				  	<b-card-header header-tag="p" class="with-elements border-top-0 border-left-0 border-right-0 border-warning pl-0 pr-0" style="border-width:2px">
			        	<div class="card-header-title">CANDIDATE PROFILE</div>
			        	<div v-if="$can('update','Candidate')" class="card-header-elements ml-auto">
			        		<b-button pill variant="warning" @click="$refs['candidate-cru-component'].openModal(candidate,'update')"> <i class="ion ion-md-create"></i>&nbsp; Edit</b-button>
			       		</div>
			      	</b-card-header>
			      	<div class="row _pt-20px">
			      		<div class="col-sm-3">


			      		</div>
			      		<div class="col-sm-3">
			      			<p class="_143px _mb-20px">
				 				<span class="text-muted">
				 					Name
				 				</span>
				 				<br/>
				 				<span class="font-weight-bold" :class="{'na':!candidate.name}">{{candidate.name}}</span>
				 			</p>
				 			<p class="_143px _mb-20px">
				 				<span class="text-muted">
				 					Birthdate
				 				</span>
				 				<br/>
				 				<span class="font-weight-bold" :class="{'na':!candidate.birthdate}">{{convertToReadableDate(candidate.birthdate,'YYYY-MM-DD',{locale:'YYYYMMDD'}).date}}</span>
				 			</p>
			      		</div>
			      		<div class="col-sm-3">
			      			<p class="_143px _mb-20px">
				 				<span class="text-muted">
				 					Email
				 				</span>
				 				<br/>
				 				<span class="font-weight-bold" :class="{'na':!candidate.email}">{{candidate.email}}</span>
				 			</p>
			      			<p class="_143px _mb-20px">
				 				<span class="text-muted">
				 					Email (Alt)
				 				</span>
				 				<br/>
				 				<span class="font-weight-bold" :class="{'na':!candidate.email_alt}">{{candidate.email_alt}}</span>
				 			</p>
			      		</div>
			      		<div class="col-sm-3">
			      			<p class="_143px _mb-20px">
				 				<span class="text-muted">
				 					Contact No.
				 				</span>
				 				<br/>
				 				<span class="font-weight-bold" :class="{'na':!candidate.phone}">{{candidate.phone}}</span>
				 			</p>
				 			<p class="_143px _mb-20px">
				 				<span class="text-muted">
				 					Contact No. (Alt)
				 				</span>
				 				<br/>
				 				<span class="font-weight-bold" :class="{'na':!candidate.phone_alt}">{{candidate.phone_alt}}</span>
				 			</p>
			      		</div>
			      	</div>
			      	<div class="row _pt-20px">
			      		<div class="col-12">
			          		<p class="_143px mb-0"><i class="ion ion-md-ribbon _mr-10px"></i>Skillsets</p>
			          		<div class="_ml-20px">
					     		<template v-for="(skillset,skillset_idx) in candidate.skillsets">
									<b-badge variant="warning" class="_143px _mr-10px _mb-10px default">{{skillset}}</b-badge>
								</template>
								<span v-if="candidate.skillsets==null||candidate.skillsets.length==0" class="na"></span>
							</div>
			          	</div>
			      	</div>
			    </div>
		    </b-card>
		    <association-index></association-index>
		    <b-card no-body class="default-border _mt-20px">
		  		<div class="_px-20px _pb-20px">
				  	<b-card-header header-tag="p" class="with-elements border-top-0 border-left-0 border-right-0 border-warning pl-0 pr-0" style="border-width:2px">
			        	<div class="card-header-title">SUMMARY</div>
			        	<div v-if="$can('update','Candidate')" class="card-header-elements ml-auto">
			        		<b-button pill variant="warning" @click="$refs['candidate-cru-component'].openModal(candidate,'update','summary')"> <i class="ion ion-md-create"></i>&nbsp; Edit</b-button>
			       		</div>
			      	</b-card-header>
			      	<div class="_pt-20px">
		      			<div class="summary" :class="{'na':!candidate.summary}" v-html="candidate.summary"></div>
		      		</div>
			    </div>
			</b-card>
			 <b-card no-body class="default-border _mt-20px">
				<div class="_px-20px _pb-20px">
				  	<b-card-header header-tag="p" class="with-elements border-top-0 border-left-0 border-right-0 border-warning pl-0 pr-0" style="border-width:2px">
			        	<div class="card-header-title">LOCATION DETAILS</div>
			        	<div v-if="$can('update','Candidate')" class="card-header-elements ml-auto">
			        		<b-button pill variant="warning"  @click="$refs['candidate-cru-component'].openModal(candidate,'update','location')"> <i class="ion ion-md-create"></i>&nbsp; Edit</b-button>
			       		</div>
			      	</b-card-header>
			      	<div class="row _pt-20px">
			      		<div class="col-sm-6">
			      			<p class="_143px _mb-20px">
				 				<span class="text-muted">
				 					Nationality
				 				</span>
				 				<br/>
				 				<span class="font-weight-bold" :class="{'na':!candidate.nationality}">{{candidate.nationality}}</span>
				 			</p>
			      			<p class="_143px _mb-20px">
				 				<span class="text-muted">
				 					Identity No.
				 				</span>
				 				<br/>
				 				<span class="font-weight-bold" :class="{'na':!candidate.identity_no}">{{candidate.identity_no}}</span>
				 			</p>
			      		</div>
			      		<div class="col-sm-6">
			      			<p class="_143px _mb-20px">
				 				<span class="text-muted">
				 					Current Cities
				 				</span>
				 				<br/>
				 				<template v-for="(location,location_idx) in candidate.locations">
				    				<template v-if="location_idx!=0"><span class="mx-1"> | </span></template>
				    				<span class="mr-1 font-weight-bold">{{location}}</span>
				    			</template>
				 			</p>
			      			<p class="_143px _mb-20px">
				 				<span class="text-muted">
				 					Permit No.
				 				</span>
				 				<br/>
				 				<span class="font-weight-bold" :class="{'na':!candidate.work_permit_no}">{{candidate.work_permit_no}}</span>
				 			</p>
			      		</div>
			      	</div>
		    	</div>
		    </b-card>
		    <b-card no-body class="default-border _mt-20px">
		  		<div class="_px-20px _pb-20px">
				  	<b-card-header header-tag="p" class="with-elements border-top-0 border-left-0 border-right-0 border-warning pl-0 pr-0" style="border-width:2px">
			        	<div class="card-header-title">SALARY DETAILS</div>
			        	<div v-if="$can('update','Candidate')" class="card-header-elements ml-auto">
			        		<b-button pill variant="warning" @click="$refs['candidate-cru-component'].openModal(candidate,'update','salary')"> <i class="ion ion-md-create"></i>&nbsp; Edit</b-button>
			       		</div>
			      	</b-card-header>
			      	<div class="row _pt-20px">
			      		<div class="col-sm-6">
			      			<p class="_143px _mb-20px">
				 				<span class="text-muted">
				 					Current Salary
				 				</span>
				 				<br/>
				 				<span class="font-weight-bold" :class="{'na':!candidate.current_salary}">{{candidate.current_salary}}</span>
				 			</p>
			      			<p class="_143px _mb-20px">
				 				<span class="text-muted">
				 					Current Bonuses
				 				</span>
				 				<br/>
				 				<span class="font-weight-bold" :class="{'na':!candidate.current_bonuses}">{{candidate.current_bonuses}}</span>
				 			</p>
				 			<p class="_143px _mb-20px">
				 				<span class="text-muted">
				 					Notice Period
				 				</span>
				 				<br/>
				 				<span class="font-weight-bold" :class="{'na':!candidate.current_notice_period}">{{candidate.current_notice_period}}</span>
				 			</p>
			      		</div>
			      		<div class="col-sm-6">
			      			<p class="_143px _mb-20px">
				 				<span class="text-muted">
				 					Expected Salary
				 				</span>
				 				<br/>
				 				<span class="font-weight-bold" :class="{'na':!candidate.expected_salary}">{{candidate.expected_salary}}</span>
				 			</p>
				 			<p class="_143px _mb-20px">
				 				<span class="text-muted">
				 					Expected Bonuses
				 				</span>
				 				<br/>
				 				<span class="font-weight-bold" :class="{'na':!candidate.expected_bonuses}">{{candidate.expected_bonuses}}</span>
				 			</p>
			      		</div>
			      	</div>
			    </div>
			</b-card>
			<bar-index></bar-index>
			<work-index></work-index>
			<language-index></language-index>
			<education-index></education-index>
			<deal-index></deal-index>
    	</div>
    	<div class="col-md-4">
    		<!--<linkedin-index></linkedin-index>-->
    		<attachment-index></attachment-index>
    		<communication-index></communication-index>
    	</div>
    </div>
    <candidate-cru ref="candidate-cru-component" @updated="setCandidate"></candidate-cru>
</div>

</template>


<script>
export default{
	name:'pages.candidates.view',
	data(){
		var that = this;
		return{
			candidate:null,
			currentYear:new Date().getFullYear(),
		}
	},
	created(){
		this.component_done_loading = false;
	},
	mounted(){
		this.fetchCandidate();
	},
	methods:{
		toggleBookmark(){
			var that = this;
			this.$http.post(`users/${this.krAuth.user().id}/bookmarks`,{candidate_id:this.candidate.id}).then(function(response){
				that.candidate.isBookmarked = !that.candidate.isBookmarked;
			});
		},
		uploadLinkedInProfile(data){
			if(data.filesUploaded.length==0){
				return;
			}
			this.$http.post('https://api-dev.pullmanmorrison.com/support/parse-linkedin-file',{file:process.env.VUE_APP_FILESTACK_SRC_URL+data.filesUploaded[0].key,candidate_id:this.$route.params.id}).then(function(response){
				console.log(response);
			});
		},
		setCandidate(data){
			this.candidate = data;
		},
		fetchCandidate(){
			var that = this;
			this.$http.get(`candidates/${this.$route.params.id}`).then(
				function(response){
					that.setCandidate(response.data.data);
					that.component_done_loading = true;
				}
			);
		},
	},
	components:{
		'candidate-cru': require(`./cru.vue`).default,
		'work-index': require(`./works/index.vue`).default,
		'education-index': require(`./educations/index.vue`).default,
		'communication-index': require(`./communications/index.vue`).default,
		'language-index': require(`./languages/index.vue`).default,
		'deal-index': require(`./deals/index.vue`).default,
		'bar-index': require(`./bars/index.vue`).default,
		'association-index': require(`./associations/index.vue`).default,
		'attachment-index': require(`./attachments/index.vue`).default,
		'linkedin-index': require(`./linkedin/index.vue`).default
	}
}
</script>
<style>
	div.summary > p{
		margin-bottom:0px !important;
	}
</style>
