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
        id: "1",
        holder: "christoffer wallenberg",
        vendor: "bitcoin",
        number: "4444444444444444",
        validMonth: "03",
        validYear: "2024",
        active: true,
        },
        
        
      ],
      activeCard: [
        {
        id: "",
        holder: "",
        vendor: "",
        number: "",
        validMonth: "",
        validYear: "",
        }
      ],
    }
  },
  methods: {
    setAddCard(data) {
      this.cards.push(data)
    },
    setActiveCard(id) {
      let activeTrue = this.cards.find(card => card.active === true);
      let activeId = this.cards.find(card => card.id === id);
      activeTrue.active = false
      activeId.active = true
    },
  },
  render: h => h(App)
}).$mount('#app')
