<template>
<div>
    <kr-form-i name="achievements" v-slot="{validation}" :rules="data.config.achievements.rules">
      <b-form-group label="Degree">
         <b-input v-model="data.model.achievements" :state="validation" @keyup.enter="$emit('submit',$event)"/>
      </b-form-group> 
    </kr-form-i>
    <kr-form-i name="institution" v-slot="{validation}" :rules="data.config.institution.rules">
      <b-form-group label="Institution">
         <b-input v-model="data.model.institution" :state="validation" @keyup.enter="$emit('submit',$event)"/>
      </b-form-group> 
    </kr-form-i>
    <div class="row">
      <div class="col-6">
        <kr-form-i name="start_year" v-slot="{validation}" :rules="data.config.start_year.rules">
          <b-form-group label="Start Year">
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
        <kr-form-i name="end_year" v-slot="{validation}" :rules="data.config.end_year.rules">
          <b-form-group label="End Year">
            <b-form-select v-model="data.model.end_year" :options="endYearOptions" :class="{'is-invalid':validation===false,'is-valid':validation===true}"></b-form-select>
			<!--
            <kr-multiselect
            v-model="data.model.end_year"
            :options="endYearOptions"
            :multiple="false"
            :searchable="true"
			>
			</kr-multiselect>
			-->
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
    }
  },
  mounted(){
    this.initYearOptions();
  },
  methods:{
    initYearOptions(){
      const current_year = new Date().getFullYear();
      const end_limit = this.data.model.end_year?this.data.model.end_year:current_year;
      this.startYearOptions = [''];
      for(var i = end_limit;i>=1950;i--){
        this.startYearOptions.push(i);
      }
      const start_limit = this.data.model.start_year?this.data.model.start_year:1950;
      this.endYearOptions = [''];
      for(var i = start_limit;i<=current_year;i++){
        this.endYearOptions.push(i);
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
      },
      deep:true
    },
    'data.model.end_year':{
      handler:function(){
        if(this.data.model.end_year&&(this.data.model.end_year < this.data.model.start_year)){
          this.data.model.start_year = '';
        }
        this.initYearOptions();
      },
      deep:true
    },
  }
}
</script>