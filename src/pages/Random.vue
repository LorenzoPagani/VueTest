<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const msg = ref('')
const pokemon = ref('')
const pokedescription = ref('')
const active = ref(false)
const loading = ref(false)
const legacyCry = ref(true)
function fetchData() {
    if (!msg.value) {
        return active.value = false
    }
    else {
        active.value = true
        loading.value = true
        axios.get(`https://pokeapi.co/api/v2/pokemon/${msg.value}/`)
            .then(response => {
                console.log(response.data)
                pokemon.value = response.data
                if (pokemon.value.cries.legacy) {
                    legacyCry.value = true
                }
                else {
                    legacyCry.value = false
                }
            }).catch(error => {
                console.error(error)
            })
            .finally(() => {
                loading.value = false
            })
        axios.get(`https://pokeapi.co/api/v2/pokemon-species/${msg.value}/`)
            .then(response => {
                console.log(response.data.flavor_text_entries)
                response.data.flavor_text_entries.forEach(desc => {
                    if (desc.language.name === 'it') {
                        pokedescription.value = desc.flavor_text
                    }

                });
            }).catch(error => {
                console.error(error)
            })
    }
}





</script>
<template>
    <main>
        <div v-if="loading" class="my-spinner spinner-grow text-danger position-fixed" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <div v-if="pokemon">
            <div>
                <h1 class="text-center mb-3 text-capitalize">{{ pokemon.name }}</h1>
            </div>
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="pokeball">
                        <img v-if="pokemon.sprites" :src="pokemon.sprites.front_shiny" alt="pokemon image">
                    </div>
                    <div class="card m-3 bg-danger text-white">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="card-body">
                                    <h5 class="card-title">Abilities</h5>
                                    <ul class="list-group">
                                        <li class="list-group-item" v-for="ability in pokemon.abilities">{{
                                            ability.ability.name }}
                                        </li>
                                    </ul>
                                </div>
                                <!-- stats -->
                                <div class="card-body">
                                    <h5 class="card-title">Stats</h5>
                                    <ul class="list-group">
                                        <li class="list-group-item" v-for="stat in pokemon.stats" :key="stat.stat.name">
                                            {{
                                                stat.stat.name }}: {{
                                                stat.base_stat }} </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card-body">
                                    <div class="text-center">
                                        <h5 class="card-title">Legacy cry</h5>
                                        <audio :autoplay="legacyCry" controls :src="pokemon.cries.legacy"></audio>
                                    </div>
                                    <div class="mt-3 text-center">
                                        <h5 class="card-title">Latest cry</h5>
                                        <audio :autoplay="!legacyCry" controls :src="pokemon.cries.latest"></audio>
                                    </div>
                                </div>
                                <div class="card-body bg">
                                    <h5>Descrizione</h5>
                                    <p class="text-black bg-white rounded-1 p-3">{{ pokedescription }}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <h1 class="text-center">Enter a Pokémon number or name!</h1>
        </div>
        <form @submit.prevent="fetchData">
            <input v-model="msg" class="form-control" type="text" required>
        </form>
    </main>
</template>
<style scoped>
h1 {
    color: red;
}

img {
    width: 110%;

    border-radius: 50%;
}

.pokeball {
    width: 300px;
    height: 300px;
    background-image: url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.4nt9GLAa5HZRM_SuxKr2HQHaHa%26pid%3DApi&f=1&ipt=439e635e17e2a85315cc40ee58d3d6dde42986c2693eccf43c052433000baf73&ipo=images');
    background-color: white;
    background-size: 115%;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;

    padding: 25px;
}

.my-spinner {
    top: 13%;
    right: 1%;
    width: 5rem;
    height: 5rem;
}

audio {
    width: 50%;
}

@media (max-width: 768px) {
    audio {
        width: 100%;
    }
}
</style>