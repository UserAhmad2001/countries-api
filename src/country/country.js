import { createApp } from 'vue'
import App_country from '../AppCountry.vue'
import '../scss/style.scss'

/* Set up using Vue 3 */
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faMagnifyingGlass, faArrowLeftLong, faSun, faMoon, faChevronDown } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add( faMagnifyingGlass, faArrowLeftLong, faSun, faMoon, faChevronDown )





createApp(App_country)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app-country')
