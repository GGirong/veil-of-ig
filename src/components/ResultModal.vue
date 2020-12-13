<template>
    <div class="result-modal-overlay">
        <div class="result-modal-container">
            <div class="result-modal-content" v-if="loading">
                <lazy-img src="../assets/web-compo-modal.png" />
                <div class="result-modal-close" @click="$emit('confirm')"></div>
                <div class="result-modal-confirm" @click="$emit('confirm')"></div>
                <div class="result-modal-confirm-vote" >
                    <Number :num="agree"/>
                </div>
                <div class="result-modal-cancel-vote">
                    <Number :num="disagree"/>
                </div>
                <div class="reulst-modal-poor">
                    <Number :num="value.poor"/>
                </div>
                <div class="result-modal-normal">
                    <Number :num="value.normal"/>
                </div>
                <div class="result-modal-rich">
                    <Number :num="value.rich"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Number from './Number'

export default {
    components: {
        Number
    },
    props: ['vote', 'value'],
    data() {
        return {
            agree: 0,
            disagree: 0,
            loading: false
        }
    },
    mounted() {
        this.agree = this.vote / 10
        this.disagree = 10 - this.agree
        this.loading = true
    }
}
</script>

<style scoped>
.result-modal-overlay {
    position: absolute;
    z-index: 101;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0, 0.6);
}
.result-modal-container {
    width: 606px;
    height: 613px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 200;
}
.result-modal-content {
    position: relative;
    width: 100%;
    height: 100%;
}
.result-modal-close {
    width: 80px;
    height: 80px;
    position: absolute;
    top: 10px;
    right: 35px;
    cursor: pointer;
}
.result-modal-confirm {
    width: 290px;
    height: 105px;
    position: absolute;
    bottom: 25px;
    left: 160px;
    cursor: pointer;
}
.result-modal-confirm-vote {
    position: absolute;
    top: 123px;
    left: 165px;
}
.result-modal-cancel-vote {
    position: absolute;
    top: 126px;
    left: 420px;
}
.reulst-modal-poor {
    position: absolute;
    bottom: 145px;
    left: 95px
}
.result-modal-normal {
    position: absolute;
    bottom: 145px;
    left: 265px
}
.result-modal-rich {
    position: absolute;
    bottom: 145px;
    left: 428px
}
@media (max-width: 690px) {
    .result-modal-container {
        width: 90%;
        height: auto;
    }
    .result-modal-close {
        width: 15%;
        height: 15%;
        top: 2%;
        right: 5%;
    }
    .result-modal-confirm {
        width: 45%;
        height: 17%;
        left: 29%;
        bottom: 4%;
    }
    .result-modal-confirm-vote {
        position: absolute;
        top: 20%;
        left: 26%;
    }
    .result-modal-cancel-vote {
        position: absolute;
        top: 21%;
        left: 66%;
    }
    .reulst-modal-poor {
        position: absolute;
        bottom: 23%;
        left: 15%;
    }
    .result-modal-normal {
        position: absolute;
        bottom: 23%;
        left: 42%
    }
    .result-modal-rich {
        position: absolute;
        bottom: 24%;
        left: 70%
    }
}
</style>