
<script >
    export default {
        data(){
            return {
                name:'',
                population:'',
                region:'',
                subRegion:'',
                capital:'',
                img:'',
                tld:'',
                borders:'',
                currencies:'',
                languages:'',
                nativeName:'',
                nightMode:true
            }
        },
        beforeMount(){
            this.name = localStorage.getItem('name')
            this.population = localStorage.getItem('population')
            this.region = localStorage.getItem('region')
            this.subRegion = localStorage.getItem('sub-region')
            this.capital = localStorage.getItem('capital')
            this.img = localStorage.getItem('img')
            this.tld = localStorage.getItem('top-level-domain')
            this.borders = localStorage.getItem('borders').split(',')
            this.currencies = localStorage.getItem('currencies')
            this.languages = localStorage.getItem('languages')
            this.nativeName = localStorage.getItem('native-names')
        },
        methods:{
            backBtnClick(){
                window.location.replace('index.html');
            }
        }
    }
</script>






<template>
    <div :class="{countryPageLight:!nightMode,countryPageDark:nightMode}">
        <header>
    <h1>Where in the world?</h1>
    <div @click="()=>{this.nightMode = !this.nightMode}" class="theme-btn">
        <font-awesome-icon class="icon" :icon=" nightMode ? ['fas', 'moon']:['fas', 'sun']"   />
        <p>{{ nightMode ? 'Dark' : 'Light' }} Mode</p>
    </div>
  </header>


    <div class="back-btn" @click="backBtnClick">
        <font-awesome-icon class="icon" :icon="['fas', 'arrow-left-long']"   />
        <h1>BACK</h1>
    </div>

  <div class="info">
    <img :src="img" alt="country flag">

    <div class="info-txt">
        <h1 class="name">{{ name }}</h1>
        <div class="g1">
        <h2>Native Name: <p>{{ nativeName }}</p></h2>
        <h2>Population: <p>{{ population }}</p></h2>
        <h2>Region: <p>{{ region }}</p></h2>
        <h2>Sub Region: <p>{{ subRegion }}</p></h2>
        <h2>Capital: <p>{{ capital }}</p></h2>
    </div>

    <div class="g2">
        <h2>Top Level Domain: <p>{{ tld }}</p></h2>
        <h2>Currencies: <p>{{ currencies }}</p></h2>
        <h2>Langauges: <p>{{ languages }}</p></h2>
    </div>

    <div class="border-countries">
        <h2>Border Countries:</h2>
        <p v-for="item in borders">{{ item }}</p>
    </div>

    </div>




  </div>
    </div>
</template>