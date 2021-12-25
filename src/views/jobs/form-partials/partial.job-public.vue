<template>
<div>
    <kr-form-i name="job_description_public" v-slot="{validation}" :rules="data.config.job_description_public.rules">
      <b-form-group label="Description">
        <kr-quill-editor v-model="data.model.job_description_public" :state="validation"></kr-quill-editor>
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
  }
}
</script>