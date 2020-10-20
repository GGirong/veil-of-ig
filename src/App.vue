<template>
  <div id="app" style="width: 100%; height: 100%">
    <Tutorial />
  </div>
</template>

<script>
import Tutorial from "./views/Tutorial.vue";

export default {
  name: "App",
  components: {
    Tutorial,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
