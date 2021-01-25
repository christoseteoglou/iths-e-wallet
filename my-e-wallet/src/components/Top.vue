<template>
  <header>
    <h1>{{ title }}</h1>
    <p>{{ cardTitle }}</p>
  </header>
</template>

<script>
export default {
  props: {
    title: String,
    cardTitle: String,
  },
};
</script>

<style>
</style>