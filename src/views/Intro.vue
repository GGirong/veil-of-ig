<template>
    <section class="responsive-videobg video-container">
        <div class="intro-title">무지의 장막</div>
        <div class="intro-btn" @click="start()">시작하기</div>
        <div class="video-wrapper">
            <video autoplay loop playsinline preload="auto" muted ref="videoRef" class="video">
                <source src="@/assets/walking.mp4">
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
        },
        start() {
            this.end = true
            setTimeout(() => {
                this.$emit('click')
            }, 2000)
            
        }
    },
    mounted() {
        this.fullScreen()
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
    mix-blend-mode: darken;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.88), rgba(0,0,0, 0.6));
}
.intro-title {
    position: absolute;
    top: 30%;
    left: 50%;
    z-index: 10;
    color: white;
    font-size: 10vw;
    font-weight: 800;
    transform: translate(-50%,-50%);
}
.intro-btn {
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 10;
    color: white;
    font-size: 2vw;
    width: 18vw;
    border: 1px solid white;
    padding: 1.5vw;
    border-radius: 2vw;
    cursor: pointer;
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
.video {
    object-fit: cover;
    filter: grayscale(100%);
    -webkit-filter:grayscale(100%);
}
</style>