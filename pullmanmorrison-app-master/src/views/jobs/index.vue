<template>
<div>
	<div class="row">
		<div class="col-sm-3">
			<b-card no-body class="_mb-20px">
				<div class="_pb-20px">
				  	<b-card-header header-tag="p" class="border-0 bg-warning pl-0 pr-0">
				  		<div class="_px-20px d-flex">
				        	<div class="_143px font-weight-bold">Jobs Search</div>
				        	<div class="card-header-elements ml-auto">
				        		<a href="javascript:void(0)" class="search-reset-link font-weight-semibold" @click="jobsTable.resetQuery">Reset All</a>
				       		</div>
				       	</div>
			      	</b-card-header>
			      	<div class="_pt-20px _px-20px">
			      		<b-form-group label="Keywords" class="pb-3">
			      			<b-input v-model="jobsTable.query.q" placeholder="Type keywords here" @keyup.enter="$refs.job_search_listing.fetch(true,true)"></b-input>
			      		</b-form-group>
			      		<b-form-group label="Status" class="pb-3">
				        	<b-form-select v-model="jobsTable.query.status" :options="jobsTable.helperFields.statusOptions"></b-form-select>
				      	</b-form-group>
			      		<!--<b-form-group label="PQE" class="pb-3">
					        <div class="pt-4">
					          <kr-slider
					            v-model="jobsTable.helperFields.sliderRangeValue"
					            :data="jobsTable.helperFields.sliderRangeData"
					            :height="2"
					            :dotSize="12"
					            tooltip="always"
					           >
					          </kr-slider>
					        </div>
					    </b-form-group>-->
					    <b-form-group label="Speciality" class="pb-3">
					        <kr-multiselect
					            v-model="jobsTable.query.speciality"
					            :options="jobsTable.helperFields.specialityOptions"
					            :multiple="true"
					            :show-labels="false"
					            :customLabel="function(option){
					              if(option=='in-house'){
					                return 'In-house'
					              }
					              else if(option=='private practice'){
					                return 'Private Practice'
					              }
					              else{
					                return 'Compliance'
					              }
					            }"
					          >
					        </kr-multiselect>
	      				</b-form-group>
	      				  <b-form-group label="Skillsets" class="pb-3">
					        <kr-multiselect
					            v-model="jobsTable.query.skillsets"
					            :options="jobsTable.helperFields.skillsetOptions"
					            :multiple="true"
					            :taggable="true"
					            @tag="jobsTable.addTag"
					            :closeOnSelect="false"
					            :searchable="true"
					            :loading="jobsTable.helperFields.skillsetsLoading" 
					            :internal-search="false"
					            @search-change="jobsTable.fetchSkillsets"
					            :show-labels="false"
					            >
					        </kr-multiselect>
					      </b-form-group>
	    				<b-form-group label="Job Location" class="pb-3">
					        <kr-multiselect
					            v-model="jobsTable.query.locations"
					            :options="kr_var.countriesAndCities"
					            :multiple="true"
					            :searchable="true"
					            :show-labels="false"
					         >
					        </kr-multiselect>
				      </b-form-group>
				      <b-btn pill variant="warning" :block="true" @click="$refs.job_search_listing.fetch(true,true)"><i class="ion ion-md-search mr-2"></i>Search</b-btn>
				      	</div>
			    </div>
		    </b-card>
		</div>
		<div class="col-sm-9">
			<b-card no-body class="default-border">
				<div class="_px-20px _pb-20px">
					<b-card-header header-tag="p" class="with-elements border-top-0 border-left-0 border-right-0 border-warning pl-0 pr-0 _mb-20px" style="border-width:2px">
			        	<div class="card-header-title">Jobs {{jobsTable.tableTitle()}}</div>
			        	<div v-if="$can('create','Job')" class="card-header-elements ml-auto">
			        		<b-button pill variant="warning" @click="$refs['job-cru-component'].openModal()"> <i class="ion ion-md-add-circle mr-2"></i>New</b-button>
			       		</div>
			      	</b-card-header>
			      	<kr-search ref="job_search_listing" :options="{url:'jobs',params:jobsTable.query,hasPagination:true,search_history_id:'jobs.index'}" @retrieved="jobsTable.meta = $event.data.meta;">
			      		<template v-slot:data="{models,query,meta}">
			      			<b-pagination
						      v-model="query.page"
						      :total-rows="meta.total"
						      :per-page="meta.per_page"
						    >
						    </b-pagination>
							<template v-for="(job,idx) in models">
								<div class="_mb-20px">
									<job-card :job="job"></job-card>
								</div>
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
      		</b-card>
		</div>
	</div>
	<job-cru ref="job-cru-component" @created="$refs.job_search_listing.fetch()" @updated="$refs.job_search_listing.fetch()"></job-cru>
</div>
</template>
<script>
export default{
	name:'pages.jobs.index',
	data(){
		var that = this;
		let sliderRangeData = [];
	    for(var i = 0;i<=20;i++){
	      sliderRangeData.push(i+'');
	    }
		return{
			jobsTable:{
				meta:{from:0,to:0,total:0},
				query:{q:'',status:'',pqe_lower:'0',pqe_upper:'20',speciality:[],skillsets:[],locations:[]},
				helperFields:{
					sliderRangeValue:['0','20'],
					sliderRangeData:sliderRangeData,
					specialityOptions:['private practice','in-house','compliance'],
					skillsetOptions:[],
					skillsetsLoading:false,
					statusOptions:[
					 	{
				          value:'',
				          text:'Draft & Active'
				        },
				        {
				          value:'draft',
				          text:'Draft'
				        },
				        {
				          value:'active',
				          text:'Active'
				        },
				        {
				          value:'fulfilled',
				          text:'Fulfilled'
				        },
				        {
				          value:'unfulfilled',
				          text:'Unfulfilled'
				        },
				        {
				          value:'deleted',
				          text:'Deleted'
				        },
			      	],
				},
			    fetchSkillsets: this._.debounce(function(query){
			        that.jobsTable.helperFields.skillsetsLoading = true;
			        if(!query){
			          that.jobsTable.helperFields.skillsetsLoading = false;
			          return;
			        }
			        that.$http.get('/skillsets?q='+encodeURIComponent(query)).then(function(response){
			          that.jobsTable.helperFields.skillsetsLoading = false;
			          that.jobsTable.helperFields.skillsetOptions = that._.map(response.data.data,'skillset');
			        }).catch(function(errors){})
			    },500,{trailing:true}),

				addTag (tag) {
			      that.jobsTable.helperFields.skillsetOptions.push(tag)
			      that.jobsTable.query.skillsets.push(tag)
    			},
    			resetQuery(){
    				that.jobsTable.query = {q:'',status:'',pqe_lower:'0',pqe_upper:'20',speciality:[],skillsets:[],locations:[]};
    				that.jobsTable.helperFields.sliderRangeValue=['0','20'];
    				that.$refs.job_search_listing.fetch(false,true);
    			},
    			tableTitle(){
    				if(that.jobsTable.meta.total==0){
    					return '(0)';
    				}else{
    					return `(${that.jobsTable.meta.from} - ${that.jobsTable.meta.to} of ${that.jobsTable.meta.total})`;
    				}
    			},
			}
		}
	},
	methods:{
		tae(resp){
			console.log(resp)
			return resp;
		}
	},
  	components:{
		'job-cru': require(`./cru.vue`).default,
		'job-card': require(`./partials/job-card.vue`).default,
	},
  	watch:{
	    'jobsTable.helperFields.sliderRangeValue':{
	      handler:function(){
	        this.jobsTable.query.pqe_lower = this.jobsTable.helperFields.sliderRangeValue[0];
	        this.jobsTable.query.pqe_upper = this.jobsTable.helperFields.sliderRangeValue[1];
	      },
	      deep:true
	    },
	}
}
</script>