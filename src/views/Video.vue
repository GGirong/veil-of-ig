<template>
    <section class="responsive-videobg video-container">
        <div class="video-subs" v-if="index==0">여러분은 우리 사회가 '공정한 사회'라고 생각하시나요?</div>
        <div class="video-subs" v-if="index==1">우리 사회에서 이루어지는 빈부, 나이, 젠더 등에 따른 차별에 대한 담론을 살펴보면<br/>'공정한 사회'라고 부르기엔 어려워 보입니다.</div>
        <div class="video-subs" v-if="index==2">그렇다면 이런 모든 사회 구성원에게 '공정한 사회'는 불가능한 것일까요?<br/>어떻게 하면 '공정한 사회'를 만들어나갈 수 있을까요?</div>
        <div class="video-wrapper">
            <video autoplay loop playsinline preload="auto" class="" muted style="object-fit: cover;">
                <source src="@/assets/exvideo.mp4">
            </video>
        </div>
        <div class="video-overlay"></div>
        <div class="video-fade-out" v-if="end"></div>
    </section>
</template>

<script>

export default {
    data() {
        return {
            index: 0,
            end: false
        };
    },
    methods: {
        fullScreen() {
            document.documentElement.webkitRequestFullscreen();
        }
    },
    mounted() {
        this.fullScreen()
        setTimeout(() => {
            this.index = 1
        }, 6000)
        setTimeout(() => {
            this.index = 2
        }, 17000)
        setTimeout(() => {
            this.end = true
        }, 27000)
    }
}
</script>

<style>
.responsive-videobg {
    background: none;
    position: relative;
    width: 100%;
    overflow: hidden;
}
.video-container {
    height: 100vh;
}
.video-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    z-index: 0;
}
.video-overlay {
    z-index: 1;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.88), rgba(251, 148, 158, 0.22), rgba(251, 148, 158, 0.42));
}
.video-subs {
    position: absolute;
    font-size: 28px;
    line-height: 40px;
    padding: 15px;
    top: 80%;
    left: 50%;
    z-index: 10;
    background-color: black;
    color: white;
    transform: translate(-50%,-50%);
}
.video-fade-out {
    z-index: 5;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background-color: black;
    animation: fadein 3s;
    -moz-animation: fadein 3s; /* Firefox */
    -webkit-animation: fadein 3s; /* Safari and Chrome */
    -o-animation: fadein 3s;
}
@keyframes fadein {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
@-moz-keyframes fadein { /* Firefox */
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
@-webkit-keyframes fadein { /* Safari and Chrome */
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
@-o-keyframes fadein { /* Opera */
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>