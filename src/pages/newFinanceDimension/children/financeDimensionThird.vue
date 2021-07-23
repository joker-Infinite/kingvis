<template>
    <div class="financeDimensionThird">
        <div class="left_con">
            <div class="left_con-top">
                <div class="commonTitle"><span class="border"></span>
                    {{selected==='cw'?"近一年营业额趋势":"近一年驶入车流量"}}
                    <div class="selfBtn"
                         v-if="selection['deptCompanyType']==='service'||selection['deptCompanyType']==='station'">
                        <span :class="{'select':selected==='cw'}" @click="changeOther('cw',selection)">财务</span>
                        <span style="width: 15px;display: inline-block"></span>
                        <span :class="{'select':selected==='jc'}" @click="changeOther('jc',selection)"
                              v-if="selection['deptCompanyType']!=='station'">基础</span>
                    </div>
                </div>
                <div class="charTable" id="nfd0"></div>
            </div>
            <div :class="{'left_con-bottom':true,'addClass':selection['deptCompanyType']==='service'}">
                <div class="commonTitle"><span class="border"></span> 各项数据明细</div>
                <my-table-base style="height: calc(100% - 140px)"
                               height="445px"
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
            <div class="right_con-top" v-if="this.selection['deptCompanyType'] !== 'service'">
                <div class="commonTitle"><span class="border"></span> 92#95#98#柴油#非油占比</div>
                <div class="charTable" id="nfd1"></div>
            </div>
            <div class="right_con-bottom">
                <div class="commonTitle"><span class="border"></span> {{label}}占比</div>
                <div class="charTable" id="nfd2"></div>
            </div>
        </div>
        <show-big-e-charts ref="ec"></show-big-e-charts>
    </div>
</template>

<script>
    import MyTableBase from "../../../components/common/myTableBase";
    import "../less/financeDimensionThird.less"
    import index from "../js/index"
    import {printExcel} from "../../../../public/api/excel"
    import ShowBigECharts from "./showBigECharts";

    export default {
        name: "financeDimensionThird",
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
                    {prop: "serviceName", label: "名称"},
                    {prop: "areaCovered", label: "总占地面(m²)", formatter: this.commonFormatter,},
                    {prop: "buildingCovered", label: "总建筑面积(m²)", formatter: this.commonFormatter,},
                    {prop: "eatingCovered", label: "餐饮面积(m²)", formatter: this.commonFormatter,},
                    {prop: "bussinessCovered", label: "商超面积(m²)", formatter: this.commonFormatter,},
                    {prop: "parkCovered", label: "停车场面积(m²)", formatter: this.commonFormatter,},
                    {prop: "serviceId", label: "id", hidden: true},
                ],
                columnsFWQ: [
                    {prop: "serviceName", label: "名称"},
                    {prop: "areaCovered", label: "总占地面(m²)", formatter: this.commonFormatter,},
                    {prop: "buildingCovered", label: "总建筑面积(m²)", formatter: this.commonFormatter,},
                    {prop: "eatingCovered", label: "餐饮面积(m²)", formatter: this.commonFormatter,},
                    {prop: "bussinessCovered", label: "商超面积(m²)", formatter: this.commonFormatter,},
                    {prop: "parkCovered", label: "停车场面积(m²)", formatter: this.commonFormatter,},
                    {prop: "serviceId", label: "id", hidden: true},
                ],
                columnsFWQCW: [
                    {prop: "serviceName", label: "名称"},
                    {prop: "thisMonthMoney", label: "当月收入(万元)", formatter: this.commonFormatter,},
                    {prop: "lastMonthMoney", label: "上月收入(万元)", formatter: this.commonFormatter,},
                    {prop: "entCarCounts", label: "上月驶入车流量(辆)", formatter: this.commonFormatter,},
                    {prop: "yearTotalMoney", label: "年度总经济(万元)", formatter: this.commonFormatter,},
                    {prop: "serviceId", label: "id", hidden: true},
                ],
                columnsNY: [
                    {prop: "stationName", label: "名称"},
                    {prop: "thisMonthMoney", label: "当月营收(万元)", formatter: this.commonFormatter,},
                    {
                        prop: "thisMonth92SaleMoney",
                        label: "当月92销售额(万元)",
                        formatter: this.commonFormatter,
                    },
                    {
                        prop: "thisMonth95SaleMoney",
                        label: "当月95销售额(万元)",
                        formatter: this.commonFormatter,
                    },
                    {
                        prop: "thisMonth98SaleMoney",
                        label: "柴油(万元)",
                        formatter: this.commonFormatter,
                    },
                    {
                        prop: "thisMonthFYSaleMoney",
                        label: "当月非油销售额(万元)",
                        formatter: this.commonFormatter,
                    },
                    {prop: "lastMonthMoney", label: "上月营收(万元)", formatter: this.commonFormatter,},
                    {prop: "nowYearMoney", label: "年度营收(万元)", formatter: this.commonFormatter,},
                    {prop: "stationId", label: "id", hidden: true},
                ],
                tableData: [],
                label: "",
                selection: {},
                selected: "jc"
            }
        },
        methods: {
            async changeOther(v, d) {
                if (d.deptCompanyType === "station") {
                    return "";
                }
                this.clearECharts();
                this.selected = v;
                this.$emit("startLoading", true);
                if (v === "jc") {
                    await this.getTableData(this.selection);
                    await this.getLineData(this.selection);
                    this.headerClick({label: "总占地面积"});
                    this.$emit("startLoading", true);
                }
                if (v === "cw") {
                    this.columns = [];
                    this.columns = this.columnsFWQCW;
                    const res = await this.$axios("/api/jt_finance/get_three_fwqjy_biaoge_data?companyId=" + d['deptCompanyId']);
                    this.tableData = res.data.data;
                    this.headerClick({label: "当月收入"});
                    const line = await this.$axios.get("/api/jt_finance/get_three_fwqjy_zhutu_data?companyId=" + d['deptCompanyId']);
                    let data = line.data.data;
                    let th = this;
                    let op = {};
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
                            bottom: 20,
                            left: 90,
                            right: 20,
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
                    op = this.DeepCopy(option);
                    this.$echarts.init(document.getElementById("nfd0")).setOption(option);
                }
                this.$emit("clearLoading", true);
            },
            headerClick(column) {
                let label = column["label"];
                let prop;
                if (label === "名称") {
                    return '';
                }
                this.label = label;
                this.columns.forEach((i, x) => {
                    if (i['label'] === label) {
                        prop = i["prop"];
                    }
                })
                let pie = [];
                let name = this.selection["deptCompanyType"] === "service" ? "serviceName" : "stationName"
                this.tableData.forEach(i => {
                    pie.push({
                        name: i[name],
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
                            /* itemStyle: {
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
                if (this.selection["deptCompanyType"] === "station") {
                    await this.getPieData([v[0]["stationId"]])
                }
            },
            async getTableData(v) {
                let type = v["deptCompanyType"];
                if (type === "service") {
                    const res = await this.$axios.get("/api/jt_finance/get_three_fwqbg_data?companyId=" + v['deptCompanyId']);
                    let data = res.data.data;
                    data.forEach(i => {
                        i["id"] = i['companyCode'];
                        i["level"] = 1;
                    })
                    this.tableData = data;
                    this.columns = this.columnsFWQ;
                }
                if (type === 'station') {
                    const res = await this.$axios.get("/api/jt_finance/get_three_BG_data?companyId=" + v["deptCompanyId"]);
                    let data = res.data.data;
                    this.tableData = data;
                    this.columns = this.columnsNY;
                }
            },
            async getLineData(v) {
                let type = v["deptCompanyType"];
                let data = [];
                if (type === "service") {
                    let ids = [];
                    this.tableData.forEach(i => {
                        if (i["serviceId"]) {
                            ids.push(i["serviceId"])
                        }
                    })
                    const res = await this.$axios.get("/api/jt_finance/get_three_fwzhutu_data", {
                        params: {
                            serviceId: ids.join(",")
                        }
                    });
                    data = res.data.data;
                }
                if (type === "station") {
                    let ids = [];
                    this.tableData.forEach(i => {
                        if (i["stationId"]) {
                            ids.push(i["stationId"])
                        }
                    })
                    this.getPieData(ids);
                    const res = await this.$axios.get("/api/jt_finance/get_three_zhutu_data?stationId=" + ids.join(","));
                    data = res.data.data;
                }
                let th = this;
                let op = {};
                let option = {
                    tooltip: {
                        trigger: "axis",
                        formatter: "{b}月: {c}" + (this.selected === "cw" ? "万元" : "辆")
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
                        bottom: 20,
                        left: 90,
                        right: 20,
                    },
                    xAxis: [{
                        type: "category",
                        data: this.mySet(data, "xBxis")
                    }],
                    yAxis: [{
                        type: "value",
                        name: (this.selected === "cw" ? "万元" : "辆"),
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
                op = this.DeepCopy(option);
                this.$echarts.init(document.getElementById("nfd0")).setOption(option);
            },
            async getPieData(ids) {
                const res = await this.$axios.get("/api/jt_finance/get_three_santu_data?stationId=" + ids[0]);
                let data = res.data.data;
                data.forEach(i => {
                    if (i) {
                        i["value"] = i["yAxis"];
                        i["name"] = i["xBxis"];
                    }
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
                            /* itemStyle: {
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
                            data: data
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
                let type = v["deptCompanyType"];
                this.selection = v;
                await this.getTableData(v);

                if (type === "service") {
                    this.headerClick({label: "总占地面积"});
                }
                if (type === "station") {
                    this.selected = 'cw';
                    this.headerClick({label: "当月营收"});
                }
                await this.getLineData(v);
                this.$emit("clearLoading", true);
            }
        }
    }
</script>

<style scoped>

</style>