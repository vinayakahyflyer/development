<template>
<div>
	<div class="row">
		<div class="col-sm-3">
			<b-card no-body class="_mb-20px">
				<div class="_pb-20px">
				  	<b-card-header header-tag="p" class="border-0 bg-warning pl-0 pr-0">
				  		<div class="_px-20px d-flex">
				        	<div class="_143px font-weight-bold">Notifications Search</div>
				        	<div class="card-header-elements ml-auto">
				        		<a href="javascript:void(0)" class="search-reset-link font-weight-semibold" @click="notificationsTable.resetQuery">Reset All</a>
				       		</div>
				       	</div>
			      	</b-card-header>
			      	<div class="_pt-20px _px-20px">
			      		<b-form-group label="Keywords" class="pb-3">
			      			<b-input v-model="notificationsTable.query.keyword" placeholder="Type keywords here" @keyup.enter="notificationsTable.sendParams=true;$refs.notifications_listing.refresh()"></b-input>
			      		</b-form-group>
			      		<b-form-group label="Filter by Type" class="pb-3">
				        	<b-form-select v-model="notificationsTable.query.type" :options="[{value:'',text:'All'},{value:'candidate-added',text:'Candidate Added'},{value:'candidate-updated',text:'Candidate Updated'}]"></b-form-select>
				      	</b-form-group>
			      		<b-btn pill variant="warning" :block="true" @click="notificationsTable.sendParams=true;$refs.notifications_listing.refresh()"><i class="ion ion-md-search mr-2"></i>Search</b-btn>
			      	</div>
			    </div>
			</b-card>
		</div>
		<div class="col-sm-9">
		    <b-card no-body class="default-border">
		    	<div class="_px-20px _pb-20px">
				  	<b-card-header header-tag="p" class="with-elements border-top-0 border-left-0 border-right-0 border-warning pl-0 pr-0 _mb-20px" style="border-width:2px">
			        	<div class="card-header-title">Notifications {{notificationsTable.tableTitle()}}</div>
			      	</b-card-header>
			      	<b-pagination
				      v-model="notificationsTable.query.page"
				      :total-rows="notificationsTable.meta.total"
				      :per-page="notificationsTable.meta.per_page"
				    >
				    </b-pagination>
			      	<b-table
			      		ref="notifications_listing"
			      		empty-text="NO MATCHING RECORDS"
			      		:items="notificationsTable.myProvider"
			      		:fields="notificationsTable.fields"
			      		:busy.sync="notificationsTable.isBusy"
			      		:bordered="true"
			      		:hover="true"
			      		responsive
			      		show-empty
			      		no-provider-sorting
			      	>
			      		<template  v-slot:cell(timestamp)="data">
        					{{convertToReadableDate(data.item.timestamp,'DD MMM YYYY, h:mm a').date}}
      					</template>
				      	<template v-slot:table-busy>
					        <div class="text-center text-danger my-2">
					          <b-spinner class="align-middle"></b-spinner>
					          <strong>Loading...</strong>
					        </div>
					    </template>
			      	</b-table>
			      	<b-pagination
				      v-model="notificationsTable.query.page"
				      :total-rows="notificationsTable.meta.total"
				      :per-page="notificationsTable.meta.per_page"
				    >
				    </b-pagination>
			    </div>
		    </b-card>
		</div>
	</div>
</div>
</template>
<script>
export default{
	name:'pages.notifications.index',
	watch:{
		'notificationsTable.query.page':{
			handler:function(){
				this.$refs.notifications_listing.refresh();
			},
			deep:true
		}
	},
	data(){
		var that = this;
		let history = this.$store.getters.search_history;
		let search_history_id ='notifications.index';
		let query = {keyword:'',type:'',page:1,per_page:20};
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
		   notificationsTable:{
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
		    			key:'type',
		    			label:'TYPE',
		    			sortable:true,
		    			thClass:'table-warning'
		    		},
		    		{
		    			key:'message',
		    			label:'MESSAGE',
		    			sortable:true,
		    			thClass:'table-warning'
		    		},
		    		{
			          key: 'timestamp',
			          label: 'DATE/TIME',
			          sortable: false,
			          thClass:'table-warning'
			        }
		    	],
		    	myProvider:function(ctx){
		    		that.notificationsTable.isBusy = true;
		    		let url = 'notifications'+'?page='+that.notificationsTable.query.page+'&per_page='+that.notificationsTable.query.per_page;
		    		if(that.notificationsTable.sendParams){
		    			url +='&keyword='+that.notificationsTable.query.keyword;
		    			url +='&type='+that.notificationsTable.query.type;
		    		}
		    		let promise = this.$http.get(url)
			        return promise.then((response) => {
			          const items = response.data.data
			          if(!response.data.meta){
			          	that.notificationsTable.meta = {from:1,to:10,total:'this will show correctly once ./notifications is paginated'};
			          }else{
			          	that.notificationsTable.meta = response.data.meta;
			          }
			          // Here we could override the busy state, setting isBusy to false
			          that.notificationsTable.isBusy = false;
			        if((that.notificationsTable.sendParams||(!that.notificationsTable.sendParams&&that.notificationsTable.reset))){
						that.$store.dispatch('updateSearchHistory',{id:'notifications.index',...that.notificationsTable.query});
					}
					that.notificationsTable.reset = false;
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
		    		that.notificationsTable.sendParams = false;
		    		that.notificationsTable.reset = true;
    				that.notificationsTable.query = {keyword:'',type:'',page:1,per_page:20};
    				that.$refs.notifications_listing.refresh();
    			},
    			tableTitle(){
    				if(that.notificationsTable.meta.total==0){
    					return '(0)';
    				}else{
    					return `(${that.notificationsTable.meta.from} - ${that.notificationsTable.meta.to} of ${that.notificationsTable.meta.total})`;
    				}
    			},
		    }
		}
	},
}
</script>