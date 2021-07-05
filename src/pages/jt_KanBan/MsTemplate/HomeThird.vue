<template>
    <div class="HomeThird">
        <div class="HomeThird_header">
            <img class="HomeThird_header_img" src="../../../assets/showOffHome/home3/title.png" alt=""/>
        </div>
        <div class="HomeThird_PlugIn">
            <!-- <div class="HomeThird_PlugIn_Broadcast">
                 <div class="HomeThird_PlugIn_Broadcast_content">
                     <i class="iconfont">&#xe614;</i>
                     <span>凌晨二时 蔡甸服务区因为XXX 已临时关闭 预计XXX开放</span>
                 </div>
             </div>-->

            <div class="HomeThird_PlugIn_Time-Theme">
                <span>{{nowTime}}</span>
                <el-select v-model="selectTheme" @change="updateHomeState(selectTheme)">
                    <el-option label="默认" value="HomeFirst"></el-option>
                    <el-option label="靛青" value="HomeSecond"></el-option>
                    <el-option label="机械" value="HomeThird"></el-option>
                </el-select>
            </div>
        </div>
        <div class="HomeThird_container">
            <div class="leftContent">
                <child-border style="height: 35%" src="1.png">
                    <div class="LTT">
                        <internal ref="LTT" id="lt" style="width: 50%"></internal>
                        <div class="console">
                            <div class="buttonGroup">
                                <img @click="selectCompay('1')"
                                     :src="selected==='1'?require('../../../assets/showOffHome/home3/sfwq.png'):require('../../../assets/showOffHome/home3/ufwq.png')">
                                <img @click="selectCompay('2')"
                                     :src="selected==='2'?require('../../../assets/showOffHome/home3/scm.png'):require('../../../assets/showOffHome/home3/ucm.png')">
                                <img @click="selectCompay('3')"
                                     :src="selected==='3'?require('../../../assets/showOffHome/home3/ssy.png'):require('../../../assets/showOffHome/home3/usy.png')">
                                <img @click="selectCompay('4')"
                                     :src="selected==='4'?require('../../../assets/showOffHome/home3/sny.png'):require('../../../assets/showOffHome/home3/uny.png')">
                            </div>
                            <div class="information">
                                <p>实际金额<span class="money">{{showData.sjMoney}}万元</span></p>
                                <p>预算金额<span class="money">{{showData.ysMoney}}万元</span></p>
                                <p>实际控制率<span class="proportion">{{showData.sjRateCount}}%</span></p>
                                <p>预算控制率<span class="proportion">{{showData.ysRateCount}}%</span></p>
                            </div>
                        </div>
                    </div>
                </child-border>
                <child-border style="height: 35%" src="2.png">
                    <div style="width: 100%;height: 100%">
                        <internal ref="LTC" id="lc"></internal>
                    </div>
                </child-border>
                <child-border style="height: 30%" src="3.png">
                    <div class="LBT">
                        <div class="all">
                            <p><span class="c1">￥5000,000</span>总应收款</p>
                            <p><span class="c2">￥5000,000</span>总已收款</p>
                        </div>
                        <div class="chartsList">
                            <div class="charts">
                                <internal ref="LTB" id="lb"></internal>
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
                </child-border>
            </div>
            <div class="centerContent">
                <div style="width: 100%;height: 70%">
                    <div class="map">
                        <div class="searchMap" style="width: 20%;position:absolute;top:25px;left: 40px;z-index: 99">
                            <el-select v-model="searchDot" filterable @change="searchChange(searchDot)">
                                <el-option v-for="(i,x) in searchQuery" :key="x" :value="i.oid"
                                           :label="i.searchName"></el-option>
                                <div slot="prefix">
                                    <div style="width: 25px;height: 35px;line-height: 35px;text-align: center;font-size: 16px"
                                         class="el-icon-search">
                                    </div>
                                </div>
                            </el-select>
                        </div>
                        <map-base-child ref="map" map-style="fresh" @dblclickDot="dblclickDot"></map-base-child>
                        <div class="small left top" style="height: 100%">
                            <img src="../../../assets/showOffHome/home3/2_01.png" style="height: 100%" alt="">
                        </div>
                        <div class="small top left" style="width: 100%;top:-8px">
                            <img src="../../../assets/showOffHome/home3/1_01.png" style="width: 100%">
                        </div>
                        <div class="small right top" style="height: 100%">
                            <img src="../../../assets/showOffHome/home3/3_03.png" style="height: 100%">
                        </div>
                        <div class="small bottom left" style="text-align: center;bottom: -7px;width: 100%">
                            <img src="../../../assets/showOffHome/home3/4_05.png" style="width: 100%;">
                        </div>
                        <div class="console">
                            <img :src="clickNum===1?require('../../../assets/showOffHome/home3/icon-1-1.png'):require('../../../assets/showOffHome/home3/icon-1.png')"
                                 alt="" @click="clickType(1)"/>
                            <img :src="clickNum===2?require('../../../assets/showOffHome/home3/icon-2-1.png'):require('../../../assets/showOffHome/home3/icon-2.png')"
                                 alt="" @click="clickType(2)"/>
                            <img :src="clickNum===3?require('../../../assets/showOffHome/home3/icon-3-1.png'):require('../../../assets/showOffHome/home3/icon-3.png')"
                                 alt="" @click="clickType(3)"/>
                            <img :src="clickNum===4?require('../../../assets/showOffHome/home3/icon-4-1.png'):require('../../../assets/showOffHome/home3/icon-4.png')"
                                 alt="" @click="clickType(4)"/>
                            <img :src="clickNum===5?require('../../../assets/showOffHome/home3/icon-5-1.png'):require('../../../assets/showOffHome/home3/icon-5.png')"
                                 alt="" @click="clickType(5)"/>
                        </div>
                    </div>
                </div>
                <div style="width: 100%;height: 30%">
                    <div class="CBT">
                        <div class="tab">
                            <img src="../../../assets/showOffHome/home3/icon.1.png" alt=""/>
                            <img @click="selectCompayCBT('1')"
                                 :src="selectedCBT==='1'?require('../../../assets/showOffHome/home3/s1.png'):require('../../../assets/showOffHome/home3/u1.png')"
                                 alt=""/>
                            <img @click="selectCompayCBT('2')"
                                 :src="selectedCBT==='2'?require('../../../assets/showOffHome/home3/s2.png'):require('../../../assets/showOffHome/home3/u2.png')"
                                 alt=""/>
                            <img @click="selectCompayCBT('3')"
                                 :src="selectedCBT==='3'?require('../../../assets/showOffHome/home3/s3.png'):require('../../../assets/showOffHome/home3/u3.png')"
                                 alt=""/>
                            <img @click="selectCompayCBT('4')"
                                 :src="selectedCBT==='4'?require('../../../assets/showOffHome/home3/s4.png'):require('../../../assets/showOffHome/home3/u4.png')"
                                 alt=""/>
                            <img @click="selectCompayCBT('5')"
                                 :src="selectedCBT==='5'?require('../../../assets/showOffHome/home3/s5.png'):require('../../../assets/showOffHome/home3/u5.png')"
                                 alt=""/>
                            <img src="../../../assets/showOffHome/home3/icon.7.png" alt=""/>
                        </div>
                        <div class="charts">
                            <internal id="cb" ref="CBT"></internal>
                        </div>
                    </div>
                </div>
            </div>
            <div class="rightContent">
                <child-border style="height: 35%" src="4.png">
                    <child-r-t-temp></child-r-t-temp>
                </child-border>
                <child-border style="height: 35%" src="5.png">
                    <child-r-c-temp ref="RCT"></child-r-c-temp>
                </child-border>
                <child-border style="height: 30%" src="6.png">
                    <child-r-b-temp></child-r-b-temp>
                </child-border>
            </div>
        </div>
    </div>
</template>

<script>
    import time from "../MsJavaScript/time";
    import index from "./HTChildren/index.js"
    import MapBaseChild from "../../../components/MapBaseChild";

    export default {
        name: "HomeThird",
        components: {MapBaseChild, ...index},
        props: {
            searchQuery: {
                type: Array,
                default: _ => {
                    return []
                }
            }
        },
        data() {
            return {
                selectTheme: 'HomeThird',
                nowTime: '',
                selected: '1',
                selectedCBT: '1',
                clickNum: 1,
                showData: {
                    sjMoney: '',
                    ysMoney: '',
                    sjRateCount: '',
                    ysRateCount: '',
                },
                searchDot: ''
            }
        },
        methods: {
            clickType(v) {
                this.clickNum = v;
                this.searchDot = "";
                this.$emit("clickType", v);
            },
            dblclickDot() {
            },
            searchChange(v) {
                this.$refs["map"].searchDot(v);
            },
            updateHomeState() {
                let obj = {
                    pageTheme: this.selectTheme,
                    map: {
                        oid: this.searchDot,
                        clickNum: this.clickNum
                    }
                };
                this.$store.commit("updateHomeSate", obj);
                this.$emit("changeTheme", obj);
            },
            async init(v) {
                //已完成
                let completed;
                //未完成
                let undone;
                if (!v) {
                    v = '服务区板块';
                }
                const res = await this.$axios.get("/api/index/rate_list", {params: {type: "ys"}});
                let data = res.data.data;
                data.forEach(i => {
                    if (v === i.plateName) {
                        completed = i.ysRateCount;
                        undone = 100 - i.ysRateCount;
                        Object.assign(this.showData, i);
                    }
                });
                let op = {
                    backgroundColor: this.$echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [
                        {
                            offset: 0,
                            color: "#431ab8"
                        },
                        {
                            offset: 1,
                            color: "#471bba"
                        }
                    ]),
                    title: {
                        text: completed + "{a|%}",
                        textStyle: {
                            fontSize: 50,
                            fontFamily: "Microsoft Yahei",
                            fontWeight: "normal",
                            color: "#fff",
                            rich: {
                                a: {
                                    fontSize: 28
                                }
                            }
                        },
                        x: "center",
                        y: "35%"
                    },
                    graphic: [
                        {
                            type: "group",
                            left: "center",
                            top: "60%",
                            children: [
                                {
                                    type: "text",
                                    z: 100,
                                    left: "10",
                                    top: "middle",
                                    style: {
                                        fill: "#aab2fa",
                                        text: "",
                                        font: "20px Microsoft YaHei"
                                    }
                                }
                            ]
                        }
                    ],
                    series: [
                        {
                            type: "liquidFill",
                            radius: "80%",
                            center: ["50%", "50%"],
                            //  shape: 'roundRect',
                            data: [completed / 100, completed / 100, completed / 100, completed / 100, completed / 100, completed / 100, completed / 100],
                            backgroundStyle: {
                                color: {
                                    type: "linear",
                                    x: 1,
                                    y: 0,
                                    x2: 0.5,
                                    y2: 1,
                                    colorStops: [
                                        {
                                            offset: 1,
                                            color: "rgba(68, 145, 253, 0)"
                                        },
                                        {
                                            offset: 0.5,
                                            color: "rgba(68, 145, 253, .25)"
                                        },
                                        {
                                            offset: 0,
                                            color: "rgba(68, 145, 253, 1)"
                                        }
                                    ],
                                    globalCoord: false
                                }
                            },
                            outline: {
                                borderDistance: 0,
                                itemStyle: {
                                    borderWidth: 0,
                                    borderColor: {
                                        type: "linear",
                                        x: 0,
                                        y: 0,
                                        x2: 0,
                                        y2: 1,
                                        colorStops: [
                                            {
                                                offset: 0,
                                                color: "rgba(69, 73, 240, 0)"
                                            },
                                            {
                                                offset: 0.5,
                                                color: "rgba(69, 73, 240, .25)"
                                            },
                                            {
                                                offset: 1,
                                                color: "rgba(69, 73, 240, 1)"
                                            }
                                        ],
                                        globalCoord: false
                                    },
                                    shadowBlur: 10,
                                    shadowColor: "#000"
                                }
                            },
                            itemStyle: {
                                color: {
                                    type: "linear",
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [
                                        {
                                            offset: 1,
                                            color: "rgba(58, 71, 212, 0)"
                                        },
                                        {
                                            offset: 0.5,
                                            color: "rgba(31, 222, 225, .2)"
                                        },
                                        {
                                            offset: 0,
                                            color: "rgba(31, 222, 225, 1)"
                                        }
                                    ],
                                    globalCoord: false
                                }
                            },
                            label: {
                                normal: {
                                    formatter: ""
                                }
                            }
                        },
                        {
                            type: "pie",
                            hoverAnimation: false,
                            radius: ["85%", "90%"],
                            labelLine: {
                                show: false
                            },
                            data: [
                                {value: completed, itemStyle: {color: "#56E2FF"}},
                                {value: undone, itemStyle: {color: "#494F5E"}}
                            ]
                        }
                    ]
                };
                this.$refs["LTT"].initECharts(op);
            },
            init_() {
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
                                offset: [-20, -25],
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
                this.$refs["LTC"].initECharts(op);
            },
            init__() {
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
                this.$refs["LTB"].initECharts(option);
            },
            async init___(v) {
                let plateId;
                let ysLine = [];
                let lrLine = [];
                if (!v) {
                    v = '实业公司';
                }
                if (v === '实业公司') {
                    plateId = 123;
                }
                const finance = await this.$axios.get("/api/index/finance_type_list");
                const plate = await this.$axios.get("/api/jt_finance/plate_list");
                let financeTypeId = [finance.data.data[0].financeTypeId, finance.data.data[1].financeTypeId];
                let plateData = plate.data.data;
                plateData.forEach(i => {
                    if (i.plateName == v) {
                        plateId = i.plateId;
                    }
                });

                let ysBar = [];
                let lrBar = [];
                let time = [];
                let type = {'实业公司': 'sye', '服务区板块': 'fwq', '能源板块': 'ny', '商业板块': 'sy', '传媒公司': 'cm'};
                const [d1, d2] = await Promise.all([
                    this.$axios.get("/apifin/home/plate", {params: {selectYear: 2021, type: 1}}),
                    this.$axios.get("/apifin/home/plate", {params: {selectYear: 2021, type: 2}}),
                ]);
                let d1_d = d1.data.data[type[v]];
                let d2_d = d2.data.data[type[v]];
                if (d1_d.length > d2_d.length) {
                    time = this.mySet(d1_d, 'xBxis');
                } else {
                    time = this.mySet(d2_d, 'xBxis');
                }
                ysBar = this.mySet(d1_d, 'yAxis');
                lrBar = this.mySet(d2_d, 'yAxis');
                // ysLine = this.YOY(JSON.parse(JSON.stringify(ysBar)));
                // lrLine = this.YOY(JSON.parse(JSON.stringify(lrBar)));
                let option = {
                    barWidth: 15,
                    legend: {
                        data: ["营收", "利润", "营收增比", "利润增比"],
                        right: 0,
                        top: "center",
                        orient: "vertical",
                        textStyle: {
                            color: "white"
                        }
                    },
                    grid: {
                        right: 130,
                        top: 30,
                        bottom: 50,
                    },
                    xAxis: [
                        {
                            type: "category",
                            data: time,
                            axisPointer: {
                                type: "shadow"
                            },
                            axisLabel: {
                                color: "white"
                            },
                            axisLine: {show: false},
                            axisTick: {show: false},
                            splitLine: {show: false}
                        }
                    ],
                    yAxis: [
                        {
                            type: "value",
                            name: '亿元',
                            nameTextStyle: {
                                color: "#fff"
                            },
                            axisLabel: {
                                // formatter: '{value} 百万',
                                color: "white"
                            },
                            axisLine: {show: false},
                            axisTick: {show: false},
                            splitLine: {show: false}
                        },
                        {
                            type: "value",
                            name: '%',
                            nameTextStyle: {
                                color: "#fff"
                            },
                            axisLabel: {
                                // formatter: '{value} %',
                                color: "white"
                            },
                            axisLine: {show: false},
                            axisTick: {show: false},
                            splitLine: {show: false}
                        }
                    ],
                    series: [
                        {
                            name: "营收",
                            type: "bar",
                            data: ysBar,
                            itemStyle: {color: 'rgba(29,183,250,1)'}
                        },
                        {
                            name: "利润",
                            type: "bar",
                            data: lrBar,
                            itemStyle: {color: 'rgba(240,165,38,1)'}
                        },
                        /* {
                             name: "营收增比",
                             type: "line",
                             yAxisIndex: 1,
                             data: ysLine,
                             itemStyle: {
                                 color: "#45f6ff"
                             },
                             areaStyle: {
                                 color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                     offset: 0,
                                     color: 'rgba(69,246,255,0.71)'
                                 }, {
                                     offset: 1,
                                     color: 'rgba(58,77,233,0)'
                                 }])
                             },
                         },
                         {
                             name: "利润增比",
                             type: "line",
                             yAxisIndex: 1,
                             data: lrLine,
                             itemStyle: {
                                 color: "#ffd969"
                             },
                             areaStyle: {
                                 color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                     offset: 0,
                                     color: 'rgba(255,217,105,0.7)'
                                 }, {
                                     offset: 1,
                                     color: 'rgba(250,190,16,0)'
                                 }])
                             },
                         }*/
                    ]
                };
                this.$refs["CBT"].initECharts(option);
            },
            selectCompay(v) {
                this.selected = v;
                let arr = ['', '服务区板块', '传媒公司', '商业板块', '能源板块'];
                this.init(arr[v]);
            },
            selectCompayCBT(v) {
                let arr = ['实业公司', '服务区板块', '能源板块', "商业板块", "传媒公司"];
                this.selectedCBT = v;
                this.init___(arr[v - 1])
            },
            initMap(v) {
                this.$refs['map'].initMap(v, "blue");
                this.$nextTick(_ => {
                    let homeState = this.$store.state.homeState;
                    if (homeState.map.oid) {
                        this.searchDot = homeState.map.oid;
                        this.$refs["map"].searchDot(homeState.map.oid);
                    }
                    if (homeState.map.clickNum) {
                        this.clickNum = homeState.map.clickNum;
                    }
                })
            }
        },
        mounted() {
            let this_ = this;
            this_.nowTime = time();
            setInterval(function () {
                this_.nowTime = time();
            }, 1000);
            this.init();
            this.init_();
            this.init__();
            this.init___();
            this.$refs["RCT"].getTableData(1, 1);
        }
    }
</script>

<style scoped lang="less">
    .HomeThird {
        width: 100%;
        height: 100%;
        background-image: url("../../../assets/showOffHome/home3/背景.jpg");
        background-repeat: no-repeat;
        background-size: 100% 100%;

        .HomeThird_header {
            height: 90px;
            width: 100%;
            position: relative;
            text-align: center;

            .HomeThird_header_img {
                height: 85px;
            }
        }

        @HomeThird_PlugIn_Height: 30px;

        .HomeThird_PlugIn {
            height: @HomeThird_PlugIn_Height;
            width: 100%;
            position: relative;

            .HomeThird_PlugIn_Broadcast {
                width: 48%;
                height: @HomeThird_PlugIn_Height;
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                background: rgba(34, 188, 255, 0.2);
                margin: auto;
                border: 1px solid #0681d5;
                transform: skewX(-30deg);

                .HomeThird_PlugIn_Broadcast_content {
                    width: calc(100% - 20px);
                    line-height: @HomeThird_PlugIn_Height;
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

            .HomeThird_PlugIn_Time-Theme {
                min-width: 10%;
                height: @HomeThird_PlugIn_Height;
                position: absolute;
                top: 0;
                right: 70px;
                line-height: @HomeThird_PlugIn_Height;

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

        .HomeThird_container {
            height: calc(100% - 120px - 30px);
            width: calc(100% - 40px);
            padding: 5px 20px 0;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-around;


            .leftContent {
                width: 25%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                flex-wrap: nowrap;
            }

            .centerContent {
                width: 50%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                flex-wrap: nowrap;
            }

            .rightContent {
                width: 25%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                flex-wrap: nowrap;
            }
        }
    }

    .LTT {
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: flex-start;

        .console {
            width: 50%;
            height: 100%;
            display: flex;
            flex-wrap: nowrap;
            flex-direction: column;
            justify-content: center;

            .buttonGroup {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                flex-direction: row;
                justify-content: space-around;

                img {
                    width: 40%;
                    margin-bottom: 10px;
                    cursor: pointer;
                }
            }

            .information {
                width: 100%;

                p {
                    width: 100%;
                    line-height: 25px;
                    color: white;
                    margin: 10px 0 0 10px;

                    span {
                        font-size: 20px;
                        font-weight: 700;
                        padding-left: 15px;
                    }

                    .money {
                        color: #0086ff;
                        font-family: 'Arial';
                    }

                    .proportion {
                        color: #08fafb;
                        font-family: 'Arial';
                    }
                }
            }
        }
    }

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

    .map {
        width: 100%;
        height: calc(100% - 10px);
        position: relative;

        .searchMap {
            /deep/ .el-select {
                margin: 10px 0 0 10px;

                .el-input {
                    .el-input__inner {
                        line-height: 35px;
                        height: 35px;
                        border-radius: 0;
                        color: white;
                        border: none;
                        background: none;
                        background-image: linear-gradient(to right,
                        rgba(33, 122, 255, 0.1),
                        rgba(33, 122, 255, 0.7),
                        rgba(33, 122, 255, 0.1),);
                    }

                    .el-input__suffix {
                        .el-input__suffix-inner {
                            .el-input__icon {
                                color: white;
                                height: 35px;
                                line-height: 35px;
                            }
                        }
                    }
                }
            }
        }

        .small {
            position: absolute;
            z-index: 999;
        }

        .top {
            top: 0;
        }

        .left {
            left: 0;
        }

        .right {
            right: 0;
        }

        .bottom {
            bottom: 0;
        }

        .img {
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
        }

        .console {
            position: absolute;
            z-index: 9999;
            height: 35px;
            bottom: 10px;
            width: 70%;
            left: 15%;
            display: flex;
            flex-wrap: nowrap;
            flex-direction: row;
            justify-content: space-between;

            img {
                cursor: pointer;
            }
        }
    }

    .CBT {
        width: 100%;
        height: 100%;

        .tab {
            width: 85%;
            margin: 0 7.5%;
            height: 30px;
            padding: 10px 0;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;

            img {
                cursor: pointer;
            }
        }

        .charts {
            width: 100%;
            height: calc(100% - 50px);
        }
    }
</style>