<script setup>
import {getAllCountries, getCountryByName} from './demo'
import Country from './components/Country.vue'
</script>
<script>
  export default {
    data(){
      return {
        nightMode:true,
        countries:[],
        viewedCountries:[]
      }
    },
    beforeMount(){
    fetch('https://restcountries.com/v3.1/all')
    .then(data=>data.json())
    .then(res=>{
        this.countries = res
        this.viewedCountries = res
    })
    },
    methods:{
      searchCountry(ev){
        this.viewedCountries = this.countries.filter((value,index,array)=>{
          return value.name.official.toLowerCase().includes(ev.target.value.toLowerCase());
        })
      }
    }
  }
</script>
<template>
  <div :class="{app_light:!nightMode, app_dark:nightMode}">
    <header>
    <h1>Where in the world?</h1>
    <div class="theme-btn">
      <i></i>
      <p>{{ nightMode ? 'Dark' : 'Light' }} Mode</p>
    </div>
  </header>

  <section class="filter-sec">
    <div class="in">
      <i></i>
      <input :oninput="searchCountry" placeholder="Search for a country...">
    </div>

    <select id="regions-filter">
      <option seleced>Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  </section>


  <div class="countries">
    <country v-for="item in viewedCountries" :props="item" />
  </div>

  </div>

</template>

<style scoped lang="scss">
</style>


