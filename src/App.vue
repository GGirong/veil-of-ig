<template>
  <div id="app" class="no-drag">
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
.no-drag {
  -ms-user-select: none; 
  -moz-user-select: -moz-none; 
  -webkit-user-select: none; 
  -khtml-user-select: none; 
  user-select:none;
}

</style>
