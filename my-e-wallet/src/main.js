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
        holder: "christos eteoglou",
        vendor: "evil",
        number: "1337800813378008",
        validMonth: "07",
        validYear: "24",
        active: true,
        },
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
    removeActiveCard() {
      if(this.cards.length === 1) {
        alert('bajs')
      } else {
        let cardPlacement = this.cards.map(function(evt) {evt.active;}).indexOf(true);
        this.cards.splice(cardPlacement)
        this.cards[0].active = true;
      }
    },
  },
  render: h => h(App)
}).$mount('#app')
