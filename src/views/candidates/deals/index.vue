<template>
<div>
	 <b-card no-body class="default-border _mt-20px">
	  	<div class="_px-20px _pb-20px">
		  	<b-card-header header-tag="p" class="with-elements border-top-0 border-left-0 border-right-0 border-warning pl-0 pr-0" style="border-width:2px">
	        	<div class="card-header-title">DEALS ({{model_count}})</div>
	        	<div v-if="$can('update','Candidate')" class="card-header-elements ml-auto">
	        		<b-button pill variant="warning" @click="$refs['deal-cru-component'].openModal()"> <i class="ion ion-md-add-circle mr-2"></i>New</b-button>
	       		</div>
	      	</b-card-header>
	      	<kr-search ref="deals_search_listing" :options="{url:`candidates/${this.$route.params.id}/deals`}" @retrieved="model_count = $event.data.data.length">
	      		<template v-slot:data="{models}">
	      			 <div class="_pt-20px">
	      			 	<template v-for="(deal,idx) in models">
							<div class="row _mb-20px">
								<div class="col-12 d-flex">
									<div class="d-flex text-warning" style="font-size:30px">
										<i class="ion ion-md-ribbon _mr-20px"></i>
									</div>
									<b-card no-body class="default-border _p-9px w-100">
								      	<div class="d-flex w-100 justify-content-between">
								      		<div>
								      			<p class="_143px font-weight-semibold mb-0" :class="{'na':!deal.title}">{{deal.title}}</p>
									      	</div>
									      	<span v-if="$can('update','Candidate')" class="card-header-elements ml-auto"> <i class="ion ion-md-create mr-2"  @click="$refs['deal-cru-component'].openModal(deal,'update')"></i><i class="ion ion-md-trash text-primary" @click="$refs['deal-cru-component'].openModal(deal,'delete')"></i></span>
									    </div>
									    <div class="mb-0 summary _122px font-weight-light" :class="{'na':!deal.summary}" v-html="deal.summary">
									    </div>
								    </b-card>
								</div>
					     	</div>
						</template>
					</div>
				</template>
		    </kr-search>
	    </div>
		
    </b-card>
    <deal-cru ref="deal-cru-component" :candidate_id="$route.params.id" @created="$refs.deals_search_listing.fetch()" @updated="$refs.deals_search_listing.fetch()" @deleted="$refs.deals_search_listing.fetch()"></deal-cru>
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
		'deal-cru': require(`./cru.vue`).default,
	}
}
</script>
<style>
.summary > p{
	margin-bottom:0px !important;
}
</style>