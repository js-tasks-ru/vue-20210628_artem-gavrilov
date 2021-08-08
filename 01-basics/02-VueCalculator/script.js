import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const App = defineComponent({
  name: "App",
  data() {
    return {
      pick: 'sum',
      firstNum: 0,
      secondNum: 0,
    }
  },
  computed: {
    resultNum() {
      switch(this.pick) {
        case 'sum':
          return this.firstNum + this.secondNum;
        case 'subtract':
          return this.firstNum - this.secondNum;
        case 'multiply':
          return this.firstNum * this.secondNum;
        case 'divide':
          if (this.secondNum !== 0) {
            return this.firstNum / this.secondNum;
          }
          else return 0;
      }
    }
  },
});
const vm = createApp(App).mount('#app');
// Создайте Vue приложение
