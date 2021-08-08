// import { createApp } from './vendor/vue.esm-browser.js';

import { createApp, defineComponent } from "./vendor/vue.esm-browser.js";

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

const App = defineComponent({
  name: "App",
  data() {
    return {
      currentMeetupId: null,
      currentMeetup: null,
    }
  },
  watch: {
    async currentMeetupId(newMeetup) {
        this.currentMeetup = await fetchMeetupById(newMeetup);
    },
  },
  template: `
     <div>
       <label v-for="n in 5" :key="n">
         <input type="radio" :value="n" v-model="currentMeetupId" /> {{ n }}
       </label>
     <hr />

     <h3 v-if="currentMeetup">{{ currentMeetup }}</h3>
     </div>
  `
});
const vm = createApp(App).mount('#app');


// Требуется создать Vue приложение
