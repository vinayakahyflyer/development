<template>
<div>
	 <b-card no-body class="default-border _mt-20px">
	  	<div class="_px-20px _pb-20px">
		  	<b-card-header header-tag="p" class="with-elements border-top-0 border-left-0 border-right-0 border-warning pl-0 pr-0" style="border-width:2px">
	        	<div class="card-header-title">WORK EXPERIENCE ({{model_count}})</div>
	        	<div v-if="$can('update','Candidate')" class="card-header-elements ml-auto">
	        		<b-button pill variant="warning" @click="$refs['work-cru-component'].openModal()"> <i class="ion ion-md-add-circle mr-2"></i>New</b-button>
	       		</div>
	      	</b-card-header>
	      	<div class="_pt-20px">
		      	<kr-search ref="works_search_listing" :options="{url:`candidates/${this.$route.params.id}/work_experiences`}" @retrieved="model_count = $event.data.data.length">
		      		<template v-slot:data="{models}">
						<template v-for="(work,idx) in models">
							<div class="row _mb-20px">
								<div class="col-3 d-flex justify-content-end">
									<div class="_122px align-self-center text-right _mr-20px">
										<template v-if="work.start_year">
											{{(work.start_month?monthNames[work.start_month-1]+' ':'')+work.start_year}} - 
											{{work.end_year?((work.end_month?monthNames[work.end_month-1]+' ':'')+work.end_year):'Current'}}
										</template>
									</div>
									<div class="vl-pill align-self-center text-right text-warning">
										<i class="ion ion-md-radio-button-off"></i>
									</div>
									<div class="vl border-left border-warning" :class="{'start':idx==0,'end':idx==models.length-1,'none':models.length==1}"></div>
								</div>
								<div class="col-9">
									<b-card  class="default-border" no-body>
								    	<div class="_p-9px">
									      	<div class="d-flex w-100 justify-content-between">
									      		<div>
									      			<p class="_143px font-weight-bold mb-0" :class="{'na':!work.company}">
										      			{{work.company}}
										      		</p>
										      	</div>
										      	<div v-if="$can('update','Candidate')" class="card-header-elements ml-auto"> <i class="ion ion-md-create mr-2"  @click="$refs['work-cru-component'].openModal(work,'update')"></i> <i class="ion ion-md-trash text-primary" @click="$refs['work-cru-component'].openModal(work,'delete')"></i></div>
										    </div>
										   	<div>
								      			<p class="_133px mb-0" :class="{'na':!work.department}">{{work.department}}</p>
									      	</div>
									      	<div>
								      			<p class="_143px mb-0 font-weight-semibold">
									      			<b :class="{'na':!work.title}">{{work.title}}</b>
									      			<small v-show="work.locations.length > 0" class="_143px mb-0 font-weight-light">({{ _.startCase ( _.toLower ( work.locations.join ( ', ' ) ) ) }})</small>
									      		</p>
									      	</div>
									      	

									        <div class="mb-0 remarks _122px font-weight-light" :class="{'na':!work.remarks}" v-html="work.remarks">
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
    <work-cru ref="work-cru-component" :candidate_id="$route.params.id" @created="$refs.works_search_listing.fetch()" @updated="$refs.works_search_listing.fetch()" @deleted="$refs.works_search_listing.fetch()"></work-cru>
</div>
</template>
<script>
export default{
	data(){
		return {
			model_count:0,
			monthNames: ["Jan", "Feb", "March", "April", "May", "June",
 			 "July", "Aug", "Sept", "Oct", "Nov", "Dec"
			]
		}
	},
	components:{
		'work-cru': require(`./cru.vue`).default,
	}
}
</script>
<style>
.remarks > p{
	margin-bottom:0px !important;
}
</style>