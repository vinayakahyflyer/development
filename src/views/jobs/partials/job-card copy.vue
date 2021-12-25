<template>
<b-card no-body class="default-border job-card">
    <div class="_p-20px">
        <div class="row">
	        <div :class="{'col-8':hasEditButton&&$can('update','Job'),'col-12':(!hasEditButton||!$can('update','Job'))&&!displayCandidateList,'col-10':(!hasEditButton||!$can('update','Job'))&&displayCandidateList}">
                <div class="row">	
					<div class="col-12" @click="$router.push({name:'jobs.view',params:{id:job.id}})">
						<p class="job-title font-weight-bold">
		          			{{job.job_title}} 
	                        <template v-if="job.pqe_lower!=job.pqe_upper">({{job.pqe_lower}}-{{job.pqe_upper}} PQE)</template>
	                        <template v-else>({{job.pqe_lower}} PQE)</template>
	                        <template v-for="(type,type_idx) in job.employment_type" style="float: right;">
	                            <b-badge variant="success" class="text-capitalize _mr-10px _mb-10px _16px text-success default">{{type}}</b-badge>
	                        </template>
	                        <template v-for="(speciality,speciality_idx) in job.speciality">
	                            <b-badge variant="secondary" class="_143px _mr-10px _mb-10px default">{{speciality}}</b-badge>
	                        </template>
		          		</p>
					</div>
					<!--
					<div class="ml-auto d-flex justify-content-end">
		      			<span @click="$router.push({name:'candidates.view',params:{id:candidate.id}})" class="_143px _mr-20px"><i class="ion ion-md-information-circle mr-2"></i> Status 
	                        <b-badge v-if="job.status=='draft'" variant="secondary" class="_143px default">Draft</b-badge>
	                        <b-badge v-else-if="job.status=='active'" variant="info" class="_143px default">Active</b-badge>
	                        <b-badge v-else-if="job.status=='fulfilled'" variant="success" class="_143px default">Fulfilled</b-badge>
	                        <b-badge v-else-if="job.status=='unfulfilled'" variant="info" class="_143px default">Unfulfilled</b-badge>
	                        <b-badge v-else-if="job.status=='deleted'" variant="warning" class="_143px default">Deleted</b-badge>
					    </span>
						<b-link  v-if="!(hasEditButton&&$can('update','Job'))" class="ml-auto" :to="{name:'jobs.view',params:{id:job.id}}" target="_blank"><i class="ion ion-md-open mr-2"></i></b-link>
		          	</div>
		          	-->
		          	
				</div>
                <div class="clearfix"></div>
                <!--
	            <div class="col-12 d-flex justify-content-between pl-0 pr-0">
                    <div class="flex-grow-1 _143px _mb-20px" @click="goToView"><i class="ion ion-md-information-circle _mr-10px"></i> Status 
                        <b-badge v-if="job.status=='draft'" variant="secondary" class="_143px default">Draft</b-badge>
                        <b-badge v-else-if="job.status=='active'" variant="info" class="_143px default">Active</b-badge>
                        <b-badge v-else-if="job.status=='fulfilled'" variant="success" class="_143px default">Fulfilled</b-badge>
                        <b-badge v-else-if="job.status=='unfulfilled'" variant="info" class="_143px default">Unfulfilled</b-badge>
                        <b-badge v-else-if="job.status=='deleted'" variant="warning" class="_143px default">Deleted</b-badge>
                    </div>
                    <div class="ml-auto _mr-10px" @click="goToView"><i class="ion ion-md-list-box _mr-10px"></i> Reference No.<span class="_mr-10px"></span> <span :class="{'na':!job.reference_no}">{{job.reference_no}}</span>
                    </div>
                    <b-link  v-if="!(hasEditButton&&$can('update','Job'))" class="ml-auto" :to="{name:'jobs.view',params:{id:job.id}}" target="_blank"><i class="ion ion-md-open mr-2"></i></b-link>
                </div>
                <div class="col-12 _215px _mb-20px d-flex pl-0 pr-0" @click="goToView">
                    <span class="border-bottom border-warning _pb-10px font-weight-bold _mr-10px">{{job.job_title}} 
                        <template v-if="job.pqe_lower!=job.pqe_upper">({{job.pqe_lower}}-{{job.pqe_upper}} PQE)</template>
                        <template v-else>({{job.pqe_lower}} PQE)</template>
                    </span>
                    <div>
                        <template v-for="(type,type_idx) in job.employment_type">
                            <b-badge variant="success" class="text-capitalize _mr-10px _mb-10px _16px big text-success default">{{type}}</b-badge>
                        </template>
                    </div>
                </div>
                -->
                <div class="_16px col-12 pl-0 pr-0 d-flex" @click="goToView">
                    <div class="flex-shrink-0 text-success font-weight-semibold _mr-20px"><i class="ion ion-md-business _mr-10px"></i> {{job.company_private}}</div>
                    <div class="d-flex _16px _mb-10px font-weight-light text-info"> 
                        <div><i class="ion ion-md-pin _mr-10px"></i></div>
                        <div class="mb-0" :class="{'na _16px':job.locations==null||job.locations.length==0}">
                            <template v-for="(location,location_idx) in job.locations">
                                <template v-if="location_idx!=0"><span class="mx-1">,</span></template>
                                <span class="mr-1">{{location}}</span>
                            </template>
                        </div>
                    </div>
                </div>
                <div class="d-flex mb-3">
                    <div class="_143px font-weight-semibold">
                        <i class="ion ion-md-globe _mr-10px"></i> Public URL <span class="font-weight-light _ml-10px">{{APP_URL+'/p/jobs/'+job.id+'/view'}}</span>
                    </div>
                    <b-link class="ml-2" :to="{name:'jobs.public.view',params:{id:job.id}}" target="_blank"><i class="ion ion-md-open mr-2"></i></b-link>
                    <b-button size="xs" variant="outline-secondary" v-clipboard:copy="APP_URL+'/p/jobs/'+job.id+'/view'" v-clipboard:success="onCopyClipboard"v-clipboard:error="onErrorClipboard"><i class="fa fa-globe-o"></i>&nbsp;Copy Link</b-button>
                </div> 
                <!--
                <div class="col-12 d-flex pl-0 pr-0" :class="{'_mb-0':job.speciality==null||job.speciality.length==0,'_mb-0':!(job.speciality==null||job.speciality.length==0)}" @click="goToView">
                    <div class="flex-shrink-0 _143px mb-0 _mr-10px font-weight-semibold"><i class="ion ion-md-ribbon _mr-10px"></i> Speciality</div>
                    <div class="mb-0" :class="{'na _143px':job.speciality==null||job.speciality.length==0}">
                        <template v-for="(speciality,speciality_idx) in job.speciality">
                            <b-badge variant="secondary" class="_143px _mr-10px _mb-10px default">{{speciality}}</b-badge>
                        </template>
                    </div>
                </div>
                -->
                <div class="col-12 d-flex pl-0 pr-0" :class="{'_mb-0':job.skillsets==null||job.skillsets.length==0,'_mb-0':!(job.skillsets==null||job.skillsets.length==0)}" @click="goToView">
                    <div class="flex-shrink-0 _143px mb-0 _mr-10px font-weight-semibold"><i class="ion ion-md-ribbon _mr-10px"></i> Skillsets</div>
                    <div class="mb-0" :class="{'na _143px':job.skillsets==null||job.skillsets.length==0}">
                        <template v-for="(skillset,skillset_idx) in job.skillsets">
                            <b-badge variant="warning" class="_143px _mr-10px _mb-10px default">{{skillset}}</b-badge>
                        </template>
                    </div>
                </div>
                <!--
                <div class="d-flex justify-content-between mb-3" @click="goToView">
                    <div class="_143px font-weight-semibold">
                        <i class="ion ion-md-cash _mr-10px"></i> Salary Range  <span class="font-weight-light _ml-10px" :class="{'na':!job.salary_range}">{{job.salary_range}}</span>
                    </div>
                    <div class="_143px font-weight-semibold">
                        <i class="ion ion-md-create _mr-10px"></i> Job Created by <span class="font-weight-light _ml-10px">{{job.created_by_name}}</span>
                    </div>
                </div>
                -->
            </div>
             <div class="col-sm-2" v-if="displayCandidateList">
                <b-card no-body class="h-100 _px-10px _py-10px indent-shadow job-candidate-list">
                    <p class="_16px mb-0 font-weight-semibold">CANDIDATES</p>
                    <div class="d-flex">
                        <b-badge pill class="_143px font-weight-semibold invited _mb-9px _mr-10px _pl-20px text-left"><i class="ion ion-ios-contacts _mr-10px"></i>INVITED</b-badge> 
                        <span class="143px">{{getStatusCount('invited')}}</span> 
                    </div>
                    <div class="d-flex">
                        <b-badge pill class="_143px font-weight-semibold applied _mb-9px _mr-10px _pl-20px text-left"><i class="ion ion-ios-contacts _mr-10px"></i>APPLIED</b-badge>
                         <span class="143px">{{getStatusCount('applied')}}</span> 
                    </div>
                    <div class="d-flex">
                        <b-badge pill class="_143px font-weight-semibold rejected _mb-9px _mr-10px _pl-20px text-left"><i class="ion ion-ios-contacts _mr-10px"></i>REJECTED</b-badge>
                         <span class="143px">{{getStatusCount('rejected')}}</span> 
                    </div>
                    <div class="d-flex">
                        <b-badge pill class="_143px font-weight-semibold short _mb-9px _mr-10px _pl-20px text-left"><i class="ion ion-ios-contacts _mr-10px"></i>SHORT-LISTED</b-badge>
                         <span class="143px">{{getStatusCount('shortlisted')}}</span> 
                    </div>
                    <div class="d-flex">
                        <b-badge pill class="_143px font-weight-semibold interviewed _mb-9px _mr-10px _pl-20px text-left"><i class="ion ion-ios-contacts _mr-10px"></i>INTERVIEWED</b-badge>
                         <span class="143px">{{getStatusCount('interviewed')}}</span> 
                    </div>
                    <div class="d-flex">
                        <b-badge pill class="_143px font-weight-semibold hired _mb-9px _mr-10px _pl-20px text-left"><i class="ion ion-ios-contacts _mr-10px"></i>HIRED</b-badge>
                         <span class="143px">{{getStatusCount('hired')}}</span> 
                    </div>
                </b-card>
            </div>
             <div v-if="hasEditButton&&$can('update','Job')" class="col-sm-2" :class="{'offset-sm-2':!displayCandidateList}">
                <div class="d-flex flex-sm-column justify-content-between h-100">
                    <div class="d-flex _mb-20px align-self-start align-self-sm-end">
                        <b-button class="_w-150px ml-auto _mr-20px" pill variant="warning"  @click="$event.preventDefault();$emit('edit',job)"> <i class="ion ion-md-create"></i>&nbsp; Edit</b-button>
                        <b-link class="ml-auto" :to="{name:'jobs.view',params:{id:job.id}}" target="_blank"><i class="ion ion-md-open mr-2"></i></b-link>
                    </div>
                    <div class="d-sm-flex align-self-sm-end">
                      <b-dropdown variant="warning" class="default-border">
                        <template v-slot:button-content>
                            <div class="border-right d-inline pr-2">More Actions</div>
                        </template>
                         <b-dropdown-item @click="searchCandidates">
                            Find Candidates
                         </b-dropdown-item>
                          <b-dropdown-item @click="openInviteModal">
                            Invite from another job
                         </b-dropdown-item>
                      </b-dropdown>
                    </div>
                </div>
            </div>      
        </div>
       
        <!--
	    <div @click="goToView" v-if="job.updated_at" class="text-right _122px _mt-20px text-muted font-italic"> Last updated on {{convertToReadableDate(job.updated_at,'ddd, DD MMM YYYY').date}} ({{convertToReadableDate(job.updated_at,'ddd, DD MMM YYYY').dateObj.fromNow()}})</div>
		-->
	</div>
     <b-modal id="job-candidate-invite-modal" ref="job-candidate-invite-modal" title="Invite Candidates from another Job" class="modal-top" hide-footer static no-close-on-esc no-close-on-backdrop>
        <kr-form ref="job-candidate-form" v-slot="{flags,actions,data}" :options="formOptions" class="my-2">
            <candidate-form :data="data"></candidate-form>
            <b-btn pill variant="success" :block="true" :disabled="data.model.candidates.length==0" @click="submit()">Invite</b-btn>
        </kr-form>
    </b-modal>
</b-card>
</template>`
<script>
export default{
	props:['job','options'],
    data(){
        var that = this;
        return{
            hasEditButton: this._.get(this,'options.hasEditButton',false),
            displayCandidateList: this._.get(this,'options.displayCandidateList',false),
            APP_URL:process.env.VUE_APP_APP_URL,
            formOptions:{
                fields:{
                    candidates:{default:[],rules:''},
                    //organisation_id:{default:this.krAuth.user().organisation_id,rules:''},
                    job_id:{default:this.job.id,rules:''},
                    status:{default:'invited',rules:''},
                    remarks:{default:'',rules:''}
                },
                successCallback:function(response){
                    that.$refs['job-candidate-invite-modal'].hide()
                    that.$emit('invited');
                },
            },
        }
    },
    methods:{
        openInviteModal(){
            this.form.reset()
            this.$refs['job-candidate-invite-modal'].show()
        },
        submit(){
            this.form.post(`job-associations`);
        },
        searchCandidates(){
            this.$router.push({name:'candidates.index',query:{'job_id':this.job.id}});
        },
        onCopyClipboard(e){
            //alert('copied');
        },
        onErrorClipboard(e){
            
        },
        goToView(){
            this.$router.push({name:'jobs.view',params:{id:this.job.id}});
        },
        getStatusCount(status){
            let c = this._.find(this.job.status_count,function(o){
                return o.status===status;
            })
            if(c){
                return c.count;
            }else{
                return 0;
            }
        }
    },
    computed:{
        form(){
            return this.$refs['job-candidate-invite-modal'].$scopedSlots.default()[0].context.$refs['job-candidate-form'];
        }
    },
    components:{
        'candidate-form': require(`./form-partials/partial.candidate-invitation.vue`).default,
    }
}
</script>
<style>
.job-card{
    cursor:pointer;
}
.job-candidate-list .badge{
    height: 28px;
    line-height:23px;
    width:169px;
}
.job-candidate-list span{
    line-height:2;
}
.indent-shadow{
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.09);
}


	.description > p{
		margin-bottom:0px !important;
	}
	.job-card{
		font-size: 12px;
	}
	.job-card:hover{
		cursor:pointer;
	}
	.job-card p{
		margin: 0 0 4px 0 !important;
	}
	.job-card .job-title{
		font-size: 18px;
	}
	.job-card b{
		color: #999;
	}
	.job-card .skillset {
		margin-right: 4px; margin-bottom: 4px;
	}
</style>