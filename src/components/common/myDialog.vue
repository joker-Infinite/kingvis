<template>
    <el-dialog :title="title"
               :center="true"
               :append-to-body="appendToBody"
               :visible.sync="visibleInner"
               :width="width"
               v-bind="{...$attrs}"
               v-on="$listeners"
               :close-on-click-modal="closeOnClickModal">
        <vue-scroll
                :style="{height:height?height:'500px'}"
                :ops="{bar:{background:'#000',opacity:0.2,keepShow:true,size:'8px',onlyShowBarOnScroll:true},scrollPanel:{scrollingX:false}}">
            <slot></slot>
        </vue-scroll>
        <div style="width: 100%;height: 50px;text-align: right">
            <slot name="footerButton"></slot>
        </div>
    </el-dialog>
</template>

<script>
    import VueScroll from 'vuescroll'

    export default {
        name: "myDialog",
        components: {
            VueScroll
        },
        props: {
            title: {
                type: String,
                default: ""
            },
            visible: {
                type: Boolean,
                default: false
            },
            width: {
                type: String,
                default: ''
            },
            closeOnClickModal: {
                type: Boolean,
                default: false
            },
            appendToBody: {
                type: Boolean,
                default: true
            },
            height: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                visibleInner: false
            };
        },
        watch: {
            visible() {
                this.visibleInner = this.visible;
            }
        },
    };
</script>

<style scoped lang="less">
    /deep/ .el-dialog {
        border-radius: 4px;
        overflow: hidden;

        .el-dialog__header {
            background: #e2e2e2;
            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
        }

        .el-dialog__body {
            padding: 15px;
        }
    }
</style>
