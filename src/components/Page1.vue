<template>
  <div class="page-container">
    <div class="page-image-container">
      <div class="icon-container">
        <font-awesome-icon
          icon="arrow-left"
          style="font-size: 48px; color: #ddd; cursor: pointer"
          @click="$emit('preindex')"
        />
      </div>
      <!-------         뒤로가기 버튼          --------->
      <div class="gg-image-wrapper">
        <div class="gg-image-container">
          <img
            src="../../src/assets/gg_cross.png"
            class="gg-image"
            v-if="
              index != 1 &&
                index != 4 &&
                index != 7 &&
                index != 8 &&
                index != 10 &&
                index != 15
            "
          />
          <img
            src="../../src/assets/gg_explain.png"
            class="gg-image"
            v-if="
              index == 1 ||
                index == 4 ||
                index == 7 ||
                index == 8 ||
                index == 10 ||
                index == 15
            "
          />
        </div>
      </div>
      
      <!-------         초상화 이미지          --------->
      <div class="main-image-wrapper">
        <div class="main-image-container">
          <transition-group name="fade" tag="div">
            <img
              src="../../src/assets/page1_1.png"
              key="0"
              class="page-image-1"
              v-if="index == 0"
            />
            <img
              src="../../src/assets/page1_2.png"
              class="page-image-1"
              key="1"
              v-if="index == 1"
            />
            <img
              src="../../src/assets/page1_3.png"
              class="page-image-1"
              key="2"
              v-if="index == 2"
            />
            <img
              src="../../src/assets/page1_4.png"
              class="page-image-1"
              key="3"
              v-if="index == 3"
            />
            <img
              src="../../src/assets/page1_5.jpg"
              class="page-image-1"
              v-if="index == 4 || index == 5"
              key="4"
            />
            <img
              src="../../src/assets/page1_6.png"
              class="page-image-1"
              key="5"
              v-if="index == 6 || index == 7 || index == 8"
            />
            <img
              src="../../src/assets/page1_7.png"
              class="page-image-1"
              key="6"
              v-if="index == 9"
            />
            <img
              src="../../src/assets/page1_8.png"
              class="page-image-1"
              v-if="index == 10"
              key="7"
            />
            <img
              src="../../src/assets/page1_9.png"
              class="page-image-1"
              key="8"
              v-if="index == 11"
            />
            <img
              src="../../src/assets/page1_10.jpg"
              class="page-image-1"
              v-if="index == 12"
              key="9"
            />
            <img
              src="../../src/assets/page1_11.png"
              class="page-image-1"
              v-if="index == 13"
              key="10"
            />
            <img
              src="../../src/assets/page1_12.png"
              class="page-image-1"
              v-if="index == 14"
              key="11"
            />
            <img
              src="../../src/assets/page1_13.png"
              class="page-image-1"
              v-if="index == 15"
              key="12"
            />
            <img
              src="../../src/assets/page1_14.png"
              class="page-image-1"
              v-if="index == 16"
              key="13"
            />
            <img
              src="../../src/assets/page1_15.jpg"
              class="page-image-1"
              key="14"
              v-if="index == 17"
            />
            <img
              src="../../src/assets/page1_16.jpg"
              class="page-image-1"
              key="15"
              v-if="index > 17 && index < 25"
            />
          </transition-group>
        </div>
      </div>
      
    </div>
    <div class="page-text-container">
      <transition name="slide-fade" mode="out-in">
        <span class="page-text" :key="index">
          {{ text.page1[index] }}
        </span>
      </transition>
    </div>
  </div>
</template>

<script>
import text from "../data/text.json";

export default {
  props: ["index"],
  data() {
    return {
      text,
      image: [
        {src: require("../assets/page1_2.png")}
      ]
    };
  },
};
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity .5s;
}
.page-container {
  position: relative;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
}
.page-image-container {
  height: 65%;
  display: flex;
  flex-direction: row;
}
.icon-container {
  width: 5%;
  padding-top: 30px;
}
.gg-image-wrapper {
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.gg-image-container {
  position: relative;
  padding-top: 100%;
  overflow: hidden;
}
.gg-image {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  max-width: 100%;
  height: auto;
}
.main-image-wrapper {
  width: 35%;
}
.main-image-container {
  position: relative;
  padding-top: 100%;
  overflow: hidden;
}
.page-image-1 {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  max-width: 100%;
  height: auto;
}
.page-image-2 {
  width: 850px;
  position: absolute;
  top: 150px;
  left: 850px;
}
.page-image-3 {
  width: 700px;
  position: absolute;
  top: 150px;
  left: 860px;
}
.page-image-4 {
  position: absolute;
  top: 250px;
  left: 1060px;
}
.page-image-5 {
  position: absolute;
  top: 200px;
  left: 1000px;
}
.page-image-6 {
  width: 1600px;
  position: absolute;
  top: 200px;
  left: 550px;
}
.page-image-7 {
  width: 800px;
  position: absolute;
  top: 100px;
  left: 800px;
}
.page-image-8 {
  width: 600px;
  position: absolute;
  top: 160px;
  left: 920px;
}
.page-image-9 {
  width: 600px;
  position: absolute;
  top: 250px;
  left: 920px;
}
.page-image-10 {
  width: 600px;
  position: absolute;
  top: 250px;
  left: 920px;
}
.page-image-11 {
  width: 1200px;
  position: absolute;
  top: 250px;
  left: 720px;
}
.page-text-container {
  background-color: rgba(30, 30, 30);
  border-radius: 50px 50px 0 0;
  width: 100%;
  height: 35%;
  min-height: 350px;
  display: table;
  text-align: center;
}
.page-text {
  font-size: 32px;
  line-height: 54px;
  color: #fff;
  display: table-cell;
  vertical-align: middle;
  white-space: pre;
}
</style>
