<template>
    <div class="public_bar_line" v-loading="loading">
        <public_title></public_title>
        <div class="charts" :id="dataID"></div>
    </div>
</template>

<script>
    import "./public_bar_line_double.less"
    import Public_title from "../public/public_title";
    import {printExcel} from "../js/excel.js";
    import index from "../js/index.js"

    export default {
        name: "public_bar_line_double",
        mixins: [index],
        props: {
            url: {
                type: String,
                default: () => {
                    return "";
                }
            },
            params: {
                type: Object,
                default: () => {
                    return {};
                }
            },
            showType: {
                type: Array,
                default: () => {
                    return ["bar", "line"]
                }
            }
        },
        components: {Public_title},
        data() {
            return {
                loading: true,
                dataID: ""
            }
        },
        methods: {
            /**
             * 获取需展示的数据
             * @param url 请求数据的接口
             * @param params 参数
             * */
            async getLineBarDoubleData(url, params) {
                let data;
                if (url) {
                    await this.$axios["get"](url, {params: params})["then"](res => {
                        data = res.data.data;
                    }).catch(err => {
                        this.$message.warning("请求失败!");
                        console.log(err);
                        this.loading = false;
                    })
                } else {
                    data = {
                        X: ["测试1", "测试2", "测试3", "测试4", "测试5", "测试6", "测试7", "测试8", "测试9"],
                        Y: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                        Y1: [4, 3, 1, 2, 4, 8, 4, 3, 2],
                        XMeasure: "月",
                        YMeasure: "元",
                        Y1Measure: "%",
                    }
                }
                return data;
            },
            /**
             * 渲染图表
             * @param d 图表数据
             * @param v 外部传入option 数据和样式
             * @param s 外部传入只有样式没有数据 除series中的data其余都要传入
             * */
            async setLineBarDoubleECharts(d, v, s) {
                this.dataID = d["X"][0] + "-" + d["X"][1];
                await new Promise(resolve => {
                    setInterval(() => {
                        resolve();
                    }, 50);
                });
                let option;
                let th = this;
                if (JSON.stringify(v) !== "{}" && v) {
                    option = v;
                } else {
                    if (JSON.stringify(s) !== "{}" && s) {
                        s["xAxis"][0]["data"] = d["X"];
                        s["xAxis"][0]["name"] = d["XMeasure"];
                        s["yAxis"][0]["name"] = d["YMeasure"];
                        s["yAxis"][1]["name"] = d["Y1Measure"];
                        s["series"][0]["data"] = d["Y"];
                        option = s;
                    } else {
                        option = {
                            tooltip: {
                                trigger: "axis"
                            },
                            toolbox: { //可视化的工具箱
                                show: true,
                                feature: {
                                    dataView: { //数据视图
                                        show: true
                                    },
                                    saveAsImage: {//保存图片
                                        show: true
                                    },
                                    magicType: {//动态类型切换
                                        type: ['bar', 'line']
                                    },
                                    myDownloadExcel: {//下载excel
                                        show: true,
                                        title: "下载excel",
                                        icon: "path://M821.248 521.216c-8.192-2.048-16.896-3.072-25.6-4.608v-312.32H517.12v60.416h220.16v34.816h-220.16v43.008h220.16v33.792h-220.16v43.008h220.16v33.792h-220.16v43.008h220.16v23.04c-15.872 2.56-31.744 6.144-46.08 12.288h-173.056v43.008h101.888c-11.264 10.24-22.016 22.016-31.744 34.816H517.12v43.008h46.08c-5.12 11.264-8.704 23.04-12.288 34.816h-34.816v69.12h28.672c0.512 8.704 2.048 18.432 3.072 27.136h-31.744v65.536H463.36c-128.512-23.552-258.048-45.568-386.56-68.608V178.176c129.536-23.04 259.072-45.056 388.608-69.12h50.176v69.12c90.112 0.512 180.736-0.512 270.848 0.512 8.704-0.512 18.432 2.56 24.576 8.704 6.144 6.144 9.728 15.36 8.192 24.064 2.56 103.424 2.048 206.848 2.048 309.76z m-513.024 40.448c13.824 35.328 21.504 55.808 23.552 60.416l70.144 4.608L321.536 465.92l78.848-157.696-66.048 4.096-48.128 119.296h-0.512L243.712 317.44l-64 3.584 68.608 145.92-75.264 145.92 62.976 4.608 47.104-117.76h0.512c8.192 20.48 16.384 41.472 24.576 61.952z",
                                        onclick: function (v) {
                                            let excelData = {
                                                name: "",
                                                keyColumns: [],
                                                valueColumns: [],
                                            };
                                            let table = th.getData('', v.option);
                                            table.forEach(item => {
                                                item.forEach(cItem => {
                                                    if (cItem.type === "label") {
                                                        excelData.keyColumns = [cItem.name, ...cItem.data];
                                                    }
                                                    if (cItem.type === "value") {
                                                        excelData.valueColumns.push([cItem.name, ...cItem.data]);
                                                    }
                                                })
                                            });
                                            excelData.name = '';
                                            printExcel(excelData)
                                        }
                                    },
                                    /*myEnlarge: {
                                        show: true,
                                        title: "放大",
                                        icon: "path://M828.943 934.573H195.057c-58.343 0-105.648-47.302-105.648-105.643V195.07c0-58.342 47.305-105.644 105.648-105.644h633.886c58.344 0 105.647 47.302 105.647 105.644v633.86c0 58.342-47.303 105.643-105.647 105.643z m52.823-739.503c0-29.17-23.651-52.822-52.823-52.822H195.057c-29.171 0-52.824 23.65-52.824 52.822v633.86c0 29.17 23.652 52.822 52.824 52.822h633.886c29.172 0 52.824-23.651 52.824-52.822V195.07h-0.001z m-316.942 0.027l236.958-0.026c7.403 0 14.032 3.069 18.804 7.97 5.107 4.333 8.356 10.653 8.356 18.467v237.697c0 14.572-11.812 26.41-26.411 26.41-14.598 0-26.412-11.838-26.412-26.41l0.826-173.657-179.261 179.279-37.348-37.346 179.569-179.563H564.824c-14.6 0-26.412-11.838-26.412-26.411-0.001-14.598 11.813-26.41 26.412-26.41zM221.469 538.41c14.586 0 26.412 11.813 26.412 26.41l-0.84 173.63L426.317 559.2l37.36 37.348-179.57 179.562h175.07c14.586 0 26.412 11.813 26.412 26.41 0 14.573-11.827 26.41-26.412 26.41h-236.96c-7.39 0-14.031-3.042-18.815-7.942-5.107-4.334-8.344-10.653-8.344-18.467V564.822c-0.001-14.598 11.825-26.411 26.412-26.411z",
                                        onclick: function () {
                                            th.$refs['ec'].openDialog(op);
                                        }
                                    }*/
                                }
                            },
                            grid: {
                                left: 50,
                                right: 50,
                            },
                            xAxis: [{
                                type: "category",
                                name: d["XMeasure"],
                                data: d["X"],
                                axisPointer: {
                                    type: "shadow"
                                },
                            }],
                            yAxis: [
                                {
                                    type: "value",
                                    name: d["YMeasure"],
                                    splitLine: {
                                        show: true,
                                        lineStyle: {
                                            type: "dashed",
                                            width: 1,
                                            color: '#dadee2'
                                        },
                                    },
                                },
                                {
                                    type: "value",
                                    name: d["Y1Measure"],
                                    splitLine: {
                                        show: true,
                                        lineStyle: {
                                            type: "dashed",
                                            width: 1,
                                            color: '#dadee2'
                                        },
                                    },
                                }
                            ],
                            series: [
                                {
                                    data: d["Y"],
                                    // name: d["YMeasure"],
                                    type: this.showType[0],
                                    yAxisIndex: 0,
                                    symbol: "circle",
                                    smooth: true,
                                    itemStyle: {normal: {label: {show: true, position: 'top'}}},
                                    lineStyle: {
                                        shadowColor: "",
                                        shadowBlur: 10,
                                        shadowOffsetY: 15,
                                    },
                                },
                                {
                                    data: d["Y1"],
                                    // name: d["Y1Measure"],
                                    type: this.showType[1],
                                    yAxisIndex: 1,
                                    symbol: "circle",
                                    smooth: true,
                                    itemStyle: {normal: {label: {show: true, position: 'top'}}},
                                    lineStyle: {
                                        shadowColor: "",
                                        shadowBlur: 10,
                                        shadowOffsetY: 15,
                                    },
                                },
                            ]
                        };
                    }
                }
                let ECharts = document.getElementById(this.dataID);
                this.$echarts["init"](ECharts).dispose();
                this.$echarts["init"](ECharts).setOption(option);
                this.loading = false;
            }
        },
        async mounted() {
            let data = await this.getLineBarDoubleData(this.url, this.params);
            await this.setLineBarDoubleECharts(data);
        }
    }
</script>