
<template>
  <div id="app">
    <xheader></xheader>
    <xsearch></xsearch>
    <xpanel></xpanel>
    <xfooter></xfooter>
    <xpopup></xpopup>
    <xgallery></xgallery>
  </div>
</template>

<script>
import xheader from './components/xheader.vue';
import xsearch from './components/xsearch.vue'
import xpanel from './components/xpanel.vue'
import xfooter from './components/xfooter.vue'
import xpopup from './components/xpopup.vue'
import xgallery from './components/xgallery.vue'
export default {
  name: 'app',
  components: {
    xheader,
    xsearch,
    xpanel,
    xfooter,
    xpopup,
    xgallery
  }
}
</script>

<style>

</style>