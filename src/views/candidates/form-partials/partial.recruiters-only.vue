<template>
<div>
    <kr-form-i name="linkedin_url" v-slot="{validation}" :rules="data.config.linkedin_url.rules">
      <b-form-group label="LinkedIn Url">
        <b-input v-model="data.model.linkedin_url" :state="validation" @keyup.enter="$emit('submit',$event)"/>
      </b-form-group>
    </kr-form-i>
     <kr-form-i name="profile_url" v-slot="{validation}" :rules="data.config.profile_url.rules">
      <b-form-group label="Profile Url">
        <b-input v-model="data.model.profile_url" :state="validation" @keyup.enter="$emit('submit',$event)"/>
      </b-form-group>
    </kr-form-i>
    <kr-form-i name="speciality" v-slot="{validation}" :rules="data.config.speciality.rules">
      <b-form-group label="Speciality">
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
    <kr-form-i name="recruiter_tags" v-slot="{validation}" :rules="data.config.recruiter_tags.rules">
      <b-form-group label="Areas of Practice (Legal)">
        <kr-multiselect
            v-model="data.model.recruiter_tags"
            :options="recTagsOptions"
            :multiple="true"
            @tag="addTag"
            :closeOnSelect="false"
            :loading="recLoading"
            @search-change="fetchRec"
            >
        </kr-multiselect>
      </b-form-group>
    </kr-form-i>
     <kr-form-i name="other_tags">
      <b-form-group label="Other Tags">
        <b-input v-model="data.model.other_tags" @keyup.enter="$emit('submit',$event)"/>
      </b-form-group>
    </kr-form-i>
    <kr-form-i name="actively_looking" v-slot="{validation}" :rules="data.config.profile_url.rules">
      <b-form-group label="Open to Work?">
        <b-form-select v-model="data.model.actively_looking" :options="[{value:'1',text:'Yes'},{value:'0',text:'No'}]"></b-form-select>
      </b-form-group>
    </kr-form-i>
    <kr-form-i name="response_level" v-slot="{validation}" :rules="data.config.profile_url.rules">
      <b-form-group label="Response Level">
        <b-form-select v-model="data.model.response_level" :options="[{value:null,text:'N/A'},{value:'Warm',text:'Warm'},{value:'Cold',text:'Cold'}]"></b-form-select>
      </b-form-group>
    </kr-form-i>
</div>
</template>
<script>
export default{
  props:['data'],
  data(){
    var that = this;
    return{
      recTagsOptions:[],
      specialityOptions:['in-house','private practice','compliance'],
      recLoading:false,
      fetchRec: this._.debounce(function(query){
        that.recLoading = true;
        if(!query){
          that.recLoading = false;
          return;
        }
        that.$http.get('/recruiter_tags?q='+encodeURIComponent(query)).then(function(response){
          that.recLoading = false;
          that.recTagsOptions = that._.map(response.data.data,'recruiter_tag');
        }).catch(function(errors){})
      },500,{trailing:true}),
    }
  },
  methods:{
    addTag (tag) {
      this.recTagsOptions.push(tag)
      this.data.model.recruiter_tags.push(tag)
    }
  },
}
</script>
