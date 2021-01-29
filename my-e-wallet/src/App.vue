<template>
  <div id="app">
    <div id="nav"></div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=PT+Mono|Source+Sans+Pro:600,700&display=swap);

body {
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: PT Mono, monospace;
  padding: 1rem;
  height: 100vh;
  max-width: 24rem;
  margin: 0 auto;
  box-sizing: border-box;
}
</style>
