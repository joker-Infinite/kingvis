<template>
    <div style="width: 100%; height: 100%;">
        <ms-collapse>
            <div slot="content">
                <ms-grid-layout name="2021年预算控制" :columns="1">
                    <children-e-charts-temp style="width: 35%"
                                            oid="a"
                                            ref="0"
                                            title="月预算控制"
                                            :e-charts="EChartsA">
                    </children-e-charts-temp>
                    <children-e-charts-temp style="width: 64.5%;"
                                            oid="b"
                                            ref="1"
                                            title="子公司占比/业态占比"
                                            :e-charts="EChartsB">
                    </children-e-charts-temp>
                </ms-grid-layout>
                <ms-grid-layout name="2020年预算控制" :columns="2">
                    <children-e-charts-temp style="width: 35%"
                                            oid="c"
                                            ref="2"
                                            title="月预算控制"
                                            :e-charts="EChartsC">
                    </children-e-charts-temp>
                    <children-e-charts-temp style="width: 64.5%;"
                                            oid="d"
                                            ref="3"
                                            title="子公司占比/业态占比"
                                            :e-charts="EChartsD">
                    </children-e-charts-temp>
                </ms-grid-layout>
                <ms-grid-layout name="查看更多" :columns="3"></ms-grid-layout>
                <ms-grid-layout name="预算控制" :columns="4">
                    <children-e-charts-temp style="width:49.5%;"
                                            oid="e"
                                            ref="4"
                                            title="成本费用利用率"
                                            :e-charts="EChartsE">
                    </children-e-charts-temp>
                    <children-e-charts-temp style="width: 49.5%;"
                                            oid="f"
                                            ref="5"
                                            title="分项成本变化趋势"
                                            :e-charts="EChartsF">
                    </children-e-charts-temp>
                    <children-table-temp title="预算项目列表"
                                         height="300px"
                                         :search="false"
                                         :columns="columns"
                                         :tableData="tableData">
                    </children-table-temp>
                </ms-grid-layout>
            </div>
        </ms-collapse>
    </div>
</template>
<script>
    import MsCollapse from "../../../components/newCommon/MsCollapse";
    import MsGridLayout from "../../../components/newCommon/MsGridLayout";
    import ChildrenEChartsTemp from "../../../components/newCommon/childTemp/childrenEChartsTemp";
    import ChildrenTableTemp from "../../../components/newCommon/childTemp/childrenTableTemp";
    import MyTableBase from "../../../components/common/myTableBase";

    export default {
        name: "budgetControl",
        components: {MyTableBase, ChildrenTableTemp, ChildrenEChartsTemp, MsGridLayout, MsCollapse},
        data() {
            return {
                EChartsA: [
                    {
                        option: {
                            title: {
                                text: ""
                            },
                            tooltip: {
                                trigger: "axis",
                                formatter: function (val) {
                                    return (
                                        val[0].name +
                                        "月" +
                                        ":" +
                                        "<br />预算:" +
                                        (val[0].value / 10000).toFixed(2) +
                                        "万元"
                                    );
                                }
                            },
                            grid: {
                                top: "50",
                                right: "60",
                                left: "60",
                                bottom: "60" //图表尺寸大小
                            },
                            dataZoom: [
                                {
                                    type: "inside"
                                },
                                {
                                    type: "slider"
                                }
                            ],
                            xAxis: [
                                {
                                    type: "category",
                                    name: "月",
                                    nameTextStyle: {
                                        color: "#000"
                                    },
                                    color: "#59588D",
                                    data: [
                                        "01",
                                        "02",
                                        "03",
                                        "04",
                                        "05",
                                        "06",
                                        "07",
                                        "08",
                                        "09",
                                        "10",
                                        "11",
                                        "12"
                                    ],
                                    axisLabel: {
                                        margin: 10,
                                        color: "#999",
                                        textStyle: {
                                            fontSize: 12
                                        }
                                    },
                                    axisLine: {
                                        lineStyle: {
                                            color: "rgba(107,107,107,0.37)"
                                        }
                                    },
                                    axisTick: {
                                        show: false
                                    }
                                }
                            ],
                            yAxis: [
                                {
                                    name: "万元",
                                    nameTextStyle: {
                                        color: "#000"
                                        // fontSize: 16,
                                        // padding: 10,
                                    },
                                    axisLabel: {
                                        formatter: function (val) {
                                            return val / 10000;
                                        },
                                        color: "#999",
                                        textStyle: {
                                            fontSize: 12
                                        }
                                    },
                                    axisLine: {
                                        lineStyle: {
                                            color: "rgba(107,107,107,0.37)"
                                        }
                                    },
                                    axisTick: {
                                        show: false
                                    },
                                    splitLine: {
                                        lineStyle: {
                                            color: "rgba(131,101,101,0.2)",
                                            type: "dashed"
                                        }
                                    }
                                }
                            ],
                            series: [
                                {
                                    type: "bar",
                                    data: [
                                        41227980.97,
                                        66379186.39,
                                        21512554.34,
                                        23536277.13,
                                        25344513.25,
                                        21883601.06,
                                        29285722.58,
                                        33682947.29,
                                        25867750.94,
                                        95867750.94,
                                        55867750.94,
                                        0
                                    ],
                                    barWidth: "16px",
                                    itemStyle: {
                                        normal: {
                                            color: "#38A0FF",
                                            barBorderRadius: [30, 30, 30, 30]
                                        }
                                    }
                                }
                                // {
                                //     data: [],
                                //     type: "line",
                                //     name: "折线图",
                                //     yAxisIndex: 1,
                                //     // symbol: 'none',
                                //     lineStyle: {
                                //         color: "#fea2a2",
                                //         width: 2,
                                //         shadowColor:
                                //             "rgba(0, 0, 0, 0.3)", //设置折线阴影
                                //         shadowBlur: 10,
                                //         shadowOffsetY: 10,
                                //     },
                                //     itemStyle: {
                                //         normal: {
                                //             color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                //                 offset: 0,
                                //                 color: 'rgb(255, 204, 102)'
                                //             }, {
                                //                 offset: 1,
                                //                 color: 'rgb(255, 153, 51)'
                                //             }]),
                                //             label: {
                                //                 show: true,
                                //                 position: 'top',
                                //                 textStyle: {
                                //                     fontSize: '16',
                                //                     color: 'rgb(255, 156, 54)',
                                //                 }
                                //             }
                                //         },
                                //     },
                                //     areaStyle: {
                                //         normal: {
                                //             color:
                                //                 "rgba(0,0,0,0)",
                                //         },
                                //     },
                                // },
                            ]
                        }
                    }
                ],
                EChartsB: [
                    {
                        option: {
                            title: {
                                text: ""
                            },
                            grid: {
                                top: "20%",
                                right: "40",
                                left: "60",
                                bottom: "40"
                            },
                            legend: {
                                orient: "horizontal",
                                bottom: 5,
                                data: [
                                    "新能源",
                                    "石化",
                                    "国储",
                                    "高路油站",
                                    "荆港嘉瑞"
                                ]
                            },
                            tooltip: {
                                trigger: "item",
                                formatter: "{b}: {c}万元 ({d}%)"
                            },
                            series: [
                                {
                                    type: "pie",
                                    center: ["50%", "50%"],
                                    radius: ["30%", "45%"],
                                    clockwise: true,
                                    avoidLabelOverlap: true,
                                    hoverOffset: 15,
                                    label: {
                                        show: true,
                                        position: "outer",
                                        width: 0,
                                        height: 0,
                                        lineHeight: 0,
                                        backgroundColor: "auto",
                                        padding: [2, -2, 2, -2],
                                        borderRadius: 2,
                                        distanceToLabelLine: 0,
                                        normal: {
                                            formatter(v) {
                                                let text = v.name + "\n" + v.percent + "%";
                                                return text;
                                            },
                                            textStyle: {
                                                fontSize: 16
                                            }
                                        }
                                    },
                                    labelLine: {
                                        normal: {
                                            lineStyle: {
                                                width: 1
                                            }
                                        }
                                    },
                                    color: [
                                        "#73ddff",
                                        "#73acff",
                                        "#fdd56a",
                                        "#fdb36a",
                                        "#fd866a",
                                        "#9e87ff"
                                    ],
                                    data: [
                                        {value: 335, name: "新能源"},
                                        {value: 310, name: "石化"},
                                        {value: 234, name: "国储"},
                                        {value: 135, name: "高路油站"},
                                        {value: 1548, name: "荆港嘉瑞"}
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        option: {
                            title: {
                                text: ""
                            },
                            tooltip: {
                                trigger: "item"
                            },

                            legend: {
                                orient: "horizontal",
                                bottom: 10,
                                data: [
                                    "过票",
                                    "油品批发",
                                    "分销",
                                    "油品零售",
                                    "非油品零售"
                                ]
                            },
                            series: [
                                {
                                    type: "pie",
                                    avoidLabelOverlap: true,
                                    center: ["48%", "50%"],
                                    radius: ["38%", "50%"],
                                    clockwise: true,
                                    hoverOffset: 20,
                                    label: {
                                        show: true,
                                        position: "outer",
                                        width: 0,
                                        height: 0,
                                        lineHeight: 0,
                                        backgroundColor: "auto",
                                        padding: [2, -2, 2, -2],
                                        borderRadius: 2,
                                        distanceToLabelLine: 0,
                                        normal: {
                                            formatter(v) {
                                                let text = v.name + "\n" + v.percent + "%";
                                                return text;
                                            },
                                            textStyle: {
                                                fontSize: 16
                                            }
                                        }
                                    },
                                    labelLine: {
                                        normal: {
                                            lineStyle: {
                                                width: 1
                                            }
                                        }
                                    },
                                    color: [
                                        "#ff78e7",
                                        "#02cab3",
                                        "#4885ff",
                                        "#fec67c",
                                        "#cb9bff",
                                        "#54c3fc"
                                    ],
                                    data: [
                                        {value: 335, name: "过票"},
                                        {value: 310, name: "油品批发"},
                                        {value: 234, name: "分销"},
                                        {value: 135, name: "油品零售"},
                                        {value: 1548, name: "非油品零售"}
                                    ]
                                }
                            ]
                        }
                    },
                ],
                EChartsC: [
                    {
                        option: {
                            title: {
                                text: ""
                            },
                            tooltip: {
                                trigger: "axis",
                                formatter: function (val) {
                                    return (
                                        val[0].name +
                                        "月" +
                                        ":" +
                                        "<br />预算:" +
                                        (val[0].value / 10000).toFixed(2) +
                                        "万元"
                                    );
                                }
                            },
                            grid: {
                                top: "50",
                                right: "60",
                                left: "60",
                                bottom: "60" //图表尺寸大小
                            },
                            dataZoom: [
                                {
                                    type: "inside"
                                },
                                {
                                    type: "slider"
                                }
                            ],
                            xAxis: [
                                {
                                    type: "category",
                                    name: "月",
                                    nameTextStyle: {
                                        color: "#000"
                                    },
                                    color: "#59588D",
                                    data: [
                                        "01",
                                        "02",
                                        "03",
                                        "04",
                                        "05",
                                        "06",
                                        "07",
                                        "08",
                                        "09",
                                        "10",
                                        "11",
                                        "12"
                                    ],
                                    axisLabel: {
                                        margin: 10,
                                        color: "#999",
                                        textStyle: {
                                            fontSize: 12
                                        }
                                    },
                                    axisLine: {
                                        lineStyle: {
                                            color: "rgba(107,107,107,0.37)"
                                        }
                                    },
                                    axisTick: {
                                        show: false
                                    }
                                }
                            ],
                            yAxis: [
                                {
                                    name: "万元",
                                    nameTextStyle: {
                                        color: "#000"
                                        // fontSize: 16,
                                        // padding: 10,
                                    },
                                    axisLabel: {
                                        formatter: function (val) {
                                            return val / 10000;
                                        },
                                        color: "#999",
                                        textStyle: {
                                            fontSize: 12
                                        }
                                    },
                                    axisLine: {
                                        lineStyle: {
                                            color: "rgba(107,107,107,0.37)"
                                        }
                                    },
                                    axisTick: {
                                        show: false
                                    },
                                    splitLine: {
                                        lineStyle: {
                                            color: "rgba(131,101,101,0.2)",
                                            type: "dashed"
                                        }
                                    }
                                }
                            ],
                            series: [
                                {
                                    type: "bar",
                                    data: [
                                        41227980.97,
                                        66379186.39,
                                        21512554.34,
                                        23536277.13,
                                        25344513.25,
                                        21883601.06,
                                        29285722.58,
                                        33682947.29,
                                        25867750.94,
                                        95867750.94,
                                        55867750.94,
                                        0
                                    ],
                                    barWidth: "16px",
                                    itemStyle: {
                                        normal: {
                                            color: "#38A0FF",
                                            barBorderRadius: [30, 30, 30, 30]
                                        }
                                    }
                                }
                                // {
                                //     data: [],
                                //     type: "line",
                                //     name: "折线图",
                                //     yAxisIndex: 1,
                                //     // symbol: 'none',
                                //     lineStyle: {
                                //         color: "#fea2a2",
                                //         width: 2,
                                //         shadowColor:
                                //             "rgba(0, 0, 0, 0.3)", //设置折线阴影
                                //         shadowBlur: 10,
                                //         shadowOffsetY: 10,
                                //     },
                                //     itemStyle: {
                                //         normal: {
                                //             color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                //                 offset: 0,
                                //                 color: 'rgb(255, 204, 102)'
                                //             }, {
                                //                 offset: 1,
                                //                 color: 'rgb(255, 153, 51)'
                                //             }]),
                                //             label: {
                                //                 show: true,
                                //                 position: 'top',
                                //                 textStyle: {
                                //                     fontSize: '16',
                                //                     color: 'rgb(255, 156, 54)',
                                //                 }
                                //             }
                                //         },
                                //     },
                                //     areaStyle: {
                                //         normal: {
                                //             color:
                                //                 "rgba(0,0,0,0)",
                                //         },
                                //     },
                                // },
                            ]
                        }
                    }
                ],
                EChartsD: [
                    {
                        option: {
                            title: {
                                text: ""
                            },
                            grid: {
                                top: "20%",
                                right: "40",
                                left: "60",
                                bottom: "40"
                            },
                            legend: {
                                orient: "horizontal",
                                bottom: 5,
                                data: [
                                    "新能源",
                                    "石化",
                                    "国储",
                                    "高路油站",
                                    "荆港嘉瑞"
                                ]
                            },
                            tooltip: {
                                trigger: "item",
                                formatter: "{b}: {c}万元 ({d}%)"
                            },
                            series: [
                                {
                                    type: "pie",
                                    center: ["50%", "50%"],
                                    radius: ["30%", "45%"],
                                    clockwise: true,
                                    avoidLabelOverlap: true,
                                    hoverOffset: 15,
                                    label: {
                                        show: true,
                                        position: "outer",
                                        width: 0,
                                        height: 0,
                                        lineHeight: 0,
                                        backgroundColor: "auto",
                                        padding: [2, -2, 2, -2],
                                        borderRadius: 2,
                                        distanceToLabelLine: 0,
                                        normal: {
                                            formatter(v) {
                                                let text = v.name + "\n" + v.percent + "%";
                                                return text;
                                            },
                                            textStyle: {
                                                fontSize: 16
                                            }
                                        }
                                    },
                                    labelLine: {
                                        normal: {
                                            lineStyle: {
                                                width: 1
                                            }
                                        }
                                    },
                                    color: [
                                        "#73ddff",
                                        "#73acff",
                                        "#fdd56a",
                                        "#fdb36a",
                                        "#fd866a",
                                        "#9e87ff"
                                    ],
                                    data: [
                                        {value: 335, name: "新能源"},
                                        {value: 310, name: "石化"},
                                        {value: 234, name: "国储"},
                                        {value: 135, name: "高路油站"},
                                        {value: 1548, name: "荆港嘉瑞"}
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        option: {
                            title: {
                                text: ""
                            },
                            tooltip: {
                                trigger: "item"
                            },

                            legend: {
                                orient: "horizontal",
                                bottom: 10,
                                data: [
                                    "过票",
                                    "油品批发",
                                    "分销",
                                    "油品零售",
                                    "非油品零售"
                                ]
                            },
                            series: [
                                {
                                    type: "pie",
                                    avoidLabelOverlap: true,
                                    center: ["48%", "50%"],
                                    radius: ["38%", "50%"],
                                    clockwise: true,
                                    hoverOffset: 20,
                                    label: {
                                        show: true,
                                        position: "outer",
                                        width: 0,
                                        height: 0,
                                        lineHeight: 0,
                                        backgroundColor: "auto",
                                        padding: [2, -2, 2, -2],
                                        borderRadius: 2,
                                        distanceToLabelLine: 0,
                                        normal: {
                                            formatter(v) {
                                                let text = v.name + "\n" + v.percent + "%";
                                                return text;
                                            },
                                            textStyle: {
                                                fontSize: 16
                                            }
                                        }
                                    },
                                    labelLine: {
                                        normal: {
                                            lineStyle: {
                                                width: 1
                                            }
                                        }
                                    },
                                    color: [
                                        "#ff78e7",
                                        "#02cab3",
                                        "#4885ff",
                                        "#fec67c",
                                        "#cb9bff",
                                        "#54c3fc"
                                    ],
                                    data: [
                                        {value: 335, name: "过票"},
                                        {value: 310, name: "油品批发"},
                                        {value: 234, name: "分销"},
                                        {value: 135, name: "油品零售"},
                                        {value: 1548, name: "非油品零售"}
                                    ]
                                }
                            ]
                        }
                    },
                ],
                EChartsE: [
                    {
                        option: {
                            xAxis: {
                                type: "category",
                                name: "年",
                                nameTextStyle: {
                                    color: "#000"
                                },
                                data: ["2015", "2016", "2017", "2018", "2019", "2020"]
                            },
                            tooltip: {
                                trigger: "axis",
                                formatter: "{b}年: {c}% "
                            },
                            yAxis: {
                                type: "value",
                                name: "%"
                            },
                            series: [
                                {
                                    data: [3.1, 2.2, 2.6, 8.5, 7.4, 2.9],
                                    type: "line",
                                    itemStyle: {
                                        color: "#38d"
                                    }
                                }
                            ]
                        }
                    }
                ],
                EChartsF: [
                    {
                        option: {
                            xAxis: {
                                type: "category",
                                name: "年",
                                nameTextStyle: {
                                    color: "#000"
                                },
                                data: ["2015", "2016", "2017", "2018", "2019", "2020"]
                            },
                            tooltip: {
                                trigger: "axis",
                                formatter: "{b}: {c}万元"
                            },
                            yAxis: {
                                type: "value",
                                name: "万元"
                            },
                            series: [
                                {
                                    data: [120, 200, 1500, 800, 700, 110],
                                    type: "bar",
                                    itemStyle: {
                                        color: "#38d"
                                    }
                                }
                            ]
                        }
                    }
                ],
                columns: [
                    {prop: "a", label: "预算项目"},
                    {prop: "b", label: "预算金额（元）"},
                    {prop: "c", label: "执行金额（元）"},
                    {prop: "d", label: "执行进度"},
                    {prop: "e", label: "时间偏离度（执行进度-时间进度）"},
                    {prop: "f", label: "年份"}
                ],
                tableData: [
                    {
                        a: "零售业务",
                        b: "2041.55",
                        c: "3894.80",
                        d: "74.88%",
                        e: "22.46%",
                        f: "2020"
                    },
                    {
                        a: "批发业务",
                        b: "3015.05",
                        c: "4202.41",
                        d: "102.49%",
                        e: "30.75%",
                        f: "2020"
                    }
                ]
            };
        },
        methods: {
            async common(param, e1, e2) {
                const d = await this.$axios.get("/apifin/energy/month_finance1", {params: param})
                const d2 = await this.$axios.get("/apifin/energy/month_finance", {params: param})
                let data = d.data.data;
                let data2 = d2.data.data;
                for (let i = 0; i < 2; i++) {
                    data[i].forEach(j => {
                        j['name'] = i === 1 ? (j['yAxis']).substring(j['yAxis'].length - 5) : j['yAxis']
                        j['value'] = j['xBxis']
                    })
                }
                e1[0].option.series[0].data = this.mySet(data2, 'yAxis')
                e1[0].option.xAxis[0].data = this.mySet(data2, 'xBxis')
                e2[0].option.series[0].data = data[0]
                e2[1].option.series[0].data = data[1]
            }
        },
        async mounted() {
            await this.common({type: 2, selectYear: 2021}, this.EChartsA, this.EChartsB);
            // await this.common({type: 1, selectYear: 2020}, this.EChartsC, this.EChartsD);
            this.childRef(4, 70, this.$refs);
        }
    };
</script>
