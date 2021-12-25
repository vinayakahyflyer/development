<script>
export default{
	name:'pages.companies.index',
	data(){
		var that = this;
		let sendParams = false;
		let history = this.$store.getters.search_history;
		let search_history_id ='companies.index';
		let query = {q:'',status:'',page:1,per_page:20};
		if(history[search_history_id]){
			_.forIn(history[search_history_id], function(value, key) {
				if(query.hasOwnProperty(key)){
					query[key] = value;
				}
			});
			sendParams = true;
		}
		return{

			industryOptions:[],
			industriesLoading:false,

		      fetchIndustries: this._.debounce(function(query){
		        that.industriesLoading = true;
		        if(!query){
		          that.industriesLoading = false;
		          return;
		        }
		        that.$http.get('/industries?q='+encodeURIComponent(query)).then(function(response){
		          that.industriesLoading = false;
		          that.industryOptions = that._.map(response.data.data,'industry');
		        }).catch(function(errors){})
		      },500,{trailing:true}),


			companiesTable:{
				meta:{from:0,to:0,total:0},
				isBusy:false,
				sendParams:sendParams,
				query:query,
				helperFields:{
					 statusOptions:[
					 	{
				          value:'',
				          text:'Any'
				        },
				        {
				          value:'active',
				          text:'Active'
				        },
				        {
				          value:'suspended',
				          text:'Suspended'
				        },
				         {
				          value:'expired',
				          text:'Expired'
				        },
				    ]
				},
				fields:[
		    		{
		    			key:'id',
		    			label:'ID',
		    			sortable:true,
		    			thClass:'table-warning'
		    		},
		    		{
		    			key:'company_private',
		    			label:'COMPANY',
		    			sortable:true,
		    			thClass:'table-warning'
		    		},
		    		{
		    			key:'locations',
		    			label:'Country',
		    			sortable:true,
		    			thClass:'table-warning'
		    		},
		    		{
		    			key:'industries',
		    			label:'Industries',
		    			sortable:false,
		    			thClass:'table-warning'
		    		},
		    		{
			          key: 'actions',
			          label: '',
			          sortable: false,
			          thClass:'table-warning'
			        }
		    	],
				myProvider:function(ctx){
		    		that.companiesTable.isBusy = true;
		    		let url = 'companies'+'?page='+that.companiesTable.query.page+'&per_page='+that.companiesTable.query.per_page;
		    		if(that.companiesTable.sendParams){
		    			url +='&q='+that.companiesTable.query.q+'&countries='+that.companiesTable.query.countries+'&industries='+that.companiesTable.query.industries;
		    		}
		    		let promise = this.$http.get(url)
			        return promise.then((response) => {
			          	const items = response.data.data
			         	that.companiesTable.meta = response.data.meta;
			          // Here we could override the busy state, setting isBusy to false
				        that.companiesTable.isBusy = false;

			        if((that.companiesTable.sendParams||(!that.companiesTable.sendParams&&that.companiesTable.reset))){
						that.$store.dispatch('updateSearchHistory',{id:'companies.index',...that.companiesTable.query});
					}
					that.companiesTable.reset = false;
			          return(items)
			        }).catch(error => {
			          // Here we could override the busy state, setting isBusy to false
			          // this.isBusy = false
			          // Returning an empty array, allows table to correctly handle
			          // internal busy state in case of error
			          return []
			        })
		    	},
				resetQuery(){
    				that.companiesTable.sendParams = false;
		    		that.companiesTable.reset = true;
    				that.companiesTable.query = {q:'',status:'',page:1,per_page:20};
    				that.$refs.companies_listing.refresh();
    			},
    			tableTitle(){
    				if(that.companiesTable.meta.total==0){
    					return '(0)';
    				}else{
    					return `(${that.companiesTable.meta.from} - ${that.companiesTable.meta.to} of ${that.companiesTable.meta.total})`;
    				}
    			},
    			viewModel(item){
		    		that.$router.push({name:'companies.view',params:{id:item[0].id}});
		    	},
			}
		}
	},
	methods:{
		successfullyCreated(data){
			this.$router.push({name:'companies.view',params:{id:data.id}})
		},

	},
  	components:{
		'company-cru': require(`./cru.vue`).default,
	},
}
</script>

<template>
<div>
	<div class="row">
		<div class="col-sm-3">
			<b-card no-body class="_mb-20px">
				<div class="_pb-20px">
				  	<b-card-header header-tag="p" class="border-0 bg-warning pl-0 pr-0">
				  		<div class="_px-20px d-flex">
				        	<div class="_143px font-weight-bold">Companies Search</div>
				        	<div class="card-header-elements ml-auto">
				        		<a href="javascript:void(0)" class="search-reset-link font-weight-semibold" @click="companiesTable.resetQuery">Reset All</a>
				       		</div>
				       	</div>
			      	</b-card-header>
			      	<div class="_pt-20px _px-20px">


				      	<!-- Company keyword. -->

			      		<b-form-group label="Keywords" class="pb-3">
			      			<b-input v-model="companiesTable.query.q" placeholder="Type keywords here" @keyup.enter="companiesTable.sendParams=true;$refs.companies_listing.refresh()"></b-input>
			      		</b-form-group>


                <!-- Status. -->

				      	<b-form-group label="Status" class="pb-3">
				        	<b-form-select v-model="companiesTable.query.status" :options="[{value:'active',text:'Active'},{value:'deleted',text:'Deleted'}]"></b-form-select>
				      	</b-form-group>

			      		<!-- Company Locations. -->

					    <b-form-group label="Country" class="pb-3">
					        <kr-multiselect
					            v-model="companiesTable.query.countries"
					            :options="kr_var.countriesAndCities"
					            :multiple="false"
					            :searchable="true"
					            :taggable="false"
					            :closeOnSelect="true"
					            :show-labels="false"
					         >
					        </kr-multiselect>
				      	</b-form-group>


			      		<!-- Company Industry. -->

					    <b-form-group label="Industry" class="pb-3">
					        <kr-multiselect
								v-model="companiesTable.query.industries"
								:options="industryOptions"
								:multiple="false"
								:searchable="true"
								:taggable="false"
								:closeOnSelect="true"
								:loading="industriesLoading"
								@search-change="fetchIndustries"
					         >
					        </kr-multiselect>
				      	</b-form-group>


			      		<!--<b-form-group label="Status" class="pb-3">
				        	<b-form-select v-model="companiesTable.query.status" :options="companiesTable.helperFields.statusOptions"></b-form-select>
				      	</b-form-group>-->
			      		<b-btn pill variant="warning" :block="true" @click="companiesTable.sendParams=true;$refs.companies_listing.refresh()"><i class="ion ion-md-search mr-2"></i>Search</b-btn>
			      	</div>
			    </div>
		    </b-card>
		</div>
		<div class="col-sm-9">
			 <b-card no-body class="default-border">
		    	<div class="_px-20px _pb-20px">
				  	<b-card-header header-tag="p" class="with-elements border-top-0 border-left-0 border-right-0 border-warning pl-0 pr-0 _mb-20px" style="border-width:2px">
			        	<div class="card-header-title">Companies {{companiesTable.tableTitle()}}</div>
			        	<div v-if="$can('create','Company')" class="card-header-elements ml-auto">
			        		<b-button pill variant="warning" @click="$refs['company-cru-component'].openModal()"> <i class="ion ion-md-add-circle mr-2"></i>New</b-button>
			       		</div>
			      	</b-card-header>
			      	<b-pagination
				      v-model="companiesTable.query.page"
				      :total-rows="companiesTable.meta.total"
				      :per-page="companiesTable.meta.per_page"
				    >
				    </b-pagination>
			      	<b-table
			      		ref="companies_listing"
			      		empty-text="NO MATCHING RECORDS"
			      		:items="companiesTable.myProvider"
			      		:fields="companiesTable.fields"
			      		:busy.sync="companiesTable.isBusy"
			      		:bordered="true"
			      		:hover="true"
			      		selectable
			      		select-mode="single"
			      		@row-selected="companiesTable.viewModel"
			      		responsive
			      		show-empty
			      		no-provider-sorting
			      		:currentPage="companiesTable.query.page"
			      	>
			      		<template v-slot:cell(actions)="data">
			      			<div class="d-flex justify-content-center">
			      				<div>
			      					<b-link class="ml-auto" :to="{name:'companies.view',params:{id:data.item.id}}" target="_blank"><i class="ion ion-md-open "></i></b-link>
			      				</div>
		        			</div>
		      			</template>
		      			<template v-slot:cell(locations)="data">
			      			{{data.item.locations.join ( ', ' )}}
			      		</template>
		      			<template v-slot:cell(industries)="data">
			      			{{data.item.industries.join ( ', ' )}}
			      		</template>
				      	<template v-slot:table-busy>
					        <div class="text-center text-danger my-2">
					          <b-spinner class="align-middle"></b-spinner>
					          <strong>Loading...</strong>
					        </div>
					    </template>
			      	</b-table>
			      	<b-pagination
				      v-model="companiesTable.query.page"
				      :total-rows="companiesTable.meta.total"
				      :per-page="companiesTable.meta.per_page"
				    >
				    </b-pagination>
			    </div>
		    </b-card>
			<!--<b-card no-body class="default-border">
				<div class="_px-20px _pb-20px">
					<b-card-header header-tag="h6" class="with-elements border-top-0 border-left-0 border-right-0 border-warning pl-0 pr-0 _mb-20px" style="border-width:2px">
			        	<div class="card-header-title">Companies {{companiesTable.tableTitle()}}</div>
			        	<div v-if="$can('create','Company')" class="card-header-elements ml-auto">
			        		<b-button pill variant="warning" @click="$refs['company-cru-component'].openModal()"> <i class="ion ion-md-add-circle mr-2"></i>New</b-button>
			       		</div>
			      	</b-card-header>
				      	<kr-search ref="companies_search_listing" :options="{url:'companies',params:companiesTable.query,hasPagination:true,search_history_id:'companies.index'}" @retrieved="companiesTable.meta = $event.data.meta;">
			      		<template v-slot:data="{models,query,meta}">
			      			<b-pagination
						      v-model="query.page"
						      :total-rows="meta.total"
						      :per-page="meta.per_page"
						    >
						    </b-pagination>
							<template v-for="(company,idx) in models">
				    			<b-card no-body class="company-card default-border _mb-20px">
				    				<div class="_p-20px">
				    					<div class="row">
											<div class="col-12 d-flex">
												<div class="_mb-20px flex-grow-1" @click="$router.push({name:'companies.view',params:{id:company.id}})"><i class="ion ion-md-information-circle mr-2"></i> Status
											      	<b-badge v-if="company.status=='active'" variant="success" class="default">Active</b-badge>
											        <b-badge v-else-if="company.status=='flagged'" variant="success" class="default">Flagged</b-badge>
											        <b-badge v-else-if="company.status=='deleted'" variant="info" class="default">Deleted</b-badge>
											    </div>
											    <b-link class="ml-auto" :to="{name:'companies.view',params:{id:company.id}}" target="_blank"><i class="ion ion-md-open mr-2"></i></b-link>
											</div>
											<div class="col-12" @click="$router.push({name:'companies.view',params:{id:company.id}})">
												<p class="_215px _mb-10px font-weight-bold" :class="{'na':!company.company_private}">
											        {{company.company_private}}
											    </p>
											    <p class="_153px _mb-10px font-weight-semi-bold" :class="{'na':!company.company_public}">
											        {{company.company_public}}
											    </p>
											</div>
										</div>
									</div>
						        </b-card>
				    		</template>
				    		<b-pagination
						      v-model="query.page"
						      :total-rows="meta.total"
						      :per-page="meta.per_page"
						    >
						    </b-pagination>
			      		</template>
		      		</kr-search>
			    </div>
      		</b-card>-->
		</div>
	</div>
	<company-cru ref="company-cru-component" @created="successfullyCreated" @updated="$refs.companies_search_listing.fetch()"></company-cru>
</div>
</template>
<script>
export default{
	name:'pages.companies.index',
	data(){
		var that = this;
		let sendParams = false;
		let history = this.$store.getters.search_history;
		let search_history_id ='companies.index';
		let query = {q:'',status:'active',page:1,per_page:20};
		if(history[search_history_id]){
			_.forIn(history[search_history_id], function(value, key) {
				if(query.hasOwnProperty(key)){
					query[key] = value;
				}
			});
			sendParams = true;
		}
		return{

			industryOptions:[],
			industriesLoading:false,

		      fetchIndustries: this._.debounce(function(query){
		        that.industriesLoading = true;
		        if(!query){
		          that.industriesLoading = false;
		          return;
		        }
		        that.$http.get('/industries?q='+encodeURIComponent(query)).then(function(response){
		          that.industriesLoading = false;
		          that.industryOptions = that._.map(response.data.data,'industry');
		        }).catch(function(errors){})
		      },500,{trailing:true}),


			companiesTable:{
				meta:{from:0,to:0,total:0},
				isBusy:false,
				sendParams:sendParams,
				query:query,
				helperFields:{
					 statusOptions:[
					 	{
				          value:'',
				          text:'Any'
				        },
				        {
				          value:'active',
				          text:'Active'
				        },
				        {
				          value:'suspended',
				          text:'Suspended'
				        },
				         {
				          value:'expired',
				          text:'Expired'
				        },
				    ]
				},
				fields:[
		    		{
		    			key:'id',
		    			label:'ID',
		    			sortable:true,
		    			thClass:'table-warning'
		    		},
		    		{
		    			key:'company_private',
		    			label:'COMPANY',
		    			sortable:true,
		    			thClass:'table-warning'
		    		},
		    		{
		    			key:'locations',
		    			label:'Country',
		    			sortable:true,
		    			thClass:'table-warning'
		    		},
		    		{
		    			key:'industries',
		    			label:'Industries',
		    			sortable:false,
		    			thClass:'table-warning'
		    		},
		    		{
			          key: 'actions',
			          label: '',
			          sortable: false,
			          thClass:'table-warning'
			        }
		    	],
				myProvider:function(ctx){
		    		that.companiesTable.isBusy = true;
		    		let url = 'companies'+'?page='+that.companiesTable.query.page+'&per_page='+that.companiesTable.query.per_page+'&status='+that.companiesTable.query.status;
		    		if(that.companiesTable.sendParams){
		    			url +='&q='+that.companiesTable.query.q+'&countries='+that.companiesTable.query.countries+'&industries='+that.companiesTable.query.industries;
		    		}
		    		let promise = this.$http.get(url)
			        return promise.then((response) => {
			          	const items = response.data.data
			         	that.companiesTable.meta = response.data.meta;
			          // Here we could override the busy state, setting isBusy to false
				        that.companiesTable.isBusy = false;

			        if((that.companiesTable.sendParams||(!that.companiesTable.sendParams&&that.companiesTable.reset))){
						that.$store.dispatch('updateSearchHistory',{id:'companies.index',...that.companiesTable.query});
					}
					that.companiesTable.reset = false;
			          return(items)
			        }).catch(error => {
			          // Here we could override the busy state, setting isBusy to false
			          // this.isBusy = false
			          // Returning an empty array, allows table to correctly handle
			          // internal busy state in case of error
			          return []
			        })
		    	},
				resetQuery(){
    				that.companiesTable.sendParams = false;
		    		that.companiesTable.reset = true;
    				that.companiesTable.query = {q:'',status:'',page:1,per_page:20};
    				that.$refs.companies_listing.refresh();
    			},
    			tableTitle(){
    				if(that.companiesTable.meta.total==0){
    					return '(0)';
    				}else{
    					return `(${that.companiesTable.meta.from} - ${that.companiesTable.meta.to} of ${that.companiesTable.meta.total})`;
    				}
    			},
    			viewModel(item){
		    		that.$router.push({name:'companies.view',params:{id:item[0].id}});
		    	},
			}
		}
	},
	methods:{
		successfullyCreated(data){
			this.$router.push({name:'companies.view',params:{id:data.id}})
		},

	},
  	components:{
		'company-cru': require(`./cru.vue`).default,
	},
}
</script>
<style>
	.description > p{
		margin-bottom:0px !important;
	}
	div.company-card:hover{
		cursor:pointer;
	}
</style>
