<template>
<div>
	 <b-card no-body class="default-border _mt-20px">
	  	<div class="_px-20px _pb-20px">
		  	<b-card-header header-tag="p" class="with-elements border-top-0 border-left-0 border-right-0 border-warning pl-0 pr-0" style="border-width:2px">
	        	<div class="card-header-title">EDUCATION ({{model_count}})</div>
	        	<div v-if="$can('update','Candidate')" class="card-header-elements ml-auto">
	        		<b-button pill variant="warning" @click="$refs['education-cru-component'].openModal()"> <i class="ion ion-md-add-circle mr-2"></i>New</b-button>
	       		</div>
	      	</b-card-header>
	      	<div class="_pt-20px">
		      	<kr-search ref="educations_search_listing" :options="{url:`candidates/${this.$route.params.id}/educations`}" @retrieved="model_count = $event.data.data.length">
		      		<template v-slot:data="{models}">
						<template v-for="(education,idx) in models">
							<div class="row _mb-20px">
								<div class="col-2 d-flex justify-content-end">
									<div class="_122px align-self-center text-right _mr-20px">
										{{education.start_year}} - {{education.end_year?education.end_year:'Current'}}
									</div>
									<div class="vl-pill align-self-center text-right text-warning">
										<i class="ion ion-md-radio-button-off"></i>
									</div>
									<div class="vl border-left border-warning" :class="{'start':idx==0,'end':idx==models.length-1,'none':models.length==1}"></div>
								</div>
								<div class="col-10">
									<b-card  class="default-border" no-body>
								    	<div class="_p-9px">
									      	<div class="d-flex w-100 justify-content-between">
									      		<div>
									      			<p class="_143px font-weight-semibold mb-0" :class="{'na':!education.achievements}">{{education.achievements}}</p>
										      	</div>
										      	<div v-if="$can('update','Candidate')" class="card-header-elements ml-auto"> <i class="ion ion-md-create mr-2"  @click="$refs['education-cru-component'].openModal(education,'update')"></i> <i class="ion ion-md-trash text-primary" @click="$refs['education-cru-component'].openModal(education,'delete')"></i></div>
										    </div>
										   	<div>
								      			<p class="_143px font-weight-bold mb-0" :class="{'na':!education.institution}">{{education.institution}}</p>
									      	</div>
									        <div class="mb-0 remarks _122px font-weight-light" :class="{'na':!education.remarks}" v-html="education.remarks">
									        </div>
									     </div>
									</b-card>
								</div>
							</div>
						</template>
					</template>
		    	</kr-search>
		    </div>
	    </div>
    </b-card>
    <education-cru ref="education-cru-component" :candidate_id="$route.params.id" @created="$refs.educations_search_listing.fetch()" @updated="$refs.educations_search_listing.fetch()" @deleted="$refs.educations_search_listing.fetch()"></education-cru>
</div>
</template>
<script>
export default{
	data(){
		return {
			model_count:0
		}
	},
	components:{
		'education-cru': require(`./cru.vue`).default,
	}
}
</script>
<style>
.remarks > p{
	margin-bottom:0px !important;
}
.ui-timeline::before, .ui-timeline-item::after {
    z-index: 0;
}

</style>