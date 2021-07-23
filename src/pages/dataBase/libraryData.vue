<template>
    <div id="box" v-loading="loading" element-loading-text="正在加载中……">

        <div class="dateBaseShow" v-if="visible">
            <div class="header">
                <div class="header-content">
                    <h2>数据库</h2>
                    <div class="header-info">
                        <div class="header-infoMiddle">
                            <el-breadcrumb separator-class="el-icon-arrow-right">
                                <el-breadcrumb-item>现有数据库<span class="bold">{{dataBaseNames.length}}</span>个
                                </el-breadcrumb-item>
                                <el-breadcrumb-item>库数据总量<span class="bold">{{statisticsData.sumRows}}</span>条
                                </el-breadcrumb-item>
                                <el-breadcrumb-item>处理数据条数<span class="bold">{{statisticsData.summoreTimes}}</span>条
                                </el-breadcrumb-item>
                                <el-breadcrumb-item>获取数据条数<span class="bold">{{statisticsData.sumRowshandleNumber}}</span>条
                                </el-breadcrumb-item>
                            </el-breadcrumb>
                        </div>
                    </div>
                </div>
            </div>
            <div class="databaseNum">
                <ul class="item">
                    <li v-for="(item,index) in dataBaseNames" :key="index" @click="queryE(item,index)"
                        @mouseover="addClass(index)" @mouseleave="removeClass(index)"
                        :class="(hover&&(index === current))?'hoverStyle':''">
                        <div class="space">
                            <img :src="require('../../assets/dataBase/' + item.tableSchema + '.png')" alt="图片无法加载">
                            <div class="subItem">
                                <span>库：{{item.dataBaseNotes}}</span>
                                <span>库简称：{{item.tableSchema}}</span>
                                <span>库数据量：{{item.numRows}}条</span>
                                <span :title="item.updateTime">更新时间：{{item.updateTime}}</span>
                                <span>更新次数：{{item.moreTimes}}次</span>
                                <span>处理数据条数：{{item.handleNumber}}条</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <div class="dateTableShow" v-if="visible1">
            <div class="header">
                <el-button type="primary" icon="el-icon-arrow-left" class="back" @click="back1()">返回</el-button>
                <div class="header-content">
                    <h2>数据表</h2>
                    <div class="header-info">
                        <div class="header-infoLeft">
                            <el-select v-model="value" filterable placeholder="请选择查看的数据库">
                                <el-option
                                        v-for="(item,index) in dataBaseNames"
                                        :key="index"
                                        :value="item['dataBaseNotes']"
                                        @click.native="getValue(item, index)"
                                >
                                </el-option>
                            </el-select>
                        </div>
                        <div class="header-infoMiddle">
                            <el-breadcrumb separator-class="el-icon-arrow-right">
                                <el-breadcrumb-item>
                                    <span class="bold">{{dataBaseNames[select]['dataBaseNotes']}}</span>
                                </el-breadcrumb-item>
                                <el-breadcrumb-item>
                                    现有数据表<span class="bold">{{dataBaseTable.length}}</span>个
                                </el-breadcrumb-item>
                                <el-breadcrumb-item>表数据总量<span class="bold">{{dataCountNum1}}</span>条
                                </el-breadcrumb-item>
                            </el-breadcrumb>
                        </div>
                    </div>
                </div>
            </div>
            <div class="datatableNum">
                <ul class="item">
                    <li v-for="(item,index) in dataBaseTable" :key="index" @click="queryD(item,index,true)"
                        @mouseover="addClass(index)" @mouseleave="removeClass(index)"
                        :class="(hover&&(index === current))?'hoverStyle':''">
                        <div class="space">
                            <img src="../../assets/dataBase/table.png" alt="图片无法加载">
                            <div class="subItem">
                                <span :title="item.tableName">表名：{{item.tableName}}</span>
                                <span :title="item.tableNotes">注释：{{item.tableNotes}}</span>
                                <span>表数据量：{{item.numRows}}条</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <my-dialog :visible.sync="visible2" width="1200px" height="615px">

            <div slot="title" style="text-align: left">
                <el-button type="primary" icon="el-icon-arrow-left" class="backButton" @click="back2()">返回</el-button>
                <span id="title_"></span>(数据量<span style="font-weight: bold">{{numRows}}</span>条)
            </div>

            <div style="width: 100%; height: 500px" v-if="visible2">
                <my-table-base height="500px"
                               :search="false"
                               chooseItem="single"
                               :gridIndex="true"
                               :pagination="true"
                               :columns="columns"
                               :tableData="tableData"
                               @size-change="handleSizeChange"
                               @current-change="handleCurrentChange"
                               :current-page="param.pageNum"
                               :pageSizes="pageSizes"
                               :pageSize="param.pageSize"
                               layout="total, sizes, prev, pager, next, jumper"
                               :totalNum='dataNum'
                >
                </my-table-base>
            </div>
        </my-dialog>

    </div>
</template>

<script>
    import "./libraryData.less"
    import MyDialog from "../../components/common/myDialog";
    import MyTableBase from "../../components/common/myTableBase";

    export default {
        name: "libraryData",
        components: {MyTableBase, MyDialog},

        data() {
            return {
                value: '',
                current: '',
                hover: false,
                numRows: '',
                title: '',
                loading: false,
                select: '',
                select1: '',
                dataBaseNames: [],
                seleteddateBase: [],
                dataBaseTable: [],
                tableData: [],
                dataNum: '',
                visible: true,
                visible1: false,
                visible2: false,
                columns: [],
                param: {
                    pageNum: 1,
                    pageSize: 10,
                    tableName: []
                },
                pageSizes: [10, 20, 30, 40],
                dataCountNum: 0,
                dataCountNum1: 0,
                statisticsData: {}
            }
        },
        methods: {
            getValue(item, index) {
                this.queryE(item, index);
            },
            async queryE(v, index) {
                this.loading = true;
                this.hover = false;
                let base = {
                    "fwql": "/four/get_table_data",
                    "newjtdata": "/five/get_table_data",
                    "soa": "/six/get_table_data",
                    "LC1019999": "/two/get_two_table",
                    'smart_business': "/seven/get_table_data",
                    "smart_release": "/eight/get_table_data",
                    "smart_report": "/nine/get_table_data",
                    "jtfinance": "/ten/get_table_data",
                    "BUSINESS": "/thirteen/get_two_table",
                    "pigxx_contract": "/eleven/get_table_data",
                    "pigxx_contract2": "/fourteen/get_table_data",
                    "pigxx_jt": "/twelve/get_table_data",
                };
                this.select = index;
                let data = [];
                let arr = [];
                this.dataCountNum1 = 0;
                const res = await this.$axios.get("/apibase" + base[v['tableSchema']]);
                this.dataBaseTable = data = res.data.data;
                data.forEach((i, index) => {
                    arr[index] = i.numRows;
                });
                arr.forEach(i => {
                    this.dataCountNum1 += Number(i);
                });
                this.visible = false;
                this.visible1 = true;
                this.loading = false;
            },
            addClass(index) {
                this.current = index;
                this.hover = true
            },
            removeClass(index) {
                this.hover = false
            },
            back1() {
                this.visible = true;
                this.visible1 = false;
            },
            async queryD(v, index, open) {
                this.loading = true;
                this.hover = false;
                let base1 = {
                    "fwql": "/four/get_all_data",
                    "newjtdata": "/five/get_all_data",
                    "soa": "/six/get_all_data",
                    "LC1019999": "/two/get_all_table_data",
                    'smart_business': "/seven/get_all_data",
                    "smart_release": "/eight/get_all_data",
                    "smart_report": "/nine/get_all_data",
                    "jtfinance": "/ten/get_all_data",
                    "BUSINESS": "thirteen/get_all_table_data",
                    "pigxx_contract": "/eleven/get_all_data",
                    "pigxx_contract2": "/fourteen/get_all_data",
                    "pigxx_jt": "/twelve/get_all_data"
                };
                this.select1 = index;
                let data = [];
                this.param["tableName"] = v["tableName"];
                if (open) {
                    this.param["pageSize"] = 10;
                    this.param["pageNum"] = 1;
                }
                const res = await this.$axios.get('/apibase' + base1[this.dataBaseNames[this.select]['tableSchema']], {params: this.param});
                this.visible2 = true;
                this.tableData = data = res.data.list;
                this.dataNum = res.data.total;
                this.numRows = this.dataBaseTable[this.select1]['numRows'];
                let str = [];
                data.forEach(i => {
                    for (let k in i) {
                        str.push(k);
                    }
                });
                this.columns = [];
                this.mySet(str).forEach(i => {
                    this.columns.push({
                        label: i,
                        prop: i,
                        formatter: v => {
                            return v[i] ? v[i] : '/';
                        }
                    });
                });
                setTimeout(v => {
                    document.getElementById('title_').innerHTML = '<span>(<span style="font-weight: bold">' + this.dataBaseNames[this.select]['dataBaseNotes'] + '</span>数据库)' + this.dataBaseTable[this.select1]['tableName'] + '</span>'
                }, 100);
                this.loading = false;
            },

            back2() {
                this.visible2 = false;
                this.visible1 = true;
            },

            handleSizeChange(val) {
                this.param.pageSize = val;
                this.queryD(this.dataBaseTable[this.select1], this.select1);
                this.$emit('size-change', val);
            },

            handleCurrentChange(val) {
                this.param.pageNum = val;
                this.queryD(this.dataBaseTable[this.select1], this.select1);
                this.$emit('current-change', val);
            },
        },
        created() {
            this.loading = true;
            this.dataCountNum = 0;
            this.$axios.get("/apibase/one/get_datebase_data").then(res => {
                let data = [];
                let arr = [];
                this.dataBaseNames = data = res.data.data;
                data.forEach((i, index) => {
                    arr[index] = i.numRows;
                    this.dataCountNum += Number(arr[index]);
                });
                this.loading = false;
            })
            this.$axios.get("/apibase/one/get_datebase_data_ts").then(res => {
                this.statisticsData = res.data;
            })
        },
    }
</script>

<style scoped lang="less">

</style>