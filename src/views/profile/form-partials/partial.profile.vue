<template>
<div>
  	<kr-form-i name="name" v-slot="{validation}" :rules="data.config.name.rules">
      <b-form-group label="Name">
        <b-input v-model="data.model.name" :state="validation"  @keyup.enter="$emit('submit',$event)"/>
      </b-form-group>
    </kr-form-i>
    <kr-form-i name="email" v-slot="{validation}" :rules="data.config.email.rules">
      <b-form-group label="Email">
        <b-input v-model="data.model.email" :state="validation" disabled/>
      </b-form-group> 
    </kr-form-i>
    <kr-form-i name="contact_number" v-slot="{validation}" :rules="data.config.contact_number.rules">
      <b-form-group label="Contact Number">
        <b-input v-model="data.model.contact_number" :state="validation" @keyup.enter="$emit('submit',$event)"/>
      </b-form-group> 
    </kr-form-i>
     <kr-form-i name="password" v-slot="{validation}" :rules="data.config.password.rules">
      <b-form-group label="Password">
        <b-input type="password" v-model="data.model.password" :state="validation" placeholder="Enter password here"  @keyup.enter="$emit('submit',$event)" />
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
          value:'active',
          text:'Active'
        },
        {
          value:'suspended',
          text:'Suspended'
        },
         {
          value:'expired',
          text:'Expired'
        },
      ]
    }
  }
}
</script>