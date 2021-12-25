import {store} from '@/components/store';
import Vue from 'vue';
export default class KrAuth {
	constructor(options){
		this.store = store;
	}
	login(data,options={}){
		var that = this;
	    //Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer '+data.access_token;
	    var auth={access_token:data.access_token};
	    var push ={
	      	auth:auth,
	      	profile:data,
	      	options: options,
	    };
	   this.store.dispatch('login',push);
	}
	logout(){
		this.store.dispatch('logout');
	}
	isLoggedIn(){
		return this.store.getters.isLoggedIn
	}
	user(){
		return this.store.getters.profile
	}
	client(){
		return this.store.getters.client
	}
	credential(){
		return this.store.getters.auth
	}
	getAuthHeader(){
		if(this.credential().access_token!=''){
			return 'Bearer '+this.credential().access_token
		}else{
			return false;
		}
	}
}