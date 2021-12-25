require('./axios');
import Vue from 'vue'
import App from './App'
import router from './router'
import { abilitiesPlugin } from '@casl/vue'
import { store, ability } from './components/store'
import BootstrapVue from 'bootstrap-vue'
import {globalMixins} from './components/mixins/global'
import Popper from 'popper.js'
import lodash from 'lodash'
import VueLodash from 'vue-lodash'
import VueClipboard from 'vue-clipboard2'

// Required to enable animations on dropdowns/tooltips/popovers
Popper.Defaults.modifiers.computeStyle.gpuAcceleration = false

Vue.config.productionTip = false
/*Form validation helper*/
require('./components/forms/index');
/*Search helper*/
require('./components/search/index');
/*Axios configuration*/
window.Events = new class{
	constructor(){
		this.vue = new Vue();
	}
	fire(event,data=null){
		this.vue.$emit(event,data);
	}
	listen(event,callback){
		this.vue.$on(event,callback);
	}
	off(event){
		this.vue.$off(event);
	}
}
Vue.use(BootstrapVue)
Vue.use(VueLodash ,{lodash: lodash}) // options is optional
Vue.use(VueClipboard)

// Global RTL flag
Vue.mixin(globalMixins)
Vue.use(abilitiesPlugin, ability)
new Vue({
  	router,
  	store,
  	mounted(){
  		Events.listen('system-login-successful', (options) => {
  			if(this.krAuth.user().role=='Superuser'){
          this.$router.push({name:'superusers.index'})
        }
        else if(this.krAuth.user().role=='Admin'){
          this.$router.push({name:'companies.index'})
        }
        else if(this.krAuth.user().role=='Data Encoder'){
          this.$router.push({name:'companies.index'})
        }
        else if(this.krAuth.user().role=='Recruiter'){
          this.$router.push({name:'companies.index'})
        }
  		});
  		Events.listen('system-logout', (options={}) => {
            this.$http.get('auth/logout').then(function(response){}).catch(function(errors){});
            /*if(options.redirect){
              that.$router.push(options.redirect);
            }*/
            this.krAuth.logout();
        });
        Events.listen('system-logout-successful', () => {
          this.$router.push({name:'auth.login'});
        });
  	},
  	render: h => h(App)
}).$mount('#app')
