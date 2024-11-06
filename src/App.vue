<script setup>
import NavBar from './components/AppNavbar.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <NavBar msg="Counter!" />
  <RouterView />


</template>

<style scoped>
main {
  display: grid;
  place-items: center;
  min-height: 90vh;
}
</style>
