<template>
    <div class="RBT">
        <div class="charts">
            <internal style="width: 50%" ref="internal1" id="rb1"></internal>
            <internal style="width: 50%" ref="internal2" id="rb2"></internal>
        </div>
        <ul class="summary">
            <li>1月目标营收金额：<span class="c1">2333万元</span></li>
            <li>全年目标利润金额：<span class="c2">2333万元</span></li>
            <li>1月完成营收金额：<span class="c1">2333万元</span></li>
            <li>全年完成利润金额：<span class="c2">2333万元</span></li>
        </ul>
    </div>
</template>

<script>
    import Internal from "../common/internal";

    export default {
        name: "childRBTemp",
        components: {Internal},
        data() {
            return {};
        },
        methods: {
            init() {
                let option1 = {
                    title: {
                        text: '{a|45%}\n{b|一月完成率}',
                        x: 'center',
                        y: 'center',
                        textStyle: {
                            rich: {
                                a: {
                                    fontSize: 16,
                                    color: '#3da8fd',
                                    fontWeight: '600',
                                },
                                b: {
                                    fontSize: 12,
                                    color: '#fff',
                                    padding: [0, 0, 14, 0]
                                }
                            }
                        }
                    },
                    series: [
                        {
                            type: "pie",
                            hoverAnimation: false,
                            radius: ["40%", "45%"],
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            data: [
                                {value: 775, name: "已完成", itemStyle: {color: "#399cf1"}},
                                {value: 679, name: "未完成", itemStyle: {color: "#d2d2d2"}}
                            ]
                        },
                        {
                            type: "pie",
                            radius: ["55%", "80%"],
                            label: {
                                position: "inner",
                                fontSize: 12,
                                formatter: v => {
                                    if (v.value === 1) {
                                        return '';
                                    }
                                }
                            },

                            labelLine: {
                                show: false
                            },
                            data: [
                                {
                                    value: 1,
                                    name: "1",
                                    itemStyle: {color: "rgba(0,0,0,0)"}
                                },
                                {
                                    value: 5,
                                    name: "1",
                                    itemStyle: {color: "#104362"}
                                },
                                {
                                    value: 1,
                                    name: "1",
                                    itemStyle: {color: "rgba(0,0,0,0)"}
                                },
                                {
                                    value: 5,
                                    name: "2",
                                    itemStyle: {color: "#104362"}
                                },
                                {
                                    value: 1,
                                    name: "1",
                                    itemStyle: {color: "rgba(0,0,0,0)"}
                                },
                                {
                                    value: 5,
                                    name: "3",
                                    itemStyle: {color: "#104362"}
                                },
                                {
                                    value: 1,
                                    name: "1",
                                    itemStyle: {color: "rgba(0,0,0,0)"}
                                },
                                {
                                    value: 5,
                                    name: "4",
                                    itemStyle: {color: "#399cf1"}
                                },
                                {
                                    value: 1,
                                    name: "1",
                                    itemStyle: {color: "rgba(0,0,0,0)"}
                                },
                                {
                                    value: 5,
                                    name: "5",
                                    itemStyle: {color: "#399cf1"}
                                },
                                {
                                    value: 1,
                                    name: "1",
                                    itemStyle: {color: "rgba(0,0,0,0)"}
                                },
                                {
                                    value: 5,
                                    name: "6",
                                    itemStyle: {color: "#399cf1"}
                                },
                                {
                                    value: 1,
                                    name: "1",
                                    itemStyle: {color: "rgba(0,0,0,0)"}
                                },
                                {
                                    value: 5,
                                    name: "7",
                                    itemStyle: {color: "#399cf1"}
                                },
                                {
                                    value: 1,
                                    name: "1",
                                    itemStyle: {color: "rgba(0,0,0,0)"}
                                },
                                {
                                    value: 5,
                                    name: "8",
                                    itemStyle: {color: "#399cf1"}
                                },
                                {
                                    value: 1,
                                    name: "1",
                                    itemStyle: {color: "rgba(0,0,0,0)"}
                                },
                                {
                                    value: 5,
                                    name: "9",
                                    itemStyle: {color: "#399cf1"}
                                },
                                {
                                    value: 1,
                                    name: "1",
                                    itemStyle: {color: "rgba(0,0,0,0)"}
                                },
                                {
                                    value: 5,
                                    name: "10",
                                    itemStyle: {color: "#399cf1"}
                                },
                                {
                                    value: 1,
                                    name: "1",
                                    itemStyle: {color: "rgba(0,0,0,0)"}
                                },
                                {
                                    value: 5,
                                    name: "11",
                                    itemStyle: {color: "#399cf1"}
                                },
                                {
                                    value: 1,
                                    name: "1",
                                    itemStyle: {color: "rgba(0,0,0,0)"}
                                },
                                {
                                    value: 5,
                                    name: "12",
                                    itemStyle: {color: "#399cf1"}
                                }
                            ]
                        }
                    ]
                };
                let option2 = {
                    title: {
                        text: '{a|45%}\n{b|一月完成率}',
                        x: 'center',
                        y: 'center',
                        textStyle: {
                            rich: {
                                a: {
                                    fontSize: 16,
                                    color: '#3da8fd',
                                    fontWeight: '600',
                                },
                                b: {
                                    fontSize: 12,
                                    color: '#fff',
                                    padding: [0, 0, 14, 0]
                                }
                            }
                        }
                    },
                    series: [
                        {
                            type: "pie",
                            hoverAnimation: false,
                            radius: ["40%", "45%"],
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            data: [
                                {value: 775, name: "已完成", itemStyle: {color: "#2fbcb6"}},
                                {value: 679, name: "未完成", itemStyle: {color: "#d2d2d2"}}
                            ]
                        },
                        {
                            type: "pie",
                            radius: ["55%", "80%"],
                            label: {
                                position: "inner",
                                fontSize: 12,
                                formatter: v => {
                                    if (v.value === 1) {
                                        return '';
                                    }
                                }
                            },

                            labelLine: {
                                show: false
                            },
                            data: [
                                {
                                    value: 1,
                                    name: "1",
                                    itemStyle: {color: "rgba(0,0,0,0)"}
                                },
                                {
                                    value: 5,
                                    name: "1",
                                    itemStyle: {color: "#104362"}
                                },
                                {
                                    value: 1,
                                    name: "1",
                                    itemStyle: {color: "rgba(0,0,0,0)"}
                                },
                                {
                                    value: 5,
                                    name: "2",
                                    itemStyle: {color: "#104362"}
                                },
                                {
                                    value: 1,
                                    name: "1",
                                    itemStyle: {color: "rgba(0,0,0,0)"}
                                },
                                {
                                    value: 5,
                                    name: "3",
                                    itemStyle: {color: "#104362"}
                                },
                                {
                                    value: 1,
                                    name: "1",
                                    itemStyle: {color: "rgba(0,0,0,0)"}
                                },
                                {
                                    value: 5,
                                    name: "4",
                                    itemStyle: {color: "#2fbcb6"}
                                },
                                {
                                    value: 1,
                                    name: "1",
                                    itemStyle: {color: "rgba(0,0,0,0)"}
                                },
                                {
                                    value: 5,
                                    name: "5",
                                    itemStyle: {color: "#2fbcb6"}
                                },
                                {
                                    value: 1,
                                    name: "1",
                                    itemStyle: {color: "rgba(0,0,0,0)"}
                                },
                                {
                                    value: 5,
                                    name: "6",
                                    itemStyle: {color: "#2fbcb6"}
                                },
                                {
                                    value: 1,
                                    name: "1",
                                    itemStyle: {color: "rgba(0,0,0,0)"}
                                },
                                {
                                    value: 5,
                                    name: "7",
                                    itemStyle: {color: "#2fbcb6"}
                                },
                                {
                                    value: 1,
                                    name: "1",
                                    itemStyle: {color: "rgba(0,0,0,0)"}
                                },
                                {
                                    value: 5,
                                    name: "8",
                                    itemStyle: {color: "#2fbcb6"}
                                },
                                {
                                    value: 1,
                                    name: "1",
                                    itemStyle: {color: "rgba(0,0,0,0)"}
                                },
                                {
                                    value: 5,
                                    name: "9",
                                    itemStyle: {color: "#2fbcb6"}
                                },
                                {
                                    value: 1,
                                    name: "1",
                                    itemStyle: {color: "rgba(0,0,0,0)"}
                                },
                                {
                                    value: 5,
                                    name: "10",
                                    itemStyle: {color: "#2fbcb6"}
                                },
                                {
                                    value: 1,
                                    name: "1",
                                    itemStyle: {color: "rgba(0,0,0,0)"}
                                },
                                {
                                    value: 5,
                                    name: "11",
                                    itemStyle: {color: "#2fbcb6"}
                                },
                                {
                                    value: 1,
                                    name: "1",
                                    itemStyle: {color: "rgba(0,0,0,0)"}
                                },
                                {
                                    value: 5,
                                    name: "12",
                                    itemStyle: {color: "#2fbcb6"}
                                }
                            ]
                        }
                    ]
                };
                this.$refs["internal1"].initECharts(option1);
                this.$refs["internal2"].initECharts(option2);
            }
        },
        mounted() {
            this.init();
        }
    };
</script>

<style scoped lang="less">
    .RBT {
        width: 100%;
        height: 100%;

        .charts {
            width: 100%;
            height: calc(100% - 50px);
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            flex-wrap: nowrap;
        }

        .summary {
            width: 100%;
            height: 50px;
            list-style: none;
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: flex-start;
            color: white;

            li {
                width: calc(50% - 20px);
                height: 25px;
                padding-left: 20px;
                font-size: 13px;

                span {
                    font-size: 18px;
                    font-weight: 700;
                }

                .c1 {
                    color: #3aa1ff;
                    font-family: Arial;
                }

                .c2 {
                    color: #2fbcb6;
                    font-family: Arial;
                }
            }
        }
    }
</style>
