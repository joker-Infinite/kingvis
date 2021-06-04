<template>
    <div class="content">
        <div
                class="top hhttf"
                @mouseover="mouseHover('AD')"
                v-loading="loading_"
                element-loading-text="拼命加载中……"
                element-loading-spinner="el-icon-loading"
                element-loading-background="rgba(0, 0, 0, 0.5)"
        >
            <border v-if="backdrop == 0"></border>
            <border-plan-b v-if="backdrop == 1"></border-plan-b>
            <operations
                    class="operations"
                    time="time"
                    @showOne="showOne(1)"
            ></operations>
            <div id="HomeTopRight_top"></div>
            <div class="DataEi" id="HomeTopRight_topData"></div>
            <div class="HomeTopRight_top_right">
                A 分类<br/>
                B 分类<br/>
                C 分类<br/>
            </div>
        </div>
        <div style="width: 100%;height: 2%"></div>
        <div class="bottom">
            <div
                    class="bottom_left hhttf"
                    @mouseover="mouseHover('BD')"
                    v-loading="loading"
                    element-loading-text="拼命加载中……"
                    element-loading-spinner="el-icon-loading"
                    element-loading-background="rgba(0, 0, 0, 0.5)"
            >
                <border v-if="backdrop == 0"></border>
                <border-plan-b v-if="backdrop == 1"></border-plan-b>
                <div class="select_type">
                    <el-radio
                            class="checkboxItem"
                            @change="changeRadioBD(1)"
                            v-model="selectBD"
                            :label="1"
                    >服务区
                    </el-radio>
                    <el-radio
                            class="checkboxItem"
                            @change="changeRadioBD(2)"
                            v-model="selectBD"
                            :label="2"
                    >自营油站
                    </el-radio>
                    <el-radio
                            class="checkboxItem"
                            @change="changeRadioBD(3)"
                            v-model="selectBD"
                            :label="3"
                    >自营超市
                    </el-radio>
                    <el-radio
                            class="checkboxItem"
                            @change="changeRadioBD(4)"
                            v-model="selectBD"
                            :label="4"
                    >服务区招商
                    </el-radio>
                </div>
                <operations class="operations" @showOne="showOne('query')"></operations>
                <div class="operation">
                    <el-radio
                            class="checkboxItem"
                            @change="changeRadioCD(1, '营收')"
                            v-model="selectCD"
                            :label="1"
                    >营收
                    </el-radio>
                    <el-radio
                            class="checkboxItem"
                            @change="changeRadioCD(2, '利润')"
                            v-model="selectCD"
                            :label="2"
                    >利润
                    </el-radio>
                    <el-radio
                            class="checkboxItem"
                            @change="changeRadioCD(3, '客单价')"
                            v-model="selectCD"
                            :label="3"
                    >客单价
                    </el-radio>
                    <el-radio
                            class="checkboxItem"
                            @change="changeRadioCD(4, '订单数')"
                            v-model="selectCD"
                            :label="4"
                    >订单数
                    </el-radio>
                    <el-radio
                            class="checkboxItem"
                            @change="changeRadioCD(5, '转化率')"
                            v-model="selectCD"
                            :label="5"
                    >转化率
                    </el-radio>
                </div>
                <div id="HomeTopRight_bottom_left"></div>
                <div class="DataEi" id="HomeTopRight_bottom_leftData"></div>
            </div>
        </div>
        <show-e-charts ref="showECharts" :backdrop="backdrop"></show-e-charts>
        <show-deatils ref="showDetails" imgSize="small"></show-deatils>
    </div>
</template>

<script>
    import Operations from "../../../components/common/operations";
    import ShowECharts from "../../../components/common/showECharts";
    import clone from "../../../../public/api/clone";
    import Border from "./border";
    import BorderPlanB from "./borderPlanB";
    import ShowDeatils from "../../../components/common/showDeatils";

    export default {
        name: "HomeTopRight",
        props: {
            backdrop: {
                type: Number,
                default: 0
            }
        },
        components: {ShowDeatils, BorderPlanB, Border, ShowECharts, Operations},
        data() {
            return {
                selectBD: 1,
                selectCD: 1,
                AD: {},
                BD: {},
                CD: {},
                option: {},
                resizeData: [],
                loading: false,
                loading_: false
            };
        },
        methods: {
            mouseHover(v) {
                this.option = this[v];
            },
            isNoData(is, id, option) {
                if (is.length === 0) {
                    document.getElementById(id + "Data").innerHTML = "暂无数据";
                    option.xAxis[0].show = false;
                    option.yAxis[0].show = false;
                    this.$echarts.init(document.getElementById(id)).setOption(option);
                } else {
                    document.getElementById(id + "Data").innerHTML = "";
                    this.$echarts.init(document.getElementById(id)).setOption(option);
                }
            },
            showOne(is) {
                if (is === 1) {
                    this.AD.title.textStyle.fontSize = 25;
                    this.AD.title.y = "4%";
                    this.AD.title.left = "53%";
                    this.$refs["showECharts"].openDialog(this.AD, "time");
                    this.$refs["showECharts"].isShow = false;
                    this.$refs["showECharts"].timeSelect = true;
                } else {
                    this.option.title.padding = 50;
                    this.option.title.textStyle.fontSize = 25;
                    this.option.title.y = "-3%";
                    this.option.title.left = "50%";
                    this.option.barWidth = 30;
                    this.option.grid.top = "20%";
                    this.$refs["showECharts"].timeSelect = false;
                    this.$refs["showECharts"].isShow = true;
                    this.$refs["showECharts"].openDialog(this.option, is, {
                        selectBD: this.selectBD,
                        selectCD: this.selectCD
                    });
                }
            },
            changeRadioBD(v) {
                this.selectCD = 1;
                this.initECharts_bottom_left();
            },
            changeRadioCD(v, m) {
                this.initECharts_bottom_left(m, v);
            },
            initECharts_top() {
                this.loading_ = true;
                let HomeTopRight_top = this.$echarts.init(
                    document.getElementById("HomeTopRight_top")
                );
                this.resizeData.push(HomeTopRight_top);
                let option = (this.AD = {
                    title: {
                        text: "转化率",
                        show: true,
                        left: "58%",
                        right: "100",
                        textStyle: {
                            fontFamily: "幼圆",
                            color: "#FFF",
                            fontSize: "15"
                        }
                    },
                    tooltip: {
                        trigger: "item",
                        triggerOn: "mousemove"
                    },
                    series: {
                        type: "sankey",
                        right: "20%",
                        top: "20%",
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
                });
                this.$axios.get("/api/jtService/station_order_money", {
                        params: {
                            monthDate: 3,
                            pageNum: 1,
                            pageSize: 10,
                            yearDate: 2021
                        }
                    })
                    .then(res => {
                        let name = [];
                        let links = [];
                        name.push({name: "车辆"});
                        let sum = 0;
                        res.data.forEach(item => {
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
                            /*links.push({
                                            source: item.stationMoneyTypeVo.typeName,
                                            target: '车辆',
                                            value: parseInt(res.data[0].sumJvCount) + parseInt(res.data[1].sumJvCount),
                                        })*/
                        });
                        let ind = true;
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
                        option.series.data = name;
                        option.series.links = links;
                        HomeTopRight_top.setOption(option);
                        this.loading_ = false;
                    });
            },
            isAxiosw(echarts, option, v) {
                let num = 1;
                this.loading = true;
                let url = '/sundry/station_back_list';
                if (this.selectBD == 1) {
                    url = '/sundry/service_back_list';
                }
                if (this.selectBD == 2) {
                    url = '/sundry/station_back_list';
                }
                if (this.selectBD == 3) {
                    url = '/sundry/shop_back_list';
                }
                //服务区营收
                if (this.selectBD == 1 && this.selectCD == 1) {
                    num = 1;
                }
                if (this.selectBD == 1 && this.selectCD == 2) {
                    num = 0;
                }
                //服务区 客单价
                if (this.selectBD == 1 && this.selectCD == 3) {
                    num = 2;
                }
                //服务区 转化率
                if (this.selectBD == 1 && this.selectCD == 5) {
                    num = 3;
                }
                //自营油站 营收
                if (this.selectBD == 2 && this.selectCD == 1) {
                    num = 7;
                }
                //自营油站 客单价
                if (this.selectBD == 2 && this.selectCD == 3) {
                    num = 8;
                }
                //自营油站 转化率
                if (this.selectBD == 2 && this.selectCD == 5) {
                    num = 9;
                }
                //自营超市 营收
                if (this.selectBD == 3 && this.selectCD == 1) {
                    num = 4;
                }
                //自营超市 客单价
                if (this.selectBD == 3 && this.selectCD == 3) {
                    num = 5;
                }
                //自营超市 转化率
                if (this.selectBD == 3 && this.selectCD == 5) {
                    num = 6;
                }
                this.$axios.get("/api" + url, {params: {num: num}}).then(res => {
                    let yAxis = [];
                    let xAxis = [];
                    let arr = [];
                    let newArr = [];
                    if (!res.data.data) {
                        yAxis = [];
                        xAxis = [];
                    }
                    if (res.data.data) {
                        let data = JSON.parse(JSON.stringify(res.data.data));
                        if (this.selectCD == 5) {
                            data.forEach(i => {
                                i.sumMoney = parseInt(i.orderNum) / parseInt(i.carNum) * 1000
                            })
                        }
                        data.forEach(element => {
                            arr.push(parseInt(element.sumMoney))
                        });
                        newArr = arr.sort((a, b) => {
                            return a - b
                        });
                        xAxis = newArr;
                        data.forEach((i, x) => {
                            yAxis[x] = data[newArr.indexOf(parseInt(data[x].sumMoney))].serviceName
                        })
                    }
                    if ((this.selectBD == 1 && this.selectCD == 1) || (this.selectBD == 2 && this.selectCD == 1)) {
                        option.xAxis.name = "万";
                        xAxis = [];
                        newArr.forEach(i => {
                            xAxis.push(i / 10000);
                        })
                    }
                    if (v == 1 || v == 2 || v == 3) option.xAxis.name = "元";
                    if (v == 4) option.xAxis.name = "个";
                    if (v == 5) option.xAxis.name = "‰";
                    option.yAxis.data = yAxis;
                    option.series[0].data = xAxis;
                    this.BD = option;
                    echarts.setOption(option);
                    this.loading = false;
                }).catch(e => {
                    this.loading = false;
                    option.series[0].data = [];
                    option.yAxis.data = [];
                });
            },
            initECharts_bottom_left(m, v) {
                let that = this;
                let HomeTopRight_bottom_left = this.$echarts.init(
                    document.getElementById("HomeTopRight_bottom_left")
                );
                this.resizeData.push(HomeTopRight_bottom_left);
                let average = 0;
                let option = {
                    barWidth: 20,
                    title: {
                        text: "经营排行",
                        left: "50%",
                        show: true,
                        textStyle: {
                            fontFamily: "幼圆",
                            color: "#FFF",
                            fontSize: "15"
                        }
                    },
                    tooltip: {
                        trigger: "axis",
                        axisPointer: {
                            // 坐标轴指示器，坐标轴触发有效
                            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        top: "25%",
                        bottom: 50
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
                            name: !m ? "收入" : m == "营收" ? "收入" : m,
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
                };
                this.BD = clone(option);
                HomeTopRight_bottom_left.on("click", v => {
                    let name = "";
                    if (this.selectBD == 1) {
                        name = "serviceDetails";
                    }
                    if (this.selectBD == 2) {
                        name = "JYZXiangQing";
                    }
                    that.$refs["showDetails"].openDialog(name, v.name);
                });
                this.isAxiosw(HomeTopRight_bottom_left, option, v);
            },
            isResize() {
                this.resizeData.forEach(element => {
                    element.resize();
                });
            }
        },
        mounted() {
            this.initECharts_top();
            // this.initECharts_bottom();
            this.initECharts_bottom_left();
            // this.initECharts_bottom_right();
        },
        watch: {
            backdrop: {
                handler: function (nv, ov) {
                    let data = document.getElementsByClassName("hhttf");
                    let style = [
                        {
                            border: "1px solid #4cbcf4",
                            boxShadow: " 0 0 50px #4cbcf4 inset"
                        },
                        {
                            border: "1px solid #051021",
                            boxShadow: " 0 0 20px #0354bb inset",
                            background: "rgba(6,17,36,.6)"
                        },
                        {
                            border: "none",
                            boxShadow: "none",
                            background: "#FFF",
                            borderRadius: "10px"
                        }
                    ];
                    for (let i = 0; i < data.length; i++) {
                        Object.assign(data[i].style, style[nv]);
                    }
                },
                deep: true
            }
        }
    };
</script>

<style scoped lang="less">
    .DataEi {
        position: absolute;
        top: 0;
        margin: 0;
    }

    .content /deep/ .el-radio {
        padding: 0;
        margin: 0;
        // margin-left: .3em;
    }

    .content /deep/ .el-radio__label {
        padding: 0;
        margin-left: 0.2em;
    }

    .content /deep/ .el-radio {
        margin-right: 1em;
    }

    .content {
        width: 100%;
        height: 100%;

        .top {
            width: 100%;
            height: 38%;
            position: relative;
            border: 1px solid #4cbcf4;
            box-shadow: 0 0 50px #4cbcf4 inset;
            /*background: url("../../../assets/kuang_07.png") no-repeat;*/
            background-size: 100% 100%;

            #HomeTopRight_top {
                width: 70%;
                height: 100%;
            }

            .HomeTopRight_top_right {
                width: 35%;
                height: 100%;
                position: absolute;
                right: 0;
                top: 0;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                text-align: center;
                line-height: 45px;
                color: white;
                font-size: 20px;
                font-weight: 700;
            }
        }

        .top:hover .operations {
            display: block;
        }

        .bottom {
            width: 100%;
            height: 56%;
            margin-top: 2.5%;

            .bottom_left {
                width: 100%;
                height: 100%;
                float: left;
                position: relative;
                border: 1px solid #4cbcf4;
                box-shadow: 0 0 50px #4cbcf4 inset;
                /*background: url("../../../assets/kuang_10.png") no-repeat;*/
                background-size: 100% 100%;

                .select_type {
                    width: 90%;
                    position: absolute;
                    top: 15%;
                    left: 5%;
                    z-index: 999;
                    font-size: 12px !important;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;

                    .checkboxItem {
                        width: 25%;
                        color: white;
                    }

                    .el-radio__label {
                        margin-right: 0;
                    }
                }

                .select_type /deep/ .el-radio {
                    margin-right: 0;
                }

                #HomeTopRight_bottom_left {
                    width: 85%;
                    height: 100%;
                }

                .operation {
                    width: 17%;
                    float: right;
                    text-align: center;
                    padding: 35% 0 0;
                }

                .operation /deep/ .el-radio {
                    color: white;
                    padding: 5px 10px;
                    width: 100%;
                }

                .operation /deep/ .el-radio > .el-radio__input {
                    display: none;
                }
            }

            .bottom_left:hover .operations {
                display: block;
            }

            .bottom_right {
                width: 48%;
                height: 100%;
                border: 1px solid #38d;
                box-shadow: 0 0 20px #38d inset;
                float: right;
                position: relative;
                /*background: url("../../../assets/frame2.png") no-repeat;*/
                background-size: 100% 100%;

                .select_type {
                    width: 90%;
                    position: absolute;
                    top: 15%;
                    left: 5%;
                    z-index: 999;
                    font-size: 12px !important;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;

                    .checkboxItem {
                        width: 50%;
                        color: white;
                    }

                    .el-radio__label {
                        margin-right: 0;
                    }
                }

                .select_type /deep/ .el-radio {
                    margin-right: 0;
                }

                #HomeTopRight_bottom_right {
                    height: 100%;
                    width: 100%;
                }
            }

            .bottom_right:hover .operations {
                display: block;
            }
        }
    }
</style>
