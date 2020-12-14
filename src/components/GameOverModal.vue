<template>
    <div class="result-modal-overlay">
        <div class="over-modal-container">
            <div class="result-modal-content" v-if="loading">
                <img src="../assets/web-3-over-modal-1.png" class="img-modal" v-if="rate == 1"/>
                <img src="../assets/web-3-over-modal-2.png" class="img-modal" v-if="rate == 2"/>
                <img src="../assets/web-3-over-modal-3.png" class="img-modal" v-if="rate == 3"/>
                <img src="../assets/web-3-over-poor.png" class="img-over" v-if="myValue == 'poor'" />
                <img src="../assets/web-3-over-rich.png" class="img-over" v-if="myValue == 'rich'" />
                <img src="../assets/web-3-over-normal.png" class="img-over" v-if="myValue == 'normal'" />
                <div class="over-modal-restart" @click="$emit('restart')"></div>
                <div class="over-modal-confirm" @click="$emit('done')"></div>
                <div class="over-modal-count" >
                    <Number :num="count"/>
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
    props: ['value'],
    data() {
        return {
            list: ['poor','poor','poor','poor','normal','normal','normal','normal','normal','rich'],
            myValue: '',
            rate: 0,
            count: 0,
            loading: false
        }
    },
    mounted() {
        this.myValue = this.list[Math.floor(Math.random() * 10)]
        let sortable = []
        for (let person in this.value) {
            sortable.push([person, this.value[person]])
        }
        sortable.sort(function(a,b) {
            return a[1] - b[1]
        })
        if(sortable[0][0] == this.myValue) {
            this.rate = 3
            this.count = sortable[0][1]
        }
        else if(sortable[1][0] == this.myValue) {
            this.rate = 2
            this.count = sortable[1][1]
        }
        else {
            this.rate = 1
            this.count = sortable[2][1]
        }
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
.over-modal-container {
    position: absolute;
    width: 606px;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.img-over {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%
}
.result-modal-content {
    position: relative;
    width: 100%;
    height: 100%;
}
.over-modal-restart {
    position: absolute;
    bottom: 6%;
    left: 12%;
    width: 30%;
    height: 13%;
    cursor: pointer;
}
.over-modal-confirm {
    position: absolute;
    bottom: 7%;
    right: 10%;
    width: 45%;
    height: 13%;
    cursor: pointer;
}
.over-modal-count {
    position: absolute;
    top: 43%;
    left: 38.5%;
}
@media (max-width: 690px) {
    .over-modal-container {
        width: 90%;
        height: auto;
    }
    
}
</style>