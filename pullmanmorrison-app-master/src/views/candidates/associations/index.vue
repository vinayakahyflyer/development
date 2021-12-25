<template>
<div>
	 <b-card no-body class="default-border _mt-20px">
	  	<div class="_px-20px _pb-20px">
		  	<b-card-header header-tag="p" class="with-elements border-top-0 border-left-0 border-right-0 border-warning pl-0 pr-0" style="border-width:2px">
	        	<div class="card-header-title">JOB APPLICATION HISTORY ({{model_count}})</div>
	        	<div v-if="$can('update','Candidate')" class="card-header-elements ml-auto">
	        		<b-button pill variant="warning" @click="$refs['association-cru-component'].openModal()"> <i class="ion ion-md-person-add mr-2"></i>INVITE TO A JOB</b-button>
	       		</div>
	      	</b-card-header>
	      	<kr-search ref="associations_search_listing" :options="{url:`/job-associations?candidate_id=${this.$route.params.id}`}" @retrieved="model_count = $event.data.data.length">
	      		<template v-slot:data="{models}">
	      			 <div class="_pt-20px">
	      			 	<template v-for="(association ,idx) in models">
	      			 		<b-card no-body class="default-border _mb-10px">
	      			 			<div class="row p-2">
		      			 			<div class="col-3">
		      			 				<p class="_143px mb-0">
							 				<span class="text-muted">
							 					Position
							 				</span>
							 				<br/>
							 				<a class="font-weight-bold" :href="'/jobs/' + association.job_id" :class="{'na':!association.job_title}">{{association.job_title}}</a>
							 			</p>
		      			 			</div>
		      			 			<div class="col-3">
		      			 				<p class="_143px mb-0">
							 				<span class="text-muted">
							 					Company
							 				</span>
							 				<br/>
							 				<span class="font-weight-bold" :class="{'na':!association.company}">{{association.company}}</span>
							 			</p>
		      			 			</div>
		      			 			<div class="col-2">
		      			 				<p class="_143px mb-0">
							 				<span class="text-muted">
							 					Date
							 				</span>
							 				<br/>
							 				<span class="font-weight-bold" :class="{'na':!association.created_at}">
							 				{{convertToReadableDate(association.created_at,'DD MMM YYYY').date}}
							 			</span>
							 			</p>
		      			 			</div>
		      			 			<div class="col-3 job-candidate-status">
		      			 				<p class="_143px mb-0">
							 				<span class="text-muted">
							 					Applied On
							 				</span>
							 				<br/>
							 				<span class="font-weight-bold" :class="{'na':!association.status}">
												<b-badge v-if="association.status=='invited'" pill class="_143px font-weight-semibold invited _mb-9px _mr-10px _pl-20px text-left"><i class="ion ion-md-checkmark-circle-outline _mr-10px"></i>INVITED</b-badge> 
												<b-badge v-if="association.status=='shortlisted'" pill class="_143px font-weight-semibold short _mb-9px _mr-10px _pl-20px text-left"><i class="ion ion-md-checkmark-circle-outline _mr-10px"></i>DECLINED</b-badge>
												<b-badge v-if="association.status=='applied'" pill class="_143px font-weight-semibold applied _mb-9px _mr-10px _pl-20px text-left"><i class="ion ion-md-checkmark-circle-outline _mr-10px"></i> APPLIED</b-badge>
												<b-badge v-if="association.status=='rejected'" pill class="_143px font-weight-semibold rejected _mb-9px _mr-10px _pl-20px text-left"><i class="ion ion-md-close-circle-outline _mr-10px"></i>REJECTED</b-badge>
												<b-badge v-if="association.status=='interviewed'" pill class="_143px font-weight-semibold interviewed _mb-9px _mr-10px _pl-20px text-left"><i class="ion ion-md-checkmark-circle-outline _mr-10px"></i>INTERVIEWED</b-badge>
												<b-badge v-if="association.status=='hired'" pill class="_143px font-weight-semibold hired _mb-9px _mr-10px _pl-20px text-left"><i class="ion ion-md-checkmark-circle-outline _mr-10px"></i>HIRED</b-badge>
							 				</span>
							 			</p>	
		      			 			</div>
		      			 			<div class="col-1">
		      			 				<span v-if="$can('update','Candidate')" class="card-header-elements ml-auto">
		      			 					<i class="ion ion-md-create mr-2"  @click="$refs['association-cru-component'].openModal(association,'update')"></i>
		      			 					<i class="ion ion-md-trash text-primary" @click="$refs['association-cru-component'].openModal(association,'delete')"></i>
		      			 				</span>
		      			 			</div>
		      			 		</div>
	      			 		</b-card>
						</template>
					</div>
				</template>
		    </kr-search>
	    </div>
		
    </b-card>
    <association-cru ref="association-cru-component" :candidate_id="$route.params.id" @created="$refs.associations_search_listing.fetch()" @updated="$refs.associations_search_listing.fetch()" @deleted="$refs.associations_search_listing.fetch()"></association-cru>
</div>
</template>
<script>
export default{
	data(){
		return {
			model_count:0,
		}
	},
	components:{
		'association-cru': require(`./cru.vue`).default,
	}
}
</script>
<style>
.summary > p{
	margin-bottom:0px !important;
}
.job-candidate-status .badge{
    height: 28px;
    line-height:23px;
    width:169px;
}
</style>s