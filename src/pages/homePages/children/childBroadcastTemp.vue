<template>
    <div class="broadcast">
        <div class="text">凌晨二时 蔡甸服务区因为XXX 已临时关闭 预计XXX开放</div>
    </div>
</template>

<script>
    export default {
        name: "childBroadcastTemp"
    }
</script>

<style scoped lang="less">
    .broadcast {
        width: 90%;
        height: 35px;
        margin: 0 5%;
        background-image: url("../../../assets/nh_img/Broadcast.png");
        background-size: 100% 30px;
        background-repeat: no-repeat;

        .text {
            line-height: 30px;
            padding-left: 60px;
            color: red;
        }
    }
</style>