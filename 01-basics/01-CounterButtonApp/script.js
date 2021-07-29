import { createApp } from './vendor/vue.esm-browser.js';

const vm = createApp({
  data() {
    return {
      counter: 0,
    };
  },
  template: '<button type="button" @click="counter += 1">{{counter}}</button>'

}).mount('#app');
// Создайте Vue приложение
