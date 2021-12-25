
//header setting moved to app.js
/*window.axios.defaults.headers.common = {
    //'X-CSRF-TOKEN': window.Laravel.csrfToken,
    //'X-Requested-With': 'XMLHttpRequest',
    //'userId':window.Laravel.user_id,
};*/
import axios from 'axios'
import KrAuth from './components/auth';
import Vue from 'vue';
let auth = new KrAuth()
Vue.prototype.$http = axios

//Vue.prototype.$http.defaults.headers['Content-Type'] = 'application/vnd.api+json';
Vue.prototype.$http.defaults.baseURL = process.env.VUE_APP_API_URL;
Vue.prototype.$http.defaults.timeout = 60000;
/*if(auth.isLoggedIn()){
  Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer '+auth.credential().access_token;
}*/
// Add a request interceptor
Vue.prototype.$http.interceptors.request.use(function (config) {
  if((config.url.indexOf('://') > 0 || config.url.indexOf('//') === 0)){
    //absolute
  }else{
    //relative
    config.headers['Content-Type'] = 'application/vnd.api+json';
    if(auth.getAuthHeader()){
      config.headers['Authorization'] = auth.getAuthHeader();
    }
  }
  if(_.get(config,'_internal.hasLoadingBar',true)){
     //$('#loading').removeClass('hide').addClass('show');
  }
  return config;
  }, function (error) {
    // Do something with request error
    //setTimeout(function(){   $('#loading').removeClass('show').addClass('hide'); }, 50);
    
    return Promise.reject(error);
  });

// Add a response interceptor
Vue.prototype.$http.interceptors.response.use(function (response) {
     //setTimeout(function(){  $('#loading').removeClass('show').addClass('hide'); }, 50);
     return response;
  }, function (error) {
     //setTimeout(function(){  $('#loading').removeClass('show').addClass('hide'); }, 50);
    if (!error.response) {
      /*Vue.notify({
        group: 'form',
        type:'error',
        title: 'Error',
        text:'Something went wrong. Please try again later'
      });*/
      // network error 
      throw new Vue.prototype.$http.Cancel('Network Error');
    }
    else if(error.response.status==401&&_.get(error,'response.data.status_code')!=200){
      if(auth.isLoggedIn()){
          /*Vue.notify({
            group: 'form',
            type:'error',
            title: 'Error',
            text:'Session Expired'
          });*/
          Events.fire('system-logout',{'redirect':{name:'auth.login'}});
          throw new Vue.prototype.$http.Cancel('Session Expired');
      }
    }
    else if(error.code=='ECONNABORTED'){
        Events.fire('axios_timed_out'); 
        throw new Vue.prototype.$http.Cancel('API Connection Timed out');
    }
    // Do something with response error
    return Promise.reject(error);
});
