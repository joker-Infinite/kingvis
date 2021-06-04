<template>
    <div style="width: 100%;height: 100%;">
        <div class="selectYear">
            <el-select v-model="year" filterable disabled>
                <el-option v-for="i in 6" :key="i" :value="2014+i" :label="2014+i"></el-option>
            </el-select>
        </div>
        <div style="clear: both"></div>
        <ms-collapse :navIconData="navIconData">
            <div slot="content">
                <ms-grid-layout showName="基础信息" name="基础信息" :columns="1">
                    <children-table-temp title="服务区列表"
                                         url="/basic/basic_first_list"
                                         @selection="$router.push('/details/serviceDetails')"
                                         :columns="columns"
                                         chooseItem="single"
                                         :gridIndex="false"
                                         :pagination="false"
                                         :table-data="tableData"
                                         :query="querySearch"
                                         :year="year"
                                         @queryClick="queryClick">
                    </children-table-temp>
                </ms-grid-layout>
                <ms-grid-layout showName="运营趋势" name="运营趋势" :columns="2">
                    <div style="width: 100%;display: flex;flex-direction: row;justify-content: space-between;flex-wrap: wrap">
                        <children-e-charts-temp oid="a"
                                                ref="1"
                                                style="width: 59.5%"
                                                title="接管运营"
                                                :e-charts="EChartsA">
                        </children-e-charts-temp>
                        <children-e-charts-temp oid="b"
                                                ref="2"
                                                style="width: 39.5%"
                                                title="等级分类占比"
                                                :e-charts="EChartsB">
                        </children-e-charts-temp>
                    </div>
                </ms-grid-layout>
                <ms-grid-layout showName="占地面积" name="占地面积" :columns="3">
                    <children-e-charts-temp oid="c"
                                            ref="3"
                                            style="width: 100%"
                                            title="占地面积"
                                            :e-charts="EChartsC"
                                            :add-con="orderAreaCovered">
                    </children-e-charts-temp>
                </ms-grid-layout>
                <ms-grid-layout showName="经营面积" name="经营面积" :columns="4">
                    <children-e-charts-temp oid="d"
                                            ref="4"
                                            style="width: 100%"
                                            title="经营面积"
                                            :e-charts="EChartsD"
                                            :add-con="orderBusinessArea">
                    </children-e-charts-temp>
                </ms-grid-layout>
                <ms-grid-layout showName="车流量" name="车流量" :columns="5">
                    <children-e-charts-temp oid="e"
                                            ref="5"
                                            style="width: 100%"
                                            title="月均车流量"
                                            :e-charts="EChartsE"
                                            :add-con="addConCar">
                    </children-e-charts-temp>
                </ms-grid-layout>
                <ms-grid-layout showName="订单数量" name="订单数量" :columns="6">
                    <children-e-charts-temp oid="f"
                                            ref="6"
                                            style="width: 100%"
                                            title="订单数量"
                                            :add-con="addConOrder"
                                            :e-charts="EChartsF">
                    </children-e-charts-temp>
                </ms-grid-layout>
                <ms-grid-layout showName="客单价" name="客单价" :columns="7">
                    <children-e-charts-temp oid="g"
                                            ref="7"
                                            style="width: 100%"
                                            title="订单金额÷订单数=客单价"
                                            :add-con="addConCustomerPrice"
                                            :e-charts="EChartsG">
                    </children-e-charts-temp>
                </ms-grid-layout>
                <ms-grid-layout showName="转化率" name="转化率" :columns="8">
                    <children-e-charts-temp oid="h"
                                            ref="8"
                                            style="width: 100%"
                                            title="月订单数量÷月车流量=转化率"
                                            :e-charts="EChartsH"
                                            :add-con="addConConversionRate">
                    </children-e-charts-temp>
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

    export default {
        name: "basicInformation",
        components: {ChildrenTableTemp, ChildrenEChartsTemp, MsGridLayout, MsCollapse},
        data() {
            return {
                year: 2021,
                navIconData: [
                    {
                        icon: require("../../../assets/serviceArea/jcxx/jichuxinxi.png"),
                        iconActive: require("../../../assets/serviceArea/jcxx/jichuxinxi1.png")
                    },
                    {
                        icon: require("../../../assets/serviceArea/jcxx/yunyingqushi.png"),
                        iconActive: require("../../../assets/serviceArea/jcxx/yunyingqushi1.png")
                    },
                    {
                        icon: require("../../../assets/serviceArea/jcxx/zhandimianji.png"),
                        iconActive: require("../../../assets/serviceArea/jcxx/zhandimianji1.png")
                    },
                    {
                        icon: require("../../../assets/serviceArea/jcxx/jingyingmianiji.png"),
                        iconActive: require("../../../assets/serviceArea/jcxx/jingyingmianiji1.png")
                    },
                    {
                        icon: require("../../../assets/serviceArea/jcxx/cheliuliang.png"),
                        iconActive: require("../../../assets/serviceArea/jcxx/cheliuliang1.png")
                    },
                    {
                        icon: require("../../../assets/serviceArea/jcxx/dingdan.png"),
                        iconActive: require("../../../assets/serviceArea/jcxx/dingdan1.png")
                    },
                    {
                        icon: require("../../../assets/serviceArea/jcxx/kedanjia.png"),
                        iconActive: require("../../../assets/serviceArea/jcxx/kedanjia1.png")
                    },
                    {
                        icon: require("../../../assets/serviceArea/jcxx/zhuanhuanlv.png"),
                        iconActive: require("../../../assets/serviceArea/jcxx/zhuanhuanlv1.png")
                    },
                ],
                addConCar: {},
                addConConversionRate: {},
                addConCustomerPrice: {},
                addConOrder: {},
                orderBusinessArea: {},
                orderAreaCovered: {},
                querySearch: [
                    {
                        type: 'el-input',
                        code: 'serviceName',
                        placeholder: '请输入服务区',
                    },
                    {
                        type: 'el-select',
                        code: 'companyName',
                        placeholder: '请选择分公司',
                        option: []
                    },
                    {type: 'el-date-picker', code: 'time', placeholder: '请选择时间'},
                ],
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
                    {prop: "pingXiao", label: "坪效(元)"},
                    {prop: "area", label: "面积(m)"},

                    {
                        prop: "J",
                        label: "业态订单数",
                        children: [
                            {prop: "stationOrderNum", label: "加油"},
                            {prop: "snackNum", label: "小吃"},
                            {prop: "shopNum", label: "便利店"},
                            {prop: "cateringNum", label: "餐饮"}
                        ]
                    }
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
                                data: []
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
                                    data: []
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
                ]
            }
        },
        methods: {
            queryClick(v) {
                console.log(v);
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
                selectYear: "2021",
            };
            const res = await this.$axios["get"]("/api/basic/basic_information_list", {params: params});
            let data = res.data.data;
            //接管运营 mothAndService
            let serviceNum = this.getData(data['mothAndService'], "xBxis", "yAxis", '', 'm');
            let arr = [];
            let order_xAxis = [];
            let order_series = [];
            serviceNum[0].forEach((i, x) => {
                arr.push({
                    label: i,
                    value: serviceNum[1][x]
                })
            });
            let month = [...new Set(this.DeepCopy(serviceNum[0]))];
            for (let i of month) {
                for (let j of arr) {
                    if (i === j.label) {
                        order_xAxis.push(j.label);
                        order_series.push(j.value);
                    }
                }
            }
            this.EChartsA[0].option.xAxis[0].data = order_xAxis;
            this.EChartsA[0].option.series[0].data = order_series;
            //等级分类占比 levelAndNUM
            data["levelAndNUM"].forEach((i, x) => {
                this.EChartsB[0].option.series[0].data.push({
                    value: i['yAxis'],
                    name: i["xBxis"] ? i["xBxis"] : "无类别"
                });
                this.EChartsB[0].option.legend.data.push(i["xBxis"] ? i["xBxis"] : "无类别");
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
            this.childRef(9, 70, this.$refs);
        }
    }
</script>

<style scoped lang="less">
    .selectYear {
        width: 7%;
        position: fixed;
        z-index: 9999;
        right: 0.5%;
        top: 1%;

        /deep/ .el-select {
            .el-input {
                width: 100%;

                .el-input__inner {
                    border: none;
                    background: none;
                    border-bottom: 3px solid #1d7dca;
                    border-radius: 0;
                    text-align: center;
                    font-size: 16px;
                    font-weight: 700;
                }

                .el-input__suffix {
                    .el-input__suffix-inner {
                        .el-input__icon {
                            color: black;
                            font-size: 16px;
                        }
                    }
                }
            }
        }
    }
</style>