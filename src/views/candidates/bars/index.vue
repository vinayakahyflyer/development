<template>
<div>
	 <b-card no-body class="default-border _mt-20px">
	  	<div class="_px-20px _pb-20px">
		  	<b-card-header header-tag="p" class="with-elements border-top-0 border-left-0 border-right-0 border-warning pl-0 pr-0" style="border-width:2px">
	        	<div class="card-header-title">BAR DETAILS ({{model_count}})</div>
	        	<div v-if="$can('update','Candidate')" class="card-header-elements ml-auto">
	        		<b-button pill variant="warning" @click="$refs['bar-cru-component'].openModal()"> <i class="ion ion-md-add-circle mr-2"></i>New</b-button>
	       		</div>
	      	</b-card-header>
	      	<kr-search ref="bars_search_listing" :options="{url:`candidates/${this.$route.params.id}/bars`}" @retrieved="model_count = $event.data.data.length">
	      		<template v-slot:data="{models}">
	      			 <div class="_pt-20px">
	      			 	<template v-for="(bar,idx) in models">
							<div class="row _mb-20px">
								<div class="col-12 d-flex">
									<b-card no-body class="default-border _p-9px w-100">
										<div class="row">
											<div class="col-6">
												<p class="_143px mb-0">
									 				<span class="text-muted">
									 					Location
									 				</span>
									 				<br/>
									 				<span class="font-weight-bold" :class="{'na':!bar.location}">{{bar.location}}</span>
									 			</p>

											</div>
											<div class="col-4">
												<p class="_143px mb-0">
									 				<span class="text-muted">
									 					Year
									 				</span>
									 				<br/>
									 				<span class="font-weight-bold" :class="{'na':!bar.year}">{{bar.year}}</span>
									 			</p>
									 			
											</div>
											<div class="col-2 d-flex">
												<span v-if="$can('update','Candidate')" class="ml-auto"> <i class="ion ion-md-create mr-2"  @click="$refs['bar-cru-component'].openModal(bar,'update')"></i><i class="ion ion-md-trash text-primary" @click="$refs['bar-cru-component'].openModal(bar,'delete')"></i></span>
											</div>
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
    <bar-cru ref="bar-cru-component" :candidate_id="$route.params.id" @created="$refs.bars_search_listing.fetch()" @updated="$refs.bars_search_listing.fetch()" @deleted="$refs.bars_search_listing.fetch()"></bar-cru>
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
		'bar-cru': require(`./cru.vue`).default,
	}
}
</script>
<style>
.summary > p{
	margin-bottom:0px !important;
}
</style>s