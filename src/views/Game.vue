<template>
    <div class="game-container">
        <section class="top-section">
            <div class="game-board">
                <div class="board-title">{{index + 1}}라운드 정책</div>
                <div class="board-policy" v-if="loading" @click="openPolicyModal()">세금 <span v-if="round.principles[index] > 0">+</span>{{round.principles[index]}}</div>
                    <table class="game-score-container">
                        <th></th>
                        <th class="score-th-1">정책</th>
                        <th class="score-th-2">통과</th>
                        <tr>
                            <td>1 라운드</td>
                            <td>{{round.principles[0]}}</td>
                            <td v-if="round.round_end[0]"><span v-if="round.vote_result[0]">O</span><span v-if="!round.vote_result[0]">X</span></td>
                        </tr>
                        <tr>
                            <td>2 라운드</td>
                            <td>{{round.principles[1]}}</td>
                            <td v-if="round.round_end[1]"><span v-if="round.vote_result[1]">O</span><span v-if="!round.vote_result[1]">X</span></td>
                        </tr>
                        <tr>
                            <td>3 라운드</td>
                            <td>{{round.principles[2]}}</td>
                            <td v-if="round.round_end[2]"><span v-if="round.vote_result[2]">O</span><span v-if="!round.vote_result[2]">X</span></td>
                        </tr>
                        <tr>
                            <td>4 라운드</td>
                            <td>{{round.principles[3]}}</td>
                            <td v-if="round.round_end[3]"><span v-if="round.vote_result[3]">O</span><span v-if="!round.vote_result[3]">X</span></td>
                        </tr>
                        <tr>
                            <td>5 라운드</td>
                            <td>{{round.principles[4]}}</td>
                            <td v-if="round.round_end[4]"><span v-if="round.vote_result[4]">O</span><span v-if="!round.vote_result[4]">X</span></td>
                        </tr>
                    </table>
                    <table class="game-total-container">
                        <th></th>
                        <th class="score-th-1"></th>
                        <th class="score-th-2"></th>
                        <tr>
                            <td style="font-weight: 700">현재 세금</td>
                            <td style="font-weight: 700">{{round.round_result}}</td>
                        </tr>
                    </table>
            </div>
            <div class="game-players" v-if="loading">
                <div class="game-players-section">
                    <Character :vote="people_veil[0].vote[index]" :value="people_veil[0].value" :round="round_end" :poorvote="poor_vote" :result="result_timeout" />
                    <Character :vote="people_veil[1].vote[index]" :value="people_veil[1].value" :round="round_end" :poorvote="poor_vote" :result="result_timeout"/>
                    <Character :vote="people_veil[2].vote[index]" :value="people_veil[2].value" :round="round_end" :poorvote="poor_vote" :result="result_timeout"/>
                    <Character :vote="people_veil[3].vote[index]" :value="people_veil[3].value" :round="round_end" :poorvote="poor_vote" :result="result_timeout"/>
                    <Character :vote="people_veil[4].vote[index]" :value="people_veil[4].value" :round="round_end" :poorvote="poor_vote" :result="result_timeout"/>
                </div>
                <div class="game-players-section">
                    <Character :vote="people_veil[5].vote[index]" :value="people_veil[5].value" :round="round_end" :poorvote="poor_vote" :result="result_timeout"/>
                    <Character :vote="people_veil[6].vote[index]" :value="people_veil[6].value" :round="round_end" :poorvote="poor_vote" :result="result_timeout"/>
                    <Character :vote="people_veil[7].vote[index]" :value="people_veil[7].value" :round="round_end" :poorvote="poor_vote" :result="result_timeout"/>
                    <Character :vote="people_veil[8].vote[index]" :value="people_veil[8].value" :round="round_end" :poorvote="poor_vote" :result="result_timeout"/>
                    <Character :vote="people_veil[9].vote[index]" :value="people_veil[9].value" :round="round_end" :poorvote="poor_vote" :result="result_timeout"/>
                </div>
            </div>
        </section>
        <section class="bottom-section">
            <div class="game-button-container">
                <button class="game-confirm-button" v-if="!cal_end" @click="confirmP()">찬성</button>
                <button class="game-cancel-button" v-if="!cal_end" @click="cancelP()">반대</button>
            </div>
        </section>
        <ValueModal 
        v-if="valueModal"
        :poor="poor"
        @close="closeModal()"
        />
        <PolicyModal 
        v-if="policyModal"
        :policy="round.principles[index]"
        @close="closePModal()"
        />
        <ResultModal
        v-if="resultModal"
        :policy="policy"
        @close="closePModal()"
        />
    </div>
</template>

<script>
import ValueModal from '../components/ValueModal'
import PolicyModal from '../components/PolicyModal'
import ResultModal from '../components/ResultModal'
import Character from '../components/Character.vue'

export default {
    components: {
        ValueModal,
        PolicyModal,
        ResultModal,
        Character
    },
    data() {
    return {
        index: 0,
        loading: false,
        result_timeout: false,
        round_end: false,
        cal_end: false,
        poor_vote: false,
        lose_vote: false,
        user_case: '',
      people_veil: [],
      veil: {
        value: "",
        vote: [],
        voting: 0,
        voted: 0,
        result_point: 0,
      },
      value_list: ["rich","normal","poor","rich","normal","poor","rich","normal","normal","rich"],
      round: {
        principles: [],
        vote_result: [],
        round_end: [false, false, false, false, false],
        round_result: 0
      },
      principles: [1000, 600, 500, 300, 100, -200, -300, -500, -700, -1000],
      result_data: {
        round_results: 0,
        value_results: {
          rich: 0,
          normal: 0,
          poor: 0,
        }
      },
      valueModal: false,
      policyModal: false,
      resultModal: false,
      poor: false,
      policy: false
    }

  },
  methods: {
      openValue() {
          this.valueModal = true
      },
      openPolicyModal() {
          this.policyModal = true
      },
      closeModal() {
          this.valueModal = false
          this.makePolicy()
      },
      closePModal() {
          this.policyModal = false
          this.resultModal = false
      },
      openRModal(policy) {
          this.policy = policy
          this.resultModal = true
      },   
    makePeople() {
      let valueCopy = this.copyString(this.value_list)
      for(let i = 0; i < 10; i++) {
        let veil = {
          value: "",
          vote: [],
          voting: 0,
          voted: 0,
          result_point: 0,
        }
        veil.value = valueCopy.splice(this.randomNum(0, 9 - i), 1).toString()
        this.people_veil[i] = veil
      }
      if(this.people_veil[0].value == 'poor') {
            this.poor = true
            this.valueModal = true
        }
        else {
            this.valueModal = true
        }
    },
    randomNum(lower, upper) {
      return Math.floor(Math.random() * (upper - lower + 1)) + lower;
    },
    halfChance() {
      return Math.random() < 0.5;
    },
    copyString(x) {
      var output = []
      for(var i in x){
        output[i] = x[i]
      }
      return output
    },
    makePolicy() {
        this.round.principles[this.index] = Number(this.principles.splice(this.randomNum(0, 9 - this.index), 1))
        for(let j in this.people_veil) {
            if(j != 0) {
                if(this.people_veil[j].value == "poor") {
                    if(this.round.principles[this.index] > 0) {
                    this.people_veil[j].vote[this.index] = true
                    this.people_veil[j].voting++
                    }
                    else {
                    this.people_veil[j].vote[this.index] = false
                    }
                }
                else {
                    this.people_veil[j].vote[this.index] = this.halfChance()
                    if(this.round.principles[this.index] > 0) {
                        if(this.people_veil[j].vote[this.index]) {
                            this.people_veil[j].voting++
                        }
                    }
                }
            }
        }
        this.loading = true
        this.policyModal = true
    },
    confirmP() {
        this.people_veil[0].vote[this.index] = true
        if(this.round.principles[this.index] > 0) {
            this.people_veil[0].voting++
        }
        this.runRound()
    },
    cancelP() {
        this.people_veil[0].vote[this.index] = false
        this.runRound()
    },
    runRound() {
        let agree = 0
        let disagree = 0
        this.result_timeout = true
          for(let k in this.people_veil) {
            if(this.people_veil[k].vote[this.index]) {
              agree++
            }
            else {
              disagree++
            }
          }
          if(agree > disagree) {
            this.round.vote_result[this.index] = true
            this.round.round_result += this.round.principles[this.index]
            this.openRModal(true)
          }
          else {
            this.round.vote_result[this.index] = false
            this.openRModal(false)
          }
          this.round.round_end[this.index] = true
          setTimeout(()=> {
              this.closePModal()
          }, 2000)
          setTimeout(()=> {
              this.result_timeout = false
              this.index++
              if(this.index == 5) {
                  this.round_end = true
                  this.calculateResult()
              }
              else {
                this.makePolicy()
              }
          }, 5000)
      },
      calculateResult() {
        this.result_data.round_results += this.round.round_result
        if(this.round.round_result > 0) {
          for(let i in this.people_veil) {
            if(this.people_veil[i].value == "normal") {
                if(i == 0 ) {
                    this.user_case = 'NORMAL_WIN'
                }
              console.log("normal victory point")
              console.log(Number((this.round.round_result * 0.15).toFixed(0)))
              this.people_veil[i].result_point += Number((this.round.round_result * 0.15).toFixed(0))
              this.result_data.value_results.normal += Number((this.round.round_result * 0.15).toFixed(0))
            }
            else if(this.people_veil[i].value == "rich") {
                if(i == 0) {
                    this.user_case = 'RICH_LOSE'
                }
                else {
                    let votingPeopleRich = []
                    for(let j in this.people_veil) {
                        if(this.people_veil[j].value != "normal") {
                            if(i != j) {
                                votingPeopleRich[j] = this.people_veil[j]
                            }
                        }
                    }

                    let voted_veil

                    for(let j in votingPeopleRich) {
                        if(votingPeopleRich[j] != undefined) {
                            voted_veil = votingPeopleRich[j]
                            break
                        }
                    }

                    for(let j in votingPeopleRich) {
                        if(votingPeopleRich[j] != undefined) {
                            if(voted_veil.voting < votingPeopleRich[j].voting) {
                                voted_veil = votingPeopleRich[j]
                            }
                        }
                    }
                    if(voted_veil.value != "poor") {
                        console.log("rich miss point")
                        console.log(-Number((this.round.round_result * 0.4).toFixed(0)))
                        this.people_veil[i].result_point -= Number((this.round.round_result * 0.4).toFixed(0))
                        this.result_data.value_results.normal -= Number((this.round.round_result * 0.4).toFixed(0))
                    }
                    else {
                        console.log("rich correct point")
                        console.log(-Number((this.round.round_result * 0.2).toFixed(0)))
                        voted_veil.voted++
                        this.people_veil[i].result_point -= Number((this.round.round_result * 0.2).toFixed(0))
                        this.result_data.value_results.normal -= Number((this.round.round_result * 0.2).toFixed(0))
                    }
                }
            }
          }
        }
        else if(this.round.round_result == 0) {
          for(let i in this.people_veil) {
              if(i == 0) {
                if(this.people_veil[i].value == "rich") {
                    this.user_case = 'RICH_0_WIN'
                }
                else {
                    this.user_case = 'NORMAL_0_LOSE'
                }
              }
            if(this.people_veil[i].value == "rich") {
              this.people_veil[i].result_point += 50
              this.result_data.value_results.rich += 50
            }
          }
        }
        else {
          for(let i in this.people_veil) {
            if(this.people_veil[i].value == "rich") {
                if(i == 0) {
                    this.user_case = 'RICH_WIN'
                }
              console.log("rich victoty point")
              console.log(Number((this.round.round_result * 0.25).toFixed(0)))
              this.people_veil[i].result_point -= Number((this.round.round_result * 0.25).toFixed(0))
              this.result_data.value_results.rich -= Number((this.round.round_result * 0.25).toFixed(0))
            }
            else if(this.people_veil[i].value == "normal") {
                if( i == 0 ) {
                    this.user_case = 'NORMAL_LOSE'
                }
                else {
                    let votingPeopleNormal = []
                    for(let j in this.people_veil) {
                        if(this.people_veil[j].value != "rich") {
                        if(i != j) {
                            votingPeopleNormal[j] = this.people_veil[j]
                        }
                        }
                    }
                    let voted_veil

                    for(let j in votingPeopleNormal) {
                        if(votingPeopleNormal[j] != undefined) {
                        voted_veil = votingPeopleNormal[j]
                        break
                        }
                    }

                    for(let j in votingPeopleNormal) {
                        if(votingPeopleNormal[j] != undefined) {
                        if(voted_veil.voting < votingPeopleNormal[j].voting) {
                            voted_veil = votingPeopleNormal[j]
                        }
                        }
                    }
                    if(voted_veil.value != "poor") {
                        console.log("normal miss point")
                        console.log(Number((this.round.round_result * 0.25).toFixed(0)))
                        this.people_veil[i].result_point += Number((this.round.round_result * 0.25).toFixed(0))
                        this.result_data.value_results.normal += Number((this.round.round_result * 0.25).toFixed(0))
                    }
                    else {
                        console.log("normal correct!")
                        voted_veil.voted++
                    }
                }
            }
          }
        }
        this.cal_end = true
        if(this.people_veil[0].value == 'poor') {
            if(this.round.round_result > 0 ) {
                for(let i in this.people_veil) {
                    if(this.people_veil[i].value == "poor") {
                    if(this.people_veil[i].voted == 0) {
                        if( i == 0 ) {
                            alert("한 표도 받지 않고 승리하셨습니다!")
                        }
                        console.log("poor victory point")
                        console.log(Number((this.round.round_result * 0.5).toFixed(0)))
                        this.people_veil[i].result_point += Number((this.round.round_result * 0.5).toFixed(0))
                        this.result_data.value_results.poor += Number((this.round.round_result * 0.5).toFixed(0))
                    } 
                    else {
                        if( i == 0 ) {
                            alert("한 표 이상 받아 점수가 감소하였습니다.")
                        }
                        console.log("poor miss point")
                        console.log(Number((this.round.round_result * 0.25).toFixed(0)))
                        this.people_veil[i].result_point += Number((this.round.round_result * 0.25).toFixed(0))
                        this.result_data.value_results.poor += Number((this.round.round_result * 0.25).toFixed(0))
                    }
                    }
                }
            }
            else {
                for(let i in this.people_veil) {
                    if(this.people_veil[i] == "poor") {
                        if( i == 0) {
                            alert("총 " + this.people_veil[i].voted + "표를 받았습니다.")
                        }
                        console.log("poor lose point")
                        console.log(this.people_veil[i].voted * Number((this.round.round_result * 0.2).toFixed(0)))
                        this.people_veil[i].result_point += this.people_veil[i].voted * Number((this.round.round_result * 0.2).toFixed(0))
                        this.result_data.value_results.poor += this.people_veil[i].voted * Number((this.round.round_result * 0.2).toFixed(0))
                    }
                }
            }
            this.poor_vote = true
        }
        else if(this.user_case == 'RICH_WIN' || this.user_case == 'NORMAL_WIN' || this.user_case == 'RICH_0_WIN') {
            alert("승리하셨습니다! 점수를 확인해보세요.")
            if(this.round.round_result > 0 ) {
                for(let i in this.people_veil) {
                    if(this.people_veil[i].value == "poor") {
                    if(this.people_veil[i].voted == 0) {
                        console.log("poor victory point")
                        console.log(Number((this.round.round_result * 0.5).toFixed(0)))
                        this.people_veil[i].result_point += Number((this.round.round_result * 0.5).toFixed(0))
                        this.result_data.value_results.poor += Number((this.round.round_result * 0.5).toFixed(0))
                    } 
                    else {
                        console.log("poor miss point")
                        console.log(Number((this.round.round_result * 0.25).toFixed(0)))
                        this.people_veil[i].result_point += Number((this.round.round_result * 0.25).toFixed(0))
                        this.result_data.value_results.poor += Number((this.round.round_result * 0.25).toFixed(0))
                    }
                    }
                }
            }
            else {
                for(let i in this.people_veil) {
                    if(this.people_veil[i] == "poor") {
                        console.log("poor lose point")
                        console.log(this.people_veil[i].voted * Number((this.round.round_result * 0.2).toFixed(0)))
                        this.people_veil[i].result_point += this.people_veil[i].voted * Number((this.round.round_result * 0.2).toFixed(0))
                        this.result_data.value_results.poor += this.people_veil[i].voted * Number((this.round.round_result * 0.2).toFixed(0))
                    }
                }
            }
            this.poor_vote = true
        }
        else if(this.user_case == 'NORMAL_0_LOSE') {
            alert("패배하셨습니다. 점수를 확인해보세요.")
            this.poor_vote = true
        }
        else {
            alert("패배하셨습니다. 거지로 의심되는 플레이어를 지목해주세요.")
        }
      },
      poorVote(i) {
          if(this.cal_end) {
              if(!this.poor_vote) {
                  if(this.round.round_result > 0) {
                      if(this.people_veil[i].value == 'normal') {
                          alert("서민 플레이어를 제외한 나머지 플레이어 중 선택해주세요")
                      }
                      else if(this.people_veil[i].value == 'rich') {
                          alert("해당 플레이어는 거지가 아니었습니다. 점수를 확인해보세요.")
                          this.people_veil[0].result_point -= Number((this.round.round_result * 0.4).toFixed(0))
                          this.result_data.value_results.normal -= Number((this.round.round_result * 0.4).toFixed(0))
                          this.lose_vote = true
                      }
                      else {
                          alert("해당 플레이어는 거지가 맞았습니다. 점수를 확인해보세요.")
                          this.people_veil[i].voted++
                          this.people_veil[0].result_point -= Number((this.round.round_result * 0.2).toFixed(0))
                          this.result_data.value_results.normal -= Number((this.round.round_result * 0.2).toFixed(0))
                          this.lose_vote = true
                      }
                  }
                  else {
                      if(this.people_veil[i].value == 'rich') {
                          alert("부자 플레이어를 제외한 나머지 플레이어 중 선택해주세요")
                      }
                      else if(this.people_veil[i].value == 'normal') {
                          alert("해당 플레이어는 거지가 아니었습니다. 점수를 확인해보세요.")
                          this.people_veil[0].result_point += Number((this.round.round_result * 0.25).toFixed(0))
                          this.result_data.value_results.normal += Number((this.round.round_result * 0.25).toFixed(0))
                          this.lose_vote = true
                      }
                      else {
                          alert("해당 플레이어는 거지가 맞았습니다. 점수를 확인해보세요.")
                          this.people_veil[i].voted++
                          this.lose_vote = true
                      }
                  }
              }
              if(this.lose_vote) {
                  if(this.round.round_result > 0 ) {
                    for(let i in this.people_veil) {
                        if(this.people_veil[i].value == "poor") {
                            if(this.people_veil[i].voted == 0) {
                                console.log("poor victory point")
                                console.log(Number((this.round.round_result * 0.5).toFixed(0)))
                                this.people_veil[i].result_point += Number((this.round.round_result * 0.5).toFixed(0))
                                this.result_data.value_results.poor += Number((this.round.round_result * 0.5).toFixed(0))
                            } 
                            else {
                                console.log("poor miss point")
                                console.log(Number((this.round.round_result * 0.25).toFixed(0)))
                                this.people_veil[i].result_point += Number((this.round.round_result * 0.25).toFixed(0))
                                this.result_data.value_results.poor += Number((this.round.round_result * 0.25).toFixed(0))
                            }
                        }
                    }
                }
                else {
                    for(let i in this.people_veil) {
                        if(this.people_veil[i].value == "poor") {
                            console.log("poor lose point")
                            console.log(this.people_veil[i].voted * Number((this.round.round_result * 0.2).toFixed(0)))
                            this.people_veil[i].result_point += this.people_veil[i].voted * Number((this.round.round_result * 0.2).toFixed(0))
                            this.result_data.value_results.poor += this.people_veil[i].voted * Number((this.round.round_result * 0.2).toFixed(0))
                        }
                    }
                }
                this.poor_vote = true
              }
          }
      },
      setPeople() {
        let valueCopy = this.copyString(this.value_list)
        for(let i = 0; i < 10; i++) {
          this.people_veil[i].value = valueCopy.splice(this.randomNum(0, 9 - i), 1).toString()
          this.people_veil[i].vote = []
          this.people_veil[i].voting = 0
          this.people_veil[i].voted = 0
        }
        this.round.round_result = 0
      },
      doSimulate(num) {
        for(let i = 0; i < num; i++) {
          console.log(i + "번째 시뮬레이션")
          this.runSimulate()
          this.calculateResult()
          this.setPeople()
        }
      }
  },
  mounted() {
    this.makePeople()
  }
}
</script>

<style scoped>
.game-container {
    flex-wrap: wrap;
}
.top-section {
    display: flex;
    width: 100%;
    height: 80vh;
}
.bottom-section {
    display: flex;
    width: 100%;
    height: 20vh;
}
.game-board {
    width: 30%;
    padding-top: 5%;
}
.game-players {
    width: 70%;
    padding-top: 7%;
}
.game-players-section {
    width: 100%;
    display: flex;
    flex-direction: row;
}
.circle-wrapper {
    width: 40%;
    padding-bottom: 40%;
    border-radius: 50%;
    position: relative;
    margin: 0 auto;
}
.board-title {
    font-size: 18px;
}
.board-policy {
    font-size: 28px;
    font-weight: 600;
    margin-top: 30px;
    margin-bottom: 50px;
}
.game-score-container {
    margin-left: 100px;
    font-size: 18px;
    line-height: 40px;
}
.game-total-container {
    margin-left: 100px;
    margin-top: 30px;
    font-size: 17px;
    line-height: 28px;
}
.score-th-1 {
    width: 150px;
}
.score-th-2 {
    width: 50px;
}
.score-total {
    margin-top: 20px;
}
.circle {
    display: block;
    position: absolute;
    top:50%;
    left: 50%;
    width:20%;
    padding-bottom: 20%;
    margin: -50px;
    background-color: #ddd;
    border-radius: 50%;
    text-align: center;
    cursor: pointer;
}
.you {
    background-color: #000;
    color: #fff;
}
.circle-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.circle-status {
    font-size: 12px;
    font-weight: 700;
}
.deg-0 { transform: translate(250%) }
.deg-36 { transform: rotate(36deg) translate(250%) rotate(-36deg); }
.deg-72 { transform: rotate(72deg) translate(250%) rotate(-72deg); }
.deg-108 { transform: rotate(108deg) translate(250%) rotate(-108deg); }
.deg-144 { transform: rotate(144deg) translate(250%) rotate(-144deg); }
.deg-180 { transform: rotate(180deg) translate(250%) rotate(-180deg); }
.deg-216 { transform: rotate(216deg) translate(250%) rotate(-216deg); }
.deg-252 { transform: rotate(252deg) translate(250%) rotate(-252deg); }
.deg-288 { transform: rotate(288deg) translate(250%) rotate(-288deg); }
.deg-324 { transform: rotate(324deg) translate(250%) rotate(-324deg); }

.game-button-container {
    display: flex;
    width: 50%;
    margin: 0 auto;
    flex-direction: row;
    justify-content: space-around;
}

.game-confirm-button {
    width: 40%;
    height: 40%;
    border: 1px solid #777;
    background-color: transparent;
    border-radius: 100px;
    font-size: 21px;
    cursor: pointer;
}
.game-cancel-button {
    width: 40%;
    height: 40%;
    border: 1px solid #777;
    background-color: #777;
    color: #fff;
    border-radius: 100px;
    font-size: 21px;
    cursor: pointer;
}
</style>