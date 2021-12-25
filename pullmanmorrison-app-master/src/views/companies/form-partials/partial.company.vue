<template>
	<div>
		<kr-form-i name="status" v-slot="{validation}" :rules="data.config.status.rules">
			<b-form-group label="Status">
				<b-form-select v-model="data.model.status" :options="statusOptions" :state="validation"></b-form-select>
			</b-form-group>
		</kr-form-i>
		<kr-form-i name="company_private" v-slot="{validation}" :rules="data.config.company_private.rules">
			<b-form-group label="Company">
				<b-input id="private_name_input" v-model="data.model.company_private" :state="validation"  @keyup.enter="$emit('submit',$event)"/>
			</b-form-group>
		</kr-form-i>
		<!--<kr-form-i name="company_public" v-slot="{validation}" :rules="data.config.company_public.rules">
			<b-form-group label="Public Name">
				<b-input v-model="data.model.company_public" :state="validation"  @keyup.enter="$emit('submit',$event)"/>
			</b-form-group>
		</kr-form-i>-->
		<!--<kr-form-i name="company_public" v-slot="{validation}" :rules="data.config.company_public.rules">
			<b-form-group label="Public Name">
				<kr-multiselect
				v-model="data.model.company_public"
				:options="publicNameOptions"
				:multiple="false"
				:searchable="true"
				:taggable="true"
				@tag="addPublicNameTag"
				:closeOnSelect="true"
				:loading="publicNamesLoading"
				@search-change="fetchPublicNames"
				>
				</kr-multiselect>
			</b-form-group>
		</kr-form-i>-->
		<kr-form-i name="locations" v-slot="{validation}" :rules="data.config.locations.rules">
			<b-form-group label="Headquarters">
				<kr-multiselect
					v-model="data.model.locations"
					:options="kr_var.countriesAndCities"
					:multiple="true"
					:searchable="true"
					:taggable="false"
					:closeOnSelect="true"
					@tag="addLocationsTag"
				>
				</kr-multiselect>
			</b-form-group>
		</kr-form-i>
		<kr-form-i name="locations_others" v-slot="{validation}" :rules="data.config.locations.rules">
			<b-form-group label="Offices">
				<kr-multiselect
					v-model="data.model.locations_others"
					:options="kr_var.countriesAndCities"
					:multiple="true"
					:searchable="true"
					:taggable="false"
					:closeOnSelect="true"
					@tag="addLocationsTag"
				>
				</kr-multiselect>
			</b-form-group>
		</kr-form-i>
		<kr-form-i name="type" v-slot="{validation}" :rules="data.config.type.rules">
			<b-form-group label="Type">
				<b-form-select v-model="data.model.type" :state="validation">
					<option value="Educational Institution">Educational Institution</option>
					<option value="Government Agency">Government Agency</option>
					<option value="Nonprofit">Nonprofit</option>
					<option value="Privately Held">Privately Held</option>
					<option value="Public Company">Public Company</option>
					<option value="Start up">Start up</option>
				</b-form-select>
			</b-form-group>
		</kr-form-i>
		<kr-form-i name="size" v-slot="{validation}" :rules="data.config.size.rules">
			<b-form-group label="Company Size">
				<b-form-select v-model="data.model.size" :state="validation">
					<option value="0 - 1 Employees">0 - 1 Employees</option>
					<option value="1 - 10 Employees">1 - 10 Employees</option>
					<option value="11 - 50 Employees">11 - 50 Employees</option>
					<option value="51 - 200 Employees">51 - 200 Employees</option>
					<option value="201 - 500 Employees">201 - 500 Employees</option>
					<option value="501 - 1,000 Employees">501 - 1,000 Employees</option>
					<option value="1,001 - 5,000 Employees">1,001 - 5,000 Employees</option>
					<option value="5,000 - 10,000 Employees">5,000 - 10,000 Employees</option>
					<option value="10,000+ Employees">10,000+ Employees</option>
				</b-form-select>
			</b-form-group>
		</kr-form-i>
		<kr-form-i name="industries" v-slot="{validation}" :rules="data.config.industries.rules">
			<b-form-group label="Industries">
				<kr-multiselect
				v-model="data.model.industries"
				:options="industryOptions"
				:multiple="true"
				:searchable="true"
				:taggable="false"
				@tag="addTag"
				:closeOnSelect="false"
				:loading="industriesLoading"
				@search-change="fetchIndustries"
				>
				</kr-multiselect>
			</b-form-group>
		</kr-form-i>
		<kr-form-i name="contact" v-slot="{validation}" :rules="data.config.contact.rules">
			<b-form-group label="Contact No.">
				<b-input v-model="data.model.contact" :state="validation"  @keyup.enter="$emit('submit',$event)"/>
			</b-form-group>
		</kr-form-i>
		<kr-form-i name="address" v-slot="{validation}" :rules="data.config.address.rules">
			<b-form-group label="Address">
				<b-textarea v-model="data.model.address" :state="validation" rows="3" no-resize/>
			</b-form-group>
		</kr-form-i>
		<kr-form-i name="website" v-slot="{validation}" :rules="data.config.website.rules">
			<b-form-group label="Website">
				<b-input v-model="data.model.website" :state="validation"  @keyup.enter="$emit('submit',$event)"/>
			</b-form-group>
		</kr-form-i>
	</div>
</template>
<script>
export default{
  props:['data'],
  data(){
    var that = this;
    return{
      statusOptions:[
        {
          value:'active',
          text:'Active'
        },
        //{
        //  value:'suspended',
        //  text:'Suspended'
        //},
         {
          value:'deleted',
          text:'Deleted'
        },
      ],

      publicNameOptions:[],
      publicNamesLoading:false,

      industryOptions:[],
      industriesLoading:false,

      fetchPublicNames: this._.debounce(function(query){
        that.publicNamesLoading = true;
        if(!query){
          that.publicNamesLoading = false;
          return;
        }
        that.$http.get('/public-names?q='+encodeURIComponent(query)).then(function(response){
          that.publicNamesLoading = false;
          that.publicNameOptions = that._.map(response.data,'company_public');
        }).catch(function(errors){})
      },500,{trailing:true}),

      fetchIndustries: this._.debounce(function(query){
        that.industriesLoading = true;
        if(!query){
          that.industriesLoading = false;
          return;
        }
        that.$http.get('/industries?q='+encodeURIComponent(query)).then(function(response){
          that.industriesLoading = false;
          that.industryOptions = that._.map(response.data.data,'industry');
        }).catch(function(errors){})
      },500,{trailing:true}),

    }
  },
  methods: {
    addTag (tag) {
      this.industryOptions.push(tag)
      this.data.model.industries.push(tag)
    },
    addPublicNameTag (tag) {
      this.publicNameOptions.push(tag)
      this.data.model.company_public = tag
    },
    addLocationsTag (tag) {
      this.data.model.locations.push(tag)
    },
   }
}
</script>
