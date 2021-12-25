<template>
<div>
    <kr-form-i name="status" v-slot="{validation}" :rules="data.config.status.rules">
      <b-form-group label="Status">
        <b-form-select v-model="data.model.status" :options="statusOptions" :class="{'is-invalid':validation===false,'is-valid':validation===true}"></b-form-select>
      </b-form-group>
    </kr-form-i>
    <kr-form-i name="label" v-slot="{validation}" :rules="data.config.label.rules">
      <b-form-group label="Label">
        <b-input v-model="data.model.label" :state="validation" @keyup.enter="$emit('submit',$event)"/>
      </b-form-group> 
    </kr-form-i>
    <kr-form-i name="name" v-slot="{validation}" :rules="data.config.name.rules">
      <b-form-group label="Name">
        <b-input v-model="data.model.name" :state="validation" @keyup.enter="$emit('submit',$event)"/>
      </b-form-group>
    </kr-form-i>
    <kr-form-i name="title" v-slot="{validation}" :rules="data.config.title.rules">
      <b-form-group label="Title">
        <b-input v-model="data.model.title" :state="validation" @keyup.enter="$emit('submit',$event)"/>
      </b-form-group> 
    </kr-form-i>
    <kr-form-i name="email" v-slot="{validation}" :rules="data.config.email.rules">
      <b-form-group label="Email">
        <b-input v-model="data.model.email" :state="validation" @keyup.enter="$emit('submit',$event)"/>
      </b-form-group>
    </kr-form-i>
    <kr-form-i name="phone" v-slot="{validation}" :rules="data.config.phone.rules">
      <b-form-group label="Contact Number">
        <b-input v-model="data.model.phone" :state="validation" @keyup.enter="$emit('submit',$event)"/>
      </b-form-group>
    </kr-form-i>
    <kr-form-i name="linkedin_url" v-slot="{validation}" :rules="data.config.linkedin_url.rules">
      <b-form-group label="LinkedIn Url">
        <b-input v-model="data.model.linkedin_url" :state="validation" @keyup.enter="$emit('submit',$event)"/>
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