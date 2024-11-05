<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import MovingBackground from '../components/MovingBackground.vue'


//*******/ data /*******//

let monthlyPay = ref(5000)
let count = ref(0)
let dateTimer = ref(new Date().toLocaleString())
let secondlyPay = computed(() => monthlyPay.value / millisecondsInCurrentMonth())
const increaseButton = ref(null)
const clearButton = ref(null)
let increaseCount = null
let timerInterval = null


//*******// functions //*******//

function increase() {
    increaseCount = setInterval(() => {
        count.value = parseFloat(count.value) + secondlyPay.value
    }, 100)
    if (increaseButton.value) increaseButton.value.disabled = true
    if (clearButton.value) clearButton.value.disabled = false
}

function clear() {
    clearInterval(increaseCount)
    if (increaseButton.value) increaseButton.value.disabled = false
    if (clearButton.value) clearButton.value.disabled = true
}

function millisecondsInCurrentMonth() {
    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth()
    const startOfMonth = new Date(year, month, 1)
    const startOfNextMonth = new Date(year, month + 1, 1)
    return ((startOfNextMonth - startOfMonth) / 10)
}

//*******// lifecycle //*******//

onMounted(() => {
    timerInterval = setInterval(() => {
        dateTimer.value = new Date().toLocaleString()
    }, 1000)
})

onUnmounted(
    () => {
        clearInterval(timerInterval)
    }
)
</script>

<template>
    <main>
        <MovingBackground :rocket="parseFloat(count.toFixed(6)) + '%'" />
        <div class="container-fluid d-flex justify-content-center">
            <div class="card col-lg-6">
                <div class="card-header">
                    <h1>Counter: {{ count.toFixed(6) }}</h1>
                </div>
                <div class="card-body">
                    <h2>Data e ora: {{ dateTimer }}</h2>
                    <h2>centesimi di secondo nel mese corrente: {{ millisecondsInCurrentMonth() }}</h2>
                    <h2>Paga al secondo: {{ secondlyPay * 100 }} </h2>
                    <div class="input-group justify-content-center">
                        <button class="btn btn-success" ref="increaseButton" @click="increase">Start
                            counter</button>
                        <input class="form-control" type="number" v-model="monthlyPay" placeholder="Enter monthly pay">
                        <button class="btn btn-danger" ref="clearButton" @click="clear" disabled>Stop counter</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped></style>