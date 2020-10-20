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
      value_list: [],
      round: {
        principles: [],
        vote_result: [],
        round_result: 0
      },
      principles: [1000, 500, 300, 200, 100, -100, -300, -500, -700, -1000],
      result_data: {
        round_results: 0,
        all_result: 0,
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
      var i
      this.value_list=["rich","normal","poor","rich","normal","poor","rich","normal","normal","rich"]
      for(i = 0; i < 10; i++) {
        this.veil.value = this.value_list.splice(this.randomNum(0, 9 - i), 1).toString()
        this.people_veil[i] = this.veil
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
    runSimulate() {
      var i, l
      let principles = this.copyString(this.principles)
      for(i = 0; i < 5; i++) {
        this.round.principles[i] = principles.splice(this.randomNum(0, 9 -1), 1)
        console.log(this.round.principles[i])
        for(var j in this.people_veil) {
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
        var agree = 0
        var disagree = 0
        for(l = 0; l < 5; l++) {
          console.log(l + "번째 정책은 " + this.round.principles[l] + "입니다.")
          for(var k in this.people_veil) {
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
      claculateResult() {
        var a
        for(a=0; a<5; a++) {
          if(this.round.vote_result[a]) {
            this.result_data.round_results += this.round.principles[a]
          }
        }
        if(this.result_data.round_results > 0) {
          for(let i in this.people_veil) {
            if(this.people_veil[i].value == "normal") {
              this.people_veil[i].result_point += (this.result_data.round_results * 0.15).toFixed(0)
              this.result_data.value_results.normal += (this.result_data.round_results * 0.15).toFixed(0)
            }
            else if(this.people_veil[i].value == "rich") {
              var votingPeople = []
              for(let j in this.people_veil) {
                if(this.people_veil[j].value != "normal") {
                  if(i != j) {
                    votingPeople[j] = this.people_veil[j]
                  }
                }
              }
              var voted_veil = votingPeople[0]
              for(let j in votingPeople) {
                if(voted_veil.voting < votingPeople[j].voting) {
                  voted_veil = votingPeople[j]
                }
              }
              console.log(voted_veil)
              if(voted_veil.value != "poor") {
                this.people_veil[i].result_point -= (this.result_data.round_results * 0.4).toFixed(0)
                this.result_data.value_results.normal -= (this.result_data.round_results * 0.4).toFixed(0)
              }
              else {
                voted_veil.voted++
                this.people_veil[i].result_point -= (this.result_data.round_results * 0.2).toFixed(0)
                this.result_data.value_results.normal -= (this.result_data.round_results * 0.2).toFixed(0)
              }
            }
            else {
              if(this.people_veil[i].voted == 0) {
                this.people_veil[i].result_point += this.people_veil[i].voted * (this.result_data.round_results * 0.5).toFixed(0)
                this.result_data.value_results.poor += this.people_veil[i].voted * (this.result_data.round_results * 0.5).toFixed(0)
              } 
              else {
                this.people_veil[i].result_point += this.people_veil[i].voted * (this.result_data.round_results * 0.25).toFixed(0)
                this.result_data.value_results.poor += this.people_veil[i].voted * (this.result_data.round_results * 0.25).toFixed(0)
              }
            }
          }
        }
        else {
          for(let i in this.people_veil) {
            if(this.people_veil[i].value == "rich") {
              this.people_veil[i].result_point += (this.result_data.round_results * 0.25).toFixed(0)
              this.result_data.value_results.rich += (this.result_data.round_results * 0.25).toFixed(0)
            }
            else if(this.people_veil[i].value == "normal") {
              let votingPeople = []
              for(let j in this.people_veil) {
                if(this.people_veil[j].value != "rich") {
                  if(i != j) {
                    votingPeople[j] = this.people_veil[j]
                  }
                }
              }
              console.log(votingPeople)
              let voted_veil = votingPeople[0]
              for(var j in votingPeople) {
                if(voted_veil.voting < votingPeople[j].voting) {
                  voted_veil = votingPeople[j]
                }
              }
              
              if(voted_veil.value != "poor") {
                this.people_veil[i].result_point -= (this.result_data.round_results * 0.25).toFixed(0)
                this.result_data.value_results.normal -= (this.result_data.round_results * 0.25).toFixed(0)
              }
              else {
                voted_veil.voted++
              }
            }
            else {
              this.people_veil[i].result_point -= this.people_veil[i].voted * (this.result_data.round_results * 0.2).toFixed(0)
              this.result_data.value_results.poor -= this.people_veil[i].voted * (this.result_data.round_results * 0.2).toFixed(0)
            }
          }
        }
      },
      setPeople() {
        var i
        this.value_list=["rich","normal","poor","rich","normal","poor","rich","normal","normal","rich"]
        for(i = 0; i < 10; i++) {
          this.people_veil[i].value = this.value_list.splice(this.randomNum(0, 9 - i), 1).toString()
          this.people_veil[i].vote = []
          this.people_veil[i].voting = 0
          this.people_veil[i].voted = 0
        }
      },
      doSimulate(num) {
        var i
        for(i = 0; i < num; i++) {
          this.runSimulate()
          this.claculateResult()
          this.setPeople()
        }
      }
  },
  mounted() {
    this.makePeople()
    this.doSimulate(10)
    console.log(this.people_veil)
    console.log(this.result_data)
  }
};
</script>
