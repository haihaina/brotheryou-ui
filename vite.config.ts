// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()]
// })
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
const { resolve } = require('path')

export default defineConfig({
  base: './',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  css:{
    preprocessorOptions: {
      less: {
        additionalData: `
          @import "@/assets/styles/variables.less";
        `,
      },
    },
  }
})
