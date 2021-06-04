<template>
    <div class="HomeSecond">
        <div class="HomeSecond_header">
            <img class="HomeSecond_header_img" src="../../../assets/showOffHome/home2/border.png" alt=""/>
        </div>
        <div class="HomeSecond_PlugIn">
           <!-- <div class="HomeSecond_PlugIn_Broadcast">
                <div class="HomeSecond_PlugIn_Broadcast_content">
                    <i class="iconfont">&#xe614;</i>
                    <span>凌晨二时 蔡甸服务区因为XXX 已临时关闭 预计XXX开放</span>
                </div>
            </div>-->
            <div class="HomeSecond_PlugIn_Time-Theme">
                <span>{{nowTime}}</span>
                <el-select v-model="selectTheme" @change="updateHomeState(selectTheme)">
                    <el-option label="默认" value="HomeFirst"></el-option>
                    <el-option label="靛青" value="HomeSecond"></el-option>
                    <el-option label="机械" value="HomeThird"></el-option>
                </el-select>
            </div>
        </div>
        <div class="HomeSecond_container">
            <div class="HomeSecond_content">
                <div class="HomeSecond_content_content">
                    <ul class="HomeSecond_content_content_top">
                        <li class="HomeSecond_content_content_top_left">
                            <ul class="sm_cc">
                                <li>
                                    <MsECharts :optionData="ECData[0]" plug-in="HomeSecondPlugIn" e-c-id="a" ref="0"
                                               title="预算控制率"></MsECharts>
                                </li>
                                <li>
                                    <MsECharts :optionData="ECData[1]" plug-in="HomeSecondPlugIn" e-c-id="b" ref="1"
                                               title="回款率"></MsECharts>
                                </li>
                                <li>
                                    <MsECharts :optionData="ECData[2]" plug-in="HomeSecondPlugIn" e-c-id="c" ref="2"
                                               title="合同未收款"></MsECharts>
                                </li>
                            </ul>
                        </li>
                        <li class="HomeSecond_content_content_top_center">
                            <div class="HomeSecond_content_content_top_center_search">
                                <el-select v-model="searchDot" filterable @change="searchChange(searchDot)">
                                    <template v-for="i in searchQuery">
                                        <el-option :value="i.oid" :label="i.searchName"></el-option>
                                    </template>
                                </el-select>
                            </div>
                            <div class="HomeSecond_content_content_top_center_type">
                                <span :class="{'click':clickNum===1}" @click="clickType(1)">服务区</span>
                                <span :class="{'click':clickNum===2}" @click="clickType(2)">油站</span>
                                <span :class="{'click':clickNum===3}" @click="clickType(3)">超市</span>
                                <span :class="{'click':clickNum===4}" @click="clickType(4)">卡口</span>
                                <span :class="{'click':clickNum===5}" @click="clickType(5)">收银</span>
                            </div>
                            <map-base-child ref="map" map-style="darkblue" @dblclickDot="dblclickDot"></map-base-child>
                        </li>
                        <li class="HomeSecond_content_content_top_right">
                            <ul class="sm_cc">
                                <li>
                                    <MsECharts :optionData="zhl" plug-in="HomeSecondPlugIn" e-c-id="d" title="转化率"
                                               ref="zhl">
                                        <div slot="content"
                                             style="display: flex;flex-direction: row;flex-wrap: nowrap;height: 100%">
                                            <div class="ll" id="self_d"></div>
                                            <div class="rr">
                                                <span>A分类</span>
                                                <span>B分类</span>
                                                <span>C分类</span>
                                            </div>
                                        </div>
                                    </MsECharts>
                                </li>
                                <li>
                                    <MsECharts :optionData="jyph" plug-in="HomeSecondPlugIn" e-c-id="e" title="经营排行"
                                               ref="jyph">
                                        <div slot="content"
                                             style="display: flex;flex-direction: row;flex-wrap: nowrap;height: 100%">
                                            <div class="bll">
                                                <div class="bllt">
                                                    <span :class="{'bllta':Type===1}"
                                                          @click="ranking(1,Format)">服务区</span>
                                                    <span :class="{'bllta':Type===2}"
                                                          @click="ranking(2,Format)">自营油站</span>
                                                    <span :class="{'bllta':Type===3}"
                                                          @click="ranking(3,Format)">自营超市</span>
                                                    <span :class="{'bllta':Type===4}"
                                                          @click="ranking(4,Format)">服务区招商</span>
                                                </div>
                                                <div class="bllb" id="bllb"></div>
                                            </div>
                                            <div class="brr">
                                                <span :class="{'bllta':Format===1}" @click="ranking(Type,1)">营收</span>
                                                <span :class="{'bllta':Format===2}" @click="ranking(Type,2)">利润</span>
                                                <span :class="{'bllta':Format===3}" @click="ranking(Type,3)">客单价</span>
                                                <span :class="{'bllta':Format===4}" @click="ranking(Type,4)">订单数</span>
                                                <span :class="{'bllta':Format===5}" @click="ranking(Type,5)">转化率</span>
                                            </div>
                                        </div>
                                    </MsECharts>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div class="HomeSecond_content_content_bottom">
                        <div class="HomeSecond_content_content_bottom_button">
                            <div :class="{'active':active===1}" @click="selectType(bottomType[1]['financeTypeId'],1)">
                                营收
                            </div>
                            <div :class="{'active':active===2}" @click="selectType(bottomType[0]['financeTypeId'],2)">
                                利润
                            </div>
                        </div>
                        <div class="HomeSecond_content_content_bottom_content">
                            <ul>
                                <li>
                                    <MsECharts :optionData="ECData[3]" plug-in="HomeSecondPlugIn" e-c-id="f" ref="3"
                                               title="实业公司"></MsECharts>
                                </li>
                                <li>
                                    <MsECharts :optionData="ECData[4]" plug-in="HomeSecondPlugIn" e-c-id="g" ref="4"
                                               title="服务区板块"></MsECharts>
                                </li>
                                <li>
                                    <MsECharts :optionData="ECData[5]" plug-in="HomeSecondPlugIn" e-c-id="h" ref="5"
                                               title="能源板块"></MsECharts>
                                </li>
                                <li>
                                    <MsECharts :optionData="ECData[6]" plug-in="HomeSecondPlugIn" e-c-id="i" ref="6"
                                               title="商业板块"></MsECharts>
                                </li>
                                <li>
                                    <MsECharts :optionData="ECData[7]" plug-in="HomeSecondPlugIn" e-c-id="j" ref="7"
                                               title="传媒公司"></MsECharts>
                                </li>
                                <li>
                                    <MsECharts :optionData="ECData[8]" plug-in="HomeSecondPlugIn" e-c-id="k" ref="8"
                                               title="经营目标完成率"></MsECharts>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import MsECharts from "../MsChildren/MsECharts";
    import time from "../MsJavaScript/time";
    import MapBaseChild from "../../../components/MapBaseChild";

    export default {
        name: "HomeSecond",
        components: {MapBaseChild, MsECharts},
        props: {
            searchQuery: {
                type: Array,
                default: _ => {
                    return []
                }
            },
            homeState: {
                type: Object,
                default: _ => {
                    return {}
                }
            }
        },
        data() {
            return {
                clickNum: 1,
                searchDot: "",
                nowTime: '',
                selectTheme: "HomeSecond",
                ECData: [
                    {
                        barWidth: 10,
                        tooltip: {
                            trigger: "axis",
                            formatter: v => {
                                let show = [
                                    {
                                        name: "服务区板块",
                                        receivable: "34735.63",
                                        received: "27897.51",
                                        exacutiveRate: "80.31%"
                                    },
                                    {
                                        name: "能源板块",
                                        receivable: "876456.62",
                                        received: "852421.61",
                                        exacutiveRate: "97.26%"
                                    },
                                    {
                                        name: "商业板块",
                                        receivable: "298225.10",
                                        received: "184270.84",
                                        exacutiveRate: "61.79%"
                                    },
                                    {
                                        name: "传媒板块",
                                        receivable: "9300",
                                        received: "5792.49",
                                        exacutiveRate: "62.28%"
                                    }
                                ];
                                let index = 0;
                                for (let i = 0; i < show.length; i++) {
                                    if (v[0].name == show[i].name) {
                                        index = i;
                                        break;
                                    }
                                }
                                return (
                                    "合同应收款：" +
                                    show[index].receivable +
                                    "万元<br>合同已收款：" +
                                    show[index].received +
                                    "万元"
                                );
                            },
                            axisPointer: {
                                type: "shadow"
                            }
                        },
                        grid: {
                            top: 0,
                            bottom: 30,
                            left: 20
                        },
                        xAxis: {
                            type: "value",
                            position: "bottom",
                            axisTick: {
                                //坐标轴刻度
                                show: false
                            },
                            axisLabel: {
                                textStyle: {
                                    color: "#FFF"
                                }
                            },
                            splitLine: {show: false},
                            axisLine: {
                                lineStyle: {
                                    color: "#FFF"
                                }
                            }
                        },
                        yAxis: {
                            type: "category",
                            axisLine: {show: false},
                            axisLabel: {show: false},
                            axisTick: {show: false},
                            splitLine: {show: false},
                            data: ["商业板块", "传媒板块", "服务区板块", "能源板块"]
                        },
                        series: [
                            {
                                name: "收入",
                                type: "bar",
                                stack: "总量",
                                itemStyle: {
                                    normal: {
                                        barBorderRadius: 30, //设置柱状图为圆角
                                        color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                            {
                                                offset: 0,
                                                color: "rgba(192,42,84,1)"
                                            },
                                            {
                                                offset: 1,
                                                color: "rgba(127,69,224,1)"
                                            }
                                        ])
                                    }
                                },
                                label: {
                                    show: true,
                                    position: "insideLeft",
                                    color: "#fff",
                                    formatter: "{b}" + "：{c}" + "%"
                                },
                                data: [61.79, 62.28, 80.31, 97.26],
                                markLine: {
                                    data: [],
                                    symbol: ["none", "none"],
                                    position: "insideTopCenter",
                                    itemStyle: {
                                        normal: {
                                            lineStyle: {
                                                type: "dotted",
                                                color: "white"
                                            },
                                            label: {
                                                show: false,
                                                position: "middle",
                                                formatter: "数据平均 :"
                                            }
                                        }
                                    },
                                    large: true,
                                    effect: {
                                        show: false,
                                        loop: true,
                                        period: 0,
                                        scaleSize: 2,
                                        color: null,
                                        shadowColor: null,
                                        shadowBlur: null
                                    }
                                }
                            }
                        ]
                    },
                    {
                        barWidth: 10,
                        tooltip: {
                            trigger: "axis",
                            formatter: v => {
                                let show = [
                                    {
                                        name: "服务区板块",
                                        receivable: "34735.63",
                                        received: "27897.51",
                                        exacutiveRate: "80.31%"
                                    },
                                    {
                                        name: "能源板块",
                                        receivable: "876456.62",
                                        received: "852421.61",
                                        exacutiveRate: "97.26%"
                                    },
                                    {
                                        name: "商业板块",
                                        receivable: "298225.10",
                                        received: "184270.84",
                                        exacutiveRate: "61.79%"
                                    },
                                    {
                                        name: "传媒板块",
                                        receivable: "9300",
                                        received: "5792.49",
                                        exacutiveRate: "62.28%"
                                    }
                                ];
                                let index = 0;
                                for (let i = 0; i < show.length; i++) {
                                    if (v[0].name == show[i].name) {
                                        index = i;
                                        break;
                                    }
                                }
                                return (
                                    "合同应收款：" +
                                    show[index].receivable +
                                    "万元<br>合同已收款：" +
                                    show[index].received +
                                    "万元"
                                );
                            },
                            axisPointer: {
                                type: "shadow"
                            }
                        },
                        grid: {
                            top: 0,
                            bottom: 30,
                            left: 20
                        },
                        xAxis: {
                            type: "value",
                            position: "bottom",
                            axisTick: {
                                //坐标轴刻度
                                show: false
                            },
                            axisLabel: {
                                textStyle: {
                                    color: "#FFF"
                                }
                            },
                            splitLine: {show: false},
                            axisLine: {
                                lineStyle: {
                                    color: "#FFF"
                                }
                            }
                        },
                        yAxis: {
                            type: "category",
                            axisLine: {show: false},
                            axisLabel: {show: false},
                            axisTick: {show: false},
                            splitLine: {show: false},
                            data: ["商业板块", "传媒板块", "服务区板块", "能源板块"]
                        },
                        series: [
                            {
                                name: "收入",
                                type: "bar",
                                stack: "总量",
                                itemStyle: {
                                    normal: {
                                        barBorderRadius: 30, //设置柱状图为圆角
                                        color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                            {
                                                offset: 0,
                                                color: "rgba(192,42,84,1)"
                                            },
                                            {
                                                offset: 1,
                                                color: "rgba(127,69,224,1)"
                                            }
                                        ])
                                    }
                                },
                                label: {
                                    show: true,
                                    position: "insideLeft",
                                    color: "#fff",
                                    formatter: "{b}" + "：{c}" + "%"
                                },
                                data: [61.79, 62.28, 80.31, 97.26],
                                markLine: {
                                    data: [],
                                    symbol: ["none", "none"],
                                    position: "insideTopCenter",
                                    itemStyle: {
                                        normal: {
                                            lineStyle: {
                                                type: "dotted",
                                                color: "white"
                                            },
                                            label: {
                                                show: false,
                                                position: "middle",
                                                formatter: "数据平均 :"
                                            }
                                        }
                                    },
                                    large: true,
                                    effect: {
                                        show: false,
                                        loop: true,
                                        period: 0,
                                        scaleSize: 2,
                                        color: null,
                                        shadowColor: null,
                                        shadowBlur: null
                                    }
                                }
                            }
                        ]
                    },
                    {
                        barWidth: "10", //设置柱状图的粗细
                        tooltip: {
                            trigger: "axis",
                            //  湖北长江路桥股份有限公司枣潜高速公路第七标段项目经理部
                            formatter: v => {
                                let name = "";
                                if (v[0].name == "湖北长江路桥股份有限公司……") {
                                    name = "湖北长江路桥股份有限公司枣潜高速公路第七标段项目经理部";
                                }
                                if (v[0].name !== "湖北长江路桥股份有限公司……") {
                                    name = v[0].name;
                                }
                                return name + "：" + v[0].value + "万元";
                            },
                            axisPointer: {
                                type: "shadow"
                            }
                        },
                        xAxis: [
                            {
                                type: "value",
                                show: true,
                                // min: 0,
                                // max: 250,
                                axisLine: {
                                    lineStyle: {
                                        color: "#fff"
                                    }
                                },
                                splitLine: {
                                    show: false
                                },
                                axisTick: {
                                    //坐标轴刻度
                                    show: false
                                }
                            }
                        ],
                        yAxis: [
                            {
                                show: false,
                                type: "category",
                                data: [
                                    "湖北长江路桥股份有限公司……",
                                    "稻谷款(加工厂)",
                                    "大米款（加工厂）",
                                    "茂名市金瑞粮油贸易有限公司",
                                    "湖北省羊肚菌农业科技有限公司"
                                ],
                                axisLine: {
                                    lineStyle: {
                                        color: "#fff"
                                    }
                                },
                                axisTick: {
                                    //坐标轴刻度
                                    show: false
                                },
                                axisLabel: {
                                    show: false,
                                    textStyle: {
                                        color: "#fff"
                                    }
                                },
                                splitLine: {
                                    show: false
                                }
                            }
                        ],
                        grid: {
                            width: "auto",
                            top: "0",
                            bottom: "30",
                            left: "20"
                        },
                        series: [
                            {
                                data: [2934.83, 3303.25, 3549.63, 4998.57, 8786.06],
                                type: "bar",
                                color: "rgba(208,137,208,0.5)",
                                showBackground: false,
                                label: {
                                    show: true,
                                    position: "insideLeft",
                                    color: "#fff",
                                    formatter: "{b}"
                                },
                                // backgroundStyle: {
                                //     color: "rgba(255,255,255,0.2)"
                                // },
                                barCategoryGap: "100%",
                                markLine: {
                                    data: [],
                                    symbol: ["none", "none"],
                                    position: "insideTopCenter",
                                    itemStyle: {
                                        normal: {
                                            lineStyle: {
                                                type: "dotted",
                                                color: "white"
                                            },
                                            label: {
                                                show: true,
                                                position: "middle",
                                                formatter: "数据平均 : "
                                            }
                                        }
                                    },
                                    large: true,
                                    effect: {
                                        show: false,
                                        loop: true,
                                        period: 0,
                                        scaleSize: 2,
                                        color: null,
                                        shadowColor: null,
                                        shadowBlur: null
                                    }
                                }
                            }
                        ]
                    },

                    {
                        barWidth: 10,
                        grid: {
                            show: true,
                            top: "7",
                            left: "10%",
                            right: "5%",
                            bottom: "30"
                        },
                        title: {
                            text: "",
                            show: true,
                            x: "center",
                            y: "-1%",
                            textStyle: {
                                fontFamily: "幼圆",
                                color: "#FFF",
                                fontSize: "15"
                            }
                        },
                        tooltip: {
                            trigger: "axis",
                            axisPointer: {
                                type: "line",
                                lineStyle: {
                                    color: "red",
                                    width: 1
                                }
                            },
                            formatter: function (list) {
                                return (
                                    list[0].dataIndex +
                                    1 +
                                    "月：" +
                                    list[0].value
                                );
                            }
                        },
                        color: ["#17cce1", "#a549ff"],
                        xAxis: [
                            {
                                show: true,
                                type: "category",
                                data: [],
                                axisPointer: {
                                    type: "shadow"
                                },
                                axisTick: {
                                    //坐标轴刻度
                                    show: false
                                },
                                axisLabel: {
                                    textStyle: {
                                        color: "#FFF"
                                    }
                                }
                            }
                        ],
                        yAxis: [
                            {
                                show: true,
                                name: "亿",
                                axisLine: {
                                    show: false,
                                    lineStyle: {
                                        color: "#fff"
                                    }
                                },
                                type: "value",
                                axisLabel: {
                                    textStyle: {
                                        color: "#FFF"
                                    }
                                },
                                axisTick: {
                                    //坐标轴刻度
                                    show: false
                                },
                                splitLine: {
                                    lineStyle: {
                                        type: "dashed",
                                        color: "#001e6c"
                                    }
                                },
                                splitNumber: 2.6
                            }
                        ],
                        series: [
                            {
                                name: "营收",
                                type: "line",
                                data: []
                            }
                        ]
                    },
                    {
                        barWidth: 10,
                        grid: {
                            show: true,
                            top: "7",
                            left: "10%",
                            right: "5%",
                            bottom: "30"
                        },
                        title: {
                            text: "",
                            show: true,
                            x: "center",
                            y: "-1%",
                            textStyle: {
                                fontFamily: "幼圆",
                                color: "#FFF",
                                fontSize: "15"
                            }
                        },
                        tooltip: {
                            trigger: "axis",
                            axisPointer: {
                                type: "line",
                                lineStyle: {
                                    color: "red",
                                    width: 1
                                }
                            },
                            formatter: function (list) {
                                return (
                                    list[0].dataIndex +
                                    1 +
                                    "月：" +
                                    list[0].value
                                );
                            }
                        },
                        color: ["#17cce1", "#a549ff"],
                        xAxis: [
                            {
                                show: true,
                                type: "category",
                                data: [],
                                axisPointer: {
                                    type: "shadow"
                                },
                                axisTick: {
                                    //坐标轴刻度
                                    show: false
                                },
                                axisLabel: {
                                    textStyle: {
                                        color: "#FFF"
                                    }
                                }
                            }
                        ],
                        yAxis: [
                            {
                                show: true,
                                name: "亿",
                                axisLine: {
                                    show: false,
                                    lineStyle: {
                                        color: "#fff"
                                    }
                                },
                                type: "value",
                                axisLabel: {
                                    textStyle: {
                                        color: "#FFF"
                                    }
                                },
                                axisTick: {
                                    //坐标轴刻度
                                    show: false
                                },
                                splitLine: {
                                    lineStyle: {
                                        type: "dashed",
                                        color: "#001e6c"
                                    }
                                },
                                splitNumber: 2.6
                            }
                        ],
                        series: [
                            {
                                name: "营收",
                                type: "line",
                                data: []
                            }
                        ]
                    },
                    {
                        barWidth: 10,
                        grid: {
                            show: true,
                            top: "7",
                            left: "10%",
                            right: "5%",
                            bottom: "30"
                        },
                        title: {
                            text: "",
                            show: true,
                            x: "center",
                            y: "-1%",
                            textStyle: {
                                fontFamily: "幼圆",
                                color: "#FFF",
                                fontSize: "15"
                            }
                        },
                        tooltip: {
                            trigger: "axis",
                            axisPointer: {
                                type: "line",
                                lineStyle: {
                                    color: "red",
                                    width: 1
                                }
                            },
                            formatter: function (list) {
                                return (
                                    list[0].dataIndex +
                                    1 +
                                    "月：" +
                                    list[0].value
                                );
                            }
                        },
                        color: ["#17cce1", "#a549ff"],
                        xAxis: [
                            {
                                show: true,
                                type: "category",
                                data: [],
                                axisPointer: {
                                    type: "shadow"
                                },
                                axisTick: {
                                    //坐标轴刻度
                                    show: false
                                },
                                axisLabel: {
                                    textStyle: {
                                        color: "#FFF"
                                    }
                                }
                            }
                        ],
                        yAxis: [
                            {
                                show: true,
                                name: "亿",
                                axisLine: {
                                    show: false,
                                    lineStyle: {
                                        color: "#fff"
                                    }
                                },
                                type: "value",
                                axisLabel: {
                                    textStyle: {
                                        color: "#FFF"
                                    }
                                },
                                axisTick: {
                                    //坐标轴刻度
                                    show: false
                                },
                                splitLine: {
                                    lineStyle: {
                                        type: "dashed",
                                        color: "#001e6c"
                                    }
                                },
                                splitNumber: 2.6
                            }
                        ],
                        series: [
                            {
                                name: "营收",
                                type: "line",
                                data: []
                            }
                        ]
                    },
                    {
                        barWidth: 10,
                        grid: {
                            show: true,
                            top: "7",
                            left: "10%",
                            right: "5%",
                            bottom: "30"
                        },
                        title: {
                            text: "",
                            show: true,
                            x: "center",
                            y: "-1%",
                            textStyle: {
                                fontFamily: "幼圆",
                                color: "#FFF",
                                fontSize: "15"
                            }
                        },
                        tooltip: {
                            trigger: "axis",
                            axisPointer: {
                                type: "line",
                                lineStyle: {
                                    color: "red",
                                    width: 1
                                }
                            },
                            formatter: function (list) {
                                return (
                                    list[0].dataIndex +
                                    1 +
                                    "月：" +
                                    list[0].value
                                );
                            }
                        },
                        color: ["#17cce1", "#a549ff"],
                        xAxis: [
                            {
                                show: true,
                                type: "category",
                                data: [],
                                axisPointer: {
                                    type: "shadow"
                                },
                                axisTick: {
                                    //坐标轴刻度
                                    show: false
                                },
                                axisLabel: {
                                    textStyle: {
                                        color: "#FFF"
                                    }
                                }
                            }
                        ],
                        yAxis: [
                            {
                                show: true,
                                name: "亿",
                                axisLine: {
                                    show: false,
                                    lineStyle: {
                                        color: "#fff"
                                    }
                                },
                                type: "value",
                                axisLabel: {
                                    textStyle: {
                                        color: "#FFF"
                                    }
                                },
                                axisTick: {
                                    //坐标轴刻度
                                    show: false
                                },
                                splitLine: {
                                    lineStyle: {
                                        type: "dashed",
                                        color: "#001e6c"
                                    }
                                },
                                splitNumber: 2.6
                            }
                        ],
                        series: [
                            {
                                name: "营收",
                                type: "line",
                                data: []
                            }
                        ]
                    },
                    {
                        barWidth: 10,
                        grid: {
                            show: true,
                            top: "7",
                            left: "10%",
                            right: "5%",
                            bottom: "30"
                        },
                        title: {
                            text: "",
                            show: true,
                            x: "center",
                            y: "-1%",
                            textStyle: {
                                fontFamily: "幼圆",
                                color: "#FFF",
                                fontSize: "15"
                            }
                        },
                        tooltip: {
                            trigger: "axis",
                            axisPointer: {
                                type: "line",
                                lineStyle: {
                                    color: "red",
                                    width: 1
                                }
                            },
                            formatter: function (list) {
                                return (
                                    list[0].dataIndex +
                                    1 +
                                    "月：" +
                                    list[0].value
                                );
                            }
                        },
                        color: ["#17cce1", "#a549ff"],
                        xAxis: [
                            {
                                show: true,
                                type: "category",
                                data: [],
                                axisPointer: {
                                    type: "shadow"
                                },
                                axisTick: {
                                    //坐标轴刻度
                                    show: false
                                },
                                axisLabel: {
                                    textStyle: {
                                        color: "#FFF"
                                    }
                                }
                            }
                        ],
                        yAxis: [
                            {
                                show: true,
                                name: "亿",
                                axisLine: {
                                    show: false,
                                    lineStyle: {
                                        color: "#fff"
                                    }
                                },
                                type: "value",
                                axisLabel: {
                                    textStyle: {
                                        color: "#FFF"
                                    }
                                },
                                axisTick: {
                                    //坐标轴刻度
                                    show: false
                                },
                                splitLine: {
                                    lineStyle: {
                                        type: "dashed",
                                        color: "#001e6c"
                                    }
                                },
                                splitNumber: 2.6
                            }
                        ],
                        series: [
                            {
                                name: "营收",
                                type: "line",
                                data: []
                            }
                        ]
                    },

                    {
                        barWidth: 10,
                        tooltip: {
                            trigger: "axis",
                            axisPointer: {
                                type: "shadow"
                            }
                        },
                        grid: {
                            top: "7",
                            left: "10%",
                            right: "5%",
                            bottom: "30"
                        },
                        xAxis: {
                            type: "value",
                            position: "bottom",
                            axisTick: {
                                //坐标轴刻度
                                show: false
                            },
                            axisLabel: {
                                textStyle: {
                                    color: "#FFF"
                                }
                            },
                            splitLine: {show: false},
                            axisLine: {
                                lineStyle: {
                                    color: "#FFF"
                                }
                            }
                        },
                        yAxis: {
                            type: "category",
                            axisLine: {show: false},
                            axisLabel: {show: false},
                            axisTick: {show: false},
                            splitLine: {show: false},
                            data: []
                        },
                        series: [
                            {
                                name: "收入",
                                type: "bar",
                                stack: "总量",
                                itemStyle: {
                                    normal: {
                                        barBorderRadius: 30, //设置柱状图为圆角
                                        color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                            {
                                                offset: 0,
                                                color: "rgba(192,42,84,1)"
                                            },
                                            {
                                                offset: 1,
                                                color: "rgba(127,69,224,1)"
                                            }
                                        ])
                                    }
                                },
                                label: {
                                    show: true,
                                    position: "insideLeft",
                                    color: "#fff",
                                    formatter: "{b}" + "：{c}" + "%"
                                },
                                data: [],
                                markLine: {
                                    data: [],
                                    symbol: ["none", "none"],
                                    position: "insideTopCenter",
                                    itemStyle: {
                                        normal: {
                                            lineStyle: {
                                                type: "dotted",
                                                color: "white"
                                            },
                                            label: {
                                                show: false,
                                                position: "middle",
                                                formatter: "数据平均 :"
                                            }
                                        }
                                    },
                                    large: true,
                                    effect: {
                                        show: false,
                                        loop: true,
                                        period: 0,
                                        scaleSize: 2,
                                        color: null,
                                        shadowColor: null,
                                        shadowBlur: null
                                    }
                                }
                            }
                        ]
                    },
                ],
                zhl: {
                    tooltip: {
                        trigger: "item",
                        triggerOn: "mousemove"
                    },
                    series: {
                        type: "sankey",
                        right: "40",
                        top: "10",
                        focusNodeAdjacency: "allEdges",
                        label: {
                            color: "#FFF",
                            formatter: "{b}"
                        },
                        data: [],
                        links: [],
                        levels: [
                            {
                                depth: 0,
                                itemStyle: {
                                    color: "#7c1dba"
                                },
                                lineStyle: {
                                    color: "source",
                                    opacity: 0.5
                                }
                            },
                            {
                                depth: 1,
                                itemStyle: {
                                    color: "#52e264"
                                },
                                lineStyle: {
                                    color: "source",
                                    opacity: 0.6
                                }
                            },
                            {
                                depth: 2,
                                itemStyle: {
                                    color: "#008DFF"
                                },
                                lineStyle: {
                                    color: "source",
                                    opacity: 0.6
                                }
                            },
                            {
                                depth: 3,
                                itemStyle: {
                                    color: "#008DFF"
                                },
                                lineStyle: {
                                    color: "source",
                                    opacity: 0.6
                                }
                            }
                        ]
                    }
                },
                jyph: {
                    barWidth: 20,
                    tooltip: {
                        trigger: "axis",
                        axisPointer: {
                            // 坐标轴指示器，坐标轴触发有效
                            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        top: 0,
                        bottom: 50,
                        left: 20
                    },
                    xAxis: {
                        name: "元",
                        type: "value",
                        position: "bottom",
                        axisTick: {
                            //坐标轴刻度
                            show: false
                        },
                        axisLabel: {
                            interval: 20,
                            rotate: 45, //代表逆时针旋转45度
                            textStyle: {
                                color: "#FFF"
                            }
                        },
                        splitLine: {show: false},
                        axisLine: {
                            lineStyle: {
                                color: "#FFF"
                            }
                        }
                    },
                    yAxis: {
                        type: "category",
                        axisLine: {show: false},
                        axisLabel: {show: false},
                        axisTick: {show: false},
                        splitLine: {show: false},
                        data: []
                    },
                    series: [
                        {
                            name: '',
                            type: "bar",
                            stack: "总量",
                            itemStyle: {
                                normal: {
                                    // barBorderRadius: 30, //设置柱状图为圆角
                                    color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                        {
                                            offset: 0.3,
                                            color: "#4760ff"
                                        },
                                        {
                                            offset: 0.6,
                                            color: "#0dccff"
                                        },
                                        {
                                            offset: 1,
                                            color: "#36a6f9"
                                        }
                                    ])
                                }
                            },
                            label: {
                                show: true,
                                formatter: "{b}",
                                position: "insideLeft"
                            },
                            data: [],
                            markLine: {
                                data: [],
                                symbol: ["none", "none"],
                                position: "insideTopCenter",
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: "dotted",
                                            color: "white"
                                        },
                                        label: {
                                            show: false,
                                            position: "middle",
                                            formatter: "数据平均 :"
                                        }
                                    }
                                },
                                large: true,
                                effect: {
                                    show: false,
                                    loop: true,
                                    period: 0,
                                    scaleSize: 2,
                                    color: null,
                                    shadowColor: null,
                                    shadowBlur: null
                                }
                            }
                        }
                    ]
                },
                bottomType: [],
                plate: [],
                active: 1,
                Format: 1,
                Type: 1,
            }
        },
        methods: {
            clickType(v) {
                this.clickNum = v;
                this.searchDot = "";
                this.$emit("clickType", v);
            },
            searchChange(v) {
                this.$refs["map"].searchDot(v);
            },
            updateHomeState(v) {
                let obj = {
                    pageTheme: this.selectTheme,
                    operating: [this.Type, this.Format],
                    revenueProfit: this.active,
                    map: {
                        oid: this.searchDot,
                        clickNum: this.clickNum
                    }
                };
                this.$store.commit("updateHomeSate", obj);
                this.$emit("changeTheme", obj)
            },
            /**
             * @param d 数据集
             * @param a 参数一
             * @param b 参数二
             * @param c 参数三
             * */
            formatter(d, a, b, c) {
                let obj = {
                    name: [],
                    value: []
                };
                if (!d || d.length === 0) {
                    return obj;
                }
                d.forEach(i => {
                    obj.name.unshift(i[a]);
                    obj.value.unshift(i[b])
                });
                return obj;
            },
            //业态 Format === changeValue,类型 Type===selected
            ranking(selected, changeValue) {
                this.$refs['jyph'].startLoading();
                this.Format = changeValue;
                this.Type = selected;
                let url;
                let param = {
                    type: ''
                };
                if (selected === 1) url = '/sundry/service_data_orderby_list';
                if (selected === 2) url = '/sundry/station_data_orderby_list';
                if (selected === 3) url = '/sundry/shop_data_orderby_list';
                if (changeValue === 1) param.type = 'sumMoney';
                if (changeValue === 2) param.type = '';
                if (changeValue === 3) param.type = 'onePrice';
                if (changeValue === 4) param.type = 'orderNum';
                if (changeValue === 5) param.type = 'ZhuanHuan';
                if (changeValue == 1) this.jyph.xAxis.name = "万元";
                if (changeValue == 2 || changeValue == 3) this.jyph.xAxis.name = "元";
                if (changeValue == 4) this.jyph.xAxis.name = "个";
                if (changeValue == 5) this.jyph.xAxis.name = "‰";
                this.$axios.get('/api' + url, {params: param}).then(res => {
                    let data = this.DeepCopy(res.data.data);
                    let fd = this.formatter(data, 'name', param.type);
                    this.jyph.yAxis.data = fd.name;
                    this.jyph.series[0].data = fd.value;
                    this.$echarts["init"](document.getElementById("bllb")).setOption(this.jyph);
                    this.$refs['jyph'].stopLoading();
                }).catch(e => {
                    this.jyph.yAxis.data = [];
                    this.jyph.series[0].data = [];
                    this.$echarts["init"](document.getElementById("bllb")).setOption(this.jyph);
                    this.$refs['jyph'].stopLoading();
                })
            },
            selectType(v, a) {
                this.active = a;
                for (let i = 3; i < 9; i++) {
                    this.$refs[i].startLoading();
                }
                let PID = ["实业公司", "服务区板块", "能源板块", "商业板块", "传媒公司"];
                this.$axios["get"]("/api/index/liudabankuai", {
                    params: {
                        financeTypeId: v,
                        plateId: "123"
                    }
                })["then"](res => {
                    let data = this.getData(res.data.data);
                    this.ECData[3].xAxis[0].data = data[0];
                    this.ECData[3].series[0].data = data[1];
                });
                this.$axios["get"]("/api/index/wan_cheng_lv", {params: {financeTypeId: v}})["then"](res => {
                    let datas = res.data.data;
                    datas.sort(function (a, b) {
                        return a.tCRate - b.tCRate;
                    });
                    let series = [];
                    let yAxis = [];
                    datas.forEach(i => {
                        if (i.yAxis != "小龙虾公司" && i.yAxis != "新致公司") {
                            series.push(i.tCRate);
                            yAxis.push(i.plateId);
                        }
                    });
                    this.ECData[8].yAxis.data = yAxis;
                    this.ECData[8].series[0].data = series;
                });
                this.plate.forEach(i => {
                    let index = parseInt(PID.join(',').indexOf(i.plateName));
                    if (index !== -1) {
                        this.$axios["get"]("/api/index/liudabankuai", {
                            params: {
                                financeTypeId: v,
                                plateId: i.plateId
                            }
                        })["then"](res => {
                            let ix = PID.indexOf(i.plateName) + 3;
                            let data = this.getData(res.data.data);
                            this.ECData[ix].xAxis[0].data = data[0];
                            this.ECData[ix].series[0].data = data[1];
                            this.childRef(9, 100, this.$refs, this.ECData);
                        })
                    }
                });
            },
            getData(v) {
                let series = [];
                let coordinate = [];
                if (v && v.length > 0) {
                    v.forEach(i => {
                        series.push((Number(i.yAxis) / 100000000).toFixed("2"));
                        coordinate.push(parseInt((i.xBxis).split('-')[1]));
                    })
                }
                return [coordinate, series]
            },
            dblclickDot(oid, item) {
                this.$emit("dblclickDot", oid, item);
            },
            ZHL() {
                this.$axios.get("/api/jtService/station_order_money", {
                    params: {
                        pageNum: 1,
                        pageSize: 10
                    }
                }).then(v => {
                    let name = [];
                    let links = [];
                    name.push({name: "车辆"});
                    let sum = 0;
                    v.data.forEach(item => {
                        item.moneyVoList.forEach(i => {
                            links.push({
                                source:
                                    i.goodsType.substr(0, 2) == "柴油"
                                        ? `0#${i.goodsType.substr(2)}`
                                        : i.goodsType.substr(0, 2) +
                                        "#" +
                                        i.goodsType.substr(2, i.goodsType.length - 1),
                                target: item.typeName,
                                value: i.count
                            });
                            sum += parseInt(i.count);
                        });
                        links.unshift({
                            source: item.typeName,
                            target: "车辆",
                            value: sum.toString()
                        });
                    });
                    links.forEach((i, index) => {
                        let color = "";
                        color = "#00BBFF";
                        if (index == 1) color = "#00BBFF";
                        if (index == 2) color = "#4860FF";
                        if (index == 3) color = "#D7C12F";
                        if (index == 4) color = "#7C1BDA";
                        if (index == 5) color = "#30D6FC";
                        if (index == 6) color = "#52E266";
                        name.push({
                            name: i.source,
                            itemStyle: {
                                normal: {
                                    color: color,
                                    borderColor: color
                                }
                            }
                        });
                    });
                    this.zhl.series.data = name;
                    this.zhl.series.links = links;
                    this.$echarts["init"](document.getElementById("self_d")).setOption(this.zhl);
                    this.$refs['zhl'].stopLoading();
                })
            },
            initMap(v) {
                this.$refs['map'].initMap(v, "darkblue");
            }
        },
        async mounted() {
            let this_ = this;
            this_.nowTime = time();
            setInterval(function () {
                this_.nowTime = time();
            }, 1000);
            const [yskzl, yslr, plate] = await Promise.all([this.$axios.get("/api/index/rate_list", {params: {type: "ys"}}), this.$axios.get("/api/index/finance_type_list"), this.$axios.get("/api/jt_finance/plate_list")]);
            this.bottomType = yslr.data.data;
            this.plate = plate.data.data;
            let data = yskzl.data.data;

            let sum = 0;
            let rateCount = [];
            let xBxis = [];
            data.forEach(i => {
                sum += i.ysRateCount - 0;
            });
            data.sort(function (a, b) {
                return b.ysRateCount - a.ysRateCount;
            });
            data.forEach(element => {
                rateCount.unshift(element.ysRateCount);
                xBxis.unshift(element.plateName);
            });
            this.ECData[0].series[0].data = rateCount;
            this.ECData[0].yAxis.data = xBxis;
            await this.selectType(this.bottomType[1]['financeTypeId'], 1);
            this.childRef(9, 100, this.$refs, this.ECData);
            this.ZHL();
            this.ranking(1, 1);
            let homeState = this.$store.state.homeState;
            if (homeState.map.oid) {
                this.searchDot = homeState.map.oid;
                this.$refs["map"].searchDot(homeState.map.oid);
            }
            if (homeState.map.clickNum) {
                this.clickNum = homeState.map.clickNum;
            }
        }
    }
</script>

<style scoped lang="less">
    .HomeSecond {
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        justify-content: flex-start;
        background-image: url("../../../assets/showOffHome/home2/background.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;

        .HomeSecond_header {
            height: 90px;
            width: 100%;
            position: relative;

            .HomeSecond_header_img {
                position: absolute;
            }
        }

        @HomeSecond_PlugIn_Height: 30px;

        .HomeSecond_PlugIn {
            height: @HomeSecond_PlugIn_Height;
            width: 100%;
            position: relative;

            .HomeSecond_PlugIn_Broadcast {
                width: 48%;
                height: @HomeSecond_PlugIn_Height;
                position: absolute;
                top: 0;
                left: calc(18% + 70px);
                bottom: 0;
                right: 0;
                background: rgba(34, 188, 255, 0.2);
                border: 1px solid #0681d5;
                border-radius: 20px;

                .HomeSecond_PlugIn_Broadcast_content {
                    width: calc(100% - 20px);
                    line-height: @HomeSecond_PlugIn_Height;
                    margin: 0 10px;

                    i {
                        font-size: 25px;
                        color: red;
                        vertical-align: -3px;
                    }

                    span {
                        padding-left: 5px;
                        color: red;
                    }
                }
            }

            .HomeSecond_PlugIn_Time-Theme {
                min-width: 10%;
                height: @HomeSecond_PlugIn_Height;
                position: absolute;
                top: 0;
                right: 70px;
                line-height: @HomeSecond_PlugIn_Height;

                span {
                    float: left;
                    color: white;
                    margin-right: 10px;
                }

                /deep/ .el-select {
                    width: 50px;
                    float: left;

                    .el-input {
                        .el-input__inner {
                            height: 28px;
                            line-height: 28px;
                            border-radius: 0;
                            background-color: rgba(0, 0, 0, 0);
                            color: white;
                            padding: 0 5px;
                            text-align: center;
                            border: none;
                            border-bottom: 2px solid #0681d5;
                        }

                        .el-input__suffix {
                            display: none;
                        }
                    }
                }
            }
        }

        .HomeSecond_container {
            height: calc(100% - 120px - 5px);
            width: calc(100% - 40px);
            padding: 5px 20px 0;

            .HomeSecond_content {
                width: calc(100% - 0px);
                height: calc(100% - 20px);
                padding: 10px 0;

                .HomeSecond_content_content {
                    width: 100%;
                    height: 100%;

                    .HomeSecond_content_content_top {
                        width: 100%;
                        height: calc(100% - 205px);
                        margin-bottom: 5px;
                        list-style: none;
                        display: flex;
                        flex-wrap: nowrap;
                        flex-direction: row;
                        justify-content: space-between;

                        .HomeSecond_content_content_top_left {
                            width: 18%;
                            height: 100%;

                            .sm_cc {
                                width: 100%;
                                height: 100%;
                                list-style: none;
                                display: flex;
                                flex-direction: column;
                                justify-content: space-between;
                                flex-wrap: nowrap;

                                li {
                                    width: 100%;
                                    height: 33%;
                                }
                            }
                        }

                        .HomeSecond_content_content_top_center {
                            width: 54%;
                            height: 100%;
                            position: relative;
                            overflow: hidden;

                            .HomeSecond_content_content_top_center_search {
                                position: absolute;
                                z-index: 10;
                                width: 200px;
                                height: 35px;
                                top: 10px;
                                left: 10px;

                                /deep/ .el-select {
                                    width: 100%;
                                    height: 30px;

                                    .el-input {
                                        height: 30px;

                                        .el-input__inner {
                                            height: 30px;
                                            line-height: 30px;
                                            border: none;
                                            border-radius: 0;
                                        }

                                        .el-input__suffix {
                                            .el-input__suffix-inner {
                                                .el-select__caret {
                                                    height: 30px;
                                                    line-height: 30px;
                                                }
                                            }
                                        }
                                    }
                                }
                            }

                            .HomeSecond_content_content_top_center_type {
                                position: absolute;
                                z-index: 10;
                                top: 0;
                                right: -80px;
                                display: flex;
                                flex-direction: column;
                                justify-content: space-around;
                                flex-wrap: nowrap;
                                transition: linear 0.4s;

                                span {
                                    width: 80px;
                                    line-height: 30px;
                                    color: white;
                                    background: rgba(255, 255, 255, 0.5);
                                    text-align: center;
                                    cursor: pointer;
                                }

                                .click {
                                    background: rgb(3 84 187);
                                }
                            }
                        }

                        .HomeSecond_content_content_top_center:hover .HomeSecond_content_content_top_center_type {
                            right: 0;
                        }

                        .HomeSecond_content_content_top_right {
                            width: 27%;
                            height: 100%;

                            .sm_cc {
                                width: 100%;
                                height: 100%;
                                list-style: none;
                                display: flex;
                                flex-direction: column;
                                justify-content: space-between;
                                flex-wrap: nowrap;

                                li:first-child {
                                    height: 45%;
                                    width: 100%;
                                }

                                li:last-child {
                                    height: 54%;
                                    width: 100%;
                                }

                                .ll {
                                    width: 80%;
                                    height: 100%;
                                }

                                .rr {
                                    width: 20%;
                                    height: 100%;
                                    display: flex;
                                    flex-wrap: nowrap;
                                    flex-direction: column;
                                    justify-content: center;
                                    font-size: 20px;
                                    color: white;
                                    font-weight: 800;
                                    line-height: 50px;
                                }


                                .bll {
                                    width: calc(100% - 50px);
                                    height: 100%;

                                    .bllt {
                                        width: 100%;
                                        height: 25px;
                                        display: flex;
                                        flex-wrap: nowrap;
                                        flex-direction: row;
                                        justify-content: space-around;

                                        span {
                                            color: white;
                                            cursor: pointer;
                                            font-size: 14px;
                                        }

                                        .bllta {
                                            color: #409EFF;
                                        }
                                    }

                                    .bllb {
                                        width: 100%;
                                        height: calc(100% - 25px);
                                    }
                                }

                                .brr {
                                    height: 100%;
                                    width: 50px;
                                    display: flex;
                                    flex-direction: column;
                                    justify-content: center;
                                    flex-wrap: nowrap;
                                    color: white;
                                    line-height: 25px;
                                    text-align: center;

                                    .bllta {
                                        color: #409EFF;
                                    }

                                    span {
                                        display: inline-block;
                                        cursor: pointer;
                                        font-size: 14px;
                                    }
                                }
                            }
                        }
                    }

                    .HomeSecond_content_content_bottom {
                        width: 100%;
                        height: 200px;
                        display: flex;
                        flex-wrap: nowrap;
                        flex-direction: row;
                        justify-content: space-between;

                        .HomeSecond_content_content_bottom_button {
                            width: 30px;
                            height: 100%;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            flex-wrap: nowrap;

                            div {
                                text-align: center;
                                line-height: 40px;
                                border: 1px solid #1d3d71;
                                box-shadow: 0 0 20px #1d3d71 inset;
                                color: #ffffff;
                                cursor: pointer;
                            }

                            .active {
                                color: #ffc363;
                            }

                            div:hover {
                                color: #ffc363;
                                background: rgba(51, 136, 221, 0.35);
                            }
                        }

                        .HomeSecond_content_content_bottom_content {
                            width: calc(100% - 40px);
                            height: 100%;

                            ul {
                                width: 100%;
                                height: 100%;
                                list-style: none;
                                display: flex;
                                flex-direction: row;
                                flex-wrap: nowrap;
                                justify-content: space-between;

                                li {
                                    width: 16.4%;
                                    height: 100%;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>