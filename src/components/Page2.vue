<template>
  <div style="font-size: 32px; color:#fff">
    {{ index }}
  </div>
</template>

<script>
export default {
  props: ["index"],
  data() {
    return {
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
        round_result: 0
      },
      principles: [1000, 700, 500, 500, 300, 300, 100, 100, -300, -500],
      result_data: {
        round_results: 0,
        value_results: {
          rich: 0,
          normal: 0,
          poor: 0,
        }
      }
    }

  },
  methods: {
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
      console.log(this.people_veil)
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
    runSimulate() {
      let principlesCopy = this.copyString(this.principles)
      for(let i = 0; i < 5; i++) {
        this.round.principles[i] = Number(principlesCopy.splice(this.randomNum(0, 9 - i), 1))
        for(let j in this.people_veil) {
          if(this.people_veil[j].value == "poor") {
            if(this.round.principles > 0) {
              this.people_veil[j].vote[i] = true
              this.people_veil[j].voting++
            }
            else {
              this.people_veil[j].vote[i] = false
            }
          }
          else {
            this.people_veil[j].vote[i] = this.halfChance()
            if(this.round.principles > 0) {
              if(this.people_veil[j].vote[i]) {
                this.people_veil[j].voting++
              }
            }
          }
        }
      }
        let agree = 0
        let disagree = 0
        for(let l = 0; l < 5; l++) {
          console.log(l + "번째 정책은 " + this.round.principles[l] + "입니다.")
          for(let k in this.people_veil) {
            if(this.people_veil[k].vote[l]) {
              agree++
            }
            else {
              disagree++
            }
          }
          if(agree > disagree) {
            this.round.vote_result[l] = true
            console.log(l + "번째 투표는 찬성입니다.")
          }
          else {
            this.round.vote_result[l] = false
            console.log(l + "번째 투표는 반대입니다.")
          }
          agree = 0
          disagree = 0
        }
      },
      calculateResult() {
        for(let a=0; a<5; a++) {
          if(this.round.vote_result[a]) {
            this.round.round_result += this.round.principles[a]
          }
        }
        this.result_data.round_results += this.round.round_result
        if(this.round.round_result > 0) {
          for(let i in this.people_veil) {
            if(this.people_veil[i].value == "normal") {
              console.log("normal victory point")
              console.log(Number((this.round.round_result * 0.15).toFixed(0)))
              this.people_veil[i].result_point += Number((this.round.round_result * 0.15).toFixed(0))
              this.result_data.value_results.normal += Number((this.round.round_result * 0.15).toFixed(0))
            }
            else if(this.people_veil[i].value == "rich") {
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
        else if(this.round.round_result == 0) {
          for(let i in this.people_veil) {
            if(this.people_veil[i].value == "rich") {
              this.people_veil[i].result_point += 50
              this.result_data.value_results.rich += 50
            }
          }
        }
        else {
          for(let i in this.people_veil) {
            if(this.people_veil[i].value == "rich") {
              console.log("rich victoty point")
              console.log(Number((this.round.round_result * 0.25).toFixed(0)))
              this.people_veil[i].result_point -= Number((this.round.round_result * 0.25).toFixed(0))
              this.result_data.value_results.rich -= Number((this.round.round_result * 0.25).toFixed(0))
            }
            else if(this.people_veil[i].value == "normal") {
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
          for(let i in this.people_veil) {
            if(this.people_veil[i] == "poor") {
              console.log("poor lose point")
              console.log(this.people_veil[i].voted * Number((this.round.round_result * 0.2).toFixed(0)))
              this.people_veil[i].result_point += this.people_veil[i].voted * Number((this.round.round_result * 0.2).toFixed(0))
              this.result_data.value_results.poor += this.people_veil[i].voted * Number((this.round.round_result * 0.2).toFixed(0))
            }
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
    this.doSimulate(100)
    console.log(this.people_veil)
    console.log(this.result_data)
  }
};
</script>
