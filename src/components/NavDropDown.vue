<script setup>
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
const props = defineProps({
    navLink: Object
})

const link = ref()
const toggleVisibility = (title) => {
    props.navLink.isVisible = !props.navLink.isVisible
}
onClickOutside(link, () => props.navLink.isVisible = false)

</script>

<template>
    <li ref="link" @click="toggleVisibility">
        <h5>{{ navLink.title }}</h5>
        <ul v-if="navLink.isVisible" class="navbar-nav me-auto mb-2 mb-lg-0">
            <li v-for=" link in navLink.links" :key="link.url" class="nav-item">
                <RouterLink class="nav-link" :class="{ 'active': $route.path === link.url }" :to="link.url">{{ link.name
                    }}
                </RouterLink>
            </li>
        </ul>
    </li>
</template>