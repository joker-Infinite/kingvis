<template>
    <div class="WorkReport"
         v-loading="isLoading"
         element-loading-text="拼命加载中……"
         element-loading-spinner="el-icon-loading"
         element-loading-background="rgba(0, 0, 0, 0.5)">
        <div class="work_report_header">
            <!--标题 副标题-->
            <div class="work_report_header_title">
                <p class="mainTitle">
                    湖北交投实业公司2021年{{ new Date().getMonth() }}月重点工作汇报
                </p>
                <!--<p class="subtitle">
                            KEY WORK REPORT IN MAY
                        </p>-->
            </div>
            <!--头部下方边框-->
            <img class="headerBorder" :src="headerBorderImg" alt=""/>
            <!--点击头部下方边框按钮-->
            <div class="headerBorderBtn">
                <div class="arrow">
                    <i class=" left iconfont iconzuo"
                       v-if="thisImg !== 1"
                       @click="nextUnit(-1)"></i>
                </div>
                <div class="btn" v-for="i in forIndex" @click="changeBusiness(i)"></div>
                <div class="arrow">
                    <i class=" right iconfont iconzuo"
                       v-if="thisImg < 14"
                       @click="nextUnit(1)"></i>
                </div>
            </div>
            <!--日期 时间-->
            <div class="timeSelect">
                <el-date-picker
                        value-format="yyyy-MM"
                        v-model="time_page"
                        type="month"
                        @change="changeTime"
                        placeholder="选择月">
                </el-date-picker>
                {{ times }}
            </div>
            <!--项目进度-->
            <div class="typeSelect">
                <div :class="{ typeBtn: true, btnImg: btnImg === i }"
                     v-for="i in 4"
                     @click="typeSelect(i)">
                    {{i===1?"全部":i=== 2?"已完成":i===3?"未完成":"进行中"}}
                </div>
            </div>
        </div>
        <div class="work_report_content">
            <el-table-base
                    ref="elTableBase"
                    @allData="v => {(this.table = v), (this.isLoading = false), this.initECharts(v);}"
                    :btnImg="btnImg"
                    :currentPage="currentPage"
            ></el-table-base>
        </div>
        <div class="work_report_pagination">
            <el-pagination
                    background
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage"
                    :page-size="4"
                    layout="prev, pager, next, jumper"
                    :total="table.length">
            </el-pagination>
        </div>
        <div class="work_report_footer">
            <div class="ECharts" v-for="i in 4" :id="'ff-' + i">
                <div :id="'footer-' + i"></div>
                <p class="ECharts_title">
                    {{i===1?"月度计划完成情况统计":i===2?"年度重点工作状态分布":i===3?"年度重点工作与时间进度对比":"年度绩效重点工作执行情况"}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import timer from "../../components/js/timer";
    import ElTableBase from "./children/elTableBase";

    export default {
        name: "report",
        components: {ElTableBase},
        data() {
            return {
                baseData: [],
                isLoading: false,
                stateDict: ["未开始", "进行中", "完成", "归档", "终止"],
                table: [],
                currentPage: 1,
                times: "",
                btnImg: 1,
                headerBorderImg: require("../../assets/report/header/headerBorder-1.png"),
                imgIndex: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
                forIndex: [1, 2, 3, 4, 5],
                clickIndex: 1,
                time_page: "",
                thisImg: 1,
                increase: {},
                unitId: ''
            };
        },
        methods: {
            nextUnit(v) {
                v = this.thisImg + v;
                let j = 0;
                let arr = [];
                this.imgIndex.forEach(i => {
                    if (i >= v && j < 5 && v < 15) {
                        arr.push(i);
                        j++;
                    }
                    if (v >= 15) {
                        v = 1;
                        arr = [1, 2, 3, 4, 5];
                    }
                });
                this.forIndex = [];
                this.forIndex = arr;
                this.thisImg = v;
                this.headerBorderImg = require("../../assets/report/header/headerBorder-" + v + ".png");
                this.getAllData();
            },
            handleCurrentChange(v) {
                this.currentPage = v;
                this.$refs["elTableBase"].refresh(
                    this.baseData,
                    this.btnImg,
                    this.increase
                );
            },
            typeSelect(v) {
                this.btnImg = v;
                this.$nextTick(_ => {
                    this.$refs["elTableBase"].refresh(this.baseData, v, this.increase);
                });
            },
            changeBusiness(v) {
                let j = 0;
                let arr = [];
                this.thisImg = v;
                this.imgIndex.forEach(i => {
                    if (i >= v && j < 5 && v < 15) {
                        arr.push(i);
                        j++;
                    }
                });
                if (v > 14) {
                    arr = [1, 2, 3, 4, 5];
                    this.thisImg = 1;
                }
                this.forIndex = [];
                this.forIndex = arr;
                this.headerBorderImg = require("../../assets/report/header/headerBorder-" + this.thisImg + ".png");
                this.getAllData();
            },
            async initECharts(v) {
                for (let i = 1; i < 5; i++) {
                    let item = this.$echarts["init"](document.getElementById("footer-" + i));
                    if (item.dispose()) {
                        item.dispose();
                    }
                }
                let [dy, ywc, wwc, yzz, xy] = [0, 0, 0, 0, 0];
                let schedule = (100 / 12) * 6 * 100;
                v.forEach(i => {
                    //月度计划完成情况统计
                    {
                        let pa = i.states;
                        if (pa && pa.length > 0) {
                            pa.forEach(a => {
                                if (a == 2) {
                                    ywc++;
                                } else {
                                    wwc++;
                                }
                                dy++;
                            })
                        }
                        let sub = i.children;
                        if (sub && sub.length > 0) {
                            sub.forEach(b => {
                                let pb = b.states;
                                if (pb && pb.length > 0) {
                                    pb.forEach(c => {
                                        if (c == 2) {
                                            ywc++;
                                        } else {
                                            wwc++;
                                        }
                                        dy++;
                                    })
                                }
                            })
                        }
                        /* let state = i.states;
                         let child = i.children;
                         if (state && state.length > 0) {
                             state.forEach(m => {
                                 dy++;
                                 if (m == 2) {
                                     ywc++;
                                 }
                                 if (m != 2) {
                                     wwc++;
                                 }
                             });
                         }
                         if (child && child.length > 0) {
                             child.forEach(s => {
                                 let cState = s.states;
                                 if (cState && cState.length > 0) {
                                     cState.forEach(m => {
                                         dy++;
                                         if (m == 2) {
                                             ywc++;
                                         }
                                         if (m != 2) {
                                             wwc++;
                                         }
                                     });
                                 }
                             });
                         }*/
                    }
                });
                //饼1 id:this.unitId
                const ii = await this.$axios.get("/wj/report/get_work_time", {params: {id: this.unitId}});
                let wc = JSON.parse(ii.data.data).data
                let wc_pie = [
                    {value: wc.d, name: "0 ~ 15%"},
                    {value: wc.c, name: "15 ~ 50%"},
                    {value: wc.b, name: "50 ~ 85%"},
                    {value: wc.a, name: "85%+"}
                ];
                //饼2
                const jj = await this.$axios.get("/wj/report/get_situation_preview", {params: {id: this.unitId}});
                let db = JSON.parse(jj.data.data).data
                let jd = [
                    {value: db.d, name: "<-20%"},
                    {value: db.c, name: "-20%~-10%"},
                    {value: db.b, name: "-10%~+10%"},
                    {value: db.a, name: ">10%"}
                ];
                //年度绩效重点工作执行情况
                const mm = await this.$axios.get("/wj/report/get_executive_condition", {params: {id: this.unitId}});
                let jx = JSON.parse(mm.data.data).data;
                let ids = [];
                for (let i = 1; i < 5; i++) {
                    ids.push(this.$echarts["init"](document.getElementById("footer-" + i)));
                }
                let options = [
                    {
                        barWidth: 15,
                        textStyle: {
                            color: "white"
                        },
                        tooltip: {
                            trigger: "item"
                        },
                        grid: {
                            left: 40,
                            top: 20,
                            bottom: 20,
                            right: 20
                        },
                        xAxis: {
                            type: "category",
                            axisTick: {
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
                            },
                            data: ["当月计划", "已完成", "未完成", "已终止", "下月计划"]
                        },
                        yAxis: {
                            type: "value",
                            axisTick: {
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
                        series: [
                            {
                                data: [dy, ywc, wwc, yzz, xy],
                                type: "bar",
                                itemStyle: {
                                    normal: {
                                        color: "rgb(7,95,213)"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        tooltip: {
                            trigger: "item"
                        },
                        legend: {
                            orient: "vertical",
                            left: "left",
                            top: "center",
                            textStyle: {
                                color: "white"
                            }
                        },
                        grid: {
                            left: 40,
                            top: 20,
                            bottom: 20,
                            right: 20
                        },
                        series: [
                            {
                                type: "pie",
                                radius: ["0%", "80%"],
                                center: ["55%", "55%"],
                                itemStyle: {
                                    normal: {
                                        color: function (v) {
                                            let colorList = ["#dd2a2a", "#ffde2a", "#01beff", "#32e232"]
                                            return colorList[v.dataIndex];
                                        }
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        color: function (v) {
                                            let colorList = ["#dd2a2a", "#ffde2a", "#01beff", "#32e232"]
                                            return colorList[v.dataIndex];
                                        }
                                    }
                                },
                                data: wc_pie
                            }
                        ]
                    },
                    {
                        tooltip: {
                            trigger: "item"
                        },
                        legend: {
                            orient: "vertical",
                            left: "left",
                            top: "center",
                            textStyle: {
                                color: "white"
                            }
                        },
                        series: [
                            {
                                type: "pie",
                                radius: ["0%", "80%"],
                                center: ["55%", "55%"],
                                itemStyle: {
                                    normal: {
                                        color: function (v) {
                                            let colorList = ["#dd2a2a", "#ffde2a", "#01beff", "#32e232"]
                                            return colorList[v.dataIndex];
                                        }
                                    }
                                },
                                data: jd,
                                emphasis: {
                                    itemStyle: {
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: "rgba(0, 0, 0, 0.5)"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        barWidth: 8,
                        textStyle: {color: "white"},
                        tooltip: {trigger: "axis"},
                        legend: {
                            data: ["未完成", "已完成", "得分"],
                            top: 25,
                            textStyle: {
                                color: "#FFF"
                            }
                        },
                        grid: {
                            left: 40,
                            top: 60,
                            bottom: 20,
                            right: 10
                        },
                        xAxis: [
                            {
                                type: "category",
                                axisTick: {
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
                                },
                                data: this.mySet(jx, 'month'),
                                axisPointer: {
                                    type: "shadow"
                                }
                            }
                        ],
                        yAxis: [
                            {
                                type: "value",
                                name: "分",
                                min: 0,
                                max: 100,
                                interval: 30,
                                axisTick: {
                                    show: false
                                },
                                splitLine: {show: false},
                                axisLine: {
                                    lineStyle: {
                                        color: "#FFF"
                                    }
                                },
                                axisLabel: {
                                    formatter: "{value}",
                                    textStyle: {
                                        color: "#FFF"
                                    }
                                }
                            }
                        ],
                        series: [
                            {
                                name: "未完成",
                                type: "bar",
                                itemStyle: {
                                    color: "#03DBF1"
                                },
                                data: this.mySet(jx, 'weiWanCheng'),
                            },
                            {
                                name: "已完成",
                                type: "bar",
                                itemStyle: {
                                    color: "#026cf9"
                                },
                                data: this.mySet(jx, 'wanCheng'),
                            },
                            {
                                name: "得分",
                                type: "line",
                                itemStyle: {
                                    color: "#f9c555"
                                },
                                data: this.mySet(jx, 'deFen'),
                            }
                        ]
                    }
                ];
                ids.forEach((i, x) => {
                    this.$nextTick(_ => {
                        i.setOption(options[x]);
                    });
                });
            },
            async getAllData() {
                this.isLoading = true;
                const unitData = (await this.$axios["get"]("https://okr.hbjtsy.com:7080/jt/zt/getDeptList")).data.data;
                let unit = [5, 6, 7, 8, 4, 11, 0, 10, 9, 1, 12, 13, 3, 2];
                this.unitId = unitData[unit[this.thisImg - 1]]["id"];
                const d = await this.$axios["get"]("/wj/report/getMonthReport", {
                    params: {
                        reportType: unitData[unit[this.thisImg - 1]]["tagValue"],
                        reportTime: this.time_page + "-01 00:00:00"
                    }
                });
                let date = this.time_page.split("-");
                let former =
                    date[0] + "-" + (date[1] - 1 < 10 ? "0" + (date[1] - 1) : date[1] - 1);
                const e = await this.$axios["get"]("/wj/report/getMonthReport", {
                    params: {
                        reportType: "TZJYB_ZN",
                        reportTime: former + "-01 00:00:00"
                    }

                });
                this.increase = {};
                let es = e.data.data.child;
                if (es && es.length > 0) {
                    es.forEach(i => {
                        let child = i.child;
                        if (child && child.length > 0) {
                            for (let j in child) {
                                this.increase[child[j]["id"]] = child[j]["progressRate"];
                                let child_c = child[j]["subProject"];
                                if (child_c && child_c.length > 0) {
                                    for (let m in child_c) {
                                        this.increase[child_c[m]["id"]] = child_c[m]["progressRate"];
                                    }
                                }
                            }
                        }
                    });
                }
                //分页
                let arr = this.DeepCopy(es);
                let n = 0;
                let sure = [];
                for (let i = 0; i < arr.length / 4; i++) {
                    sure.push([]);
                }
                //分页
                arr.forEach((i, x) => {
                    if (x % 4 === 0 && x !== 0) {
                        n++;
                    }
                    sure[n].push(i);
                });
                this.baseData = d.data.data.child;
                this.$refs["elTableBase"].refresh(
                    this.baseData,
                    this.btnImg,
                    this.increase
                );
            },
            changeTime() {
                this.getAllData();
            }
        },
        mounted() {
            let this_ = this;
            this_.times = timer();
            setInterval(function () {
                this_.times = timer();
            }, 1000);
            let month = new Date().getMonth() + 1;
            this.time_page = new Date().getFullYear() + "-" + (month < 10 ? "0" + month : month);
            this.getAllData();
            window.onresize = () => {
                this.initECharts(this.table);
            };
        }
    };
</script>

<style scoped lang="less">
    @pagination-background-color: rgba(7, 95, 213, 0.51);
    @none: rgba(0, 0, 0, 0);
    .WorkReport {
        width: 100%;
        margin: auto;
        height: 100%;
        background-image: url("../../assets/report/background.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-wrap: nowrap;

        .work_report_header {
            width: 95%;
            margin: auto;
            height: 13%;
            position: relative;

            .work_report_header_title {
                width: 100%;
                height: 75px;
                text-align: center;
                color: white;

                .mainTitle {
                    line-height: 60px;
                    font-size: 25px;
                    font-weight: bold;
                }

                .subtitle {
                    font-size: 16px;
                }
            }

            .headerBorder {
                width: 100%;
                position: absolute;
                bottom: 0;
                left: 0;
            }

            .headerBorderBtn {
                width: 100%;
                height: 35px;
                position: absolute;
                bottom: 15px;
                left: 0;
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: center;

                .arrow {
                    width: 150px;
                    line-height: 35px;
                    text-align: center;
                    color: #fff;
                    display: none;

                    i {
                        display: inline-block;
                        cursor: pointer;
                    }

                    i:hover {
                        color: #00b8fe;
                    }

                    .left {
                    }

                    .right {
                        transform: rotate(180deg);
                    }
                }

                .btn {
                    width: 125px;
                    height: 35px;
                    cursor: pointer;
                    background: none !important;
                }

                .btn:nth-child(n) {
                    background: rgba(250, 30, 188, 0.34);
                }

                .btn:nth-child(2n) {
                    background: rgba(67, 250, 60, 0.34);
                }
            }

            .headerBorderBtn:hover .arrow {
                display: block;
            }

            .timeSelect {
                width: 300px;
                height: 25px;
                position: absolute;
                top: 20px;
                right: 50px;
                color: white;

                /deep/ .el-date-editor {
                    width: 100px;

                    .el-input__inner {
                        background-color: rgba(0, 0, 0, 0);
                        border: none;
                        height: 30px;
                        line-height: 30px;
                        border-radius: 0;
                        border-bottom: 2px solid #0266ec;
                        width: 100px;
                        color: white;
                        font-size: 20px;
                        padding: 0;
                        text-align: right;
                        font-weight: 700;
                    }

                    .el-input__prefix {
                        left: 0;

                        .el-input__icon {
                            height: 30px;
                            line-height: 30px;
                            font-size: 20px;
                        }
                    }

                    .el-input__suffix {
                        display: none;
                    }
                }
            }

            .typeSelect {
                width: 300px;
                height: 35px;
                position: absolute;
                top: 90px;
                left: 50px;
                color: white;
                display: flex;
                flex-wrap: nowrap;
                flex-direction: row;
                justify-content: space-between;

                .typeBtn {
                    width: 70px;
                    height: 32px;
                    text-align: center;
                    line-height: 32px;
                    font-size: 14px;
                    cursor: pointer;
                }

                .btnImg {
                    background-image: url("../../assets/report/btnImg.png");
                    background-size: 100% 100%;
                    background-repeat: no-repeat;
                }
            }
        }

        .work_report_content {
            width: 95%;
            margin: auto;
            height: calc(60% - 40px);
            background-image: url("../../assets/report/center.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;

            /deep/ .el-table {
                width: 95%;
                height: 95%;
                margin: 0 2.5%;
                color: white;
                background: @none;

                tr {
                    background: @none;
                }

                .el-table__header-wrapper {
                    .el-table__header {
                        tr {
                            background: @none;

                            th {
                                color: white;
                                background: @none;
                            }
                        }
                    }
                }

                .el-table__body-wrapper {
                    .el-table__body {
                        tr:hover > td {
                            background-color: rgba(52, 164, 255, 0.5);
                        }

                        .current-row {
                            td {
                                background-color: rgba(52, 164, 255, 0.5);
                            }
                        }
                    }
                }

                /*.el-table__body-wrapper::-webkit-scrollbar {
                              display: none;
                          }*/

                .el-table__body-wrapper::-webkit-scrollbar {
                    width: 5px;
                    height: 5px;
                    border-radius: 10px;
                    background-color: #555;
                }

                .el-table__body-wrapper::-webkit-scrollbar-thumb {
                    border-radius: 10px;
                    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
                    background-color: #ffffff;
                }

                .el-table__body-wrapper::-webkit-scrollbar-track {
                    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
                    border-radius: 10px;
                    background-color: #555;
                }

                .el-table__fixed {
                    .el-table__fixed-body-wrapper {
                        .el-table__body {
                            background: @none;

                            tr:hover > td {
                                background-color: rgba(0, 0, 0, 0.5);
                            }

                            tr {
                                background: @none;

                                td {
                                    background-color: @none;
                                }
                            }

                            .current-row {
                                td {
                                    background-color: rgba(255, 0, 0, 0.5);
                                }
                            }
                        }
                    }
                }

                .cellECharts {
                    width: 100%;
                    height: 100px;
                }
            }

            /deep/ .el-table::before {
                background-color: @none;
            }
        }

        .work_report_pagination {
            width: 100%;
            height: 40px;
            text-align: center;
            margin: 4px 0;

            /deep/ .el-pagination {
                .btn-prev {
                    color: white;
                    background: @pagination-background-color;
                }

                .number {
                    background: none;
                    border: 2px solid @pagination-background-color;
                    color: white;
                    line-height: 24px;
                }

                .more {
                    background: none;
                    color: white;
                }

                .active {
                    color: white;
                    background-color: @none !important;
                    background: @pagination-background-color !important;
                }

                .btn-next {
                    color: white;
                    background: @pagination-background-color;
                }

                .el-pagination__jump {
                    color: white;

                    .el-pagination__editor {
                        .el-input__inner {
                            background: none;
                            color: white;
                            border: 2px solid @pagination-background-color;
                        }
                    }
                }
            }
        }

        .work_report_footer {
            width: 95%;
            margin: auto;
            height: 25%;
            display: flex;
            flex-wrap: nowrap;
            flex-direction: row;
            justify-content: space-between;

            .ECharts {
                width: calc(24% - 40px);
                height: calc(100% - 40px);
                padding: 20px;
                background-repeat: no-repeat;
                background-size: 100% 100%;
                position: relative;

                div {
                    width: 100%;
                    height: 100%;
                }

                .ECharts_title {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    line-height: 50px;
                    font-size: 16px;
                    font-weight: 800;
                    font-family: "Microsoft YaHei";
                    text-align: center;
                    z-index: 9999;
                    color: white;
                }
            }

            #ff-1 {
                background-image: url("../../assets/report/monthly.png");
            }

            #ff-2 {
                background-image: url("../../assets/report/projectType.png");
            }

            #ff-3 {
                background-image: url("../../assets/report/scheduleType.png");
            }

            #ff-4 {
                background-image: url("../../assets/report/yearScore.png");
            }
        }
    }
</style>
