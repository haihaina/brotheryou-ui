import { createApp } from 'vue'
import App from './App.vue'
// 导出组件
import broUi from './components/index'
// import './style/index.css'
// import './components/button/index.css'

createApp(App).use(broUi).mount('#app')
