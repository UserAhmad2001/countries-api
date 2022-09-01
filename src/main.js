import { createApp } from 'vue'
import App from './App.vue'
import '../scss/style.scss'

/* Set up using Vue 3 */
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faMagnifyingGlass, faSun, faMoon, faChevronDown } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add( faMagnifyingGlass, faSun, faMoon, faChevronDown )





createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
