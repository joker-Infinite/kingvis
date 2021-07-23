<template>
    <el-dialog align="center"
               :append-to-body="true"
               :title="title"
               :visible.sync="visible">
        <div style="height: 500px;width: 100%" id="common"></div>
    </el-dialog>
</template>

<script>
    import MsDialog from "../../../components/common/jsx_common/MsDialog";

    export default {
        name: "showBigCharts",
        components: {MsDialog},
        data() {
            return {
                visible: false,
                title: ''
            }
        },
        methods: {
            openDialog(d, t) {
                this.visible = true;
                this.title = t;

                this.$nextTick(_ => {
                    this.$echarts.init(document.getElementById('common')).dispose();
                    this.$echarts.init(document.getElementById('common')).setOption(d);
                })
            }
        }
    }
</script>

<style scoped>

</style>