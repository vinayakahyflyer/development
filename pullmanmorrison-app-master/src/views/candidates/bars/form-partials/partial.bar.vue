<template>
<div>
  	<kr-form-i name="location" v-slot="{validation}" :rules="data.config.location.rules">
      <b-form-group label="Location">
        <kr-multiselect
            v-model="data.model.location"
            :options="kr_var.barLocations"
            :searchable="true"
            :taggable="false"
            @tag="addLocationTag"
         >
        </kr-multiselect>
      </b-form-group>
    </kr-form-i>
    <kr-form-i name="year" v-slot="{validation}" :rules="data.config.year.rules">
      <b-form-group label="Year">
        <b-form-select v-model="data.model.year" :options="yearOptions" :class="{'is-invalid':validation===false,'is-valid':validation===true}"></b-form-select>
        <!--
	    <kr-multiselect
        v-model="data.model.year"
        :options="yearOptions"
        :multiple="false"
        :searchable="true"
		>
		</kr-multiselect>
		-->
      </b-form-group> 
    </kr-form-i>
</div>
</template>
<script>
export default{
	props:['data'],
  data(){
    let yearOptions = [];
    const current_year = new Date().getFullYear();
    for(var i = current_year;i>=1970;i--){
        yearOptions.push(i);
    }
    return{
      yearOptions:yearOptions
    }
  },
  methods:{
    addLocationTag (tag) {
      this.data.model.location = tag
    },
  }
}
</script>