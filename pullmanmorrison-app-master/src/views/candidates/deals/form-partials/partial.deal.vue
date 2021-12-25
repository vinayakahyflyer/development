<template>
<div>
    <kr-form-i name="title" v-slot="{validation}" :rules="data.config.title.rules">
      <b-form-group label="Title">
         <b-input v-model="data.model.title" :state="validation" @keyup.enter="$emit('submit',$event)"/>
      </b-form-group> 
    </kr-form-i>
    <kr-form-i name="summary" v-slot="{validation}" :rules="data.config.summary.rules">
      <b-form-group label="Summary">
        <kr-quill-editor v-model="data.model.summary" :state="validation"></kr-quill-editor>
      </b-form-group>
    </kr-form-i>
</div>
</template>
<script>
export default{
	props:['data'],
  data(){
    return{

    }
  },
}
</script>