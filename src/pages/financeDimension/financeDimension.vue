<template>
    <div class="financeDimension" v-loading="loading">
        <div class="financeDimension_tree">
            <div class="tree_box">
                <el-input
                        placeholder="输入关键字进行过滤"
                        v-model="filterText">
                </el-input>
                <div class="tree_scroll">
                    <el-tree show-checkbox
                             node-key="id"
                             class="filter-tree"
                             highlight-current
                             :check-strictly="true"
                             :check-on-click-node="true"
                             :data="treeData"
                             :props="defaultProps"
                             :default-expanded-keys="defaultExpandedKeys"
                             @check="checkTree"
                             :filter-node-method="filterNode"
                             ref="tree">
                    </el-tree>
                </div>
            </div>
        </div>
        <div class="financeDimension_container">
            <div class="financeDimension_container_query">
                <el-select v-model="selectYear"
                           @change="selectYearChange">
                    <el-option label="2020" :value="2020"></el-option>
                    <el-option label="2021" :value="2021"></el-option>
                </el-select>

                <el-date-picker
                        @change="timeChange"
                        v-model="time"
                        value-format="yyyy-MM-dd"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                </el-date-picker>

                <el-button-group>
                    <el-button :type="btnQuery==='all'?'primary':''" @click="clickQuery('all')">全部</el-button>
                    <el-button :type="btnQuery==='income'?'primary':''" @click="clickQuery('income')">收入</el-button>
                    <el-button :type="btnQuery==='expenditure'?'primary':''" @click="clickQuery('expenditure')">支出
                    </el-button>
                </el-button-group>

                <el-button type="primary" @click="getShowData">查询</el-button>
                <el-button @click="resetColumns">重置</el-button>
            </div>
            <div v-if="!hidden"
                 :class="{'financeDimension_container_select':true,'financeDimension_container_select_h':!showOff,'financeDimension_container_select_mh':showOff}">
                <div class="financeDimension_container_select_content">
                    <el-checkbox-group v-model="selected" @change="selectedChange">
                        <template v-for="(i,x) in query">
                            <el-checkbox :label="i['kmId']">{{i['kmName']}}</el-checkbox>
                        </template>
                    </el-checkbox-group>
                </div>
                <div class="showOffDimension" @click="showOffDimension">展示维度>></div>
            </div>
            <div class="financeDimension_container_content">
                <div class="financeDimension_container_content_top">
                    <div class="table_left">
                        <my-table-base ref="table"
                                       style="height: 610px"
                                       height="570px"
                                       :search="false"
                                       chooseItem="single"
                                       :columns="columns"
                                       :totalNum="total"
                                       :pageSize="pageSize"
                                       :tableData="tableData"
                                       @current-change="currentChange"
                                       @size-change="sizeChange">
                        </my-table-base>
                    </div>
                    <div class="charts_right">
                        <div class="charts">
                            <!--     <ms-other-setting v-if="noData[0]" class="other" :i="0"
                                                   @clickType="clickType"></ms-other-setting>
                                 <div class="enlarge iconfont iconfangda1" v-if="noData[0]"
                                      @click="showBigCharts(0,charts_title[0].join(','))"></div>-->
                            <div style="width: 100%;height: 100%" id="SADS-0" v-show="noData[0]"></div>
                            <!--<div class="charts_table" :style="{zIndex:showTable0?50:-1}">
                                <div class="myTable">
                                    <div v-for="i in tableColumns[0]" :style="{width:100/tableColumns[0].length+'%'}">
                                        <div class="borderB">{{i.name}}</div>
                                        <div class="borderB" v-for="c in i['data']">{{c}}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="noData" v-show="!noData[0]">暂无数据</div>-->
                        </div>
                        <div style="width: 100%;height: 10px"></div>
                        <div class="charts">
                            <!--<ms-other-setting v-if="noData[1]" class="other" :i="1"
                                              @clickType="clickType"></ms-other-setting>-->
                            <div class="enlarge iconfont iconfangda1" v-if="noData[1]"
                                 @click="showBigCharts(1,charts_title[1].join(','))"></div>
                            <!--                            <div class="charts_title">{{charts_title[1].join(',')}}<</div>-->
                            <div style="width: 100%;height: 100%" id="SADS-1" v-show="noData[1]"></div>
                            <!-- <div class="charts_table" :style="{zIndex:showTable1?50:-1}">
                                 <div class="myTable">
                                     <div v-for="i in tableColumns[1]" :style="{width:100/tableColumns[1].length+'%'}">
                                         <div class="borderB">{{i.name}}</div>
                                         <div class="borderB" v-for="c in i['data']">{{c}}</div>
                                     </div>
                                 </div>
                             </div>
                             <div class="noData" v-show="!noData[1]">暂无数据</div>-->
                        </div>
                    </div>
                </div>
                <div class="financeDimension_container_content_bottom">
                    <div class="charts">
                        <!--<ms-other-setting v-if="noData[2]" class="other" :i="2"
                                          @clickType="clickType"></ms-other-setting>
                        <div class="enlarge iconfont iconfangda1" v-if="noData[2]"
                             @click="showBigCharts(2,charts_title[2].join(','))"></div>
                        <div class="charts_title" :title="charts_title[2].join(',')">{{charts_title[2].join(',')}}</div>-->
                        <div style="width: 100%;height: 100%" id="SADS-2" v-show="noData[2]"></div>
                        <!--  <div class="charts_table" :style="{zIndex:showTable2?50:-1}">
                              <div class="myTable">
                                  <div v-for="i in tableColumns[2]" :style="{width:100/tableColumns[2].length+'%'}">
                                      <div class="borderB">{{i.name}}</div>
                                      <div class="borderB" v-for="c in i['data']">{{c}}</div>
                                  </div>
                              </div>
                          </div>
                          <div class="noData" v-show="!noData[2]">暂无数据</div>-->
                    </div>
                </div>
            </div>
        </div>
        <show-big-charts ref="showBigCharts"></show-big-charts>
    </div>
</template>

<script>
    import "./financeDimension.less"
    import MyTableBase from "../../components/common/myTableBase";
    import MsOtherSetting from "../../components/newCommon/MyCommon/MsOtherSetting";
    import {printExcel} from "../../../public/api/excel"
    import index from "../../../src/components/newCommon/javaScript/index"
    import ShowBigCharts from "./children/showBigCharts";

    export default {
        name: "financeDimension",
        mixins: [index],
        components: {ShowBigCharts, MsOtherSetting, MyTableBase},
        data() {
            return {
                hidden: false,
                loading: false,
                filterText: '',
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                defaultExpandedKeys: ["service"],
                query: {},
                selected: [],
                treeData: [
                    {
                        label: '服务区事业部',
                        id: 'service',
                        type: 'service',
                        level: '1',
                        children: []
                    },
                    {
                        label: '商业事业部',
                        id: 'business',
                        type: 'business',
                        level: '1',
                        children: []
                    },
                    {
                        label: '传媒事业部',
                        id: 'media',
                        type: 'media',
                        level: '1',
                        children: []
                    },
                    {
                        label: '能源事业部',
                        id: 'station',
                        type: 'station',
                        level: '1',
                        children: []
                    },
                    {
                        label: '其他',
                        id: 'other',
                        type: 'other',
                        level: '1',
                        children: []
                    },
                ],
                tableData: [],
                columns: [
                    {
                        prop: "deptName",
                        label: "单位名称",
                        formatter: (v) => {
                            if (!v["deptName"]) {
                                return 0;
                            }
                            return v["deptName"];
                        },
                    }, {
                        prop: "flowingKmmc",
                        label: "科目名称",
                        formatter: (v) => {
                            if (!v["flowingKmmc"]) {
                                return 0;
                            }
                            return v["flowingKmmc"];
                        },
                    },
                    {
                        prop: "flowingTitle",
                        label: "流水名称",
                        formatter: (v) => {
                            if (!v["flowingTitle"]) {
                                return 0;
                            }
                            return v["flowingTitle"];
                        },
                    },
                    {
                        prop: "flowingMoney",
                        label: "金额",
                        formatter: (v) => {
                            if (!v["flowingMoney"]) {
                                return 0;
                            }
                            return v["flowingMoney"] + "元";
                        },
                    },
                ],
                columns_service: [
                    {
                        prop: "deptName",
                        label: "单位名称",
                        formatter: (v) => {
                            if (!v["deptName"]) {
                                return 0;
                            }
                            return v["deptName"];
                        },
                    }, {
                        prop: "flowingKmmc",
                        label: "科目名称",
                        formatter: (v) => {
                            if (!v["flowingKmmc"]) {
                                return 0;
                            }
                            return v["flowingKmmc"];
                        },
                    },
                    {
                        prop: "flowingTitle",
                        label: "流水名称",
                        formatter: (v) => {
                            if (!v["flowingTitle"]) {
                                return 0;
                            }
                            return v["flowingTitle"];
                        },
                    },
                    {
                        prop: "flowingMoney",
                        label: "金额",
                        formatter: (v) => {
                            if (!v["flowingMoney"]) {
                                return 0;
                            }
                            return v["flowingMoney"] + "元";
                        },
                    },
                ],
                columns_shop: [
                    {
                        prop: "associaName",
                        label: "超市名称",
                        formatter: (v) => {
                            if (!v["associaName"]) {
                                return 0;
                            }
                            return v["associaName"];
                        },
                    },
                    {
                        prop: "marketTypeName",
                        label: "类型",
                        formatter: (v) => {
                            if (!v["marketTypeName"]) {
                                return 0;
                            }
                            return v["marketTypeName"];
                        },
                    },
                    {
                        prop: "onePrice",
                        label: "客单价",
                        formatter: (v) => {
                            if (!v["onePrice"]) {
                                return 0;
                            }
                            return v["onePrice"] + "元";
                        },
                    },
                    {
                        prop: "orderNum",
                        label: "订单数",
                        formatter: (v) => {
                            if (!v["orderNum"]) {
                                return 0;
                            }
                            return v["orderNum"];
                        },
                    },
                    {
                        prop: 'sumMoney', label: '总金额', formatter: v => {
                            if (!v['sumMoney']) {
                                return 0;
                            }
                            return v['sumMoney'];
                        }
                    },
                    {
                        prop: 'time', label: '时间', formatter: v => {
                            if (!v['time']) {
                                return 0;
                            }
                            return v['time'];
                        }
                    },
                ],
                columns_ny: [
                    {
                        prop: "stationName",
                        label: "加油站名称",
                        formatter: (v) => {
                            if (!v["stationName"]) {
                                return 0;
                            }
                            return v["stationName"];
                        },
                    },
                    {
                        prop: "flowingName",
                        label: "类型",
                        formatter: (v) => {
                            if (!v["flowingName"]) {
                                return 0;
                            }
                            return v["flowingName"];
                        },
                    },
                    {
                        prop: "flowingAmount",
                        label: "数量",
                        formatter: (v) => {
                            if (!v["flowingAmount"]) {
                                return 0;
                            }
                            return v["flowingAmount"];
                        },
                    },
                    {
                        prop: "flowingMoney",
                        label: "收入",
                        formatter: (v) => {
                            if (!v["flowingMoney"]) {
                                return 0;
                            }
                            return v["flowingMoney"];
                        },
                    },
                    {
                        prop: 'flowingOrder', label: '订单数', formatter: v => {
                            if (!v['flowingOrder']) {
                                return 0;
                            }
                            return v['flowingOrder'];
                        }
                    }
                ],
                columns_ny_cw: [
                    {
                        prop: "flowingDwmc",
                        label: "单位名称",
                        formatter: (v) => {
                            if (!v["flowingDwmc"]) {
                                return 0;
                            }
                            return v["flowingDwmc"];
                        },
                    }, {
                        prop: "flowingKmmc",
                        label: "科目名称",
                        formatter: (v) => {
                            if (!v["flowingKmmc"]) {
                                return 0;
                            }
                            return v["flowingKmmc"];
                        },
                    },
                    {
                        prop: "flowingTitle",
                        label: "流水名称",
                        formatter: (v) => {
                            if (!v["flowingTitle"]) {
                                return 0;
                            }
                            return v["flowingTitle"];
                        },
                    },
                    {
                        prop: "flowingMoney",
                        label: "金额",
                        formatter: (v) => {
                            if (!v["flowingMoney"]) {
                                return 0;
                            }
                            return v["flowingMoney"] + "元";
                        },
                    },
                    {
                        prop: "initial_update_time",
                        label: "时间",
                        formatter: (v) => {
                            if (!v["initial_update_time"]) {
                                return 0;
                            }
                            return v["initial_update_time"];
                        },
                    },
                ],
                openMore: [],
                noData: [true, true, true],
                params: {
                    flowingDwbh: '',
                    flowingKmbh: '',
                    isExpenditure: null,
                    selectYear: 2021,
                    startTime: '',
                    endTime: '',
                    pageNum: 1,
                    pageSize: 20,
                },
                shopParams: {
                    storeNo: '',
                    selectYear: 2021,
                    pageNum: 1,
                    pageSize: 20,
                },
                KMParams: {
                    endTime: "",
                    flowingKmbh: "",
                    flowingkmName: "",
                    isExpenditure: null,
                    selectYear: 2021,
                    startTime: ""
                },
                NYParams: {
                    companyId: '',
                    stationId: '',
                    startTime: '',
                    endTime: '',
                    pageNum: 1,
                    pageSize: 20,
                },
                GSParams: {
                    deptSjgs: '',
                    endTime: '',
                    isExpenditure: null,
                    selectYear: 2021,
                    startTime: '',
                },
                NYCParams: {
                    companyId: '',
                    stationId: '',
                    endTime: '',
                    selectYear: 2021,
                    startTime: '',
                },
                SZParams: {
                    endTime: "",
                    selectYear: 2021,
                    serviceId: "",
                    startTime: "",
                    storeNo: ""
                },
                GSBParams: {
                    companyIds: "",
                    flowingKmbh: "",
                    isExpenditure: "",
                    selectYear: 2021
                },
                FWQTParams: {
                    serviceId: "",
                    selectYear: 2021,
                    startTime: '',
                    endTime: '',
                    pageNum: 1,
                    pageSize: 20,
                },
                NYCWParams: {
                    deptbh: "",
                    endDate: "",
                    isExpenditure: "",
                    startDate: "",
                    year: 2021
                },
                pageSize: 20,
                charts_title: [[], [], []],
                showOff: false,
                option: [],
                tableColumns: [[], [], []],
                showTable0: false,
                showTable1: false,
                showTable2: false,
                time: [],
                btnQuery: 'all',
                selectYear: 2021,
                node: [],
                total: 0,
                treeFNode: {service: 1, business: 0, media: 0, station: 0, other: 0}
            }
        },
        methods: {
            //选择科目
            selectedChange() {
                this.params['flowingKmbh'] = '';
                this.KMParams['flowingkmName'] = '';
                this.KMParams['flowingKmbh'] = '';
                this.query.forEach(i => {
                    if (this.selected.indexOf(i['kmId']) !== -1) {
                        this.params['flowingKmbh'] += i['kmId'] + ',';
                        this.KMParams['flowingkmName'] += i['kmName'] + ',';
                        this.KMParams['flowingKmbh'] += i['kmId'] + ',';
                    }
                })
            },
            //选择时间段
            timeChange(v) {
                this.params['startTime'] = v[0];
                this.params['endTime'] = v[1];
                this.shopParams['startTime'] = v[0];
                this.shopParams['endTime'] = v[1];
                this.KMParams['startTime'] = v[0];
                this.KMParams['endTime'] = v[1];
                this.GSParams['startTime'] = v[0];
                this.GSParams['endTime'] = v[1];
                this.NYParams['startTime'] = v[0];
                this.NYParams['endTime'] = v[1];
                this.NYCParams['startTime'] = v[0];
                this.NYCParams['endTime'] = v[1];
                this.SZParams['startTime'] = v[0];
                this.SZParams['endTime'] = v[1];
                this.FWQTParams['startTime'] = v[0];
                this.FWQTParams['endTime'] = v[1];
                this.NYCWParams['startDate'] = v[0];
                this.NYCWParams['endDate'] = v[1];
            },
            //选择年份
            selectYearChange(v) {
                this.params['selectYear'] = v;
                this.shopParams['selectYear'] = v;
                this.KMParams['selectYear'] = v;
                this.GSParams['selectYear'] = v;
                this.NYCParams['selectYear'] = v;
                this.SZParams['selectYear'] = v;
                this.FWQTParams['selectYear'] = v;
                this.NYCWParams['year'] = v;
            },
            //翻页
            currentChange(v) {
                this.params['pageNum'] = v;
                this.shopParams['pageNum'] = v;
                this.NYParams['pageNum'] = v;
                this.FWQTParams['pageNum'] = v;
                this.getShowData()
            },
            //一页的条数
            sizeChange(v) {
                this.pageSize = v;
                this.params['pageSize'] = v;
                this.shopParams['pageSize'] = v;
                this.NYParams['pageSize'] = v;
                this.FWQTParams['pageSize'] = v;
                this.getShowData()
            },
            //树 点击复选框
            async checkTree(data, s) {
                this.loading = true;
                this.hidden = false;
                this.node = s['checkedNodes'];
                let arr = {service: 0, business: 1, media: 2, station: 3, other: 4};
                let level = [];
                let type = [];
                if (this.node.length > 0) {
                    let flag = true;
                    this.node.forEach((i) => {
                        if (level.indexOf(i['level']) === -1) {
                            level.push(i['level']);
                        }
                        if (type.indexOf(i['type']) === -1) {
                            type.push(i['type']);
                        }
                    });
                    if (level.indexOf('1') !== -1 && level.indexOf('2') !== -1) {
                        if (data.level === '3') {
                            flag = false;
                        }
                    }
                    if (level.indexOf('3') !== -1) {
                        if (data.level === '1' || data.level === '2') {
                            flag = false;
                        }
                    }
                    if (level.indexOf('3') !== -1 && (level.indexOf('1') !== -1 || level.indexOf('2') !== -1)) {
                        flag = false;
                    }

                    if (!flag) {
                        this.$message.warning("一二级与三级节点不可同时选择");
                        this.$refs.tree.setChecked(data.id, false, false);
                        this.loading = false;
                        return;
                    }
                    if (type.length > 1) {
                        this.$message.warning("不同事业部不能同时选择！");
                        this.$refs.tree.setChecked(data.id, false, false);
                        this.loading = false;
                        return;
                    }
                }
                this.defaultExpandedKeys = type;
                this.params['flowingDwbh'] = '';
                this.shopParams['storeNo'] = '';
                this.GSParams['deptSjgs'] = '';
                this.NYCParams['companyId'] = '';
                this.NYParams['companyId'] = '';
                this.NYParams['stationId'] = '';
                this.NYCParams['stationId'] = '';
                this.SZParams['serviceId'] = '';
                this.SZParams['storeNo'] = '';
                this.GSBParams['companyIds'] = '';
                this.FWQTParams['serviceId'] = '';
                this.NYCWParams["deptbh"] = '';
                if (this.node[0] && this.node[0]['level'] === '1') {
                    if (data["level"] === '1' && !!arr[this.node[0]['id']]) {
                        let treeData = this.DeepCopy(this.treeData);
                        let defaultCheck = this.DeepCopy(this.treeData[arr[data.id]]['children']);
                        defaultCheck.unshift(treeData[arr[data.id]])
                        this.$nextTick(_ => {
                            this.$refs["tree"].setCheckedNodes(defaultCheck);
                            this.node = defaultCheck;
                        })
                    } else {
                        this.$refs.tree.setChecked(this.node[0]['id'], false, false);
                        this.node.shift();
                    }
                }
                if (this.node[0] && this.node[0]['level'] !== '1') {
                    if (data["level"] === '1') {
                        let defaultCheck = this.DeepCopy(this.treeData[arr[data.id]]['children']);
                        this.node = [];
                        defaultCheck.forEach(i => {
                            this.$refs.tree.setChecked(i['id'], false, false);
                        })
                    }
                }
                this.treeFNode[data["type"]]++;
                if (this.treeFNode[data["type"]] % 2 !== 0 && data["level"] === '1') {
                    this.node.push(this.treeData[arr[data['type']]]);
                    this.node.push(...this.treeData[arr[data['type']]]["children"]);
                    this.$nextTick(_ => {
                        this.$refs["tree"].setCheckedNodes(this.node);
                    })
                }
                if (this.node[0] && (this.node[0]['level'] === '2' || this.node[0]['level'] === '1')) {
                    this.node.forEach(i => {
                        let deptDwbh = i.deptDwbh ? i.deptDwbh : '';
                        let deptSystemDwbh = i.deptSystemDwbh ? i.deptSystemDwbh : '';
                        this.params['flowingDwbh'] += deptDwbh + ',';
                        this.GSParams['deptSjgs'] += deptDwbh + ',';
                        this.NYParams['companyId'] += deptDwbh + ',';
                        this.NYCParams['companyId'] += deptSystemDwbh + ',';
                        this.GSBParams['companyIds'] += deptDwbh + ',';
                        this.NYCWParams["deptbh"] += deptDwbh + ',';
                    })
                }
                if (this.node[0] && this.node[0]["level"] === '3') {
                    this.hidden = true;
                    if (this.node[0]["type"] === 'zb') {
                        this.node.forEach(i => {
                            this.shopParams['storeNo'] += i.id + ',';
                            this.SZParams['storeNo'] += i.id + ',';
                        })
                    }
                    if (this.node[0]["type"] === 'station') {
                        this.node.forEach(i => {
                            this.NYCParams['stationId'] += i.stationId + ',';
                            this.NYParams['stationId'] += (i.stationId ? i.stationId : i.deptDwbh) + ',';
                            this.NYCWParams["deptbh"] += i.deptDwbh + ',';
                        })
                    }
                    if (this.node[0]["type"] === 'service') {
                        this.node.forEach(i => {
                            this.SZParams['serviceId'] += i.id + ',';
                            this.FWQTParams['serviceId'] += i.id + ',';
                        })
                    }
                }
                await this.nodeClick(data)
            },
            //全部 收入 支出
            clickQuery(v1) {
                this.btnQuery = v1;
                let t = '';
                if (v1 === 'all') {
                    t = null;
                }
                if (v1 === 'income') {
                    t = 1;
                }
                if (v1 === 'expenditure') {
                    t = 2;
                }
                this.params['isExpenditure'] = t;
                this.KMParams['isExpenditure'] = t;
                this.GSParams['isExpenditure'] = t;
                this.GSBParams['isExpenditure'] = t;
                this.NYCWParams['isExpenditure'] = t;
            },
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
            async nodeClick(v, s) {
                let data = [];
                let type = '';
                if (v.type && v.type === 'service') {
                    const res = await this.$axios.get('/apidata/jt_finance/get_third_company', {params: {serviceCompanyId: v.value}});
                    data = res.data.data;
                    type = 'service';
                }
                if (v.label === "湖北交投中百商业管理有限公司") {
                    const res = await this.$axios.get("/apidata/jt_finance/get_third_shop?formatName=中百超市");
                    data = res.data.data;
                    type = 'zb';
                }
                if (v["level"] === "2" && v.type && v.type === 'station') {
                    let res;
                    if (v.deptSystemDwbh) {
                        res = await this.$axios.get("/apidata/station/station_by_cop", {params: {companyId: v.deptSystemDwbh}});
                        data = res.data.data;
                        data.forEach(i => {
                            i['xBxis'] = i['stationName'];
                            i['yAxis'] = i['stationId'];
                            i['stype'] = 'ny';
                        })
                    } else {
                        res = await this.$axios.get("/apifin/energy/get_station_by_Cop", {
                            params: {
                                companyId: v.deptDwbh,
                                pageNum: 1,
                                pageSize: 1
                            }
                        });
                        data = res.data.data.stationVos;
                        data.forEach(i => {
                            i['xBxis'] = i['deptName'];
                            i['yAxis'] = i['deptDwbh'];
                            i['stype'] = 'cw';
                        })
                    }
                    type = 'station';
                }
                if (!v['children'] || v['children'].length === 0) {
                    data.forEach(i => {
                        let obj = {'level': '3'};
                        i['label'] = i['xBxis'];
                        i['id'] = i['yAxis'];
                        i['type'] = type;
                        Object.assign(i, obj);
                        this.$refs['tree'].append(i, v.id);
                    })
                }
                this.loading = false;
            },
            //维度选择事件
            selectDimension(i) {
                let selected = this.DeepCopy(this.selected);
                this.selected = selected;
                this.getShowData();
            },
            //获取左侧组织架构树数据
            async getTreeData() {
                const res = await this.$axios.get("/apifin/jt_financial/get_tree_data")
                let data = res.data.data;
                let treeData = this.DeepCopy(this.treeData);
                for (let i in data) {
                    let item = data[i];
                    item.forEach(s => {
                        let obj = {'level': "2"};
                        s['label'] = s['deptName'];
                        s['value'] = s['deptSystemDwbh'] ? s['deptSystemDwbh'] : s['deptDwbh'];
                        s['id'] = s['deptSystemDwbh'] ? s['deptSystemDwbh'] : s['deptDwbh'];
                        s['type'] = i;
                        s['stype'] = s['deptSystemDwbh'] ? 'ny' : 'cw';
                        Object.assign(s, obj);
                    })
                }
                this.treeData.forEach(i => {
                    i['children'] = data[i['id']]
                })
                let defaultCheck = this.DeepCopy(this.treeData[0]['children']);
                defaultCheck.unshift(treeData[0])
                this.$nextTick(_ => {
                    this.$refs["tree"].setCheckedNodes(defaultCheck);
                })
                this.node = defaultCheck;
                await this.getShowData();
            },
            //获取维度信息
            async getDimensionData() {
                const res = await this.$axios.get("/apifin/jt_financial/get_subjects_data?financialAccountLevel=1");
                this.query = res.data.data;
                this.query.forEach((i, x) => {
                    if (x < 5) {
                        this.params['flowingKmbh'] += i['kmId'] + ',';
                        this.KMParams['flowingkmName'] += i['kmName'] + ',';
                        this.KMParams['flowingKmbh'] += i['kmId'] + ',';
                        this.GSBParams['flowingKmbh'] += i['kmId'] + ',';
                        this.selected.push(i['kmId']);
                    }
                })
            },
            //获取列表数据
            async getShowData() {
                this.loading = true;
                this.tableData = [];
                if (this.node.length === 0) {
                    this.$message.warning('请选择左侧树形参数！');
                    return '';
                }
                {
                    if (this.node[0] && (this.node[0]["level"] === "2" || this.node[0]["level"] === "1")) {
                        if (this.node[0]['type'] === 'service' || this.node[0]['type'] === "business") {
                            const res = await this.$axios.get('/apifin/jt_financial/get_form_data', {params: this.params})
                            let data = res.data
                            this.tableData = data['financialData']['list']
                            this.total = data['financialData']['total']
                            this.columns = this.columns_service;

                            function getDoubleBar(d) {
                                let label = [];
                                let value = [[], []];
                                d.forEach(i => {
                                    if (label.indexOf(i['xBxis']) === -1) {
                                        label.push(i['xBxis']);
                                    }
                                    if (i['ytwo'] == '收入') {
                                        value[0].push(i['yAxis'])
                                    } else {
                                        value[1].push(i['yAxis'])
                                    }
                                })
                                return [label, value];
                            }

                            const km = await this.$axios.get("/apifin/jt_financial/get_km_money", {params: this.KMParams});
                            let kmd = getDoubleBar(km.data.data);
                            let option_km = {
                                title: {
                                    top: 20,
                                    text: "科目流水",
                                    subtext: "",
                                    x: "center",
                                    textStyle: {
                                        color: "#000000",
                                        fontWeight: 100,
                                        fontSize: 20,
                                    },
                                },
                                tooltip: {
                                    trigger: "axis",
                                    show: true,
                                    axisPointer: {
                                        type: "shadow",
                                    },
                                },
                                legend: {
                                    show: false,
                                },
                                grid: {
                                    left: "3%",
                                    right: "10%",
                                    bottom: "3%",
                                    containLabel: true,
                                },
                                dataZoom: [
                                    {
                                        type: "slider",
                                        show: true,
                                        yAxisIndex: [0],
                                        left: "93%",
                                        width: 10,
                                        start: 0, //数据窗口范围的起始百分比
                                        end: 36,
                                    },
                                ],
                                xAxis: [
                                    {
                                        splitLine: {
                                            show: true,
                                        },
                                        type: "value",
                                        show: true,
                                    },
                                ],
                                yAxis: [
                                    {
                                        type: 'category',
                                        offset: -10,
                                        position: "left",
                                        axisLine: {
                                            show: false
                                        },

                                        axisTick: {
                                            show: false
                                        },
                                        axisLabel: {
                                            show: false,
                                        },
                                        data: kmd[0],
                                    },
                                ],
                                series: [
                                    {
                                        name: "收入",
                                        type: "bar",
                                        barWidth: 5, // 柱子宽度
                                        itemStyle: {
                                            color: "#20D180",
                                        },
                                        data: kmd[1][0],
                                    },
                                    {
                                        name: "支出",
                                        type: "bar",
                                        barWidth: 5, // 柱子宽度
                                        itemStyle: {
                                            color: "#F36C6C",
                                        },
                                        data: kmd[1][1],
                                    },
                                ],
                            };
                            this.$echarts.init(document.getElementById('SADS-0')).setOption(option_km);

                            const gs = await this.$axios.get("/apifin/jt_financial/get_company_money", {params: this.GSParams});
                            let gsd = getDoubleBar(gs.data.data);
                            let option_gs = {
                                title: {
                                    top: 20,
                                    text: "公司流水",
                                    subtext: "",
                                    x: "center",
                                    textStyle: {
                                        color: "#000000",
                                        fontWeight: 100,
                                        fontSize: 20,
                                    },
                                },
                                tooltip: {
                                    trigger: "axis",
                                    show: true,
                                    axisPointer: {
                                        type: "shadow",
                                    },
                                },
                                legend: {
                                    show: false,
                                },
                                grid: {
                                    left: "3%",
                                    right: "10%",
                                    bottom: "3%",
                                    containLabel: true,
                                },
                                dataZoom: [
                                    {
                                        type: "slider",
                                        show: true,
                                        yAxisIndex: [0],
                                        left: "93%",
                                        width: 10,
                                        start: 0, //数据窗口范围的起始百分比
                                        end: 50,
                                    },
                                ],
                                xAxis: [
                                    {
                                        splitLine: {
                                            show: true,
                                        },
                                        type: "value",
                                        show: true,
                                    },
                                ],
                                yAxis: [
                                    {
                                        type: 'category',
                                        offset: -10,
                                        position: "left",
                                        axisLine: {
                                            show: false
                                        },

                                        axisTick: {
                                            show: false
                                        },
                                        axisLabel: {
                                            show: false,
                                        },
                                        data: gsd[0],
                                    },
                                ],
                                series: [
                                    {
                                        name: "收入",
                                        type: "bar",
                                        barWidth: 5, // 柱子宽度
                                        itemStyle: {
                                            color: "#20D180",
                                        },
                                        data: gsd[1][0],
                                    },
                                    {
                                        name: "支出",
                                        type: "bar",
                                        barWidth: 5, // 柱子宽度
                                        itemStyle: {
                                            color: "#F36C6C",
                                        },
                                        data: gsd[1][1],
                                    },
                                ],
                            };
                            this.$echarts.init(document.getElementById('SADS-1')).setOption(option_gs);

                            const gsb = await this.$axios.get('/apifin/jt_financial/get_month_money', {params: this.GSBParams});
                            let gsb_ = getDoubleBar(gsb.data.data);
                            let option_gsb = {
                                title: {
                                    top: 20,
                                    text: "",
                                    subtext: "",
                                    x: "center",
                                    textStyle: {
                                        color: "#000000",
                                        fontWeight: 100,
                                        fontSize: 20,
                                    },
                                },
                                tooltip: {
                                    trigger: "axis",
                                    show: true,
                                    axisPointer: {
                                        type: "shadow",
                                    },
                                },
                                legend: {
                                    show: false,
                                },
                                yAxis: [
                                    {
                                        splitLine: {
                                            show: true,
                                        },
                                        type: "value",
                                        show: true,
                                    },
                                ],
                                xAxis: [
                                    {
                                        type: 'category',
                                        position: "left",
                                        axisLine: {
                                            show: false
                                        },
                                        grid: {
                                            bottom: 20,
                                        },
                                        axisTick: {
                                            show: false
                                        },
                                        axisLabel: {
                                            show: true,
                                        },
                                        data: gsb_[0],
                                    },
                                ],
                                series: [
                                    {
                                        name: "收入",
                                        type: "bar",
                                        barWidth: 12, // 柱子宽度
                                        itemStyle: {
                                            color: "#20D180",
                                        },
                                        data: gsb_[1][0],
                                    },
                                    {
                                        name: "支出",
                                        type: "bar",
                                        barWidth: 12, // 柱子宽度
                                        itemStyle: {
                                            color: "#F36C6C",
                                        },
                                        data: gsb_[1][1],
                                    },
                                ],
                            };
                            this.$echarts.init(document.getElementById('SADS-2')).setOption(option_gsb);
                        }
                        if (this.node[0]['type'] === 'station') {
                            await this.queryStation(2);
                        }
                    }
                }
                {
                    if (this.node[0] && this.node[0]["level"] === "3") {
                        if (this.node[0]["type"] === 'zb') {
                            const res = await this.$axios('/apidata/jt_finance/get_shop_table', {params: this.shopParams});
                            let data = res.data;
                            this.tableData = data.list;
                            this.total = data.total;
                            this.columns = this.columns_shop;
                            await this.queryFZLastChart('zb');
                        }
                        if (this.node[0]["type"] === 'station') {
                            await this.queryStation(3)
                        }
                        if (this.node[0]['type'] === 'service') {
                            await this.queryFZLastChart('service');
                        }
                    }
                }
                this.loading = false;
            },
            async queryFZLastChart(v) {
                for (let i = 0; i < 3; i++) {
                    let id = 'SADS-' + i
                    this.$echarts.init(document.getElementById(id)).dispose();
                }
                if (v === 'service') {
                    this.columns = [];
                    const table = await this.$axios.get("/apidata/jt_finance/get_service_table", {params: this.FWQTParams});
                    this.tableData = table.data.list;
                    this.total = table.data.total;
                    this.columns = this.columns_shop

                    const jydy = await this.axios.get("/apidata/jt_finance/get_business_money", {params: this.SZParams});
                    let jydy_ = jydy.data.data
                    let opt1 = {
                        title: {
                            top: 20,
                            text: " ",
                            subtext: "",
                            x: "center",
                            textStyle: {
                                color: "#000000",
                                fontWeight: 100,
                                fontSize: 20,
                            },
                        },
                        tooltip: {
                            trigger: "axis",
                            show: true,
                            axisPointer: {
                                type: "shadow",
                            },
                        },
                        legend: {
                            show: false,
                        },
                        grid: {
                            left: "3%",
                            right: "10%",
                            bottom: "3%",
                            containLabel: true,
                        },
                        dataZoom: [
                            {
                                type: "slider",
                                show: true,
                                yAxisIndex: [0],
                                left: "93%",
                                width: 10,
                                start: 0, //数据窗口范围的起始百分比
                                end: 36,
                            },
                        ],
                        xAxis: [
                            {
                                splitLine: {
                                    show: true,
                                },
                                type: "value",
                                show: true,
                            },
                        ],
                        yAxis: [
                            {
                                type: 'category',
                                offset: -10,
                                position: "left",
                                axisLine: {
                                    show: false
                                },

                                axisTick: {
                                    show: false
                                },
                                axisLabel: {
                                    show: false,
                                },
                                data: this.mySet(jydy_, 'xBxis'),
                            },
                        ],
                        series: [
                            {
                                name: "收入",
                                type: "bar",
                                barWidth: 12, // 柱子宽度
                                itemStyle: {
                                    color: "#20D180",
                                },
                                data: this.mySet(jydy_, 'yAxis'),
                            }
                        ],
                    };
                    this.$echarts.init(document.getElementById('SADS-0')).setOption(opt1);

                    const fl = await this.axios.get("/apidata/jt_finance/get_type_money", {params: this.SZParams});
                    let fl_ = fl.data.data
                    let opt2 = {
                        title: {
                            top: 20,
                            text: " ",
                            subtext: "",
                            x: "center",
                            textStyle: {
                                color: "#000000",
                                fontWeight: 100,
                                fontSize: 20,
                            },
                        },
                        tooltip: {
                            trigger: "axis",
                            show: true,
                            axisPointer: {
                                type: "shadow",
                            },
                        },
                        legend: {
                            show: false,
                        },
                        grid: {
                            left: "3%",
                            right: "10%",
                            bottom: "3%",
                            containLabel: true,
                        },
                        dataZoom: [
                            {
                                type: "slider",
                                show: true,
                                yAxisIndex: [0],
                                left: "93%",
                                width: 10,
                                start: 0, //数据窗口范围的起始百分比
                                end: 36,
                            },
                        ],
                        xAxis: [
                            {
                                splitLine: {
                                    show: true,
                                    lineStyle: {
                                        type: "dashed", //设置网格线类型 dotted：虚线   solid:实线
                                        width: 1,
                                    },
                                },
                                type: "value",
                                show: true,
                            },
                        ],
                        yAxis: [
                            {
                                type: 'category',
                                offset: -10,
                                position: "left",
                                axisLine: {
                                    show: false
                                },

                                axisTick: {
                                    show: false
                                },
                                axisLabel: {
                                    show: false,
                                },
                                data: this.mySet(fl_, 'xBxis'),
                            },
                        ],
                        series: [
                            {
                                name: "收入",
                                type: "bar",
                                barWidth: 12, // 柱子宽度
                                itemStyle: {
                                    color: "#20D180",
                                },
                                data: this.mySet(fl_, 'yAxis'),
                            }
                        ],
                    };
                    this.$echarts.init(document.getElementById('SADS-1')).setOption(opt2);
                }

                if (v === 'zb') {
                    /*let param = this.DeepCopy(this.FWQTParams);
                    param['storeNo'] = this.SZParams['storeNo']
                    const table = await this.$axios.get("/apidata/jt_finance/get_shop_table", {params: param});
                    console.log(table)*/
                }
                const res = await this.$axios.get('/apidata/jt_finance/get_month_money', {params: this.SZParams})
                let data = res.data.data;
                let option = {
                    tooltip: {
                        show: true,
                        confine: true,
                        trigger: "axis",
                        axisPointer: {
                            type: "shadow"
                        },
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
                            data: this.mySet(data, 'xBxis'),
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
                            name: "元",
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
                            data: this.mySet(data, 'yAxis'),
                            type: "bar",
                            itemStyle: {
                                color: "#20D180",
                            }
                        }
                    ]
                };
                this.$echarts.init(document.getElementById('SADS-2')).setOption(option);
            },
            async queryStation(s) {
                for (let i = 0; i < 3; i++) {
                    let id = 'SADS-' + i;
                    this.$echarts.init(document.getElementById(id)).dispose();
                }
                if (this.node[0]['level'] === '2' || this.node[0]['level'] === '1') {
                    const res = await this.$axios.get("/apifin/energy/get_station_by_Cop", {params: this.NYParams});
                    let da = res.data.data;
                    this.total = da['stationFlowingVoPageInfo'].total;
                    this.columns = this.columns_ny_cw;
                    this.tableData = da['stationFlowingVoPageInfo'].list;

                    let param = this.DeepCopy(this.NYParams);
                    param['flowingKmbh'] = this.KMParams['flowingKmbh']
                    param['flowingkmName'] = this.KMParams['flowingkmName']
                    const resc = await this.$axios.get("/apifin/jt_financial/get_bar_cw", {params: param});
                    let data = resc.data.data;

                    function getDoubleBar(d) {
                        let label = [];
                        let value = [[], []];
                        d.forEach(i => {
                            if (label.indexOf(i['xBxis']) === -1) {
                                label.push(i['xBxis']);
                            }
                            if (i['ytwo'] == '收入') {
                                value[0].push(i['yAxis'] ? i['yAxis'] : 0)
                            } else {
                                value[1].push(i['yAxis'] ? i['yAxis'] : 0)
                            }
                        })
                        return [label, value];
                    }

                    let opt = [
                        {
                            title: {
                                top: 20,
                                text: " ",
                                subtext: "",
                                x: "center",
                                textStyle: {
                                    color: "#000000",
                                    fontWeight: 100,
                                    fontSize: 20,
                                },
                            },
                            tooltip: {
                                trigger: "axis",
                                show: true,
                                axisPointer: {
                                    type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
                                },
                            },
                            legend: {
                                show: false,
                            },
                            grid: {
                                left: "3%",
                                right: "10%",
                                bottom: "3%",
                                containLabel: true,
                            },
                            dataZoom: [
                                {
                                    type: "slider",
                                    show: true,
                                    yAxisIndex: [0],
                                    left: "93%",
                                    width: 10,
                                    start: 0, //数据窗口范围的起始百分比
                                    end: 36,
                                },
                            ],
                            xAxis: [
                                {
                                    splitLine: {
                                        show: true,
                                        lineStyle: {
                                            type: "dashed", //设置网格线类型 dotted：虚线   solid:实线
                                            width: 1,
                                        },
                                    },
                                    type: "value",
                                    show: true,
                                },
                            ],
                            yAxis: [
                                {
                                    type: 'category',
                                    offset: -10,
                                    position: "left",
                                    axisLine: {
                                        show: false
                                    },

                                    axisTick: {
                                        show: false
                                    },
                                    axisLabel: {
                                        show: false,
                                    },
                                    data: getDoubleBar(data[0]['gs'])[0],
                                },
                            ],
                            series: [
                                {
                                    name: "收入",
                                    type: "bar",
                                    barWidth: 5, // 柱子宽度
                                    itemStyle: {
                                        color: "#20D180",
                                    },
                                    data: getDoubleBar(data[0]['gs'])[1][0],
                                },
                                {
                                    name: "支出",
                                    type: "bar",
                                    barWidth: 5, // 柱子宽度
                                    itemStyle: {
                                        color: "#F36C6C",
                                    },
                                    data: getDoubleBar(data[0]['gs'])[1][1],
                                }
                            ],
                        },
                        {
                            title: {
                                top: 20,
                                text: " ",
                                subtext: "",
                                x: "center",
                                textStyle: {
                                    color: "#000000",
                                    fontWeight: 100,
                                    fontSize: 20,
                                },
                            },
                            tooltip: {
                                trigger: "axis",
                                show: true,
                                axisPointer: {
                                    type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
                                },
                            },
                            legend: {
                                show: false,
                            },
                            grid: {
                                left: "3%",
                                right: "10%",
                                bottom: "3%",
                                containLabel: true,
                            },
                            dataZoom: [
                                {
                                    type: "slider",
                                    show: true,
                                    yAxisIndex: [0],
                                    left: "93%",
                                    width: 10,
                                    start: 0, //数据窗口范围的起始百分比
                                    end: 36,
                                },
                            ],
                            xAxis: [
                                {
                                    splitLine: {
                                        show: true,
                                        lineStyle: {
                                            type: "dashed", //设置网格线类型 dotted：虚线   solid:实线
                                            width: 1,
                                        },
                                    },
                                    type: "value",
                                    show: true,
                                },
                            ],
                            yAxis: [
                                {
                                    type: 'category',
                                    offset: -10,
                                    position: "left",
                                    axisLine: {
                                        show: false
                                    },

                                    axisTick: {
                                        show: false
                                    },
                                    axisLabel: {
                                        show: false,
                                    },
                                    data: getDoubleBar(data[0]['km'])[0],
                                },
                            ],
                            series: [
                                {
                                    name: "收入",
                                    type: "bar",
                                    barWidth: 5, // 柱子宽度
                                    itemStyle: {
                                        color: "#20D180",
                                    },
                                    data: getDoubleBar(data[0]['km'])[1][0],
                                }, {
                                    name: "支出",
                                    type: "bar",
                                    barWidth: 5, // 柱子宽度
                                    itemStyle: {
                                        color: "#F36C6C",
                                    },
                                    data: getDoubleBar(data[0]['km'])[1][1],
                                }
                            ],
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
                                            car = i["value"] + " 元";
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
                                    data: getDoubleBar(data[0]['yd'])[0],
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
                                    name: "元",
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
                                }
                            ],
                            series: [
                                {
                                    name: "收入",
                                    data: getDoubleBar(data[0]['yd'])[1][0],
                                    type: "bar",
                                    itemStyle: {color: "#20D180",}
                                },
                                {
                                    name: "支出",
                                    data: getDoubleBar(data[0]['yd'])[1][1],
                                    type: "bar",
                                    itemStyle: {color: "#F36C6C",}
                                }
                            ]
                        }
                    ];
                    for (let i = 0; i < 3; i++) {
                        let id = 'SADS-' + i;
                        this.$echarts.init(document.getElementById(id)).setOption(opt[i]);
                    }
                }
                let td_ = [];
                if (this.node[0]['level'] === '3') {
                    if (this.node[0]['stype'] === 'ny') {
                        const res = await this.$axios.get("/apidata/station/station_data_all", {params: this.NYParams});
                        let res_ = res.data.data;
                        this.total = res_['pageInfo'].total;
                        this.columns = this.columns_ny;
                        this.tableData = res_['pageInfo'].list;

                        let param = this.DeepCopy(this.NYCWParams);
                        param['flowingKmbh'] = this.KMParams['flowingKmbh']
                        param['flowingkmName'] = this.KMParams['flowingkmName']
                        const td = await this.$axios.get("/apidata/station/station_data_finance", {params: param});
                        td_ = td.data.data;

                        function set(d) {
                            let arr = [];
                            d.forEach(i => {
                                for (let j in i) {
                                    arr.push({
                                        name: j,
                                        value: i[j]
                                    })
                                }
                            })
                            return arr;
                        }

                        let opt = [
                            {
                                legend: {
                                    orient: "vertical",
                                    left: 10,
                                    top: "center"
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
                                        data: set(td_['map1'])
                                    }
                                ]
                            },
                            {
                                legend: {
                                    orient: "vertical",
                                    left: 10,
                                    top: "center"
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
                                        data: set(td_['map2'])
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
                                                car = i["value"] + " 元";
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
                                        data: this.mySet(td_['stationTimeCountVos'], 'yearMonth'),
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
                                        name: "元",
                                        nameTextStyle: {
                                            color: "#20D180"
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
                                        name: "收入",
                                        data: this.mySet(td_['stationTimeCountVos'], 'totalSales'),
                                        type: "bar",
                                        itemStyle: {color: "#20D180",}
                                    }
                                ]
                            }
                        ];
                        for (let i = 0; i < 3; i++) {
                            let id = 'SADS-' + i;
                            this.$echarts.init(document.getElementById(id)).setOption(opt[i]);
                        }
                    }
                    if (this.node[0]['stype'] === 'cw') {
                        const res = await this.$axios.get("/apifin/energy/get_station_by_flowing", {params: this.NYParams});
                        let res_ = res.data.data;
                        this.total = res_['stationFlowingVoPageInfo'].total;
                        this.columns = this.columns_ny_cw;
                        this.tableData = res_['stationFlowingVoPageInfo'].list;

                        let param = this.DeepCopy(this.NYParams);
                        param['flowingKmbh'] = this.KMParams['flowingKmbh']
                        param['flowingkmName'] = this.KMParams['flowingkmName']
                        const resc = await this.$axios.get("/apifin/jt_financial/get_bar_cw", {params: param});
                        let data = resc.data.data;

                        function getDoubleBar(d) {
                            let label = [];
                            let value = [[], []];
                            d.forEach(i => {
                                if (label.indexOf(i['xBxis']) === -1) {
                                    label.push(i['xBxis']);
                                }
                                if (i['ytwo'] == '收入') {
                                    value[0].push(i['yAxis'] ? i['yAxis'] : 0)
                                } else {
                                    value[1].push(i['yAxis'] ? i['yAxis'] : 0)
                                }
                            })
                            return [label, value];
                        }

                        let opt = [
                            {
                                title: {
                                    top: 20,
                                    text: " ",
                                    subtext: "",
                                    x: "center",
                                    textStyle: {
                                        color: "#000000",
                                        fontWeight: 100,
                                        fontSize: 20,
                                    },
                                },
                                tooltip: {
                                    trigger: "axis",
                                    show: true,
                                    axisPointer: {
                                        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
                                    },
                                },
                                legend: {
                                    show: false,
                                },
                                grid: {
                                    left: "3%",
                                    right: "10%",
                                    bottom: "3%",
                                    containLabel: true,
                                },
                                dataZoom: [
                                    {
                                        type: "slider",
                                        show: true,
                                        yAxisIndex: [0],
                                        left: "93%",
                                        width: 10,
                                        start: 0, //数据窗口范围的起始百分比
                                        end: 36,
                                    },
                                ],
                                xAxis: [
                                    {
                                        splitLine: {
                                            show: true,
                                            lineStyle: {
                                                type: "dashed", //设置网格线类型 dotted：虚线   solid:实线
                                                width: 1,
                                            },
                                        },
                                        type: "value",
                                        show: true,
                                    },
                                ],
                                yAxis: [
                                    {
                                        type: 'category',
                                        offset: -10,
                                        position: "left",
                                        axisLine: {
                                            show: false
                                        },

                                        axisTick: {
                                            show: false
                                        },
                                        axisLabel: {
                                            show: false,
                                        },
                                        data: getDoubleBar(data[0]['gs'])[0],
                                    },
                                ],
                                series: [
                                    {
                                        name: "收入",
                                        type: "bar",
                                        barWidth: 5, // 柱子宽度
                                        itemStyle: {
                                            color: "#20D180",
                                        },
                                        data: getDoubleBar(data[0]['gs'])[1][0],
                                    },
                                    {
                                        name: "支出",
                                        type: "bar",
                                        barWidth: 5, // 柱子宽度
                                        itemStyle: {
                                            color: "#F36C6C",
                                        },
                                        data: getDoubleBar(data[0]['gs'])[1][1],
                                    }
                                ],
                            },
                            {
                                title: {
                                    top: 20,
                                    text: " ",
                                    subtext: "",
                                    x: "center",
                                    textStyle: {
                                        color: "#000000",
                                        fontWeight: 100,
                                        fontSize: 20,
                                    },
                                },
                                tooltip: {
                                    trigger: "axis",
                                    show: true,
                                    axisPointer: {
                                        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
                                    },
                                },
                                legend: {
                                    show: false,
                                },
                                grid: {
                                    left: "3%",
                                    right: "10%",
                                    bottom: "3%",
                                    containLabel: true,
                                },
                                dataZoom: [
                                    {
                                        type: "slider",
                                        show: true,
                                        yAxisIndex: [0],
                                        left: "93%",
                                        width: 10,
                                        start: 0, //数据窗口范围的起始百分比
                                        end: 36,
                                    },
                                ],
                                xAxis: [
                                    {
                                        splitLine: {
                                            show: true,
                                            lineStyle: {
                                                type: "dashed", //设置网格线类型 dotted：虚线   solid:实线
                                                width: 1,
                                            },
                                        },
                                        type: "value",
                                        show: true,
                                    },
                                ],
                                yAxis: [
                                    {
                                        type: 'category',
                                        offset: -10,
                                        position: "left",
                                        axisLine: {
                                            show: false
                                        },

                                        axisTick: {
                                            show: false
                                        },
                                        axisLabel: {
                                            show: false,
                                        },
                                        data: getDoubleBar(data[0]['km'])[0],
                                    },
                                ],
                                series: [
                                    {
                                        name: "收入",
                                        type: "bar",
                                        barWidth: 5, // 柱子宽度
                                        itemStyle: {
                                            color: "#20D180",
                                        },
                                        data: getDoubleBar(data[0]['km'])[1][0],
                                    }, {
                                        name: "支出",
                                        type: "bar",
                                        barWidth: 5, // 柱子宽度
                                        itemStyle: {
                                            color: "#F36C6C",
                                        },
                                        data: getDoubleBar(data[0]['km'])[1][1],
                                    }
                                ],
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
                                                car = i["value"] + " 元";
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
                                        data: getDoubleBar(data[0]['yd'])[0],
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
                                        name: "元",
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
                                    }
                                ],
                                series: [
                                    {
                                        name: "收入",
                                        data: getDoubleBar(data[0]['yd'])[1][0],
                                        type: "bar",
                                        itemStyle: {color: "#20D180",}
                                    },
                                    {
                                        name: "支出",
                                        data: getDoubleBar(data[0]['yd'])[1][1],
                                        type: "bar",
                                        itemStyle: {color: "#F36C6C",}
                                    }
                                ]
                            }
                        ];
                        for (let i = 0; i < 3; i++) {
                            let id = 'SADS-' + i;
                            this.$echarts.init(document.getElementById(id)).setOption(opt[i]);
                        }
                    }
                }
            },
            //重置列数据
            async resetColumns() {
                await this.getTreeData();
                await this.getDimensionData();
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
                                type: "bar",
                                itemStyle: {
                                    color: "#20D180",
                                }
                            },
                            {
                                data: this.separate(serviceMonthAndMoney)[1],
                                type: "bar",
                                yAxisIndex: "1",
                                itemStyle: {
                                    color: "#F36C6C",
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
                    /* let j = i["xBxis"].split('');
                     let n = j.splice(0, 4);
                     let y = n.join('') + '-' + j.join('');*/
                    a1.push(i["xBxis"]);
                    a2.push(i["yAxis"]);
                });
                return [a1, a2];
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
            // await this.getShowData();
            // this.showMoreBtnType();
            this.loading = false;
        },
        watch: {
            filterText(val) {
                this.$refs.tree.filter(val);
            }
        },
    }
</script>

<style scoped>

</style>