<template>
    <div class="businessComparison" v-loading="loading">
        <div class="left">
            <el-input placeholder="输入关键字进行过滤" v-model="filterText">
            </el-input>
            <div class="myTree">
                <div>
                    <el-tree
                            class="filter-tree"
                            :data="data"
                            :props="defaultProps"
                            :highlight-current="true"
                            :default-expand-all="false"
                            @node-click="nodeClick"
                            :filter-node-method="filterNode"
                            ref="tree">
                    </el-tree>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="select_year">
                <div class="select_year_btn">
                    <!--<el-button :type="year===2020?'primary':''" @click="_=>(this.year=2020,this.lookView())">2020
                              </el-button>
                              <el-button :type="year===2021?'primary':''" @click="_=>(this.year=2021,this.lookView())">2021
                              </el-button>-->
                    <el-select v-model="year" @change="lookView">
                        <el-option label="2020" value="2020"></el-option>
                        <el-option label="2021" value="2021"></el-option>
                    </el-select>
                </div>
            </div>
            <div id="prosecution_unit" class="prosecution_unit">
                <div :class="{ prosecution_unit_container: true,container_height: showOptions,container_min_height: !showOptions }">
                    <template v-for="i in all">
                        <div class="type_select">
                            <div class="type_header">
                                <span>{{ i[0].businessType }}:</span>
                            </div>
                            <div class="type_content">
                                <el-checkbox-group
                                        v-if="i[0].dimensionType !== 'pie1'"
                                        v-model="selected[i[0].businessType]"
                                        @change="selectTypeChange(i)">
                                    <el-checkbox v-if="m['dimensionType'] === 'tab'"
                                                 v-for="(m, x) in i"
                                                 :key="x"
                                                 :label="m.dimensionName"
                                                 :disabled="m['havaData'] == '0'"
                                                 :value="m.dimensionValue">
                                    </el-checkbox>
                                </el-checkbox-group>
                                <el-radio-group
                                        v-if="i[0].dimensionType === 'pie1' ||i[0].dimensionType === 'pie2' "
                                        v-model="selected[i[0].businessType]"
                                        @change="selectTypeChange(i)">
                                    <el-radio v-if=" m['dimensionType'] === 'pie1' ||m['dimensionType'] === 'pie2'"
                                              v-for="(m, x) in i"
                                              :key="x"
                                              :disabled="m['havaData'] == '0'"
                                              :label="m.dimensionName">
                                        {{ m.dimensionName }}
                                    </el-radio>
                                </el-radio-group>
                            </div>
                        </div>
                        <el-divider></el-divider>
                    </template>
                </div>
                <el-button
                        type="text"
                        class="prosecution_unit_btn"
                        @click.stop="moreUnit">
                    展示纬度
                </el-button>
            </div>
            <div class="con" :style="{ height: content_height }">
                <div style="height: calc(100% - 300px);">
                    <my-table-base
                            height="100%"
                            :pagination="false"
                            chooseItem="single"
                            :gridIndex="false"
                            :search="false"
                            :columns="columns"
                            :table-data="tableData">
                    </my-table-base>
                </div>
                <div class="charts">
                    <div class="content" v-for="i in 3" :key="i">
                        <div class="content_echarts"
                             style="width: 100%;height: 100%"
                             :id="'aabc' + i"></div>
                        <div class="noData" v-if="!noData[i - 1]">暂无数据</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import "./index.less";
    import MyDialog from "../../components/common/myDialog";
    import MyTableBase from "../../components/common/myTableBase";

    export default {
        name: "businessComparison",
        components: {MyTableBase, MyDialog},
        data() {
            return {
                year: "2021",
                loading: false,
                unfold: 0,
                content_height: "calc(100% - 45px)",
                noData: [false, false, false],
                selected: {},
                radioSelected: {},
                all: [],
                columns: [{prop: "name", label: "名称"}],
                tableData: [],
                filterText: "",
                data: [],
                defaultProps: {
                    children: "children",
                    label: "label"
                },
                param: {
                    firstPieType: "",
                    listTypes: "",
                    secondPieType: "",
                    selectYear: "2021",
                    service_company_id: "",
                    service_id: "",
                    service_info_id: ""
                }
            };
        },
        computed: {
            showOptions() {
                this.loading = true;
                setTimeout(_ => {
                    let change = document.getElementById("prosecution_unit").offsetHeight;
                    this.content_height = "calc(100% - 45px - " + change + "px)";
                    if (this.tableData.length > 0) {
                        this.loading = false;
                    }
                }, 500);
                return this.unfold % 2 === 0;
            }
        },
        methods: {
            nodeClick(v, s) {
                //父节点
                if (s["level"] === 1) {
                    this.param["service_company_id"] = v.children[0]["serviceCompanyId"];
                    this.param["service_id"] = "";
                    this.param["service_info_id"] = "";
                    this.param["selectYear"] = this.year;
                }
                if (s["level"] === 2) {
                    this.param["service_company_id"] = v["serviceCompanyId"];
                    this.param["service_id"] = v["serviceId"];
                    this.param["service_info_id"] = "";
                    this.param["selectYear"] = this.year;
                }

                if (s["level"] === 3) {
                    this.param["service_company_id"] = v["serviceCompanyId"];
                    this.param["service_id"] = v["serviceId"];
                    this.param["service_info_id"] = v["serviceInfoId"];
                    this.param["selectYear"] = this.year;
                }
                this.lookView();
            },
            separate(v) {
                let a1 = [];
                let a2 = [];
                v.forEach(i => {
                    a1.push(i["xBxis"]);
                    a2.push(i["yAxis"]);
                });
                return [a1, a2];
            },
            lookView() {
                let str = "";
                let arr = [];
                this.param["selectYear"] = this.year;
                for (let i in this.selected) {
                    if (this.selected[i].constructor === Array) {
                        str += this.selected[i].join(",") + ",";
                    } else {
                        str += this.selected[i] + ",";
                    }
                }
                for (let i in this.all) {
                    let m = this.all[i];
                    m.forEach(j => {
                        if (str.indexOf(j["dimensionName"]) !== -1) {
                            this.param["selectYear"] = this.year;
                            if (j["dimensionType"] === "pie1") {
                                this.param["firstPieType"] = j["dimensionValue"];
                            }
                            if (j["dimensionType"] === "pie2") {
                                this.param["secondPieType"] = j["dimensionValue"];
                            }
                            if (j["dimensionType"] === "tab") {
                                arr.push(j["dimensionValue"]);
                            }
                        }
                    });
                }
                let param = {};
                for (let i in this.param) {
                    if (!!this.param[i] && this.param[i] != "") {
                        param[i] = this.param[i];
                    }
                }
                this.$axios
                    .get("/api/service_show/get_comprehensive_data", {params: param})
                    .then(res => {
                        let data = res.data.data;
                        this.tableData = [];
                        this.noData = [false, false, false];
                        let listOfFigure = data["listOfFigure"];
                        let monthAndCarNum = data["monthAndCarNum"];
                        let pieData1 = data["pieData1"];
                        let pieData2 = data["pieData2"];
                        let serviceMonthAndMoney = data["serviceMonthAndMoney"];
                        let pieLegend = [];
                        let pieLegend_ = [];
                        if (pieData1 && pieData1.length > 0) {
                            pieData1.forEach(i => {
                                i["name"] = i["xBxis"];
                                i["value"] = i["yAxis"];
                                pieLegend.push(i["xBxis"]);
                            });
                            this.noData[0] = true;
                        }
                        if (pieData2 && pieData2.length > 0) {
                            pieData2.forEach(i => {
                                i["name"] = i["xBxis"];
                                i["value"] = i["yAxis"];
                                pieLegend_.push(i["xBxis"]);
                            });
                            this.noData[1] = true;
                        }
                        this.noData[2] =
                            serviceMonthAndMoney.length > 0 || monthAndCarNum.length > 0;
                        this.tableData = listOfFigure;
                        let option = [
                            {
                                legend: {
                                    orient: "vertical",
                                    left: 10,
                                    top: "center",
                                    data: pieLegend
                                },
                                series: [
                                    {
                                        name: "",
                                        type: "pie",
                                        radius: ["0%", "60%"],
                                        center: ["50%", "50%"],
                                        avoidLabelOverlap: false,
                                        itemStyle: {
                                            normal: {
                                                color: function (v) {
                                                    let colorList = [
                                                        "#fec279",
                                                        "#968af5",
                                                        "#e790e8",
                                                        "#36c78b",
                                                        "#51a3fc"
                                                    ];
                                                    return colorList[v.dataIndex];
                                                }
                                            }
                                        },
                                        labelLine: {
                                            normal: {
                                                length: 30,
                                                length2: 25,
                                                fontSize: 16,
                                                lineStyle: {
                                                    width: 1
                                                }
                                            }
                                        },
                                        label: {
                                            show: true,
                                            position: "outer",
                                            normal: {
                                                formatter(v) {
                                                    return v.name + ":" + Number(v.value).toFixed(2);
                                                },
                                                textStyle: {
                                                    fontSize: 14
                                                }
                                            }
                                        },
                                        data: pieData1
                                    }
                                ]
                            },
                            {
                                legend: {
                                    orient: "vertical",
                                    left: 10,
                                    top: "center",
                                    data: pieLegend_
                                },
                                series: [
                                    {
                                        name: "",
                                        type: "pie",
                                        radius: ["0%", "60%"],
                                        center: ["50%", "50%"],
                                        avoidLabelOverlap: false,
                                        itemStyle: {
                                            normal: {
                                                color: function (v) {
                                                    let colorList = [
                                                        "#fec279",
                                                        "#968af5",
                                                        "#e790e8",
                                                        "#36c78b",
                                                        "#51a3fc"
                                                    ];
                                                    return colorList[v.dataIndex];
                                                }
                                            }
                                        },
                                        labelLine: {
                                            normal: {
                                                length: 30,
                                                length2: 25,
                                                fontSize: 16,
                                                lineStyle: {
                                                    width: 1
                                                }
                                            }
                                        },
                                        label: {
                                            show: true,
                                            position: "outer",
                                            normal: {
                                                formatter(v) {
                                                    return v.name + ":" + Number(v.value).toFixed(2);
                                                },
                                                textStyle: {
                                                    fontSize: 14
                                                }
                                            }
                                        },
                                        data: pieData2
                                    }
                                ]
                            },
                            {
                                tooltip: {
                                    show: true,
                                    confine: true,
                                    trigger: "axis",
                                    axisPointer: {
                                        type: "shadow"
                                    },
                                    formatter: v => {
                                        let mn = "";
                                        let car = "";
                                        v.forEach(i => {
                                            if (i["seriesIndex"] === 0) {
                                                car = i["value"] + " 辆";
                                            }
                                            if (i["seriesIndex"] === 1) {
                                                mn = i["value"] + " 万元";
                                            }
                                        });
                                        return v[0]["name"] + "<br>" + car + "<br>" + mn;
                                    }
                                },
                                grid: {
                                    left: 80,
                                    right: 80,
                                    bottom: 30
                                },
                                xAxis: [
                                    {
                                        name: "月",
                                        type: "category",
                                        data: this.separate(serviceMonthAndMoney)[0],
                                        splitLine: {
                                            show: false
                                        },
                                        axisTick: {
                                            show: false
                                        }
                                    }
                                ],
                                yAxis: [
                                    {
                                        name: "辆",
                                        nameTextStyle: {
                                            color: "#fea528"
                                        },
                                        type: "value",
                                        splitLine: {
                                            show: false
                                        },
                                        axisTick: {
                                            show: false
                                        }
                                    },
                                    {
                                        name: "万元",
                                        nameTextStyle: {
                                            color: "#6796fe"
                                        },
                                        type: "value",
                                        splitLine: {
                                            show: false
                                        },
                                        axisTick: {
                                            show: false
                                        }
                                    }
                                ],
                                series: [
                                    {
                                        data: this.separate(monthAndCarNum)[1],
                                        type: "line",
                                        lineStyle: {
                                            color: "#fea528",
                                            width: 2,
                                            shadowColor: "rgba(255,155,53,0.68)", //设置折线阴影
                                            shadowBlur: 10,
                                            shadowOffsetY: 10
                                        }
                                    },
                                    {
                                        data: this.separate(serviceMonthAndMoney)[1],
                                        type: "line",
                                        yAxisIndex: "1",
                                        lineStyle: {
                                            color: "#6796fe",
                                            width: 2,
                                            shadowColor: "rgba(108,146,255,0.68)", //设置折线阴影
                                            shadowBlur: 10,
                                            shadowOffsetY: 10
                                        }
                                    }
                                ]
                            }
                        ];
                        this.$nextTick(_ => {
                            for (let i = 1; i < 4; i++) {
                                let id = "aabc" + i;
                                this.$echarts.init(document.getElementById(id)).dispose();
                                this.$echarts
                                    .init(document.getElementById(id))
                                    .setOption(option[i - 1]);
                            }
                            this.loading = false;
                        });
                    });
            },
            selectTypeChange(v) {
                let columns = [];
                let arr = [];
                this.loading = true;
                let data = JSON.parse(JSON.stringify(this.selected));
                this.selected = {};
                this.selected = data;
                let str = "";
                for (let j in data) {
                    if (data[j].constructor === Array) {
                        data[j].forEach(i => {
                            str += i + ",";
                        });
                    } else {
                        str += data[j] + ",";
                    }
                }
                this.param["firstPieType"] = "";
                this.param["secondPieType"] = "";
                this.param["listTypes"] = "";
                for (let i in this.all) {
                    let m = this.all[i];
                    m.forEach(j => {
                        if (str.indexOf(j["dimensionName"]) !== -1) {
                            if (
                                j["dimensionType"] !== "pie1" &&
                                j["dimensionType"] !== "pie2"
                            ) {
                                columns.push({
                                    prop: j["dimensionValue"],
                                    label: j["dimensionName"],
                                    formatter: v => {
                                        return v[j["dimensionValue"]] ? v[j["dimensionValue"]] : 0;
                                    }
                                });
                            }
                            this.param["selectYear"] = this.year;
                            if (j["dimensionType"] === "pie1") {
                                this.param["firstPieType"] = j["dimensionValue"];
                            }
                            if (j["dimensionType"] === "pie2") {
                                this.param["secondPieType"] = j["dimensionValue"];
                            }
                            if (j["dimensionType"] === "tab") {
                                arr.push(j["dimensionValue"]);
                            }
                        }
                    });
                }
                this.param["listTypes"] = arr.join(",");
                columns.unshift({prop: "name", label: "名称"});
                if (columns.length === 0) {
                    columns = [{prop: "name", label: "名称"}];
                }
                this.columns = columns;
                this.lookView();
            },
            moreUnit() {
                this.unfold++;
                if (this.unfold === 2) {
                    this.unfold = 0;
                }
            },
            filterNode(value, data) {
                if (!value) return true;
                return data.label.indexOf(value) !== -1;
            }
        },
        async mounted() {
            this.$axios.get("/api/service_show/service_name_ids").then(res => {
                let data = res.data.data;
                let arr = this.mySet(data, "serviceCompanyName");
                let all = [];
                arr.forEach((i, x) => {
                    let obj = {};
                    obj["id"] = x;
                    obj["label"] = i;
                    obj["children"] = [];
                    all.push(obj);
                });
                let service = [];
                data.forEach((i, m) => {
                    for (let j of all) {
                        if (j["label"] === i["serviceCompanyName"]) {
                            i["label"] = i["serviceName"];
                            i["children"] = [];
                            if (m === 0) {
                                j["children"].push(i);
                            }
                            if (m !== 0) {
                                j["children"].forEach(s => {
                                    service.push(s.serviceName);
                                });
                                if (service.indexOf(i["serviceName"]) === -1) {
                                    j["children"].push(i);
                                }
                            }
                        }
                    }
                });
                let d = JSON.parse(JSON.stringify(data));
                let a = JSON.parse(JSON.stringify(all));
                d.forEach(i => {
                    for (let j of a) {
                        let child = j["children"];
                        for (let m of child) {
                            if (i["serviceName"] === m["serviceName"]) {
                                i["label"] = i["serviceDirection"];
                                m["children"].push(i);
                            }
                        }
                    }
                });
                this.data = a;
            });

            const res = await this.$axios.get("/api/service_show/get_dimension_data");
            let data = this.DeepCopy(res.data.data);
            let arr = this.mySet(data, "businessType");
            let all = {};
            arr.forEach(i => {
                all[i] = [];
                let obj = {};
                obj[i] = [];
                if (i === "饼图1" || i === "饼图2") {
                    let obj = {};
                    obj[i] = "";
                }
                Object.assign(this.selected, obj);
            });
            let mm = 0;
            let nn = 0;
            let defaultStr = "经营面积,客单价,订单数,驶入车辆,经济总量";
            data.forEach(i => {
                for (let j in all) {
                    if (i["businessType"] === j) {
                        all[j].push(i);
                        if (j === "饼图1" && mm === 0) {
                            this.selected[j] = i["dimensionName"];
                            this.param["firstPieType"] = i["dimensionValue"];
                        } else if (j === "饼图2" && nn === 0) {
                            this.selected[j] = i["dimensionName"];
                            this.param["secondPieType"] = i["dimensionValue"];
                        } else if (i["dimensionType"] === "tab") {
                            if (defaultStr.indexOf(i["dimensionName"]) !== -1) {
                                this.selected[j].push(i["dimensionName"]);
                                this.param["listTypes"] += i["dimensionValue"] + ",";
                            }
                        }
                    }
                }
                if (i["dimensionType"] !== "pie1" && i["dimensionType"] !== "pie2") {
                    if (defaultStr.indexOf(i["dimensionName"]) !== -1) {
                        this.columns.push({
                            prop: i["dimensionValue"],
                            label: i["dimensionName"],
                            formatter: v => {
                                return v[i["dimensionValue"]] ? v[i["dimensionValue"]] : 0;
                            }
                        });
                    }
                }
            });
            this.all = all;
            let param = {};
            for (let i in this.param) {
                if (!!this.param[i] && this.param[i] != "") {
                    param[i] = this.param[i];
                }
            }
            this.$axios
                .get("/api/service_show/get_comprehensive_data", {params: param})
                .then(res => {
                    let data = res.data.data;
                    this.noData = [false, false, false];
                    let listOfFigure = data["listOfFigure"];
                    let monthAndCarNum = data["monthAndCarNum"];
                    let pieData1 = data["pieData1"];
                    let pieData2 = data["pieData2"];
                    let serviceMonthAndMoney = data["serviceMonthAndMoney"];
                    let pieLegend = [];
                    let pieLegend_ = [];
                    if (pieData1 && pieData1.length > 0) {
                        pieData1.forEach(i => {
                            i["name"] = i["xBxis"];
                            i["value"] = i["yAxis"];
                            pieLegend.push(i["xBxis"]);
                        });
                        this.noData[0] = true;
                    }
                    if (pieData2 && pieData2.length > 0) {
                        pieData2.forEach(i => {
                            i["name"] = i["xBxis"];
                            i["value"] = i["yAxis"];
                            pieLegend_.push(i["xBxis"]);
                        });
                        this.noData[1] = true;
                    }
                    this.noData[2] =
                        serviceMonthAndMoney.length > 0 || monthAndCarNum.length > 0;
                    this.tableData = listOfFigure;
                    let option = [
                        {
                            legend: {
                                orient: "vertical",
                                left: 10,
                                top: "center",
                                data: pieLegend
                            },
                            series: [
                                {
                                    name: "",
                                    type: "pie",
                                    radius: ["0%", "60%"],
                                    center: ["50%", "50%"],
                                    avoidLabelOverlap: false,
                                    itemStyle: {
                                        normal: {
                                            color: function (v) {
                                                let colorList = [
                                                    "#fec279",
                                                    "#968af5",
                                                    "#e790e8",
                                                    "#36c78b",
                                                    "#51a3fc"
                                                ];
                                                return colorList[v.dataIndex];
                                            }
                                        }
                                    },
                                    labelLine: {
                                        normal: {
                                            length: 30,
                                            length2: 25,
                                            fontSize: 16,
                                            lineStyle: {
                                                width: 1
                                            }
                                        }
                                    },
                                    label: {
                                        show: true,
                                        position: "outer",
                                        normal: {
                                            formatter(v) {
                                                return v.name + ":" + Number(v.value).toFixed(2);
                                            },
                                            textStyle: {
                                                fontSize: 14
                                            }
                                        }
                                    },
                                    data: pieData1
                                }
                            ]
                        },
                        {
                            legend: {
                                orient: "vertical",
                                left: 10,
                                top: "center",
                                data: pieLegend_
                            },
                            series: [
                                {
                                    name: "",
                                    type: "pie",
                                    radius: ["0%", "60%"],
                                    center: ["50%", "50%"],
                                    avoidLabelOverlap: false,
                                    itemStyle: {
                                        normal: {
                                            color: function (v) {
                                                let colorList = [
                                                    "#fec279",
                                                    "#968af5",
                                                    "#e790e8",
                                                    "#36c78b",
                                                    "#51a3fc"
                                                ];
                                                return colorList[v.dataIndex];
                                            }
                                        }
                                    },
                                    labelLine: {
                                        normal: {
                                            length: 30,
                                            length2: 25,
                                            fontSize: 16,
                                            lineStyle: {
                                                width: 1
                                            }
                                        }
                                    },
                                    label: {
                                        show: true,
                                        position: "outer",
                                        normal: {
                                            formatter(v) {
                                                return v.name + ":" + Number(v.value).toFixed(2);
                                            },
                                            textStyle: {
                                                fontSize: 14
                                            }
                                        }
                                    },
                                    data: pieData2
                                }
                            ]
                        },
                        {
                            tooltip: {
                                show: true,
                                confine: true,
                                trigger: "axis",
                                axisPointer: {
                                    type: "shadow"
                                },
                                formatter: v => {
                                    let mn = "";
                                    let car = "";
                                    v.forEach(i => {
                                        if (i["seriesIndex"] === 0) {
                                            car = i["value"] + " 辆";
                                        }
                                        if (i["seriesIndex"] === 1) {
                                            mn = i["value"] + " 万元";
                                        }
                                    });
                                    return v[0]["name"] + "<br>" + car + "<br>" + mn;
                                }
                            },
                            grid: {
                                left: 80,
                                right: 80,
                                bottom: 30
                            },
                            xAxis: [
                                {
                                    name: "月",
                                    type: "category",
                                    data: this.separate(serviceMonthAndMoney)[0],
                                    splitLine: {
                                        show: false
                                    },
                                    axisTick: {
                                        show: false
                                    }
                                }
                            ],
                            yAxis: [
                                {
                                    name: "辆",
                                    nameTextStyle: {
                                        color: "#fea528"
                                    },
                                    type: "value",
                                    splitLine: {
                                        show: false
                                    },
                                    axisTick: {
                                        show: false
                                    }
                                },
                                {
                                    name: "万元",
                                    nameTextStyle: {
                                        color: "#6796fe"
                                    },
                                    type: "value",
                                    splitLine: {
                                        show: false
                                    },
                                    axisTick: {
                                        show: false
                                    }
                                }
                            ],
                            series: [
                                {
                                    data: this.separate(monthAndCarNum)[1],
                                    type: "line",
                                    lineStyle: {
                                        color: "#fea528",
                                        width: 2,
                                        shadowColor: "rgba(255,155,53,0.68)", //设置折线阴影
                                        shadowBlur: 10,
                                        shadowOffsetY: 10
                                    }
                                },
                                {
                                    data: this.separate(serviceMonthAndMoney)[1],
                                    type: "line",
                                    yAxisIndex: 1,
                                    lineStyle: {
                                        color: "#6796fe",
                                        width: 2,
                                        shadowColor: "rgba(108,146,255,0.68)", //设置折线阴影
                                        shadowBlur: 10,
                                        shadowOffsetY: 10
                                    }
                                }
                            ]
                        }
                    ];
                    this.$nextTick(_ => {
                        for (let i = 1; i < 4; i++) {
                            let id = "aabc" + i;
                            this.$echarts.init(document.getElementById(id)).dispose();
                            this.$echarts
                                .init(document.getElementById(id))
                                .setOption(option[i - 1]);
                        }
                        this.loading = false;
                    });
                });
        },
        watch: {
            filterText(val) {
                this.$refs.tree.filter(val);
            }
        }
    };
</script>
