<template>
<div>
  	<kr-form-i name="recruiter_tag" v-slot="{validation}" :rules="data.config.recruiter_tag.rules">
      <b-form-group label="Area of Practice">
        <b-input v-model="data.model.recruiter_tag" :state="validation" @keyup.enter="$emit('submit',$event)"/>
      </b-form-group>
    </kr-form-i>
    <kr-form-i name="aliases" v-slot="{validation}" :rules="data.config.aliases.rules">
      <b-form-group label="Aliases">
        <b-input v-model="data.model.aliases" :state="validation" @keyup.enter="$emit('submit',$event)"/>
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
