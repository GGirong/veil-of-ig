<template>
  <div id="app" class="no-drag">
    <Intro v-if="index==0" @click="nextPage"/>
    <Video v-if="index==1"/>
    <Game v-if="index==2" />
  </div>
</template>

<script>
import Game from "./views/Game.vue"

export default {
  name: "App",
  components: {
    Video : () => import('@/views/Video'),
    Game,
    Intro  : () => import('@/views/Intro'),
  },
  data() {
    return {
      index: 0
    }
  },
  methods: {
    nextPage() {
      this.index = 1
      setTimeout(()=> {
        this.index = 2
      }, 30000)
    }
  },
  mounted() {
    
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
