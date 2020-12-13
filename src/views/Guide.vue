<template>
    <div class="guide-container">
        <div class="guide-header-container">
            <div class="guide-header-left">
                <img src="../assets/web-2-icon-sound.png" class="img-icon"/>
                <img src="../assets/web-2-icon-back.png" class="img-icon" @click="before" v-if="index != 0"/>
                <img src="../assets/web-2-icon-go.png" class="img-icon" @click="next"/>
            </div>
            <div class="guide-header-right">
                <img src="../assets/web-2-icon-home.png" class="img-icon" @click="openModal"/>
            </div>
        </div>
        <div class="guide-content-container">
            <div class="content-container" v-if="index == 0">
                <lazy-img src="../assets/web-2-1.jpg" class="img-main"/>
                <div class="content-btn-container">
                    <img src="../assets/web-2-1-btn-1.png" class="img-btn" @click="pickChicken"/>
                    <img src="../assets/web-2-1-btn-2.png" class="img-btn" @click="next"/>
                </div>
            </div>
            <div class="content-container" v-if="index == 1">
                <lazy-img src="../assets/web-2-2.png" class="img-main" v-if="chicken"/>
                <lazy-img src="../assets/web-2-2-1.png" class="img-main" v-if="!chicken"/>
                <div class="content-btn-container">
                    <img src="../assets/web-2-2-btn.png" class="img-btn" @click="next"/>
                </div>
            </div>
            <div class="content-container" v-if="index == 2">
                <lazy-img src="../assets/web-2-3.png" class="img-main"/>
                <div class="content-btn-container">
                    <img src="../assets/web-2-3-btn.png" class="img-btn" @click="next"/>
                </div>
            </div>
            <div class="content-container" v-if="index == 3">
                <lazy-img src="../assets/web-2-4.png" class="img-main"/>
                <div class="content-btn-container">
                    <img src="../assets/web-2-4-btn.png" class="img-btn" @click="next"/>
                </div>
            </div>
            <div class="content-container" v-if="index == 4">
                <lazy-img src="../assets/web-2-6.png" class="img-main"/>
                <div class="content-btn-container">
                    <img src="../assets/web-2-6-btn-1.png" class="img-btn" @click="next"/>
                    <img src="../assets/web-2-6-btn-2.png" class="img-btn" @click="iKnow"/>
                </div>
            </div>
            <div class="content-container" v-if="index == 5">
                <lazy-img src="../assets/web-2-7.png" class="img-main"/>
                <div class="content-btn-container">
                    <img src="../assets/web-2-7-btn.png" class="img-btn" @click="next"/>
                </div>
            </div>
            <div class="content-container" v-if="index == 6">
                <lazy-img src="../assets/web-2-5.png" class="img-main"/>
                <div class="content-btn-container">
                    <img src="../assets/web-2-5-btn.png" class="img-btn" @click="next"/>
                </div>
            </div>
            <div class="content-container" v-if="index == 7">
                <lazy-img src="../assets/web-2-8.png" class="img-main"/>
                <div class="content-btn-container">
                    <img src="../assets/web-2-8-btn.png" class="img-btn" @click="next"/>
                </div>
            </div>
        </div>
        <div class="modal-overlay" v-if="modal" @click="closeModal()">
            <div class="modal-container">
                <div class="modal-content">
                    <img src="../assets/web-2-modal.png" class="img-modal"/>
                    <div class="modal-close" @click="closeModal()"></div>
                    <div class="modal-cancel" @click="closeModal()"></div>
                    <div class="modal-confirm" @click="$emit('home')"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            index: 0,
            chicken: false,
            modal: false
        };
    },
    methods: {
        openModal() {
            this.modal = true
        },
        closeModal() {
            this.modal = false
        },
        pickChicken() {
            this.index++
            this.chicken = true
        },
        iKnow() {
            this.index = 7
        },
        next() {
            this.index++
            if(this.index == 8) {
                this.$emit('click')
            }
        },
        before() {
            this.index--
        }
    },
}
</script>

<style scoped>
.guide-container {
    background: white;
    width: 100%;
    height: 100vh;
}
.guide-content-container {
    min-height: 700px;
    background: #fff;
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
.img-main {
    width: 37.06%;
}
.img-btn {
    width: 17.7%;
    cursor: pointer;
}
.modal-overlay {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0, 0.6);
}
.modal-container {
    width: 621px;
    height: 579px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.modal-content {
    position: relative;
    width: 100%;
    height: 100%;
}
.modal-close {
    width: 80px;
    height: 80px;
    position: absolute;
    top: 30px;
    right: 35px;
    cursor: pointer;
}
.modal-cancel {
    width: 300px;
    height: 120px;
    position: absolute;
    bottom: 30px;
    left: 25px;
    cursor: pointer;
}
.modal-confirm {
    width: 290px;
    height: 120px;
    position: absolute;
    bottom: 30px;
    left: 325px;
    cursor: pointer;
}
@media (max-width: 690px) {
    .modal-container {
        width: 90%;
        height: auto;
    }
    .modal-close {
        width: 15%;
        height: 15%;
        top: 10px;
        right: 10px;
    }
    .modal-cancel {
        width: 40%;
        height: 50px;
        left: 10%;
        bottom: 8%;
    }
    .modal-confirm {
        width: 40%;
        height: 50px;
        left: 55%;
        bottom: 8%;
    }
}
@media (max-width: 600px) {
    .img-icon {
        height: 60px;
    }
    .guide-content-container {
        min-height: 300px;
    }
    .img-main {
        width: 100%;
    }
    .img-btn {
        width: 45%;
    }
}
@media (min-width: 601px) and (max-width:1000px) {
    .guide-content-container {
        min-height: 500px;
    }
    .img-main {
        width: 60%;
    }
    .img-btn {
        width: 20%;
    }
}
</style>