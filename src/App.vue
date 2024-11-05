<script setup>
import NavBar from './components/AppNavbar.vue';
import AppFooter from './components/AppFooter.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <NavBar msg="Counter!" />
  <RouterView />
  <AppFooter />

</template>

<style scoped>
main {
  display: grid;
  place-items: center;
  min-height: 80vh;
}
</style>
