<template>
<div>
	 <b-card no-body class="default-border _mt-20px">
	  	<div class="_px-20px _pb-20px">
		  	<b-card-header header-tag="p" class="with-elements border-top-0 border-left-0 border-right-0 border-warning pl-0 pr-0" style="border-width:2px">
	        	<div class="card-header-title">COMMUNICATION HISTORY ({{model_count}})</div>
	        	<div v-if="$can('update','Company')" class="card-header-elements ml-auto">
	        		<b-button pill variant="warning" @click="$refs['communication-cru-component'].openModal()"> <i class="ion ion-md-add-circle mr-2"></i>New</b-button>
	       		</div>
	      	</b-card-header>
	      	<div class="_pt-20px"></div>
	      	<kr-search ref="communications_search_listing" :options="{url:`companies/${this.$route.params.id}/communications`}" @retrieved="model_count = $event.data.data.length">
	      		<template v-slot:data="{models}">
      			 	<template v-for="(communication,idx) in models">
      			 		<div class="row _mb-20px">
							<div class="col-2 d-flex justify-content-end">
								<div class="_122px align-self-center text-right _mr-20px">
									{{convertToReadableDate(communication.datetime,'MMM DD YYYY, hh:mm a').date}}
								</div>
								<div class="vl-pill align-self-center text-right text-warning">
									<i class="ion ion-md-radio-button-off"></i>
								</div>
								<div class="vl border-left border-warning" :class="{'start':idx==0,'end':idx==models.length-1,'none':models.length==1}"></div>
							</div>
							<div class="col-10">
								<b-card  class="default-border" no-body>
							    	<div class="_p-9px">
							    		<div class="row">
							    			<div class="col-4">
							    				<p class="_143px _mb-10px">
									 				<span class="text-muted">
									 					Person Contacted
									 				</span>
									 				<br/>
									 				<span class="font-weight-bold" :class="{'na':!communication.person_contacted}">{{communication.person_contacted}}</span>
									 			</p>
							    			</div>
							    			<div class="col-4 d-flex">
							    				<p class="_143px _mb-10px ml-auto">
									 				<span class="text-muted">
									 					Contacted By
									 				</span>
									 				<br/>
									 				<span class="font-weight-bold" :class="{'na':!communication.contacted_by}">{{communication.contacted_by}}</span>
								 				</p>
							    			</div>
							    			<div class="col-4 d-flex">
							    				<div v-if="$can('update','Company')" class="ml-auto"> <i class="ion ion-md-create mr-2"  @click="$refs['communication-cru-component'].openModal(communication,'update')"></i>  <i class="ion ion-md-trash text-primary" @click="$refs['communication-cru-component'].openModal(communication,'delete')"></i></div>
							    			</div>
							    		</div>
							    		<div class="mb-0 remarks _122px font-weight-light" :class="{'na':!communication.remarks}" v-html="communication.remarks">
									    </div>
								     </div>
								</b-card>
							</div>
						</div>
					</template>
				</template>
	    	</kr-search>
	    </div>		
    </b-card>
    <communication-cru ref="communication-cru-component" :company_id="$route.params.id" @created="$refs.communications_search_listing.fetch()" @updated="$refs.communications_search_listing.fetch()" @deleted="$refs.communications_search_listing.fetch()"></communication-cru>
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
		'communication-cru': require(`./cru.vue`).default,
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