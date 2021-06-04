<template>
    <div class="LTT">
        <internal ref="internal" id="lt" style="width: 50%"></internal>
        <div class="console">
            <div class="buttonGroup">
                <img @click="selectCompay('1')"
                     :src="selected==='1'?require('../../../assets/nh_img/sfwq.png'):require('../../../assets/nh_img/ufwq.png')">
                <img @click="selectCompay('2')"
                     :src="selected==='2'?require('../../../assets/nh_img/scm.png'):require('../../../assets/nh_img/ucm.png')">
                <img @click="selectCompay('3')"
                     :src="selected==='3'?require('../../../assets/nh_img/ssy.png'):require('../../../assets/nh_img/usy.png')">
                <img @click="selectCompay('4')"
                     :src="selected==='4'?require('../../../assets/nh_img/sny.png'):require('../../../assets/nh_img/uny.png')">
            </div>
            <div class="information">
                <p>实际金额<span class="money">{{showData.sjMoney}}万元</span></p>
                <p>预算金额<span class="money">{{showData.ysMoney}}万元</span></p>
                <p>实际控制率<span class="proportion">{{showData.sjRateCount}}%</span></p>
                <p>预算控制率<span class="proportion">{{showData.ysRateCount}}%</span></p>
            </div>
        </div>
    </div>
</template>

<script>
    import Internal from "../common/internal";

    export default {
        name: "childLTTemp",
        components: {Internal},
        data() {
            return {
                selected: '1',
                showData: {
                    sjMoney: '',
                    ysMoney: '',
                    sjRateCount: '',
                    ysRateCount: '',
                }
            };
        },
        methods: {
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
                this.$refs["internal"].initECharts(op);
            },
            selectCompay(v) {
                this.selected = v;
                let arr = ['', '服务区板块', '传媒公司', '商业板块', '能源板块'];
                this.init(arr[v]);
            }
        },
        mounted() {
            this.init();
        }
    };
</script>

<style scoped lang="less">
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
</style>
