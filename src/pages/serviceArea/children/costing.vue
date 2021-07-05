<template>
    <div style="width: 100%; height: 100%;">
        <ms-collapse>
            <div slot="content">
                <ms-grid-layout name="2021年成本" :columns="1">
                    <children-e-charts-temp style="width: 40%"
                                            oid="a"
                                            ref="0"
                                            title="实际成本"
                                            :e-charts="EChartsA">
                    </children-e-charts-temp>
                    <children-e-charts-temp style="width: 59.5%"
                                            oid="b"
                                            ref="1"
                                            title="成本占比"
                                            :e-charts="EChartsB">
                    </children-e-charts-temp>
                    <!--<children-e-charts-temp style="width: 40%"
                                            oid="c"
                                            ref="2"
                                            title="公司种类预算控制"
                                            :e-charts="EChartsC">
                    </children-e-charts-temp>
                    <children-e-charts-temp style="width: 59.5%"
                                            oid="d"
                                            ref="3"
                                            title="种类预算占比"
                                            :e-charts="EChartsD">
                    </children-e-charts-temp>-->
                </ms-grid-layout>
                <ms-grid-layout name="2020年成本" :columns="2">
                    <children-e-charts-temp style="width: 40%"
                                            oid="e"
                                            ref="4"
                                            title="实际成本"
                                            :e-charts="EChartsE">
                    </children-e-charts-temp>
                    <children-e-charts-temp style="width: 59.5%"
                                            oid="f"
                                            ref="5"
                                            title="成本占比"
                                            :e-charts="EChartsF">
                    </children-e-charts-temp>
                    <!-- <children-e-charts-temp style="width: 40%"
                                             oid="g"
                                             ref="6"
                                             title="公司种类预算控制"
                                             :e-charts="EChartsG">
                     </children-e-charts-temp>
                     <children-e-charts-temp style="width: 59.5%"
                                             oid="h"
                                             ref="7"
                                             title="种类预算占比"
                                             :e-charts="EChartsH">
                     </children-e-charts-temp>-->
                </ms-grid-layout>
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
                EChartsA: [
                    {
                        option: {
                            title: {
                                text: ""
                            },
                            dataZoom: [
                                {
                                    type: "inside"
                                },
                                {
                                    type: "slider"
                                }
                            ],
                            tooltip: {
                                trigger: "axis",
                                formatter: function (val) {
                                    return (val[0].name + "月" + ":" + "<br>成本:" + val[0].value / 10000 + "万元");
                                }
                            },
                            grid: {
                                top: "50",
                                right: "40",
                                left: "60",
                                bottom: "60" //图表尺寸大小
                            },
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
                                    },
                                    axisLabel: {
                                        formatter: function (value) {
                                            return value / 10000;
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
                                },
                                {
                                    data: [],
                                    type: "line",
                                    name: "折线图",
                                    // symbol: 'none',
                                    lineStyle: {
                                        color: "#fea2a2",
                                        width: 2,
                                        shadowColor: "rgba(0, 0, 0, 0.3)", //设置折线阴影
                                        shadowBlur: 10,
                                        shadowOffsetY: 10
                                    },
                                    areaStyle: {
                                        normal: {
                                            color: "rgba(0,0,0,0)"
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
                                        ":<br>利润:" +
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
                                    radius: ["30%", "50%"],
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
                                            length: 10,
                                            length2: 25,
                                            lineStyle: {
                                                width: 1
                                            }
                                        }
                                    },
                                    data: [
                                        {name: "其他", value: 11154551},
                                        {name: "餐饮", value: 54125877},
                                        {name: "超市", value: 65478254},
                                        {name: "品牌餐饮", value: 69874512},
                                        {name: "小吃", value: 12054890}
                                    ]
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
                                        ":<br>利润:" +
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
                                    radius: ["30%", "50%"],
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
                                            length: 10,
                                            length2: 10,
                                            lineStyle: {
                                                width: 1
                                            }
                                        }
                                    },
                                    data: [
                                        {name: "咸宁中心", value: 5114551},
                                        {name: "宜昌中心", value: 2412577},
                                        {name: "黄冈中心", value: 3547824},
                                        {name: "十堰中心", value: 9987512},
                                        {name: "孝感中心", value: 8657941},
                                        {name: "恩施中心", value: 1205890}
                                    ]
                                }
                            ]
                        }
                    }
                ],
                EChartsC: [
                    {
                        option: {
                            title: {
                                text: "",
                                top: 20,
                                left: 20
                            },
                            tooltip: {
                                trigger: "axis",
                                formatter: function (val) {
                                    return (
                                        val[0].name +
                                        ":<br>实际:" +
                                        (val[0].value / 10000).toFixed(2) +
                                        "万元" +
                                        "<br>预算:" +
                                        (val[1].value / 10000).toFixed(2) +
                                        "万元" +
                                        "<br>" +
                                        "执行率:" +
                                        val[2].value +
                                        "%"
                                    );
                                }
                            },
                            grid: {
                                left: "3%",
                                right: "10%",
                                bottom: "3%",
                                containLabel: true
                            },
                            xAxis: {
                                type: "value",
                                splitLine: {
                                    show: false
                                },
                                axisTick: {
                                    show: false
                                },
                                axisLine: {
                                    show: false
                                },
                                axisLabel: {
                                    show: false
                                }
                            },
                            yAxis: {
                                type: "category",
                                data: [
                                    "办公费",
                                    "交通",
                                    "误餐费",
                                    "业务招待费",
                                    "差旅费"
                                ],
                                splitLine: {
                                    show: false
                                },
                                axisTick: {
                                    show: false
                                },
                                axisLine: {
                                    show: false
                                }
                            },
                            series: [
                                {
                                    name: "A门店",
                                    type: "bar",
                                    stack: "总量",
                                    barWidth: 20,
                                    itemStyle: {
                                        normal: {
                                            color: "#379DFB",
                                            barBorderRadius: [5, 5, 5, 5]
                                        }
                                    },
                                    label: {
                                        normal: {
                                            show: false,
                                            color: "#fff",
                                            position: "insideRight"
                                        }
                                    },
                                    z: 10,
                                    data: [0, 34100, 81600, 523600, 866400]
                                },
                                {
                                    name: "B门店",
                                    type: "bar",
                                    stack: "总量",
                                    itemStyle: {
                                        normal: {
                                            color: "#dfe5f1",
                                            shadowBlur: [0, 0, 0, 10],
                                            barBorderRadius: [5, 5, 5, 5]
                                        }
                                    },
                                    label: {
                                        normal: {
                                            show: false,
                                            color: "#000",
                                            position: "insideRight"
                                        }
                                    },
                                    z: 5,
                                    data: [0, 21700, 10500, 282600, 609900]
                                },
                                {
                                    name: "B门店",
                                    type: "bar",
                                    stack: "总量",
                                    itemStyle: {
                                        normal: {
                                            color: "rgba(237,125,49, 0)",
                                            shadowBlur: [0, 0, 0, 10],
                                            barBorderRadius: [5, 5, 5, 5]
                                        }
                                    },
                                    label: {
                                        normal: {
                                            color: "red",
                                            show: true,
                                            position: [10, 5],
                                            formatter: function (params) {
                                                return params.value + "%";
                                            }
                                        }
                                    },
                                    z: 5,
                                    data: ["0", "63.78", "12.90", "53.97", "70.40"]
                                }
                            ]
                        }
                    }
                ],
                EChartsD: [
                    {
                        option: {
                            color: [
                                "#ff9999",
                                "#ffb03f",
                                "#ff9b42",
                                "#3dba2d",
                                "#F0D418",
                                "#2E64FF"
                            ],
                            tooltip: {},
                            formatter: function (val) {
                                if (!val.data.id) {
                                    return (
                                        val.name +
                                        ":<br>实际:" +
                                        val.value +
                                        "万元<br>占比:" +
                                        val.percent +
                                        "%"
                                    );
                                } else {
                                    let datas = val.name + ":<br>";
                                    val.data.id.forEach((item, index) => {
                                        datas +=
                                            item.name + ":" + item.value + "万元<br>";
                                    });
                                    return datas;
                                }
                            },
                            radar: {
                                zlevel: 11,
                                shape: "circle",
                                scale: true,
                                indicator: [
                                    {
                                        name: "差旅费"
                                    },
                                    {
                                        name: "业务招待费"
                                    },
                                    {
                                        name: "误餐费"
                                    },
                                    {
                                        name: "交通"
                                    }
                                ],
                                center: ["50%", "50%"],
                                radius: "40%",
                                startAngle: 40,
                                name: {
                                    show: true,
                                    color: "transparent"
                                },
                                axisLine: {
                                    show: true,
                                    lineStyle: {
                                        color: "rgba(32,126,255, .5)"
                                        // opacity: 0.2
                                    }
                                },
                                splitLine: {
                                    lineStyle: {
                                        color: "rgba(32,126,255, .5)"
                                        // opacity: 0.2
                                    }
                                },
                                splitArea: {
                                    areaStyle: {
                                        color: "rgba(32,126,255, 0.1)"
                                    }
                                }
                            },
                            polar: {
                                radius: "40%"
                            },
                            angleAxis: {
                                zlevel: 0,
                                min: 0,
                                max: 360,
                                interval: 5,
                                clockwise: false,
                                axisTick: {
                                    show: false
                                },
                                axisLabel: {
                                    show: false
                                },
                                axisLine: {
                                    show: false
                                },
                                splitLine: {
                                    show: false
                                }
                            },
                            radiusAxis: {
                                zlevel: 0,
                                min: 0,
                                max: 100,
                                axisLabel: {
                                    textStyle: {
                                        color: "rgba(29,208,240,0)"
                                    }
                                },
                                axisLine: {
                                    show: false
                                },
                                splitLine: {
                                    show: false
                                },
                                splitArea: {
                                    show: false
                                }
                            },
                            series: [
                                {
                                    type: "pie",
                                    data: [
                                        {
                                            value: 86.64,
                                            name: "差旅费"
                                        },
                                        {
                                            value: 52.36,
                                            name: "业务招待费"
                                        },
                                        {
                                            value: 8.16,
                                            name: "误餐费"
                                        },
                                        {
                                            value: 3.41,
                                            name: "交通"
                                        }
                                    ],
                                    radius: ["45%", "55%"],
                                    zlevel: -1,
                                    name: "",
                                    itemStyle: {
                                        normal: {
                                            // borderColor: 'white'
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
                                    }
                                },
                                {
                                    type: "radar",
                                    data: [
                                        {
                                            value: [86.64, 52.36, 8.16, 3.41],
                                            name: "指数",
                                            id: [
                                                {
                                                    value: 86.64,
                                                    name: "差旅费"
                                                },
                                                {
                                                    value: 52.36,
                                                    name: "业务招待费"
                                                },
                                                {
                                                    value: 8.16,
                                                    name: "误餐费"
                                                },
                                                {
                                                    value: 3.41,
                                                    name: "交通"
                                                }
                                            ],
                                            max: 100,
                                            //   label:{
                                            //       show:true,
                                            //   },
                                            areaStyle: {
                                                normal: {
                                                    color: {
                                                        type: "radial",
                                                        x: 0.5,
                                                        y: 0.5,
                                                        r: 0.5,
                                                        colorStops: [
                                                            {
                                                                offset: 0,
                                                                color: "rgba(32,126,255, 0.5)" // 0% 处的颜色
                                                            },
                                                            {
                                                                offset: 1,
                                                                color: "rgba(32,126,255, 0.1)" // 100% 处的颜色
                                                            }
                                                        ],
                                                        global: false // 缺省为 false
                                                    }
                                                }
                                            }
                                        }
                                    ],
                                    zlevel: 2,
                                    z: 4
                                }
                            ]
                        }
                    },
                    {
                        option: {
                            color: [
                                "#ff9999",
                                "#ffb03f",
                                "#ff9b42",
                                "#3dba2d",
                                "#F0D418",
                                "#2E64FF"
                            ],
                            tooltip: {},
                            formatter: function (val) {
                                if (!val.data.id) {
                                    return (
                                        val.name +
                                        ":<br>实际:" +
                                        val.value +
                                        "万元<br>占比:" +
                                        val.percent +
                                        "%"
                                    );
                                } else {
                                    let datas = val.name + ":<br>";
                                    val.data.id.forEach((item, index) => {
                                        datas +=
                                            item.name + ":" + item.value + "万元<br>";
                                    });
                                    return datas;
                                }
                            },
                            radar: {
                                zlevel: 11,
                                shape: "circle",
                                scale: true,
                                indicator: [
                                    {
                                        name: "差旅费"
                                    },
                                    {
                                        name: "业务招待费"
                                    },
                                    {
                                        name: "误餐费"
                                    },
                                    {
                                        name: "交通"
                                    }
                                ],
                                center: ["50%", "50%"],
                                radius: "40%",
                                startAngle: 40,
                                name: {
                                    show: true,
                                    color: "transparent"
                                },
                                axisLine: {
                                    show: true,
                                    lineStyle: {
                                        color: "rgba(32,126,255, .5)"
                                        // opacity: 0.2
                                    }
                                },
                                splitLine: {
                                    lineStyle: {
                                        color: "rgba(32,126,255, .5)"
                                        // opacity: 0.2
                                    }
                                },
                                splitArea: {
                                    areaStyle: {
                                        color: "rgba(32,126,255, 0.1)"
                                    }
                                }
                            },
                            polar: {
                                radius: "40%"
                            },
                            angleAxis: {
                                zlevel: 0,
                                min: 0,
                                max: 360,
                                interval: 5,
                                clockwise: false,
                                axisTick: {
                                    show: false
                                },
                                axisLabel: {
                                    show: false
                                },
                                axisLine: {
                                    show: false
                                },
                                splitLine: {
                                    show: false
                                }
                            },
                            radiusAxis: {
                                zlevel: 0,
                                min: 0,
                                max: 100,
                                axisLabel: {
                                    textStyle: {
                                        color: "rgba(29,208,240,0)"
                                    }
                                },
                                axisLine: {
                                    show: false
                                },
                                splitLine: {
                                    show: false
                                },
                                splitArea: {
                                    show: false
                                }
                            },
                            series: [
                                {
                                    type: "pie",
                                    data: [
                                        {
                                            value: 60.99,
                                            name: "差旅费"
                                        },
                                        {
                                            value: 28.26,
                                            name: "业务招待费"
                                        },
                                        {
                                            value: 1.05,
                                            name: "误餐费"
                                        },
                                        {
                                            value: 2.17,
                                            name: "交通"
                                        }
                                    ],
                                    radius: ["45%", "55%"],
                                    zlevel: -1,
                                    name: "",
                                    itemStyle: {
                                        normal: {
                                            // borderColor: 'white'
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
                                    }
                                },
                                {
                                    type: "radar",
                                    data: [
                                        {
                                            value: [60.99, 28.26, 1.05, 2.17],
                                            name: "指数",
                                            id: [
                                                {value: 60.99, name: "差旅费"},
                                                {value: 28.26, name: "业务招待费"},
                                                {value: 1.05, name: "误餐费"},
                                                {value: 2.17, name: "交通"}
                                            ],
                                            max: 100,
                                            //   label:{
                                            //       show:true,
                                            //   },
                                            areaStyle: {
                                                normal: {
                                                    color: {
                                                        type: "radial",
                                                        x: 0.5,
                                                        y: 0.5,
                                                        r: 0.5,
                                                        colorStops: [
                                                            {
                                                                offset: 0,
                                                                color: "rgba(32,126,255, 0.5)" // 0% 处的颜色
                                                            },
                                                            {
                                                                offset: 1,
                                                                color: "rgba(32,126,255, 0.1)" // 100% 处的颜色
                                                            }
                                                        ],
                                                        global: false // 缺省为 false
                                                    }
                                                }
                                            }
                                        }
                                    ],
                                    zlevel: 2,
                                    z: 4
                                }
                            ]
                        }
                    }
                ],
                EChartsE: [
                    {
                        option: {
                            title: {
                                text: ""
                            },
                            dataZoom: [
                                {
                                    type: "inside"
                                },
                                {
                                    type: "slider"
                                }
                            ],
                            tooltip: {
                                trigger: "axis",
                                formatter: function (val) {
                                    return (
                                        val[0].name +
                                        "月" +
                                        ":" +
                                        "<br>成本:" +
                                        val[0].value / 10000 +
                                        "万元"
                                    );
                                }
                            },
                            grid: {
                                top: "50",
                                right: "40",
                                left: "60",
                                bottom: "60" //图表尺寸大小
                            },
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
                                    },
                                    axisLabel: {
                                        formatter: function (value) {
                                            return value / 10000;
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
                                },
                                {
                                    data: [],
                                    type: "line",
                                    name: "折线图",
                                    // symbol: 'none',
                                    lineStyle: {
                                        color: "#fea2a2",
                                        width: 2,
                                        shadowColor: "rgba(0, 0, 0, 0.3)", //设置折线阴影
                                        shadowBlur: 10,
                                        shadowOffsetY: 10
                                    },
                                    areaStyle: {
                                        normal: {
                                            color: "rgba(0,0,0,0)"
                                        }
                                    }
                                }
                            ]
                        }
                    }
                ],
                EChartsF: [
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
                                        ":<br>利润:" +
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
                                    radius: ["30%", "50%"],
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
                                            length: 10,
                                            length2: 25,
                                            lineStyle: {
                                                width: 1
                                            }
                                        }
                                    },
                                    data: [
                                        {name: "其他", value: 11154551},
                                        {name: "餐饮", value: 54125877},
                                        {name: "超市", value: 65478254},
                                        {name: "品牌餐饮", value: 69874512},
                                        {name: "小吃", value: 12054890}
                                    ]
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
                                        ":<br>利润:" +
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
                                    radius: ["30%", "50%"],
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
                                            length: 10,
                                            length2: 10,
                                            lineStyle: {
                                                width: 1
                                            }
                                        }
                                    },
                                    data: [
                                        {name: "咸宁中心", value: 5114551},
                                        {name: "宜昌中心", value: 2412577},
                                        {name: "黄冈中心", value: 3547824},
                                        {name: "十堰中心", value: 9987512},
                                        {name: "孝感中心", value: 8657941},
                                        {name: "恩施中心", value: 1205890}
                                    ]
                                }
                            ]
                        }
                    }
                ],
                EChartsG: [
                    {
                        option: {
                            title: {
                                text: "",
                                top: 20,
                                left: 20
                            },
                            tooltip: {
                                trigger: "axis",
                                formatter: function (val) {
                                    return (
                                        val[0].name +
                                        ":<br>实际:" +
                                        (val[0].value / 10000).toFixed(2) +
                                        "万元" +
                                        "<br>预算:" +
                                        (val[1].value / 10000).toFixed(2) +
                                        "万元" +
                                        "<br>" +
                                        "执行率:" +
                                        val[2].value +
                                        "%"
                                    );
                                }
                            },
                            grid: {
                                left: "3%",
                                right: "10%",
                                bottom: "3%",
                                containLabel: true
                            },
                            xAxis: {
                                type: "value",
                                splitLine: {
                                    show: false
                                },
                                axisTick: {
                                    show: false
                                },
                                axisLine: {
                                    show: false
                                },
                                axisLabel: {
                                    show: false
                                }
                            },
                            yAxis: {
                                type: "category",
                                data: [
                                    "办公费",
                                    "交通",
                                    "误餐费",
                                    "业务招待费",
                                    "差旅费"
                                ],
                                splitLine: {
                                    show: false
                                },
                                axisTick: {
                                    show: false
                                },
                                axisLine: {
                                    show: false
                                }
                            },
                            series: [
                                {
                                    name: "A门店",
                                    type: "bar",
                                    stack: "总量",
                                    barWidth: 20,
                                    itemStyle: {
                                        normal: {
                                            color: "#379DFB",
                                            barBorderRadius: [5, 5, 5, 5]
                                        }
                                    },
                                    label: {
                                        normal: {
                                            show: false,
                                            color: "#fff",
                                            position: "insideRight"
                                        }
                                    },
                                    z: 10,
                                    data: [0, 34100, 81600, 523600, 866400]
                                },
                                {
                                    name: "B门店",
                                    type: "bar",
                                    stack: "总量",
                                    itemStyle: {
                                        normal: {
                                            color: "#dfe5f1",
                                            shadowBlur: [0, 0, 0, 10],
                                            barBorderRadius: [5, 5, 5, 5]
                                        }
                                    },
                                    label: {
                                        normal: {
                                            show: false,
                                            color: "#000",
                                            position: "insideRight"
                                        }
                                    },
                                    z: 5,
                                    data: [0, 21700, 10500, 282600, 609900]
                                },
                                {
                                    name: "B门店",
                                    type: "bar",
                                    stack: "总量",
                                    itemStyle: {
                                        normal: {
                                            color: "rgba(237,125,49, 0)",
                                            shadowBlur: [0, 0, 0, 10],
                                            barBorderRadius: [5, 5, 5, 5]
                                        }
                                    },
                                    label: {
                                        normal: {
                                            color: "red",
                                            show: true,
                                            position: [10, 5],
                                            formatter: function (params) {
                                                return params.value + "%";
                                            }
                                        }
                                    },
                                    z: 5,
                                    data: ["0", "63.78", "12.90", "53.97", "70.40"]
                                }
                            ]
                        }
                    }
                ],
                EChartsH: [
                    {
                        option: {
                            color: [
                                "#ff9999",
                                "#ffb03f",
                                "#ff9b42",
                                "#3dba2d",
                                "#F0D418",
                                "#2E64FF"
                            ],
                            tooltip: {},
                            formatter: function (val) {
                                if (!val.data.id) {
                                    return (
                                        val.name +
                                        ":<br>实际:" +
                                        val.value +
                                        "万元<br>占比:" +
                                        val.percent +
                                        "%"
                                    );
                                } else {
                                    let datas = val.name + ":<br>";
                                    val.data.id.forEach((item, index) => {
                                        datas +=
                                            item.name + ":" + item.value + "万元<br>";
                                    });
                                    return datas;
                                }
                            },
                            radar: {
                                zlevel: 11,
                                shape: "circle",
                                scale: true,
                                indicator: [
                                    {
                                        name: "差旅费"
                                    },
                                    {
                                        name: "业务招待费"
                                    },
                                    {
                                        name: "误餐费"
                                    },
                                    {
                                        name: "交通"
                                    }
                                ],
                                center: ["50%", "50%"],
                                radius: "40%",
                                startAngle: 40,
                                name: {
                                    show: true,
                                    color: "transparent"
                                },
                                axisLine: {
                                    show: true,
                                    lineStyle: {
                                        color: "rgba(32,126,255, .5)"
                                        // opacity: 0.2
                                    }
                                },
                                splitLine: {
                                    lineStyle: {
                                        color: "rgba(32,126,255, .5)"
                                        // opacity: 0.2
                                    }
                                },
                                splitArea: {
                                    areaStyle: {
                                        color: "rgba(32,126,255, 0.1)"
                                    }
                                }
                            },
                            polar: {
                                radius: "40%"
                            },
                            angleAxis: {
                                zlevel: 0,
                                min: 0,
                                max: 360,
                                interval: 5,
                                clockwise: false,
                                axisTick: {
                                    show: false
                                },
                                axisLabel: {
                                    show: false
                                },
                                axisLine: {
                                    show: false
                                },
                                splitLine: {
                                    show: false
                                }
                            },
                            radiusAxis: {
                                zlevel: 0,
                                min: 0,
                                max: 100,
                                axisLabel: {
                                    textStyle: {
                                        color: "rgba(29,208,240,0)"
                                    }
                                },
                                axisLine: {
                                    show: false
                                },
                                splitLine: {
                                    show: false
                                },
                                splitArea: {
                                    show: false
                                }
                            },
                            series: [
                                {
                                    type: "pie",
                                    data: [
                                        {
                                            value: 86.64,
                                            name: "差旅费"
                                        },
                                        {
                                            value: 52.36,
                                            name: "业务招待费"
                                        },
                                        {
                                            value: 8.16,
                                            name: "误餐费"
                                        },
                                        {
                                            value: 3.41,
                                            name: "交通"
                                        }
                                    ],
                                    radius: ["45%", "55%"],
                                    zlevel: -1,
                                    name: "",
                                    itemStyle: {
                                        normal: {
                                            // borderColor: 'white'
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
                                    }
                                },
                                {
                                    type: "radar",
                                    data: [
                                        {
                                            value: [86.64, 52.36, 8.16, 3.41],
                                            name: "指数",
                                            id: [
                                                {
                                                    value: 86.64,
                                                    name: "差旅费"
                                                },
                                                {
                                                    value: 52.36,
                                                    name: "业务招待费"
                                                },
                                                {
                                                    value: 8.16,
                                                    name: "误餐费"
                                                },
                                                {
                                                    value: 3.41,
                                                    name: "交通"
                                                }
                                            ],
                                            max: 100,
                                            //   label:{
                                            //       show:true,
                                            //   },
                                            areaStyle: {
                                                normal: {
                                                    color: {
                                                        type: "radial",
                                                        x: 0.5,
                                                        y: 0.5,
                                                        r: 0.5,
                                                        colorStops: [
                                                            {
                                                                offset: 0,
                                                                color: "rgba(32,126,255, 0.5)" // 0% 处的颜色
                                                            },
                                                            {
                                                                offset: 1,
                                                                color: "rgba(32,126,255, 0.1)" // 100% 处的颜色
                                                            }
                                                        ],
                                                        global: false // 缺省为 false
                                                    }
                                                }
                                            }
                                        }
                                    ],
                                    zlevel: 2,
                                    z: 4
                                }
                            ]
                        }
                    },
                    {
                        option: {
                            color: [
                                "#ff9999",
                                "#ffb03f",
                                "#ff9b42",
                                "#3dba2d",
                                "#F0D418",
                                "#2E64FF"
                            ],
                            tooltip: {},
                            formatter: function (val) {
                                if (!val.data.id) {
                                    return (
                                        val.name +
                                        ":<br>实际:" +
                                        val.value +
                                        "万元<br>占比:" +
                                        val.percent +
                                        "%"
                                    );
                                } else {
                                    let datas = val.name + ":<br>";
                                    val.data.id.forEach((item, index) => {
                                        datas +=
                                            item.name + ":" + item.value + "万元<br>";
                                    });
                                    return datas;
                                }
                            },
                            radar: {
                                zlevel: 11,
                                shape: "circle",
                                scale: true,
                                indicator: [
                                    {
                                        name: "差旅费"
                                    },
                                    {
                                        name: "业务招待费"
                                    },
                                    {
                                        name: "误餐费"
                                    },
                                    {
                                        name: "交通"
                                    }
                                ],
                                center: ["50%", "50%"],
                                radius: "40%",
                                startAngle: 40,
                                name: {
                                    show: true,
                                    color: "transparent"
                                },
                                axisLine: {
                                    show: true,
                                    lineStyle: {
                                        color: "rgba(32,126,255, .5)"
                                        // opacity: 0.2
                                    }
                                },
                                splitLine: {
                                    lineStyle: {
                                        color: "rgba(32,126,255, .5)"
                                        // opacity: 0.2
                                    }
                                },
                                splitArea: {
                                    areaStyle: {
                                        color: "rgba(32,126,255, 0.1)"
                                    }
                                }
                            },
                            polar: {
                                radius: "40%"
                            },
                            angleAxis: {
                                zlevel: 0,
                                min: 0,
                                max: 360,
                                interval: 5,
                                clockwise: false,
                                axisTick: {
                                    show: false
                                },
                                axisLabel: {
                                    show: false
                                },
                                axisLine: {
                                    show: false
                                },
                                splitLine: {
                                    show: false
                                }
                            },
                            radiusAxis: {
                                zlevel: 0,
                                min: 0,
                                max: 100,
                                axisLabel: {
                                    textStyle: {
                                        color: "rgba(29,208,240,0)"
                                    }
                                },
                                axisLine: {
                                    show: false
                                },
                                splitLine: {
                                    show: false
                                },
                                splitArea: {
                                    show: false
                                }
                            },
                            series: [
                                {
                                    type: "pie",
                                    data: [
                                        {
                                            value: 60.99,
                                            name: "差旅费"
                                        },
                                        {
                                            value: 28.26,
                                            name: "业务招待费"
                                        },
                                        {
                                            value: 1.05,
                                            name: "误餐费"
                                        },
                                        {
                                            value: 2.17,
                                            name: "交通"
                                        }
                                    ],
                                    radius: ["45%", "55%"],
                                    zlevel: -1,
                                    name: "",
                                    itemStyle: {
                                        normal: {
                                            // borderColor: 'white'
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
                                    }
                                },
                                {
                                    type: "radar",
                                    data: [
                                        {
                                            value: [60.99, 28.26, 1.05, 2.17],
                                            name: "指数",
                                            id: [
                                                {value: 60.99, name: "差旅费"},
                                                {value: 28.26, name: "业务招待费"},
                                                {value: 1.05, name: "误餐费"},
                                                {value: 2.17, name: "交通"}
                                            ],
                                            max: 100,
                                            //   label:{
                                            //       show:true,
                                            //   },
                                            areaStyle: {
                                                normal: {
                                                    color: {
                                                        type: "radial",
                                                        x: 0.5,
                                                        y: 0.5,
                                                        r: 0.5,
                                                        colorStops: [
                                                            {
                                                                offset: 0,
                                                                color: "rgba(32,126,255, 0.5)" // 0% 处的颜色
                                                            },
                                                            {
                                                                offset: 1,
                                                                color: "rgba(32,126,255, 0.1)" // 100% 处的颜色
                                                            }
                                                        ],
                                                        global: false // 缺省为 false
                                                    }
                                                }
                                            }
                                        }
                                    ],
                                    zlevel: 2,
                                    z: 4
                                }
                            ]
                        }
                    }
                ],
            };
        },
        methods: {
            async common(param, e1, e2) {
                const d = await this.$axios.get("/api/service/revenue", {params: param})
                const d2 = await this.$axios.get("/api/service/revenue2", {params: param})
                let data = d.data.data;
                let data2 = d2.data.data;
                for (let i = 0; i < 2; i++) {
                    if (!!data[i] && data[i].length > 0) {
                        data[i].forEach(j => {
                            j['name'] = i === 1 ? (j['yAxis']).substring(j['yAxis'].length - 5) : j['yAxis']
                            j['value'] = j['xBxis']
                        })
                    } else {
                        data[i] = [];
                    }
                }
                e1[0].option.series[0].data = this.mySet(data2, 'yAxis')
                e1[0].option.xAxis[0].data = this.mySet(data2, 'xBxis')
                e2[0].option.series[0].data = data[0]
                e2[1].option.series[0].data = data[1]
            }
        },
        async mounted() {
            await this.common({selectYear: 2021, type: 2}, this.EChartsA, this.EChartsB);
            // await this.common({selectYear: 2020, type: 2}, this.EChartsE, this.EChartsF);
            this.childRef(8, 70, this.$refs);
        }
    };
</script>
