<template>
<div v-if="component_done_loading">
	<b-card no-body class="default-border">
      	<div class="_p-20px">
      		<div class="row">
	        	<div class="col-sm-10">
				    <div class="row">
				    	 <div class="col-sm-4">
					    	<p class="_215px font-weight-bold _mb-10px" style="line-height:21.5px" :class="{'na':!skillset.skillset}">{{skillset.skillset}}</p>
					        <p class="_143px text-muted" :class="{'na':!skillset.aliases}">{{skillset.aliases}}</p>
					    </div>
				    </div>
		        </div>
	        	<div class="col-sm-2">
	        		<div class="d-flex flex-sm-column justify-content-between h-100">
	        			<div class="d-flex _mb-20px align-self-start align-self-sm-end">
		        			<b-button class="_w-150px ml-auto" pill variant="warning" @click="$refs['skillset-cru-component'].openModal(skillset,'update')"> <i class="ion ion-md-create"></i>&nbsp; Edit</b-button>
		        		</div>
		        		<div class="d-sm-flex align-self-sm-end">
						  <b-dropdown variant="warning" class="default-border">
						  	<template v-slot:button-content>
						    	<div class="border-right d-inline pr-2">More Actions</div>
						    </template>
						    <b-dropdown-item @click="$refs['skillset-cru-component'].openModal({id:skillset.id,status:'suspended'},'status')"> Delete</b-dropdown-item>
						  </b-dropdown>
						</div>
					</div>
	        	</div>
	        </div>
      	</div>
    </b-card>
    <skillset-cru ref="skillset-cru-component" @updated="setSkillset" @deleted="$router.push({name:'skillsets.index'})"></skillset-cru>
</div>
</template>
<script>
export default{
	name:'pages.skillsets.view',
	data(){
		var that = this;
		return{
			skillset:null,
		}
	},
	created(){
		this.component_done_loading = false;
	},
	mounted(){
		this.fetchSkillset();
	},
	methods:{
		setSkillset(data){
			this.skillset = data;
		},	
		fetchSkillset(){
			var that = this;
			this.$http.get(`skillsets/${this.$route.params.id}`).then(
				function(response){
					that.setSkillset(response.data.data);
					that.component_done_loading = true;
				}
			);
		}
	},
	components:{
		'skillset-cru': require(`./cru.vue`).default,
	}

}
</script>