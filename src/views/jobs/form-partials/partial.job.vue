<template>
<div>
    <kr-form-i name="status" v-slot="{validation}" :rules="data.config.status.rules">
      <b-form-group label="Status">
        <b-form-select v-model="data.model.status" :options="statusOptions" :class="{'is-invalid':validation===false,'is-valid':validation===true}"></b-form-select>
      </b-form-group>
    </kr-form-i>
     <kr-form-i v-if="$route.name=='jobs.index'" name="company_id" v-slot="{validation}" :rules="data.config.company_id.rules">
      <b-form-group label="Company">
          <kr-multiselect
              v-model="data.model.company_id"
              :options="companyOptions"
              :multiple="false"
              :searchable="true"
              :closeOnSelect="true"
              :loading="companyLoading" 
              @search-change="fetchCompany"
              :customLabel="companyCustomLabel"
              >
          </kr-multiselect>
        </b-form-group>
      </kr-form-i>
    <kr-form-i name="job_title" v-slot="{validation}" :rules="data.config.job_title.rules">
      <b-form-group label="Job Title">
        <b-input v-model="data.model.job_title" :state="validation"  @keyup.enter="$emit('submit',$event)"/>
      </b-form-group>
    </kr-form-i>
    <kr-form-i name="PQE" v-slot="{validation}">
      <b-form-group :label="`PQE ${data.model.pqe_lower}-${data.model.pqe_upper} Years`">
        <div class="pt-4">
          <kr-slider
            v-model="sliderRangeValue"
            :data="sliderRangeData"
            :height="2"
            :dotSize="12"
            tooltip="always"
           >
          </kr-slider>
        </div>
      </b-form-group>
    </kr-form-i>
    <kr-form-i name="locations" v-slot="{validation}" :rules="data.config.locations.rules">
      <b-form-group label="Company Location">
        <kr-multiselect
            v-model="data.model.locations"
            :options="kr_var.countriesAndCities"
            :multiple="true"
            :searchable="true"
            :taggable="false"
            @tag="addLocationsTag"
         >
        </kr-multiselect>
      </b-form-group>
    </kr-form-i>
     <kr-form-i name="speciality" v-slot="{validation}" :rules="data.config.speciality.rules">
      <b-form-group label="Open to In-house / Private Practice">
        <kr-multiselect
            v-model="data.model.speciality"
            :options="specialityOptions"
            :multiple="true"
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
    </kr-form-i>
    <kr-form-i name="skillsets" v-slot="{validation}" :rules="data.config.skillsets.rules">
      <b-form-group label="Areas of Practice (Legal)">
        <kr-multiselect
            v-model="data.model.skillsets"
            :options="skillsetOptions"
            :multiple="true"
            :searchable="true"
            :taggable="false"
            @tag="addTag"
            :closeOnSelect="false"
            :loading="skillsetsLoading" 
            @search-change="fetchSkillsets"
            >
        </kr-multiselect>
      </b-form-group>
    </kr-form-i>
    <kr-form-i name="languages" v-slot="{validation}" :rules="data.config.languages.rules">
      <b-form-group label="Languages">
        <kr-multiselect
            v-model="data.model.languages"
            :options="kr_var.languages"
            :multiple="true"
            :closeOnSelect="false"
            >
        </kr-multiselect>
      </b-form-group>
    </kr-form-i>
     <kr-form-i name="employment_type" v-slot="{validation}" :rules="data.config.employment_type.rules">
      <b-form-group label="Employment Type">
        <kr-multiselect
            v-model="data.model.employment_type"
            :options="employmentTypeOptions"
            :multiple="true"
            :customLabel="function(option){
              if(option=='full-time'){
                return 'Full-time';
              }
              else if(option=='part-time'){
                return 'Part-time';
              }
              else if(option=='contract'){
                return 'Contract';
              }else{
                return 'Project'
              }
            }"
          >
        </kr-multiselect>
      </b-form-group>
    </kr-form-i>
    <kr-form-i name="salary_range" v-slot="{validation}" :rules="data.config.salary_range.rules">
      <b-form-group label="Salary Range">
        <b-input v-model="data.model.salary_range" :state="validation" @keyup.enter="$emit('submit',$event)"/>
      </b-form-group>
    </kr-form-i>
</div>
</template>
<script>
export default{
  props:['data'],
  created(){
      this.sliderRangeValue[0] = this.data.model.pqe_lower+'';
      this.sliderRangeValue[1] = this.data.model.pqe_upper+'';
  },
  data(){
    var that = this;
    let sliderRangeData = [];
    for(var i = 0;i<=20;i++){
      sliderRangeData.push(i+'');
    }
    return{
       statusOptions:[
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
      specialityOptions:['in-house','private practice','compliance'],
      skillsetOptions:[],
      employmentTypeOptions:['full-time','part-time','contract','project'],
      sliderRangeValue: ['3', '7'],
      sliderRangeData:sliderRangeData,
      skillsetsLoading:false,
      companyOptions:[],
      companies:[],
      companyLoading:false,

      fetchSkillsets: this._.debounce(function(query){
        that.skillsetsLoading = true;
        if(!query){
          that.skillsetsLoading = false;
          return;
        }
        that.$http.get('/recruiter_tags?q='+encodeURIComponent(query)).then(function(response){
          that.skillsetsLoading = false;
          that.skillsetOptions = that._.map(response.data.data,'recruiter_tag');
        }).catch(function(errors){})
      },500,{trailing:true}),

      fetchCompany: this._.debounce(function(query){
        that.companyLoading = true;
        if(!query){
          that.companyLoading = false;
          return;
        }
        that.$http.get('/companies?q='+encodeURIComponent(query)).then(function(response){
          that.companyLoading = false;
          that.companyOptions = that._.map(response.data.data,'id');
          that.companies = response.data.data;
        }).catch(function(errors){})
      },500,{trailing:true}),
    }
  },
  methods:{
    addTag (tag) {
      this.skillsetOptions.push(tag)
      this.data.model.skillsets.push(tag)
    },
    addLocationsTag (tag) {
      this.data.model.locations.push(tag)
    },
    companyCustomLabel(option){
      let a = this._.find(this.companies, ['id', option])
      if(a){
        return a.company_private;
      }
    }
  },
  watch:{
    sliderRangeValue:{
      handler:function(){
        this.data.model.pqe_lower = this.sliderRangeValue[0];
        this.data.model.pqe_upper = this.sliderRangeValue[1];
      },
      deep:true
    },
    'data.model.pqe_lower':{
      handler:function(){
        this.sliderRangeValue[0] = this.data.model.pqe_lower+'';
      },
      deep:true
    },
    'data.model.pqe_upper':{
      handler:function(){
        this.sliderRangeValue[1] = this.data.model.pqe_upper+'';
      },
      deep:true
    },
  }
}
</script>
