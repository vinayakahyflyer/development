<template>
  <nav class="layout-footer footer" :class="getLayoutFooterBg()">
    <div class="container-fluid container-p-x pb-3">
      <a href="#" class="footer-link pt-3">Support</a>
      <a href="#" class="footer-link pt-3 ml-4">Privacy</a>
      <a href="#" class="footer-link pt-3 ml-4">Terms of Use</a>
      <a href="#" class="footer-link pt-3 ml-4">Contact Us</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'app-layout-footer',

  methods: {
    getLayoutFooterBg () {
      return `bg-${this.layoutFooterBg}`
    }
  }
}
</script>
