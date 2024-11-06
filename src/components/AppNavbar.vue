<script setup>
import { ref } from 'vue'
import NavDropDown from './NavDropDown.vue';

const navLinks = ref([
  { title: "Money Counter", isVisible: false, links: [{ url: '/', name: 'Home' }, { url: '/about', name: 'About' },] },
  { title: "Pokédex", isVisible: false, links: [{ url: '/random', name: 'Pokemon' }] },
])


defineProps({
  msg: String,
  default: 'Hello World!'
})


</script>
<template>
  <nav class="navbar navbar-expand-lg shadow-light">
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand ">{{ msg }} </RouterLink>


      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">

        <ul class="navbar-nav navbar-dark">
          <NavDropDown v-for="navLink in navLinks" :key="navLink.title" class="nav-link" :nav-link />
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
a {
  font-weight: bold;
  color: rgb(255, 255, 255);
}

nav {
  min-height: 10vh;
  background-color: #1D6DA4;
  color: white;
}

.shadow-light {
  box-shadow: 0px 6px 15px 10px #04040473;
}
</style>
