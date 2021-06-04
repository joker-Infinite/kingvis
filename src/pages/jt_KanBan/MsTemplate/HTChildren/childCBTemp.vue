<template>
    <div class="CBT">
        <div class="tab">
            <img src="../../../../assets/showOffHome/home3/icon.1.png" alt=""/>
            <img @click="selectCompay('1')"
                 :src="selected==='1'?require('../../../../assets/showOffHome/home3/s1.png'):require('../../../../assets/showOffHome/home3/u1.png')"
                 alt=""/>
            <img @click="selectCompay('2')"
                 :src="selected==='2'?require('../../../../assets/showOffHome/home3/s2.png'):require('../../../../assets/showOffHome/home3/u2.png')"
                 alt=""/>
            <img @click="selectCompay('3')"
                 :src="selected==='3'?require('../../../../assets/showOffHome/home3/s3.png'):require('../../../../assets/showOffHome/home3/u3.png')"
                 alt=""/>
            <img @click="selectCompay('4')"
                 :src="selected==='4'?require('../../../../assets/showOffHome/home3/s4.png'):require('../../../../assets/showOffHome/home3/u4.png')"
                 alt=""/>
            <img @click="selectCompay('5')"
                 :src="selected==='5'?require('../../../../assets/showOffHome/home3/s5.png'):require('../../../../assets/showOffHome/home3/u5.png')"
                 alt=""/>
            <img src="../../../../assets/showOffHome/home3/icon.7.png" alt=""/>
        </div>
        <div class="charts">
            <internal id="cb" ref="internal"></internal>
        </div>
    </div>
</template>

<script>
    import Internal from "../../../homePages/common/internal";
    export default {
        name: "childCBTemp",
        components: {Internal},
        data() {
            return {
                selected: '1'
            };
        },
        methods: {
            async init(v) {
                let plateId;
                let ysBar = [];
                let lrBar = [];
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
                //利润参数
                let params1 = {
                    financeTypeId: financeTypeId[0],
                    plateId: plateId
                };
                //营收参数
                let params2 = {
                    financeTypeId: financeTypeId[1],
                    plateId: plateId
                };
                const [lr, ys] = await Promise.all([
                    this.$axios.get("/api/index/liudabankuai", {params: params1}),
                    this.$axios.get("/api/index/liudabankuai", {params: params2}),
                ]);
                let ysd = JSON.parse(JSON.stringify(ys.data.data));
                let lrd = JSON.parse(JSON.stringify(lr.data.data));
                for (let i = 0; i < parseInt(ys.data.data[0].xBxis.split('-')[1]) - 1; i++) {
                    ysBar.push(0)
                }
                ysd.forEach(i => {
                    ysBar.push((i.yAxis / 1000000).toFixed(2))
                });
                for (let i = 0; i < parseInt(lr.data.data[0].xBxis.split('-')[1]) - 1; i++) {
                    lrBar.push(0)
                }
                lrd.forEach(i => {
                    lrBar.push((i.yAxis / 1000000).toFixed(2))
                });
                ysLine = this.YOY(JSON.parse(JSON.stringify(ysBar)));
                lrLine = this.YOY(JSON.parse(JSON.stringify(lrBar)));
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
                            name: '百万',
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
                            itemStyle: {
                                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(29,183,250,1)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(29,183,250,0)'
                                }])
                            }
                        },
                        {
                            name: "利润",
                            type: "bar",
                            data: lrBar,
                            itemStyle: {
                                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(240,165,38,1)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(240,165,38,0)'
                                }])
                            }
                        },
                        {
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
                        }
                    ]
                };
                this.$refs["internal"].initECharts(option);
            },
            selectCompay(v) {
                let arr = ['实业公司', '服务区板块', '能源板块', "商业板块", "传媒公司"];
                this.selected = v;
                this.init(arr[v - 1])
            }
        },
        mounted() {
            this.init();
        }
    };
</script>

<style scoped lang="less">
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
