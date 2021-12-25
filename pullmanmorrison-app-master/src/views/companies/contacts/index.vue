<template>
<div>
	 <b-card no-body class="default-border _mt-20px">
	 	<div class="_px-20px _pb-20px">
		  	<b-card-header header-tag="p" class="with-elements border-top-0 border-left-0 border-right-0 border-warning pl-0 pr-0" style="border-width:2px">
	        	<div class="card-header-title" v-if="tabIndex==0">ACTIVE CONTACT DETAILS</div>
	        	<div class="card-header-title" v-else>LEFT CONTACT DETAILS</div>
	        	<div v-if="$can('update','Company')" class="card-header-elements ml-auto">
	        		<b-button pill variant="warning" @click="$refs['contact-cru-component'].openModal()"> <i class="ion ion-md-add-circle mr-2"></i>New</b-button>
	       		</div>
	      	</b-card-header>
	      	<b-tabs v-model="tabIndex" card>
		      	<b-tab :title="'Active (' +active_model_count+')'" active>
			    	<kr-search ref="active_contact_details_search_listing" :options="{url:`companies/${this.$route.params.id}/contacts`,params:{status:'active'},linkParamsOnCreate:true}" @retrieved="active_model_count = $event.data.data.length">
			      		<template v-slot:data="{models}">
			      			<template v-for="(contact,idx) in models">
					    		<b-card class="default-border _mb-20px" no-body>
					    			<div class="_p-9px">
							    		<div class="d-flex w-100 justify-content-between">
									      <p class="_143px _mb-10px"><i class="ion ion-md-git-network mr-2"></i>{{contact.label}}</p>
									      <span v-if="$can('update','Company')" class="card-header-elements"> <i class="ion ion-md-create mr-2"  @click="$refs['contact-cru-component'].openModal(contact,'update')"></i>  <i class="ion ion-md-trash text-primary" @click="$refs['contact-cru-component'].openModal(contact,'delete')"></i></span>
									    </div>
									    <div class="row _px-20px">
									    	<p class="col-sm-3 _143px _mb-10px font-weight-semibold"><i class="ion ion-md-contact _mr-10px"></i>{{contact.name}}, <span :class="{'na':!contact.title}">{{contact.title}}</span></dd>
								    		<p class="col-sm-4 _143px _mb-10px font-weight-semibold"><i class="ion ion-md-mail _mr-10px"></i><b :class="{'na':!contact.email}">{{contact.email}}</b></p>
									    	<p class="col-sm-2 _143px _mb-10px font-weight-semibold"><i class="ion ion-md-call _mr-10px"></i><b :class="{'na':!contact.phone}">{{contact.phone}}</b></p>
									    	<p class="col-sm-3 _143px _mb-10px font-weight-semibold"><i class="ion ion-logo-linkedin _mr-10px"></i>
									    		<span v-if="!contact.linkedin_url" class="na"></span>
									    		<a :href="contact.linkedin_url" class="_122px" target="_blank">{{contact.linkedin_url}}</a>
									    	</p>
									    </div>
									    <div class="_px-20px mb-0 remarks _122px font-weight-light" :class="{'na':!contact.remarks}" v-html="contact.remarks">
									    </div>
									    <div v-if="contact.updated_at" class="text-right _122px  text-muted font-italic"> Last updated on {{convertToReadableDate(contact.updated_at,'ddd, DD MMM YYYY').date}} ({{convertToReadableDate(contact.updated_at,'ddd, DD MMM YYYY').dateObj.fromNow()}})</div>
									    
									</div>
								</b-card>
				 			</template>
			      		</template>
				    </kr-search>
		      	</b-tab>
		      	<b-tab :title="'Left (' +left_model_count+')'">
			    	<kr-search ref="left_contact_details_search_listing" :options="{url:`companies/${this.$route.params.id}/contacts`,params:{status:'left'},linkParamsOnCreate:true}" @retrieved="left_model_count = $event.data.data.length">
			      		<template v-slot:data="{models}">
			      			<template v-for="(contact,idx) in models">
					    		<b-card class="default-border _mb-20px" no-body>
					    			<div class="_p-9px">
							    		<div class="d-flex w-100 justify-content-between">
									      <p class="_143px _mb-10px"><i class="ion ion-md-git-network mr-2"></i>{{contact.label}}</p>
									      <span v-if="$can('update','Company')" class="card-header-elements"> <i class="ion ion-md-create mr-2"  @click="$refs['contact-cru-component'].openModal(contact,'update')"></i></span>
									    </div>
									    <div class="row _px-20px">
									    	<p class="col-sm-3 _143px _mb-10px font-weight-semibold"><i class="ion ion-md-contact _mr-10px"></i>{{contact.name}}, <span :class="{'na':!contact.title}">{{contact.title}}</span></dd>
								    		<p class="col-sm-4 _143px _mb-10px font-weight-semibold"><i class="ion ion-md-mail _mr-10px"></i><b :class="{'na':!contact.email}">{{contact.email}}</b></p>
									    	<p class="col-sm-2 _143px _mb-10px font-weight-semibold"><i class="ion ion-md-call _mr-10px"></i><b :class="{'na':!contact.phone}">{{contact.phone}}</b></p>
									    	<p class="col-sm-3 _143px _mb-10px font-weight-semibold"><i class="ion ion-logo-linkedin _mr-10px"></i>
									    		<span v-if="!contact.linkedin_url" class="na"></span>
									    		<a :href="contact.linkedin_url" class="_122px" target="_blank">{{contact.linkedin_url}}</a>
									    	</p>
									    </div>
									    <div class="_px-20px mb-0 remarks _122px font-weight-light" :class="{'na':!contact.remarks}" v-html="contact.remarks">
									    </div>
									    <div v-if="contact.updated_at" class="text-right _122px  text-muted font-italic"> Last updated on {{convertToReadableDate(contact.updated_at,'ddd, DD MMM YYYY').date}} ({{convertToReadableDate(contact.updated_at,'ddd, DD MMM YYYY').dateObj.fromNow()}})</div>
									    
									</div>
								</b-card>
				 			</template>
			      		</template>
				    </kr-search>
	      		</b-tab>
	      	</b-tabs>
	    </div>
    </b-card>
    <contact-cru ref="contact-cru-component" :company_id="$route.params.id" @created="$refs.active_contact_details_search_listing.fetch();$refs.left_contact_details_search_listing.fetch()" @updated="$refs.active_contact_details_search_listing.fetch();$refs.left_contact_details_search_listing.fetch()" @deleted="$refs.active_contact_details_search_listing.fetch();$refs.left_contact_details_search_listing.fetch()"></contact-cru>
</div>
</template>
<script>
export default{
	data(){
		return {
			tabIndex:0,
			active_model_count:0,
			left_model_count:0,
		}
	},
	components:{
		'contact-cru': require(`./cru.vue`).default,
	},
}
</script>