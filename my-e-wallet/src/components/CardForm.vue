<template>
  <form>
    <label for="card-nummer">Card Number</label>
    <input type:="text" name= "card-nummer" placeholder="XXXX XXXX XXXX XXXX"
    maxlength="16" v-model="card.number" >
    <button @click.prevent="clicker">Add card</button>
  </form>
</template>

<script>
export default {
  props: {
    card: Object,
  },
  methods: {
    clicker() {
      this.$emit("clicker");
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>