<template>
<div>
     <kr-form-i name="language" v-slot="{validation}" :rules="data.config.language.rules">
      <b-form-group label="Language">
        <kr-multiselect
            v-model="data.model.language"
            :options="kr_var.languages"
            :multiple="false"
            >
        </kr-multiselect>
      </b-form-group>
    </kr-form-i>
    <kr-form-i name="spoken_proficiency" v-slot="{validation}" :rules="data.config.spoken_proficiency.rules">
      <b-form-group label="Spoken Proficiency">
        <b-form-select v-model="data.model.spoken_proficiency" :options="proficiencyOptions" :class="{'is-invalid':validation===false,'is-valid':validation===true}"></b-form-select>
      </b-form-group> 
    </kr-form-i>
     <kr-form-i name="written_proficiency" v-slot="{validation}" :rules="data.config.written_proficiency.rules">
      <b-form-group label="Written Proficiency">
        <b-form-select v-model="data.model.written_proficiency" :options="proficiencyOptions" :class="{'is-invalid':validation===false,'is-valid':validation===true}"></b-form-select>
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
      proficiencyOptions:[
        {
          value:'none',
          text:'None',
        },
        {
          value:'elementary proficiency',
          text:'Elementary Proficiency'
        },
        {
          value:'limited proficiency',
          text:'Limited Working Proficiency'
        },
        {
          value:'professional working proficiency',
          text:'Professional Working proficiency',
        },
        {
          value:'full professional working proficiency',
          text:'Full Professional Working proficiency',
        },
        {
          value:'native or bilingual proficiency',
          text:'Native or bilingual proficiency',
        },
      ],
    }
  },
  mounted(){
    this.initYearOptions();
  },
  methods:{
    initYearOptions(){
      const current_year = new Date().getFullYear();
      const end_limit = this.data.model.end_year?this.data.model.end_year:current_year;
      this.startYearOptions = [];
      for(var i = 1901;i<=end_limit;i++){
        this.startYearOptions.push(i);
      }
      const start_limit = this.data.model.start_year?this.data.model.start_year:1901;
      this.endYearOptions = [];
      for(var i = start_limit;i<=current_year;i++){
        this.endYearOptions.push(i);
      }
    },
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
         if(this.data.model.end_year < this.data.model.start_year){
          this.data.model.start_year = '';
        }
        this.initYearOptions();
      },
      deep:true
    },
  }
}
</script>