<template>
<div>
    <kr-form-i name="datetime" v-slot="{validation}" :rules="data.config.datetime.rules">
      <b-form-group label="Date and Time">
        <kr-date v-model="data.model.datetime" :config="{enableTime: true,enableSeconds:true,
      altInput: true}" :state="validation"></kr-date>
      </b-form-group> 
    </kr-form-i>
    <kr-form-i name="contacted_by" v-slot="{validation}" :rules="data.config.contacted_by.rules">
      <b-form-group label="Contacted By">
        <b-input v-model="data.model.contacted_by" :state="validation" @keyup.enter="$emit('submit',$event)"/>
      </b-form-group>
    </kr-form-i>
    <kr-form-i name="remarks" v-slot="{validation}" :rules="data.config.remarks.rules">
      <b-form-group label="Remarks">
        <kr-quill-editor v-model="data.model.remarks" :state="validation"></kr-quill-editor>
        <!--<b-input v-model="data.model.remarks" :state="validation"/>-->
      </b-form-group>
    </kr-form-i>
</div>
</template>
<script>
export default{
	props:['data'],
  data(){
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
      ]
    }
  }
}
</script>