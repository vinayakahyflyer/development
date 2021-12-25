<template>
<div v-if="component_done_loading">
	<b-card no-body class="default-border">
      	<div class="_p-20px">
      		<div class="row">
	        	<div class="col-sm-10">
				    <div class="row">
				    	 <div class="col-sm-4">
					    	<p class="_215px font-weight-bold _mb-10px" style="line-height:21.5px" :class="{'na':!rectag.recruiter_tag}">{{rectag.recruiter_tag}}</p>
					        <p class="_143px text-muted" :class="{'na':!rectag.aliases}">{{rectag.aliases}}</p>
					    </div>
				    </div>
		        </div>
	        	<div class="col-sm-2">
	        		<div class="d-flex flex-sm-column justify-content-between h-100">
	        			<div class="d-flex _mb-20px align-self-start align-self-sm-end">
		        			<b-button class="_w-150px ml-auto" pill variant="warning" @click="$refs['rectag-cru-component'].openModal(rectag,'update')"> <i class="ion ion-md-create"></i>&nbsp; Edit</b-button>
		        		</div>
		        		<div class="d-sm-flex align-self-sm-end">
						  <b-dropdown variant="warning" class="default-border">
						  	<template v-slot:button-content>
						    	<div class="border-right d-inline pr-2">More Actions</div>
						    </template>
						    <b-dropdown-item @click="$refs['rectag-cru-component'].openModal({id:rectag.id,status:'suspended'},'status')"> Delete</b-dropdown-item>
						  </b-dropdown>
						</div>
					</div>
	        	</div>
	        </div>
      	</div>
    </b-card>
    <rectag-cru ref="rectag-cru-component" @updated="setRecTags" @deleted="$router.push({name:'rectags.index'})"></rectag-cru>
</div>
</template>
<script>
export default{
	name:'pages.rectags.view',
	data(){
		var that = this;
		return{
			rectag:null,
		}
	},
	created(){
		this.component_done_loading = false;
	},
	mounted(){
		this.fetchRecTags();
	},
	methods:{
		setRecTags(data){
			this.rectag = data;
		},	
		fetchRecTags(){
			var that = this;
			this.$http.get(`recruiter_tags/${this.$route.params.id}`).then(
				function(response){
					that.setRecTags(response.data.data);
					that.component_done_loading = true;
				}
			);
		}
	},
	components:{
		'rectag-cru': require(`./cru.vue`).default,
	}

}
</script>