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
                                       :grid-index="false"
                                       chooseItem="single"
                                       :columns="columns"
                                       :tableData="tableData">
                        </my-table-base>
                    </div>
                    <div class="charts_right">
                        <div class="charts">
                            <div class="title">{{selected['饼图']}}</div>
                            <div class="content_echarts_t" id="cbb1"></div>
                            <div class="noData" v-show="!noData[0]">暂无数据</div>
                        </div>
                        <div style="width: 100%;height: 10px"></div>
                        <div class="charts">
                            <div class="maxAMin" v-if="JSON.stringify(max_min) !== '{}'">
                                <div>
                                    <span class="ys" style="font-weight: 700;">营收：</span>
                                    <span class="ys">最高：{{(max_min["maxTotalSales"] / 10000).toFixed(2)}}万元</span><br/>
                                    <span class="ys pl">最低：{{(max_min["minTotalSales"] / 10000).toFixed(2)}}万元</span><br/>
                                    <span class="ys pl">平均：{{(max_min["avgTotalSales"] / 10000).toFixed(2)}}万元</span><br/>
                                </div>
                                <div>
                                    <span class="cl" style="font-weight: 700;">车辆：</span>
                                    <span class="cl">最高：{{ max_min["maxCount"] }}辆</span><br/>
                                    <span class="cl pl">最低：{{ max_min["minCount"] }}辆</span><br/>
                                    <span class="cl pl">平均：{{ max_min["avgCount"] }}辆</span><br/>
                                </div>
                            </div>
                            <div class="content_echarts" id="cbb2"></div>
                            <div class="noData" v-show="!noData[1]">暂无数据</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import "./gas.less"
    import MyTableBase from "../../components/common/myTableBase";
    import MsOtherSetting from "../../components/newCommon/MyCommon/MsOtherSetting";
    import {printExcel} from "../../../public/api/excel"
    import index from "../../../src/components/newCommon/javaScript/index"
    import ShowBigCharts from "./children/showBigCharts";

    export default {
        name: "gas",
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
                columns: [
                    {prop: "name", label: "名称", width: '150px'},
                    {prop: "id", label: "加油站ID", hidden: true}
                ],
                openMore: [],
                showMore: {'选择年份': false},
                noData: [false, false],
                param: {
                    selectYear: "2021",
                    companyId: "",
                    stationId: "",
                },
                listParam: {},
                showOff: false,
                max_min: {},
                option: [],
            }
        },
        methods: {
            //渲染图表
            async setECharts() {
                this.noData = [];
                let [legend, d] = [[], []];
                let param = this.DeepCopy(this.param);
                // console.log(this.selected);
                for (let i in this.selected) {
                    // console.log(i);
                    if (i === '饼图'){
                        // console.log(this.query);
                        for (let j in this.query){
                            this.query[i].forEach( k => {
                                // console.log(k);
                                // console.log(this.selected);
                                if(this.selected[i] === k['dimensionValue']){
                                    param['dimensionValue'] = k['dimensionValue'];
                                }
                                // console.log(param);
                            });
                        }
                    }
                }
                let v = await this.$axios.get("/apidata/station/station_datas_bing", {
                    params: param
                });
                let datas = v.data['pie1'];
                // console.log(datas);
                datas.forEach(i => {
                    // console.log(i);
                    for (let j in i){
                        // console.log(j);
                        legend.push(j);
                        d.push({
                            name: j,
                            value: i[j]
                        });
                    }
                });

                let res = await this.$axios.get("/apidata/station/station_data", {
                    params: this.param
                });
                let data = res.data.data;
                // console.log(data);
                this.max_min = data;
                let count = {name: [], value: []};
                let totalSales = {name: [], value: []};
                let stationTimeCountVoList = data["stationTimeCountVoList"];
                stationTimeCountVoList.forEach(i => {
                    count["name"].push(i.month);
                    totalSales["name"].push(i.month);
                    count["value"].push(i.count);
                    totalSales["value"].push((i["totalSales"] / 10000).toFixed(2));
                });
                if (count["value"].length > 0 || totalSales["value"].length > 0) {
                    this.noData[0] = true;
                }
                let option = [
                    {
                        legend: {
                            orient: "vertical",
                            left: 10,
                            top: "center",
                            data: legend
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
                                data: d
                            }
                        ]
                    },
                    {
                        tooltip: {
                            confine: true,
                            trigger: "axis",
                            axisPointer: {
                                type: "shadow"
                            },
                            formatter: v => {
                                return (
                                    v[0]["name"] +
                                    " 月<br>" +
                                    v[0]["value"] +
                                    " 辆<br>" +
                                    v[1]["value"] +
                                    " 万元"
                                );
                            }
                        },
                        grid: {
                            left: 100,
                            top: 100,
                            bottom: 30
                        },
                        xAxis: [
                            {
                                name: "月",
                                type: "category",
                                data: count.name,
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
                                data: count.value,
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
                                data: totalSales.value,
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
                    this.$echarts.init(document.getElementById("cbb1")).dispose();
                    this.$echarts.init(document.getElementById("cbb2")).dispose();
                    this.$echarts.init(document.getElementById("cbb1")).setOption(option[0]);
                    this.$echarts.init(document.getElementById("cbb2")).setOption(option[1]);
                    if (this.tableData.length > 0) {
                        this.loading = false;
                    }
                });
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
                this.param['companyID'] = '';
                this.param['stationId'] = '';
                this.selected = selected;
                await this.addColumns();
            },
            //获取列表数据
            async getTableData() {
                this.loading = true;
                this.param['selectYear'] = this.selected['选择年份'];
                for (let i in this.selected) {
                    let item = this.selected[i];
                    if (item.constructor === Array) {
                        item.forEach(j => {
                            this.listParam[j] = j;
                        })
                    }
                }
                for (let i in this.param) {
                    if (!!this.param[i]) {
                        this.listParam[i] = this.param[i];
                    }
                }
                const res = await this.$axios.get("/apidata/station/station_datas2", {params: this.listParam});
                let data = res.data;
                this.tableData = data;
                await this.setECharts();
                this.loading = false;
            },
            //添加列表的列
            async addColumns() {
                this.loading = true;
                this.columns = [];
                this.charts_title = [[], [], []];
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
                                                        return '暂无数据';
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
                });
                this.getTableData();
            },

            //维度选择事件
            selectDimension(i) {
                let selected = this.DeepCopy(this.selected);
                this.selected = selected;
            },
            //每一行的选择更多
            seeMore(i) {
                if (this.openMore.indexOf(i) === -1) {
                    this.openMore.push(i);
                } else {
                    this.openMore.splice(this.openMore.indexOf(i), 1);
                }
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
            //展示维度
            showOffDimension() {
                this.showOff = this.showOff ? false : true;
            },
            //获取维度信息
            async getDimensionData() {
                const res = await this.$axios.get("/apidata/station/station_field");
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
                            j['templateType'] = j['dimensionType'] === 'tab' ? 'checkBox' : 'radio';
                            query[i].push(j);
                        }
                        this.selected[j['businessType']] = j['dimensionType'] === 'tab' ? [] : ''
                    })
                });
                data.forEach(j => {
                    for (let i in this.selected) {
                        if (i === j['businessType'] && this.selected[i].length === 0) {
                            if (j['dimensionType'] === 'tab') {
                                this.selected[i].push(j['dimensionValue'])
                            } else {
                                this.selected[i] = j['dimensionValue'];
                            }
                        }
                    }
                });
                this.query = query;
            },

            //点击树节点
            nodeClick(v, s) {
                this.param["selectYear"] = this.year;
                if (s["level"] === 1) {
                    this.param["companyId"] = v.children[0]["companyId"];
                    this.param["stationId"] = "";
                }
                if (s["level"] === 2) {
                    this.param["companyId"] = v["companyId"];
                    this.param["stationId"] = "";
                }
                if (s["level"] === 3) {
                    this.param["companyId"] = "";
                    this.param["stationId"] = v["stationId"];
                }
                this.addColumns();
            },
            //获取左侧组织架构树数据
            async getTreeData() {
                const res = await this.$axios.get("/apidata/station/all_station_cop");
                let data = res.data.data;
                let tree = [];
                data.forEach(a => {
                    for (let b in a) {
                        tree.push({
                            label: b,
                            children: []
                        });
                        if (a[b] && a[b].length > 0) {
                            a[b].forEach(c => {
                                c["label"] = c["companyName"];
                                c["value"] = c["companyId"];
                                if (c["childList"] && c["childList"].length > 0) {
                                    c["childList"].forEach(d => {
                                        d["label"] = d["stationName"];
                                        d["value"] = d["stationId"];
                                    });
                                    c["children"] = c["childList"];
                                }
                            });
                        }
                    }
                });
                data.forEach(a => {
                    for (let b in a) {
                        for (let c of tree) {
                            if (b === c["label"]) {
                                c["children"] = a[b];
                            }
                        }
                    }
                });
                this.treeData = tree;
            },
            //过滤
            filterNode(value, data) {
                if (!value) return true;
                return data.label.indexOf(value) !== -1;
            },
        },

        async mounted() {
            this.loading = true;
            await this.getTreeData();
            await this.getDimensionData();
            this.showMoreBtnType();
            await this.addColumns();
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