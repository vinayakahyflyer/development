import Vue from 'vue'
import Vuex from 'vuex'
import KrAuth from '@/components/auth'
import { abilityPlugin, ability as appAbility } from './ability'
var app_id='pullman.'+process.env.VUE_APP_ENV+'.client';
Vue.use(Vuex)
// root state object.
// each Vuex instance is just a single state tree.
//alert(localStorage.getItem('jwttoken'),false);
const state = {
  	client:{
      profile:{},
      auth:{},
      search_history:{},
    },
}
const plugins = [abilityPlugin]
// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  profile(state,data){
    state.client.profile = data;
    localStorage.setItem(app_id,JSON.stringify(state.client));
  },
  auth(state,data){
    state.client.auth = data;
    localStorage.setItem(app_id,JSON.stringify(state.client));
  },
  search_history(state,data){
    state.client.search_history = data;
    localStorage.setItem(app_id,JSON.stringify(state.client));
  },
  add_search_history(state,data={}){
    if(!data.id){
      //no way to retrieve as we don't do key increments
      return;
    }
    let id = data.id;
    delete data.id;
    state.client.search_history[id] = _.clone(data);
    localStorage.setItem(app_id,JSON.stringify(state.client));
  },
}
// actions are functions that causes side effects and can involve
// asynchronous operations.
const actions = {
   logout(context){
    context.commit('auth',{});
    context.commit('profile',{});
    localStorage.removeItem(app_id);
    Events.fire('system-logout-successful')
  },
  login({commit},data){
    commit('auth',data.auth);
    commit('profile',data.profile);
    Events.fire('system-login-successful',data.options);
  },
  updateProfile({state,commit},data){
    commit('profile',data.profile);
    Events.fire('system-profile-update-successful',data.options);
  },
  updateSearchHistory({state,commit},data){
    commit('add_search_history',data);
  },
}

// getters are functions
const getters = {
  profile: state =>{
    return state.client.profile;
  },
  isLoggedIn: state=>{
    if(state.client.auth.access_token!=undefined)return true
    return false
  },
  auth:state=>{
    return state.client.auth
  },
  client:state=>{
    return state.client
  },
  search_history:state=>{
    return state.client.search_history
  },
}
let a = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins
})
if(localStorage.getItem(app_id)!=null){
  var client= JSON.parse(localStorage.getItem(app_id));
  a.commit('profile',client.profile);
  a.commit('auth',client.auth);
  if(!client.search_history){
    a.commit('search_history',{});
  }else{
     a.commit('search_history',client.search_history);
  }
  
}
export const ability = appAbility
export const store = a;
