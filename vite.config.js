import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/countries-api/",
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },

  },
    build:{
      rollupOptions:{
        input:{
          main:resolve(__dirname, 'index.html'),
          country:resolve(__dirname, 'src/country/country.html')
        },
        external:[
          resolve(__dirname, 'src/country/country.js')
        ],
      },
      watch:{

      }
    }
})


// export default defineConfig({
//   // base: "/countries-api/",
//   plugins: [vue()],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     },

//   }
// })