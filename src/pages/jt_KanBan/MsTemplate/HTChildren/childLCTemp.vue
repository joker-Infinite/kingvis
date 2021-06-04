<template>
    <div style="width: 100%;height: 100%">
        <internal ref="internals" id="lc"></internal>
    </div>
</template>

<script>

    import Internal from "../../../homePages/common/internal";
    export default {
        name: "childLCTemp",
        components: {Internal},
        data() {
            return {};
        },
        methods: {
            init() {
                let op = {
                    barWidth: 12,
                    grid: {
                        top: "15%",
                        bottom: 30
                    },
                    xAxis: {
                        type: "value",
                        position: "bottom",
                        axisTick: {show: false},
                        axisLabel: {show: false},
                        splitLine: {show: false},
                        axisLine: {show: false}
                    },
                    yAxis: {
                        type: "category",
                        axisLine: {show: false},
                        axisTick: {show: false},
                        splitLine: {show: false},
                        axisLabel: {
                            formatter: function (v) {
                                //湖北长江路桥股份有限公司枣潜高速公路第七标段项目经理部
                                let data = ["湖北长江路桥股份有限公司枣潜高速公路……", "稻谷款(加工厂)", "大米款（加工厂）", "茂名市金瑞粮油贸易有限公司", "湖北省羊肚菌农业科技有限公司"];
                                let color = ['o', 't', 'tr', 'fu', 'fi'];
                                return "{" + color[data.indexOf(v)] + "| 欠}";
                            },
                            margin: 20,
                            rich: {
                                o: {
                                    height: 10,
                                    align: "center",
                                    fontSize: 20,
                                    fontWeight: 700,
                                    color: "#716437"
                                },
                                t: {
                                    height: 10,
                                    align: "center",
                                    fontSize: 20,
                                    fontWeight: 700,
                                    color: "#09478e"
                                },
                                tr: {
                                    height: 10,
                                    align: "center",
                                    fontSize: 20,
                                    fontWeight: 700,
                                    color: "#1a645a"
                                },
                                fu: {
                                    height: 10,
                                    align: "center",
                                    fontSize: 20,
                                    fontWeight: 700,
                                    color: "#185d9b"
                                },
                                fi: {
                                    height: 10,
                                    align: "center",
                                    fontSize: 20,
                                    fontWeight: 700,
                                    color: "#2d8fa0"
                                },
                            }
                        },
                        data: ["湖北长江路桥股份有限公司枣潜高速公路……", "稻谷款(加工厂)", "大米款（加工厂）", "茂名市金瑞粮油贸易有限公司", "湖北省羊肚菌农业科技有限公司"]
                    },
                    series: [
                        {
                            name: "收入",
                            type: "bar",
                            label: {
                                show: true,
                                position: "insideTopLeft",
                                offset:[-20,-25],
                                color: "#fff",
                                formatter: v => {
                                    return v.name + '：{color|' + v.value + '万元}'
                                },
                                rich: {
                                    color: {
                                        color: '#68f1ff',
                                        fontWeight: 700,
                                        fontSize: 16
                                    }
                                }
                            },
                            data: [
                                {
                                    value: 2934.83,
                                    itemStyle: {
                                        color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                            offset: 0,
                                            color: '#2d8fa0'
                                        }, {
                                            offset: 1,
                                            color: '#73e7f0'
                                        }])
                                    }
                                },
                                {
                                    value: 3303.25,
                                    itemStyle: {
                                        color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                            offset: 0,
                                            color: '#185d9b'
                                        }, {
                                            offset: 1,
                                            color: '#84fdf8'
                                        }])
                                    }
                                },
                                {
                                    value: 3549.63,
                                    itemStyle: {
                                        color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                            offset: 0,
                                            color: '#1a645a'
                                        }, {
                                            offset: 1,
                                            color: '#46e791'
                                        }])
                                    }
                                }, {
                                    value: 4998.57,
                                    itemStyle: {
                                        color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                            offset: 0,
                                            color: '#09478e'
                                        }, {
                                            offset: 1,
                                            color: '#0299ea'
                                        }])
                                    }
                                }, {
                                    value: 8786.06,
                                    itemStyle: {
                                        color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                            offset: 0,
                                            color: '#716437'
                                        }, {
                                            offset: 1,
                                            color: '#e7dc60'
                                        }])
                                    }
                                },]
                        }
                    ]
                };
                this.$refs["internals"].initECharts(op);
            }
        },
        mounted() {
            this.init();
        }
    };
</script>

<style scoped></style>
