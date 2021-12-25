<template>
<div>
	 <b-card no-body class="default-border _mt-20px">
	  	<div class="_px-20px _pb-20px">
		  	<b-card-header header-tag="p" class="with-elements border-top-0 border-left-0 border-right-0 border-warning pl-0 pr-0 _mb-20px" style="border-width:2px">
	        	<div class="card-header-title">JOBS</div>
	        	<div v-if="$can('create','Job')" class="card-header-elements ml-auto">
	        		<b-button pill variant="warning" @click="$refs['job-cru-component'].openModal()"> <i class="ion ion-md-add-circle mr-2"></i>New</b-button>
	       		</div>
	      	</b-card-header>
	      	<kr-search ref="job_search_listing" :options="{url:`jobs?company_id=${this.$route.params.id}`}" @retrieved="model_count = $event.data.data.length">
	      		<template v-slot:data="{models}">
	      			<template v-for="(job,idx) in models">
	      				<div class="_mb-20px">
	    					<job-card :job="job" :options="{hasEditButton:true,displayCandidateList:true}" @edit="$refs['job-cru-component'].openModal(job,'update')"></job-card>
	    				</div>
		    		</template>
	      		</template>
	    	</kr-search>
	    </div>
    </b-card>
    <job-cru ref="job-cru-component" :company_id="$route.params.id" @created="$refs.job_search_listing.fetch()" @updated="$refs.job_search_listing.fetch()" @deleted="$refs.job_search_listing.fetch()"></job-cru>
</div>
</template>
<script>
export default{
	data(){
		return {
			model_count:[]
		}
	},
	components:{
		'job-cru': require(`@/views/jobs/cru.vue`).default,
		'job-card': require(`@/views/jobs/partials/job-card.vue`).default,
	}
}
</script>