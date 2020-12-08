<template>
    <div>
        <div class="margin-right" v-if="ten">
            <img src="../assets/web-compo-1.png" v-if="tenNum == 1" class="img-num"/>
            <img src="../assets/web-compo-2.png" v-if="tenNum == 2" class="img-num"/>
            <img src="../assets/web-compo-0.png" v-if="oneNum == 0" class="img-num"/>
            <img src="../assets/web-compo-1.png" v-if="oneNum == 1" class="img-num"/>
            <img src="../assets/web-compo-2.png" v-if="oneNum == 2" class="img-num"/>
            <img src="../assets/web-compo-3.png" v-if="oneNum == 3" class="img-num"/>
            <img src="../assets/web-compo-4.png" v-if="oneNum == 4" class="img-num"/>
            <img src="../assets/web-compo-5.png" v-if="oneNum == 5" class="img-num"/>
            <img src="../assets/web-compo-6.png" v-if="oneNum == 6" class="img-num"/>
            <img src="../assets/web-compo-7.png" v-if="oneNum == 7" class="img-num"/>
            <img src="../assets/web-compo-8.png" v-if="oneNum == 8" class="img-num"/>
            <img src="../assets/web-compo-9.png" v-if="oneNum == 9" class="img-num"/>
        </div>
        <div v-if="!ten">
            <img src="../assets/web-compo-0.png" v-if="num == 0" class="img-num"/>
            <img src="../assets/web-compo-1.png" v-if="num == 1" class="img-num"/>
            <img src="../assets/web-compo-2.png" v-if="num == 2" class="img-num"/>
            <img src="../assets/web-compo-3.png" v-if="num == 3" class="img-num"/>
            <img src="../assets/web-compo-4.png" v-if="num == 4" class="img-num"/>
            <img src="../assets/web-compo-5.png" v-if="num == 5" class="img-num"/>
            <img src="../assets/web-compo-6.png" v-if="num == 6" class="img-num"/>
            <img src="../assets/web-compo-7.png" v-if="num == 7" class="img-num"/>
            <img src="../assets/web-compo-8.png" v-if="num == 8" class="img-num"/>
            <img src="../assets/web-compo-9.png" v-if="num == 9" class="img-num"/>
        </div>
        
    </div>
</template>

<script>
export default {
    props: ['num'],
    data() {
        return {
            ten: false,
            tenNum: 0,
            oneNum: 0,
        }
    },
    mounted() {
        if(this.num > 9) {
            this.ten = true
            this.tenNum = Math.floor(this.num / 10)
            this.oneNum = this.num % 10
        }
    }
}
</script>

<style scoped>
.margin-right {
    text-align: left;
}

@media (max-width: 690px) {
    .img-num {
        width: 3vw;
    }
}
</style>