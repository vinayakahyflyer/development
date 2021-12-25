<template>
<div>
    <kr-form-i name="company_public" v-slot="{validation}" :rules="data.config.company_public.rules">
    	<b-form-group label="Company Name (Anonymous View)">
       	 <b-input v-model="data.model.company_public" :state="validation"  @keyup.enter="$emit('submit',$event)"/>
		</b-form-group>
    </kr-form-i>
    <!--<kr-form-i name="description_public" v-slot="{validation}" :rules="data.config.description_public.rules">
      <b-form-group label="Public Description">
        <kr-quill-editor v-model="data.model.description_public" :state="validation"></kr-quill-editor>
      </b-form-group> 
    </kr-form-i>-->
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