import Vue from 'vue'
import App from './App.vue'
import axios from "axios";

axios.defaults.baseURL = 'https://vue-js-test-866de-default-rtdb.firebaseio.com'


new Vue({
  el: '#app',
  render: h => h(App)
})
