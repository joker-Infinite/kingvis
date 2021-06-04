<template>
    <div class="titleBox">
        <div v-if="true" style="padding:10px">
            <el-button>搜索</el-button>
        </div>
        <div class="nav">
            <div>
                <el-button
                        @click="indexHover = item"
                        :class="{ hover: indexHover === item }"
                        v-for="item of 6"
                        :key="item">
                    {{ 2014 + item }}
                </el-button>
            </div>
        </div>
        <my-collapse-base
                ref="collapse"
                @ClickTotal="ClickTotal"
                :collapseData="collapseData"
                @searchQuery="searchQuery"
                @selectionChange="selectionChange"
                :navBarShow="true"
                :totalCount="totalCount">
        </my-collapse-base>
    </div>
</template>
<script>
    import MyCollapseBase from "../../../components/common/myCollapseBase";
    import common from "../../../components/js/common";

    export default {
        name: "revenue",
        components: {MyCollapseBase},
        mixins: [common],
        props: {
            viewChange: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                indexHover: 5,
                collapseData: [
                    {
                        id: "revenueTable",
                        name: "基础信息",
                        allShow: true,
                        icon: require("../../../assets/serviceArea/jcxx/jichuxinxi.png"),
                        iconActive: require("../../../assets/serviceArea/jcxx/jichuxinxi1.png"),
                        collapseItem: [
                            {
                                id: "ab_2019",
                                collapseTitle: "基础信息",
                                EChartsBox: [
                                    {
                                        title: "服务区列表",
                                        time: true,
                                        select: true,
                                        selectOption: [
                                            ["黄冈分公司", "恩施分公司", "宜昌分公司", "咸宁分公司", "孝感分公司", "十堰分公司"]
                                        ],
                                        input: true,
                                        query: {
                                            inputValue: "",
                                            selectValue: "",
                                            timeValue: ""
                                        },
                                        style: {
                                            cursor: "pointer",
                                            width: "100%",
                                            height: "550px",
                                            borderRadius: "10px",
                                            background: "white",
                                            overflow: "hidden",
                                            marginBottom: "10px"
                                        },
                                        EChartsItem: [
                                            {
                                                type: "table",
                                                height: "550px",
                                                style: {
                                                    width: "100%",
                                                    background: "#FFF"
                                                },
                                                isPagination: true,
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
                                                tableData: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: "revenue",
                        name: "运营趋势",
                        icon: require("../../../assets/serviceArea/jcxx/yunyingqushi.png"),
                        iconActive: require("../../../assets/serviceArea/jcxx/yunyingqushi1.png"),
                        collapseItem: [
                            {
                                id: "ab_20195",
                                collapseTitle: "运营趋势",
                                EChartsBox: [
                                    {
                                        title: "接管运营",
                                        style: {
                                            cursor: "pointer",
                                            width: "59.5%",
                                            height: "350px",
                                            borderRadius: "10px",
                                            background: "white",
                                            overflow: "hidden",
                                            marginBottom: "10px"
                                        },
                                        EChartsItem: [
                                            {
                                                serviceName: "",
                                                unit: "个",
                                                /*ECharts的属性*/
                                                style: {
                                                    width: "100%",
                                                    height: "300px"
                                                },
                                                option: {
                                                    xAxis: {
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
                                                    },
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
                                                    yAxis: {
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
                                                    },
                                                    series: [
                                                        {
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
                                        ]
                                    },
                                    {
                                        title: "等级分类占比",
                                        style: {
                                            cursor: "pointer",
                                            width: "39.5%",
                                            height: "350px",
                                            borderRadius: "10px",
                                            background: "white",
                                            overflow: "hidden",
                                            marginBottom: "10px"
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: "100%",
                                                    height: "300px"
                                                },
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
                                                            name: "访问来源",
                                                            type: "pie",
                                                            radius: ["50%", "70%"],
                                                            avoidLabelOverlap: false,
                                                            // label: {
                                                            //     show: false,
                                                            //     position: "center",
                                                            // },
                                                            // emphasis: {
                                                            //     label: {
                                                            //         show: true,
                                                            //         fontSize: "30",
                                                            //         fontWeight: "bold",
                                                            //     },
                                                            // },

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
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: "revenuep",
                        name: "占地面积",
                        icon: require("../../../assets/serviceArea/jcxx/zhandimianji.png"),
                        iconActive: require("../../../assets/serviceArea/jcxx/zhandimianji1.png"),
                        collapseItem: [
                            {
                                id: "ab_2019esp",
                                collapseTitle: "占地面积",
                                EChartsBox: [
                                    {
                                        title: "占地面积",
                                        style: {
                                            cursor: "pointer",
                                            width: "100%",
                                            height: "350px",
                                            borderRadius: "10px",
                                            background: "white",
                                            overflow: "hidden",
                                            marginBottom: "10px"
                                        },
                                        EChartsItem: [
                                            {
                                                serviceName: "刘畈停车区",
                                                serviceNamemin: "郧阳服务区",
                                                unit: "亩",
                                                /*ECharts的属性*/
                                                style: {
                                                    width: "100%",
                                                    height: "300px"
                                                },
                                                option: {
                                                    xAxis: {
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
                                                    },
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
                                                    yAxis: {
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
                                                    },
                                                    series: [
                                                        {
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
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: "revenuesess",
                        name: "经营面积",
                        icon: require("../../../assets/serviceArea/jcxx/jingyingmianiji.png"),
                        iconActive: require("../../../assets/serviceArea/jcxx/jingyingmianiji1.png"),
                        collapseItem: [
                            {
                                id: "ab_201ss",
                                collapseTitle: "经营面积",
                                EChartsBox: [
                                    {
                                        title: "经营面积",
                                        style: {
                                            cursor: "pointer",
                                            width: "100%",
                                            height: "350px",
                                            borderRadius: "10px",
                                            background: "white",
                                            overflow: "hidden",
                                            marginBottom: "10px"
                                        },
                                        EChartsItem: [
                                            {
                                                serviceName: "英山服务区",
                                                serviceNamemin: "咸宁服务区",
                                                unit: "㎡",
                                                /*ECharts的属性*/
                                                style: {
                                                    width: "100%",
                                                    height: "300px"
                                                },
                                                option: {
                                                    xAxis: {
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
                                                    },
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
                                                    yAxis: {
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
                                                    },
                                                    series: [
                                                        {
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
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: "revenueess",
                        name: "车流量",
                        icon: require("../../../assets/serviceArea/jcxx/cheliuliang.png"),
                        iconActive: require("../../../assets/serviceArea/jcxx/cheliuliang1.png"),
                        collapseItem: [
                            {
                                id: "ab_20s",
                                collapseTitle: "车流量",
                                EChartsBox: [
                                    {
                                        title: "月均车流量",
                                        style: {
                                            cursor: "pointer",
                                            width: "100%",
                                            height: "350px",
                                            borderRadius: "10px",
                                            background: "white",
                                            overflow: "hidden",
                                            marginBottom: "10px"
                                        },
                                        EChartsItem: [
                                            {
                                                serviceName: "大悟服务区",
                                                serviceNamemin: "恩施服务区",
                                                unit: "辆",
                                                /*ECharts的属性*/
                                                style: {
                                                    width: "100%",
                                                    height: "300px"
                                                },
                                                option: {
                                                    xAxis: {
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
                                                    },
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
                                                    yAxis: {
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
                                                    },
                                                    series: [
                                                        {
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
                                        ]
                                    }
                                ]
                            }
                        ]
                    },

                    {
                        id: "revenueTablesses",
                        name: "订单",
                        icon: require("../../../assets/serviceArea/jcxx/dingdan.png"),
                        iconActive: require("../../../assets/serviceArea/jcxx/dingdan1.png"),
                        collapseItem: [
                            {
                                id: "ab_2019ss",
                                collapseTitle: "订单数量",
                                EChartsBox: [
                                    {
                                        title: "订单数量",
                                        style: {
                                            cursor: "pointer",
                                            width: "100%",
                                            height: "350px",
                                            borderRadius: "10px",
                                            background: "white",
                                            overflow: "hidden",
                                            marginBottom: "10px"
                                        },
                                        EChartsItem: [
                                            {
                                                serviceName: "大悟服务区",
                                                serviceNamemin: "恩施服务区",
                                                unit: "单",
                                                /*ECharts的属性*/
                                                style: {
                                                    width: "100%",
                                                    height: "300px"
                                                },
                                                option: {
                                                    xAxis: {
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
                                                    },
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
                                                    yAxis: {
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
                                                    },
                                                    series: [
                                                        {
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
                                        ]
                                    }
                                ]
                            }
                        ]
                    },

                    {
                        id: "revenueTablesesa",
                        name: "客单价",
                        icon: require("../../../assets/serviceArea/jcxx/kedanjia.png"),
                        iconActive: require("../../../assets/serviceArea/jcxx/kedanjia1.png"),
                        collapseItem: [
                            {
                                id: "ab_2019sa",
                                collapseTitle: "客单价",
                                EChartsBox: [
                                    {
                                        title: "订单金额÷订单数量=客单价",
                                        style: {
                                            cursor: "pointer",
                                            width: "100%",
                                            height: "350px",
                                            borderRadius: "10px",
                                            background: "white",
                                            overflow: "hidden"
                                        },
                                        EChartsItem: [
                                            {
                                                serviceName: "浠水服务区",
                                                serviceNamemin: "河浦服务区",
                                                unit: "元",
                                                /*ECharts的属性*/
                                                style: {
                                                    width: "100%",
                                                    height: "300px"
                                                },
                                                option: {
                                                    xAxis: {
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
                                                    },
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
                                                    yAxis: {
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
                                                    },
                                                    series: [
                                                        {
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
                                        ]
                                    }
                                ]
                            }
                        ]
                    },

                    {
                        id: "revenueTablesesq",
                        name: "转换率",
                        icon: require("../../../assets/serviceArea/jcxx/zhuanhuanlv.png"),
                        iconActive: require("../../../assets/serviceArea/jcxx/zhuanhuanlv1.png"),
                        collapseItem: [
                            {
                                id: "ab_2019sq",
                                collapseTitle: "转换率",
                                EChartsBox: [
                                    {
                                        title: "月订单数量÷月车流量=转换率",
                                        style: {
                                            cursor: "pointer",
                                            width: "100%",
                                            height: "350px",
                                            borderRadius: "10px",
                                            background: "white",
                                            overflow: "hidden"
                                        },
                                        EChartsItem: [
                                            {
                                                serviceName: "木子店服务区",
                                                serviceNamemin: "总路咀服务区",

                                                unit: "%",
                                                /*ECharts的属性*/
                                                style: {
                                                    width: "100%",
                                                    height: "300px"
                                                },
                                                option: {
                                                    xAxis: {
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
                                                    },
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
                                                    yAxis: {
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
                                                    },
                                                    series: [
                                                        {
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
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ],
                arrData: [],
                ValueData: {
                    inputValue: "",
                    selectValue: "",
                    timeValue: ["", ""]
                },
                optionss: [],
                options: [
                    {
                        value: "选项1",
                        label: "咸宁中心"
                    },
                    {
                        value: "选项2",
                        label: "宜昌中心"
                    },
                    {
                        value: "选项3",
                        label: "黄冈中心"
                    },
                    {
                        value: "选项4",
                        label: "十堰中心"
                    },
                    {
                        value: "选项5",
                        label: "恩施中心"
                    }
                ],
                company: "",
                district: "",
                totalCount: 0,
                inputVlaue: ""
            };
        },
        methods: {
            selectionChange(val) {
                this.$emit("clickTable", true);
                this.$router.push("/details/serviceDetails");
            },
            ClickTotal(value) {
                this.TableDatas(value.pageNum, value.pageSize);
            },
            async searchQuery(id, collapse, year, name, inputValue) {
                console.log(id, collapse, year, name, inputValue)
                this.ValueData = collapse;
                id.EChartsBox.forEach((element, index) => {
                    element.EChartsItem.forEach((element, sindex) => {
                        this.arrData.push({
                            id: id.id + "-" + index + "-" + sindex,
                            option: element.option
                        });
                    });
                });
                this.inputVlaue = inputValue;
                await this.TableDatas(1, 5);
            },
            async TableDatas(pageNum, pageSize) {
                this.$axios.get("/api/jtService/serve_list", {
                    params: {
                        companyId: "",
                        endTime: "",
                        pageNum: pageNum,
                        serverName: this.inputVlaue,
                        startTime: "",
                        pageSize: pageSize
                    }
                }).then(res => {
                    this.collapseData[0].collapseItem[0].EChartsBox[0].EChartsItem[0].tableData = [];
                    res.data.list.forEach(element => {
                        let elementData = {
                            serviceName: element.serviceName ? element.serviceName : "/",
                            // 高速名称
                            B: "/",
                            // 利润
                            G: element.lirun ? element.lirun : "/",
                            // 业态订单数
                            J: "/",
                            I: element.mianji && element.mianji !== 'NULL' ? element.mianji : "/",
                            // 坪效
                            H: element.pingxiao ? element.pingxiao : "/",
                            maxcart: element.carVo[0] ? element.carVo[0].count : "/",
                            mincart: element.carVo[1] ? element.carVo[1].count : "/",
                            refuel: element.jiayou ? element.jiayou : "/",
                            snack: element.xiaochi ? element.xiaochi : "/",
                            convenience: element.chaoshi ? element.chaoshi : "/",
                            catering: element.canyin ? element.canyin : "/",
                            shouyi: element.shouyi ? element.shouyi : "/"
                        };
                        this.collapseData[0].collapseItem[0].EChartsBox[0].EChartsItem[0].tableData.push(
                            elementData
                        );
                    });
                    this.totalCount = res.data.total;
                });
            }
            /* async obtainData(name, year) {
                         let data = [];
                         let id = '';
                         this.ValueData.timeValue === null && (this.ValueData.timeValue = ['', '']);
                         const res = await this.$axios.get("/api/sundry/finance_type_list");
                         for (let i = 0; i < res.data.data.length; i++) {
                             if (res.data.data[i].financeName == name) {
                                 id = res.data.data[i].financeTypeId;
                                 break;
                             }
                         }
                         await this.$axios.get('/api/jtService/list_service_finance', {
                             params: {
                                 financeTypeId: id,
                                 nianfen: year,
                                 endTime: this.ValueData.timeValue[1],
                                 stateTime: this.ValueData.timeValue[0]
                             }
                         }).then(v => {
                             data = v.data.data;
                             let mm = [];
                             this.collapseData.forEach((item, index) => {
                                 if (item.name == name) {
                                     item.collapseItem.forEach((cItem, cIndex) => {
                                         if (cItem.year == year) {
                                             cItem.EChartsBox.forEach((sItem, sIndex) => {
                                                 if (sIndex == 0) {
                                                     sItem.EChartsItem[0].option.series[0].data = [];
                                                     sItem.EChartsItem[0].option.xAxis[0].data = [];
                                                     data.xYListFrom1.forEach((i, ix) => {
                                                         sItem.EChartsItem[0].option.series[0].data.push(i.yAxis);
                                                         mm.push(i.yAxis);
                                                         sItem.EChartsItem[0].option.xAxis[0].data.push(i.xBxis);
                                                     });
                                                     // if (mm.length !== 0) {
                                                     //     let arr = this.YoYIncrease(mm);
                                                     //     // sItem.EChartsItem[0].option.yAxis[1].min = parseInt(Math.min(...arr) - 5);
                                                     //     // sItem.EChartsItem[0].option.yAxis[1].max = parseInt(Math.max(...arr) + 5);
                                                     //     sItem.EChartsItem[0].option.series[1].data.push(...arr);
                                                     // }
                                                 }
                                                 if (sIndex == 1) {
                                                     sItem.EChartsItem[0].option.series[0].data = [];
                                                     data.xYListFrom2.forEach((i, ix) => {
                                                         sItem.EChartsItem[0].option.series[0].data.push({
                                                             name: i.xBxis,
                                                             value: i.yAxis
                                                         });
                                                     })
                                                     sItem.EChartsItem[1].option.series[0].data = []
                                                     data.xYListFrom3.forEach((i, ix) => {
                                                         sItem.EChartsItem[1].option.series[0].data.push({
                                                             name: i.xBxis,
                                                             value: i.yAxis
                                                         });
                                                     })
                                                 }
                                             });
                                         }
                                     })
                                 }
                             })
                             // this.$nextTick(_ => {
                             //     this.$refs['collapse'].searchClick(this.arrData)
                             // })
                         })
                     },
                     async obtainAxios(name, year, years) {
                         let data = [];
                         let id = '';
                         await this.$axios.get('/api/sundry/fuwuqucaiwu',
                             { params: { nianfen: year, type: years } }
                         ).then(v => {
                             data = v.data.data;
                             let mm = [];
                             this.collapseData.forEach((item, index) => {
                                 if (item.name == name) {
                                     item.collapseItem.forEach((cItem, cIndex) => {
                                         if (cItem.year == year) {
                                             cItem.EChartsBox.forEach((sItem, sIndex) => {
                                                 if (sIndex == 0) {
                                                     sItem.EChartsItem[0].option.series[0].data = [];
                                                     sItem.EChartsItem[0].option.xAxis[0].data = [];
                                                     let yAxis = [];
                                                     let xBxis = [];
                                                     data.forEach(element => {
                                                         xBxis.push(element.xBxis.split('-')[1]);
                                                         yAxis.push(element.yAxis * 10000)
                                                     });
                                                     sItem.EChartsItem[0].option.series[0].data = yAxis;
                                                     sItem.EChartsItem[0].option.xAxis[0].data = xBxis;
                                                 }
                                                 // if (sIndex == 1) {
                                                 //     sItem.EChartsItem[0].option.series[0].data = [];
                                                 //     data.xYListFrom2.forEach((i, ix) => {
                                                 //         sItem.EChartsItem[0].option.series[0].data.push({
                                                 //             name: i.xBxis,
                                                 //             value: i.yAxis
                                                 //         });
                                                 //     })
                                                 //     sItem.EChartsItem[1].option.series[0].data = []
                                                 //     data.xYListFrom3.forEach((i, ix) => {
                                                 //         sItem.EChartsItem[1].option.series[0].data.push({
                                                 //             name: i.xBxis,
                                                 //             value: i.yAxis
                                                 //         });
                                                 //     })
                                                 // }
                                             });
                                         }
                                     })
                                 }
                             })

                         })
                         // this.$axios.get('/api/sundry/fuwuqucaiwu',{params:{nianfen:year,type:name}}).then(res=>{
                         //     let xBxis = [];
                         //     let yAxis = [];
                         //     res.data.data.forEach(element => {

                         //     });
                         // })
                     }*/
        },
        async mounted() {
            await this.TableDatas(1, 5);
            await new Promise(resolve => {
                setInterval(_ => {
                    resolve();
                }, 500);
            });
            this.$refs["collapse"].initECharts(this.collapseData);
        },
        async created() {
            /* await this.obtainData('营收', '2019');
                     await this.obtainData('营收', '2020');
                     await this.obtainData('利润', '2019');
                     await this.obtainData('利润', '2020');*/
            /* await this.obtainAxios('营收', '2020', 'ys');
                     await this.obtainAxios('成本', '2020', 'cb');
                     await this.obtainAxios('成本', '2019', 'cb');
                     await this.obtainAxios('利润', '2020', 'lr');
                     await this.obtainAxios('利润', '2019', 'lr');*/
            /*this.$axios.get('/api/jtService/car_flow').then(res => {
                        res.data.forEach((element, index) => {
                            let xAxis = [];
                            let yBxis = [];
                            element.flowList.forEach(item => {
                                xAxis.push(item.time)
                                yBxis.push(item.count)
                            });
                            this.collapseData[5].collapseItem[0].EChartsBox[0].EChartsItem[0].option.xAxis.data = xAxis;
                            this.collapseData[5].collapseItem[0].EChartsBox[0].EChartsItem[0].option.series[index].data = yBxis;

                        });
                    })*/
        },
        watch: {
            viewChange() {
                this.$refs["collapse"].refresh(this.collapseData);
            }
        }
    };
</script>
<style scoped lang="less">
    .titleBox {
        width: 100%;
        height: calc(100% - 60px);
    }

    .nav {
        background: #f3f7ff;
        width: 75%;
        padding: 10px;
        display: flex;
        // padding-left: 30%;
        display: flex;
        justify-content: center;
        // box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
        position: fixed;
        z-index: 100;
        top: 0;
    }

    .hover {
        background: #409eff;
        color: #ffffff;
    }

    .nav > div + div {
        margin-left: 10px;
    }
</style>
