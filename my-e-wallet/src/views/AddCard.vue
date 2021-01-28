<template>
  <div>
    <Top :title="title" :cardTitle="cardTitle" />
    <Card :card="card" />
    <CardForm :card="card" v-on:clicker="addCard()" />
  </div>
</template>

<script>
import Top from "@/components/Top.vue";
import Card from "@/components/Card.vue";
import CardForm from "@/components/CardForm";

export default {
  components: {
    Top,
    Card,
    CardForm,
  },
  computed: {
    cardToSend() {
      return {
        id: Date.now(),
        holder: this.card.holder,
        vendor: this.card.vendor,
        number: this.card.number,
        validMonth: this.card.validMonth,
        validYear: this.card.validYear,
        active: false,
      };
    },
  },
  data() {
    return {
      title: "ADD NEW CARD",
      cardTitle: "NEW CARD",
      card: {
        holder: "",
        vendor: "",
        number: "",
        validMonth: "",
        validDay: "",
      },
    };
  },
  methods: {
    addCard() {
      this.$root.setAddCard(this.cardToSend);
    },
    expiryDate() {
      return this.$root.form.validMonth;
    },
  },
};
</script>

<style>
</style>