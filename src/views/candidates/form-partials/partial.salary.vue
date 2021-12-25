<template>
<div>
  	<kr-form-i name="current_salary" v-slot="{validation}" :rules="data.config.current_salary.rules">
      <b-form-group label="Current Salary">
        <b-input v-model="data.model.current_salary" :state="validation" @keyup.enter="$emit('submit',$event)"/>
      </b-form-group>
    </kr-form-i>
    <kr-form-i name="current_bonuses" v-slot="{validation}" :rules="data.config.current_bonuses.rules">
      <b-form-group label="Current Bonuses">
        <b-input v-model="data.model.current_bonuses" :state="validation" @keyup.enter="$emit('submit',$event)"/>
      </b-form-group>
    </kr-form-i>
     <kr-form-i name="current_notice_period" v-slot="{validation}" :rules="data.config.current_notice_period.rules">
      <b-form-group label="Notice Period">
        <b-input v-model="data.model.current_notice_period" :state="validation" @keyup.enter="$emit('submit',$event)"/>
      </b-form-group>
    </kr-form-i>
    <kr-form-i name="expected_salary" v-slot="{validation}" :rules="data.config.expected_salary.rules">
      <b-form-group label="Expected Salary">
        <b-input v-model="data.model.expected_salary" :state="validation" @keyup.enter="$emit('submit',$event)"/>
      </b-form-group>
    </kr-form-i>
    <kr-form-i name="expected_bonuses" v-slot="{validation}" :rules="data.config.expected_bonuses.rules">
      <b-form-group label="Expected Bonuses">
        <b-input v-model="data.model.expected_bonuses" :state="validation" @keyup.enter="$emit('submit',$event)"/>
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