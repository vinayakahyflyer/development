<template>
<div>
	<div class="row">
		<div class="col-sm-3">
			<b-card no-body class="_mb-20px">
				<div class="_pb-20px">
				  	<b-card-header header-tag="p" class="border-0 bg-warning pl-0 pr-0">
				  		<div class="_px-20px d-flex">
				        	<div class="_143px font-weight-bold">Areas of Practice Search</div>
				        	<div class="card-header-elements ml-auto">
				        		<a href="javascript:void(0)" class="search-reset-link font-weight-semibold" @click="recTagsTable.resetQuery">Reset All</a>
				       		</div>
				       	</div>
			      	</b-card-header>
			      	<div class="_pt-20px _px-20px">
			      		<b-form-group label="Keywords" class="pb-3">
			      			<b-input v-model="recTagsTable.query.keyword" placeholder="Type keywords here" @keyup.enter="recTagsTable.sendParams=true;$refs.recruiter_tags_listing.refresh()"></b-input>
			      		</b-form-group>
			      		<b-btn pill variant="warning" :block="true" @click="recTagsTable.sendParams=true;$refs.recruiter_tags_listing.refresh()"><i class="ion ion-md-search mr-2"></i>Search</b-btn>
			      	</div>
			    </div>
			</b-card>
		</div>
		<div class="col-sm-9">
		    <b-card no-body class="default-border">
		    	<div class="_px-20px _pb-20px">
				  	<b-card-header header-tag="p" class="with-elements border-top-0 border-left-0 border-right-0 border-warning pl-0 pr-0 _mb-20px" style="border-width:2px">
			        	<div class="card-header-title">Areas of Practice {{recTagsTable.tableTitle()}}</div>
			        	<div class="card-header-elements ml-auto">
			        		<b-button pill variant="warning" @click="$refs['rectag-cru-component'].openModal()"> <i class="ion ion-md-add-circle mr-2"></i>New</b-button>
			       		</div>
			      	</b-card-header>
			      	<b-pagination
				      v-model="recTagsTable.query.page"
				      :total-rows="recTagsTable.meta.total"
				      :per-page="recTagsTable.meta.per_page"
				    >
				    </b-pagination>
			      	<b-table
			      		ref="recruiter_tags_listing"
			      		empty-text="NO MATCHING RECORDS"
			      		:items="recTagsTable.myProvider"
			      		:fields="recTagsTable.fields"
			      		:busy.sync="recTagsTable.isBusy"
			      		:bordered="true"
			      		:hover="true"
			      		responsive
			      		show-empty
			      		no-provider-sorting
			      	>
			      		<template v-slot:cell(actions)="data">
			      			<div class="d-flex justify-content-center">
			      				<div>
			      					<i class="ion ion-md-create _mr-10px" @click="$refs['rectag-cru-component'].openModal(data.item,'update')"></i>
			      					<i class="ion ion-md-trash text-danger" @click="$refs['rectag-cru-component'].openModal({id:data.item.id,status:'suspended'},'status')"></i>
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
				      v-model="recTagsTable.query.page"
				      :total-rows="recTagsTable.meta.total"
				      :per-page="recTagsTable.meta.per_page"
				    >
				    </b-pagination>
			    </div>
		    </b-card>
		</div>
	</div>
    <rectag-cru ref="rectag-cru-component" @deleted="$refs.recruiter_tags_listing.refresh()" @updated="$refs.recruiter_tags_listing.refresh()"></rectag-cru>
</div>
</template>
<script>
export default{
	name:'pages.rectags.index',
	watch:{
		'recTagsTable.query.page':{
			handler:function(){
				this.$refs.recruiter_tags_listing.refresh();
			},
			deep:true
		}
	},
	data(){
		var that = this;
		let history = this.$store.getters.search_history;
		let search_history_id ='rectags.index';
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
		   recTagsTable:{
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
		    			key:'recruiter_tag',
		    			label:'Area of Practice',
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
		    		that.recTagsTable.isBusy = true;
		    		let url = 'recruiter_tags'+'?page='+that.recTagsTable.query.page+'&per_page='+that.recTagsTable.query.per_page;
		    		if(that.recTagsTable.sendParams){
		    			url +='&keyword='+escape(that.recTagsTable.query.keyword);
		    		}
		    		let promise = this.$http.get(url)
			        return promise.then((response) => {
			          const items = response.data.data
			          that.recTagsTable.meta = response.data.meta;
			          // Here we could override the busy state, setting isBusy to false
			          that.recTagsTable.isBusy = false;
			        if((that.recTagsTable.sendParams||(!that.recTagsTable.sendParams&&that.recTagsTable.reset))){
						that.$store.dispatch('updateSearchHistory',{id:'rectags.index',...that.recTagsTable.query});
					}
					that.recTagsTable.reset = false;
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
		    		that.recTagsTable.sendParams = false;
		    		that.recTagsTable.reset = true;
    				that.recTagsTable.query = {keyword:'',page:1,per_page:20};
    				that.$refs.recruiter_tags_listing.refresh();
    			},
    			tableTitle(){
    				if(that.recTagsTable.meta.total==0){
    					return '(0)';
    				}else{
    					return `(${that.recTagsTable.meta.from} - ${that.recTagsTable.meta.to} of ${that.recTagsTable.meta.total})`;
    				}
    			},
		    }
		}
	},
	components:{
		'rectag-cru': require(`./cru.vue`).default,
	}
}
</script>
