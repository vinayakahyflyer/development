import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import globals from '@/components/mixins/global/layout'

import KrAuth from'@/components/auth'

import {routes} from './routes'
var auth = new KrAuth();
Vue.use(Router)
Vue.use(Meta)

const router = new Router({
  base: '/',
  mode: 'history',
  routes: routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.afterEach(() => {
  // On small screens collapse sidenav
  if (window.layoutHelpers && window.layoutHelpers.isSmallScreen() && !window.layoutHelpers.isCollapsed()) {
    setTimeout(() => window.layoutHelpers.setCollapsed(true, true), 10)
  }

  // Scroll to top of the page
 //globals().scrollTop(0, 0)
})


router.beforeEach((to, from, next) => {
  // Set loading state
  document.body.classList.add('app-loading')
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!auth.isLoggedIn()) {
       setTimeout(() => next({name:'auth.login'}), 10)
    } else {
      if(to.matched.some(record => record.meta.roles&&!record.meta.roles.includes(auth.user().role))){
        if(auth.user().role=='Superuser'){
          setTimeout(() => next({name:'superusers.index'}), 10)
        }
        else if(auth.user().role=='Admin'){
          setTimeout(() => next({name:'companies.index'}), 10)
        }
        else if(auth.user().role=='Data Encoder'){
          setTimeout(() => next({name:'companies.index'}), 10)
        }
        else if(auth.user().role=='Recruiter'){
          setTimeout(() => next({name:'companies.index'}), 10)
        }
      }else{
        setTimeout(() => next(), 10)
      }
    }
  } else {
    if (auth.isLoggedIn()) {
      if(to.name=='jobs.public.view'){
         setTimeout(() => next(), 10)
      }
      else if(auth.user().role=='Superuser'){
        setTimeout(() => next({name:'superusers.index'}), 10)
      }
      else if(auth.user().role=='Admin'){
        setTimeout(() => next({name:'companies.index'}), 10)
      }
      else if(auth.user().role=='Data Encoder'){
        setTimeout(() => next({name:'companies.index'}), 10)
      }
      else if(auth.user().role=='Recruiter'){
        setTimeout(() => next({name:'companies.index'}), 10)
      }
    }
    else if(to.path=='/'){
      //default route login
       setTimeout(() => next({name:'auth.login'}), 10)
     }else{
      setTimeout(() => next(), 10)
     }
  }
})
export default router
