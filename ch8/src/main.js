import Vue from 'vue'
import App from './App.vue'

// Step 1: Event Bus in the main.js
export const eventBus = new Vue()

new Vue({
  el: '#app',
  render: h => h(App)
})
