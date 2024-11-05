<script setup>
import { ref, onMounted } from 'vue'
defineProps({
    rocket: {
        type: String,
        default: "0"
    }
})

const number = ref(0)
</script>

<template>


    <img id="rocket" src="../../src/assets/accelerate-svgrepo-com.svg" alt="">

</template>

<style scoped>
#rocket {
    position: absolute;
    top: 10%;
    right: v-bind(rocket);
    width: 100px;
    height: 100px;
    z-index: 1000;
    transform: rotate(270deg);
    padding-bottom: 20px;
}
</style>
