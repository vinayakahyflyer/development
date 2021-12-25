<template>
<div>
	<b-card no-body class="default-border">
		<div class="_px-20px _pb-20px">
			<b-card-header header-tag="p" class="with-elements border-top-0 border-left-0 border-right-0 border-warning pl-0 pr-0 _mb-20px" style="border-width:2px">
	        	<div class="card-header-title">Organizations ({{organisationTable.model_count}})</div>
	        	<div v-if="$can('create','Organisation')" class="card-header-elements ml-auto">
	        		<b-button pill variant="warning" @click="$refs['organisation-cru-component'].openModal()"> <i class="ion ion-md-add-circle mr-2"></i>New</b-button>
	       		</div>
	      	</b-card-header>
	      	<b-table
	      		ref="organisationTable"
	      		empty-text="NO MATCHING RECORDS"
	      		:items="organisationTable.myProvider"
	      		:fields="organisationTable.fields"
	      		:busy.sync="organisationTable.isBusy"
	      		:bordered="true"
	      		:hover="true"
	      		selectable
	      		select-mode="single"
	      		@row-selected="organisationTable.viewModel"
	      		responsive
	      		show-empty
	      		no-provider-sorting
	      	>
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
    <organisation-cru ref="organisation-cru-component" @created="$refs.organisationTable.refresh()" @updated="$refs.organisationTable.refresh()"></organisation-cru>
</div>
</template>
<script>
export default{
	name:'pages.organisations.index',
	data(){
		var that = this;
		return{
		    organisationTable:{
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
		    			key:'organisation',
		    			label:'ORGANISATION',
		    			sortable:true,
		    			thClass:'table-warning'
		    		},
		    		{
		    			key:'contact_person',
		    			label:'CONTACT PERSON',
		    			sortable:true,
		    			thClass:'table-warning'
		    		},
		    		{
		    			key:'contact_email',
		    			label:'CONTACT EMAIL',
		    			sortable:true,
		    			thClass:'table-warning'
		    		},
		    		{
		    			key:'contact_number',
		    			label:'CONTACT NUMBER',
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
		    		that.organisationTable.isBusy = true;
		    		let promise = this.$http.get('organisations')
			        return promise.then((response) => {
			          const items = response.data.data
			          that.organisationTable.model_count = items.length;
			          // Here we could override the busy state, setting isBusy to false
			          that.organisationTable.isBusy = false;
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
		    		that.$router.push({name:'organisations.view',params:{id:item[0].id}});
		    	},
		    }
		}
	},
	components:{
		'organisation-cru': require(`./cru.vue`).default,
	}
}
</script>