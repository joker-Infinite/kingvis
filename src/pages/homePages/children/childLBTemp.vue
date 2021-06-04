<template>
    <div class="LBT">
        <div class="all">
            <p><span class="c1">￥5000,000</span>总应收款</p>
            <p><span class="c2">￥5000,000</span>总已收款</p>
        </div>
        <div class="chartsList">
            <div class="charts">
                <internal ref="internal" id="lb"></internal>
            </div>
            <div class="list">
                <table border="1" cellspacing="0">
                    <tr>
                        <th>板块</th>
                        <th>应收款(万元)</th>
                        <th>已收款(万元)</th>
                    </tr>
                    <tr>
                        <th>
                            <div class="cube"><span class="ny"></span>能源</div>
                        </th>
                        <th>2333</th>
                        <th>2333</th>
                    </tr>
                    <tr>
                        <th>
                            <div class="cube"><span class="fwq"></span>服务区</div>
                        </th>
                        <th>2333</th>
                        <th>2333</th>
                    </tr>
                    <tr>
                        <th>
                            <div class="cube"><span class="cm"></span>传媒</div>
                        </th>
                        <th>2333</th>
                        <th>2333</th>
                    </tr>
                    <tr>
                        <th>
                            <div class="cube"><span class="sy"></span>商业</div>
                        </th>
                        <th>2333</th>
                        <th>2333</th>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import Internal from "../common/internal";

    export default {
        name: "childLBTemp",
        components: {Internal},
        data() {
            return {};
        },
        methods: {
            init() {
                let color = [
                    new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: '#d99049'
                    }, {
                        offset: 1,
                        color: 'rgba(217,144,73,0.3)'
                    }]), new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: '#06d0fb'
                    }, {
                        offset: 1,
                        color: 'rgba(6,208,251,0.3)'
                    }]), new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: '#28e0d1'
                    }, {
                        offset: 1,
                        color: 'rgba(40,224,209,0.3)'
                    }]), new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: '#e7cf77'
                    }, {
                        offset: 1,
                        color: 'rgba(231,207,119,0.3)'
                    }])];
                let chartData = [
                    {
                        name: "商业板块",
                        value: 61.79
                    },
                    {
                        name: "传媒板块",
                        value: 62.28
                    },
                    {
                        name: "服务区板块",
                        value: 80.31
                    },
                    {
                        name: "能源板块",
                        value: 97.26
                    }
                ];
                let arrName = [];
                let arrValue = [];
                let sum = 100;
                let pieSeries = [];
                let lineYAxis = [];

                chartData.forEach(v => {
                    arrName.push(v.name);
                    arrValue.push(v.value);
                    sum = sum + v.value;
                });

                chartData.forEach((v, i) => {
                    pieSeries.push({
                        name: "",
                        type: "pie",
                        clockWise: false,
                        hoverAnimation: false,
                        radius: [75 - i * 20 + "%", 67 - i * 20 + "%"],
                        center: ["40%", "50%"],
                        label: {
                            show: false
                        },
                        data: [
                            {
                                value: (v.value / 100) * 75,
                                name: v.name,
                            },
                            {
                                value: 75,
                                name: "",
                                itemStyle: {
                                    color: "rgba(0,0,0,0)"
                                }
                            }
                        ]
                    });
                    pieSeries.push({
                        name: "",
                        type: "pie",
                        silent: true,
                        z: 1,
                        clockWise: false, //顺时加载
                        hoverAnimation: false, //鼠标移入变大
                        radius: [75 - i * 20 + "%", 67 - i * 20 + "%"],
                        center: ["40%", "50%"],
                        label: {
                            show: false
                        },
                        data: [
                            {
                                value: 7.5,
                                itemStyle: {
                                    color: "rgba(77,82,96,0.6)"
                                }
                            },
                            {
                                value: 2.5,
                                name: "",
                                itemStyle: {
                                    color: "rgba(0,0,0,0)"
                                }
                            }
                        ]
                    });
                    v.percent = v.value + "%";
                    lineYAxis.push({
                        value: i,
                        textStyle: {
                            rich: {
                                circle: {
                                    color: color[i],
                                    padding: [0, 5]
                                }
                            }
                        }
                    });
                });

                let option = {
                    color: color,
                    grid: {
                        top: "10%",
                        bottom: "54%",
                        left: "40%",
                        containLabel: false
                    },
                    yAxis: [
                        {
                            type: "category",
                            inverse: true,
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                formatter: function (params) {
                                    let item = chartData[params];
                                    return "{percent|" + item.percent + "}";
                                },
                                interval: 0,
                                inside: true,
                                textStyle: {
                                    color: "#333",
                                    fontSize: 14,
                                    rich: {
                                        percent: {
                                            color: "#FFF",
                                            fontSize: 12,
                                            lineHeight: 12,
                                            padding: [-10, 0, 0, 0]
                                        }
                                    }
                                },
                                show: true
                            },
                            data: lineYAxis
                        }
                    ],
                    xAxis: [
                        {
                            show: false
                        }
                    ],
                    series: pieSeries
                };
                this.$refs["internal"].initECharts(option);
            }
        },
        mounted() {
            this.init();
        }
    };
</script>

<style scoped lang="less">
    .LBT {
        width: 100%;
        height: 100%;

        .all {
            color: white;
            width: 100%;
            line-height: 35px;
            display: flex;
            flex-wrap: nowrap;
            flex-direction: row;
            justify-content: space-around;

            p {
                span {
                    font-size: 20px;
                    font-weight: 700;
                    padding-right: 10px;
                }

                .c1 {
                    color: #06f9fb;
                    font-family: Arial;
                }

                .c2 {
                    color: #ffd200;
                    font-family: Arial;
                }
            }
        }

        .chartsList {
            width: 100%;
            height: calc(100% - 36px);
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-around;

            .charts {
                width: 45%;
                height: 100%;
            }

            .list {
                width: 55%;
                color: white;
                display: flex;
                flex-direction: column;
                justify-content: center;
                flex-wrap: nowrap;

                table {
                    border-collapse: collapse;
                    width: 99%;
                    text-align: center;
                }

                table,
                th,
                td {
                    border: none;
                    line-height: 2;
                    font-size: 14px;
                }

                .cube {
                    width: calc(100% - 10px);
                    height: 100%;
                    text-align: left;
                    padding-left: 10px;

                    span {
                        display: inline-block;
                        width: 10px;
                        height: 10px;
                        background: red;
                        margin-right: 10px;
                    }

                    .ny {
                        background: #d99049;
                    }

                    .fwq {
                        background: #06d0fb;
                    }

                    .cm {
                        background: #28e0d1;
                    }

                    .sy {
                        background: #e7cf77;
                    }
                }
            }
        }
    }
</style>
