<template>
<div v-if="component_done_loading">

	<b-card no-body class="default-border">
		<div class="_p-20px">
			<div class="row">
	        	<div class="col-sm-4">
	        		<div class="media">
		              <img :src="`${publicUrl}img/avatars/5.png`" alt class="ui-w-120">
		              <div class="media-body ml-3">
		                <p class="_215px font-weight-bold _mb-10px" style="line-height:21.5px" :class="{'na':!organisation.organisation}">{{organisation.organisation}}</p>
		                <p class="_143px font-weight-semibold" :class="{'na':!organisation.job_reference_prefix}">{{organisation.job_reference_prefix}}</p>
		              </div>
		            </div>
	        	</div>
	        	<div class="col-sm-3">
	        		<p class="_143px _mb-10px"><i class="ion ion-md-contact _mr-10px"></i><b :class="{'na':!organisation.contact_person}">{{organisation.contact_person}}</b></p>
	        		<p class="_143px"><i class="ion ion-md-globe _mr-10px"></i>
	        			<a v-if="organisation.website" :href="organisation.website" target="_blank">{{organisation.website}}</a>
	        			<span v-else class="na"></span>
	        		</p>
	        	</div>
	        	<div class="col-sm-3">
	        		<p class="_143px _mb-10px"><i class="ion ion-md-mail _mr-10px"></i><b :class="{'na':!organisation.contact_email}">{{organisation.contact_email}}</b></p>
	        		<p class="_143px _mb-10px"><i class="ion ion-md-call _mr-10px"></i><b :class="{'na':!organisation.contact_number}">{{organisation.contact_number}}</b></p>
	        	</div>
	        	<div class="col-sm-2">
	        		<div  v-if="$can('update','Organisation')" class="d-flex flex-sm-column justify-content-between h-100">
	        			<div class="d-flex _mb-20px align-self-start align-self-sm-end">
		        			<b-button class="_w-150px ml-auto" pill variant="warning" @click="$refs['organisation-cru-component'].openModal(organisation,'update')"> <i class="ion ion-md-create"></i>&nbsp; Edit</b-button>
		        		</div>
		        		<div class="d-sm-flex align-self-sm-end">
						  <b-dropdown variant="warning" class="default-border">
						  	<template v-slot:button-content>
						    <div class="border-right d-inline pr-2">More Actions</div>
						    </template>
						  </b-dropdown>
						</div>
					</div>
	        	</div>
	        </div>
		</div>
	</b-card>
	<b-card no-body class="default-border _mt-20px">
		<div class="_px-20px _pb-20px">
			<b-card-header header-tag="p" class="with-elements border-top-0 border-left-0 border-right-0 border-warning pl-0 pr-0 _mb-20px" style="border-width:2px">
	        	<div class="card-header-title">Manage Users ({{usersTable.model_count}})</div>
	        	<div v-if="$can('create','Organisation-User')" class="card-header-elements ml-auto">
	        		<b-button pill variant="warning" @click="$refs['user-cru-component'].openModal()"> <i class="ion ion-md-add-circle mr-2"></i>New</b-button>
	       		</div>
      		</b-card-header>
      		<b-table
	      		ref="usersTable"
	      		empty-text="NO MATCHING RECORDS"
	      		:items="usersTable.myProvider"
	      		:fields="usersTable.fields"
	      		:busy.sync="usersTable.isBusy"
	      		:bordered="true"
	      		:hover="true"
	      		selectable
	      		select-mode="single"
	      		@row-selected="usersTable.viewModel"
	      		responsive
	      		show-empty
	      		no-provider-sorting
	      	>    	
	      		<template v-slot:cell(role_id)="data">
	      			{{usersTable.mutators.getRole(data.item.role_id)}}
	      		</template>
	      		<template v-slot:cell(status)="data">
	      			<span v-if="data.item.status=='active'" class="text-capitalize text-success"><i class="ion ion-md-checkmark-circle-outline _mr-10px"></i>{{data.item.status}}</span>
	      			<span v-else class="text-capitalize text-danger"><i class="ion ion-md-close-circle-outline _mr-10px"></i>{{data.item.status}}</span>
      			</template>
	      		<template v-slot:cell(created_at)="data">
        			{{convertToReadableDate(data.item.created_at,'DD MMM YYYY, h:mm a').date}}
      			</template>
		      	<template v-slot:table-busy>
			        <div class="text-center text-danger my-2">
			          <b-spinner class="align-middle"></b-spinner>
			          <strong>Loading...</strong>
			        </div>
			    </template>
	      	</b-table>
      	</div>
    </b-card>
    <organisation-cru ref="organisation-cru-component" @updated="setOrganisation"></organisation-cru>
    <user-cru ref="user-cru-component" :organisation_id="organisation.id" @created="$refs.usersTable.refresh()" @updated="$refs.usersTable.refresh()"></user-cru>
</div>
</template>
<script>
export default{
	name:'pages.organisations.view',
	data(){
		var that = this;
		return{
			organisation:null,
			usersTable:{
				model_count:0,
		    	isBusy:false,
		    	fields:[
		    		{
		    			key:'id',
		    			label:'ID',
		    			sortable:true,
		    			thClass:'table-warning'
		    		},
		    		{
		    			key:'name',
		    			label:'NAME',
		    			sortable:true,
		    			thClass:'table-warning'
		    		},
		    		{
		    			key:'email',
		    			label:'EMAIL',
		    			sortable:true,
		    			thClass:'table-warning'
		    		},
		    		{
		    			key:'role_id',
		    			label:'LEVEL',
		    			sortable:true,
		    			thClass:'table-warning'
		    		},
		    		{
		    			key:'status',
		    			label:'STATUS',
		    			sortable:true,
		    			thClass:'table-warning'
		    		},
		    		{
		    			key:'created_at',
		    			label:'DATE CREATED',
		    			sortable:true,
		    			thClass:'table-warning'
		    		},
		    	],
		    	myProvider:function(ctx){
		    		that.usersTable.isBusy = true;
		    		let promise = this.$http.get(`users?organisation_id=${this.$route.params.id}`)
			        return promise.then((response) => {
			          const items = response.data.data
			          that.usersTable.model_count = items.length;
			          // Here we could override the busy state, setting isBusy to false
			          that.usersTable.isBusy = false;
			          return(items)
			        }).catch(error => {
			          // Here we could override the busy state, setting isBusy to false
			          // this.isBusy = false
			          // Returning an empty array, allows table to correctly handle
			          // internal busy state in case of error
			          return []
			        })
		    	},
		    	viewModel(item){
		    		that.$router.push({name:'organisations.users.view',params:{organisation_id:that.organisation.id,id:item[0].id}});
		    	},
		    	mutators:{
		    		getRole(role_id){
		    			const roles = [
		    				{ value: 1, text: 'Superuser' },
				        	{ value: 2, text: 'Admin' },
				        	{ value: 3, text: 'Data Encoder' },
				        	{ value: 4, text: 'Recruiter' },
				        	{ value: 5, text: 'Observer' }
				        ];
						var r = _.find(roles, {value:role_id}); // delete id
						return r.text;
		    		},
		    	}
		    }
		}
	},
	created(){
		this.component_done_loading = false;
	},
	mounted(){
		this.fetchOrganisation();
	},
	methods:{
		setOrganisation(data){
			this.organisation = data;
		},	
		fetchOrganisation(){
			var that = this;
			this.$http.get(`organisations/${this.$route.params.id}`).then(
				function(response){
					that.setOrganisation(response.data.data);
					that.component_done_loading = true;
				}
			);
		}
	},
	components:{
		'organisation-cru': require(`./cru.vue`).default,
		'user-cru': require(`./users/cru.vue`).default,
	}

}
</script>