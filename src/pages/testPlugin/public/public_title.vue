<template>
    <div class="title">
        <span class="forward"></span>
        <span class="content">{{title}}</span>
    </div>
</template>

<script>
    export default {
        name: "public_title",
        props: {
            title: {
                type: String,
                default: () => {
                    return "标题";
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .title {
        width: calc(100% - 20px);
        height: 30px;
        background: #f3f1f1;
        padding: 0 10px;

        span {
            display: inline-block;
        }

        .forward {
            width: 5px;
            height: 15px;
            margin: 7.5px 5px 7.5px 0;
            background: #00b8fe;
        }

        .content {
            vertical-align: 8.5px;
            font-size: 18px;
        }
    }
</style>