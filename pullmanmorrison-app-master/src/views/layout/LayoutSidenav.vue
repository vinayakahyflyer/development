<template>
  <sidenav :orientation="orientation" :class="curClasses">

    <!-- Inner -->
    <div class="sidenav-inner" :class="{ 'py-1': orientation !== 'horizontal' }">
      <sidenav-router-link v-show="$can('read','Notification')" icon="ion ion-ios-notifications" :to="{name:'notifications.index'}" >Notifications</sidenav-router-link>
      <sidenav-router-link v-show="$can('read','Superuser')" icon="ion ion-ios-people" :to="{name:'superusers.index'}" >Superusers</sidenav-router-link>
      <sidenav-router-link v-show="$can('read','Organisation')" icon="ion ion-ios-contact" :to="{name:'organisations.index'}">Organisations</sidenav-router-link>
      <sidenav-router-link v-show="$can('read','Company')" icon="ion ion-ios-home" :to="{name:'companies.index'}" >Companies</sidenav-router-link>
      <sidenav-router-link v-show="$can('read','Job')" icon="ion ion-ios-hammer" :to="{name:'jobs.index'}" >Jobs</sidenav-router-link>
      <sidenav-router-link v-show="$can('read','Candidate')" icon="ion ion-ios-body" :to="{name:'candidates.index'}" >Candidates</sidenav-router-link>
      <sidenav-router-link v-show="$can('read','User')" icon="ion ion-ios-people" :to="{name:'users.index'}" >Users</sidenav-router-link>
      <sidenav-router-link v-show="$can('read','Recruiter Tag')" icon="ion ion-ios-pricetags" :to="{name:'rectags.index'}" >Areas of Practice</sidenav-router-link>
      <sidenav-router-link v-show="$can('read','Skillset')" icon="ion ion-ios-construct" :to="{name:'skillsets.index'}" >Skillsets</sidenav-router-link>
      <sidenav-router-link v-show="$can('read','Candidate')" icon="ion ion-ios-body" :to="{name:'elasticsearch.index'}" >Elasticsearch</sidenav-router-link>
    </div>
  </sidenav>
</template>

<script>
import { Sidenav, SidenavLink, SidenavRouterLink, SidenavMenu, SidenavHeader, SidenavBlock, SidenavDivider } from '@/vendor/libs/sidenav'

export default {
  name: 'app-layout-sidenav',
  components: {
    /* eslint-disable vue/no-unused-components */
    Sidenav,
    SidenavLink,
    SidenavRouterLink,
    SidenavMenu,
    SidenavHeader,
    SidenavBlock,
    SidenavDivider
    /* eslint-enable vue/no-unused-components */
  },

  props: {
    orientation: {
      type: String,
      default: 'vertical'
    }
  },

  computed: {
    curClasses () {

      let bg = this.layoutSidenavBg
      if (this.orientation === 'horizontal' && (bg.indexOf(' sidenav-dark') !== -1 || bg.indexOf(' sidenav-light') !== -1)) {
        bg = bg
          .replace(' sidenav-dark', '')
          .replace(' sidenav-light', '')
          .replace('-darker', '')
          .replace('-dark', '')
      }
      bg = 'dark '

      return `bg-${bg} ` + (
        this.orientation !== 'horizontal'
          ? 'layout-sidenav'
          : 'layout-sidenav-horizontal container-p-x flex-grow-0'
      )
    }
  },

  methods: {
    isMenuActive (url) {
      return this.$route.path.indexOf(url) === 0
    },

    isMenuOpen (url) {
      return this.$route.path.indexOf(url) === 0 && this.orientation !== 'horizontal'
    },

    toggleSidenav () {
      this.layoutHelpers.toggleCollapsed()
    }
  }
}
</script>
<style>
@media (max-width: 991px){
  .layout-sidenav {
    z-index:999999 !important;
  }
}
</style>
