<template>
  <div id="app" class="no-drag">
    <Intro v-if="index==0" @click="nextPage" @togame="toGame"/>
    <Guide v-if="index==1" @click="nextPage" @home="toHome"/>
    <NewGame v-if="index==2" @home="toHome" @click="nextPage"/>
    <Outro v-if="index==3" @home="toHome"/>
  </div>
</template>

<script>
import NewGame from "./views/NewGame.vue"
import Guide from "./views/Guide.vue"
import Outro from './views/Outro.vue'

export default {
  name: "App",
  components: {
    Intro  : () => import('@/views/Intro'),
    Guide,
    NewGame,
    Outro
  },
  data() {
    return {
      index: 0
    }
  },
  methods: {
    nextPage() {
      this.index++
    },
    toGame() {
      this.index = 2
    },
    toHome() {
      this.index = 0
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
  color: #fff;
}
.no-drag {
  -ms-user-select: none; 
  -moz-user-select: -moz-none; 
  -webkit-user-select: none; 
  -khtml-user-select: none; 
  user-select:none;
}

</style>
