<template>
    <div style="width: 100%;height: 100%;">
        <ms-collapse :navIconData="navIconData">
            <div slot="content">
                <ms-grid-layout showName="基础信息" name="孝感基础信息" :columns="1">
                    <children-table-temp title="服务区列表"
                                         url="/basic_first/basic_information_list"
                                         @selection="$router.push('/details/serviceDetails')"
                                         :columns="columns"
                                         chooseItem="single"
                                         :gridIndex="false"
                                         :pagination="true"
                                         :table-data="tableData"
                                         :baseQuery="{companyName:'孝感分公司'}"
                                         :query="querySearch"
                                         @queryClick="queryClick">
                    </children-table-temp>
                    <children-e-charts-temp oid="a"
                                            ref="0"
                                            style="width: 59.5%"
                                            title="接管运营"
                                            :e-charts="EChartsA">
                    </children-e-charts-temp>
                    <children-e-charts-temp oid="b"
                                            ref="1"
                                            style="width: 39.5%"
                                            title="等级分类占比"
                                            :e-charts="EChartsB">
                    </children-e-charts-temp>
                    <children-e-charts-temp oid="c"
                                            ref="2"
                                            style="width: 100%"
                                            title="占地面积"
                                            :e-charts="EChartsC"
                                            :add-con="orderAreaCovered">
                    </children-e-charts-temp>
                    <children-e-charts-temp oid="d"
                                            ref="3"
                                            style="width: 100%"
                                            title="经营面积"
                                            :e-charts="EChartsD"
                                            :add-con="orderBusinessArea">
                    </children-e-charts-temp>
                    <children-e-charts-temp oid="e"
                                            ref="4"
                                            style="width: 100%"
                                            title="月均车流量"
                                            :e-charts="EChartsE"
                                            :add-con="addConCar">
                    </children-e-charts-temp>
                    <children-e-charts-temp oid="f"
                                            ref="5"
                                            style="width: 100%"
                                            title="订单数量"
                                            :add-con="addConOrder"
                                            :e-charts="EChartsF">
                    </children-e-charts-temp>
                    <children-e-charts-temp oid="g"
                                            ref="6"
                                            style="width: 100%"
                                            title="订单金额÷订单数=客单价"
                                            :add-con="addConCustomerPrice"
                                            :e-charts="EChartsG">
                    </children-e-charts-temp>
                    <children-e-charts-temp oid="h"
                                            ref="7"
                                            style="width: 100%"
                                            title="月订单数量÷月车流量=转化率"
                                            :e-charts="EChartsH"
                                            :add-con="addConConversionRate">
                    </children-e-charts-temp>
                </ms-grid-layout>
                <ms-grid-layout showName="营收" name="2020年营收" :columns="2">
                    <children-e-charts-temp oid="i"
                                            ref="8"
                                            style="width: 35%"
                                            title="营收"
                                            :e-charts="EChartsI">
                    </children-e-charts-temp>
                    <children-e-charts-temp oid="j"
                                            ref="9"
                                            style="width: 64.5%"
                                            title="营收占比"
                                            :query="queryRevenue"
                                            :e-charts="EChartsJ">
                    </children-e-charts-temp>
                </ms-grid-layout>
                <ms-grid-layout name="2019年营收" :columns="3">
                    <children-e-charts-temp oid="k"
                                            ref="10"
                                            style="width: 35%"
                                            title="营收"
                                            :e-charts="EChartsI">
                    </children-e-charts-temp>
                    <children-e-charts-temp oid="l"
                                            ref="11"
                                            style="width: 64.5%"
                                            title="营收占比"
                                            :query="queryRevenue"
                                            :e-charts="EChartsJ">
                    </children-e-charts-temp>
                </ms-grid-layout>
                <ms-grid-layout name="查看更多" :columns="4"></ms-grid-layout>
                <ms-grid-layout showName="利润" name="2020年利润" :columns="5">
                    <children-e-charts-temp oid="m"
                                            ref="12"
                                            style="width: 35%"
                                            title="利润"
                                            :e-charts="EChartsM">
                    </children-e-charts-temp>
                    <children-e-charts-temp oid="n"
                                            ref="13"
                                            style="width: 64.5%"
                                            title="利润占比"
                                            :query="queryRevenue"
                                            :e-charts="EChartsN">
                    </children-e-charts-temp>
                </ms-grid-layout>
                <ms-grid-layout name="2019年利润" :columns="6">
                    <children-e-charts-temp oid="o"
                                            ref="14"
                                            style="width: 35%"
                                            title="利润"
                                            :e-charts="EChartsM">
                    </children-e-charts-temp>
                    <children-e-charts-temp oid="p"
                                            ref="15"
                                            style="width: 64.5%"
                                            title="利润占比"
                                            :query="queryRevenue"
                                            :e-charts="EChartsN">
                    </children-e-charts-temp>
                </ms-grid-layout>
                <ms-grid-layout name="查看更多" :columns="7"></ms-grid-layout>
                <ms-grid-layout showName="业态结构" name="2020年业态结构" :columns="8">
                    <children-e-charts-temp oid="q"
                                            ref="16"
                                            style="width: 50%"
                                            title="品牌收入占比"
                                            :e-charts="EChartsO">
                    </children-e-charts-temp>
                    <children-e-charts-temp oid="r"
                                            ref="17"
                                            style="width: 49.5%"
                                            title="品牌经营面积占比"
                                            :e-charts="EChartsP">
                    </children-e-charts-temp>
                    <children-table-temp title="品牌列表"
                                         :columns="columnsBrand"
                                         chooseItem="single"
                                         :gridIndex="false"
                                         :pagination="false"
                                         :table-data="tableData">
                    </children-table-temp>
                    <children-e-charts-temp oid="s"
                                            ref="18"
                                            style="width: 50%"
                                            title="业态分类占比"
                                            :e-charts="EChartsQ">
                    </children-e-charts-temp>
                    <children-e-charts-temp oid="t"
                                            ref="19"
                                            style="width: 49.5%"
                                            title="业态经营面积占比"
                                            :e-charts="EChartsR">
                    </children-e-charts-temp>
                    <children-table-temp title="业态列表"
                                         :columns="columnsBrand"
                                         chooseItem="single"
                                         :gridIndex="false"
                                         :pagination="false"
                                         :table-data="tableData">
                    </children-table-temp>
                </ms-grid-layout>
                <ms-grid-layout name="2019年业态结构" :columns="9">
                    <children-e-charts-temp oid="u"
                                            ref="20"
                                            style="width: 50%"
                                            title="品牌收入占比"
                                            :e-charts="EChartsO">
                    </children-e-charts-temp>
                    <children-e-charts-temp oid="v"
                                            ref="21"
                                            style="width: 49.5%"
                                            title="品牌经营面积占比"
                                            :e-charts="EChartsP">
                    </children-e-charts-temp>
                    <children-table-temp title="品牌列表"
                                         :columns="columnsBrand"
                                         chooseItem="single"
                                         :gridIndex="false"
                                         :pagination="false"
                                         :table-data="tableData">
                    </children-table-temp>
                    <children-e-charts-temp oid="w"
                                            ref="22"
                                            style="width: 50%"
                                            title="业态分类占比"
                                            :e-charts="EChartsQ">
                    </children-e-charts-temp>
                    <children-e-charts-temp oid="x"
                                            ref="23"
                                            style="width: 49.5%"
                                            title="业态经营面积占比"
                                            :e-charts="EChartsR">
                    </children-e-charts-temp>
                    <children-table-temp title="业态列表"
                                         :columns="columnsBrand"
                                         chooseItem="single"
                                         :gridIndex="false"
                                         :pagination="false"
                                         :table-data="tableData">
                    </children-table-temp>
                </ms-grid-layout>
                <ms-grid-layout name="查看更多" :columns="10"></ms-grid-layout>
                <ms-grid-layout showName="回款率" name="2020年回款率" :columns="11">
                    <children-e-charts-temp oid="y"
                                            ref="24"
                                            style="width: 49.5%"
                                            title="回款率"
                                            :e-charts="EChartsS">
                    </children-e-charts-temp>
                    <children-e-charts-temp oid="z"
                                            ref="25"
                                            style="width: 49.5%"
                                            title="回款金额排行"
                                            :e-charts="EChartsT">
                    </children-e-charts-temp>
                    <children-table-temp title="回款超期"
                                         :columns="columnsPayBack"
                                         chooseItem="single"
                                         :gridIndex="false"
                                         :pagination="false"
                                         :table-data="tableData">
                    </children-table-temp>
                    <children-e-charts-temp oid="ab"
                                            ref="26"
                                            style="width: 49.5%"
                                            title="预计收款"
                                            :e-charts="EChartsU">
                    </children-e-charts-temp>
                    <children-e-charts-temp oid="ac"
                                            ref="27"
                                            style="width: 49.5%"
                                            title="回款占比"
                                            :e-charts="EChartsV">
                    </children-e-charts-temp>
                </ms-grid-layout>
                <ms-grid-layout name="2019年回款率" :columns="12">
                    <children-e-charts-temp oid="ad"
                                            ref="28"
                                            style="width: 49.5%"
                                            title="回款率"
                                            :e-charts="EChartsS">
                    </children-e-charts-temp>
                    <children-e-charts-temp oid="ae"
                                            ref="29"
                                            style="width: 49.5%"
                                            title="回款金额排行"
                                            :e-charts="EChartsT">
                    </children-e-charts-temp>
                    <children-table-temp title="回款超期"
                                         :columns="columnsPayBack"
                                         chooseItem="single"
                                         :gridIndex="false"
                                         :pagination="false"
                                         :table-data="tableData">
                    </children-table-temp>
                    <children-e-charts-temp oid="af"
                                            ref="30"
                                            style="width: 49.5%"
                                            title="预计收款"
                                            :e-charts="EChartsU">
                    </children-e-charts-temp>
                    <children-e-charts-temp oid="ag"
                                            ref="31"
                                            style="width: 49.5%"
                                            title="回款占比"
                                            :e-charts="EChartsV">
                    </children-e-charts-temp>
                </ms-grid-layout>
                <ms-grid-layout name="查看更多" :columns="13"></ms-grid-layout>
            </div>
        </ms-collapse>
    </div>
</template>

<script>
    import MsGridLayout from "../../../components/newCommon/MsGridLayout";
    import MsCollapse from "../../../components/newCommon/MsCollapse";
    import ChildrenTableTemp from "../../../components/newCommon/childTemp/childrenTableTemp";
    import ChildrenEChartsTemp from "../../../components/newCommon/childTemp/childrenEChartsTemp";

    export default {
        name: "xiaoGan",
        components: {ChildrenEChartsTemp, ChildrenTableTemp, MsCollapse, MsGridLayout},
        props: {},
        data() {
            return {
                navIconData: [
                    {
                        icon: require("../../../assets/serviceArea/jcxq/jichuxinxi.png"),
                        iconActive: require("../../../assets/serviceArea/jcxq/jichuxinxi1.png"),
                    },
                    {
                        icon: require("../../../assets/serviceArea/jcxq/yingshou.png"),
                        iconActive: require("../../../assets/serviceArea/jcxq/yingshou1.png"),
                    },
                    {
                        icon: require("../../../assets/serviceArea/jcxq/lirun.png"),
                        iconActive: require("../../../assets/serviceArea/jcxq/lirun1.png"),
                    },
                    /* {
                         icon: require("../../../assets/business/icon_3-1.png"),
                         iconActive: require("../../../assets/business/icon_3-2.png"),
                     },*/
                    {
                        icon: require("../../../assets/serviceArea/jcxq/jiegouhua.png"),
                        iconActive: require("../../../assets/serviceArea/jcxq/jiegouhua1.png"),
                    },
                    {
                        icon: require("../../../assets/business/icon_6-1.png"),
                        iconActive: require("../../../assets/business/icon_6-2.png"),
                    },
                    {},
                ],
                addConCar: {},
                addConConversionRate: {},
                addConCustomerPrice: {},
                addConOrder: {},
                orderBusinessArea: {},
                orderAreaCovered: {},
                columns: [
                    {prop: "serviceName", label: "服务区名称"},
                    {prop: "B", label: "高速名称"},
                    {
                        prop: "C",
                        label: "车流量(辆)",
                        children: [
                            {prop: "bigCarNum", label: "大车"},
                            {prop: "smallCarNum", label: "小车"}
                        ]
                    },
                    {prop: "sumMoney", label: "收益(元)"},
                    {prop: "G", label: "利润(元)"},
                    {prop: "H", label: "坪效(元)"},
                    {prop: "I", label: "面积(m)"},

                    {
                        prop: "J",
                        label: "业态订单数",
                        children: [
                            {prop: "refuel", label: "加油"},
                            {prop: "snackNum", label: "小吃"},
                            {prop: "shopNum", label: "便利店"},
                            {prop: "cateringNum", label: "餐饮"}
                        ]
                    }
                ],
                columnsBrand: [
                    {
                        prop: "A",
                        label: "业态结构"
                    },
                    {
                        prop: "B",
                        label: "所在服务区个数"
                    },
                    {
                        prop: "C",
                        label: "经营场所个数"
                    },
                    {
                        prop: "D",
                        label: "占地面积(平方米)"
                    },
                    {
                        prop: "E",
                        label: "订单数"
                    },
                    {
                        prop: "F",
                        label: "收入(元)"
                    },
                    {
                        prop: "G",
                        label: "客单价(元)"
                    },
                    {
                        prop: "H",
                        label: "坪效(元)"
                    },
                    {
                        prop: "I",
                        label: "利润(元)"
                    }
                ],
                columnsPayBack: [
                    {
                        prop: "A",
                        label: "供应商",
                        width: "220"
                    },
                    {
                        prop: "B",
                        label: "回款时间"
                    },
                    {
                        prop: "C",
                        label: "超期时间"
                    },
                    {
                        prop: "D",
                        label: "金额(元)",
                        width: "120"
                    }
                ],
                querySearch: [
                    {type: 'el-date-picker', code: 'c', placeholder: '请选择时间'},
                ],
                queryRevenue: [
                    {type: 'el-date-picker', code: 'c', placeholder: '请选择时间'},
                ],
                tableData: [],
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
                                    data: [],
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
                                    data: [],
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
                                data: [],
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
                                    data: [],
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
                                data: [],
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
                                    data: [],
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
                                data: [],
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
                                    data: [],
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
                                data: [],
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
                                    data: [],
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
                EChartsI: [
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
                                        "<br />营收:" +
                                        val[0].value / 10000 +
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
                EChartsJ: [
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
                                    data: [
                                        {name: "其他", value: 11154551},
                                        {name: "餐饮", value: 54125877},
                                        {name: "超市", value: 65478254},
                                        {name: "品牌餐饮", value: 69874512},
                                        {name: "小龙虾", value: 36578941},
                                        {name: "小吃", value: 12054890}
                                    ]
                                }
                            ]
                        },

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
                EChartsM: [
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
                                        "<br />利润:" +
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
                                        35867750.94,
                                        65867750.94,
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
                            ]
                        }

                    }
                ],
                EChartsN: [
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
                                            length: 30,
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
                    },
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
                                                return text;
                                            },
                                            textStyle: {
                                                fontSize: 14
                                            }
                                        }
                                    },
                                    labelLine: {
                                        normal: {
                                            length: 30,
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
                                        {name: "小龙虾", value: 36578941},
                                        {name: "小吃", value: 12054890}
                                    ]
                                }
                            ]
                        }
                    }
                ],
                EChartsO: [
                    {
                        option: {
                            title: {
                                text: "",
                                top: "43%",
                                left: "55%",
                                textStyle: {
                                    fontSize: 16
                                },
                                subtext: "",
                                subtextStyle: {
                                    fontSize: 20,
                                    color: "#F98B2F",
                                    fontWeight: "bolder"
                                }
                            },
                            grid: {
                                top: "20%",
                                right: "40",
                                left: "60",
                                bottom: "40" //图表尺寸大小
                            },
                            legend: {
                                orient: "vertical",
                                top: "center",
                                left: 100,
                                // padding:['1000px','100px','10px','10px']
                                itemGap: 25
                            },
                            tooltip: {
                                trigger: "item",
                                formatter: "{b}:{c}: ({d}%)"
                            },
                            series: [
                                {
                                    type: "pie",
                                    center: ["60%", "50%"],
                                    radius: ["35%", "55%"],
                                    clockwise: true,
                                    avoidLabelOverlap: true,
                                    hoverOffset: 15,
                                    itemStyle: {
                                        normal: {
                                            borderWidth: 0,
                                            borderColor: "rgba(255,255,255,0)",
                                            shadowBlur: 20,
                                            shadowColor: "rgba(57,39,132,0.3)",
                                            shadowOffsetX: -5,
                                            shadowOffsetY: -5,
                                            color: function (params) {
                                                let colorList = [
                                                    "#fec279",
                                                    "#968af5",
                                                    "#e790e8"
                                                ];
                                                return colorList[params.dataIndex];
                                            }
                                        },
                                        emphasis: {
                                            borderWidth: 10
                                        }
                                    },
                                    label: {
                                        show: true,
                                        position: "outer",
                                        width: 0,
                                        height: 0,
                                        lineHeight: 0,
                                        backgroundColor: "auto",
                                        padding: [0, -100, 25, -100],
                                        borderRadius: 2,
                                        distanceToLabelLine: 0,
                                        normal: {
                                            formatter(v) {
                                                return (
                                                    "{name|" +
                                                    v.name +
                                                    "}\n{value|" +
                                                    v.percent +
                                                    "}"
                                                );
                                            },
                                            textStyle: {
                                                fontSize: 16
                                            },
                                            rich: {
                                                name: {
                                                    fontSize: 14,
                                                    padding: [0, 10, 0, 4]
                                                },
                                                value: {
                                                    fontSize: 16
                                                }
                                            }
                                        }
                                    },
                                    labelLine: {
                                        normal: {
                                            length: 35,
                                            length2: 35,
                                            lineStyle: {
                                                width: 1.5
                                            }
                                        }
                                    },
                                    data: [
                                        {
                                            name: "一线品牌",
                                            value: 1.45
                                        },
                                        {
                                            name: "二线品牌",
                                            value: 2.93
                                        },
                                        {
                                            name: "无品牌",
                                            value: 3.15
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                ],
                EChartsP: [
                    {
                        option: {
                            legend: {
                                orient: "vertical",
                                top: "center",
                                left: 10,
                                itemGap: 25
                            },
                            tooltip: {
                                formatter: "{b}:{c}: ({d}%)"
                            },

                            series: [
                                {
                                    name: "整体分类",
                                    type: "pie",
                                    radius: [0, "30%"],
                                    center: ["50%", "55%"],
                                    label: {
                                        position: "inner",
                                        textStyle: {
                                            fontSize: 16
                                        }
                                    },
                                    itemStyle: {
                                        normal: {
                                            borderColor: "#fff",
                                            borderWidth: 2,
                                            color: function (params) {
                                                let colorList = [
                                                    "#fec279",
                                                    "#968af5",
                                                    "#e790e8"
                                                ];
                                                return colorList[params.dataIndex];
                                            }
                                        }
                                    },
                                    selectedMode: "single",
                                    data: [
                                        {
                                            value: 875,
                                            name: "特色"
                                        },
                                        {
                                            value: 1239,
                                            name: "传统"
                                        },
                                        {
                                            value: 1239,
                                            name: "品牌"
                                        }
                                    ]
                                },
                                {
                                    name: "招标方式",
                                    type: "pie",
                                    center: ["50%", "55%"],
                                    radius: ["40%", "55%"],
                                    itemStyle: {
                                        normal: {
                                            color: function (params) {
                                                let colorList = [
                                                    "#fec279",
                                                    "#968af5",
                                                    "#e790e8"
                                                ];
                                                return colorList[params.dataIndex];
                                            }
                                        }
                                    },
                                    labelLine: {
                                        normal: {
                                            length: 30,
                                            length2: 30,
                                            lineStyle: {
                                                width: 1
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
                                                return text;
                                            },
                                            textStyle: {
                                                fontSize: 16
                                            }
                                        }
                                    },

                                    data: [
                                        {
                                            value: 875,
                                            name: "特色",
                                            type: "特色"
                                        },
                                        {
                                            value: 1239,
                                            name: "传统",
                                            type: "传统"
                                        },
                                        {
                                            value: 1239,
                                            name: "品牌",
                                            type: "品牌"
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                ],
                EChartsQ: [
                    {
                        option: {
                            title: {
                                text: "",
                                top: "43%",
                                left: "55%",
                                textStyle: {
                                    fontSize: 16
                                },
                                subtext: "",
                                subtextStyle: {
                                    fontSize: 20,
                                    color: "#F98B2F",
                                    fontWeight: "bolder"
                                }
                            },
                            grid: {
                                top: "20%",
                                right: "40",
                                left: "60",
                                bottom: "40" //图表尺寸大小
                            },
                            legend: {
                                orient: "vertical",
                                top: "center",
                                left: 100,
                                // padding:['1000px','100px','10px','10px']
                                itemGap: 25
                            },
                            tooltip: {
                                trigger: "item",
                                formatter: "{b}:{c}: ({d}%)"
                            },
                            series: [
                                {
                                    type: "pie",
                                    center: ["60%", "50%"],
                                    radius: ["35%", "55%"],
                                    clockwise: true,
                                    avoidLabelOverlap: true,
                                    hoverOffset: 15,
                                    itemStyle: {
                                        normal: {
                                            borderWidth: 0,
                                            borderColor: "rgba(255,255,255,0)",
                                            shadowBlur: 20,
                                            shadowColor: "rgba(57,39,132,0.3)",
                                            shadowOffsetX: -5,
                                            shadowOffsetY: -5,
                                            color: function (params) {
                                                let colorList = [
                                                    "#4ecb73",
                                                    "#73acff",
                                                    "#fd8a2d",
                                                    "#9e87ff"
                                                ];
                                                return colorList[params.dataIndex];
                                            }
                                        },
                                        emphasis: {
                                            borderWidth: 10
                                        }
                                    },
                                    label: {
                                        show: true,
                                        position: "outer",
                                        width: 0,
                                        height: 0,
                                        lineHeight: 0,
                                        backgroundColor: "auto",
                                        padding: [0, -100, 25, -100],
                                        borderRadius: 2,
                                        distanceToLabelLine: 0,
                                        normal: {
                                            formatter(v) {
                                                return (
                                                    "{name|" +
                                                    v.name +
                                                    "}\n{value|" +
                                                    v.percent +
                                                    "}"
                                                );
                                            },
                                            textStyle: {
                                                fontSize: 16
                                            },
                                            rich: {
                                                name: {
                                                    fontSize: 14,
                                                    padding: [0, 10, 0, 4]
                                                },
                                                value: {
                                                    fontSize: 16
                                                }
                                            }
                                        }
                                    },
                                    labelLine: {
                                        normal: {
                                            length: 35,
                                            length2: 35,
                                            lineStyle: {
                                                width: 1.5
                                            }
                                        }
                                    },
                                    data: [
                                        {
                                            name: "便利店",
                                            value: 1.45
                                        },
                                        {
                                            name: "特产",
                                            value: 2.93
                                        },
                                        {
                                            name: "小吃",
                                            value: 3.15
                                        },
                                        {
                                            name: "餐饮",
                                            value: 3.15
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                ],
                EChartsR: [
                    {
                        option: {
                            title: {
                                text: "",
                                left: "45%",
                                top: "50%"
                            },
                            legend: {
                                orient: "vertical",
                                top: "center",
                                left: 10,
                                itemGap: 25
                            },
                            tooltip: {
                                formatter: "{b}:{c}: ({d}%)"
                            },

                            series: [
                                {
                                    name: "招标方式",
                                    type: "pie",
                                    center: ["50%", "55%"],
                                    radius: ["40%", "55%"],
                                    itemStyle: {
                                        normal: {
                                            color: function (params) {
                                                let colorList = [
                                                    "#4ecb73",
                                                    "#73acff",
                                                    "#fd8a2d",
                                                    "#9e87ff"
                                                ];
                                                return colorList[params.dataIndex];
                                            }
                                        }
                                    },
                                    labelLine: {
                                        normal: {
                                            length: 30,
                                            length2: 30,
                                            lineStyle: {
                                                width: 1
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
                                                return text;
                                            },
                                            textStyle: {
                                                fontSize: 16
                                            }
                                        }
                                    },

                                    data: [
                                        {
                                            value: 875,
                                            name: "便利店",
                                            type: "便利店"
                                        },
                                        {
                                            value: 1239,
                                            name: "餐饮",
                                            type: "餐饮"
                                        },
                                        {
                                            value: 1239,
                                            name: "特产",
                                            type: "特产"
                                        },
                                        {
                                            value: 1239,
                                            name: "小吃",
                                            type: "小吃"
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                ],
                EChartsS: [
                    {
                        option: {
                            tooltip: {
                                trigger: "axis",
                                axisPointer: {
                                    lineStyle: {
                                        color: {
                                            type: "linear",
                                            x: 0,
                                            y: 0,
                                            x2: 0,
                                            y2: 1,
                                            colorStops: [
                                                {
                                                    offset: 0,
                                                    color: "rgba(0, 255, 233,0)"
                                                },
                                                {
                                                    offset: 0.5,
                                                    color: "rgba(0, 0, 0,1)"
                                                },
                                                {
                                                    offset: 1,
                                                    color: "rgba(0, 255, 233,0)"
                                                }
                                            ],
                                            global: false
                                        }
                                    }
                                },
                                formatter: function (val) {
                                    return (
                                        val[0].name +
                                        ":<br>" +
                                        val[0].seriesName +
                                        ":" +
                                        val[0].value +
                                        "%<br>" +
                                        val[1].seriesName +
                                        ":" +
                                        val[1].value +
                                        "%"
                                    );
                                }
                            },
                            xAxis: {
                                splitLine: {
                                    show: false
                                },
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
                                ]
                            },
                            legend: {
                                data: ["整体回款率", "服务区回款率"]
                            },
                            yAxis: {
                                name: "%",
                                nameTextStyle: {
                                    color: "#000"
                                },
                                splitLine: {
                                    show: false
                                },
                                type: "value"
                            },
                            series: [
                                {
                                    name: "服务区回款率",
                                    data: [
                                        22,
                                        18,
                                        19,
                                        23,
                                        29,
                                        33,
                                        31,
                                        20,
                                        15,
                                        19,
                                        33,
                                        41
                                    ],
                                    type: "line"
                                },
                                {
                                    name: "整体回款率",
                                    data: [
                                        52,
                                        38,
                                        29,
                                        53,
                                        49,
                                        43,
                                        81,
                                        40,
                                        65,
                                        49,
                                        53,
                                        71
                                    ],
                                    type: "line"
                                }
                            ]
                        }
                    }
                ],
                EChartsT: [
                    {
                        option: {
                            tooltip: {
                                trigger: "axis",
                                axisPointer: {
                                    type: "shadow"
                                },
                                formatter: "{b}<br>金额:{c}万元"
                            },
                            grid: {
                                left: "3%",
                                right: "10%",
                                bottom: "10%",
                                top: "10%",
                                containLabel: true
                            },
                            xAxis: {
                                type: "value",
                                name: "万元",
                                nameTextStyle: {
                                    color: "#000"
                                },
                                boundaryGap: [0, 0.01]
                            },

                            yAxis: {
                                type: "category",
                                axisLine: {show: false},
                                axisLabel: {show: false},
                                axisTick: {show: false},
                                splitLine: {show: false},
                                data: [
                                    "湖北长江路桥股份有限公司枣潜高速公路第七标段项目经理部",
                                    "应收稻谷款(加工厂)",
                                    "应收大米款（加工厂）",
                                    "茂名市金瑞粮油贸易有限公司",
                                    "湖北省羊肚菌农业科技有限公司"
                                ]
                            },
                            series: [
                                {
                                    type: "bar",
                                    label: {
                                        show: true,
                                        position: "insideLeft",
                                        color: "#000",
                                        formatter: "{b}"
                                    },
                                    data: (function () {
                                        let data = [
                                            29348333.33,
                                            33032530.21,
                                            35496337.3,
                                            49985731.14,
                                            87860562.51
                                        ];
                                        let datas = [];
                                        data.forEach(element => {
                                            datas.push((element / 10000).toFixed(2));
                                        });

                                        return datas;
                                    })(),
                                    itemStyle: {
                                        color: "#38d"
                                    }
                                }
                            ]
                        }
                    }
                ],
                EChartsU: [
                    {
                        option: {
                            title: {
                                text: ""
                            },
                            tooltip: {
                                //提示框组件
                                trigger: "axis",
                                formatter: function (val) {

                                    let val0 = val[0];
                                    let val1 = val[1];
                                    return (
                                        val0.name +
                                        ":<br>" +
                                        val0.seriesName +
                                        ":" +
                                        val0.value.toFixed(2) +
                                        "万元<br>" +
                                        val1.seriesName +
                                        ":" +
                                        val1.value.toFixed(2) +
                                        "万元"
                                    );
                                },
                                axisPointer: {
                                    type: "shadow",
                                    label: {
                                        backgroundColor: "#6a7985"
                                    }
                                },
                                textStyle: {
                                    color: "#fff",
                                    fontStyle: "normal",
                                    fontFamily: "微软雅黑",
                                    fontSize: 12
                                }
                            },
                            grid: {
                                left: "10%",
                                right: "10%",
                                bottom: "10%",
                                top: "20%",
                                //	padding:'0 0 10 0',
                                containLabel: true
                            },
                            legend: {
                                top: "1%",
                                textStyle: {
                                    color: "#a4a8b4"
                                }
                            },
                            xAxis: [
                                {
                                    type: "category",
                                    //	boundaryGap: true,//坐标轴两边留白
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
                                    axisLabel: {
                                        //坐标轴刻度标签的相关设置。
                                        //		interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
                                        //	margin:15,
                                        // textStyle: {
                                        //     color: "#c8c9c9",
                                        //     fontStyle: "normal",
                                        //     fontFamily: "微软雅黑",
                                        //     fontSize: 12,
                                        // },
                                        // rotate: 50,
                                    },
                                    axisTick: {
                                        //坐标轴刻度相关设置。
                                        show: true
                                    },
                                    axisLine: {
                                        //坐标轴轴线相关设置
                                        lineStyle: {
                                            // color: "#c8c9c9",
                                            opacity: 1
                                        }
                                    },
                                    splitLine: {
                                        //坐标轴在 grid 区域中的分隔线。
                                        show: false
                                    }
                                },
                                {
                                    type: "value",
                                    max:
                                        [
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
                                        ].length * 100,
                                    show: false
                                }
                            ],
                            yAxis: [
                                {
                                    type: "value",
                                    name: "万元",
                                    nameTextStyle: {
                                        color: "#000"
                                    },
                                    splitNumber: 5,
                                    // axisLabel: {
                                    //     textStyle: {
                                    //         // color: "#c8c9c9",
                                    //         fontStyle: "normal",
                                    //         fontFamily: "微软雅黑",
                                    //         fontSize: 12,
                                    //     },
                                    // },
                                    axisLine: {
                                        show: true
                                    },
                                    axisTick: {
                                        show: true
                                    },
                                    splitLine: {
                                        show: true,
                                        lineStyle: {
                                            color: ["#fff"],
                                            opacity: 0.06
                                        }
                                    }
                                }
                            ],
                            series: [
                                {
                                    name: "应收",
                                    type: "bar",
                                    data: [
                                        6200,
                                        8000,
                                        8000,
                                        6200,
                                        6000,
                                        5500,
                                        4500,
                                        3000,
                                        1500,
                                        1060,
                                        5500,
                                        4500,
                                        3000,
                                        1500,
                                        1000
                                    ],
                                    barWidth: 12,
                                    barCategoryGap: 50,
                                    itemStyle: {
                                        normal: {
                                            show: true,
                                            color: "#3aa1ff",
                                            barBorderRadius: 50,
                                            borderWidth: 0
                                        }
                                    }
                                },
                                {
                                    name: "未收",
                                    type: "bar",
                                    data: [
                                        2200,
                                        3000,
                                        5000,
                                        3200,
                                        4000,
                                        3500,
                                        3500,
                                        1000,
                                        500,
                                        900,
                                        2500,
                                        3500,
                                        2200,
                                        1500,
                                        500
                                    ],
                                    barWidth: 12,
                                    barCategoryGap: 50,
                                    itemStyle: {
                                        normal: {
                                            show: true,
                                            color: "#fc5ea9",
                                            barBorderRadius: 50,
                                            borderWidth: 0
                                        }
                                    }
                                }
                            ]
                        }
                    }
                ],
                EChartsV: [
                    {
                        option: {
                            title: [
                                {
                                    text: "",
                                    // top: 15,
                                    // left: 20,
                                    x: "36%",
                                    y: "47%",
                                    textStyle: {
                                        fontSize: 16
                                    }
                                }
                            ],
                            grid: {
                                top: "20%",
                                right: "40",
                                left: "60",
                                bottom: "40" //图表尺寸大小
                            },
                            legend: {
                                orient: "vertical",
                                right: "10%",
                                top: "20%"
                            },
                            tooltip: {
                                trigger: "item",
                                formatter: "{b}: {c}万元 ({d}%)"
                            },
                            series: [
                                {
                                    type: "pie",
                                    center: ["40%", "50%"],
                                    radius: ["35%", "55%"],
                                    clockwise: true,
                                    avoidLabelOverlap: true,
                                    hoverOffset: 15,
                                    itemStyle: {
                                        normal: {
                                            color: function (params) {
                                                var colorList = [
                                                    "#73ddff",
                                                    "#73acff",
                                                    "#9e87ff",
                                                    "#ff3976",
                                                    "#2ccc44",
                                                    "#ffbc32",
                                                    "#fd866a",
                                                    "#1ca7ff"
                                                ];
                                                return colorList[params.dataIndex];
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
                                                return text;
                                            },
                                            textStyle: {
                                                fontSize: 16
                                            }
                                        }
                                    },
                                    labelLine: {
                                        normal: {
                                            length: 30,
                                            length2: 30,
                                            lineStyle: {
                                                width: 1
                                            }
                                        }
                                    },
                                    data: [
                                        {
                                            name: "A供应商",
                                            value: 1.45
                                        },
                                        {
                                            name: "B供应商",
                                            value: 2.93
                                        },
                                        {
                                            name: "C供应商",
                                            value: 3.15
                                        },
                                        {
                                            name: "D供应商",
                                            value: 3.15
                                        },
                                        {
                                            name: "E供应商",
                                            value: 3.15
                                        },
                                        {
                                            name: "F供应商",
                                            value: 3.15
                                        },
                                        {
                                            name: "H供应商",
                                            value: 3.15
                                        },
                                        {
                                            name: "其他",
                                            value: 3.15
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                ],
            }
        },
        methods: {
            queryClick() {
            },
            /**
             * @param d 数据源
             * @param c1 需要提取的参数一
             * @param c2 需要提取的参数二
             * @param formula 需要提取的参数二
             * @param u 单位
             * */
            getData(d, c1, c2, formula, u) {
                let c1_arr = [];
                let c2_arr = [];
                let unit = {
                    h: '时',
                    d: '天',
                    m: '月',
                    y: '年'
                };
                let au = unit[u];
                d.forEach(i => {
                    c1_arr.push(parseInt(i[c1]) + au);
                    if (formula && formula.length > 0) {
                        let serviceNum = formula[parseInt(i["xBxis"]) - 1]["yAxis"];
                        c2_arr.push((Number(i[c2]) / serviceNum).toFixed(0));
                    } else {
                        c2_arr.push(Number(i[c2]));
                    }
                });
                return [c1_arr, c2_arr]
            }
        },
        async mounted() {
            let params = {
                corporateName: "孝感分公司",
                selectYear: "2021",
            };
            const res = await this.$axios["get"]("/api/basic/basic_information_list", {params: params});
            let data = res.data.data;
            //接管运营 mothAndService
            this.EChartsA[0].option.series[0].data = data["mothAndService"];
            //等级分类占比 levelAndNUM
            data["levelAndNUM"].forEach((x, i) => {
                this.EChartsB[0].option.series[0].data[i]['value'] = x;
            });
            //monthAndCarNum 月均车流量
            //maxMinAvgCarNum 最高最低平均 车流量
            let carNum = this.getData(data['monthAndCarNum'], "xBxis", "yAxis", data["monthAndServiceNum"], 'm');
            this.addConCar = data["maxMinAvgCarNum"];
            this.EChartsE[0].option.xAxis[0].data = carNum[0];
            this.EChartsE[0].option.series[0].data = carNum[1];
            //mothAndChange 转化率
            //maxMinAvgChangeNum 最高最低平均 转化率
            let conversionRateNum = this.getData(data['mothAndChange'], "xBxis", "yAxis", '', 'm');
            this.addConConversionRate = data["maxMinAvgChangeNum"];
            this.EChartsH[0].option.xAxis[0].data = conversionRateNum[0];
            this.EChartsH[0].option.series[0].data = conversionRateNum[1];
            //mothAndOnePriceNum 客单价
            //maxMinAvgOnePriceNum 最高最低平均 客单价
            let customerPrice = this.getData(data['mothAndOnePriceNum'], "xBxis", "yAxis", '', 'm');
            this.addConCustomerPrice = data["maxMinAvgOnePriceNum"];
            this.EChartsG[0].option.xAxis[0].data = customerPrice[0];
            this.EChartsG[0].option.series[0].data = customerPrice[1];
            //mothAndOrderNum 订单数量
            //maxMinAvgOrderNum 最高最低平均 订单数量
            let orderNum = this.getData(data['mothAndOrderNum'], "xBxis", "yAxis", '', 'm');
            this.addConOrder = data["maxMinAvgOrderNum"];
            this.EChartsF[0].option.xAxis[0].data = orderNum[0];
            this.EChartsF[0].option.series[0].data = orderNum[1];
            //列表
            this.tableData = data["basicInformationList"];
            //占地面积 maxMinAvgAreaCovered 最大最小
            //占地面积 mothAndAreaCovered
            let AreaCovered = this.getData(data['mothAndAreaCovered'], "xBxis", "yAxis", '', 'm');
            this.orderAreaCovered = data["maxMinAvgAreaCovered"];
            this.EChartsC[0].option.xAxis[0].data = AreaCovered[0];
            this.EChartsC[0].option.series[0].data = AreaCovered[1];
            //经营面积 maxMinAvgBusinessArea 最大最小
            //经营面积 mothAndBusinessArea
            let businessArea = this.getData(data['mothAndBusinessArea'], "xBxis", "yAxis", '', 'm');
            this.orderBusinessArea = data["maxMinAvgBusinessArea"];
            this.EChartsD[0].option.xAxis[0].data = businessArea[0];
            this.EChartsD[0].option.series[0].data = businessArea[1];
            this.childRef(32, 10, this.$refs);
        }
    };
</script>
