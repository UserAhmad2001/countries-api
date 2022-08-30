<script setup>
import {getAllCountries, getCountryByName} from './demo'
</script>
<script>
  export default {
    data(){
      return {
        nightMode:true,
        countries:[]
      }
    },
    beforeMount(){
      this.countries = getAllCountries()
      console.log(countries);
    }
  }
</script>

<template>
  <header>
    <h1>Where in the world?</h1>
    <div class="theme-btn">
      <i></i>
      <h1>{{ nightMode ? 'Dark' : 'Light' }} Mode</h1>
    </div>
  </header>

  <section class="filter-sec">
    <div class="in">
      <i></i>
      <input placeholder="Search for a country...">
    </div>

    <select id="regions-filter">
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  </section>


  <div class="countries">
    <country v-for="item in countries" />
  </div>

</template>

<style scoped lang="scss">
</style>


