<template>
    <div class="WorkReport"
         v-loading="isLoading"
         element-loading-text="拼命加载中……"
         element-loading-spinner="el-icon-loading"
         element-loading-background="rgba(0, 0, 0, 0.5)">
        <div class="work_report_header">
            <!--标题 副标题-->
            <div class="work_report_header_title">
                <p class="mainTitle">湖北交投实业公司2021年{{(new Date()).getMonth()+1}}月重点工作汇报</p>
                <p class="subtitle">
                    KEY WORK REPORT IN MAY
                </p>
            </div>
            <!--头部下方边框-->
            <img class="headerBorder" :src="headerBorderImg" alt="">
            <!--点击头部下方边框按钮-->
            <div class="headerBorderBtn">
                <div class="arrow"><i class=" left iconfont iconzuo" v-if="showArrow_l" @click="nextUnit(-1)"></i>
                </div>
                <div class="btn" v-for="i in 5" @click.stop="changeBusiness(i)"></div>
                <div class="arrow"><i class=" right iconfont iconzuo" v-if="showArrow_r" @click="nextUnit(1)"></i>
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
                {{times}}
            </div>
            <!--项目进度-->
            <div class="typeSelect">
                <div :class="{'typeBtn':true,'btnImg':btnImg===i}" v-for="i in 4" @click="typeSelect(i)">
                    {{i===1?'全部':i===2?'已完成':i===3?'未完成':'进行中'}}
                </div>
            </div>
        </div>
        <div class="work_report_content">
            <el-table style="margin-top: 10px" tooltip-effect="dark" :show-overflow-tooltip="true" ref="elTable"
                      :data="tableData"
                      height="calc(100% - 30px)"
                      highlight-current-row>
                <!--<el-table-column align="center"
                                 label="序号"
                                 width="50">
                    <template slot-scope="scope">
                        {{scope.$index+1}}
                    </template>
                </el-table-column>-->
                <el-table-column prop="name"
                                 label="项目名称"
                                 width="150px"
                                 align="center">
                    <template slot-scope="scope">
                        {{scope.row["name"]}}<br>
                        <i class="el-icon-s-finance"></i>
                    </template>
                </el-table-column>
                <el-table-column prop="progressRate"
                                 label="进度状态"
                                 width="120px"
                                 align="center">
                    <template slot-scope="scope">
                        <div style="width: 100%;height: 25%;position: relative">
                            <div class="cellECharts" :id="'ID'+currentPage+'-'+ (scope.$index+1)"></div>
                        </div>
                        <!--<div style="color: red;font-size: 14px;width: 58px;position: absolute;z-index: 99999;right:0;top: calc(50% - 10px)">
                            <img v-if="scope.$index%2===0" src="../assets/report/up.png" style="width: 20px" alt=""/>
                            <img v-if="scope.$index%2!==0" src="../assets/report/down.png" style="width: 20px" alt=""/>
                            <span :style="{color:scope.$index%2!==0?'#1cf517':'#ff1b12'}">1.3%</span>
                        </div>-->
                    </template>
                </el-table-column>
                <el-table-column prop="goalDetail"
                                 label="目标"
                                 width="250px"
                                 align="center">
                </el-table-column>
                <el-table-column prop="planDetail_4"
                                 :label="(new Date()).getMonth()+'月份计划'"
                                 align="center">
                    <template slot-scope="scope">
                        <template v-for="i in scope.row['planDetails_4']">
                            <template v-if="i.length>0" v-for="j in i">
                                <template v-if="j.length>0" v-for="(m,x) in j">
                                    <p v-if="x===0" style="text-align: left;font-weight: 700;font-size: 16px">{{m}}</p>
                                    <p v-if="x!==0" style="text-indent: 50px;text-align: left !important">
                                        {{m["planDetail"]}}</p>
                                </template>
                            </template>
                        </template>
                    </template>
                </el-table-column>
                <el-table-column prop="state"
                                 label="状态"
                                 width="150px"
                                 align="left">
                    <template slot-scope="scope">
                        <template v-for="i in scope.row['planDetails_5']">
                            <template v-if="i.length>0" v-for="j in i">
                                <template v-if="j.length>0" v-for="(m,x) in j">
                                    <p v-if="x===0" style="text-align: left;font-weight: 700;font-size: 16px">{{m}}</p>
                                    <p v-if="x!==0" style="text-indent: 50px;text-align: left !important">
                                        {{stateDict[m["state"]]}}</p>
                                </template>
                            </template>
                        </template>
                    </template>
                </el-table-column>
                <el-table-column prop="stateDesc"
                                 label="情况说明"
                                 width="200px"
                                 align="center">
                    <template slot-scope="scope">
                        <template v-for="i in scope.row['planDetails_4']">
                            <template v-if="i.length>0" v-for="j in i">
                                <template v-if="j.length>0" v-for="(m,x) in j">
                                    <p v-if="x===0" style="text-align: left;font-weight: 700;font-size: 16px">{{m}}</p>
                                    <p v-if="x!==0" style="text-indent: 50px;text-align: left">{{m["stateDesc"]}}</p>
                                </template>
                            </template>
                        </template>
                    </template>
                </el-table-column>
                <el-table-column prop="planDetail_5"
                                 :label="(new Date()).getMonth()+1+'月份计划'"
                                 align="center">
                    <template slot-scope="scope">
                        <template v-for="i in scope.row['planDetails_4']">
                            <template v-if="i.length>0" v-for="j in i">
                                <template v-if="j.length>0" v-for="(m,x) in j">
                                    <p v-if="x===0" style="text-align: left;font-weight: 700;font-size: 16px">{{m}}</p>
                                    <p v-if="x!==0" style="text-indent: 50px">{{m["planDetail"]}}</p>
                                </template>
                            </template>
                        </template>
                    </template>
                </el-table-column>
            </el-table>
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
            <div class="ECharts" v-for="i in 4" :id="'ff-'+i">
                <div :id="'footer-'+i"></div>
                <p class="ECharts_title">
                    {{i===1?"月度计划完成情况统计":i===2?"年度重点工作完成情况统计":i===3?"年度重点工作与时间进度对比":"年度绩效重点工作执行情况"}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import timer from "./js/timer";

    export default {
        name: "WorkReport",
        data() {
            return {
                isLoading: false,
                stateDict: ["未开始", "进行中", "完成", "归档", "终止"],
                tableData: [],
                table: [],
                currentPage: 1,
                times: '',
                btnImg: 1,
                headerBorderImg: require("../assets/report/header/headerBorder-1.png"),
                imgNumberData: [
                    [1, 2, 3, 4, 5],
                    [2, 3, 4, 5, 6],
                    [3, 4, 5, 6, 7],
                    [4, 5, 6, 7, 8],
                    [5, 6, 7, 8, 9],
                    [6, 7, 8, 9, 10],
                    [7, 8, 9, 10, 11],
                    [8, 9, 10, 11, 12],
                    [9, 10, 11, 12, 13],
                    [10, 11, 12, 13, 14],
                    [11, 12, 13, 14],
                    [12, 13, 14],
                    [13, 14],
                    [14]
                ],
                imgNumber: 0,
                imgNumberKey: "",
                imgNumberKey_: "",
                time_page: "",
                currentUnit: 0,
                showArrow_l: false,
                showArrow_r: true,
                clickArrow: false,
                clickImg: false
            }
        },
        methods: {
            nextUnit(v) {
                this.clickArrow = true;
                this.showArrow_l = true;
                this.showArrow_r = true;
                if (this.imgNumber === 0) {
                    this.imgNumber += 1
                }
                this.currentUnit += v;
                this.imgNumber += v;
                if (this.imgNumber < 2) {
                    this.showArrow_l = false;
                }
                if (this.imgNumber > 13) {
                    this.showArrow_r = false;
                }
                if (this.clickImg) {
                    this.imgNumber = this.imgNumber + 1;
                    this.clickImg = false;
                }
                this.headerBorderImg = require("../assets/report/header/headerBorder-" + this.imgNumber + ".png");
                this.getAllData(this.time_page, "arrow")
            },
            handleCurrentChange(v) {
                this.currentPage = v;
                this.InquirePageData(this.time_page)
            },
            typeSelect(v) {
                this.btnImg = v;
                this.InquirePageData(this.time_page)
            },
            changeBusiness(v) {
                clearInterval(this.imgNumberKey);
                this.clickImg = true;
                if (this.imgNumber === 10 && v === 5) {
                    v = 1;
                    this.imgNumber = 0;
                }
                if (this.imgNumber === 11 && v > 3) {
                    v = 1;
                    this.imgNumber = 0;
                }
                if (this.imgNumber === 12 && v > 2) {
                    v = 1;
                    this.imgNumber = 0;
                }
                if ((this.imgNumber === 13 && v > 1)) {
                    v = 1;
                    this.imgNumber = 0;
                }
                if (this.clickArrow) {
                    this.imgNumber -= 1;
                    this.clickArrow = false;
                }
                let n = this.imgNumberData[this.imgNumber][v - 1];
                this.currentUnit = n;
                this.showArrow_l = true;
                this.showArrow_r = true;
                if (this.imgNumber < 2) {
                    this.showArrow_l = false;
                }
                if (this.imgNumber >= 12) {
                    this.showArrow_r = false;
                }
                this.headerBorderImg = require("../assets/report/header/headerBorder-" + n + ".png");
                this.btnImg = 1;
                this.imgNumber = n - 1;
                this.InquirePageData(this.time_page, "img")
            },
            initECharts(v) {
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
                            trigger: 'item'
                        },
                        grid: {
                            left: 40,
                            top: 20,
                            bottom: 20,
                            right: 20
                        },
                        xAxis: {
                            type: 'category',
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
                            data: ['当月计划', '已完成', '未完成', '下月计划']
                        },
                        yAxis: {
                            type: 'value',
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
                        series: [{
                            data: v[0],
                            type: 'bar',
                            itemStyle: {
                                normal: {
                                    color: "rgb(7,95,213)"
                                }
                            },
                        }]
                    },
                    {
                        tooltip: {
                            trigger: 'item'
                        },
                        legend: {
                            orient: 'vertical',
                            right: 50,
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
                                type: 'pie',
                                radius: ['70%', '80%'],
                                center: ["35%", "55%"],
                                avoidLabelOverlap: false,
                                label: {
                                    show: false,
                                    position: 'center'
                                },
                                labelLine: {
                                    show: false
                                },
                                itemStyle: {
                                    normal: {
                                        color: function (v) {
                                            let colorList = ["#D68732", "#31D6A4", "#025DD7"];
                                            return colorList[v.dataIndex];
                                        }
                                    }
                                },
                                data: v[1]
                            }
                        ]
                    },
                    {
                        tooltip: {
                            trigger: 'item'
                        },
                        legend: {
                            orient: 'vertical',
                            left: 'left',
                            top: "center",
                            textStyle: {
                                color: "white"
                            }
                        },
                        series: [
                            {
                                type: 'pie',
                                radius: '50%',
                                itemStyle: {
                                    normal: {
                                        color: function (v) {
                                            let colorList = ["#06d3c4", "#9e87ff", "#7ebdff", "#fdd36a", "#fdb36a", "#fd866a"];
                                            return colorList[v.dataIndex];
                                        }
                                    }
                                },
                                data: [
                                    {value: 1048, name: '工作1'},
                                    {value: 735, name: '工作2'},
                                    {value: 580, name: '工作3'},
                                    {value: 484, name: '工作4'},
                                    {value: 300, name: '工作5'}
                                ],
                                emphasis: {
                                    itemStyle: {
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            }
                        ]
                    },
                    {
                        barWidth: 8,
                        textStyle: {color: "white"},
                        tooltip: {trigger: 'axis'},
                        legend: {
                            data: ['应该完成', '实际完成'],
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
                                type: 'category',
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
                                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                                axisPointer: {
                                    type: 'shadow'
                                }
                            }
                        ],
                        yAxis: [
                            {
                                type: 'value',
                                name: '%',
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
                                    formatter: '{value}',
                                    textStyle: {
                                        color: "#FFF"
                                    }
                                }
                            }
                        ],
                        series: [
                            {
                                name: '应该完成',
                                type: 'bar',
                                itemStyle: {
                                    color: "#03DBF1"
                                },
                                data: [20, 40, 70, 20, 20, 70, 20, 40, 70, 20, 20, 70]
                            },
                            {
                                name: '实际完成',
                                type: 'bar',
                                itemStyle: {
                                    color: "#026cf9"
                                },
                                data: [80, 60, 30, 80, 80, 30, 80, 60, 30, 80, 80, 30]
                            }
                        ]
                    }
                ];
                ids.forEach((i, x) => {
                    /* if (i.dispose()) {
                         i.dispose()
                     }*/
                    this.$nextTick(_ => {
                        i.setOption(options[x])
                    });
                });
            },
            refresh() {
                this.cellEChartsInit(this.tableData.length, this.currentPage)
            },
            cellEChartsInit(table, page) {
                if (table > 0) {
                    for (let i = 0; i < table; i++) {
                        let carryOut = Math.round(this.tableData[i]["progressRate"] / 100);
                        let undone = 100 - carryOut;
                        let option = {
                            series: [
                                {
                                    type: 'pie',
                                    radius: ['40%', '45%'],
                                    center: ['25%', '50%'],
                                    avoidLabelOverlap: false,
                                    hoverAnimation: false,
                                    label: {show: true, position: 'center', textStyle: {color: "white", fontSize: 16}},
                                    labelLine: {show: false},
                                    itemStyle: {
                                        normal: {
                                            color: function (v) {
                                                let colorList = ["#15b3e2", "#2e65fd"];
                                                return colorList[v.dataIndex];
                                            }
                                        }
                                    },
                                    data: [
                                        {value: carryOut, name: carryOut + '%'},
                                        {value: undone, name: ''},
                                    ]
                                }
                            ]
                        };
                        this.$echarts["init"](document.getElementById('ID' + page + '-' + (i + 1))).setOption(option);
                    }
                }
            },
            async getAllData(v, c) {
                this.isLoading = true;
                const unit = (await this.$axios["get"]("https://okr.hbjtsy.com:7080/jt/zt/getDeptList")).data.data;
                if (this.currentUnit > unit.length) {
                    this.currentUnit = 0;
                }
                let arr = [5, 6, 7, 8, 4, 11, 0, 10, 9, 1, 12, 13, 3, 2];
                let date = v.split("-");
                let s = 0;
                if (c == "arrow") {
                    s = this.imgNumber - 1;
                } else {
                    s = this.imgNumber;
                }
                const d = await this.$axios["get"]("/api/report/getMonthReport", {
                    params: {
                        reportType: unit[arr[s]]["tagValue"],
                        reportTime: date[0] + '-' + (date[1] < 10 ? ('0' + date[1]) : date[1]) + "-01 00:00:00"
                    }
                });
                let res = d.data.data.child;
                let project = [];
                let timer = [];
                v.split("-").forEach(i => {
                    timer.push(parseInt(i));
                });
                if (!res || res.length === 0) {
                    this.isLoading = false;
                    return [];
                }
                for (let a of res) {
                    if (a.child.length > 0) {
                        let project_main = a.child;//一级项目list child
                        for (let a of project_main) {
                            //阶段
                            if (a["child"].length > 0) {
                                let ac = a["child"];
                                let planDetails_before_month = [];//前一个月
                                let planDetails_current_month = [];//当前月
                                let planDetails_next_month = []; //下个月
                                for (let b of ac) {
                                    //阶段计划
                                    if (b["plans"].length > 0) {
                                        let arr_before_month = [];
                                        let arr_current_month = [];
                                        let arr_next_month = [];

                                        for (let e of b["plans"]) {
                                            let time = e.startTime.split(" ")[0].split("-");
                                            if (time[0] == timer[0] && time[1] == timer[1] - 1) {
                                                arr_before_month.push(e);
                                            }
                                            if (time[0] == timer[0] && time[1] == timer[1]) {
                                                arr_current_month.push(e);
                                            }
                                            if (time[0] == timer[0] && time[1] == timer[1] + 1) {
                                                arr_next_month.push(e);
                                            }
                                        }
                                        arr_before_month.unshift(b.name);
                                        arr_current_month.unshift(b.name);
                                        arr_next_month.unshift(b.name);
                                        planDetails_before_month.push([arr_before_month]);
                                        planDetails_current_month.push([arr_current_month]);
                                        planDetails_next_month.push([arr_next_month]);
                                    }
                                }
                                project.push({
                                    name: a["name"],
                                    progressRate: a["progressRate"],
                                    goalDetail: a["goalDetail"],
                                    planDetails_4: planDetails_before_month,
                                    planDetails_5: planDetails_current_month,
                                    planDetails_6: planDetails_next_month
                                })
                            }
                            //子项目
                            if (a["subProject"].length > 0) {
                                let as = a["subProject"];
                                for (let c of as) {
                                    if (c["child"].length > 0) {
                                        //子项目 阶段
                                        let cc = c["child"];
                                        let planDetails_before_month = [];
                                        let planDetails_current_month = [];
                                        let planDetails_next_month = [];
                                        for (let d of cc) {
                                            //子项目 阶段计划
                                            if (d["plans"].length > 0) {
                                                let arr_before_month = [];
                                                let arr_current_month = [];
                                                let arr_next_month = [];
                                                for (let e of d["plans"]) {
                                                    let time = e.startTime.split(" ")[0].split("-");
                                                    if (time[0] == timer[0] && time[1] == (timer[1] - 1)) {
                                                        arr_before_month.push(e);
                                                    }
                                                    if (time[0] == timer[0] && time[1] == timer[1]) {
                                                        arr_current_month.push(e);
                                                    }
                                                    if (time[0] == timer[0] && time[1] == timer[1] + 1) {
                                                        arr_next_month.push(e);
                                                    }
                                                }
                                                arr_before_month.unshift(d.name);
                                                arr_current_month.unshift(d.name);
                                                arr_next_month.unshift(d.name);
                                                planDetails_before_month.push([arr_before_month]);
                                                planDetails_current_month.push([arr_current_month]);
                                                planDetails_next_month.push([arr_next_month]);
                                            }
                                        }
                                        project.push({
                                            name: c["name"],
                                            progressRate: c["progressRate"],
                                            goalDetail: c["goalDetail"],
                                            planDetails_4: planDetails_before_month,
                                            planDetails_5: planDetails_current_month,
                                            planDetails_6: planDetails_next_month
                                        })
                                    }
                                }
                            }
                        }
                    }
                }
                this.isLoading = false;
                return this.DeepCopy(project);
            },
            async InquirePageData(v, s) {
                let data = [];
                data = await this.getAllData(v, s);
                this.tableData = [];
                let arr = [];
                for (let i = 1; i < 5; i++) {
                    let item = this.$echarts["init"](document.getElementById("footer-" + i));
                    if (item.dispose()) {
                        item.dispose();
                    }
                }
                if (data.length === 0) {
                    return ''
                }
                data.forEach(i => {
                    if (this.btnImg === 1) {
                        arr.push(i);
                    }
                    if (this.btnImg === 2 && this.btnImg.progressRate == 10000) {
                        arr.push(i)
                    }
                    if (this.btnImg === 3 && this.btnImg.progressRate != 10000) {
                        arr.push(i)
                    }
                    if (this.btnImg === 4 && this.btnImg.progressRate != 10000) {
                        arr.push(i)
                    }
                });
                //分页
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
                this.tableData = sure[this.currentPage - 1];
                this.table = arr;
                //项目状态
                let EC_PIE = [];
                //已完成
                let carryOut = 0;
                //未完成
                let undone = 0;
                arr.forEach(i => {
                    if (i["progressRate"] == 10000) {
                        carryOut++;
                    } else {
                        undone++;
                    }
                });
                EC_PIE = [
                    {value: carryOut, name: '已完成'},
                    {value: undone, name: '未完成'},
                    {value: undone, name: '进行中'}
                ];
                //当月计划
                let current_month = [];
                //下月计划
                let next_month = [];
                //当月计划 已完成
                let current_month_carryOut = [];
                //当月计划 未完成
                let current_month_undone = [];
                data.forEach(i => {
                    let planDetails_5 = i.planDetails_5;
                    let planDetails_6 = i.planDetails_6;
                    planDetails_5.forEach(i => {
                        if (i.length > 0) {
                            i.forEach(j => {
                                for (let m = 1; m < j.length; m++) {
                                    current_month.push(j[m]);
                                    if (j[m].state == 2) {
                                        current_month_carryOut.push(j[m]);
                                    } else {
                                        current_month_undone.push(j[m]);
                                    }
                                }
                            })
                        }
                    });
                    planDetails_6.forEach(i => {
                        if (i.length > 0) {
                            i.forEach(j => {
                                for (let m = 1; m < j.length; m++) {
                                    next_month.push(j[m]);
                                }
                            })
                        }
                    })
                });

                this.$nextTick(_ => {
                    this.refresh();
                    this.initECharts([[current_month.length, current_month_carryOut.length, current_month_undone.length, next_month.length], EC_PIE, [], []]);
                })
            },
            changeTime() {
                this.InquirePageData(this.time_page);
            }
        },
        mounted() {
            let this_ = this;
            this_.times = timer();
            // this.startChange(1);
            setInterval(function () {
                this_.times = timer();
            }, 1000);
            this.time_page = (new Date()).getFullYear() + "-" + ((new Date()).getMonth() + 1);
            this.InquirePageData(this.time_page);
        }
    }
</script>

<style scoped lang="less">
    @pagination-background-color: rgba(7, 95, 213, 0.51);
    @none: rgba(0, 0, 0, 0);
    .WorkReport {
        width: 100%;
        margin: auto;
        height: 100%;
        background-image: url("../assets/report/background.png");
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
                    width: 90px;
                    line-height: 35px;
                    text-align: center;
                    color: #FFF;
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
                        border-bottom: 2px solid #0266EC;
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
                    background-image: url("../assets/report/btnImg.png");
                    background-size: 100% 100%;
                    background-repeat: no-repeat;
                }
            }
        }

        .work_report_content {
            width: 95%;
            margin: auto;
            height: calc(60% - 40px);
            background-image: url("../assets/report/center.png");
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
                    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
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
                                background-color: rgba(0, 0, 0, .5);
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
                background-image: url("../assets/report/monthly.png");
            }

            #ff-2 {
                background-image: url("../assets/report/projectType.png");
            }

            #ff-3 {
                background-image: url("../assets/report/scheduleType.png");
            }

            #ff-4 {
                background-image: url("../assets/report/yearScore.png");
            }
        }
    }
</style>