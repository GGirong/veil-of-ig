<template>
    <div>
        <div>
            1라운드 정책
            세금 + 500
        </div>
        <div>
            <div class="circle-wrapper">
                <div class="circle deg-0 you">YOU</div>
                <div class="circle deg-36"></div>
                <div class="circle deg-72"></div>
                <div class="circle deg-108"></div>
                <div class="circle deg-144"></div>
                <div class="circle deg-180"></div>
                <div class="circle deg-216"></div>
                <div class="circle deg-252"></div>
                <div class="circle deg-288"></div>
                <div class="circle deg-324"></div>
            </div>
        </div>
        <div>
            <button>찬성</button>
            <button>반대</button>
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
.circle-wrapper {
    width : 500px;
    height : 500px;
    border-radius: 50%;
    background-color: #eee;
    position: relative;
    margin: 100px;
}

.circle {
    display: block;
    position: absolute;
    top:50%;left: 50%;
    width:100px;height:100px;margin: -50px;
    background-color: #ddd;
    border-radius: 50%;
    text-align: center;
    line-height: 100px;
}
.you {
    background-color: #000;
    color: #fff;
}
.deg-0 { transform: translate(250px) }
.deg-36 { transform: rotate(36deg) translate(250px) rotate(-45deg); }
.deg-72 { transform: rotate(72deg) translate(250px) rotate(-90deg); }
.deg-108 { transform: rotate(108deg) translate(250px) rotate(-135deg); }
.deg-144 { transform: rotate(144deg) translate(250px) rotate(-180deg); }
.deg-180 { transform: rotate(180deg) translate(250px) rotate(-225deg); }
.deg-216 { transform: rotate(216deg) translate(250px) rotate(-270deg); }
.deg-252 { transform: rotate(252deg) translate(250px) rotate(-315deg); }
.deg-288 { transform: rotate(288deg) translate(250px) rotate(-315deg); }
.deg-324 { transform: rotate(324deg) translate(250px) rotate(-315deg); }
</style>