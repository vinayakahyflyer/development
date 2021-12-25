<template>
<div>
    <b-card no-body class="default-border">
    	<div class="_px-20px _pb-20px">
		  	<b-card-header header-tag="p" class="with-elements border-top-0 border-left-0 border-right-0 border-warning pl-0 pr-0 _mb-20px" style="border-width:2px">
	        	<div class="card-header-title">Superusers ({{usersTable.model_count}})</div>
	        	<div v-if="$can('create','Superuser')" class="card-header-elements ml-auto">
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


	      		<template v-slot:cell(status)="data">
	      			<span v-if="data.item.status=='active'" class="text-capitalize text-success"><i class="ion ion-md-checkmark-circle-outline _mr-10px"></i>{{data.item.status}}</span>
	      			<span v-else class="text-capitalize text-danger"><i class="ion ion-md-close-circle-outline _mr-10px"></i>{{data.item.status}}</span>
      			</template>
	      		<template  v-slot:cell(created_at)="data">
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
    <user-cru ref="user-cru-component" @created="$refs.usersTable.refresh()" @updated="$refs.usersTable.refresh()"></user-cru>
</div>
</template>
<script>
export default{
	name:'pages.superusers.index',
	data(){
		var that = this;
		return{
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
		    		let promise = this.$http.get(`users?role_id=1`)
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
		    		that.$router.push({name:'superusers.view',params:{id:item[0].id}});
		    	},
		    }
		}
	},
	components:{
		'user-cru': require(`./cru.vue`).default,
	}
}
</script>