<template>
    <div style="width: 100%; height: 100%;">
        <ms-collapse>
            <div slot="content">
                <ms-grid-layout name="2021年营收" :columns="1">
                    <children-e-charts-temp style="width: 35%"
                                            oid="a"
                                            ref="0"
                                            title="营收"
                                            :e-charts="EChartsA">
                    </children-e-charts-temp>
                    <children-e-charts-temp style="width: 64.5%;"
                                            oid="b"
                                            ref="1"
                                            title="营收占比"
                                            :query="searchTime"
                                            :e-charts="EChartsB">
                    </children-e-charts-temp>
                </ms-grid-layout>
                <ms-grid-layout name="2020年营收" :columns="2">
                    <children-e-charts-temp style="width: 35%"
                                            oid="c"
                                            ref="2"
                                            title="营收"
                                            :e-charts="EChartsC">
                    </children-e-charts-temp>
                    <children-e-charts-temp style="width: 64.5%;"
                                            oid="d"
                                            ref="3"
                                            title="营收占比"
                                            :query="searchTime"
                                            :e-charts="EChartsD">
                    </children-e-charts-temp>
                </ms-grid-layout>
                <ms-grid-layout name="查看更多" :columns="3"></ms-grid-layout>
            </div>
        </ms-collapse>
    </div>
</template>
<script>
    import MsCollapse from "../../../components/newCommon/MsCollapse";
    import MsGridLayout from "../../../components/newCommon/MsGridLayout";
    import ChildrenEChartsTemp from "../../../components/newCommon/childTemp/childrenEChartsTemp";

    export default {
        name: "revenue",
        components: {ChildrenEChartsTemp, MsGridLayout, MsCollapse},
        data() {
            return {
                searchTime: [{type: 'el-date-picker', code: 'c', placeholder: '请选择时间'}],
                EChartsA: [
                    {
                        option: {
                            title: {
                                text: ""
                            },
                            tooltip: {
                                trigger: "axis",
                                formatter: function (val) {
                                    return (val[0].name + "月" + ":" + "<br />营收:" + val[0].value + "万元");
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
                                    data: [],
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
                                    data: [],
                                    barWidth: "16px",
                                    itemStyle: {
                                        normal: {
                                            color: "#38A0FF",
                                            barBorderRadius: [30, 30, 30, 30]
                                        }
                                    }
                                }
                            ]
                        }
                    }
                ],
                EChartsB: [
                    {
                        option: {
                            title: {text: ""},
                            grid: {
                                top: "20%",
                                right: "40",
                                left: "0",
                                bottom: "40" //图表尺寸大小
                            },
                            legend: {
                                orient: "vertical",
                                top: "center",
                                right: 10
                            },
                            tooltip: {
                                trigger: "item",
                                formatter: function (val) {
                                    return (
                                        val.name +
                                        ":<br>营收:" +
                                        (val.value / 10000).toFixed(2) +
                                        "万元<br>占比:" +
                                        val.percent +
                                        "%"
                                    );
                                }
                            },
                            series: [
                                {
                                    type: "pie",
                                    center: ["40%", "50%"],
                                    radius: ["30%", "40%"],
                                    clockwise: true,
                                    avoidLabelOverlap: true,
                                    hoverOffset: 15,
                                    itemStyle: {
                                        normal: {
                                            color: function (v) {
                                                let colorList = [
                                                    "#06d3c4",
                                                    "#9e87ff",
                                                    "#7ebdff",
                                                    "#fdd36a",
                                                    "#fdb36a",
                                                    "#fd866a"
                                                ];
                                                return colorList[v.dataIndex];
                                            }
                                        }
                                    },
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
                                                // let text = v.percent + "%";
                                                return text;
                                            },
                                            textStyle: {
                                                fontSize: 14
                                            }
                                        }
                                    },
                                    labelLine: {
                                        normal: {
                                            length: 15,
                                            length2: 25,
                                            lineStyle: {
                                                width: 1
                                            }
                                        }
                                    },
                                    data: []
                                }
                            ]
                        }
                    },
                    {
                        option: {
                            title: {text: ""},
                            tooltip: {
                                trigger: "item",
                                formatter: function (val) {
                                    return (
                                        val.name +
                                        ":<br>营收:" +
                                        (val.value / 10000).toFixed(2) +
                                        "万元<br>占比:" +
                                        val.percent +
                                        "%"
                                    );
                                }
                            },
                            legend: {
                                orient: "vertical",
                                top: "center",
                                right: 10
                            },
                            series: [
                                {
                                    type: "pie",
                                    minAngle: 5, //最小的扇区角度（0 ~ 360），用于防止某个值过小导致扇区太小影响交互
                                    avoidLabelOverlap: true, //是否启用防止标签重叠策略
                                    center: ["45%", "45%"],
                                    radius: ["30%", "40%"],
                                    clockwise: true,
                                    hoverOffset: 20,
                                    itemStyle: {
                                        normal: {
                                            color: function (v) {
                                                let colorList = [
                                                    "#3cb8fe",
                                                    "#73abf8",
                                                    "#cb9bff",
                                                    "#fdb36a",
                                                    "#ff9393",
                                                    "#95a2ff"
                                                ];
                                                return colorList[v.dataIndex];
                                            }
                                        }
                                    },
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
                                                // let text = v.percent + "%";
                                                return text;
                                            },
                                            textStyle: {
                                                fontSize: 14
                                            }
                                        }
                                    },
                                    labelLine: {
                                        normal: {
                                            length: 15,
                                            length2: 10,
                                            lineStyle: {
                                                width: 1
                                            }
                                        }
                                    },
                                    data: []
                                }
                            ]
                        }
                    }
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
                                    return (val[0].name + "月" + ":" + "<br />营收:" + val[0].value + "万元");
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
                                    data: [],
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
                                    data: [],
                                    barWidth: "16px",
                                    itemStyle: {
                                        normal: {
                                            color: "#38A0FF",
                                            barBorderRadius: [30, 30, 30, 30]
                                        }
                                    }
                                }
                            ]
                        }
                    }
                ],
                EChartsD: [
                    {
                        option: {
                            title: {text: ""},

                            grid: {
                                top: "20%",
                                right: "40",
                                left: "0",
                                bottom: "40" //图表尺寸大小
                            },
                            legend: {
                                orient: "vertical",
                                top: "center",
                                right: 10
                            },
                            tooltip: {
                                trigger: "item",
                                formatter: function (val) {
                                    return (
                                        val.name +
                                        ":<br>营收:" +
                                        (val.value / 10000).toFixed(2) +
                                        "万元<br>占比:" +
                                        val.percent +
                                        "%"
                                    );
                                }
                            },
                            series: [
                                {
                                    type: "pie",
                                    center: ["40%", "50%"],
                                    radius: ["30%", "40%"],
                                    clockwise: true,
                                    avoidLabelOverlap: true,
                                    hoverOffset: 15,
                                    itemStyle: {
                                        normal: {
                                            // 设置扇形的阴影
                                            // shadowBlur: 30,
                                            // shadowColor: "rgba(0,0,0,0.3)",
                                            // shadowOffsetX: -5,
                                            // shadowOffsetY: 5,
                                            color: function (v) {
                                                let colorList = [
                                                    "#06d3c4",
                                                    "#9e87ff",
                                                    "#7ebdff",
                                                    "#fdd36a",
                                                    "#fdb36a",
                                                    "#fd866a"
                                                ];
                                                return colorList[v.dataIndex];
                                            }
                                        }
                                    },
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
                                                // let text = v.percent + "%";
                                                return text;
                                            },
                                            textStyle: {
                                                fontSize: 14
                                            }
                                        }
                                    },
                                    labelLine: {
                                        normal: {
                                            length: 15,
                                            length2: 25,
                                            lineStyle: {
                                                width: 1
                                            }
                                        }
                                    },
                                    data: []
                                }
                            ]
                        }
                    },
                    {
                        option: {
                            title: {text: ""},
                            tooltip: {
                                trigger: "item",
                                formatter: function (val) {
                                    return (
                                        val.name +
                                        ":<br>营收:" +
                                        (val.value / 10000).toFixed(2) +
                                        "万元<br>占比:" +
                                        val.percent +
                                        "%"
                                    );
                                }
                            },
                            legend: {
                                orient: "vertical",
                                top: "center",
                                right: 10
                            },
                            series: [
                                {
                                    type: "pie",
                                    minAngle: 5, //最小的扇区角度（0 ~ 360），用于防止某个值过小导致扇区太小影响交互
                                    avoidLabelOverlap: true, //是否启用防止标签重叠策略
                                    center: ["45%", "50%"],
                                    radius: ["30%", "40%"],
                                    clockwise: true,
                                    hoverOffset: 20,
                                    itemStyle: {
                                        normal: {
                                            // 设置扇形的阴影
                                            // shadowBlur: 30,
                                            // shadowColor: "rgba(0,0,0,0.3)",
                                            // shadowOffsetX: -5,
                                            // shadowOffsetY: 5,
                                            color: function (v) {
                                                let colorList = [
                                                    "#3cb8fe",
                                                    "#73abf8",
                                                    "#cb9bff",
                                                    "#fdb36a",
                                                    "#ff9393",
                                                    "#95a2ff"
                                                ];
                                                return colorList[v.dataIndex];
                                            }
                                        }
                                    },
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
                                                // let text = v.percent + "%";
                                                return text;
                                            },
                                            textStyle: {
                                                fontSize: 14
                                            }
                                        }
                                    },
                                    labelLine: {
                                        normal: {
                                            length: 15,
                                            length2: 10,
                                            lineStyle: {
                                                width: 1
                                            }
                                        }
                                    },
                                    data: []
                                }
                            ]
                        }
                    }
                ],
            };
        },
        methods: {
            async common(param, e1, e2) {
                const d = await this.$axios.get("/apifin/service/revenue", {params: param})
                const d2 = await this.$axios.get("/apifin/service/revenue2", {params: param})
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
            await this.common({selectYear: 2021, type: 1}, this.EChartsA, this.EChartsB);
            // await this.common({selectYear: 2020, type: 1}, this.EChartsC, this.EChartsD);
            this.childRef(4, 70, this.$refs);
        }
    };
</script>
