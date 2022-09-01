<script setup>
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
      },
      regionFilterClick(ev){
        if(ev.target.value === 'Filter by Region'){
          this.viewedCountries = this.countries
        }else{
          this.viewedCountries = this.countries.filter((val,ind,arr)=>{
            return val.region.toLowerCase().includes(ev.target.value.toLowerCase())
          })
        }
      },
      handleCountryClick(country){
        localStorage.setItem('name',country.name.official)
        localStorage.setItem('population',country.population)
        localStorage.setItem('region',country.region)
        localStorage.setItem('sub-region',country.subregion)
        localStorage.setItem('capital',country.capital.join(','))
        localStorage.setItem('img',country.flags.png)
        localStorage.setItem('top-level-domain',country.tld.join(','))
        localStorage.setItem('borders',country.borders.join(','))
        // localStorage.setItem('currencies',Object.keys(country.currencies).map((key)=>{
        //   return country.currencies[key]
        // }).join(','))
        // localStorage.setItem('languages',Object.keys(country.languages).map((key)=>{
        //   return country.languages[key]
        // }).join(','))
        // localStorage.setItem('native-names',Object.keys(country.nativeName).map((key)=>{
        //   return country.languages[key].common
        // }).join(','))
        
        
        window.location.replace('country.html');
      }
    }
  }
</script>
<template>
  <div :class="{app_light:!nightMode, app_dark:nightMode}">
    <header>
    <h1>Where in the world?</h1>
    <div @click="()=>{this.nightMode = !this.nightMode}" class="theme-btn">
      <font-awesome-icon class="icon" :icon=" nightMode ? ['fas', 'moon']:['fas', 'sun']"   />
      <p>{{ nightMode ? 'Dark' : 'Light' }} Mode</p>
    </div>
  </header>

  <section class="filter-sec">
    <div class="in">
      <font-awesome-icon class="icon" :icon="['fas', 'magnifying-glass']"  />
      <input :oninput="searchCountry" placeholder="Search for a country...">
    </div>

    <div class="select">
      <select @change="regionFilterClick" id="regions-filter">
        <option seleced>Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
    <font-awesome-icon class="icon" :icon="['fas', 'chevron-down']"  />
    
    </div>
  </section>


  <div class="countries">
      <country v-for="item in viewedCountries" :props="item" 
      @click="()=>{handleCountryClick(item)}" 
      />
  </div>

  </div>

</template>
