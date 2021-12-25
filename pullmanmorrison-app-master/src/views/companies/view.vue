<template>
<div v-if="component_done_loading">
	 <b-card no-body class="default-border">
	 	<div class="_p-20px">
			<div class="row">
				<!--<div class="col-sm-2">

				</div>-->
				<div class="col-sm-10">
					<p class=" _mb-20px"><i class="ion ion-md-information-circle mr-2"></i> Status
				      	<b-badge v-if="company.status=='active'" variant="success" class="default">Active</b-badge>
				        <b-badge v-else-if="company.status=='flagged'" variant="success" class="default">Flagged</b-badge>
				        <b-badge v-else-if="company.status=='deleted'" variant="info" class="default">Deleted</b-badge>
				    </p>
					<p class="_215px _mb-10px font-weight-bold" :class="{'na':!company.company_private}">
				        {{company.company_private}}
				    </p>
				    <p class="_153px _mb-10px font-weight-semi-bold" :class="{'na':!company.company_public}">
				        {{company.company_public}}
				    </p>
				    <p class="_153px _mb-10px font-weight-semi-bold" :class="{'na':!company.company_public}">
				        <span class="text-muted">Type:</span> {{company.type}}, <span class="text-muted">Size:</span> {{company.size}},
				        <span class="text-muted">Headquarters:</span> {{company.locations.join ( ', ' )}},
				        <span class="text-muted">Offices:</span> {{company.locations_others.join ( ', ' )}},
				        <span class="text-muted">Industries:</span> {{company.industries.join ( ', ' )}},
				    </p>
				    <!--<div class="mb-0 description _143px font-weight-light" :class="{'na':!company.summary}" v-html="company.summary"></div>-->
					<p class="_143px _mb-20px">
        			 	<i class="ion ion-md-pin _mr-10px"></i><span class="text-muted">Address</span>
        			 	<br/>
        			 	<b>
        			 		<span style="white-space:pre;" :class="{'na':!company.address}" v-html="company.address"></span>
        			 	</b>
        			</p>
        			<p class="_143px mb-0"><i class="ion ion-md-call _mr-10px"></i>
        				<span v-if="company.contact">{{company.contact}}</span>
        				<span v-else class="na"></span>
        			</p>
        			<p class="_143px mb-0"><i class="ion ion-md-globe _mr-10px"></i>
        				<b-link v-if="company.website" :href="absoluteUrl(company.website)" target="_blank">{{company.website}}</b-link>
        				<span v-else class="na"></span>
        			</p>
				</div>
				<div class="col-sm-2">
	        		<div v-if="$can('update','Company')" class="d-flex flex-sm-column justify-content-between h-100">
	        			<div class="d-flex _mb-20px align-self-start align-self-sm-end">
		        			<b-button class="_w-150px ml-auto _mr-20px" pill variant="warning" @click="$refs['company-cru-component'].openModal(company,'update')"> <i class="ion ion-md-create"></i>&nbsp; Edit</b-button>
		        			<b-link class="ml-auto" :to="{name:'companies.view',params:{id:company.id}}" target="_blank"><i class="ion ion-md-open mr-2"></i></b-link>
		        		</div>
		        		<!--<div class="d-sm-flex align-self-sm-end">
						  <b-dropdown variant="warning" class="default-border">
						  	<template v-slot:button-content>
						    <div class="border-right d-inline pr-2">More Actions</div>
						    </template>
						  </b-dropdown>
						</div>-->
					</div>
	        	</div>
			</div>
			<div v-if="company.updated_at" class="text-right _122px _mt-20px text-muted font-italic"> Last updated on {{convertToReadableDate(company.updated_at,'ddd, DD MMM YYYY').date}} ({{convertToReadableDate(company.updated_at,'ddd, DD MMM YYYY').dateObj.fromNow()}})</div>
		</div>
	</b-card>
      <!--<div class="media flex-wrap">
        <div class="d-none d-sm-block ui-w-140">
          <a href="javascript:void(0)" class="d-block ui-rect-67 ui-bg-cover" :style="{'background-image': `url('${publicUrl}img/bg/${company.image}')`}"></a>
        </div>
        <div class="media-body ml-sm-4">
        	<div class="row">
        		<div class="col-sm-8">
    			 	<h4 class="mb-2 font-weight-bold">
		          		<span :class="{'na':!company.company_private}">{{company.company_private}}</span>
		         	</h4>
		          	<h6 class="mb-2" :class="{'na':!company.company_public}">
		          		{{company.company_public}}
		          	</h6>
		          	 <div class="description font-weight-light" :class="{'na':!company.description_private}" v-html="limitCharacters(company.description_private)"></div>
        		</div>
        		<div class="col-sm-4">
        			 <dd>
        			 	<i class="ion ion-md-pin mr-2"></i><span class="text-muted">Address</span>
        			 	<br/>
        			 	<b><span style="white-space:pre;" :class="{'na':!company.address}" v-html="company.address"></span></b>
        			 </dd>
        			 <dd><i class="ion ion-md-globe mr-2"></i><b-link v-if="company.website" :href="company.website" target="_blank">{{company.website}}</b-link> <span v-else class="na"></span></dd>
        		</div>
        	</div>
        </div>

      </div>-->

    </b-card>
   	<contact-index></contact-index>
   	<communication-index></communication-index>
    <div class="row">
    	<div class="col-md-6">
    		<b-card no-body class="default-border _mt-20px">
			  	<div class="_px-20px _pb-20px">
				  	<b-card-header header-tag="p" class="with-elements border-top-0 border-left-0 border-right-0 border-warning pl-0 pr-0" style="border-width:2px">
			        	<div class="card-header-title">MEMBERS VIEW</div>
			        	<div v-if="$can('update','Company')" class="card-header-elements ml-auto">
			        		<b-button pill variant="warning" @click="$refs['company-cru-component'].openModal(company,'update','private')"> <i class="ion ion-md-create"></i>&nbsp; Edit</b-button>
			       		</div>
			      	</b-card-header>
			      	<div class="row  _pt-20px">
			      		<div class="col-sm-12 _mb-20px">
			      			<p class="_143px mb-0 font-weight-bold"><i class="ion ion-md-business _mr-10px"></i>Company Name</p>
				      		<div class="_ml-20px _143px font-weight-light" :class="{'na':!company.company_private}">
				      			{{company.company_private}}
				      		</div>
			      		</div>
			      		<div class="col-sm-12">
			      			<p class="_143px mb-0 font-weight-bold"><i class="ion ion-md-list-box _mr-10px"></i>Description</p>
				      		<div class="_ml-20px _143px description font-weight-light" :class="{'na':!company.description_private}" v-html="company.description_private">
				      			{{company.description_private}}
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
			        		<b-button pill variant="warning" @click="$refs['company-cru-component'].openModal(company,'update','public')"> <i class="ion ion-md-create"></i>&nbsp; Edit</b-button>
			       		</div>
			      	</b-card-header>
			      	<div class="row  _pt-20px">
			      		<div class="col-sm-12 _mb-20px">
			      			<p class="_143px mb-0 font-weight-bold"><i class="ion ion-md-business _mr-10px"></i>Company Name</p>
				      		<div class="_ml-20px _143px font-weight-light" :class="{'na':!company.company_public}">
				      			{{company.company_public}}
				      		</div>
			      		</div>
			      		<!--<div class="col-sm-12">
			      			<p class="_143px mb-0 font-weight-bold"><i class="ion ion-md-list-box _mr-10px"></i>Description</p>
				      		<div class="_ml-20px _143px description font-weight-light" :class="{'na':!company.description_public}" v-html="company.description_public">
				      			{{company.description_public}}
				      		</div>
			      		</div>-->
			      	</div>
			    </div>
		    </b-card>
    	</div>
    </div>
    <job-index></job-index>
   	<company-cru ref="company-cru-component" @updated="setCompany"></company-cru>
</div>
</template>
<script>
export default{
	name:'pages.companies.view',
	data(){
		var that = this;
		return{
			company:null,
		}
	},
	created(){
		this.component_done_loading = false;
	},
	mounted(){
		this.fetchCompany();
	},
	methods:{
		setCompany(data){
			this.company = data;
		},
		fetchCompany(){
			var that = this;
			this.$http.get(`companies/${this.$route.params.id}`).then(
				function(response){
					that.setCompany(response.data.data);
					that.component_done_loading = true;
				}
			);
		},
	},
	components:{

	},
	components:{
		'company-cru': require(`./cru.vue`).default,
		'contact-index': require(`./contacts/index.vue`).default,
		'communication-index': require(`./communications/index.vue`).default,
		'job-index': require(`./jobs/index.vue`).default,

	}

}
</script>
<style>
	div.description > p{
		margin-bottom:0px !important;
	}

</style>
