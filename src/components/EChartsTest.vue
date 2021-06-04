<template>
    <div class="big">
        <ms-collapse>
            <div slot="content">
                <ms-grid-layout name="基础信息" :columns="1">
                    <children-table-temp title="服务区列表"
                                         :columns="columns"
                                         chooseItem="single"
                                         :gridIndex="false"
                                         :table-data="tableData"
                                         :query="querySearch"
                                         @queryClick="queryClick">
                    </children-table-temp>
                </ms-grid-layout>
                <ms-grid-layout name="运营趋势" :columns="2">
                    <div style="width: 100%;display: flex;flex-direction: row;justify-content: space-between;flex-wrap: wrap">
                        <children-e-charts-temp oid="a"
                                                style="width: 59.5%"
                                                title="接管运营"
                                                :e-charts="EChartsA"
                                                :add-con="addCon">
                        </children-e-charts-temp>
                        <children-e-charts-temp oid="b"
                                                style="width: 39.5%"
                                                title="等级分类占比"
                                                :e-charts="EChartsB">
                        </children-e-charts-temp>
                    </div>
                </ms-grid-layout>
                <ms-grid-layout name="占地面积" :columns="3">
                    <children-e-charts-temp oid="c"
                                            style="width: 100%"
                                            title="占地面积"
                                            :e-charts="EChartsC">
                    </children-e-charts-temp>
                </ms-grid-layout>
                <ms-grid-layout name="经营面积" :columns="4">
                    <children-e-charts-temp oid="d"
                                            style="width: 100%"
                                            title="经营面积"
                                            :e-charts="EChartsD">
                    </children-e-charts-temp>
                </ms-grid-layout>
                <ms-grid-layout name="车流量" :columns="5">
                    <children-e-charts-temp oid="e"
                                            style="width: 100%"
                                            title="月均车流量"
                                            :e-charts="EChartsE">
                    </children-e-charts-temp>
                </ms-grid-layout>
                <ms-grid-layout name="订单数量" :columns="6">
                    <children-e-charts-temp oid="f"
                                            style="width: 100%"
                                            title="订单数量"
                                            :e-charts="EChartsF">
                    </children-e-charts-temp>
                </ms-grid-layout>
                <ms-grid-layout name="客单价" :columns="7">
                    <children-e-charts-temp oid="g"
                                            style="width: 100%"
                                            title="订单金额÷订单数=客单价"
                                            :e-charts="EChartsG">
                    </children-e-charts-temp>
                </ms-grid-layout>
                <ms-grid-layout name="转化率" :columns="8">
                    <children-e-charts-temp oid="h"
                                            style="width: 100%"
                                            title="月订单数量÷月车流量=转化率"
                                            :e-charts="EChartsH">
                    </children-e-charts-temp>
                </ms-grid-layout>
            </div>
        </ms-collapse>
    </div>
</template>

<script>
    import MsCollapse from "./newCommon/MsCollapse";
    import MsGridLayout from "./newCommon/MsGridLayout";
    import ChildrenTableTemp from "./newCommon/childTemp/childrenTableTemp";
    import ChildrenEChartsTemp from "./newCommon/childTemp/childrenEChartsTemp";

    export default {
        name: "EChartsTest",
        components: {ChildrenEChartsTemp, ChildrenTableTemp, MsGridLayout, MsCollapse},
        data() {
            return {
                querySearch: [
                    {type: 'el-input', placeholder: '请输入XXX'},
                    {type: 'el-input', placeholder: '请输入yyy'},
                    {type: 'el-input', placeholder: '请输入zzz'},
                    {type: 'el-date-picker', placeholder: '请选择时间'},
                    {
                        type: 'el-select',
                        placeholder: '请选择XXX',
                        option: [
                            {value: '1', label: 'a'},
                            {value: '2', label: 'b'},
                            {value: '3', label: 'c'},
                        ]
                    },
                ],
                columns: [
                    {prop: "serviceName", label: "服务区名称"},
                    {prop: "B", label: "高速名称"},
                    {
                        prop: "C",
                        label: "车流量(辆)",
                        children: [
                            {prop: "maxcart", label: "大车"},
                            {prop: "mincart", label: "小车"}
                        ]
                    },
                    {prop: "shouyi", label: "收益(元)"},
                    {prop: "G", label: "利润(元)"},
                    {prop: "H", label: "坪效(元)"},
                    {prop: "I", label: "面积(m)"},

                    {
                        prop: "J",
                        label: "业态订单数",
                        children: [
                            {prop: "refuel", label: "加油"},
                            {prop: "snack", label: "小吃"},
                            {prop: "convenience", label: "便利店"},
                            {prop: "catering", label: "餐饮"}
                        ]
                    }
                ],
                tableData: [],
                addCon: [
                    {label: "最高", value: "15个"},
                    {label: "最低", value: "5个"},
                    {label: "平均", value: "8个"},
                ],
                EChartsA: [
                    {
                        option: {
                            grid: {
                                top: "70",
                                right: "60",
                                left: "60",
                                bottom: "30"
                            },
                            tooltip: {
                                trigger: "axis",
                                formatter: "{b} : {c}个"
                            },
                            xAxis: [{
                                name: "月份",
                                type: "category",
                                data: [
                                    "1月",
                                    "2月",
                                    "3月",
                                    "4月",
                                    "5月",
                                    "6月",
                                    "7月",
                                    "8月",
                                    "9月",
                                    "10月",
                                    "11月",
                                    "12月"
                                ],
                                splitLine: {
                                    show: false
                                },
                                axisTick: {
                                    show: false
                                }
                            }],
                            yAxis: [{
                                name: "个",
                                nameTextStyle: {
                                    color: "#000"
                                },
                                type: "value",
                                splitLine: {
                                    show: false
                                },
                                axisTick: {
                                    show: false
                                }
                            }],
                            series: [
                                {
                                    name: "接管运营",
                                    data: [5, 6, 7, 7, 7, 9, 8, 9, 9, 9, 10, 15],
                                    type: "line",
                                    lineStyle: {
                                        color: "#fea528",
                                        width: 2,
                                        shadowColor: "rgba(255,155,53,0.68)", //设置折线阴影
                                        shadowBlur: 10,
                                        shadowOffsetY: 10
                                    }
                                }
                            ]
                        }
                    }
                ],
                EChartsB: [
                    {
                        option: {
                            title: {
                                text: "",
                                left: "43%",
                                top: "48%"
                            },
                            tooltip: {
                                trigger: "item",
                                formatter: "{a} <br/>{b}: {c} ({d}%)"
                            },
                            legend: {
                                orient: "vertical",
                                right: 10,
                                top: "center",
                                data: ["Ⅰ类", "Ⅱ类", "Ⅲ类", "Ⅳ类", "Ⅴ类"]
                            },
                            series: [
                                {
                                    name: "",
                                    type: "pie",
                                    radius: ["50%", "70%"],
                                    avoidLabelOverlap: false,
                                    itemStyle: {
                                        normal: {
                                            color: function (v) {
                                                let colorList = [
                                                    "#fec279",
                                                    "#968af5",
                                                    "#e790e8",
                                                    "#36c78b",
                                                    "#51a3fc"
                                                ];
                                                return colorList[v.dataIndex];
                                            }
                                        }
                                    },
                                    labelLine: {
                                        normal: {
                                            length: 30,
                                            length2: 25,
                                            fontSize: 16,
                                            lineStyle: {
                                                width: 1
                                            }
                                        }
                                    },
                                    data: [
                                        {value: 335, name: "Ⅰ类"},
                                        {value: 310, name: "Ⅱ类"},
                                        {value: 234, name: "Ⅲ类"},
                                        {value: 135, name: "Ⅳ类"},
                                        {value: 1548, name: "Ⅴ类"}
                                    ]
                                }
                            ]
                        }
                    }
                ],
                EChartsC: [
                    {
                        option: {
                            xAxis: [{
                                name: "月份",
                                type: "category",
                                data: [
                                    "1月",
                                    "2月",
                                    "3月",
                                    "4月",
                                    "5月",
                                    "6月",
                                    "7月",
                                    "8月",
                                    "9月",
                                    "10月",
                                    "11月",
                                    "12月"
                                ],

                                splitLine: {
                                    show: false
                                },
                                axisTick: {
                                    show: false
                                }
                            }],
                            grid: {
                                top: "70",
                                right: "60",
                                left: "60",
                                bottom: "30"
                            },
                            tooltip: {
                                trigger: "axis",
                                formatter: "{b} : {c}亩"
                                // axisPointer: {
                                //     type: "shadow"
                                // },
                            },
                            yAxis: [{
                                type: "value",
                                name: "㎡",
                                nameTextStyle: {
                                    color: "#000"
                                },
                                splitLine: {
                                    show: false
                                },
                                axisTick: {
                                    show: false
                                }
                            }],
                            series: [
                                {
                                    name: "占地面积",
                                    data: [
                                        10,
                                        60.56,
                                        150.58,
                                        160.56,
                                        180.54,
                                        180.24,
                                        200.56,
                                        220.64,
                                        220.8,
                                        250.32,
                                        280.56,
                                        283
                                    ],
                                    type: "line",

                                    lineStyle: {
                                        color: "#fea528",
                                        width: 2,
                                        shadowColor: "rgba(255,155,53,0.68)", //设置折线阴影
                                        shadowBlur: 10,
                                        shadowOffsetY: 10
                                    }
                                }
                            ]
                        }
                    }
                ],
                EChartsD: [
                    {
                        option: {
                            xAxis: [{
                                name: "月份",
                                type: "category",
                                data: [
                                    "1月",
                                    "2月",
                                    "3月",
                                    "4月",
                                    "5月",
                                    "6月",
                                    "7月",
                                    "8月",
                                    "9月",
                                    "10月",
                                    "11月",
                                    "12月"
                                ],
                                splitLine: {
                                    show: false
                                },
                                axisTick: {
                                    show: false
                                }
                            }],
                            grid: {
                                top: "70",
                                right: "60",
                                left: "60",
                                bottom: "30"
                            },
                            tooltip: {
                                trigger: "axis",
                                formatter: "{b} : {c}万㎡"
                                // axisPointer: {
                                //     type: "shadow"
                                // },
                            },
                            yAxis: [{
                                name: "㎡",
                                nameTextStyle: {
                                    color: "#000"
                                },
                                type: "value",
                                splitLine: {
                                    show: false
                                },
                                axisTick: {
                                    show: false
                                }
                            }],
                            series: [
                                {
                                    name: "经营面积",
                                    data: [
                                        40,
                                        1100,
                                        2500,
                                        3564,
                                        4586,
                                        6587,
                                        7850,
                                        8854,
                                        8948,
                                        9352,
                                        9854,
                                        9953.64
                                    ],
                                    type: "line",
                                    lineStyle: {
                                        color: "#fea528",
                                        width: 2,
                                        shadowColor: "rgba(255,155,53,0.68)", //设置折线阴影
                                        shadowBlur: 10,
                                        shadowOffsetY: 10
                                    }
                                }
                            ]
                        }
                    }
                ],
                EChartsE: [
                    {
                        option: {
                            xAxis: [{
                                name: "月份",
                                type: "category",
                                data: [
                                    "1月",
                                    "2月",
                                    "3月",
                                    "4月",
                                    "5月",
                                    "6月",
                                    "7月",
                                    "8月",
                                    "9月",
                                    "10月",
                                    "11月",
                                    "12月"
                                ],
                                splitLine: {
                                    show: false
                                },
                                axisTick: {
                                    show: false
                                }
                            }],
                            grid: {
                                top: "70",
                                right: "60",
                                left: "60",
                                bottom: "30"
                            },
                            tooltip: {
                                trigger: "axis",
                                formatter: "{b} : {c}辆"
                                // axisPointer: {
                                //     type: "shadow"
                                // },
                            },
                            yAxis: [{
                                type: "value",
                                name: "辆",
                                nameTextStyle: {
                                    color: "#000"
                                },
                                splitLine: {
                                    show: false
                                },
                                axisTick: {
                                    show: false
                                }
                            }],
                            series: [
                                {
                                    name: "车流量",
                                    data: [
                                        400,
                                        350,
                                        460,
                                        1045,
                                        1580,
                                        1406,
                                        2100,
                                        2600,
                                        621,
                                        2400,
                                        1069,
                                        599
                                    ],
                                    type: "line",
                                    lineStyle: {
                                        color: "#fea528",
                                        width: 2,
                                        shadowColor: "rgba(255,155,53,0.68)", //设置折线阴影
                                        shadowBlur: 10,
                                        shadowOffsetY: 10
                                    }
                                }
                            ]
                        }
                    }
                ],
                EChartsF: [
                    {
                        option: {
                            xAxis: [{
                                name: "月份",
                                type: "category",
                                data: [
                                    "1月",
                                    "2月",
                                    "3月",
                                    "4月",
                                    "5月",
                                    "6月",
                                    "7月",
                                    "8月",
                                    "9月",
                                    "10月",
                                    "11月",
                                    "12月"
                                ],
                                splitLine: {
                                    show: false
                                },
                                axisTick: {
                                    show: false
                                }
                            }],
                            grid: {
                                top: "70",
                                right: "60",
                                left: "60",
                                bottom: "30"
                            },
                            tooltip: {
                                trigger: "axis",
                                formatter: "{b} : {c}单"
                                // axisPointer: {
                                //     type: "shadow"
                                // },
                            },
                            yAxis: [{
                                type: "value",
                                name: "单",
                                nameTextStyle: {
                                    color: "#000"
                                },
                                splitLine: {
                                    show: false
                                },
                                axisTick: {
                                    show: false
                                }
                            }],
                            series: [
                                {
                                    name: "订单数量",
                                    data: [
                                        8700,
                                        7600,
                                        5600,
                                        7600,
                                        5400,
                                        1200,
                                        4300,
                                        3200,
                                        3200,
                                        9300,
                                        6600,
                                        8900
                                    ],
                                    type: "line",
                                    lineStyle: {
                                        color: "#fea528",
                                        width: 2,
                                        shadowColor: "rgba(255,155,53,0.68)", //设置折线阴影
                                        shadowBlur: 10,
                                        shadowOffsetY: 10
                                    }
                                }
                            ]
                        }
                    }
                ],
                EChartsG: [
                    {
                        option: {
                            xAxis: [{
                                name: "月份",
                                type: "category",
                                data: [
                                    "1月",
                                    "2月",
                                    "3月",
                                    "4月",
                                    "5月",
                                    "6月",
                                    "7月",
                                    "8月",
                                    "9月",
                                    "10月",
                                    "11月",
                                    "12月"
                                ],
                                splitLine: {
                                    show: false
                                },
                                axisTick: {
                                    show: false
                                }
                            }],
                            grid: {
                                top: "70",
                                right: "60",
                                left: "60",
                                bottom: "30"
                            },
                            tooltip: {
                                trigger: "axis",
                                formatter: "{b} : {c}元"
                                // axisPointer: {
                                //     type: "shadow"
                                // },
                            },
                            yAxis: [{
                                type: "value",
                                name: "元",
                                nameTextStyle: {
                                    color: "#000"
                                },
                                splitLine: {
                                    show: false
                                },
                                axisTick: {
                                    show: false
                                }
                            }],
                            series: [
                                {
                                    name: "客单价",
                                    data: [
                                        876,
                                        765,
                                        564,
                                        765,
                                        543,
                                        1230,
                                        432,
                                        321,
                                        340,
                                        934,
                                        669,
                                        899
                                    ],
                                    type: "line",
                                    lineStyle: {
                                        color: "#fea528",
                                        width: 2,
                                        shadowColor: "rgba(255,155,53,0.68)", //设置折线阴影
                                        shadowBlur: 10,
                                        shadowOffsetY: 10
                                    }
                                }
                            ]
                        }
                    }
                ],
                EChartsH: [
                    {
                        option: {
                            xAxis: [{
                                name: "月份",
                                type: "category",
                                data: [
                                    "1月",
                                    "2月",
                                    "3月",
                                    "4月",
                                    "5月",
                                    "6月",
                                    "7月",
                                    "8月",
                                    "9月",
                                    "10月",
                                    "11月",
                                    "12月"
                                ],
                                splitLine: {
                                    show: false
                                },
                                axisTick: {
                                    show: false
                                }
                            }],
                            grid: {
                                top: "70",
                                right: "60",
                                left: "60",
                                bottom: "30"
                            },
                            tooltip: {
                                trigger: "axis",
                                formatter: "{b} : {c}%"
                                // axisPointer: {
                                //     type: "shadow"
                                // },
                            },
                            yAxis: [{
                                type: "value",
                                name: "%",
                                nameTextStyle: {
                                    color: "#000"
                                },
                                splitLine: {
                                    show: false
                                },
                                axisTick: {
                                    show: false
                                }
                            }],
                            series: [
                                {
                                    name: "转化率",
                                    data: [
                                        5.2,
                                        4.8,
                                        12.5,
                                        10.3,
                                        10.4,
                                        6.5,
                                        8.5,
                                        9.5,
                                        14.5,
                                        13.5,
                                        15,
                                        13.7
                                    ],
                                    type: "line",
                                    lineStyle: {
                                        color: "#fea528",
                                        width: 2,
                                        shadowColor: "rgba(255,155,53,0.68)", //设置折线阴影
                                        shadowBlur: 10,
                                        shadowOffsetY: 10
                                    }
                                }
                            ]
                        }
                    }
                ],
            }
        },
        methods: {
            queryClick(v) {
                console.log(v);
            }
        }
    }
</script>

<style scoped lang="less">
    .big {
        width: 100%;
        height: 100%;
    }
</style>