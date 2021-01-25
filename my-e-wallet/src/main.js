import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  data(){
    return {
      cards: [
        {
        id: "432984728397",
        holder: "The name",
        vendor: "bitcoin",
        number: "XXXXYYYYZZZZFFFF",
        validMonth: "12",
        validDay: "5"
        }
      ]
    }
  },
  methods: {
    setAddCard(data) {
      this.cards.push(data)
    }
  },
  render: h => h(App)
}).$mount('#app')
