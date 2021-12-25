<template>
<div>
  	<kr-form-i name="nationality" v-slot="{validation}" :rules="data.config.nationality.rules">
      <b-form-group label="Nationality">
        <kr-multiselect
            v-model="data.model.nationality"
            :options="kr_var.countries"
            :searchable="true"
            :taggable="true"
            @tag="addNationalityTag"
         >
        </kr-multiselect>
      </b-form-group>
    </kr-form-i>
    <kr-form-i name="locations" v-slot="{validation}" :rules="data.config.locations.rules">
      <b-form-group label="Location">
        <kr-multiselect
            v-model="data.model.locations"
            :options="kr_var.countriesAndCities"
            :multiple="true"
            :searchable="true"
            :taggable="true"
            @tag="addLocationsTag"
         >
        </kr-multiselect>
      </b-form-group>
    </kr-form-i>
    <kr-form-i name="identity_no" v-slot="{validation}" :rules="data.config.identity_no.rules">
      <b-form-group label="Identity No.">
        <b-input v-model="data.model.identity_no" :state="validation" @keyup.enter="$emit('submit',$event)"/>
      </b-form-group>
    </kr-form-i>
     <kr-form-i name="work_permit_no" v-slot="{validation}" :rules="data.config.work_permit_no.rules">
      <b-form-group label="Work Permit No.">
        <b-input v-model="data.model.work_permit_no" :state="validation" @keyup.enter="$emit('submit',$event)"/>
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
  },
  methods:{
    addLocationsTag (tag) {
      this.data.model.locations.push(tag)
    },
    addNationalityTag (tag) {
      this.data.model.nationality = tag;
    },
  }
}
</script>