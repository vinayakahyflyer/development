<template>
<div>
	 <b-card no-body class="default-border _mt-20px">
	  	<div class="_px-20px _pb-20px">
		  	<b-card-header header-tag="p" class="with-elements border-top-0 border-left-0 border-right-0 border-warning pl-0 pr-0" style="border-width:2px">
	        	<div class="card-header-title">hjkllgg</div>
	      	</b-card-header>

	      	<div class="row _pt-20px candidates-list">
	      		<div class="col-sm-2">
	      			<b-badge class="_143px font-weight-semibold invited w-100"><i class="ion ion-ios-contacts _mr-10px"></i>INVITED</b-badge>
	      			<draggable id="invited-drag" :list="candidates.invited" draggable=".invited" group="a" @change="processDrop($event,'invited')">
	      				<b-card v-for="(candidate,idx) in candidates.invited" class="invited _my-10px" no-body :key="candidate.job_association_id"  @click="$router.push({name:'candidates.view',params:{id:candidate.id}})">
					    	<div class="_p-10px">
						      	<div class="d-flex">
						      		<!--<div class="_pr-10px">
						      			<img width="20px" height="20px" class="rounded-circle">
						      		</div>-->
						      		<div class="flex-grow-1 text-truncate">
						      			<div class="_16px font-weight-bold mb-0 text-truncate">
						      				{{candidate.name}}
						      			</div>
						      			<div class="_143px d-flex font-weight-bold mb-0">
						      				PQE					      			
						      				<span class="text-muted _ml-10px text-truncate">
						      					{{currentYear - candidate.pqe_start}} years
						      				</span>
						      			</div>
						      			<div class="_143px">
							 				<template v-for="(location,location_idx) in candidate.locations">
							    				<template v-if="location_idx==0">
							    					<span class="mr-1 text-muted _122px">{{location}}</span>
							    				</template>
							    			</template>
							 			</div>
						      		</div>
						   		</div>
							</div>
						</b-card>
		      		</draggable>
	      		</div>
	      		<div class="col-sm-2">
	      			<b-badge class="_143px font-weight-semibold short w-100"><i class="ion ion-ios-contacts _mr-10px"></i>DECLINED</b-badge> 
	      			<draggable id="shortlisted-drag" :list="candidates.shortlisted" draggable=".shortlisted" group="a" @change="processDrop($event,'shortlisted')">
	      				<b-card v-for="(candidate,idx) in candidates.shortlisted" class="shortlisted _my-10px" no-body  :key="candidate.job_association_id" @click="$router.push({name:'candidates.view',params:{id:candidate.id}})">
					    	<div class="_p-10px">
						      	<div class="d-flex">
						      		<!--<div class="_pr-10px">
						      			<img width="20px" height="20px" class="rounded-circle">
						      		</div>-->
						      		<div class="flex-grow-1 text-truncate">
						      			<div class="_16px font-weight-bold mb-0 text-truncate">
						      				{{candidate.name}}
						      			</div>
						      			<div class="_143px d-flex font-weight-bold mb-0">
						      				PQE					      			
						      				<span class="text-muted _ml-10px text-truncate">
						      					{{currentYear - candidate.pqe_start}} years
						      				</span>
						      			</div>
						      			<div class="_143px">
							 				<template v-for="(location,location_idx) in candidate.locations">
							    				<template v-if="location_idx==0">
							    					<span class="mr-1 text-muted _122px">{{location}}</span>
							    				</template>
							    			</template>
							 			</div>
						      		</div>
						   		</div>
							</div>
						</b-card>
		      		</draggable>
	      		</div>
	      		<div class="col-sm-2">
	      			<b-badge class="_143px font-weight-semibold applied w-100"><i class="ion ion-ios-contacts _mr-10px"></i>APPLIED</b-badge>
	      			<draggable id="applied-drag" :list="candidates.applied" draggable=".applied" group="a" @change="processDrop($event,'applied')">
	      				<b-card v-for="(candidate,idx) in candidates.applied" class="applied _my-10px" no-body  :key="candidate.job_association_id"  @click="$router.push({name:'candidates.view',params:{id:candidate.id}})">
					    	<div class="_p-10px">
						      	<div class="d-flex">
						      		<!--<div class="_pr-10px">
						      			<img width="20px" height="20px" class="rounded-circle">
						      		</div>-->
						      		<div class="flex-grow-1 text-truncate">
						      			<div class="_16px font-weight-bold mb-0 text-truncate">
						      				{{candidate.name}}
						      			</div>
						      			<div class="_143px d-flex font-weight-bold mb-0">
						      				PQE					      			
						      				<span class="text-muted _ml-10px text-truncate">
						      					{{currentYear - candidate.pqe_start}} years
						      				</span>
						      			</div>
						      			<div class="_143px">
							 				<template v-for="(location,location_idx) in candidate.locations">
							    				<template v-if="location_idx==0">
							    					<span class="mr-1 text-muted _122px">{{location}}</span>
							    				</template>
							    			</template>
							 			</div>
						      		</div>
						   		</div>
							</div>
						</b-card>
		      		</draggable>
	      		</div>
	      		<div class="col-sm-2">
	      			<b-badge class="_143px font-weight-semibold rejected w-100"><i class="ion ion-ios-contacts _mr-10px"></i>REJECTED</b-badge> 
	      			<draggable id="rejected-drag" :list="candidates.rejected" draggable=".rejected" group="a" @change="processDrop($event,'rejected')">
	      				<b-card v-for="(candidate,idx) in candidates.rejected" class="rejected _my-10px" no-body  :key="candidate.job_association_id" @click="$router.push({name:'candidates.view',params:{id:candidate.id}})">
					    	<div class="_p-10px">
						      	<div class="d-flex">
						      		<!--<div class="_pr-10px">
						      			<img width="20px" height="20px" class="rounded-circle">
						      		</div>-->
						      		<div class="flex-grow-1 text-truncate">
						      			<div class="_16px font-weight-bold mb-0 text-truncate">
						      				{{candidate.name}}
						      			</div>
						      			<div class="_143px d-flex font-weight-bold mb-0">
						      				PQE					      			
						      				<span class="text-muted _ml-10px text-truncate">
						      					{{currentYear - candidate.pqe_start}} years
						      				</span>
						      			</div>
						      			<div class="_143px">
							 				<template v-for="(location,location_idx) in candidate.locations">
							    				<template v-if="location_idx==0">
							    					<span class="mr-1 text-muted _122px">{{location}}</span>
							    				</template>
							    			</template>
							 			</div>
						      		</div>
						   		</div>
							</div>
						</b-card>
		      		</draggable>
	      		</div>
	      		<div class="col-sm-2">
	      			<b-badge class="_143px font-weight-semibold interviewed w-100"><i class="ion ion-ios-contacts _mr-10px"></i>INTERVIEWED</b-badge> 
	      			<draggable id="interviewed-drag" :list="candidates.interviewed" draggable=".interviewed" group="a" @change="processDrop($event,'interviewed')">
	      				<b-card v-for="(candidate,idx) in candidates.interviewed" class="interviewed _my-10px" no-body  :key="candidate.job_association_id" @click="$router.push({name:'candidates.view',params:{id:candidate.id}})">
					    	<div class="_p-10px">
						      	<div class="d-flex">
						      		<!--<div class="_pr-10px">
						      			<img width="20px" height="20px" class="rounded-circle">
						      		</div>-->
						      		<div class="flex-grow-1 text-truncate">
						      			<div class="_16px font-weight-bold mb-0 text-truncate">
						      				{{candidate.name}}
						      			</div>
						      			<div class="_143px d-flex font-weight-bold mb-0">
						      				PQE					      			
						      				<span class="text-muted _ml-10px text-truncate">
						      					{{currentYear - candidate.pqe_start}} years
						      				</span>
						      			</div>
						      			<div class="_143px">
							 				<template v-for="(location,location_idx) in candidate.locations">
							    				<template v-if="location_idx==0">
							    					<span class="mr-1 text-muted _122px">{{location}}</span>
							    				</template>
							    			</template>
							 			</div>
						      		</div>
						   		</div>
							</div>
						</b-card>
		      		</draggable>
	      		</div>
	      		<div class="col-sm-2">
	      			<b-badge class="_143px font-weight-semibold hired w-100"><i class="ion ion-ios-contacts _mr-10px"></i>HIRED</b-badge> 
	      			<draggable id="hired-drag" :list="candidates.hired" draggable=".hired" group="a" @change="processDrop($event,'hired')">
	      				<b-card  v-for="(candidate,idx) in candidates.hired" class="hired _my-10px" no-body  :key="candidate.job_association_id" @click="$router.push({name:'candidates.view',params:{id:candidate.id}})">
					    	<div class="_p-10px">
						      	<div class="d-flex">
						      		<!--<div class="_pr-10px">
						      			<img width="20px" height="20px" class="rounded-circle">
						      		</div>-->
						      		<div class="flex-grow-1 text-truncate">
						      			<div class="_16px font-weight-bold mb-0 text-truncate">
						      				{{candidate.name}}
						      			</div>
						      			<div class="_143px d-flex font-weight-bold mb-0">
						      				PQE					      			
						      				<span class="text-muted _ml-10px text-truncate">
						      					{{currentYear - candidate.pqe_start}} years
						      				</span>
						      			</div>
						      			<div class="_143px">
							 				<template v-for="(location,location_idx) in candidate.locations">
							    				<template v-if="location_idx==0">
							    					<span class="mr-1 text-muted _122px">{{location}}</span>
							    				</template>
							    			</template>
							 			</div>
						      		</div>
						   		</div>
							</div>
						</b-card>
	      			</draggable>
	      		</div>
	      	</div>
	    </div>
    </b-card>
</div>
</template>
<script>
import draggable from 'vuedraggable/src/vuedraggable'
export default{
	components: {
        draggable,
    },
	data(){
		return {
			currentYear:new Date().getFullYear(),
			candidates:{
				invited:[],
				applied:[],
				rejected:[],
				shortlisted:[],
				interviewed:[],
				hired:[]
			},
		}
	},
	created(){
		var that = this;
		that.fetch().then(function(response){
			let data = response.data.data;
			for(var i = 0; i<data.length;i++){
				let a = data[i];
				that.candidates[a.status].push(a);
			}
		});
	},
	methods:{
		processDrop(event,status){
			var that = this;
			if(event.added){
				this.$http.patch(`job-associations/${event.added.element.job_association_id}`,{candidate_id:event.added.element.id,job_id:this.$route.params.id,status:status}).then(function(response){
					that.$emit('added',{status:status});
				});
			}
			if(event.removed){
				this.$emit('deleted',{status:status});
			}
		},
		fetch(){
			return this.$http.get('/jobs/'+this.$route.params.id+'/candidates')
		},
	}
}
</script>
<style scoped>
	.candidates-list .badge{
		height:30px;
		line-height:24px;
	}
	.candidates-list .card{
		height:83px;
		cursor:pointer;
	}
	.card.invited{
    	border:2px solid #def6f9 !important;
	}
	.card.applied{
	    border:2px solid #edeff2 !important;
	}
	.card.rejected{
	   border:2px solid #f9e5e4 !important;
	}
	.card.shortlisted{
	    border:2px solid #f9e5e4 !important;
	}
	.card.interviewed{
	    border:2px solid #e0e8fd !important;
	}
	.card.hired{
	    border:2px solid #d9f5ea !important;
	}
</style>