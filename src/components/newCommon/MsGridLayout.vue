<template>
    <ms-form-group :name="name" :code="code" v-bind="$attrs" ref="group">
        <div class="grid" ref="grid">
            <slot></slot>
        </div>
    </ms-form-group>
</template>
<script>
    import MsFormGroup from "./MsFormGroup";

    export default {
        name: "MsGridLayout",
        props: {
            columns: {
                type: Number,
                required: true
            },
            name: String,
            code: String,
            gutter: {
                type: String,
                default: '20px'
            }
        },
        data() {
            return {}
        },
        components: {MsFormGroup}
    }

</script>


<style lang="less" scoped>
    .grid-group {
        padding: 5px 20px;
        box-sizing: border-box;
    }

    .title {
        display: flex;
        height: 26px;
        margin-bottom: 10px;

        .bar {
            height: 100%;
            width: 6px;
            background: red;
        }

        .name {
            height: 26px;
            margin-left: 10px;
            vertical-align: middle;
            line-height: 26px;
        }

    }

    .grid {
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: wrap;
        flex-direction: row;
        justify-content: space-between;
    }
</style>
