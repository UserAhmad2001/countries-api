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
    }).catch(err=>console.log(err))
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
        
        let currencies = Object.keys(country.currencies)
        .map((key,index,array)=>{
          return country.currencies[key].name
        }).join(', ')
        
        let languages = Object.keys(country.languages)
        .map((key,index,array)=>{
          return country.languages[key]
        }).join(', ')
        
        let nativeName = Object.keys(country.name.nativeName)
        .map((key,index,array)=>{
          return country.name.nativeName[key].common
        }).join(', ')
        
        localStorage.setItem('name',country.name.official)
        localStorage.setItem('population',country.population)
        localStorage.setItem('region',country.region)
        localStorage.setItem('sub-region',country.subregion)
        localStorage.setItem('capital',country.capital)
        localStorage.setItem('img',country.flags.png)
        localStorage.setItem('top-level-domain',country.tld)
        localStorage.setItem('borders',country.borders)
        localStorage.setItem('currencies', currencies)
        localStorage.setItem('languages', languages)
        localStorage.setItem('native-names',nativeName)
                  
        window.location.replace('country/country.html');
      }
    },
    
  }
</script>
<template>
  <div :class="{app_dark:nightMode,app_light:!nightMode}">
    <header>
    <h1>Where in the world?</h1>
    <div @click="()=>{nightMode = !nightMode}" class="theme-btn">
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
