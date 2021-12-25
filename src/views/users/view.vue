<template>
<div v-if="component_done_loading">
	<b-card no-body class="default-border">
      	<div class="_p-20px">
      		<div class="row">
	        	<div class="col-sm-2">
	        		<img :src="`${publicUrl}img/avatars/5.png`" alt class="ui-w-120 rounded-circle">
	        	</div>
	        	<div class="col-sm-8">
	        		<div class="row">
	        			<div class="col-sm-12 _mb-20px">
	        				<span v-if="user.status=='active'" class="_143px text-capitalize text-success"><i class="ion ion-md-checkmark-circle-outline _mr-10px"></i>
	        					 <b-badge variant="success">{{user.status}}</b-badge>
			  				</span>
			  				<span v-else class="text-uppercase text-danger"><i class="ion ion-md-close-circle-outline _mr-10px"></i>
			  					 <b-badge variant="danger">{{user.status}}</b-badge>
			  				</span>
	        			</div>
				    </div>
				    <div class="row">
				    	 <div class="col-sm-4">
					    	<p class="_215px font-weight-bold _mb-10px" style="line-height:21.5px" :class="{'na':!user.name}">{{user.name}}</p>
					        <p class="_143px text-muted" :class="{'na':!user.role}">{{user.role}}</p>
					    </div>
			        	<div class="col-sm-4">
			        		<p class="d_143px _mb-10px"><i class="ion ion-md-mail _mr-10px"></i><b :class="{'na':!user.email}">{{user.email}}</b></p>
			        	</div>
			        	<div class="col-sm-4">
			        		<p class="_143px _mb-10px"><i class="ion ion-md-call _mr-10px"></i><b :class="{'na':!user.contact_number}">{{user.contact_number}}</b></p>
			        	</div>
				    </div>
				   
		        </div>
	        	<div class="col-sm-2">
	        		<div class="d-flex flex-sm-column justify-content-between h-100">
	        			<div class="d-flex _mb-20px align-self-start align-self-sm-end">
		        			<b-button class="_w-150px ml-auto" pill variant="warning" @click="$refs['user-cru-component'].openModal(user,'update')"> <i class="ion ion-md-create"></i>&nbsp; Edit</b-button>
		        		</div>
		        		<div v-if="krAuth.user().id!=user.id" class="d-sm-flex align-self-sm-end">
						  <b-dropdown variant="warning" class="default-border">
						  	<template v-slot:button-content>
						    	<div class="border-right d-inline pr-2">More Actions</div>
						    </template>
						    <b-dropdown-item v-if="user.status=='active'" @click="$refs['user-cru-component'].openModal({id:user.id,status:'suspended'},'status')"> Suspend</b-dropdown-item>
						    <b-dropdown-item v-else @click="$refs['user-cru-component'].openModal({id:user.id,status:'active'},'status')">Reinstate</b-dropdown-item>
						  </b-dropdown>
						</div>
					</div>
	        	</div>
	        </div>
      	</div>
    </b-card>
    <user-cru ref="user-cru-component" @updated="setUser"></user-cru>
</div>
</template>
<script>
export default{
	name:'pages.organisations.users.view',
	data(){
		var that = this;
		return{
			user:null,
		}
	},
	created(){
		this.component_done_loading = false;
	},
	mounted(){
		this.fetchUser();
	},
	methods:{
		setUser(data){
			this.user = data;
		},	
		fetchUser(){
			var that = this;
			this.$http.get(`users/${this.$route.params.id}`).then(
				function(response){
					that.setUser(response.data.data);
					that.component_done_loading = true;
				}
			);
		}
	},
	components:{
		'user-cru': require(`./cru.vue`).default,
	}

}
</script>