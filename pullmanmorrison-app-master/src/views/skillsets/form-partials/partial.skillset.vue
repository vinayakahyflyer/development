<template>
<div>
  	<kr-form-i name="skillset" v-slot="{validation}" :rules="data.config.skillset.rules">
      <b-form-group label="Skillset">
        <b-input v-model="data.model.skillset" :state="validation" @keyup.enter="$emit('submit',$event)"/>
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