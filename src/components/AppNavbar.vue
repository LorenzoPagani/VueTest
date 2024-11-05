<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
  default: 'Hello World!'
})


</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-light">
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand text-black">{{ msg }} </RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" :class="{ 'active': $route.path === '/' }" to="/">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" :class="{ 'active': $route.path === '/about' }" to="/about">About</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" :class="{ 'active': $route.path === '/random' }" to="/random">Pokémon
            </RouterLink>
          </li>
        </ul>

      </div>
    </div>
  </nav>
</template>

<style scoped>
a {
  font-weight: bold;
  color: gray;
}

nav {
  min-height: 10vh;
  background-color: rgba(81, 156, 210, 0.682);

}

.shadow-light {
  box-shadow: 0px 6px 15px 10px #04040473;
}
</style>
