<template>
<div>
    <kr-form-i name="company_private" v-slot="{validation}" :rules="data.config.company_private.rules">
      <b-form-group label="Company Name (Members View)">
        <b-input v-model="data.model.company_private" :state="validation"  @keyup.enter="$emit('submit',$event)"/>
      </b-form-group>
    </kr-form-i>
    <kr-form-i name="description_private" v-slot="{validation}" :rules="data.config.description_private.rules">
      <b-form-group label="Private Description">
        <kr-quill-editor v-model="data.model.description_private" :state="validation"></kr-quill-editor>
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