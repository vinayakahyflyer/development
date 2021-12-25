<template>
	<div>
		<slot name="data" v-if="models.length!=0&&!isBusy" :models="models" :meta="meta" :query="query" :fetch="fetch">

		</slot>
		<slot name="no-data" v-if="models.length==0&&!isBusy">
			<div class="d-flex justify-content-center" style="height:250px">
				<div class="align-self-center">
	    			<strong>NO MATCHING RECORDS</strong>
	    		</div>
			</div>
		</slot>
		<slot name="busy" v-if="isBusy">
			<div class="d-flex justify-content-center" style="height:250px">
				<div class="align-self-center">
	      			<b-spinner class="align-middle"></b-spinner>
	    			<strong>Loading...</strong>
	    		</div>
			</div>
      	</slot>
	</div>
</template>

<script>
import globals from '@/components/mixins/global/layout'
export default{
	props:['options'],
	data(){
		return {
			models:[],
			meta:{
				current_page:1,
				from:1,
				last_page:1,
				per_page:20,
				to:1,
				total:1
			},
			query:{
				page:1,
				per_page:20
				//type:'',
				//paymentMethod:'',
			},
			hasPagination:false,
			isBusy:false,
			setParameters:false,
			resetPagination:false,
			params:{},
		}
	},
	created(){
		let history = this.$store.getters.search_history;
		let search_history_id = _.get(this,'options.search_history_id',false);
		if(search_history_id){
			if(history[search_history_id]&&!this._.isEmpty(history[search_history_id])){
				var that = this;
				this.$nextTick(function(){
					_.forIn(history[search_history_id], function(value, key) {
						if(that.options.params.hasOwnProperty(key)){
							that.options.params[key] = value;
						}
					});
					that.fetch(true,true);
				});
				return;
			}
		}
		if(_.get(this,'options.linkParamsOnCreate',false)){
			this.fetch(true,true);
		}else{
			this.fetch(false);
		}
		
	},
	methods:{
		getParameters(){
			var params = '';
			var that = this;
			if(this.setParameters){
				_.forIn(this.params, function(value, key) {
					if(key.includes('_krSearch_')){

					}
					else if ('_krSearch_'+key in that.params) { 
						if(that.params['_krSearch_'+key]){
							params= params+"&"+key+"="+ encodeURIComponent(value);
						}
					}else{
						params= params+"&"+key+"="+ encodeURIComponent(value);
					}
				});
			}
			if(_.get(this,'options.hasPagination',false)){
				_.forIn(this.query, function(value, key) {
					params= params+"&"+key+"="+value;
				});
			}
			
			return params;
		},
		onSuccess(response){
			if(_.get(this,'options.hasPagination')){
				this.meta.current_page = response.data.meta.current_page;
				this.query.page = this.meta.current_page;
				this.meta.from = response.data.meta.from;
				this.meta.last_page = response.data.meta.last_page;
				this.meta.per_page = response.data.meta.per_page;
				this.meta.to = response.data.meta.to;
				this.meta.total = response.data.meta.total;
			}
			this.models = response.data.data;
			this.isBusy = false;


			let search_history_id = _.get(this,'options.search_history_id',false);
			if(search_history_id&&(this.setParameters||(!this.setParameters&&this.resetPagination))){
				this.$store.dispatch('updateSearchHistory',{id:search_history_id,...this.params});
			}
			this.$emit('retrieved',response);
		},
		onFail(errors){
			this.$emit('failed',errors);
		},
		fetch(setParameters=true,resetPagination=false){
			this.setParameters = setParameters;
			this.resetPagination = resetPagination;
			if(resetPagination){
				if(this.setParameters){
					this.params = this._.clone(_.get(this,'options.params',{}));
				}else{
					this.params={};
				}
			}
			if(resetPagination&&this.query.page!=1){
				this.query.page = 1;
				return;
			}
			let url = _.get(this,'options.url',undefined);
			if(url!=undefined){
				let params = this.getParameters();
				if(params!=''){
					url = url+'?'+params;
				}
				this.isBusy = true;
				this.$http.get(url).then(this.onSuccess).catch(this.onFail)
			}
		},
	},
	watch:{
		'query.page':{
			handler:function(){
				globals().scrollTop(0, 0)
				this.fetch();
			},
			deep:true
		}
	}
}
</script>,