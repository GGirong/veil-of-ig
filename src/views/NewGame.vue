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
        <div class="newgame-count-container">
            <div class="count-container">
                <img src="../assets/web-3-icon-1.png" class="img-count" />
                <div class="count-1" v-if="round[0].done" :style="{height: round[0].vote}"></div>
            </div>
            <div class="count-container">
                <img src="../assets/web-3-icon-2.png" class="img-count" />
                <div class="count-2" v-if="round[1].done" :style="{height: round[1].vote}"></div>
            </div>
            <div class="count-container">
                <img src="../assets/web-3-icon-3.png" class="img-count" />
                <div class="count-3" v-if="round[2].done" :style="{height: round[2].vote}"></div>
            </div>
            <div class="count-container">
                <img src="../assets/web-3-icon-4.png" class="img-count" />
                <div class="count-4" v-if="round[3].done" :style="{height: round[3].vote}"></div>
            </div>
            <div class="count-container">
                <img src="../assets/web-3-icon-5.png" class="img-count" />
                <div class="count-5" v-if="round[4].done" :style="{height: round[4].vote}"></div>
            </div>
        </div>
        <div class="newgame-content-container">
            <div class="newgame-img-container">
                <img src="../assets/web-3-1.png" class="img-main"/>
            </div>
            <div class="newgame-btn-container">
                <img src="../assets/web-3-1-btn.png" class="img-btn" @click="openPolicy"/>
            </div>
        </div>
        <div class="newgame-modal-container" v-if="policy">
            <div class="newgame-modal-content">
                <lazy-img src="https://i.ibb.co/Fn5CgyS/web-3-policy-1.png" class="img-policy" v-if="roundCount == 0"/>
                <lazy-img src="https://i.ibb.co/HpfZwQB/web-3-policy-2.png" class="img-policy" v-if="roundCount == 1"/>
                <lazy-img src="https://i.ibb.co/wWwXC04/web-3-policy-3.png" class="img-policy" v-if="roundCount == 2"/>
                <lazy-img src="https://i.ibb.co/gTNHT1H/web-3-policy-4.png" class="img-policy" v-if="roundCount == 3"/>
                <lazy-img src="https://i.ibb.co/DMCCKX5/web-3-policy-5.png" class="img-policy" v-if="roundCount == 4"/>
                <div class="newgame-modal-close" @click="closePmodal()"></div>
                <div class="newgame-modal-confirm" @click="vote(true)"></div>
                <div class="newgame-modal-cancel" @click="vote(false)"></div>
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
        <div class="modal-overlay" v-if="guidemodal">
            <div class="guide-modal-container">
                <div class="modal-content">
                    <img src="../assets/web-3-guide-modal.png" class="img-modal"/>
                    <img src="../assets/web-3-guide-1.png" class="guide-modal-img" v-if="guideIndex==0"/>
                    <img src="../assets/web-3-guide-2.png" class="guide-modal-img" v-if="guideIndex==1"/>
                    <img src="../assets/web-3-guide-3.png" class="guide-modal-img" v-if="guideIndex==2"/>
                    <img src="../assets/web-3-guide-4.png" class="guide-modal-img" v-if="guideIndex==3"/>
                    <img src="../assets/web-3-guide-5.png" class="guide-modal-img" v-if="guideIndex==4"/>
                    <div class="guide-modal-confirm" @click="guideNext()"></div>
                </div>
            </div>
        </div>
        <ResultModal 
        v-if="result"
        :vote="tempVote"
        :value="value"
        @confirm="confirmResult"/>
        <GameOverModal 
        v-if="over"
        :value="value"
        @restart="restart"
        @done="$emit('click')"
        />
    </div>
</template>

<script>
import ResultModal from '../components/ResultModal'
import GameOverModal from '../components/GameOverModal'

export default {
    components: {
        ResultModal,
        GameOverModal
    },
    data() {
        return {
            policy: false,
            modal: false,
            guidemodal: true,
            guideIndex: 0,
            round: [
                {
                    done: false,
                    vote: 0
                },
                {
                    done: false,
                    vote: 0
                },
                {
                    done: false,
                    vote: 0
                },
                {
                    done: false,
                    vote: 0
                },
                {
                    done: false,
                    vote: 0
                },
            ],
            roundCount: 0,
            result: false,
            value: {
                poor: 0,
                rich: 0,
                normal: 0
            },
            tempVote: 0,
            over: false
        }
    },
    methods: {
        guideNext() {
            this.guideIndex++
            if(this.guideIndex == 5) {
                this.guidemodal = false
                this.policy = true
            }
        },
        openModal() {
            this.modal = true
        },
        openPolicy() {
            this.policy = true
        },
        closeModal() {
            this.modal = false
        },
        closePmodal() {
            this.policy = false
        },
        confirmResult() {
            this.roundCount++
            if(this.roundCount == 5) {
                this.result = false
                this.over = true
            }
            else {
                this.result = false
                this.policy = true
            }
            
        },
        restart() {
            this.over = false
            this.roundCount = 0
            for(let i of this.round) {
                i.vote = 0
            }
            this.policy = true
        },
        vote(vote) {
            this.round[this.roundCount].done = true
            if(vote) {
                this.round[this.roundCount].vote = (Math.floor(Math.random() * 10) * 10) + 10
                this.tempVote = this.round[this.roundCount].vote
                this.round[this.roundCount].vote = this.round[this.roundCount].vote - 1 + '%'
            }
            else {
                this.round[this.roundCount].vote = (Math.floor(Math.random() * 10) * 10)
                this.tempVote = this.round[this.roundCount].vote
                this.round[this.roundCount].vote = this.round[this.roundCount].vote - 1 + '%'
            }
            if(this.roundCount == 0) {
                if(this.tempVote > 39) {
                    this.value.normal++
                    this.value.poor++
                }
                else if(this.tempVote > 9 && this.tempVote < 40) {
                    this.value.normal++
                }
                else {
                    this.value.rich += 5
                }
            }
            else if(this.roundCount == 1) {
                if(this.tempVote > 49) {
                    this.value.normal++
                    this.value.poor++
                }
                else if(this.tempVote > 19 && this.tempVote < 50) {
                    this.value.normal++
                }
                else {
                    this.value.rich += 5
                }

            }
            else if(this.roundCount == 2) {
                if(this.tempVote > 59) {
                    this.value.normal++
                    this.value.poor++
                }
                else if(this.tempVote > 29 && this.tempVote < 60) {
                    this.value.normal++
                }
                else {
                    this.value.rich += 5
                }

            }
            else if(this.roundCount == 3) {
                if(this.tempVote > 69) {
                    this.value.normal++
                    this.value.poor++
                }
                else if(this.tempVote > 39 && this.tempVote < 70) {
                    this.value.normal++
                }
                else {
                    this.value.rich += 5
                }

            }
            else if(this.roundCount == 4) {
                if(this.tempVote > 79) {
                    this.value.normal++
                    this.value.poor++
                }
                else if(this.tempVote > 49 && this.tempVote < 80) {
                    this.value.normal++
                }
                else {
                    this.value.rich += 5
                }
            }
            this.policy = false
            this.result = true
        },
    }
}
</script>

<style scoped>
.newgame-wrapper {
    background: #fff;
    width: 100%;
    height: 100vh;
    position: relative;
}
.guide-header-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.newgame-content-container {
    background: #fff;
}
.newgame-count-container {
    display: flex;
    justify-content: center;
}
.count-container {
    position: relative;
}
.count-1 {
    position: absolute;
    bottom: 0;
    left: 5px;
    width: 99%;
    height: 100%;
    background: #ffc700;
    z-index: 1;
}
.count-2 {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: #fde919;
    z-index: 1;
}
.count-3 {
    position: absolute;
    bottom: 1px;
    width: 100%;
    height: 98%;
    background: #e87e01;
    z-index: 1;
}
.count-4 {
    position: absolute;
    bottom: 1px;
    width: 100%;
    height: 98%;
    background: #196541;
    z-index: 1;
}
.count-5 {
    position: absolute;
    bottom: 1px;
    width: 100%;
    height: 98%;
    background: #014ae8;
    z-index: 1;
}
.img-icon {
    height: 80px;
    cursor: pointer;
}
.img-count {
    position: relative;
    height: 6.3vw;
    z-index: 100;
}
.img-main {
    width: 38.02%;
}
.img-btn {
    width: 17.7%;
    cursor: pointer;
}
.guide-modal-container {
    position: absolute;
    width: 37.81%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.guide-modal-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}
.guide-modal-close {
    position: absolute;
    top: 2%;
    right: 4%;
    width: 20%;
    height: 15%;
    cursor: pointer;
}
.guide-modal-confirm {
    position: absolute;
    bottom: 7%;
    left: 30%;
    width: 41%;
    height: 14%;
    cursor: pointer;
}
.newgame-modal-container {
    position: absolute;
    width: 30%;
    height: auto;
    top: calc(6.3vw + 100px);
    left: 50%;
    transform: translate(-50%,0);
}
.newgame-modal-content {
    position: relative;
    width: 100%;
    height: 100%;
}
.newgame-modal-close {
    position: absolute;
    right: 5%;
    top: 0;
    width: 20%;
    height: 15%;
    cursor: pointer;
    z-index: 5;
}
.newgame-modal-confirm {
    position: absolute;
    left: 8%;
    bottom: 3%;
    width: 40%;
    height: 15%;
    cursor: pointer;
    z-index: 5;
}
.newgame-modal-cancel {
    position: absolute;
    left: 53%;
    bottom: 3%;
    width: 40%;
    height: 15%;
    cursor: pointer;
    z-index: 5;
}
.modal-overlay {
    position: absolute;
    z-index: 101;
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
    .guide-modal-container {
        width: 90%;
    }
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
@media (min-width: 601px) and (max-width:1000px) {
    .guide-modal-container {
        width: 60%;
    }
    .newgame-modal-container {
        width: 40%;
    }
    .img-count {
        position: relative;
        height: 60px;
        z-index: 100;
    }
    .img-main {
        width: 60%;
    }
    .img-btn {
        width: 30%;
        cursor: pointer;
    }
}
@media (max-width: 600px) {
    .newgame-modal-container {
        width: 70%;
    }
    .img-icon {
        height: 60px;
        cursor: pointer;
    }
    .img-count {
        position: relative;
        height: 55px;
        z-index: 100;
    }
    .img-main {
        width: 80%;
    }
    .img-btn {
        width: 40%;
        cursor: pointer;
    }
}
</style>