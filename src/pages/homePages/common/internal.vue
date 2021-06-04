<template>
    <div style="width: 100%;height: 100%" :id="'commonECharts-'+id"></div>
</template>

<script>
    export default {
        name: "internal",
        props: {
            id: {
                type: String,
                default: ''
            }
        },
        data() {
            return {}
        },
        methods: {
            initECharts(op) {
                let nId = 'commonECharts-' + this.id;
                let commonECharts = document.getElementById(nId);
                let ec = this.$echarts.init(commonECharts);
                ec.setOption(op)
            },
            refresh() {
            }
        }
    }
</script>

<style scoped lang="less">

</style>