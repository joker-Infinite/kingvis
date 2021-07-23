<template>
    <div class="serviceAreaDimension" v-loading="loading">
        <div class="serviceAreaDimension_tree">
            <div class="tree_box">
                <el-input
                        placeholder="输入关键字进行过滤"
                        v-model="filterText">
                </el-input>
                <div class="tree_scroll">
                    <el-tree
                            class="filter-tree"
                            :data="treeData"
                            :props="defaultProps"
                            @node-click="nodeClick"
                            :filter-node-method="filterNode"
                            ref="tree">
                    </el-tree>
                </div>
            </div>
        </div>
        <div class="serviceAreaDimension_container">
            <div class="serviceAreaDimension_container_query">
                <el-button type="primary" @click="addColumns">查询</el-button>
                <el-button @click="resetColumns">重置</el-button>
            </div>
            <div :class="{'serviceAreaDimension_container_select':true,'serviceAreaDimension_container_select_h':!showOff,'serviceAreaDimension_container_select_mh':showOff}">
                <div class="showOffDimension" @click="showOffDimension">展示维度>></div>
                <template v-for="(i,x) in query">
                    <div class="row_select">
                        <div class="row_title">{{i[0].businessType}}:</div>
                        <div :class="{'row_content':true,'row_content_mh':openMore.indexOf(x)!==-1,'row_content_h':openMore.indexOf(x)===-1}">
                            <el-checkbox-group :id="i[0].businessType"
                                               v-if="i[0].templateType === 'checkBox'"
                                               v-model="selected[i[0].businessType]"
                                               @change="selectDimension(i)">
                                {{i[0].businessType}}
                                <template v-for="j in i">
                                    <el-checkbox :label="j.dimensionValue"
                                                 :value="j.dimensionValue">
                                        {{j.dimensionName}}
                                    </el-checkbox>
                                </template>
                            </el-checkbox-group>
                            <el-radio-group :id="i[0].businessType"
                                            v-if="i[0].templateType === 'radio'"
                                            v-model="selected[i[0].businessType]"
                                            @change="selectDimension(i)">
                                <template v-for="j in i">
                                    <el-radio :label="j.dimensionValue"
                                              :value="j.dimensionValue">
                                        {{j.dimensionName}}
                                    </el-radio>
                                </template>
                            </el-radio-group>
                        </div>
                        <div class="row_btn" @click="seeMore(x)" v-show="showMore[x]">查看更多>></div>
                    </div>
                    <el-divider></el-divider>
                </template>
            </div>
            <div class="serviceAreaDimension_container_content">
                <div class="serviceAreaDimension_container_content_top">
                    <div class="table_left">
                        <my-table-base ref="table"
                                       height="600px"
                                       :search="false"
                                       :pagination="false"
                                       chooseItem="single"
                                       :columns="columns"
                                       :tableData="tableData">
                        </my-table-base>
                    </div>
                    <div class="charts_right">
                        <div class="charts">
                            <ms-other-setting v-if="noData[0]" class="other" :i="0"
                                              @clickType="clickType"></ms-other-setting>
                            <div class="enlarge iconfont iconfangda1" v-if="noData[0]"
                                 @click="showBigCharts(0,charts_title[0].join(','))"></div>
                            <div class="charts_title">{{charts_title[0].join(',')}}</div>
                            <div style="width: 100%;height: 100%" id="SAD-0" v-show="noData[0]"></div>
                            <div class="charts_table" :style="{zIndex:showTable0?50:-1}">
                                <div class="myTable">
                                    <div v-for="i in tableColumns[0]" :style="{width:100/tableColumns[0].length+'%'}">
                                        <div class="borderB">{{i.name}}</div>
                                        <div class="borderB" v-for="c in i['data']">{{c}}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="noData" v-show="!noData[0]">暂无数据</div>
                        </div>
                        <div style="width: 100%;height: 10px"></div>
                        <div class="charts">
                            <ms-other-setting v-if="noData[1]" class="other" :i="1"
                                              @clickType="clickType"></ms-other-setting>
                            <div class="enlarge iconfont iconfangda1" v-if="noData[1]"
                                 @click="showBigCharts(1,charts_title[1].join(','))"></div>
                            <div class="charts_title">{{charts_title[1].join(',')}}<</div>
                            <div style="width: 100%;height: 100%" id="SAD-1" v-show="noData[1]"></div>
                            <div class="charts_table" :style="{zIndex:showTable1?50:-1}">
                                <div class="myTable">
                                    <div v-for="i in tableColumns[1]" :style="{width:100/tableColumns[1].length+'%'}">
                                        <div class="borderB">{{i.name}}</div>
                                        <div class="borderB" v-for="c in i['data']">{{c}}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="noData" v-show="!noData[1]">暂无数据</div>
                        </div>
                    </div>
                </div>
                <div class="serviceAreaDimension_container_content_bottom">
                    <div class="charts">
                        <ms-other-setting v-if="noData[2]" class="other" :i="2"
                                          @clickType="clickType"></ms-other-setting>
                        <div class="enlarge iconfont iconfangda1" v-if="noData[2]"
                             @click="showBigCharts(2,charts_title[2].join(','))"></div>
                        <div class="charts_title" :title="charts_title[2].join(',')">{{charts_title[2].join(',')}}</div>
                        <div style="width: 100%;height: 100%" id="SAD-2" v-show="noData[2]"></div>
                        <div class="charts_table" :style="{zIndex:showTable2?50:-1}">
                            <div class="myTable">
                                <div v-for="i in tableColumns[2]" :style="{width:100/tableColumns[2].length+'%'}">
                                    <div class="borderB">{{i.name}}</div>
                                    <div class="borderB" v-for="c in i['data']">{{c}}</div>
                                </div>
                            </div>
                        </div>
                        <div class="noData" v-show="!noData[2]">暂无数据</div>
                    </div>
                </div>
            </div>
        </div>
        <show-big-charts ref="showBigCharts"></show-big-charts>
    </div>
</template>

<script>
    import "./serviceAreaDimension.less"
    import MyTableBase from "../../components/common/myTableBase";
    import MsOtherSetting from "../../components/newCommon/MyCommon/MsOtherSetting";
    import {printExcel} from "../../../public/api/excel"
    import index from "../../../src/components/newCommon/javaScript/index"
    import ShowBigCharts from "./children/showBigCharts";

    export default {
        name: "serviceAreaDimension",
        mixins: [index],
        components: {ShowBigCharts, MsOtherSetting, MyTableBase},
        data() {
            return {
                loading: false,
                windowWidth: 0,
                filterText: '',
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                query: {},
                selected: {},
                treeData: [],
                tableData: [],
                columns: [],
                openMore: [],
                showMore: {'选择年份': false},
                noData: [false, false, false],
                param: {
                    firstPieType: "",
                    listTypes: "",
                    secondPieType: "",
                    selectYear: "2021",
                    service_company_id: "",
                    service_id: "",
                    service_info_id: ""
                },
                charts_title: [[], [], []],
                showOff: false,
                option: [],
                tableColumns: [[], [], []],
                showTable0: false,
                showTable1: false,
                showTable2: false,
            }
        },
        methods: {
            //最大化展示图表
            showBigCharts(i, t) {
                this.$refs['showBigCharts'].openDialog(this.option[i], t);
            },
            //图表 列表 下载
            clickType(v, i) {
                let option = this.DeepCopy(this.option)[i];
                let type = option['series'][0]['type'];
                let table = [[], []];
                let printTable = [[], []]
                let showTable = 'showTable' + i;
                if (v === 'table') {
                    this[showTable] = true;
                }
                if (v === 'ECharts') {
                    this[showTable] = false;
                }
                if (type === 'pie') {
                    if (i === 0) {
                        option['series'][0].data.forEach(i => {
                            table[0].push(i.name);
                            table[1].push(i.value);
                        })
                        printTable[0].push({
                            data: table[0],
                            name: 'name',
                            type: 'label'
                        })
                        printTable[1].push({
                            data: table[1],
                            name: 'value',
                            type: 'value'
                        })
                        this.tableColumns[0][0] = printTable[0][0];
                        this.tableColumns[0][1] = printTable[1][0];
                    }
                    if (i === 1) {
                        option['series'][0].data.forEach(i => {
                            table[0].push(i.name)
                            table[1].push(i.value)
                        })
                        printTable[0].push({
                            data: table[0],
                            name: 'name',
                            type: 'label'
                        })
                        printTable[1].push({
                            data: table[1],
                            name: 'value',
                            type: 'value'
                        })
                        this.tableColumns[1][0] = printTable[0][0];
                        this.tableColumns[1][1] = printTable[1][0];
                    }
                }
                if (type === 'bar' || type === 'line') {
                    printTable = this.getData(v, option);
                    this.tableColumns[2][0] = printTable[0][0];
                    this.tableColumns[2][1] = printTable[1][0];
                    this.tableColumns[2][2] = printTable[1][1];
                }
                console.log(this.tableColumns)
                if (v === 'excel') {
                    let excelData = {
                        name: "",
                        keyColumns: [],
                        valueColumns: [],
                    };
                    printTable.forEach(item => {
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
            //展示维度
            showOffDimension() {
                this.showOff = this.showOff ? false : true;
            },
            //点击树节点
            nodeClick(v, s) {
                console.log(v);
                if (s["level"] === 1) {
                    this.param["service_company_id"] = v.children[0]["serviceCompanyId"];
                    this.param["service_id"] = "";
                    this.param["service_info_id"] = "";
                }
                if (s["level"] === 2) {
                    this.param["service_company_id"] = v["serviceCompanyId"];
                    this.param["service_id"] = v["serviceId"];
                    this.param["service_info_id"] = "";
                }

                if (s["level"] === 3) {
                    this.param["service_company_id"] = v["serviceCompanyId"];
                    this.param["service_id"] = v["serviceId"];
                    this.param["service_info_id"] = v["serviceInfoId"];
                }
                this.addColumns();
            },
            //每一行的选择更多
            seeMore(i) {
                if (this.openMore.indexOf(i) === -1) {
                    this.openMore.push(i);
                } else {
                    this.openMore.splice(this.openMore.indexOf(i), 1);
                }
            },
            //维度选择事件
            selectDimension(i) {
                let selected = this.DeepCopy(this.selected);
                this.selected = selected;
                // this.addColumns();
            },
            //获取左侧组织架构树数据
            async getTreeData() {
                const res = await this.$axios.get("/apidata/service_show/service_name_ids")
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
                this.treeData = a;
            },
            //获取维度信息
            async getDimensionData() {
                const res = await this.$axios.get("/apidata/service_show/get_dimension_data");
                let default_checked = ["客单价", "订单数", "经营面积", "驶入车流量"];
                let time = [];
                for (let i = 0; i < 2; i++) {
                    time.push({
                        businessType: '选择年份',
                        dimensionName: 2020 + i,
                        dimensionValue: 2020 + i,
                        templateType: 'radio',
                        dimensionType: 'year'
                    })
                }
                let query = {'选择年份': time};
                this.selected['选择年份'] = 2021;
                let data = this.DeepCopy(res.data.data);
                let arr = this.mySet(data, "businessType");
                arr.forEach(i => {
                    query[i] = [];
                    this.showMore[i] = false;
                    data.forEach(j => {
                        if (j['businessType'] === i) {
                            j['templateType'] = j['dimensionType'] === 'tab' ? 'checkBox' : 'radio'
                            query[i].push(j);
                        }
                        this.selected[j['businessType']] = j['dimensionType'] === 'tab' ? [] : ''
                    })
                })
                data.forEach(j => {
                    for (let i in this.selected) {
                        if (i === j['businessType']) {
                            if (j['dimensionType'] === 'tab' && default_checked.indexOf(j['dimensionName']) !== -1) {
                                this.selected[i].push(j['dimensionValue'])
                            }
                            if (j['dimensionType'] === 'pie1' || j['dimensionType'] === 'pie2') {
                                if (this.selected[i].length === 0) {
                                    this.selected[i] = j['dimensionValue'];
                                }
                            }
                        }
                    }
                })
                this.query = query;
            },
            //添加列表的列
            async addColumns() {
                this.loading = true;
                this.columns = [];
                this.charts_title = [[], [], []]
                for (let i in this.selected) {
                    let item = this.selected[i];
                    if (item.constructor === Array) {
                        for (let j in this.query) {
                            let jChild = this.query[j];
                            if (jChild && jChild.length > 0) {
                                jChild.forEach(k => {
                                    item.forEach(s => {
                                        if (k['dimensionValue'] === s) {
                                            this.charts_title[2].push(k['dimensionName']);
                                            this.columns.unshift({
                                                prop: k['dimensionValue'],
                                                label: k['dimensionName'],
                                                formatter: v => {
                                                    if (!v[k['dimensionValue']]) {
                                                        return 0;
                                                    }
                                                    return v[k['dimensionValue']];
                                                },
                                                width: '120px'
                                            })
                                        }
                                    })
                                })
                            }
                        }
                    } else {
                        for (let j in this.query) {
                            this.query[j].forEach(i => {
                                if (i['dimensionValue'] === item) {
                                    if (i['dimensionType'] === 'pie1') {
                                        this.charts_title[0].push(i.dimensionName);
                                    }
                                    if (i['dimensionType'] === 'pie2') {
                                        this.charts_title[1].push(i.dimensionName);
                                    }
                                }
                            })
                        }
                    }
                }
                this.columns.unshift({
                    prop: 'name',
                    label: '名称',
                    width: '150px'
                })
                this.getTableData();
            },
            //重置列数据
            async resetColumns() {
                let selected = this.DeepCopy(this.selected);
                for (let i in selected) {
                    let item = selected[i];
                    if (item.constructor === Array) {
                        selected[i] = [];
                    }
                }
                this.param['service_company_id'] = '';
                this.param['service_id'] = '';
                this.param['service_info_id'] = '';
                this.selected = selected;
                await this.addColumns();
            },
            //获取列表数据
            async getTableData() {
                let param = {};
                this.param['firstPieType'] = this.selected['饼图(左)'];
                this.param['secondPieType'] = this.selected['饼图(右)'];
                this.param['selectYear'] = this.selected['选择年份'];
                let str = '';
                for (let i in this.selected) {
                    let item = this.selected[i];
                    if (item.constructor === Array) {
                        item.forEach(j => {
                            str += j + ',';
                        })
                    }
                }
                this.param['listTypes'] = str;
                for (let i in this.param) {
                    if (!!this.param[i]) {
                        param[i] = this.param[i];
                    }
                }
                const res = await this.$axios.get("/apidata/service_show/get_comprehensive_data", {params: param});
                let data = res.data.data
                this.tableData = data.listOfFigure;
                this.$refs['table'].doLayout();
                await this.setECharts(data);
            },
            //渲染图表
            setECharts(d) {
                let listOfFigure = d["listOfFigure"] ? d["listOfFigure"] : [];
                let monthAndCarNum = d["monthAndCarNum"] ? d["monthAndCarNum"] : [];
                let serviceMonthAndMoney = d["serviceMonthAndMoney"] ? d["serviceMonthAndMoney"] : [];
                let pieData1 = d["pieData1"] ? d["pieData1"] : [];
                let pieData2 = d["pieData2"] ? d["pieData2"] : [];
                let pieLegend = [];
                let pieLegend_ = [];
                let lineLegend = [];
                this.noData = [false, false, false];
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
                this.noData[2] = serviceMonthAndMoney.length > 0 || monthAndCarNum.length > 0;
                lineLegend = (serviceMonthAndMoney.length > monthAndCarNum.length) ? serviceMonthAndMoney : monthAndCarNum;
                this.tableData = listOfFigure;
                let option = this.option = [
                    {
                        legend: {
                            orient: "vertical",
                            left: 10,
                            top: "center",
                            data: pieLegend
                        },
                        tooltip: {trigger: "item"},
                        series: [
                            {
                                name: "",
                                type: "pie",
                                radius: ["0%", "60%"],
                                center: ["55%", "50%"],
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
                                        length: 10,
                                        length2: 10,
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
                        tooltip: {trigger: "item"},
                        series: [
                            {
                                name: "",
                                type: "pie",
                                radius: ["0%", "60%"],
                                center: ["55%", "50%"],
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
                                        length: 10,
                                        length2: 10,
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
                                data: this.separate(lineLegend)[0],
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
                setTimeout(_ => {
                    for (let i = 0; i < 3; i++) {
                        let eCharts = this.$echarts.init(document.getElementById('SAD-' + i));
                        eCharts.setOption(option[i]);
                    }
                    this.loading = false;
                }, 100)
            },
            //处理折线图数据
            separate(v) {
                let a1 = [];
                let a2 = [];
                v.forEach(i => {
                    let j = i["xBxis"].split('');
                    let n = j.splice(0, 4);
                    let y = n.join('') + '-' + j.join('');
                    a1.push(y);
                    a2.push(i["yAxis"]);
                });
                return [a1, a2];
            },
            //展示 显示更多按钮
            showMoreBtnType() {
                let v = this.DeepCopy(this.showMore);
                this.showMore = {};
                let width = document.getElementsByClassName('row_select')[0].offsetWidth;
                for (let i in v) {
                    let child = document.getElementById(i).children;
                    let sum = 0;
                    for (let c in child) {
                        if (child[c].offsetWidth) {
                            sum += child[c].offsetWidth + 30;
                        }
                    }
                    this.showMore[i] = (sum + 60) > (width - 200) ? true : false;
                }
                this.loading = false;
            },
            filterNode(value, data) {
                if (!value) return true;
                return data.label.indexOf(value) !== -1;
            }
        },
        async mounted() {
            this.loading = true;
            await this.getTreeData();
            await this.getDimensionData();
            await this.addColumns();
            this.showMoreBtnType();
            window.onresize = () => {
                this.windowWidth = document.body.offsetWidth;
            }
        },
        watch: {
            filterText(val) {
                this.$refs.tree.filter(val);
            },
            windowWidth: {
                handler() {
                    this.loading = true;
                    this.showMoreBtnType();
                }
            }
        },
    }
</script>

<style scoped>

</style>