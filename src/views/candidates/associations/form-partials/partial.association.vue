<template>
<div>
    <kr-form-i name="status" v-slot="{validation}" :rules="data.config.status.rules">
      <b-form-group label="Status">
        <b-form-select v-model="data.model.status" :options="statusOptions" :state="validation"></b-form-select>
      </b-form-group>
    </kr-form-i>
  	<kr-form-i  v-if="mode=='create'" name="job_id" v-slot="{validation}" :rules="data.config.job_id.rules">
      <b-form-group label="Job">
          <kr-multiselect
              v-model="data.model.job_id"
              :options="jobOptions"
              :multiple="false"
              :searchable="true"
              :closeOnSelect="true"
              :loading="jobLoading" 
              @search-change="fetchJob"
              :customLabel="jobCustomLabel"
              >
          </kr-multiselect>
        </b-form-group>
    </kr-form-i>
     <kr-form-i name="remarks" v-slot="{validation}" :rules="data.config.remarks.rules">
      <b-form-group label="Compose Message">
        <kr-quill-editor v-model="data.model.remarks" :state="validation"></kr-quill-editor>
      </b-form-group>
    </kr-form-i>
</div>
</template>
<script>
export default{
	props:['data','mode'],
  data(){
    var that = this;
    return{
      statusOptions:[
        {
          value:'invited',
          text:'Invited'
        },
        {
          value:'shortlisted',
          text:'Declined'
        },
        {
          value:'applied',
          text:'Applied'
        },
        {
          value:'rejected',
          text:'Rejected'
        },
        {
          value:'interviewed',
          text:'Interviewed'
        },
        {
          value:'hired',
          text:'Hired'
        },
      ],
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
          that.jobs = response.data.data;
        }).catch(function(errors){})
      },500,{trailing:true}),
    }
  },
  mounted(){
    this.fetchJob(true)
  },
  methods:{
    jobCustomLabel(option){
      let a = this._.find(this.jobs, ['id', option])
      if(a){
        return a.job_title + ' (' + a.company_private + ')';
      }
    }
  } 
}
</script>