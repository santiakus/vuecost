<template>
  <div id="app">
   <AppHeader/>
   <router-view></router-view>
   <AppFooter/>
  </div>
</template>

<script>
import AppHeader from './views/layouts/AppHeader.vue'
import AppFooter from './views/layouts/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>
