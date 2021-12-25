<template>
<div>
	<div class="row">
		<div class="col-sm-3">
			<b-card no-body class="_mb-20px">
				<div class="_pb-20px">
				  	<b-card-header header-tag="p" class="border-0 bg-warning pl-0 pr-0">
				  		<div class="_px-20px d-flex">
				        	<div class="_143px font-weight-bold">Skillsets Search</div>
				        	<div class="card-header-elements ml-auto">
				        		<a href="javascript:void(0)" class="search-reset-link font-weight-semibold" @click="skillsetsTable.resetQuery">Reset All</a>
				       		</div>
				       	</div>
			      	</b-card-header>
			      	<div class="_pt-20px _px-20px">
			      		<b-form-group label="Keywords" class="pb-3">
			      			<b-input v-model="skillsetsTable.query.keyword" placeholder="Type keywords here" @keyup.enter="skillsetsTable.sendParams=true;$refs.skillsets_listing.refresh()"></b-input>
			      		</b-form-group>
			      		<b-btn pill variant="warning" :block="true" @click="skillsetsTable.sendParams=true;$refs.skillsets_listing.refresh()"><i class="ion ion-md-search mr-2"></i>Search</b-btn>
			      	</div>
			    </div>
			</b-card>
		</div>
		<div class="col-sm-9">
		    <b-card no-body class="default-border">
		    	<div class="_px-20px _pb-20px">
				  	<b-card-header header-tag="p" class="with-elements border-top-0 border-left-0 border-right-0 border-warning pl-0 pr-0 _mb-20px" style="border-width:2px">
			        	<div class="card-header-title">Skillsets {{skillsetsTable.tableTitle()}}</div>
			        	<div class="card-header-elements ml-auto">
			        		<b-button pill variant="warning" @click="$refs['skillset-cru-component'].openModal()"> <i class="ion ion-md-add-circle mr-2"></i>New</b-button>
			       		</div>
			      	</b-card-header>
			      	<b-pagination
				      v-model="skillsetsTable.query.page"
				      :total-rows="skillsetsTable.meta.total"
				      :per-page="skillsetsTable.meta.per_page"
				    >
				    </b-pagination>
			      	<b-table
			      		ref="skillsets_listing"
			      		empty-text="NO MATCHING RECORDS"
			      		:items="skillsetsTable.myProvider"
			      		:fields="skillsetsTable.fields"
			      		:busy.sync="skillsetsTable.isBusy"
			      		:bordered="true"
			      		:hover="true"
			      		responsive
			      		show-empty
			      		no-provider-sorting
			      	>
			      		<template v-slot:cell(actions)="data">
			      			<div class="d-flex justify-content-center">
			      				<div>
			      					<i class="ion ion-md-create _mr-10px" @click="$refs['skillset-cru-component'].openModal(data.item,'update')"></i>
			      					<i class="ion ion-md-trash text-danger" @click="$refs['skillset-cru-component'].openModal({id:data.item.id,status:'suspended'},'status')"></i>
			      				</div>
		        			</div>
		      			</template>
				      	<template v-slot:table-busy>
					        <div class="text-center text-danger my-2">
					          <b-spinner class="align-middle"></b-spinner>
					          <strong>Loading...</strong>
					        </div>
					    </template>
			      	</b-table>
			      	<b-pagination
				      v-model="skillsetsTable.query.page"
				      :total-rows="skillsetsTable.meta.total"
				      :per-page="skillsetsTable.meta.per_page"
				    >
				    </b-pagination>
			    </div>
		    </b-card>
		</div>
	</div>
    <skillset-cru ref="skillset-cru-component" @deleted="$refs.skillsets_listing.refresh()" @updated="$refs.skillsets_listing.refresh()"></skillset-cru>
</div>
</template>
<script>
export default{
	name:'pages.skillsets.index',
	watch:{
		'skillsetsTable.query.page':{
			handler:function(){
				this.$refs.skillsets_listing.refresh();
			},
			deep:true
		}
	},
	data(){
		var that = this;
		var that = this;
		let history = this.$store.getters.search_history;
		let search_history_id ='skillsets.index';
		let query = {keyword:'',page:1,per_page:20};
		let sendParams = false;
		if(history[search_history_id]){
			_.forIn(history[search_history_id], function(value, key) {
				if(query.hasOwnProperty(key)){
					query[key] = value;
				}
			});
			sendParams = true;
		}
		return{
		   skillsetsTable:{
		   		meta:{from:0,to:0,total:0},
		    	isBusy:false,
		    	sendParams:sendParams,
		    	reset:false,
		    	query:query,
		    	fields:[
		    		{
		    			key:'id',
		    			label:'ID',
		    			sortable:true,
		    			thClass:'table-warning'
		    		},
		    		{
		    			key:'skillset',
		    			label:'SKILLSET',
		    			sortable:true,
		    			thClass:'table-warning'
		    		},
		    		{
		    			key:'aliases',
		    			label:'ALIAS',
		    			sortable:true,
		    			thClass:'table-warning'
		    		},
		    		{
			          key: 'actions',
			          label: '',
			          sortable: false,
			          thClass:'table-warning'
			        }
		    	],
		    	myProvider:function(ctx){
		    		that.skillsetsTable.isBusy = true;
		    		let url = 'skillsets'+'?page='+that.skillsetsTable.query.page+'&per_page='+that.skillsetsTable.query.per_page;
		    		if(that.skillsetsTable.sendParams){
		    			url +='&keyword='+escape(that.skillsetsTable.query.keyword);
		    		}
		    		let promise = this.$http.get(url)
			        return promise.then((response) => {
			          	const items = response.data.data
			         	that.skillsetsTable.meta = response.data.meta;
			          // Here we could override the busy state, setting isBusy to false
				        that.skillsetsTable.isBusy = false;

			        if((that.skillsetsTable.sendParams||(!that.skillsetsTable.sendParams&&that.skillsetsTable.reset))){
						that.$store.dispatch('updateSearchHistory',{id:'skillsets.index',...that.skillsetsTable.query});
					}
					that.skillsetsTable.reset = false;
			          return(items)
			        }).catch(error => {
			          // Here we could override the busy state, setting isBusy to false
			          // this.isBusy = false
			          // Returning an empty array, allows table to correctly handle
			          // internal busy state in case of error
			          return []
			        })
		    	},
		    	resetQuery(){
		    		that.skillsetsTable.sendParams = false;
		    		that.skillsetsTable.reset = true;
    				that.skillsetsTable.query = {keyword:'',page:1,per_page:20};
    				that.$refs.skillsets_listing.refresh();
    			},
    			tableTitle(){
    				if(that.skillsetsTable.meta.total==0){
    					return '(0)';
    				}else{
    					return `(${that.skillsetsTable.meta.from} - ${that.skillsetsTable.meta.to} of ${that.skillsetsTable.meta.total})`;
    				}
    			},
		    }
		}
	},
	components:{
		'skillset-cru': require(`./cru.vue`).default,
	}
}
</script>
