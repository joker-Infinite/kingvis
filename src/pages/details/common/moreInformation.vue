<template>
    <div v-if="visible"
         style="width: 100%;height: 100%"
         :class="{sBody: true,hsBody: imgSize == 'small' || location != 'homeKanBan'}">
        <el-dialog
                width="1100px"
                align="center"
                :visible.sync="visible"
                :modal="false"
                @close="closeDialog">
            <el-form v-show="!!pageData.xYListFroms&&visible" ref="form" :model="form" label-width="125px" class="form">
                <p class="title">{{ form.name }}</p>
                <el-col :span="12" v-for="(it, ix) in formData" :key="ix">
                    <el-form-item :label="it.label + '：'" :class="it.addColor">
                        <el-input disabled :value="it.value"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="24" v-if="columns && columns.length !== 0">
                    <div :style="{fontWeight: '700',lineHeight: '30px',fontSize: '16px', color:location != 'homeKanBan'? '#333': imgSize == 'small'? '#333': 'white'}">
                        加油站油枪列表
                    </div>
                    <div class="myTable"
                         :style="{color:location != 'homeKanBan' ? '#333': imgSize == 'small'? '#333': 'white'}">
                        <template v-for="i in columns">
                            <ul :style="{width: 100/columns.length+'%'}">
                                <li class="li_t">{{i.xBxis}}</li>
                                <li class="li_b">{{i.yAxis}}</li>
                            </ul>
                        </template>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div style="width: 10px;height: 10px"></div>
                </el-col>
                <el-col :span="8" v-if="chartBox.length === 1">
                    <p>
                        <el-date-picker v-model="dates" type="month" placeholder="请选择日期"></el-date-picker>
                    </p>
                </el-col>
                <div class="echarts">
                    <div v-for="i in 2"
                         :key="i"
                         :style="{ width: '49.5%',height: chartBox.length === 2 ? '300px' : '400px',marginBottom: '10px',position: 'relative'}">
                        <div class="KK ll" v-if="i==2&& (form.name=='男厕'|| form.name=='女厕')">男（223）</div>
                        <div class="KK rr" v-if="i==2&& (form.name=='男厕'|| form.name=='女厕')">女（175）</div>
                        <div class="KK rr"></div>
                        <div :id="NE + i" style="width: 100%;height: 100%"></div>
                    </div>
                </div>
            </el-form>
            <div v-show="!pageData.xYListFroms&&visible" class="noData_">
                <p class="title">{{ form.name }}</p>
                <div>暂无数据</div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import MyTableBase from "../../../components/common/myTableBase";

    export default {
        name: "moreInformation",
        components: {MyTableBase},
        props: {
            location: {
                type: String,
                default: ""
            },
            imgSize: {
                type: String,
                default: ""
            },
            NE: {
                type: String,
                default: ""
            }
        },
        data() {
            return {
                dates: "2020-12",
                visible: false,
                form: {
                    name: ""
                },
                formData: [],
                pageData: {},
                ID: [],
                cellSize: [60, 60],
                pieRadius: 20,
                legendSelected: {},
                scatterData: [],
                columns: [],
                chartBox: {
                    bar: {
                        barWidth: 20,
                        title: {
                            text: "近半年销售额",
                            x: "center",
                            textStyle: {
                                color: "#FFF"
                            }
                        },
                        tooltip: {
                            trigger: "axis",
                            formatter: v => {
                                return v[0].name + "月：" + v[0].value + "万元";
                            }
                        },
                        xAxis: {
                            type: "category",
                            name: "月",
                            data: ["7", "8", "9", "10", "11", "12"],
                            axisPointer: {
                                type: "shadow"
                            },
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
                        grid: {
                            left: 40,
                            top: 40,
                            bottom: 30,
                            right: 50
                        },
                        yAxis: {
                            type: "value",
                            name: "万元",
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
                                data: [],
                                type: "bar",
                                itemStyle: {
                                    color: "#00bff6"
                                }
                            }
                        ]
                    },
                    dbar: {
                        barWidth: 20,
                        title: {
                            text: "近半年车流量",
                            x: "center",
                            textStyle: {
                                color: "#FFF"
                            }
                        },
                        tooltip: {
                            trigger: "axis",
                            axisPointer: {
                                type: "shadow"
                            }
                        },
                        legend: {
                            data: ["大车", "小车"],
                            bottom: 0,
                            textStyle: {color: "white"}
                        },
                        grid: {
                            left: "3%",
                            right: "7%",
                            bottom: "30",
                            containLabel: true
                        },
                        xAxis: [
                            {
                                name: "月",
                                type: "category",
                                data: [],
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
                            }
                        ],
                        yAxis: [
                            {
                                type: "value",
                                name: "万辆",
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
                            }
                        ],
                        series: [
                            {
                                name: "",
                                type: "bar",
                                stack: "车流量",
                                data: [],
                                itemStyle: {color: "#596aec"}
                            },
                            {
                                name: "",
                                type: "bar",
                                stack: "车流量",
                                data: [],
                                itemStyle: {color: "#43cef7"}
                            }
                        ]
                    },
                    dline: {
                        title: {
                            text: "今日各时段进入车辆",
                            x: "center",
                            textStyle: {
                                color: "#FFF"
                            }
                        },
                        barWidth: 10,
                        tooltip: {
                            trigger: "axis",
                            axisPointer: {
                                type: "shadow"
                            },
                            formatter: v => {
                                if (v.length === 1) {
                                    return (
                                        v[0].name +
                                        "时<br>" +
                                        v[0].seriesName +
                                        "：" +
                                        Math.abs(v[0].value) +
                                        "辆"
                                    );
                                }
                                if (v.length === 2) {
                                    return (
                                        v[0].name +
                                        "时<br>" +
                                        v[0].seriesName +
                                        "：" +
                                        Math.abs(v[0].value) +
                                        "辆<br>" +
                                        v[1].seriesName +
                                        "：" +
                                        Math.abs(v[1].value) +
                                        "辆"
                                    );
                                }
                            }
                        },
                        legend: {
                            data: ["大型车", "小型车"],
                            icon: 'circle',
                            bottom: 0,
                            textStyle: {
                                color: "#FFF"
                            }
                        },
                        grid: {
                            left: "3%",
                            right: "50",
                            bottom: "30",
                            containLabel: true
                        },
                        xAxis: [
                            {
                                name: "时",
                                type: "category",
                                axisTick: {
                                    show: false
                                },
                                axisLine: {
                                    lineStyle: {
                                        color: "#FFF"
                                    }
                                },
                                axisLabel: {
                                    textStyle: {
                                        color: "#FFF"
                                    }
                                },
                                data: ["0-3", "4-7", "8-11", "12-15", "16-19", "20-23"]
                            }
                        ],
                        yAxis: [
                            {
                                name: "辆",
                                type: "value",
                                axisLabel: {
                                    formatter: v => {
                                        return Math.abs(v);
                                    },
                                    textStyle: {
                                        color: "#FFF"
                                    }
                                },
                                axisLine: {
                                    lineStyle: {
                                        color: "#FFF"
                                    }
                                },
                                axisTick: {
                                    show: false
                                },
                                splitLine: {show: false}
                            }
                        ],
                        series: [
                            {
                                name: "大型车",
                                type: "line",
                                itemStyle: {color: "#596aec"},
                                data: []
                            },
                            {
                                name: "小型车",
                                type: "line",
                                itemStyle: {color: "#43cef7"},
                                data: []
                            }
                        ]
                    },
                    pie: {
                        title: {
                            text: '类型占比',
                            left: 'center',
                            textStyle: {
                                color: 'white'
                            }
                        },
                        legend: {
                            bottom: '0',
                            textStyle: {
                                color: 'white'
                            }
                        },
                        series: [
                            {
                                type: 'pie',
                                radius: '50%',
                                data: [],
                            }
                        ]
                    },
                },
            };
        },
        methods: {
            async closeDialog() {
                await this.clearECharts();
                this.$emit("showPopover", true);
            },
            clearECharts() {
                document.getElementById(this.NE + "1").removeAttribute("_echarts_instance_");
                document.getElementById(this.NE + "2").removeAttribute("_echarts_instance_");
            },
            getVirtulData() {
                let date = +this.$echarts.number.parseDate("2020-12-01");
                let end = +this.$echarts.number.parseDate("2021-1-01");
                let dayTime = 3600 * 24 * 1000;
                let data = [];
                for (let time = date; time < end; time += dayTime) {
                    data.push([
                        this.$echarts.format.formatTime("yyyy-MM-dd", time),
                        Math.floor(Math.random() * 10000)
                    ]);
                }
                return data;
            },
            getPieSeries(charts) {
                let that = this;
                return this.$echarts.util.map(this.getVirtulData(), function (item, index) {
                    let center = charts.convertToPixel("calendar", item);
                    return {
                        id: index + "pie",
                        type: "pie",
                        center: center,
                        barWidth: 20,
                        title: {
                            text: "近半年销售额",
                            x: "center",
                            textStyle: {
                                color: "#FFF"
                            }
                        },
                        label: {
                            normal: {
                                formatter: "{c}",
                                position: "inside"
                            }
                        },
                        radius: that.pieRadius,
                        data: [
                            {
                                name: "大车",
                                value: Math.round(Math.random() * 24),
                                itemStyle: {color: "#596aec"}
                            },
                            {
                                name: "小车",
                                value: Math.round(Math.random() * 24),
                                itemStyle: {color: "#43cef7"}
                            }
                        ]
                    };
                });
            },
            openDialog(v, item) {
                this.pageData = v;
                this.visible = true;
                this.form.name = item.name;
                this.columns = [];
                let arr = ['', '待开业', '营业中', '已闭店'];
                if (v && !v.xYListFroms) {
                    return '';
                }
                let showCharts = [this.DeepCopy(this.chartBox.bar), this.DeepCopy(this.chartBox.bar)];
                let chart1;
                let chart2;
                if (item.name == '加油站') {
                    if (v.xYListFromsss && v.xYListFromsss.length > 0) {
                        this.columns = v.xYListFromsss;
                    }
                    showCharts[1] = this.DeepCopy(this.chartBox.pie);
                    chart1 = this.process_Bar(v.xYListFrom);
                    chart2 = this.process_pie(v.xYListFroms);
                    showCharts[1].series[0].data = chart2;
                    showCharts[1].series[0].itemStyle = {
                        normal: {
                            color: v => {
                                let colorList = ["#0066ff", "#2e2ee6", "#00aacc", "#9bbf30", "#bf9926"];
                                return colorList[v.dataIndex];
                            }
                        }
                    };
                    showCharts[0].xAxis.data = chart1[0];
                    showCharts[0].series[0].data = chart1[1];
                    this.formData = [
                        {label: '加油站所属单位', value: v.stationCompanyName},
                        {label: '加油站名', value: v.stationName},
                        {label: '加油站负责人', value: v.leaderName},
                        {label: '联系电话', value: v.leaderPhone},
                        {label: '加油站状态', value: v.stationStatus}
                    ];
                } else if (item.name == "出口" || item.name == "入口") {
                    let asr = this.process_bar_s(v.xYListFromss, 10000);
                    let type = asr[1];
                    let data = asr[0];
                    showCharts[0] = this.DeepCopy(this.chartBox.dbar);
                    showCharts[1] = this.DeepCopy(this.chartBox.dline);
                    if (type && JSON.stringify(type) !== "{}") {
                        type.forEach((i, x) => {
                            showCharts[0].series[x].name = i;
                            showCharts[0].series[x].data = data[i].value;
                            showCharts[0].xAxis[0].data = data[i].label;
                        });
                    }
                    let big = this.process_line_s(v.xYListFroms);
                    let small = this.process_line_s(v.xYListFromsss);
                    showCharts[1].series[0].data = big;
                    showCharts[1].series[1].data = small;
                    this.formData = [
                        {label: '卡口是否正常', value: v.bayonetState},
                        {label: '今日驶入车辆', value: v.todayInCarNum},
                        {label: '今日驶出车辆', value: v.todayOutCarNum + '辆'},
                        {label: '日均车流量', value: v.avgCarNum + '辆'}
                    ];
                } else {
                    chart1 = this.process_Bar(v.xYListFrom);
                    chart2 = this.process_Bar(v.xYListFroms);
                    showCharts[1].xAxis.data = chart2[0];
                    showCharts[1].series[0].data = chart2[1];
                    showCharts[0].xAxis.data = chart1[0];
                    showCharts[0].series[0].data = chart1[1];
                    this.formData = [
                        {label: '店铺状态', value: arr[v.storeStatus]},
                        {label: '店铺负责人', value: v.userName},
                        {label: '联系电话', value: v.userPhone},
                        {label: '业态名称', value: '暂无数据'},
                        {label: '开店时间', value: v.openDate},
                        {label: '今日收益', value: '数据同步中'},
                    ];
                }
                this.$nextTick(_ => {
                    let form = document.getElementsByClassName("form")[0];
                    form.scrollTo(0, 0);
                    this.ECharts(showCharts, name);
                });
            },
            /**
             * 条形图 数据处理方法
             * @data 数据源
             * */
            process_Bar(data) {
                let number = [];
                let label = [];
                data.forEach(i => {
                    label.push(parseInt(i.xBxis.substr(0, 4)) + "-" + parseInt(i.xBxis.substr(4, 2)));
                    number.push(i.yAxis);
                });
                return [label, number];
            },
            /**
             * 叠加条形图
             * @data
             * */
            process_bar_s(data, v) {
                let arr = [];
                let bar = [];
                let obj = {};
                if (!data || data.length === 0) {
                    return [];
                }
                data.forEach(i => {
                    arr.push(i.carType);
                    obj[i.carType] = {
                        label: [],
                        value: []
                    };
                });
                let type = [...new Set(arr)];
                for (let i in type) {
                    bar.push([]);
                    for (let j in data) {
                        if (data[j].carType === type[i]) {
                            bar[i].push(data[j]);
                            continue
                        }
                    }
                }
                bar.forEach(i => {
                    i.forEach(j => {
                        obj[j.carType].label.push(j.xBxis);
                        obj[j.carType].value.push(Number(j.yAxis) / v);
                    })
                });
                return [obj, type];
            },
            /**
             * 双折线
             * @data
             * */
            process_line_s(data) {
                let j = 0;
                let m = 0;
                let timeInterval = [];
                let num = [];
                let retD = [];
                if (!data || data.length === 0) {
                    return retD;
                }
                data.forEach((i, x) => {
                    j += 4;
                    if (j <= 24) {
                        timeInterval.push([m, j]);
                    }
                    m = j;
                });
                timeInterval.forEach(i => {
                    num.push([]);
                });
                data.forEach(i => {
                    let time = i.yAxis.split(":")[1];
                    for (let j in timeInterval) {
                        if (time >= timeInterval[j][0] && time < timeInterval[j][1]) {
                            num[j].push(i)
                        }
                    }
                });
                num.forEach(i => {
                    let sum = 0;
                    i.forEach(i => {
                        sum += parseInt(i.xBxis);
                    });
                    retD.push(sum);
                });
                return retD;
            },
            /**
             * 饼状图 数据处理方法
             * @data 数据源
             * */
            process_pie(data) {
                if (!data || data.length === 0) {
                    return [];
                }
                let d = [];
                data.forEach(i => {
                    d.push({value: i.yAxis, name: i.xBxis});
                });
                return d;
            },
            ECharts(v, name) {
                let eId = [];
                for (let i = 1; i < 2 + 1; i++) {
                    let id = this.NE + i;
                    eId.push(this.$echarts.init(document.getElementById(id)));
                }
                this.ID = eId;
                if (name !== "停车区") {
                    this.allECharts(eId, v);
                }
                if (name === "停车区") {
                    this.smallECharts(eId, v);
                }
            },
            allECharts(eId, v) {
                eId.forEach((i, x) => {
                    if (this.openIndex % 2 == 0) {
                        i.dispose();
                    }
                    this.$nextTick(_ => {
                        i.setOption(v[x]);
                    });
                    if (x == 1) {
                        i.on('legendselectchanged', function (v) {
                            this.legendSelected = v;
                        })
                    }
                });
            },
            smallECharts(eId) {
                let that = this;
                let option = {
                    tooltip: {
                        formatter: v => {
                            return v.name + ":" + v.value + "辆";
                        }
                    },
                    title: {
                        text: "当前月每日车流量",
                        x: "center",
                        textStyle: {
                            color:
                                this.location != "homeKanBan"
                                    ? "#333"
                                    : this.imgSize == "small"
                                    ? "#333"
                                    : "white"
                        }
                    },
                    legend: {
                        data: ["大车", "小车"],
                        bottom: 0,
                        textStyle: {
                            color:
                                this.location != "homeKanBan"
                                    ? "#333"
                                    : this.imgSize == "small"
                                    ? "#333"
                                    : "white"
                        }
                    },
                    calendar: {
                        top: "middle",
                        left: "center",
                        orient: "vertical",
                        cellSize: this.cellSize,
                        yearLabel: {
                            show: false,
                            textStyle: {
                                fontSize: 30
                            }
                        },
                        dayLabel: {
                            margin: 5,
                            firstDay: 1,
                            nameMap: [
                                "星期日",
                                "星期一",
                                "星期二",
                                "星期三",
                                "星期四",
                                "星期五",
                                "星期六"
                            ],
                            textStyle: {
                                color:
                                    this.location != "homeKanBan"
                                        ? "#333"
                                        : this.imgSize == "small"
                                        ? "#333"
                                        : "white"
                            }
                        },
                        monthLabel: {
                            show: false
                        },
                        range: ["2020-12"]
                    },
                    series: [{
                        id: 'label',
                        type: 'scatter',
                        coordinateSystem: 'calendar',
                        symbolSize: 1,
                        label: {
                            normal: {
                                show: true,
                                formatter: function (params) {
                                    return that.$echarts.format.formatTime('dd', params.value[0]);
                                },
                                offset: [-that.cellSize[0] / 2 + 10, -that.cellSize[1] / 2 + 10],
                                textStyle: {
                                    color: '#000',
                                    fontSize: 14
                                }
                            }
                        },
                        data: this.scatterData
                    }]
                };
                eId[0].dispose();
                eId[1].dispose();
                this.$nextTick(_ => {
                    eId[0].setOption(this.chartBox[0]);
                    eId[1].setOption(option);
                })

                setTimeout(function () {
                    let series = that.getPieSeries(eId[1]);
                    eId[1].setOption({series: series});
                }, 10);
            }
        }
    };
</script>

<style scoped lang="less">
    .noData_ {
        width: 100%;
        height: 100%;
        text-align: center;
        background: url("../../../assets/detailsTest/imgDetailsBG.jpg");
        background-size: 100% 100%;
        background-repeat: no-repeat;

        .title {
            color: white;
            font-size: 20px;
            font-weight: 800;
            line-height: 50px;
        }

        div {
            line-height: 350px;
            color: white;
            font-size: 30px;
            font-weight: bold;
        }
    }

    @myTableBorder: white;
    .sBody /deep/ .el-dialog__wrapper > .el-dialog {
        background: white !important;
        margin-top: 5vh !important;
    }

    .sBody /deep/ .el-dialog__wrapper > .el-dialog > .el-dialog__header {
        padding: 0 !important;
    }

    .sBody
    /deep/
    .el-dialog__wrapper
    > .el-dialog
    > .el-dialog__header
    > .el-dialog__title {
        color: black !important;
    }

    .sBody /deep/ .el-dialog__wrapper > .el-dialog > .el-dialog__body {
        padding: 0;
        color: white;
    }

    .hsBody {
        .form {
            height: 400px;
            padding: 10px 50px 50px;
            overflow-y: scroll;
            background: none;
            background-size: 100% 100%;

            .search {
                text-align: right;
            }

            .title {
                color: #606266;
                font-size: 20px;
                font-weight: 800;
                line-height: 50px;
            }

            /deep/ .el-col {
                .el-date-editor {
                    .el-input__inner {
                        line-height: 35px;
                        height: 35px;
                        background: rgba(255, 255, 255, 1);
                        border: 1px solid #dcdfe6;
                        color: #606266;
                    }

                    .el-input__prefix {
                        .el-input__icon {
                            line-height: 35px;
                            color: #606266;
                        }
                    }
                }

                .red {
                    .el-form-item__label {
                        color: red !important;
                    }

                    .el-form-item__content {
                        .el-input {
                            .el-input__inner {
                                color: red !important;
                            }
                        }
                    }
                }

                .green {
                    .el-form-item__label {
                        color: green !important;
                    }

                    .el-form-item__content {
                        .el-input {
                            .el-input__inner {
                                color: green !important;
                            }
                        }
                    }
                }
            }

            /deep/ .el-col {
                .el-form-item {
                    .el-form-item__label {
                        color: #606266;
                    }

                    .el-form-item__content {
                        .el-input {
                            .el-input__inner {
                                background: none;
                                border: none;
                                color: #606266;
                            }
                        }
                    }
                }
            }

            .echarts {
                width: 100%;
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: space-between;
                position: relative;
            }
        }
    }

    .form {
        min-height: 300px;
        padding: 25px 50px 50px;
        overflow-y: scroll;
        background: url("../../../assets/detailsTest/imgDetailsBG.jpg");
        background-size: 100% 100%;

        /deep/ .el-col {
            p {
                height: 50px;

                .el-date-editor {
                    .el-input__inner {
                        line-height: 35px;
                        height: 35px;
                        background: rgba(0, 0, 0, 0);
                        border: 1px solid #00bff6;
                        color: #00bff6;
                    }

                    .el-input__prefix {
                        .el-input__icon {
                            line-height: 35px;
                            background: rgba(0, 0, 0, 0);
                            color: #00bff6;
                        }
                    }
                }
            }

            .red {
                .el-form-item__label {
                    color: red !important;
                }

                .el-form-item__content {
                    .el-input {
                        .el-input__inner {
                            color: red !important;
                        }
                    }
                }
            }

            .green {
                .el-form-item__label {
                    color: green !important;
                }

                .el-form-item__content {
                    .el-input {
                        .el-input__inner {
                            color: green !important;
                        }
                    }
                }
            }

            .myTable {
                display: flex;
                flex-wrap: nowrap;
                flex-direction: row;
                justify-content: space-around;
                border: 1px solid @myTableBorder;
                border-right: none;

                ul {
                    list-style: none;

                    li {
                        line-height: 3;
                    }

                    .li_t {
                        border-bottom: 1px solid @myTableBorder;
                        border-right: 1px solid @myTableBorder;
                    }

                    .li_b {
                        border-right: 1px solid @myTableBorder;
                    }
                }
            }
        }

        .title {
            color: white;
            font-size: 20px;
            font-weight: 800;
            line-height: 50px;
        }

        .echarts {
            width: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;
        }

        /deep/ .el-col {
            .el-form-item {
                .el-form-item__label {
                    color: white;
                }

                .el-form-item__content {
                    .el-input {
                        .el-input__inner {
                            background: none;
                            border: none;
                            color: white;
                        }
                    }
                }
            }
        }
    }

    .KK {
        position: absolute;
        z-index: 10;
        font-size: 18px;
        color: white;
    }

    .ll {
        left: 50px;
    }

    .rr {
        right: 50px;
    }

    table {
        color: #333;
        border-collapse: collapse;
        width: 100%;
        text-align: center;
        font-weight: 100;
        margin-bottom: 10px;
    }

    table,
    th,
    td {
        border: 1px solid #606266;
        line-height: 2.5;
    }

    .form::-webkit-scrollbar {
        display: none;
    }
</style>
