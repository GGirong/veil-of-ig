<template>
  <div class="tutorial-container">
    <div v-if="firstIn" class="start-comp">
      <kinesis-container class="parent">
        <kinesis-element class="start-title" type="depth" :strength="5">
          무지의 베일
        </kinesis-element>
        <div class="start-button" @click="startTutorial">Start</div>
        <a class="login-button">Skip tutorial</a>
        <kinesis-element
          class="child child_one"
          tag="img"
          src="https://i.ibb.co/w6dshnq/main-ghost-1.png"
          type="depth"
        />
        <kinesis-element
          class="child child_two"
          tag="img"
          src="https://i.ibb.co/0Y4MXsy/main-ghost-2.png"
          type="depth_inv"
        />
        <kinesis-element
          class="child child_three"
          tag="img"
          src="https://i.ibb.co/0Y4MXsy/main-ghost-3.png"
          type="depth"
        />
        <kinesis-element
          class="child child_four"
          tag="img"
          src="https://i.ibb.co/0pNKF2N/main-ghost-2.png"
          type="depth"
        />
        <kinesis-element
          class="child child_five"
          tag="img"
          src="https://i.ibb.co/0Y4MXsy/main-ghost-3.png"
          type="depth_inv"
        />
        <kinesis-element
          class="child child_six"
          tag="img"
          src="https://i.ibb.co/w6dshnq/main-ghost-1.png"
          type="depth"
        />
      </kinesis-container>
    </div>
    <div v-if="!firstIn" class="tutorial-comp" @click="nextIndex">
      <Page1 :index="index" @preindex="preIndex" />
    </div>
    <loading
      :active.sync="isLoading"
      :can-cancel="true"
      :on-cancel="onCancel"
      :is-full-page="fullPage"
    >
      <div class="loading-title">
        화면 아무 곳이나 클릭하면서 진행해주세요!
      </div>
      <div class="loading-click">
        지난 페이지를 다시 보고 싶을땐 왼쪽 위의 뒤로가기 버튼을 눌러주세요
      </div>
    </loading>
  </div>
</template>

<script>
import { KinesisContainer, KinesisElement } from "vue-kinesis";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

import Page1 from "../../src/components/Page1";

export default {
  components: {
    KinesisContainer,
    KinesisElement,
    Loading,
    Page1,
  },
  name: "Tutorial",
  data() {
    return {
      textarea: "",
      message: "",
      firstIn: true,
      isLoading: false,
      fullPage: true,
      index: 0,
    };
  },
  methods: {
    fullScreen() {
      document.documentElement.webkitRequestFullscreen();
    },
    startTutorial() {
      document.documentElement.webkitRequestFullscreen();
      this.isLoading = true;
      this.firstIn = false;
    },
    onCancel() {
      this.isLoading = false;
    },
    nextIndex() {
      this.index++;
    },
    preIndex() {
      this.index--;
      this.index--;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Grandstander&display=swap");
.tutorial-container {
  width: 100vw;
  height: 100vh;
}
.tutorial-comp {
  width: 100%;
  height: 100%;
}
.start-comp {
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
}
.loading-title {
  font-size: 32px;
  font-weight: 600;
  color: #000;
}
.loading-click {
  font-size: 21px;
  margin-top: 30px;
  color: #000;
}
.parent {
  position: relative;
  width: 100%;
  height: 100%;
}
.start-comp-size {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}
.start-title {
  font-family: "Grandstander", cursive;
  color: #fff;
  position: absolute;
  font-size: 132px;
  top: calc(20vh);
  left: calc(50vw - 507px);
}
.start-button {
  font-family: "Grandstander", cursive;
  color: #fff;
  font-size: 48px;
  background-color: rgba(10, 10, 10);
  padding-top: 47px;
  width: 478px;
  height: 100px;
  border-radius: 60px;
  position: absolute;
  top: calc(40vh);
  left: calc(50vw - 239px);
  cursor: pointer;
}
.start-button:hover {
  background-color: rgba(20, 20, 20);
}
.login-button {
  font-family: "Grandstander", cursive;
  color: rgba(20, 20, 20) !important;
  position: absolute;
  font-size: 32px;
  top: calc(50vh + 40px);
  left: calc(50vw - 93px);
  cursor: pointer;
}
.child {
  width: 200px;
  height: 200px;
  position: absolute;
}
.child_one {
  top: calc(60vh);
  left: calc(5vw);
}
.child_two {
  top: calc(60vh);
  left: calc(20vw);
}
.child_three {
  width: 230px;
  top: calc(60vh);
  left: calc(35vw);
}
.child_four {
  top: calc(60vh);
  left: calc(50vw);
}
.child_five {
  width: 210px;
  top: calc(60vh);
  left: calc(65vw);
}
.child_six {
  top: calc(60vh);
  left: calc(80vw);
}
</style>
