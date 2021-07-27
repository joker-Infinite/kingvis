<template>
    <div class="MonthlyReport">
        <div class="MonthlyReport_">
            <div class="MonthlyReport_header">
                <div class="header_btn">
                    <span v-for="(i,x) in headerBtn" :key="x" class="header_btn_item">{{i}}</span>
                </div>
                <div class="header_title">湖北交投实业2021年6月重点工作</div>
                <div class="header_time">2021-7-1 星期四 19:00</div>
            </div>
            <div class="MonthlyReport_container">
                <div class="container_title">
                    <div class="unit_left">
                        <span class="iconfont iconzuo"></span>
                    </div>
                    <div v-for="(i,x) in unitData" :key="x" class="container_unit">{{i}}</div>
                    <div class="unit_right">
                        <span class="iconfont iconzuo"></span>
                    </div>
                </div>
                <div class="container_content">
                    <monthly-report-table></monthly-report-table>
                </div>
                <div class="container_footer">
                    <el-pagination layout="prev, pager, next" :page-size="4" :total="12"></el-pagination>
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
                <template v-for="i in 3">
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
                                            <p class="name">50%-85% <i class="iconfont iconyuanquan"></i></p>
                                            <p class="val">10 <span class="ll"></span></p>
                                        </div>
                                        <div class="cItem lb" style="text-align: right">
                                            <p class="name">85%+ <i class="iconfont iconyuanquan"></i></p>
                                            <p class="val">20 <span class="ll"></span></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="content_c" :id="'ppp'+ i"></div>
                                <div class="content_r">
                                    <div class="cc">
                                        <div class="cItem rt" style="text-align: left">
                                            <p class="name"><i class="iconfont iconyuanquan"></i> 1%-15%</p>
                                            <p class="val"><span class="ll"></span> 30</p>
                                        </div>
                                        <div class="cItem rb" style="text-align: left">
                                            <p class="name"><i class="iconfont iconyuanquan"></i> 15%-50%</p>
                                            <p class="val"><span class="ll"></span> 40</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
                <!--
                                <div class="footer_item">
                                    <div class="footer_item_title">
                                         <span class="tilt">
                                            <i v-for="i in 3" :key="i" :class="'iconfont iconxiegang_huaban1 '+'i'+i"></i>
                                        </span>
                                        <span class="text">年度重点工作与时间对比</span>
                                    </div>
                                    <div class="footer_item_content">
                                        <div class="sofg"></div>
                                    </div>
                                </div>
                                <div class="footer_item">
                                    <div class="footer_item_title">
                                         <span class="tilt">
                                            <i v-for="i in 3" :key="i" :class="'iconfont iconxiegang_huaban1 '+'i'+i"></i>
                                        </span>
                                        <span class="text">绩效工作执行情况</span>
                                    </div>
                                    <div class="footer_item_content">
                                        <div class="sofg"></div>
                                    </div>
                                </div>-->
            </div>
        </div>
    </div>
</template>

<script>
    import "./less/MonthlyReport.less"
    import MonthlyReportTable from "./children/MonthlyReportTable";

    export default {
        name: "MonthlyReport",
        components: {MonthlyReportTable},
        data() {
            return {
                headerBtn: ["未完成", "预警项目", "负增长", "大突破", "全部"],
                unitData: ["投资经营", "财务", "建设", "安全", "党群", "纪检六组"]
            }
        },
        methods: {
            initff() {
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
                        data: ["6月计划", "6月已完成", "6月未完成", "7月计划"],
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
                            itemStyle: {
                                normal: {
                                    color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        {offset: 0, color: "#ba1919"},
                                        {offset: 0.5, color: "#27b3b3"},
                                        {offset: 1, color: "#2836b5"}
                                    ]),
                                }
                            },
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
                            data: [10, 20, 30, 40],
                            z: 10
                        }
                    ]
                }
                this.$echarts.init(document.getElementById("fffsss")).setOption(option);
            },
            initss() {
                let option = {
                    tooltip: {
                        show: true
                    },
                    series: [
                        {
                            type: "pie",
                            radius: ["90%", "100%"],
                            center: ["50%", "50%"],
                            hoverAnimation: true,
                            hoverOffset: 0,
                            label: {
                                show: false
                            },
                            color: ["#75a8d8","#6f608f","#76d2d5","#ffa180"],
                            data: [1, 1, 1, 1],
                            labelLine: {
                                show: false
                            }
                        }
                    ]
                }
                for (let i = 1; i < 4; i++) {
                    let id = "ppp" + i;
                    this.$echarts.init(document.getElementById(id)).setOption(option);
                }
            }
        },
        mounted() {
            this.initff();
            this.initss();
        }
    }
</script>

<style scoped>

</style>