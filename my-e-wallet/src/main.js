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
        {
        id: "2",
        holder: "Vanessa Lamb",
        vendor: "blockchain",
        number: "2628081506092703",
        validMonth: "07",
        validYear: "24",
        active: true,
        },
        {
        id: "3",
        holder: "Phyllis Malone",
        vendor: "bitcoin",
        number: "3532334425636152",
        validMonth: "07",
        validYear: "24",
        active: true,
        },
        {
        id: "4",
        holder: "Harriet Castro",
        vendor: "ninja",
        number: "5267103948965635",
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
        alert('You need at least one active card!')
      } else {
        let cardPlacement = this.cards.map(function(evt) {evt.active;}).indexOf(true);
        this.cards.splice(cardPlacement)
        this.cards[0].active = true;
      }
    },
  },
  render: h => h(App)
}).$mount('#app')
