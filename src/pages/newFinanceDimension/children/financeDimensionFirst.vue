<template>
    <div class="financeDimensionFirst">
        <div class="left_con">
            <div class="left_con-top">
                <div class="commonTitle"><span class="border"></span> 近一年营业额趋势</div>
                <div class="charTable" id="nfd0"></div>
            </div>
            <div class="left_con-bottom">
                <div class="commonTitle"><span class="border"></span> 各项数据明细</div>
                <my-table-base style="height: calc(100% - 50px)"
                               height="420px"
                               :search="false"
                               :pagination="false"
                               chooseItem="single"
                               :gridIndex="false"
                               :columns="columns"
                               :tableData="tableData"
                               @selection-change="selectionChange"
                               @header-click="headerClick">
                </my-table-base>
            </div>
        </div>
        <div class="right_con">
            <div class="right_con-top">
                <div class="commonTitle"><span class="border"></span> 业态数据占比</div>
                <div class="charTable" id="nfd1"></div>
            </div>
            <div class="right_con-bottom">
                <div class="commonTitle"><span class="border"></span> {{label}}营业占比</div>
                <div class="charTable" id="nfd2"></div>
            </div>
        </div>
        <show-big-e-charts ref="ec"></show-big-e-charts>
    </div>
</template>

<script>
    import "../less/financeDimensionFirst.less"
    import MyTableBase from "../../../components/common/myTableBase";
    import index from "../js/index"
    import {printExcel} from "../../../../public/api/excel"
    import ShowBigECharts from "./showBigECharts";

    export default {
        name: "financeDimensionFirst",
        components: {ShowBigECharts, MyTableBase},
        mixins: [index],
        data() {
            return {
                index: 1,
                item: [
                    {label: "2021 年 7 月", value: "", color: "#476DE8"},
                    {label: "营收", value: "", color: "#FF8E11", type: "ys"},
                    {label: "利润", value: "", color: "#1E55FF", type: "lr"},
                    {label: "成本", value: "", color: "#36CCA9", type: "cb"},
                    {label: "回款", value: "", color: "#636EFD", type: "hk"},
                    {label: "车流量", value: "", color: "#12AFFF", type: "cll"},
                ],
                columns: [
                    {prop: "bmbhName", label: "名称", align: "left"},
                    {prop: "thisMonthMoney", label: "本月完成(万元)", formatter: this.commonFormatter,},
                    {prop: "cumulativeMoney", label: "今年完成(万元)", formatter: this.commonFormatter,},
                    {prop: "sameLastYearMoney", label: "去年同期完成(万元)", formatter: this.commonFormatter,},
                    {prop: "lastYearMoney", label: "去年累计(万元)", formatter: this.commonFormatter,},
                    {prop: "yearTargetMoney", label: "年度目标(万元)", formatter: this.commonFormatter,},
                    {prop: "htYingSK", label: "合同应收款(万元)", formatter: this.commonFormatter,},
                    {prop: "htYiSK", label: "合同已收款(万元)", formatter: this.commonFormatter,},
                    {prop: "htLjSK", label: "累计已收款(万元)", formatter: this.commonFormatter,},
                    {prop: "bmbhId", label: "部门编号", hidden: true},
                    {prop: "id", label: "id", hidden: true},
                    {prop: "level", label: "level", hidden: true},
                    {prop: "companyCode", label: "部门编号", hidden: true},
                ],
                tableData: [],
                sectionType: [1, 1],
                companyCode: "",
                label: ""
            }
        },
        methods: {
            headerClick(column) {
                let label = column["label"];
                let prop;
                let index;
                if (label === "名称") {
                    return '';
                }
                this.label = label;
                this.columns.forEach((i, x) => {
                    if (i['label'] === label) {
                        prop = i["prop"];
                        index = x + 1;
                    }
                })
                let pie = [];
                this.tableData.forEach(i => {
                    pie.push({
                        name: i["bmbhName"],
                        value: i[prop] ? i[prop] : 0
                    })
                })
                let th = this;
                let op = {};
                let option = {
                    legend: {
                        orient: "vertical",
                        left: 10,
                        top: "center"
                    },
                    tooltip: {trigger: "item"},
                    toolbox: { //可视化的工具箱
                        show: true,
                        feature: {
                            dataView: { //数据视图
                                show: true
                            },
                            saveAsImage: {//保存图片
                                show: true
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
                                    let table = th.getPieDataPrint(v.option);
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
                                },
                            },
                            myEnlarge: {
                                show: true,
                                title: "放大",
                                icon: "path://M828.943 934.573H195.057c-58.343 0-105.648-47.302-105.648-105.643V195.07c0-58.342 47.305-105.644 105.648-105.644h633.886c58.344 0 105.647 47.302 105.647 105.644v633.86c0 58.342-47.303 105.643-105.647 105.643z m52.823-739.503c0-29.17-23.651-52.822-52.823-52.822H195.057c-29.171 0-52.824 23.65-52.824 52.822v633.86c0 29.17 23.652 52.822 52.824 52.822h633.886c29.172 0 52.824-23.651 52.824-52.822V195.07h-0.001z m-316.942 0.027l236.958-0.026c7.403 0 14.032 3.069 18.804 7.97 5.107 4.333 8.356 10.653 8.356 18.467v237.697c0 14.572-11.812 26.41-26.411 26.41-14.598 0-26.412-11.838-26.412-26.41l0.826-173.657-179.261 179.279-37.348-37.346 179.569-179.563H564.824c-14.6 0-26.412-11.838-26.412-26.411-0.001-14.598 11.813-26.41 26.412-26.41zM221.469 538.41c14.586 0 26.412 11.813 26.412 26.41l-0.84 173.63L426.317 559.2l37.36 37.348-179.57 179.562h175.07c14.586 0 26.412 11.813 26.412 26.41 0 14.573-11.827 26.41-26.412 26.41h-236.96c-7.39 0-14.031-3.042-18.815-7.942-5.107-4.334-8.344-10.653-8.344-18.467V564.822c-0.001-14.598 11.825-26.411 26.412-26.411z",
                                onclick: function () {
                                    th.$refs['ec'].openDialog(op);
                                }
                            }
                        }
                    },
                    series: [
                        {
                            name: "",
                            type: "pie",
                            radius: ["0%", "75%"],
                            center: ["50%", "50%"],
                            avoidLabelOverlap: false,
                            /*itemStyle: {
                                normal: {
                                    color: function (v) {
                                        let colorList = ["#fec279", "#968af5", "#e790e8", "#36c78b", "#51a3fc", "#F364C7", "#1123fd"];
                                        return colorList[v.dataIndex];
                                    }
                                }
                            },*/
                            labelLine: {
                                normal: {
                                    length: 10,
                                    length2: 10,
                                    fontSize: 16,
                                    lineStyle: {
                                        width: 1
                                    }
                                }
                            },
                            label: {
                                position: "outer",
                                normal: {
                                    show: false,
                                    formatter(v) {
                                        return v.name + ":" + Number(v.value).toFixed(2);
                                    },
                                    textStyle: {
                                        fontSize: 14
                                    }
                                }
                            },
                            data: pie
                        }
                    ]
                };
                op = this.DeepCopy(option);
                this.$echarts.init(document.getElementById("nfd2")).setOption(option);
            },
            async selectionChange(v) {
                this.$emit("changePages", v);
            },
            changeSection(s, t) {
                let v = this.DeepCopy(this.sectionType);
                v[s] = t;
                this.sectionType = v;
            },
            async getTableData() {
                const res = await this.$axios.get("/apifin/data/get_one_tree_data");
                let data = res.data.data;
                data.forEach(i => {
                    i["id"] = i['companyCode'];
                    i["level"] = 1;
                })
                this.tableData = data;
            },
            async getLineData(v) {
                const res = await this.$axios.get("/apifin/data/get_onetwo_tree_tu_data", {
                    params: {
                        companyCode: '',
                        shopType: v.shopType
                    }
                });
                let data = res.data.data;
                let op = {};
                let th = this;
                let option = {
                    tooltip: {
                        trigger: "axis",
                        formatter: "{b}月: {c}万元 "
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
                            myEnlarge: {
                                show: true,
                                title: "放大",
                                icon: "path://M828.943 934.573H195.057c-58.343 0-105.648-47.302-105.648-105.643V195.07c0-58.342 47.305-105.644 105.648-105.644h633.886c58.344 0 105.647 47.302 105.647 105.644v633.86c0 58.342-47.303 105.643-105.647 105.643z m52.823-739.503c0-29.17-23.651-52.822-52.823-52.822H195.057c-29.171 0-52.824 23.65-52.824 52.822v633.86c0 29.17 23.652 52.822 52.824 52.822h633.886c29.172 0 52.824-23.651 52.824-52.822V195.07h-0.001z m-316.942 0.027l236.958-0.026c7.403 0 14.032 3.069 18.804 7.97 5.107 4.333 8.356 10.653 8.356 18.467v237.697c0 14.572-11.812 26.41-26.411 26.41-14.598 0-26.412-11.838-26.412-26.41l0.826-173.657-179.261 179.279-37.348-37.346 179.569-179.563H564.824c-14.6 0-26.412-11.838-26.412-26.411-0.001-14.598 11.813-26.41 26.412-26.41zM221.469 538.41c14.586 0 26.412 11.813 26.412 26.41l-0.84 173.63L426.317 559.2l37.36 37.348-179.57 179.562h175.07c14.586 0 26.412 11.813 26.412 26.41 0 14.573-11.827 26.41-26.412 26.41h-236.96c-7.39 0-14.031-3.042-18.815-7.942-5.107-4.334-8.344-10.653-8.344-18.467V564.822c-0.001-14.598 11.825-26.411 26.412-26.411z",
                                onclick: function () {
                                    th.$refs['ec'].openDialog(op);
                                }
                            }
                        }
                    },
                    grid: {
                        top: 40,
                        bottom: 40,
                        left: 90,
                        right: 30,
                    },
                    xAxis: [{
                        type: "category",
                        data: this.mySet(data, "xBxis")
                    }],
                    yAxis: [{
                        type: "value",
                        name: "万元",
                        splitLine: {
                            show: true,
                            lineStyle: {
                                type: "dashed",
                                width: 1,
                                color: '#dadee2'
                            },
                        },
                    }],
                    series: [
                        {
                            data: this.mySet(data, "yAxis"),
                            type: "line",
                            symbol: "circle",
                            smooth: true,
                            itemStyle: {normal: {label: {show: true, position: 'top'}, color: '#3581ff',}},
                            lineStyle: {
                                shadowColor: "",
                                shadowBlur: 10,
                                shadowOffsetY: 15,
                            },
                            areaStyle: {
                                normal: {
                                    color: {
                                        x: 0,
                                        y: 0,
                                        x2: 0,
                                        y2: 1,
                                        colorStops: [{
                                            offset: 0,
                                            color: "rgba(53,129,255,0.71)" // 0% 处的颜色
                                        }, {
                                            offset: 0.7,
                                            color: "rgba(53,129,255,0)" // 100% 处的颜色
                                        }],
                                        globalCoord: false // 缺省为 false
                                    }
                                }
                            },
                        }
                    ]
                };
                op = this.DeepCopy(option)
                this.$echarts.init(document.getElementById("nfd0")).setOption(option);
            },
            async getPieData() {
                const res = await this.$axios.get("/apifin/data/get_onetwo_tree_shantu_data");
                let data = res.data.data;
                let kmZB = data["kmZB"];
                kmZB.forEach(i => {
                    i["value"] = i["yAxis"];
                    i["name"] = i["xBxis"];
                })
                let th = this;
                let op = {};
                let option = {
                    legend: {
                        orient: "vertical",
                        left: 10,
                        top: "center"
                    },
                    tooltip: {trigger: "item"},
                    toolbox: { //可视化的工具箱
                        show: true,
                        feature: {
                            dataView: { //数据视图
                                show: true
                            },
                            saveAsImage: {//保存图片
                                show: true
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
                                    let table = th.getPieDataPrint(v.option);
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
                            myEnlarge: {
                                show: true,
                                title: "放大",
                                icon: "path://M828.943 934.573H195.057c-58.343 0-105.648-47.302-105.648-105.643V195.07c0-58.342 47.305-105.644 105.648-105.644h633.886c58.344 0 105.647 47.302 105.647 105.644v633.86c0 58.342-47.303 105.643-105.647 105.643z m52.823-739.503c0-29.17-23.651-52.822-52.823-52.822H195.057c-29.171 0-52.824 23.65-52.824 52.822v633.86c0 29.17 23.652 52.822 52.824 52.822h633.886c29.172 0 52.824-23.651 52.824-52.822V195.07h-0.001z m-316.942 0.027l236.958-0.026c7.403 0 14.032 3.069 18.804 7.97 5.107 4.333 8.356 10.653 8.356 18.467v237.697c0 14.572-11.812 26.41-26.411 26.41-14.598 0-26.412-11.838-26.412-26.41l0.826-173.657-179.261 179.279-37.348-37.346 179.569-179.563H564.824c-14.6 0-26.412-11.838-26.412-26.411-0.001-14.598 11.813-26.41 26.412-26.41zM221.469 538.41c14.586 0 26.412 11.813 26.412 26.41l-0.84 173.63L426.317 559.2l37.36 37.348-179.57 179.562h175.07c14.586 0 26.412 11.813 26.412 26.41 0 14.573-11.827 26.41-26.412 26.41h-236.96c-7.39 0-14.031-3.042-18.815-7.942-5.107-4.334-8.344-10.653-8.344-18.467V564.822c-0.001-14.598 11.825-26.411 26.412-26.411z",
                                onclick: function () {
                                    th.$refs['ec'].openDialog(op);
                                }
                            }
                        }
                    },
                    series: [
                        {
                            name: "",
                            type: "pie",
                            radius: ["0%", "75%"],
                            center: ["50%", "50%"],
                            avoidLabelOverlap: false,
                            /*itemStyle: {
                                normal: {
                                    color: function (v) {
                                        let colorList = ["#fec279", "#968af5", "#e790e8", "#36c78b", "#51a3fc", "#F364C7", "#1123fd"];
                                        return colorList[v.dataIndex];
                                    }
                                }
                            },*/
                            label: {
                                position: "outer",
                                normal: {
                                    show: false,
                                    formatter(v) {
                                        return v.name + ":" + Number(v.value).toFixed(2);
                                    },
                                    textStyle: {
                                        fontSize: 14
                                    }
                                }
                            },
                            data: kmZB
                        }
                    ]
                };
                op = this.DeepCopy(option);
                this.$echarts.init(document.getElementById("nfd1")).setOption(option);
            },
            commonFormatter(v, p) {
                if (v[p]) {
                    return v[p];
                }
                return '-';
            },
            clearECharts() {
                for (let i = 0; i < 3; i++) {
                    let id = 'nfd' + i;
                    if (document.getElementById(id)) {
                        this.$echarts.init(document.getElementById(id)).dispose();
                    }
                }
            },
            async refresh(v) {
                this.clearECharts();
                await this.getTableData();
                await this.getLineData(v);
                await this.getPieData();
                this.headerClick({label: "本月完成"});
                this.$emit("clearLoading", true);
            }
        }
    }
</script>

<style scoped>

</style>