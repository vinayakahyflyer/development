<template>
<div>
    <kr-form-i name="vertical">
      <b-form-group label="Vertical">
        <b-form-select v-model="data.model.vertical" :options="[{value:'legal',text:'Legal'},{value:'tech',text:'Tech'}]"></b-form-select>
      </b-form-group>
    </kr-form-i>
    <kr-form-i name="status" v-slot="{validation}" :rules="data.config.status.rules">
      <b-form-group label="Status">
        <b-form-select v-model="data.model.status" :options="statusOptions" :state="validation"></b-form-select>
      </b-form-group>
    </kr-form-i>
    <kr-form-i name="name" v-slot="{validation}" :rules="data.config.name.rules">
      <b-form-group label="Name">
        <b-input v-model="data.model.name" :state="validation" @keyup.enter="$emit('submit',$event)"/>
      </b-form-group>
    </kr-form-i>
    <kr-form-i name="email" v-slot="{validation}" :rules="data.config.email.rules">
      <b-form-group label="Email">
        <b-input v-model="data.model.email" :state="validation" @keyup.enter="$emit('submit',$event)"/>
      </b-form-group>
    </kr-form-i>
    <kr-form-i name="email_alt" v-slot="{validation}" :rules="data.config.email_alt.rules">
      <b-form-group label="Email Alt">
        <b-input v-model="data.model.email_alt" :state="validation" @keyup.enter="$emit('submit',$event)"/>
      </b-form-group>
    </kr-form-i>
    <kr-form-i name="phone" v-slot="{validation}" :rules="data.config.phone.rules">
      <b-form-group label="Contact No.">
        <b-input v-model="data.model.phone" :state="validation" @keyup.enter="$emit('submit',$event)"/>
      </b-form-group>
    </kr-form-i>
    <kr-form-i name="phone_alt" v-slot="{validation}" :rules="data.config.phone_alt.rules">
      <b-form-group label="Contact No. Alt">
        <b-input v-model="data.model.phone_alt" :state="validation" @keyup.enter="$emit('submit',$event)"/>
      </b-form-group>
    </kr-form-i>
    <kr-form-i name="wechat" v-slot="{validation}" :rules="data.config.wechat.rules">
      <b-form-group label="WeChat">
        <b-input v-model="data.model.wechat" :state="validation" @keyup.enter="$emit('submit',$event)"/>
      </b-form-group>
    </kr-form-i>
    <!--<kr-form-i name="birthdate" v-slot="{validation}" :rules="data.config.birthdate.rules">
      <b-form-group label="Birthdate">
        <kr-date v-model="data.model.birthdate" :config="{enableTime: false,enableSeconds:false,
      altInput: true,dateFormat: 'Ymd'}" :state="validation"></kr-date>
      </b-form-group>
    </kr-form-i>-->
    <kr-form-i name="birthdate" v-slot="{validation}" :rules="data.config.birthdate.rules">
      <b-form-group label="Birthdate">
        <kr-date v-model="data.model.birthdate" :_select="true" :state="validation"  :config="{enableTime: false,enableSeconds:false,
      altInput: true,dateFormat: 'YYYYMMDD'}"></kr-date>
      </b-form-group>
    </kr-form-i>
    <kr-form-i name="skillsets" v-slot="{validation}" :rules="data.config.skillsets.rules">
      <b-form-group label="Skillsets">
        <kr-multiselect
            v-model="data.model.skillsets"
            :options="skillsetOptions"
            :multiple="true"
            :taggable="true"
            @tag="addTag"
            :closeOnSelect="false"
            :searchable="true"
            :loading="skillsetsLoading"
            @search-change="fetchSkillsets"
            >
        </kr-multiselect>
      </b-form-group>
    </kr-form-i>
</div>
</template>
<script>
export default{
  props:['data'],
  data(){
    var that = this;
    let sliderRangeData = [];
    for(var i = 0;i<=20;i++){
      sliderRangeData.push(i+'');
    }
    return{
      statusOptions:[
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
      skillsetOptions:[],
      sliderRangeValue:3,
      sliderRangeData:sliderRangeData,
      pqeStartOptions:[],
      skillsetsLoading:false,
      fetchSkillsets: this._.debounce(function(query){
        that.skillsetsLoading = true;
        if(!query){
          that.skillsetsLoading = false;
          return;
        }
        that.$http.get('/skillsets?q='+encodeURIComponent(query)).then(function(response){
          that.skillsetsLoading = false;
          that.skillsetOptions = that._.map(response.data.data,'skillset');
        }).catch(function(errors){})
      },500,{trailing:true}),
    }
  },
  methods:{
    addTag (tag) {
      this.skillsetOptions.push(tag)
      this.data.model.skillsets.push(tag)
    },
   initYearOptions(){
      const current_year = new Date().getFullYear();
      this.pqeStartOptions = [];
      for(var i = 1901;i<=current_year;i++){
        this.pqeStartOptions.push(i);
      }

    }
  },
   watch:{
    sliderRangeValue:{
      handler:function(){
        this.data.model.pqe_start = this.sliderRangeValue;
      },
      deep:true
    },
    'data.model.pqe_start':{
      handler:function(){
        this.sliderRangeValue = this.data.model.pqe_start+'';
      },
      deep:true
    },
  }
}
</script>
