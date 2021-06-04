<template>
    <div>
        <div class="MsIcon iconfont" @click="$emit('open',true)">&#xe601;</div>
    </div>
</template>

<script>
    export default {
        name: "HomeFirstPlugIn"
    }
</script>

<style scoped lang="less">
    .MsIcon {
        position: absolute;
        width: 22px;
        height: 22px;
        font-size: 14px;
        right: 5px;
        top: 5px;
        color: white;
        background: #73A0E4;
        border-radius: 100%;
        line-height: 22px;
        text-align: center;
        z-index: 6;
        cursor: pointer;
        font-weight: 500;
        transition: linear .4s;
    }

    .MsIcon:hover {
        color: #73A0E4;
        background: #FFF;
    }
</style>