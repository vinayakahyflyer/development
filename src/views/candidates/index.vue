<template>
<div>
	<div class="row" v-if="component_done_loading">


		<!-- Search Form (Left) -->

		<div class="col-sm-3">
			<b-card no-body class="_mb-20px">
				<div class="_pb-20px">
				  	<b-card-header header-tag="p" class="border-0 bg-warning pl-0 pr-0">
				  		<div class="_px-20px d-flex">
				        	<div class="_143px font-weight-bold">Candidates Search</div>
				        	<div class="card-header-elements ml-auto">
				        		<a href="javascript:void(0)" class="search-reset-link font-weight-semibold" @click="candidatesTable.resetQuery">Reset All</a>
				       		</div>
				       	</div>
			      	</b-card-header>
			      	<div class="_pt-20px _px-20px">
				      	<b-form-group label="Vertical" class="pb-3">
				        	<b-form-select v-model="candidatesTable.query.vertical" :options="[{value:'',text:'All'},{value:'legal',text:'Legal'},{value:'tech',text:'Tech'}]"></b-form-select>
				      	</b-form-group>

						<b-form-group label="Areas of Practice (Legal)" class="pb-3">
						    <kr-multiselect
						        v-model="candidatesTable.query.recruiter_tags"
						        :options="candidatesTable.helperFields.recTagsOptions"
						        :multiple="true"
						        :taggable="true"
						        @tag="candidatesTable.addRecTag"
						        :closeOnSelect="false"
						        :loading="candidatesTable.helperFields.recLoading"
						        @search-change="candidatesTable.fetchRec"
						        :show-labels="false"
						        >
						    </kr-multiselect>
						</b-form-group>

						<b-form-group label="Skillsets" class="pb-3">
						    <kr-multiselect
						        v-model="candidatesTable.query.skillsets"
						        :options="candidatesTable.helperFields.recTagsOptions"
						        :multiple="true"
						        :taggable="true"
						        @tag="candidatesTable.addRecTag"
						        :closeOnSelect="false"
						        :loading="candidatesTable.helperFields.recLoading"
						        @search-change="candidatesTable.fetchRec"
						        :show-labels="false"
						        >
						    </kr-multiselect>
						</b-form-group>

			      		<b-form-group label="Keywords" class="pb-3">
			      			<b-input v-model="candidatesTable.query.q" placeholder="Type keywords here" @keyup.enter="$refs.candidates_search_listing.fetch(true,true)"></b-input>
			      			<small class="text-muted">Searches name, email, work experiences and education.</small>
			      		</b-form-group>

						<b-form-group class="pb-3">
							<slot name="label">
								<b-form-checkbox v-model="candidatesTable.query._krSearch_pqe_lower"><legend tabindex="-1" class="col-form-label pt-0" id="__BVID__771__BV_label_">Filter by PQE range</legend></b-form-checkbox>
							</slot>
					        <div class="pt-4" v-if="candidatesTable.query._krSearch_pqe_lower">
					          <kr-slider
					            v-model="candidatesTable.helperFields.sliderRangeValue"
					            :data="candidatesTable.helperFields.sliderRangeData"
					            :height="2"
					            :dotSize="12"
					            tooltip="always"
					           >
					          </kr-slider>
					        </div>
					    </b-form-group>

					    <b-form-group label="Candidate Location" class="pb-3">
					        <kr-multiselect
					            v-model="candidatesTable.query.locations"
					            :options="kr_var.countriesAndCities"
					            :multiple="true"
					            :searchable="true"
					            :taggable="true"
					            :closeOnSelect="false"
					            @tag="candidatesTable.addLocationTag"
					            :show-labels="false"
					         >
					        </kr-multiselect>
				      	</b-form-group>

				      	<b-form-group label="Bar Location" class="pb-3">
					        <kr-multiselect
					            v-model="candidatesTable.query.bar_location"
					            :options="kr_var.barLocations"
					            :multiple="true"
					            :searchable="true"
					            :taggable="true"
					            :closeOnSelect="false"
					            @tag="candidatesTable.addBarLocationTag"
					            :show-labels="false"
					         >
					        </kr-multiselect>
				      	</b-form-group>

				      	<b-form-group label="In-house or Private Practice?" class="pb-3">
					        <kr-multiselect
					            v-model="candidatesTable.query.speciality"
					            :options="candidatesTable.helperFields.specialityOptions"
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

				      	<b-form-group label="Open to Work" class="pb-3">
				        	<b-form-select v-model="candidatesTable.query.actively_looking" :options="[{value:'',text:'Doesn’t Matter'},{value:'1',text:'Yes'},{value:'0',text:'No'}]"></b-form-select>
				      	</b-form-group>

			      		<b-form-group label="Response Level" class="pb-3">
				        	<b-form-select v-model="candidatesTable.query.response_level" :options="candidatesTable.helperFields.responseLevelOptions"></b-form-select>
				      	</b-form-group>

				      	<!--
					    <b-form-group label="Skillsets" class="pb-3">
					        <kr-multiselect
					            v-model="candidatesTable.query.skillsets"
					            :options="candidatesTable.helperFields.skillsetOptions"
					            :multiple="true"
					            :taggable="true"
					            @tag="candidatesTable.addTag"
					            :closeOnSelect="false"
					            :searchable="true"
					            :loading="candidatesTable.helperFields.skillsetsLoading"
					            :internal-search="false"
					            @search-change="candidatesTable.fetchSkillsets"
					            :show-labels="false"
					            >
					        </kr-multiselect>
					    </b-form-group>
					    -->

			      		<b-form-group label="Status" class="pb-3">
				        	<b-form-select v-model="candidatesTable.query.status" :options="candidatesTable.helperFields.statusOptions"></b-form-select>
				      	</b-form-group>

			      		<b-btn pill variant="warning" :block="true" @click="$refs.candidates_search_listing.fetch(true,true)"><i class="ion ion-md-search mr-2"></i>Search</b-btn>
			      	</div>
			    </div>
		    </b-card>
		</div>


		<!-- Listings (Right) -->

		<div class="col-sm-9">
			<b-card no-body class="default-border">
				<div class="_px-20px _pb-20px">
					<b-card-header header-tag="p" class="with-elements border-top-0 border-left-0 border-right-0 border-warning pl-0 pr-0 _mb-20px" style="border-width:2px">
			        	<div class="card-header-title">Candidates {{candidatesTable.tableTitle()}}</div>
			        	<div class="card-header-elements ml-auto">
			        		<b-button variant="outline-secondary" v-if="!searchBookmark" @click="searchBookmark=true">Bookmarks</b-button>
			        		<b-button variant="outline-secondary" v-if="searchBookmark" @click="searchBookmark=false">All</b-button>
			        		<b-button v-if="$can('create','Candidate')" pill variant="warning" @click="$refs['candidate-cru-component'].openModal()"> <i class="ion ion-md-add-circle mr-2"></i>New</b-button>
			       		</div>
			      	</b-card-header>
			      	<kr-search ref="candidates_search_listing" :options="{url:url,params:candidatesTable.query,hasPagination:true,search_history_id:'candidates.index',linkParamsOnCreate:this.$route.query.job_id?true:false}"@retrieved="candidatesTable.meta = $event.data.meta;">
			      		<template v-slot:data="{models,meta,query}">
			      			<b-pagination
						      v-model="query.page"
						      :total-rows="meta.total"
						      :per-page="meta.per_page"
						    >
						    </b-pagination>
							<template v-for="(candidate,idx) in models">
				    			<b-card no-body class="candidate-card default-border _mb-20px">
									<div class="_p-20px">
										<div class="row">
											<!-- Previously for holding thumbnails.
											<div class="col-md-2" @click="$router.push({name:'candidates.view',params:{id:candidate.id}})">

											</div>
											<div class="col-10">
											-->
											<div class="col-12">
												<div class="row">
													<div class="col-6" @click="$router.push({name:'candidates.view',params:{id:candidate.id}})">
														<p class="candidate-name _mb-10px font-weight-bold">
										          			{{candidate.name}}
										          		</p>
													</div>
													<div class="ml-auto d-flex justify-content-end">
										      			<span @click="$router.push({name:'candidates.view',params:{id:candidate.id}})" class="_143px _mr-20px"><i class="ion ion-md-information-circle mr-2"></i> Status
													      	<b-badge v-if="candidate.status=='active'" variant="success" class="default">Active</b-badge>
													        <b-badge v-else-if="candidate.status=='flagged'" variant="success" class="default">Flagged</b-badge>
													        <b-badge v-else-if="candidate.status=='deleted'" variant="info" class="default">Deleted</b-badge>
													    </span>

													    <b-link :to="{name:'candidates.view',params:{id:candidate.id}}" target="_blank"><i class="ion ion-md-open mr-2"></i></b-link>
										          	</div>

												</div>
												<div class="row" @click="$router.push({name:'candidates.view',params:{id:candidate.id}})"s>
										          	<!-- Previously for current company, department, title and locations.
											        <div class="col-xs-12 col-md-3">
										          		<p class="_16px _mb-10px font-weight-bold" :class="{'na':!candidate.current_company}">
										          			{{candidate.current_company}}
										          		</p>
										          		<p class="_16px _mb-10px font-weight-light" :class="{'na':!candidate.current_department}">{{candidate.current_department}}</span>
										          		<p class="_16px _mb-10px font-weight-semibold" :class="{'na':!candidate.current_title}">{{candidate.current_title}}</p>
										          		<p class="_16px _mb-10px font-weight-light">
											    			<i class="ion ion-md-pin mr-2"></i>
											    			<template v-for="(location,location_idx) in candidate.locations">
											    				<template v-if="location_idx!=0"><span class="mx-1">,</span></template>
											    				<span class="mr-1">{{location}}</span>
											    			</template>
											                <span v-if="candidate.locations==null||candidate.locations.length==0" class="na"></span>
											    		</p>
										          	</div>
										          	-->
										          	<div class="col">
										          		<div v-if="candidate.vertical == 'legal'">
									              			<!--
										              		<p class="_14.3px mb-0 font-weight-bold">Work Experiences</p>
									              			<div class="border-bottom border-warning w-50"></div>
									              			-->
									              			<p class="font-weight-light">
									              				<b class="title">PQE: </b>
									              				<span :class="{'na':!candidate.cache_bar}">{{candidate.pqe_start ? ( currentYear - candidate.pqe_start + ' - ' ) : ''}}</span>
									              				<template v-for="(bar,bar_idx) in candidate.cache_bar" v-show="candidate.pqe_start">
									              					<template v-if="bar_idx!=0">,</template>
									              					{{bar.location}} {{bar.year?('('+bar.year+')'):''}}
									              				</template>
									              				<template v-if="!candidate.cache_work_experiences">
									              					<span class="na"></span>
									              				</template>
									              			</p>
									              		</div>
										          		<div>
									              			<!--
										              		<p class="_14.3px mb-0 font-weight-bold">Work Experiences</p>
									              			<div class="border-bottom border-warning w-50"></div>
									              			-->
									              			<p class="font-weight-light">
									              				<b>Work: </b>
									              				<template v-for="(work,idx) in candidate.cache_work_experiences">
									              					<template v-if="idx!=0">,</template>
									              					{{work.company}}
									              				</template>
									              				<template v-if="!candidate.cache_work_experiences">
									              					<span class="na"></span>
									              				</template>
									              			</p>
									              		</div>
									              		<div>
									              			<!--
										              		<p class="_14.3px mb-0 font-weight-bold">Education</p>
									              			<div class="border-bottom border-warning w-50"></div>
									              			-->
									              			<p class="font-weight-light">
									              				<b>Education: </b>
									              				<template v-for="(education,idx) in candidate.cache_educations">
									              					<template v-if="idx!=0">,</template>
									              					{{education.institution}}
									              				</template>
									              				<template v-if="!candidate.cache_educations">
									              					<span class="na"></span>
									              				</template>
									              			</p>
									              		</div>
									              		<div v-if="candidate.vertical == 'legal'">
									              			<p class="font-weight-light">
									              				<b>Areas of Practice (Legal): </b>
									              				<template v-for="(recruiter_tag,recruiter_tag_idx) in candidate.recruiter_tags">
									              					<b-badge variant="warning" class="skillset">{{recruiter_tag}}</b-badge>
									              				</template>
									              				<template v-if="!candidate.recruiter_tags">
									              					<span class="na"></span>
									              				</template>
									              				<template>
									              					, {{candidate.other_tags}}
									              				</template>
									              			</p>
									              		</div>
									              		<div>
									              			<p class="font-weight-light">
									              				<b>Skillsets: </b>
									              				<template v-for="(skillset,skillset_idx) in candidate.skillsets">
									              					<b-badge variant="warning" class="skillset">{{skillset}}</b-badge>
									              				</template>
									              				<template v-if="!candidate.skillsets">
									              					<span class="na"></span>
									              				</template>
									              				<template>
									              					, {{candidate.other_tags}}
									              				</template>
									              			</p>
									              		</div>
										          	</div>
									          	</div>
									          	<!-- Previously skillsets section
									          	<div class="row" @click="$router.push({name:'candidates.view',params:{id:candidate.id}})">
									          		<div class="col-9 d-flex">
									          			<div class="flex-shrink-0 _16px mb-0 _mr-10px font-weight-semibold"><i class="ion ion-md-ribbon _mr-10px"style="line-height:22px"></i> Skillsets</div>
										          		<div class="mb-0" :class="{'na _16px':candidate.skillsets==null||candidate.skillsets.length==0}">
											          		<template v-for="(skillset,skillset_idx) in candidate.skillsets">
																<b-badge variant="warning" class="_143px _mr-10px _mb-10px default">{{skillset}}</b-badge>
															</template>
														</div>
									          		</div>

										          	<div class="col-2">

										          	</div>
										        </div>
										        -->
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
      		</b-card>
		</div>
	</div>
	<candidate-cru ref="candidate-cru-component" @created="successfullyCreated" @updated="$refs.candidates_search_listing.fetch()"></candidate-cru>
</div>
</template>
<script>
export default{
	name:'pages.candidates.index',
	data(){
		var that = this;
		let sliderRangeData = [];
	    for(var i = 0;i<=20;i++){
	      sliderRangeData.push(i+'');
	    }
		return{
			component_done_loading:this.$route.query.job_id?false:true,
			currentYear:new Date().getFullYear(),
			candidatesTable:{
				meta:{from:0,to:0,total:0},
				query:{q:'',vertical:'',status:'',actively_looking:'',response_level:'',speciality:[],skillsets:[],_krSearch_pqe_lower:true,_krSearch_pqe_upper:true,pqe_lower:'0',pqe_upper:'30',recruiter_tags:[],other_tags:'',locations:[],bar_location:[]},
				helperFields:{
					statusOptions:[
						/*{
				          value:'',
				          text:'Any'
				        },*/
				        {
				          value:'',
				          text:'Active / Flagged'
				        },
				        {
				          value:'active',
				          text:'Active'
				        },
				        {
				          value:'flagged',
				          text:'Flagged'
				        },
				         {
				          value:'Deleted',
				          text:'Deleted'
				        },
				    ],
					responseLevelOptions:[
						{
				          value:'',
				          text:'Any'
				        },
				        {
				          value:'Warm',
				          text:'Warm'
				        },
				        {
				          value:'Cold',
				          text:'Cold'
				        },
				    ],
				    specialityOptions:['private practice','in-house','compliance'],
				    skillsetOptions:[],
					skillsetsLoading:false,
					recTagsOptions:[],
					recLoading:false,
					sliderRangeValue:['0','20'],
					sliderRangeData:sliderRangeData,
				},
				fetchSkillsets: this._.debounce(function(query){
			        that.candidatesTable.helperFields.skillsetsLoading = true;
			        if(!query){
			          that.candidatesTable.helperFields.skillsetsLoading = false;
			          return;
			        }
			        that.$http.get('/skillsets?q='+encodeURIComponent(query)).then(function(response){
			          that.candidatesTable.helperFields.skillsetsLoading = false;
			          that.candidatesTable.helperFields.skillsetOptions = that._.map(response.data.data,'skillset');
			        }).catch(function(errors){})
			    },500,{trailing:true}),
			    fetchRec: this._.debounce(function(query){
			        that.candidatesTable.helperFields.recLoading = true;
			        if(!query){
			          that.candidatesTable.helperFields.recLoading = false;
			          return;
			        }
			        that.$http.get('/recruiter_tags?q='+encodeURIComponent(query)).then(function(response){
			          that.candidatesTable.helperFields.recLoading = false;
			          that.candidatesTable.helperFields.recTagsOptions = that._.map(response.data.data,'recruiter_tag');
			        }).catch(function(errors){})
			    },500,{trailing:true}),
			    addRecTag(tag){
			    	that.candidatesTable.helperFields.recTagsOptions.push(tag)
			      	that.candidatesTable.query.recruiter_tags.push(tag)
			    },
				addTag (tag) {
			      that.candidatesTable.helperFields.skillsetOptions.push(tag)
			      that.candidatesTable.query.skillsets.push(tag)
    			},
    			addLocationTag (tag) {
			      that.candidatesTable.query.locations.push(tag)
    			},
    			addBarLocationTag (tag) {
			      that.candidatesTable.query.bar_location.push(tag)
    			},
				resetQuery(fetch = true){
    				that.candidatesTable.query = {q:'',status:'active',actively_looking:'',response_level:'',speciality:[],skillsets:[],_krSearch_pqe_lower:true,_krSearch_pqe_upper:true,pqe_lower:'0',pqe_upper:'20',recruiter_tags:[],locations:[],bar_location:[]};
    				that.candidatesTable.helperFields.sliderRangeValue=['0','30'];
    				if(fetch){
    					that.$refs.candidates_search_listing.fetch(false,true);
    				}
    			},
    			tableTitle(){
    				if(that.candidatesTable.meta.total==0){
    					return '(0)';
    				}else{
    					return `(${that.candidatesTable.meta.from} - ${that.candidatesTable.meta.to} of ${that.candidatesTable.meta.total})`;
    				}
    			},
			},
			searchBookmark:false,
			url:'candidates'
		}
	},
	methods:{
		processJob(){
			var that = this;
			this.$http.get(`/jobs/${this.$route.query.job_id}`).then(function(response){
				that.candidatesTable.resetQuery(false);
				that.candidatesTable.query.speciality = response.data.data.speciality;
				that.candidatesTable.query.skillsets = response.data.data.skillsets;
				that.candidatesTable.query.locations = response.data.data.locations;
				that.candidatesTable.query.pqe_lower = response.data.data.pqe_lower;
				that.candidatesTable.query.pqe_upper = response.data.data.pqe_upper;
				that.candidatesTable.helperFields.sliderRangeValue = [that.candidatesTable.query.pqe_lower+"",that.candidatesTable.query.pqe_upper+""];
				var initial = !that.component_done_loading;
				that.component_done_loading = true;
				if(!initial){
					that.$nextTick(function(){
						that.$refs.candidates_search_listing.fetch(true,true)
					});
				}
			})
		},
		successfullyCreated(data){
			this.$router.push({name:'candidates.view',params:{id:data.id}})
		},

	},
  	components:{
		'candidate-cru': require(`./cru.vue`).default,
	},
	mounted(){
		var that = this;
		if(this.component_done_loading){
			this.$nextTick(function(){
				that.candidatesTable.helperFields.sliderRangeValue = [that.candidatesTable.query.pqe_lower,that.candidatesTable.query.pqe_upper];
			});
		}else{
			this.processJob();
		}

	},
	watch:{
	    'candidatesTable.helperFields.sliderRangeValue':{
	      handler:function(){
	        this.candidatesTable.query.pqe_lower = this.candidatesTable.helperFields.sliderRangeValue[0];
	        this.candidatesTable.query.pqe_upper = this.candidatesTable.helperFields.sliderRangeValue[1];
	      },
	      deep:true
	    },
	    'candidatesTable.query._krSearch_pqe_lower':{
	    	handler:function(){
	       	 	this.candidatesTable.query._krSearch_pqe_upper = this.candidatesTable.query._krSearch_pqe_lower;
	      	},
	      	deep:true
	    },
	    '$route.query.job_id':{
	    	handler:function(){
	    		if(this.$route.name=='candidates.index'&&this.$route.query.job_id){
	    			this.processJob();
	    		}
	      	},
	      	deep:true
	    }
	    ,searchBookmark:{
	    	handler:function(){
	    		if(this.searchBookmark){
	    			this.url = `users/${this.krAuth.user().id}/bookmarks`;
	    		}else{
	    			this.url = `candidates`;
	    		}
	    		//
	    		this.$nextTick(function(){
	    			this.candidatesTable.resetQuery();
					//this.$refs.candidates_search_listing.fetch(false,true)
				});
	      	},
	      	deep:true
	    }
	}
}
</script>
<style>
	.description > p{
		margin-bottom:0px !important;
	}
	div.candidate-card{
		font-size: 12px;
	}
	div.candidate-card:hover{
		cursor:pointer;
	}
	div.candidate-card p{
		margin: 0 0 4px 0 !important;
	}
	div.candidate-card .candidate-name{
		font-size: 18px;
	}
	div.candidate-card b{
		color: #999;
	}
	div.candidate-card .skillset {
		margin-right: 4px; margin-bottom: 4px;
	}
</style>
