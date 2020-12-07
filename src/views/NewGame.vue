<template>
    <div class="newgame-wrapper">
        <div class="guide-header-container">
            <div class="guide-header-left">
                <img src="../assets/web-2-icon-sound.png" class="img-icon"/>
            </div>
            <div class="guide-header-right">
                <img src="../assets/web-2-icon-home.png" class="img-icon" @click="openModal"/>
            </div>
        </div>
        <div class="newgame-count-container"></div>
        <div class="newgame-content-container">
            <div class="newgame-img-container">

            </div>
            <div class="newgame-btn-container">

            </div>
        </div>
        <div class="newgame-modal-overlay">
            <div class="newgame-modal-container"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.newgame-wrapper {
    background: #fff;
    width: 100%;
    height: 100vh;
}
.guide-header-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.img-icon {
    height: 80px;
    cursor: pointer;
}
</style>