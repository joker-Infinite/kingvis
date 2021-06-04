<template>
    <div style="width: 400px;height: 300px;" :id="'commonECharts-'+i"></div>
</template>

<script>
    export default {
        name: "myPage",
        data() {
            return {
                type: '',
                i: 0
            }
        },
        methods: {
            initECharts(v, id) {
                this.$nextTick(_ => {
                    if (document.getElementById(id)) {
                        this.type = v;
                        let ECharts = this.$echarts.init(document.getElementById(id));
                        let option = {};
                        if (v == 'line') {
                            option = {
                                xAxis: {
                                    type: 'category',
                                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                                },
                                yAxis: {
                                    type: 'value'
                                },
                                series: [{
                                    data: [150, 230, 224, 218, 135, 147, 260],
                                    type: 'line'
                                }]
                            }
                        }
                        if (v == 'bar') {
                            option = {
                                xAxis: {
                                    type: 'category',
                                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                                },
                                yAxis: {
                                    type: 'value'
                                },
                                series: [{
                                    data: [120, 200, 150, 80, 70, 110, 130],
                                    type: 'bar',
                                    showBackground: true,
                                    backgroundStyle: {
                                        color: 'rgba(180, 180, 180, 0.2)'
                                    }
                                }]
                            };
                        }
                        if (v == 'pie') {
                            option = {
                                tooltip: {
                                    trigger: 'item'
                                },
                                legend: {
                                    top: '5%',
                                    left: 'center'
                                },
                                series: [
                                    {
                                        name: '访问来源',
                                        type: 'pie',
                                        radius: ['40%', '70%'],
                                        avoidLabelOverlap: false,
                                        itemStyle: {
                                            borderRadius: 10,
                                            borderColor: '#fff',
                                            borderWidth: 2
                                        },
                                        label: {
                                            show: false,
                                            position: 'center'
                                        },
                                        emphasis: {
                                            label: {
                                                show: true,
                                                fontSize: '40',
                                                fontWeight: 'bold'
                                            }
                                        },
                                        labelLine: {
                                            show: false
                                        },
                                        data: [
                                            {value: 1048, name: '搜索引擎'},
                                            {value: 735, name: '直接访问'},
                                            {value: 580, name: '邮件营销'},
                                            {value: 484, name: '联盟广告'},
                                            {value: 300, name: '视频广告'}
                                        ]
                                    }
                                ]
                            };
                        }
                        ECharts.setOption(option);
                    }
                })
            },
        },
        mounted() {
            let that = this;
            window.addEventListener('message', function (e) {
                that.initECharts(e.data.type, 'commonECharts-' + e.data.index);
            }, false);
        },
        watch: {
            type: {
                handler() {
                    document.getElementById("commonECharts-" + this.i).removeAttribute("_echarts_instance_");
                }
            }
        }
    }
</script>

<style scoped>

</style>