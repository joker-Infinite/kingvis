<template>
    <div id="box" v-loading="loading" element-loading-text="正在加载中……">

        <div class="dateBaseShow" v-if="visible">
            <div class="header">
                <div class="header-content clearfix">
                    <div class="header-left">
                        <h2>数据库</h2>
                        <el-breadcrumb separator-class="el-icon-arrow-right">
                            <el-breadcrumb-item>现有数据库<span class="bold">{{dataBaseNames.length}}</span>个
                            </el-breadcrumb-item>
                            <el-breadcrumb-item>数据总量<span class="bold">{{dataCountNum}}</span>条</el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>
                </div>
            </div>
            <div class="databaseNum">
                <ul class="item">
                    <li v-for="(item,index) in dataBaseNames" :key="index" @click="queryE(item,index)"
                        @mouseover="addClass(index)" @mouseleave="removeClass(index)"
                        :class="(hover&&(index === current))?'hoverStyle':''">
                        <div class="space">
                            <img src="../../assets/dataBase/fwql.png" alt="图片无法加载">
                            <div class="subItem">
                                <span>库名：{{item.tableSchema}}</span>
                                <span>注释：{{item.dataBaseNotes}}</span>
                                <span>表中数据量：{{item.numRows}}</span>
                                <span>更新时间：{{item.updateTime}}</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <div class="dateTableShow" v-if="visible1">
            <div class="header">
                <el-button type="primary" icon="el-icon-arrow-left" class="back" @click="back1()">返回</el-button>
                <div class="header-content clearfix">
                    <div class="header-left">
                        <h2>数据表</h2>
                        <el-breadcrumb separator-class="el-icon-arrow-right">
                            <el-breadcrumb-item><span
                                    class="bold">{{dataBaseNames[select]['tableSchema']}}数据库</span>中现有数据表<span
                                    class="bold">{{dataBaseTable.length}}</span>个
                            </el-breadcrumb-item>
                            <el-breadcrumb-item>数据总量<span class="bold">{{dataCountNum1}}</span>条</el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>
                    <div class="header-right">
                        <div @click="openValue">
                            <el-input clearable type="text" v-model="value" placeholder="请选择需要查看的数据库" ></el-input>
                        </div>
                        <div class="list" v-show="show" >
                            <ul>
                                <li @click="getValue(item,index)" v-for="(item,index) in dataBaseNames" :key="index">
                                    {{item['tableSchema']}}
                                </li>
                            </ul>
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
                                <span>表名：{{item.tableName}}</span>
                                <span>注释：{{item.tableNotes}}</span>
                                <span>数据量：{{item.numRows}}</span>
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
    import MyDialog from "../../components/common/myDialog";
    import MyTableBase from "../../components/common/myTableBase";

    export default {
        name: "libraryData",
        components: {MyTableBase, MyDialog},

        data() {
            return {
                isIcon: false,
                value: '',
                show: false,
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
            }
        },
        methods: {
            openValue() {
                this.show = !this.show;
            },
            getValue(item, index) {
                this.isIcon = true;
                this.show = false;
                this.loading = true;
                this.queryE(item, index);
                this.loading = false;
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
                    "pigxx_jt": "/ten/get_table_data",
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
                // console.log(index);
                this.hover = true
            },
            removeClass(index) {
                this.hover = false
            },
            back1() {
                this.show = false;
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
                    "pigxx_jt": "/ten/get_all_data",
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
                    document.getElementById('title_').innerHTML = '<span>(<span style="font-weight: bold">' + this.dataBaseNames[this.select]['tableSchema'] + '</span>数据库)' + this.dataBaseTable[this.select1]['tableName'] + '</span>'
                }, 100)
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
        }
    }
</script>

<style scoped lang="less">
    #box {
        height: 100%;
        margin: 0 3px 0 10px;

        .dateBaseShow, .dateTableShow {
            height: 97%;
            margin: 20px 15px 20px 10px;
            background-color: rgba(255, 255, 255, .9);
            overflow-y: scroll;
            overflow-x: hidden;

            .header {
                padding: 20px 40px;
                background-color: #fff;
                box-shadow: 0 0 5px #888;
                position: sticky;
                top: 0;

                .backButton {
                    margin-bottom: 10px;
                }

                .header-content {
                    margin-top: 20px;
                    position: relative;
                    zoom: 1;

                    .header-left {
                        float: left;
                        display: flex;
                        flex-direction: column;

                        .el-breadcrumb {
                            padding-top: 20px;
                            font-size: 18px !important;

                            .bold {
                                font-weight: bold;
                                color: #000;
                            }
                        }
                    }

                    .header-right {
                        position: absolute;
                        top: 0;
                        left: 600px;
                        z-index: 1;
                        float: left;
                        padding-left: 50px;
                        padding-top: 30px;

                        .list {
                            ul {
                                border: 1px solid #ccc;
                                li {
                                    list-style: none;
                                    width: 217px;
                                    height: 30px;
                                    cursor: pointer;
                                    line-height: 30px;
                                    padding-left: 10px;
                                    font-size: 14px;
                                    background-color: #fff;
                                    color: #77c;
                                }

                                li:hover {
                                    background-color: #cccccc;
                                }
                            }
                        }
                    }
                }

                .clearfix::after {
                    content: '';
                    clear: both;
                    height: 0;
                    display: block;
                }
            }

            .databaseNum, .datatableNum {
                .item {
                    list-style: none;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: flex-start;
                    margin-top: 60px;

                    li {
                        width: 450px;
                        margin: 0 0 50px 40px;
                        border: 2px solid transparent;

                        .space {
                            padding: 20px 0 20px 30px;
                            display: flex;
                            flex-direction: row;
                            flex-wrap: nowrap;
                            justify-content: flex-start;
                            align-items: center;

                            img {
                                padding-right: 20px;
                            }

                            .subItem {
                                display: flex;
                                flex-direction: column;

                                span {
                                    text-align: left;
                                    margin: 3px;
                                }

                                span:nth-child(1) {
                                    font-size: 16px;
                                    font-weight: bold;
                                }
                            }
                        }
                    }

                    .hoverStyle {
                        background-color: rgb(238, 247, 254);
                        border: 2px solid rgb(65, 150, 254);
                    }
                }
            }
        }
    }

    .backButton {
        margin-right: 10px;
    }
</style>