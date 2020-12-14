<template>
    <div class="intro-wrapper">
        <div class="intro-container">
            <div class="credit-header-container">
                <img src="../assets/web-2-icon-home.png" class="img-icon" @click="openModal"/>
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
        <a href="http://www.hivcdgw2020.com/themediumspace" >
            <div class="footer">
                <img src="../assets/web-footer.png"/>
            </div>
        </a>
    </div>
    
</template>

<script>

export default {
    data() {
        return {
            modal: false
        };
    },
    methods: {
        openModal() {
            this.modal = true
        },
        closeModal() {
            this.modal = false
        }
    },
}
</script>

<style scoped>
.credit-header-container {
    width: 100%;
    display: flex;
    justify-content: flex-end;
}
.img-icon {
    height: 80px;
    cursor: pointer;
}
.intro-wrapper {
    position: relative;
}
.intro-title-container {
    margin: 0 auto;
}
.img-title {
    margin-top: 3vw;
}
.intro-btn-1 {
    margin: 0 auto;
    cursor: pointer;
}
.img-btn-1 {
    margin-top: 18vw;
}
.intro-btn-2 {
    margin: 0 auto;
    cursor: pointer;
}
.intro-container {
    position: relative;
    background: url('../assets/web-5.jpg') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    width: 100%;
    height: 100vh;
    min-height: 1000px;
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
.footer {
    width: 100%;
    background: #111114;
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
@media (max-width: 1000px) {
    .intro-container {
        min-height: 300px;
    }
    .intro-title-container {
        width: 80%;
    }
    .img-title {
        margin-top: 5vw;
    }
    .intro-btn-1 {
        width: 60%;
        margin: 0 auto;
    }
    .img-btn-1 {
        margin-top: 40%;
    }
    .intro-btn-2 {
        width: 60%;
        margin: 0 auto;
    }
}
</style>>