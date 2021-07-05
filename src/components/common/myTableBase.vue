<template>
    <div style="width: 99.9%;height: 100%;background: white" class="myTable" v-loading="loading"
         element-loading-text="拼命加载中……">
        <div class="headerBox" v-if="buttons.length>0||search||self">
            <div class="btnBar" v-if="buttons.length>0">
                <template v-for="btn in buttons">
                    <el-button
                            size="medium"
                            :key="btn.name"
                            v-show="typeof(btn.hidden) == 'undefined'?true:((typeof btn.hidden == 'function')?!btn.hidden():!btn.hidden)"
                            :type="btn.type?btn.type:'primary'"
                            :icon="btn.icon?btn.icon:''"
                            :disabled="typeof(btn.disabled) === 'undefined'?false:((typeof btn.disabled == 'function')?btn.disabled():btn.disabled)"
                            @click="buttonClick(btn.callback)">
                        {{btn.name}}
                    </el-button>
                </template>
            </div>
            <slot name="selfSearch"></slot>
            <div class="searchBar" v-if="search">
                <el-button type="primary" @click="advancedSearch">高级查询</el-button>
            </div>
        </div>
        <el-table
                ref="eltable"
                :data="tableData"
                :height="height?height:(buttons.length===0&&!pagination&&!search&&!self?'100%':(buttons.length!==0||search||self)&&pagination?'calc(100% - 100px)':'calc(100% - 50px)')"
                style="width: 100%;"
                :highlight-current-row="chooseItem === 'single'"
                row-key="id"
                :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
                @select="select"
                @row-click="selection"
                @select-all="selectAll">
            <el-table-column v-if="chooseItem !== 'single'"
                             align="center"
                             fixed="left"
                             type="selection"
                             width="50">
            </el-table-column>
            <el-table-column v-if="gridIndex"
                             align="center"
                             fixed="left"
                             label="序号"
                             width="50">
                <template slot-scope="scope">
                    {{scope.$index+1+(currentPage-1)*pageSize}}
                </template>
            </el-table-column>
            <template v-for="(item,index) in columns">
                <el-table-column
                        v-if="!item.rowImg&&!item.rowBtn&&!item.rowSelect&&!item.formatter&&!item.hidden"
                        :key="index"
                        :sortable="item.sortable"
                        :prop="item.prop"
                        :label="item.label"
                        :align="item.align ? item.align : 'center'"
                        :width="item.width ? item.width : ''">
                    <el-table-column v-if="item.children"
                                     v-for="(cItem,cIndex) in item.children"
                                     :key="cIndex"
                                     :align="cItem.align ? cItem.align : 'center'"
                                     :prop="cItem.prop"
                                     :width="cItem.width ? cItem.width : ''"
                                     :label="cItem.label">
                    </el-table-column>
                </el-table-column>
                <el-table-column
                        v-if="item.formatter"
                        :key="index"
                        :sortable="item.sortable"
                        :label="item.label"
                        :align="item.align ? item.align : 'center'"
                        :width="item.width ? item.width : ''">
                    <template slot-scope="scope">
                        {{item.formatter(scope.row)}}
                    </template>
                </el-table-column>
                <el-table-column v-if="item.rowImg" :label="item.label" :align="item.align ? item.align : 'center'">
                    <template slot-scope="scope">
                        <img :src="scope.row[item.prop]" :style="item.imgStyle" alt=""/>
                    </template>
                </el-table-column>
                <el-table-column v-if="item.rowBtn" :label="item.label" :align="item.align ? item.align : 'center'">
                    <template slot-scope="scope">
                        <el-button v-for="(i,x) in item.btnGroup" :key="x"
                                   @click="rowBtnClick(scope.row,scope.$index+1,i.callBack,i.name)">{{i.name}}
                        </el-button>
                    </template>
                </el-table-column>
                <el-table-column v-if="item.rowSelect" :label="item.label" :align="item.align ? item.align : 'center'">
                    <template slot-scope="scope">
                        <el-select v-model="selectModel[scope.$index][item.vModel]"
                                   @change="rowSelectChange(scope.row,scope.$index+1,item.callBack,selectModel[scope.$index][item.vModel])">
                            <el-option v-for="(i,x) in item.rowOption" :key="x" :value="i.value"
                                       :label="i.label"></el-option>
                        </el-select>
                    </template>
                </el-table-column>
            </template>
            <el-table-column
                    v-if="operations.length>0"
                    fixed="right"
                    label="操作"
                    :width="operationsWidth" align="center">
                <template slot-scope="scope">
                    <span v-for="operation in operations"
                          style="padding: 0 2px;cursor: pointer"
                          :key="operation.name"
                          :class="operation.type?operation.type:'primary'"
                          v-if="operation.isShow?operation.isShow(scope.row,scope.$index):true"
                          @click.stop="columnClick(scope.row,scope.$index,operation.callback)">
                        {{operation.name}}
                    </span>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination" v-if="pagination">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :sync.current-page="currentPage"
                    :page-sizes="pageSizes"
                    :sync.page-size="pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="totalNum">
            </el-pagination>
        </div>
        <my-drawer v-model="drawer">
            <div style="text-align: center;font-size: 20px;line-height: 45px">高级查询</div>
            <div class="searchQuery" v-for="(item,index) in columns" :key="index">
                <div class="label">{{item.label}}：</div>
                <el-input v-model="item.prop"></el-input>
            </div>
            <div class="footerBtn">
                <el-button type="primary">搜索</el-button>
                <el-button type="info">重置</el-button>
            </div>
        </my-drawer>
    </div>
</template>

<script>
    import MyDrawer from './myDrawer';

    export default {
        name: 'myTableBase',
        components: {MyDrawer},
        props: {
            tableData: {
                type: Array,
                default: function () {
                    return [];
                }
            },
            columns: {
                type: Array,
                default: []
            },
            chooseItem: {
                type: String,
                default: ''
            },
            isSelection: {
                type: Boolean,
                default: true
            },
            gridIndex: {
                type: Boolean,
                default: true
            },
            buttons: {//网格按钮组
                type: Array,
                default: function () {
                    return [];
                }
            },
            operations: {//网格行按钮清单
                type: Array,
                default: function () {
                    return [];
                }
            },
            operationsWidth: {
                type: String,
                default: ''
            },
            pagination: {
                type: Boolean,
                default: true
            },
            search: {
                type: Boolean,
                default: true
            },
            self: {
                type: Boolean,
                default: true
            },
            pageSizes: {
                type: Array,
                default: function () {
                    return [20,50,100,200];
                }
            },
            pageSize: {
                type: Number,
                default: function () {
                    return 20;
                }
            },
            totalNum: {
                type: Number,
                default: function () {
                    return 0;
                }
            },
            height: {
                type: String,
                default: function () {
                    return '';
                }
            },
            loading: {
                type: Boolean,
                default: _ => {
                    return false;
                }
            }
        },
        data() {
            return {
                drawer: false,
                currentPage: 1,
                selectModel: []
            };
        },
        methods: {
            rowSelectChange(item, index, callback, value) {
                if (callback) {
                    callback(item, value, index);
                }
            },
            rowBtnClick(item, index, callback, name) {
                if (callback) {
                    callback(item, name, index);
                }
            },
            advancedSearch() {
                this.drawer = true;
            },
            columnClick(item, index, callback) {
                if (callback) {
                    callback(item, index);
                }
            },
            buttonClick(callback, $event) {
                if (callback) {
                    callback($event);
                }
            },
            handleSizeChange(val) {
                this.$emit('size-change', val);
            },
            handleCurrentChange(val) {
                this.$emit('current-change', val);
            },
            //多选时点击复选框
            select(selection) {
                this.$emit('selection-change', selection);
            },
            //单选
            selection(selection) {
                console.log(222)
                this.$emit('selection-change', [selection]);
            },
            //点击全选
            selectAll(selection) {
                this.$emit('selection-change', selection);
            },
            refreshScroll() {
                this.$refs['eltable'].bodyWrapper.scrollTop = 0;
            }
        },
        mounted() {
            let switch_ = false;
            let obj = {};
            this.columns.forEach(i => {
                if (i.rowSelect) {
                    switch_ = true;
                    obj[i.vModel] = '';
                }
            });
            this.tableData.forEach(_ => {
                let omj = JSON.parse(JSON.stringify(obj));
                this.selectModel.push(omj);
            });
        },
        watch: {
            $route: {
                handler: function (v) {
                    setTimeout(() => {
                        this.$nextTick(() => {
                            this.$refs['eltable'].doLayout();
                        });
                    }, 100);
                }
            }
        }
    };
</script>

<style scoped lang="less">
    .myTable {
        .headerBox {
            width: calc(100% - 20px);
            padding: 0 10px;

            .btnBar {
                width: 70%;
                height: 50px;
                float: left;

                /deep/ .el-button {
                    padding: 9px 10px;
                    margin: 9px 5px;
                }
            }

            .searchBar {
                width: 30%;
                height: 50px;
                text-align: right;
                float: right;

                /deep/ .el-button {
                    padding: 10px 10px;
                    margin: 6px 5px;
                }
            }
        }

        /deep/ .el-table {
            .el-table__header-wrapper {
                .el-table__header {
                    tr {
                        th {
                            /*background: #efefef;*/
                        }
                    }
                }
            }

            .el-table__fixed-header-wrapper {
                .el-table__header {
                    tr {
                        th {
                            /*background: #efefef;*/
                        }
                    }
                }
            }

            .el-table__fixed-right {
                .el-table__fixed-body-wrapper {
                    .el-table__body {
                        tbody {
                            .el-table__row {
                                td {
                                    .cell {
                                        .primary {
                                            color: #409EFF;
                                        }

                                        .info {
                                            color: #909399;
                                        }

                                        .danger {
                                            color: #F56C6C;
                                        }

                                        .warning {
                                            color: #E6A23C;
                                        }

                                        .success {
                                            color: #67C23A;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        .pagination {
            width: calc(100% - 20px);
            text-align: right;
            overflow: hidden;
            margin: 10px 0;

            /deep/ .el-pagination {
                padding: 4px 5px;
            }
        }

        .searchQuery {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            flex-wrap: nowrap;
            padding: 8px 0;

            .label {
                width: 140px;
                text-align: right;
                line-height: 35px;
                font-size: 14px;
            }

            /deep/ .el-input {
                .el-input__inner {
                    height: 35px;
                    line-height: 35px;
                }
            }
        }

        .footerBtn {
            width: 100%;
            position: absolute;
            text-align: center;
            left: 0;
            bottom: 40px;

            /deep/ .el-button {
                margin: 0 10px;
            }
        }
    }
</style>