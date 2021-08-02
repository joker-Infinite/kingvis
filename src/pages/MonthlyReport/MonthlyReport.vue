<template>
    <div class="MonthlyReport"
         v-loading="loading"
         element-loading-text="拼命加载中"
         element-loading-spinner="el-icon-loading"
         element-loading-background="rgba(0, 0, 0, 0.8)">
        <div class="MonthlyReport_">
            <div class="MonthlyReport_header">
                <div class="header_btn">
                    <span v-for="(i,x) in headerBtn" :key="x"
                          :class="{'header_btn_item':true,'activeBtn':activeBtn===x}"
                          @click="activeBtnChange(x)">{{i.name}}</span>
                </div>
                <div class="header_title">湖北交投实业2021年{{this.yearMonth.split("-")[1]-1}}月重点工作</div>
                <div class="header_time">
                    <el-popover placement="bottom"
                                title=""
                                width="220"
                                trigger="hover">
                        <el-date-picker
                                v-model="yearMonth"
                                @change="getPageData"
                                :clearable="false"
                                value-format="yyyy-MM"
                                type="month"
                                placeholder="选择月">
                        </el-date-picker>
                        <span slot="reference" style="color: #00b8fe">{{yearMonth}}</span>
                    </el-popover>
                    {{time}}
                </div>
            </div>
            <div class="MonthlyReport_container">
                <div class="container_title">
                    <div class="unit_left" style="cursor: pointer" @click="clickUnitFL('f')">
                        <span class="iconfont iconbold-arrow-left"></span>
                        <span class="iconfont iconbold-arrow-left iil"></span>
                    </div>
                    <div class="unit_left">
                        <span class="iconfont iconbold-arrow-left" style="cursor: pointer"
                              @click="clickUnitChange('l')"></span>
                    </div>
                    <div class="container_unit_box">
                        <div class="container_unit_box_" id="container_unit_box_">
                            <div v-for="(i,x) in unitData" :key="x"
                                 :class="{'container_unit':true,'activeUnit':firstUnit===x}"
                                 @click="clickUnit(i,x)">
                                {{i["tagName"]}}
                            </div>
                        </div>
                    </div>
                    <div class="unit_right">
                        <span class="iconfont iconbold-arrow-left" style="cursor: pointer"
                              @click="clickUnitChange('r')"></span>
                    </div>
                    <div class="unit_right" style="cursor: pointer" @click="clickUnitFL('l')">
                        <span class="iconfont iconbold-arrow-left iir"></span>
                        <span class="iconfont iconbold-arrow-left"></span>
                    </div>
                </div>
                <div class="container_content">
                    <monthly-report-table ref="vxeTable" :tableData="tableData[currentNum]"></monthly-report-table>
                </div>
                <div class="container_footer">
                    <el-pagination layout="prev, pager, next" @current-change="currentChange" :page-size="4"
                                   :total="allData.length"></el-pagination>
                </div>
            </div>
            <div class="MonthlyReport_footer">
                <div class="footer_item">
                    <div class="footer_item_title">
                        <span class="tilt">
                            <i v-for="i in 3" :key="i" :class="'iconfont iconxiegang_huaban1 '+'i'+i"></i>
                        </span>
                        <span class="text">月度计划完成情况统计</span>
                    </div>
                    <div class="footer_item_content fbg">
                        <div class="tri-test" id="fffsss"></div>
                    </div>
                </div>
                <div class="footer_item">
                    <div class="footer_item_title">
                         <span class="tilt">
                            <i v-for="i in 3" :key="i" :class="'iconfont iconxiegang_huaban1 '+'i'+i"></i>
                        </span>
                        <span class="text">年度重点工作状态分布</span>
                    </div>
                    <div class="footer_item_content">
                        <div class="sofg"></div>
                        <div class="content">
                            <div class="content_l">
                                <div class="cc">
                                    <div class="cItem lt" style="text-align: right">
                                        <p class="name">0-15% <i class="iconfont iconyuanquan"></i></p>
                                        <p class="val">{{firstPie.length>0?firstPie[0]["value"]:'0'}}个<span
                                                class="ll"></span></p>
                                    </div>
                                    <div class="cItem lb" style="text-align: right">
                                        <p class="name">15-50% <i class="iconfont iconyuanquan"></i></p>
                                        <p class="val">{{firstPie.length>0?firstPie[1]["value"]:'0'}}个<span
                                                class="ll"></span></p>
                                    </div>
                                </div>
                            </div>
                            <div class="content_c" id="ppp1"></div>
                            <div class="content_r">
                                <div class="cc">
                                    <div class="cItem rt" style="text-align: left">
                                        <p class="name"><i class="iconfont iconyuanquan"></i> 50-85%</p>
                                        <p class="val"><span class="ll"></span>
                                            {{firstPie.length>0?firstPie[2]["value"]:'0'}}个</p>
                                    </div>
                                    <div class="cItem rb" style="text-align: left">
                                        <p class="name"><i class="iconfont iconyuanquan"></i> 85+%</p>
                                        <p class="val"><span class="ll"></span>
                                            {{firstPie.length>0?firstPie[3]["value"]:'0'}}个</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer_item">
                    <div class="footer_item_title">
                         <span class="tilt">
                            <i v-for="i in 3" :key="i" :class="'iconfont iconxiegang_huaban1 '+'i'+i"></i>
                        </span>
                        <span class="text">年度重点工作与时间进度对比</span>
                    </div>
                    <div class="footer_item_content">
                        <div class="sofg"></div>
                        <div class="content">
                            <div class="content_l">
                                <div class="cc">
                                    <div class="cItem lt" style="text-align: right">
                                        <p class="name"><-20% <i class="iconfont iconyuanquan"></i></p>
                                        <p class="val">{{secondPie.length>0?secondPie[0]["value"]:'0'}}个 <span
                                                class="ll"></span></p>
                                    </div>
                                    <div class="cItem lb" style="text-align: right">
                                        <p class="name">-20--10% <i class="iconfont iconyuanquan"></i></p>
                                        <p class="val">{{secondPie.length>0?secondPie[1]["value"]:'0'}}个 <span
                                                class="ll"></span></p>
                                    </div>
                                </div>
                            </div>
                            <div class="content_c" id="ppp2"></div>
                            <div class="content_r">
                                <div class="cc">
                                    <div class="cItem rt" style="text-align: left">
                                        <p class="name"><i class="iconfont iconyuanquan"></i> -10-10%</p>
                                        <p class="val"><span class="ll"></span>
                                            {{secondPie.length>0?secondPie[2]["value"]:'0'}}个</p>
                                    </div>
                                    <div class="cItem rb" style="text-align: left">
                                        <p class="name"><i class="iconfont iconyuanquan"></i> >10%</p>
                                        <p class="val"><span class="ll"></span>
                                            {{secondPie.length>0?secondPie[3]["value"]:'0'}}个</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer_item">
                    <div class="footer_item_title">
                         <span class="tilt">
                            <i v-for="i in 3" :key="i" :class="'iconfont iconxiegang_huaban1 '+'i'+i"></i>
                        </span>
                        <span class="text">年度绩效重点工作执行情况</span>
                    </div>
                    <div class="footer_item_content">
                        <div class="sofg"></div>
                        <div class="content">
                            <div class="content_l">
                                <div class="cc">
                                    <div class="cItem lt" style="text-align: right">
                                        <p class="name">负增长 <i class="iconfont iconyuanquan"></i></p>
                                        <p class="val">{{thirdPie.length>0?thirdPie[0]["value"]:'0'}}个 <span
                                                class="ll"></span></p>
                                    </div>
                                    <div class="cItem lb" style="text-align: right">
                                        <p class="name">正常 <i class="iconfont iconyuanquan"></i></p>
                                        <p class="val">{{thirdPie.length>0?thirdPie[1]["value"]:'0'}}个 <span
                                                class="ll"></span></p>
                                    </div>
                                </div>
                            </div>
                            <div class="content_c" id="ppp3"></div>
                            <div class="content_r">
                                <div class="cc">
                                    <div class="cItem rt" style="text-align: left">
                                        <p class="name"><i class="iconfont iconyuanquan"></i> 有突破</p>
                                        <p class="val"><span class="ll"></span>
                                            {{thirdPie.length>0?thirdPie[2]["value"]:'0'}}个 </p>
                                    </div>
                                    <div class="cItem rb" style="text-align: left">
                                        <p class="name"><i class="iconfont iconyuanquan"></i> 重大突破</p>
                                        <p class="val"><span class="ll"></span>
                                            {{thirdPie.length>0?thirdPie[3]["value"]:'0'}}个 </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import "./less/MonthlyReport.less"
    import MonthlyReportTable from "./children/MonthlyReportTable";
    import index from "./js/index"

    export default {
        name: "MonthlyReport",
        mixins: [index],
        components: {MonthlyReportTable},
        data() {
            return {
                headerBtn: [
                    {name: "未完成", code: "WWC"},
                    {name: "预警项目", code: "YJXM"},
                    {name: "负增长", code: "FZZ"},
                    {name: "大突破", code: "DTP"},
                    {name: "全部", code: "QB"}
                ],
                unitData: [],
                firstUnit: 0,
                activeBtn: 0,
                time: "",
                yearMonth: "2021-07",
                allData: [],
                tableData: [],
                currentNum: 0,
                loading: false,
                firstPie: [],
                secondPie: [],
                thirdPie: [],
            }
        },
        methods: {
            /**
             * 点击项目状态切换
             * @param v
             * */
            activeBtnChange(v) {
                this.activeBtn = v;
                this.getPageData();
            },
            /**
             * 返回头部或尾部的单位
             * @param v
             * */
            clickUnitFL(v) {
                let container_unit_box_ = document.getElementById("container_unit_box_");
                if (v === "f") {
                    container_unit_box_.style.marginLeft = "0px";
                    this.firstUnit = 0;
                }
                if (v === "l") {
                    container_unit_box_.style.marginLeft = -133 * (this.unitData.length - 1) + "px";
                    this.firstUnit = this.unitData.length - 1;
                }
                this.getPageData();
            },
            /**
             * 左右切换单位
             * @param i
             * @param x
             * */
            clickUnit(i, x) {
                let container_unit_box_ = document.getElementById("container_unit_box_");
                container_unit_box_.style.marginLeft = -133 * x + "px";
                this.firstUnit = x;
                this.getPageData();
                this.getPieFirst();
            },
            /**
             * 点击单位切换
             * @param v
             * */
            clickUnitChange(v) {
                let x = this.DeepCopy(this.firstUnit);
                let container_unit_box_ = document.getElementById("container_unit_box_");
                if (v === "l") {
                    if (x === 0) {
                        return 0;
                    }
                    x--;
                    container_unit_box_.style.marginLeft = -133 * x + "px";
                }

                if (v === "r") {
                    if (x === this.unitData.length - 1) {
                        return 0;
                    }
                    x++
                    container_unit_box_.style.marginLeft = -133 * x + "px";
                }
                this.firstUnit = this.DeepCopy(x);
                this.getPageData();
                this.getPieFirst();
            },
            /**
             *@param v 页数
             * */
            currentChange(v) {
                this.currentNum = v - 1;
            },
            /**
             * 获取全部数据
             * */
            async getAll(param, lastMonth) {
                param["type"] = "QB";
                let param_ = this.DeepCopy(param);
                param_["dataTime"] = lastMonth;
                const res = await this.$axios.get("/api/report/get_type_data", {params: param});
                const res_ = await this.$axios.get("/api/report/get_type_data", {params: param_});
                let data = res.data.data;
                let type = this.headerBtn[this.activeBtn]["code"];
                if (res_.data.data && res_.data.data.length > 0) {
                    let data_ = res_.data.data;
                    data.forEach(i => {
                        data_.forEach(j => {
                            if (i["name"] == j["name"]) {
                                i["changeValue"] = parseInt(i["progressRate"]) - parseInt(j["progressRate"])
                            }
                        })
                    })
                } else {
                    data.forEach(i => {
                        i["changeValue"] = parseInt(i["progressRate"]);
                        if (type === "YJXM") {
                            i["changeValue"] = 0;
                        }
                        if (type === "FZZ") {
                            i["changeValue"] = -parseInt(i["progressRate"]);
                        }
                        if (type === "DTP") {
                            i["changeValue"] = parseInt(i["progressRate"]);
                        }
                    })
                }
                await this.getBarData(data);
                await this.getPieThird(data);
            },
            async getDept() {
                return (await this.$axios["get"]("https://okr.hbjtsy.com:7080/jt/zt/getDeptList")).data.data;
            },
            /**
             * @param param
             * @param lastMonth
             * */
            async getTable(param, lastMonth) {
                this.tableData = [];
                this.allData = [];
                let param_ = this.DeepCopy(param);
                let type = this.headerBtn[this.activeBtn]["code"];
                param_["dataTime"] = lastMonth;
                const res = await this.$axios.get("/api/report/get_type_data", {params: param});
                const res_ = await this.$axios.get("/api/report/get_type_data", {params: param_});
                if (res.data.data && res.data.data.length > 0) {
                    let data = this.allData = res.data.data;
                    let length = Math.ceil(data.length / 4);
                    let j = 0;
                    for (let i = 0; i < length; i++) {
                        this.tableData.push([]);
                    }
                    data.forEach((i, x) => {
                        if (x % 4 === 0 && x !== 0) {
                            j++;
                        }
                        this.tableData[j].push(i)
                    })
                }
                if (res_.data.data && res_.data.data.length > 0 && type !== "YJXM" && type !== "FZZ" && type !== "DTP") {
                    let data = res_.data.data;
                    this.allData.forEach(i => {
                        data.forEach(j => {
                            if (i["name"] == j["name"]) {
                                i["changeValue"] = parseInt(i["progressRate"]) - parseInt(j["progressRate"])
                            }
                        })
                    })
                } else {
                    this.allData.forEach(i => {
                        i["changeValue"] = parseInt(i["progressRate"]);
                        if (type === "YJXM") {
                            i["changeValue"] = 0;
                        }
                        if (type === "FZZ") {
                            i["changeValue"] = -parseInt(i["progressRate"]);
                        }
                        if (type === "DTP") {
                            i["changeValue"] = parseInt(i["progressRate"]);
                        }
                    })
                }
                this.$refs["vxeTable"].refresh();
                await this.getAll(param, lastMonth);
                await this.getPieFirst();
                await this.getPieSecond();
                this.loading = false;
            },
            getPageData() {
                this.loading = true;
                let dateTime = this.yearMonth.split("-");
                let time = dateTime[0] + dateTime[1];
                let lastMonth = dateTime[0] + dateTime[1] - 1;
                let tagValue = this.unitData[this.firstUnit]["tagValue"];
                let type = this.headerBtn[this.activeBtn]["code"];
                this.getTable({dataTime: time, deptName: tagValue, type: type}, lastMonth);

            },
            //年度重点工作完成情况预览
            async getPieSecond() {
                let dateTime = this.yearMonth.split("-");
                let time = dateTime[0] + "-" + dateTime[1];
                let tagValue = this.unitData[this.firstUnit]["tagValue"];
                let reportTime = time + '-01 00:00:00';
                const res = await this.$axios.get("/api/report/get_situation_preview", {
                    params: {
                        tagType: tagValue,
                        reportTime: reportTime
                    }
                });
                let db = res.data.data
                let jd = [
                    {value: db.d, name: "<-20%"},
                    {value: db.c, name: "-20%~-10%"},
                    {value: db.b, name: "-10%~+10%"},
                    {value: db.a, name: ">10%"}
                ];
                this.secondPie = jd;
                this.initRing("ppp2", jd);
            },
            //年度重点工作与时间进度对比
            async getPieFirst() {
                let dateTime = this.yearMonth.split("-");
                let time = dateTime[0] + "-" + dateTime[1];
                let tagValue = this.unitData[this.firstUnit]["tagValue"];
                let reportTime = time + '-01 00:00:00';
                const res = await this.$axios.get("/api/report/get_work_time", {
                    params: {
                        tagType: tagValue,
                        reportTime: reportTime
                    }
                });
                let wc = res.data.data
                let wc_pie = [
                    {value: wc.d, name: "0 ~ 15%"},
                    {value: wc.c, name: "15 ~ 50%"},
                    {value: wc.b, name: "50 ~ 85%"},
                    {value: wc.a, name: "85%+"}
                ];
                this.firstPie = wc_pie;
                this.initRing("ppp1", wc_pie);
            },
            //年度绩效重点工作执行情况
            async getPieThird(data) {
                let fzz = 0;
                let zc = 0;
                let ytp = 0;
                let zdtp = 0;
                data.forEach(i => {
                    let ss_ = i["changeValue"];
                    if (ss_ < 0) {
                        fzz++;
                    }
                    if (ss_ >= 0 && ss_ < 10) {
                        zc++;
                    }
                    if (ss_ >= 10 && ss_ < 20) {
                        ytp++;
                    }

                    if (ss_ >= 20) {
                        zdtp++;
                    }
                })
                let wc_pie = [
                    {value: fzz, name: "负增长"},
                    {value: zc, name: "正常"},
                    {value: ytp, name: "有突破"},
                    {value: zdtp, name: "重大突破"}
                ];
                this.thirdPie = wc_pie;
                this.initRing("ppp3", wc_pie);
            },
            /**
             * 渲染环形图
             * @param id dom元素id
             * @param data 数据源
             * */
            initRing(id, data) {
                this.$echarts.init(document.getElementById(id)).dispose();
                let option = {
                    tooltip: {
                        show: true
                    },
                    series: [
                        {
                            type: "pie",
                            radius: ["90%", "100%"],
                            center: ["49.5%", "50%"],
                            hoverAnimation: true,
                            hoverOffset: 0,
                            label: {
                                show: false
                            },
                            color: ["#75a8d8", "#6f608f", "#76d2d5", "#ffa180"],
                            data: data,
                            labelLine: {
                                show: false
                            }
                        }
                    ]
                }
                this.$echarts.init(document.getElementById(id)).setOption(option);
            },
            //月度计划完成情况统计
            getBarData(data) {
                let dy = 0;
                let dy_ywc = 0;
                let dy_wwc = 0;
                let xy = 0;
                let month = this.yearMonth.split("-")[1];
                this.$echarts.init(document.getElementById("fffsss")).dispose();
                if (data, data.length > 0) {
                    data.forEach(i => {
                        if (i.endTime) {
                            let endTime = parseInt((i.startTime).split("-")[1]);
                            if (endTime == month - 1) {
                                dy++;
                                if (i["state"] == "2") {
                                    dy_ywc++;
                                } else {
                                    dy_wwc++;
                                }
                            } else {
                                xy++;
                            }
                        }
                    })
                }
                let option = {
                    tooltip: {
                        trigger: "axis",
                        formatter: (v) => {
                            return v[0].name + "：" + v[0].value;
                        }
                    },
                    grid: {
                        left: "3%",
                        right: "3%",
                        bottom: "20",
                        top: "40",
                        containLabel: true
                    },
                    xAxis: {
                        data: [month - 1 + "月计划", month - 1 + "月已完成", month - 1 + "月未完成", month - 0 + "月计划"],
                        triggerEvent: true,
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisLabel: {
                            show: true,
                            interval: 0,
                            textStyle: {
                                color: "#fff",
                            }
                        },
                        axisPointer: {
                            type: "shadow"
                        },
                    },
                    yAxis: {
                        name: "",
                        triggerEvent: true,
                        splitLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisLabel: {
                            show: false
                        }
                    },
                    series: [
                        {
                            name: "hill",
                            barMinHeight: 10,
                            type: "pictorialBar",
                            barCategoryGap: "60%",
                            symbol: "path://M512 0l512 1024H0L512 0z",

                            label: {
                                normal: {
                                    show: true,
                                    position: "top",
                                    textStyle: {
                                        color: "#fff",
                                        fontSize: 16
                                    }
                                }
                            },
                            data: [
                                {
                                    value: dy,
                                    itemStyle: {
                                        normal: {
                                            //#1CF4F4 #091C34
                                            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                                {offset: 0, color: "#1CF4F4"},
                                                {offset: 1, color: "#091C34"}
                                            ]),
                                        }
                                    },
                                },
                                {
                                    value: dy_ywc,
                                    itemStyle: {
                                        normal: {
                                            //#1CF4F4 #091C34
                                            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                                {offset: 0, color: "#00B0F8"},
                                                {offset: 1, color: "#091C34"}
                                            ]),
                                        }
                                    },
                                },
                                {
                                    value: dy_wwc,
                                    itemStyle: {
                                        normal: {
                                            //#1CF4F4 #091C34
                                            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                                {offset: 0, color: "#F3E61C"},
                                                {offset: 1, color: "#091C34"}
                                            ]),
                                        }
                                    },
                                },
                                {
                                    value: xy,
                                    itemStyle: {
                                        normal: {
                                            //#1CF4F4 #091C34
                                            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                                {offset: 0, color: "#1DFAFC"},
                                                {offset: 1, color: "#091C34"}
                                            ]),
                                        }
                                    },
                                }
                            ],
                            z: 10
                        }
                    ]
                }
                this.$echarts.init(document.getElementById("fffsss")).setOption(option);
            },
        },
        async mounted() {
            this.loading = true;
            this.unitData = await this.getDept();
            await this.getPageData();
            await this.getPieFirst();
            await this.getPieSecond();
        },
        async created() {
            this.time = this.getNowTime();
            setInterval(() => {
                this.time = this.getNowTime();
            })
        }
    }
</script>