<template>
<div v-if="component_done_loading">
	<job-card :job="job" :options="{hasEditButton:true,displayCandidateList:true,hasBorder:false}" @edit="$refs['job-cru-component'].openModal(job,'update')" @invited="invitedRefresh"></job-card>
	<div class="row">
    	<div class="col-md-6">
    		<b-card no-body class="default-border _mt-20px">
			  	<div class="_px-20px _pb-20px">
				  	<b-card-header header-tag="p" class="with-elements border-top-0 border-left-0 border-right-0 border-warning pl-0 pr-0" style="border-width:2px">
			        	<div class="card-header-title">JOB DESCRIPTION (MEMBERS VIEW)</div>
			        	<div v-if="$can('update','Job')" class="card-header-elements ml-auto">
			        		<b-button pill variant="warning" @click="$refs['job-cru-component'].openModal(job,'update','private')"> <i class="ion ion-md-create"></i>&nbsp; Edit</b-button>
			       		</div>
			      	</b-card-header>
			      	<div class="w-100 _pt-20px">
			      		<div class="description text-muted default-border _px-20px _py-10px" :class="{'na':!job.job_description_private}" v-html="job.job_description_private"></div>
			      	</div>
			    </div>
		    </b-card>
    	</div>
    	<div class="col-md-6">
    		<b-card no-body class="default-border _mt-20px">
			  	<div class="_px-20px _pb-20px">
				  	<b-card-header header-tag="p" class="with-elements border-top-0 border-left-0 border-right-0 border-warning pl-0 pr-0" style="border-width:2px">
			        	<div class="card-header-title">JOB DESCRIPTION (ANONYMOUS VIEW)</div>
			        	<div v-if="$can('update','Job')" class="card-header-elements ml-auto">
			        		<b-button pill variant="warning" @click="$refs['job-cru-component'].openModal(job,'update','public')"> <i class="ion ion-md-create"></i>&nbsp; Edit</b-button>
			       		</div>
			      	</b-card-header>
			      	<div class="w-100 _pt-20px">
			      		<div class="description text-muted default-border _px-20px _py-10px" :class="{'na':!job.job_description_public}" v-html="job.job_description_public"></div>
			      	</div>
			    </div>
		    </b-card>
    	</div>
    </div>
    <div class="row">
    	<div class="col-md-6">
    		<b-card no-body class="default-border _mt-20px">
			  	<div class="_px-20px _pb-20px">
				  	<b-card-header header-tag="p" class="with-elements border-top-0 border-left-0 border-right-0 border-warning pl-0 pr-0" style="border-width:2px">
			        	<div class="card-header-title">MEMBERS VIEW</div>
			        	<div v-if="$can('update','Company')" class="card-header-elements ml-auto">
			        		<b-button pill variant="warning" @click="$refs['company-cru-component'].openModal({id:job.company_id,company_private:job.company_private,description_private:job.description_private},'update','private')"> <i class="ion ion-md-create"></i>&nbsp; Edit</b-button>
			       		</div>
			      	</b-card-header>
			      	<div class="row  _pt-20px">
			      		<div class="col-sm-12 _mb-20px">
			      			<p class="_143px mb-0 font-weight-bold"><i class="ion ion-md-business _mr-10px"></i>Company Name</p>
				      		<div class="_ml-20px _143px font-weight-light" :class="{'na':!job.company_private}">
				      			{{job.company_private}}
				      		</div>
			      		</div>
			      		<div class="col-sm-12">
			      			<p class="_143px mb-0 font-weight-bold"><i class="ion ion-md-list-box _mr-10px"></i>Description</p>
				      		<div class="_ml-20px _143px description font-weight-light" :class="{'na':!job.description_private}" v-html="job.description_private">
				      			{{job.description_private}}
				      		</div>
			      		</div>
			      	</div>
			    </div>
		    </b-card>
    	</div>
    	<div class="col-md-6">
    		<b-card no-body class="default-border _mt-20px">
			  	<div class="_px-20px _pb-20px">
				  	<b-card-header header-tag="p" class="with-elements border-top-0 border-left-0 border-right-0 border-warning pl-0 pr-0" style="border-width:2px">
			        	<div class="card-header-title">ANONYMOUS VIEW</div>
			        	<div v-if="$can('update','Company')" class="card-header-elements ml-auto">
			        		<b-button pill variant="warning" @click="$refs['company-cru-component'].openModal({id:job.company_id,company_public:job.company_public,description_public:job.description_public},'update','public')"> <i class="ion ion-md-create"></i>&nbsp; Edit</b-button>
			       		</div>
			      	</b-card-header>
			      	<div class="row  _pt-20px">
			      		<div class="col-sm-12 _mb-20px">
			      			<p class="_143px mb-0 font-weight-bold"><i class="ion ion-md-business _mr-10px"></i>Company Name</p>
				      		<div class="_ml-20px _143px font-weight-light" :class="{'na':!job.company_public}">
				      			{{job.company_public}}
				      		</div>
			      		</div>
			      		<div class="col-sm-12">
			      			<p class="_143px mb-0 font-weight-bold"><i class="ion ion-md-list-box _mr-10px"></i>Description</p>
				      		<div class="_ml-20px _143px description font-weight-light" :class="{'na':!job.description_public}" v-html="job.description_public">
				      			{{job.description_public}}
				      		</div>
			      		</div>
			      	</div>
			    </div>
		    </b-card>
    	</div>
    </div>
   	<job-cru ref="job-cru-component" @updated="setJob"></job-cru>
   	<company-cru ref="company-cru-component" @updated="setCompany"></company-cru>

   	<candidate-index :key="candidate_key" @added="addedCandidateJob" @deleted="deletedCandidateJob"></candidate-index>
   	<div class="row">
		<div class="col">
			<attachment-index></attachment-index>
		</div>
	</div>
	
</div>
</template>
<script>
export default{
	name:'pages.jobs.view',
	data(){
		var that = this;
		return{
			job:null,
			candidate_key:0,
		}
	},
	created(){
		this.component_done_loading = false;
	},
	mounted(){
		this.fetchJob();

	},
	methods:{
		invitedRefresh(){
			this.fetchJob();
			this.candidate_key++;
		},
		addedCandidateJob(data){
			let status = data.status;
			let idx = this._.findIndex(this.job.status_count,function(o){
                return o.status===status;
            })
            if(idx!=-1){
            	this.job.status_count[idx].count++;
            }
		},
		deletedCandidateJob(data){
			let status = data.status;
			let idx = this._.findIndex(this.job.status_count,function(o){
                return o.status===status;
            })
            if(idx!=-1){
            	this.job.status_count[idx].count--;
            }
		},
		setJob(data){
			this.job = data;
		},	
		setCompany(data){
			this.job.company_public = data.company_public;
			this.job.company_private = data.company_private;
			this.job.description_public = data.description_public;
			this.job.description_private = data.description_private;
		},	
		fetchJob(){
			var that = this;
			this.$http.get(`jobs/${this.$route.params.id}`).then(
				function(response){
					that.setJob(response.data.data);
					that.component_done_loading = true;
				}
			);
		},
		
	},
	components:{
		'job-cru': require(`./cru.vue`).default,
		'company-cru': require(`@/views/companies/cru.vue`).default,
		'job-card': require(`./partials/job-card.vue`).default,
		'candidate-index': require(`./candidates/index.vue`).default,
		'attachment-index': require(`./attachments/index.vue`).default,
	}

}
</script>
<style>
	div.description > p{
		margin-bottom:0px !important;
	}
</style>