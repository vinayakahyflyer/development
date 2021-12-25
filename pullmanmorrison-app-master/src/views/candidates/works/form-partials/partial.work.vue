<template>
<div>
    <kr-form-i name="title" v-slot="{validation}" :rules="data.config.title.rules">
      <b-form-group label="Title">
         <b-input v-model="data.model.title" :state="validation" @keyup.enter="$emit('submit',$event)"/>
      </b-form-group> 
    </kr-form-i>
    <kr-form-i name="locations" v-slot="{validation}" :rules="data.config.locations.rules">
      <b-form-group label="Current Cities">
        <kr-multiselect
            v-model="data.model.locations"
            :options="kr_var.countriesAndCities"
            :multiple="true"
            :searchable="true"
            :taggable="true"
            @tag="addLocationsTag"
         >
        </kr-multiselect>
      </b-form-group>
    </kr-form-i>
    <kr-form-i name="department" v-slot="{validation}" :rules="data.config.department.rules">
      <b-form-group label="Department">
         <b-input v-model="data.model.department" :state="validation" @keyup.enter="$emit('submit',$event)"/>
      </b-form-group> 
    </kr-form-i>
    <kr-form-i name="company" v-slot="{validation}" :rules="data.config.company.rules">
      <b-form-group label="Company">
         <b-input v-model="data.model.company" :state="validation" @keyup.enter="$emit('submit',$event)"/>
      </b-form-group> 
    </kr-form-i>
    <div class="row">
      <div class="col-6">
        <kr-form-i name="start_year" v-slot="{validation}" :rules="data.config.start_year.rules">
          <b-form-group label="Start Year">
            <!--<kr-select :options="startYearOptions" v-model="data.model.start_year" :state="validation"></kr-select>-->
            <b-form-select v-model="data.model.start_year" :options="startYearOptions" :class="{'is-invalid':validation===false,'is-valid':validation===true}"></b-form-select>
			<!--
			<kr-multiselect
            v-model="data.model.start_year"
            :options="startYearOptions"
            :multiple="false"
            :searchable="true"
			>
			</kr-multiselect>
			-->
          </b-form-group> 
        </kr-form-i>
      </div>
      <div class="col-6">
        <kr-form-i name="start_month" v-slot="{validation}" :rules="data.config.start_month.rules">
          <b-form-group label="Start Month">
            <b-form-select v-model="data.model.start_month" :options="startMonthOptions" :class="{'is-invalid':validation===false,'is-valid':validation===true}" :disabled="!data.model.start_year"></b-form-select>
          </b-form-group> 
        </kr-form-i>
      </div>
    </div>

    <div class="row">
      <div class="col-6">
        <kr-form-i name="end_year" v-slot="{validation}" :rules="data.config.end_year.rules">
          <b-form-group label="End Year">
            <b-form-select v-model="data.model.end_year" :options="endYearOptions" :class="{'is-invalid':validation===false,'is-valid':validation===true}"></b-form-select>
            <!--
	        <kr-multiselect
            v-model="data.model.end_year"
            :options="endYearOptions"
            :multiple="false"
            :searchable="true"
            :disabled="!data.model.start_year"
			>
			</kr-multiselect>
          	-->
          </b-form-group> 
        </kr-form-i>
      </div>
      <div class="col-6">
        <kr-form-i name="end_month" v-slot="{validation}" :rules="data.config.end_month.rules">
          <b-form-group label="End Month">
            <b-form-select v-model="data.model.end_month" :options="endMonthOptions" :class="{'is-invalid':validation===false,'is-valid':validation===true}"
             :disabled="!data.model.end_year"
            ></b-form-select>
          </b-form-group> 
        </kr-form-i>
      </div>
      
    </div>
    <kr-form-i name="remarks" v-slot="{validation}" :rules="data.config.remarks.rules">
      <b-form-group label="Remarks">
        <kr-quill-editor v-model="data.model.remarks" :state="validation"></kr-quill-editor>
      </b-form-group>
    </kr-form-i>
</div>
</template>
<script>
var moment = require('moment')
export default{
	props:['data'],
  data(){
    let yearOptions  = [];
    return{
      statusOptions:[
        {
          value:null,
          text:'Please select an option',
          disabled:true
        },
        {
          value:'active',
          text:'Active'
        },
        {
          value:'left',
          text:'Left'
        },
      ],
      startYearOptions:[],
      endYearOptions:[],
      startMonthOptions:[],
      endMonthOptions:[],
      months:['January','February','March','April','May','June','July','August','September','October','November','December']
    }
  },
  mounted(){
    this.initYearOptions();
  },
  methods:{
    addLocationsTag (tag) {
      this.data.model.locations.push(tag)
    },
    initYearOptions(){
      const current_year = new Date().getFullYear();
      const end_limit_year = this.data.model.end_year?this.data.model.end_year:current_year;
      const current_month = parseInt(moment().format('MM'));
     
      this.startYearOptions = [''];
      for(var i = end_limit_year;i>=1950;i--){
        this.startYearOptions.push(i);
      }

      const start_limit_year = this.data.model.start_year?this.data.model.start_year:1950;

      this.endYearOptions = [''];
      for(var i = current_year;i>=start_limit_year;i--){
        this.endYearOptions.push(i);
      }

      var end_limit_month = this.data.model.end_month?this.data.model.end_month:12;
      var start_limit_month = this.data.model.start_month?this.data.model.start_month:1;

      if(this.data.model.start_year!=this.data.model.end_year&&this.data.model.start_year){
        end_limit_month = 12;
        start_limit_month = 1;
      }
      this.startMonthOptions = [''];
      for(var i = 1;i<=end_limit_month;i++){
        this.startMonthOptions.push({value:i,text:this.months[i-1]});
      }

      this.endMonthOptions = [''];

      for(var i = start_limit_month;i<=12;i++){
        this.endMonthOptions.push({value:i,text:this.months[i-1]});
      }
    }
  },
  watch:{
    'data.model.start_year':{
      handler:function(){
        if(this.data.model.start_year > this.data.model.end_year){
          this.data.model.end_year = '';
        }
        this.initYearOptions();
        if(!this.data.model.start_year){
          this.data.model.start_month = null;
          this.data.model.end_month = null;
          this.data.model.end_year = null;
        }
      },
      deep:true
    },
    'data.model.end_year':{
      handler:function(){
        if(this.data.model.end_year&&(this.data.model.end_year < this.data.model.start_year)){
          this.data.model.start_year = '';
        }
        this.initYearOptions();
        if(!this.data.model.end_year){
          this.data.model.end_month = null;
        }
      },
      deep:true
    },
    'data.model.start_month':{
      handler:function(){
        if(this.data.model.start_month > this.data.model.end_month &&(this.data.model.start_year==this.data.model.end_year&&this.data.model.start_year)){
          this.data.model.end_month = '';
        }
        this.initYearOptions();
      },
      deep:true
    },
    'data.model.end_month':{
      handler:function(){
         if(this.data.model.end_month < this.data.model.start_month &&(this.data.model.start_year==this.data.model.end_year&&this.data.model.start_year)){
          this.data.model.start_month = '';
        }
        this.initYearOptions();
      },
      deep:true
    },
  }
}
</script>