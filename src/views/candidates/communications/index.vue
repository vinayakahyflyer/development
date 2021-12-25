<template>
<div>
	 <b-card no-body class="default-border _mt-20px">
	  	<div class="_px-20px _pb-20px">
		  	<b-card-header header-tag="p" class="with-elements border-top-0 border-left-0 border-right-0 border-warning pl-0 pr-0" style="border-width:2px">
	        	<div class="card-header-title">RECRUITER'S NOTES ({{model_count}})</div>
	        	<div v-if="$can('update','Candidate')" class="card-header-elements ml-auto">
	        		<b-button pill variant="warning" @click="$refs['communication-cru-component'].openModal()"> <i class="ion ion-md-add-circle mr-2"></i>New</b-button>
	       		</div>
	      	</b-card-header>
	      	<kr-search ref="communications_search_listing" :options="{url:`candidates/${this.$route.params.id}/communications`}" @retrieved="model_count = $event.data.data.length; items = $event.data.data;">
	      		<template v-slot:data="{models}">
	      			 <div class="_pt-20px">
	      			 	<template v-for="(communication,idx) in sortedItems">
							<div class="row _mb-20px">
								<div class="col-12 d-flex">
									<b-card no-body class="w-100 default-border _p-9px">
								      	<div class="d-flex w-100 justify-content-between">
									      	<span v-if="$can('update','Company')" class="card-header-elements ml-auto"> <i class="ion ion-md-create mr-2"  @click="$refs['communication-cru-component'].openModal(communication,'update')"></i>  <i class="ion ion-md-trash text-primary" @click="$refs['communication-cru-component'].openModal(communication,'delete')"></i></span>
									    </div>
									    <div class="mb-0 remarks _122px font-weight-light" :class="{'na':!communication.remarks}" v-html="communication.remarks">
									    </div>
								    </b-card>
									<div class="_pl-20px d-flex text-warning">
										<img width="32px" height="32px" class="rounded-circle">
									</div>
								</div>
								<div class="col-12 d-flex" style="padding-right:65px">
									<span class="_122px">{{convertToReadableDate(communication.datetime,'MMM DD YYYY, hh:mm a').date}}</span>
									<span class="_143px ml-auto font-weight-bold":class="{'na':!communication.contacted_by}" >{{communication.contacted_by}}</span>
								</div>
					     	</div>
						</template>
					</div>
				</template>
		    </kr-search>
	    </div>
    </b-card>
    <communication-cru ref="communication-cru-component" :candidate_id="$route.params.id" @created="$refs.communications_search_listing.fetch()" @updated="$refs.communications_search_listing.fetch()" @deleted="$refs.communications_search_listing.fetch()"></communication-cru>
</div>
</template>
<script>
export default{
	data(){
		return {
			model_count:0,
			items: []
		}
	},
	components:{
		'communication-cru': require(`./cru.vue`).default,
	},
	computed: {
		
		sortedItems () {
			
			return _.orderBy ( this.items, 'datetime', 'desc'); 
			
		}
		
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