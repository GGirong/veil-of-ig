<template>
  <div id="app" class="no-drag">
    <Video v-if="index==0"/>
    <Game v-if="index==1" />
  </div>
</template>

<script>
import Video from "./views/Video.vue";
import Game from "./views/Game.vue"

export default {
  name: "App",
  components: {
    Video,
    Game
  },
  data() {
    return {
      index: 0
    }
  },
  mounted() {
    setTimeout(()=> {
      this.index = 1
    }, 30000)
  }
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
