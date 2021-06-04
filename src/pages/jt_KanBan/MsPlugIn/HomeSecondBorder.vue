<template>
    <div>
        <div class="mm vv left top"></div>
        <div class="mm hh left top"></div>
        <div class="mm vv right top"></div>
        <div class="mm hh right top"></div>
        <div class="mm vv left bottom"></div>
        <div class="mm hh left bottom"></div>
        <div class="mm vv right bottom"></div>
        <div class="mm hh right bottom"></div>
    </div>
</template>

<script>
    export default {
        name: "HomeSecondBorder"
    };
</script>

<style scoped lang="less">
    .mm {
        position: absolute;
        width: 5px;
        height: 5px;
        border: 2px solid #005aa5;
    }

    .left {
        left: 0;
    }

    .top {
        top: 0;
    }

    .right {
        right: 0;
    }

    .bottom {
        bottom: 0;
    }
</style>
