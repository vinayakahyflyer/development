<template>
<div>
	 <b-card no-body class="default-border _mt-20px">
	  	<div class="_px-20px _pb-20px">
		  	<b-card-header header-tag="p" class="with-elements border-top-0 border-left-0 border-right-0 border-warning pl-0 pr-0" style="border-width:2px">
	        	<div class="card-header-title">Languages ({{model_count}})</div>
	        	<div v-if="$can('update','Candidate')" class="card-header-elements ml-auto">
	        		<b-button pill variant="warning" @click="$refs['language-cru-component'].openModal()"> <i class="ion ion-md-add-circle mr-2"></i>New</b-button>
	       		</div>
	      	</b-card-header>

			<kr-search ref="languages_search_listing" :options="{url:`candidates/${this.$route.params.id}/languages`}" @retrieved="model_count = $event.data.data.length">
	      		<template v-slot:data="{models}">
	      			<div class="_pt-20px">
	      				<div class="d-none d-md-block">
			      			<div class="row">
			      				<div class="col-sm-4">

			      				</div>
			      				<div class="col-sm-3">
			      					<p class="_143px font-weight-bold">Spoken</p> 
			      				</div>
			      				<div class="col-sm-3">
			      					<p class="_143px font-weight-bold"><b>Written</b></p> 
			      				</div>
			      			</div>
			      		</div>
		      			<template v-for="(language,idx) in models">
		      				<div class="row _py-10px">
			      				<div class="col-sm-4">
			      					<p class="_143px font-weight-bold">{{language.language}}</p> 
			      				</div>
			      				<div class="col-sm-3">
			      					<span class="_143px text-capitalize">{{language.spoken_proficiency}}</span>
			      				</div>
			      				<div class="col-sm-3">
			      					<span class="_143px text-capitalize">{{language.written_proficiency}}</span>
			      				</div>
			      				<div class="col-sm-2">
			      					<span v-if="$can('update','Candidate')" class="card-header-elements ml-auto"> <i class="ion ion-md-create mr-2"  @click="$refs['language-cru-component'].openModal(language,'update')"></i><i class="ion ion-md-trash text-primary" @click="$refs['language-cru-component'].openModal(language,'delete')"></i></span>
			      				</div>
			      			</div>
			      		</template>
			      	</div>
				</template>
		    </kr-search>
		</div>
    </b-card>
    <language-cru ref="language-cru-component" :candidate_id="$route.params.id" @created="$refs.languages_search_listing.fetch()" @updated="$refs.languages_search_listing.fetch()" @deleted="$refs.languages_search_listing.fetch()"></language-cru>
</div>
</template>
<script>
export default{
	data(){
		return {
			model_count:0
		}
	},
	components:{
		'language-cru': require(`./cru.vue`).default,
	}
}
</script>
