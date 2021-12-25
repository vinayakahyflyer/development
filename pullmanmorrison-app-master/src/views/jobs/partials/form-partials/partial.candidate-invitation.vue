<template>
<div>
  	<b-form-group label="Job">
      <kr-multiselect
          v-model="new_job_id"
          :options="jobOptions"
          :multiple="false"
          :searchable="true"
          :closeOnSelect="true"
          :loading="jobLoading" 
          @search-change="fetchJob"
          :customLabel="jobCustomLabel"
          placeholder="Select a Job"
          >
      </kr-multiselect>
    </b-form-group>
    <b-table-simple v-if="new_job_id">
      <b-thead>
        <b-tr>
          <b-th> 
            <b-form-checkbox
              v-if="candidateList!=0"
                v-model="selectAll"
                @input="toggleAllCheckbox"
              >
            </b-form-checkbox>
          </b-th>
          <b-th>CANDIDATE</b-th>
          <b-th>PQE</b-th>
          <b-th>STATUS</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr v-for="(model,idx) in candidateList">
           <b-td>
            <b-form-checkbox
                v-model="candidateList[idx].selected"
                @input="candidateList.splice();processData"
              >
            </b-form-checkbox>
          </b-td>
          <b-td><a :href="'/candidates/' + model.id + '/view'" target="_blank">{{model.name}}</a></b-td>
          <b-td>{{moment ().year () -  model.pqe_start}}</b-td>
          <b-td>
            <span class="font-weight-bold" :class="{'na':!model.status}">
				<b-badge v-if="model.status=='invited'" pill class="_143px font-weight-semibold invited _mb-9px _mr-10px _pl-20px text-left"><i class="ion ion-md-checkmark-circle-outline _mr-10px"></i>INVITED</b-badge> 
				<b-badge v-if="model.status=='shortlisted'" pill class="_143px font-weight-semibold short _mb-9px _mr-10px _pl-20px text-left"><i class="ion ion-md-checkmark-circle-outline _mr-10px"></i>DECLINED</b-badge>
				<b-badge v-if="model.status=='applied'" pill class="_143px font-weight-semibold applied _mb-9px _mr-10px _pl-20px text-left"><i class="ion ion-md-checkmark-circle-outline _mr-10px"></i> APPLIED</b-badge>
				<b-badge v-if="model.status=='rejected'" pill class="_143px font-weight-semibold rejected _mb-9px _mr-10px _pl-20px text-left"><i class="ion ion-md-close-circle-outline _mr-10px"></i>REJECTED</b-badge>
				<b-badge v-if="model.status=='interviewed'" pill class="_143px font-weight-semibold interviewed _mb-9px _mr-10px _pl-20px text-left"><i class="ion ion-md-checkmark-circle-outline _mr-10px"></i>INTERVIEWED</b-badge>
				<b-badge v-if="model.status=='hired'" pill class="_143px font-weight-semibold hired _mb-9px _mr-10px _pl-20px text-left"><i class="ion ion-md-checkmark-circle-outline _mr-10px"></i>HIRED</b-badge>
            </span>
          </b-td>
        </b-tr>
        <b-tr v-if="candidateList.length==0">
          <b-td colspan="3" class="text-center">NO CANDIDATE</b-td>
        </b-tr>

      </b-tbody>
    </b-table-simple>
</div>
</template>
<script>
import moment from 'moment';
export default{
	props:['data'],
  data(){
    var that = this;
    return{
      jobOptions:[],
      jobs:[],
      jobLoading:false,
      fetchJob: this._.debounce(function(query){
        that.jobLoading = true;
        if(!query&&query!==true){
          that.jobLoading = false;
          return;
        }
        let q =(query===true?'':encodeURIComponent(query));
        that.$http.get('/jobs?q='+q).then(function(response){
          that.jobLoading = false;
          that.jobOptions = that._.map(response.data.data,'id');
          for(var  i = that.jobOptions.length-1;i>=0;i--){
            if(that.jobOptions[i]==that.$route.params.id){
              that.jobOptions.splice(i,1);
            }
          }
          that.jobs = response.data.data;
        }).catch(function(errors){})
      },500,{trailing:true}),
      candidateList:[],
      selectAll:false,
      new_job_id:''
    }
  },
  mounted(){
    this.fetchJob(true)
  },
  methods:{
    processData(){
      this.data.model.candidates = [];
        for(var i = 0; i<this.candidateList.length;i++){
          if(this.candidateList[i].selected){
            this.data.model.candidates.push(this.candidateList[i].id);
          }
        }
    },
    toggleAllCheckbox(){
        for(var i = 0; i<this.candidateList.length;i++){
          this.candidateList[i].selected = this.selectAll;
        }
        this.candidateList.splice()
        this.processData();
    },
    jobCustomLabel(option){
      let a = this._.find(this.jobs, ['id', option])
      if(a){
        return a.job_title + ' (' + a.company_private + ')';
      }
    }
  },
  watch:{
    'new_job_id':{
      handler:function(){
        this.data.model.candidates = [];
        var that = this;
        this.$http.all([this.$http.get(`/jobs/${this.$route.params.id}/candidates`),this.$http.get(`/jobs/${this.new_job_id}/candidates`)])
        .then(responseArr => {
          //ersponseArr[0]
          let a = responseArr[0].data.data;
          that.candidateList = responseArr[1].data.data;
          for(var i  = that.candidateList.length-1; i>=0;i--){
            let idx = this._.findIndex(a,function(o){
              return o.id==that.candidateList[i].id;
            })
            if(idx!=-1){
              that.candidateList.splice(i,1)
            }
            else{
              that.candidateList[i].selected = false;
            }
          }
        });
      },
    },
    candidateList:{
      handler:function(){
        let checked = 0;
        for(var i = 0; i<this.candidateList.length;i++){
          if(this.candidateList[i].selected){
            checked++;
          }
        }
        if(checked == this.candidateList.length){
          this.selectAll = true;
        }else{
          this.selectAll = false;
        }
      },
      deep:true
    }
  }
}
</script>