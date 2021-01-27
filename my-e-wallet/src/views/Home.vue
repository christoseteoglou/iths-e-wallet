<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <Top :title="title" :cardTitle="cardTitle" />
    <Card :card="activeCard" /> <br />
    <CardStack :cards="cards" />
  </div>
</template>

<script>
// @ is an alias to /src
import Top from "@/components/Top.vue";
import Card from "@/components/Card.vue";
import CardStack from "@/components/CardStack";

export default {
  name: "Home",
  components: {
    Top,
    Card,
    CardStack,
  },
  computed: {
    cards() {
      return this.$root.cards;
    },
    activeCard() {
      return this.cards.find((card) => card.active === true);
    },
  },
  data() {
    return {
      title: "E-WALLET",
      cardTitle: "Active card",
      // card: {
      //   holder: "",
      //   vendor: "",
      //   number: "14141241412414",
      //   validMonth: "",
      //   validDay: "",
      // },
    };
  },
};
</script>