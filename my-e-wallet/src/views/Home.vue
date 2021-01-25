<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <Top :title="title" :cardTitle="cardTitle" />
  </div>
</template>

<script>
// @ is an alias to /src
import Top from "../components/Top.vue";
export default {
  name: "Home",
  components: {
    Top,
  },
  data() {
    return {
      title: "E-WALLET",
      cardTitle: "Active card",
    };
  },
};
</script>