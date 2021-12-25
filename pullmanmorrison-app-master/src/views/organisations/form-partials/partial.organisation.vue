<template>
<div>
	 <kr-form-i name="organisation" v-slot="{validation}" :rules="data.config.organisation.rules">
      <b-form-group label="Organisation Name">
        <b-input v-model="data.model.organisation" :state="validation" @keyup.enter="$emit('submit',$event)"/>
      </b-form-group>
    </kr-form-i>
    <kr-form-i name="job_reference_prefix" v-slot="{validation}" :rules="data.config.job_reference_prefix.rules">
      <b-form-group label="Job Reference Prefix">
        <b-input v-model="data.model.job_reference_prefix" :state="validation" @keyup.enter="$emit('submit',$event)"/>
      </b-form-group> 
    </kr-form-i>
    <kr-form-i name="contact_person" v-slot="{validation}" :rules="data.config.contact_person.rules">
      <b-form-group label="Contact Person">
        <b-input v-model="data.model.contact_person" :state="validation" @keyup.enter="$emit('submit',$event)"/>
      </b-form-group> 
    </kr-form-i>
    <kr-form-i name="contact_email" v-slot="{validation}" :rules="data.config.contact_email.rules">
      <b-form-group label="Contact Email">
        <b-input v-model="data.model.contact_email" :state="validation" @keyup.enter="$emit('submit',$event)"/>
      </b-form-group> 
    </kr-form-i>
    <kr-form-i name="contact_number" v-slot="{validation}" :rules="data.config.contact_number.rules">
      <b-form-group label="Contact Number">
        <b-input v-model="data.model.contact_number" :state="validation" @keyup.enter="$emit('submit',$event)"/>
      </b-form-group> 
    </kr-form-i>
    <kr-form-i name="website" v-slot="{validation}" :rules="data.config.website.rules">
      <b-form-group label="Website">
        <b-input v-model="data.model.website" :state="validation" @keyup.enter="$emit('submit',$event)"/>
      </b-form-group> 
    </kr-form-i>
</div>
</template>
<script>
export default{
	props:['data'],

}
</script>