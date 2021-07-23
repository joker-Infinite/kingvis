<template>
    <el-dialog title="展示" :visible.sync="visible" width="700px" :append-to-body="true">
        <div v-if="visible" style="width: 100%;height: 500px" id="vvss"></div>
    </el-dialog>
</template>

<script>
    export default {
        name: "showBigECharts",
        data() {
            return {
                visible: false
            }
        },
        methods: {
            async openDialog(v) {
                this.visible = true;
                await new Promise(resolve => {
                    setTimeout(() => {
                        resolve();
                    }, 100);
                });
                v.toolbox.feature.myEnlarge.show = false;
                let th = this;
                let ment = th.$echarts.init(document.getElementById("vvss"));
                this.$nextTick(_ => {
                    ment.setOption(v);
                })
            }
        }
    }
</script>

<style scoped>

</style>