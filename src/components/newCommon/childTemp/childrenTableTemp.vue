<template>
    <div class="TABLE" v-loading="isLoading" element-loading-text="拼命加载中……">
        <div class="TITLE">
            <span class="ICONBL"></span>
            <span class="ICON">{{title}}</span>
        </div>
        <div class="header_search" v-if="query&&query.length>0">
            <div class="queryContent">
                <component v-for="(i,x) in query"
                           :is="i.type"
                           :key="x"
                           :placeholder="i.placeholder?i.placeholder:''"
                           value-format="yyyy-MM-DD"
                           type="monthrange"
                           align="center"
                           @input="$forceUpdate()"
                           unlink-panels
                           range-separator="至"
                           start-placeholder="开始日期"
                           end-placeholder="结束日期"
                           :picker-options="pickerOptions"
                           v-model="queryParameter[i.code]">
                    <el-option v-if="option.length>0"
                               v-for="(ci,cx) in option"
                               :label="ci.yAxis"
                               :value="ci.xBxis"
                               :key="cx">
                    </el-option>
                </component>
            </div>
            <div class="queryButton">
                <el-button type="primary" size="medium" @click="queryClick(queryParameter)">搜索</el-button>
            </div>
        </div>
        <div class="content_con">
            <my-table-base ref="table"
                           height="450px"
                           :search="false"
                           :grid-index="true"
                           v-bind="$attrs"
                           :columns="columns"
                           :totalNum="totalNum"
                           :pageSizes="pageSizes"
                           :pageSize="pageSize"
                           :table-data="tableData"
                           :current-page="currentPage"
                           :pagination="true"
                           @size-change="sizeChange"
                           @selection-change="selection"
                           @current-change="currentChange">
            </my-table-base>
        </div>
    </div>
</template>

<script>
    import MyTableBase from "../../common/myTableBase";

    export default {
        name: "childrenTableTemp",
        components: {MyTableBase},
        props: {
            query: {
                type: Array,
                default: _ => {
                    return []
                }
            },
            columns: {
                type: Array,
                default: _ => {
                    return []
                }
            },
            title: {
                type: String,
                default: _ => {
                    return "标题"
                }
            },
            url: {
                type: String,
                default: _ => {
                    return ""
                }
            },
            year: {
                type: Number,
                default: _ => {
                    return 2021
                }
            },
            baseQuery: {
                type: Object,
                default: _ => {
                    return {}
                }
            },
            data: {
                type: Array,
                default: _ => {
                    return []
                }
            }
        },
        data() {
            return {
                isLoading: true,
                tableData: [],
                table: [],
                allTable: [],
                option: [],
                pickerOptions: {
                    shortcuts: [{
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                queryParameter: {},
                totalNum: 0,
                pageSize: 10,
                currentPage: 1,
                pageSizes: [10, 20, 50, 100, 200],
                param: [],
                show: false
            }
        },
        methods: {
            selection(v) {
                this.$emit("selection", v);
            },
            sizeChange(v) {
                this.pageSize = v;
                this.$emit('size-change', v);
                this.refresh(this.currentPage, v)
            },
            currentChange(v) {
                this.currentPage = v;
                this.refresh(v, this.pageSize);
                this.$emit('current-change', v);
            },
            async refresh(pn = 1, ps = 10) {
                this.isLoading = true;
                let params = {
                    companyId: this.queryParameter.companyName ? this.queryParameter.companyName : '',
                    serviceName: this.queryParameter.serviceName ? this.queryParameter.serviceName : '',
                    selectYear: this.year,
                    startTime: this.queryParameter.time ? this.queryParameter.time[0] : '',
                    endTime: this.queryParameter.time ? this.queryParameter.time[1] : '',
                    pageSize: ps,
                    pageNum: pn
                };
                let params_ = {};
                for (let i in params) {
                    if (params[i]) {
                        params_[i] = params[i];
                    }
                }
                if (this.url) {
                    await this.$axios.get("/api/basic/company_name_id", {params: {type: "service"}}).then(v => {
                        this.option = v.data.data;
                    });
                } else {
                    this.tableData = this.data;
                }
                let obj = {};
                if (this.baseQuery && JSON.stringify(this.baseQuery) !== "{}") {
                    this.option.forEach(i => {
                        if (i.yAxis == this.baseQuery.companyName) {
                            obj = {companyId: i.xBxis}
                        }
                    })
                }
                Object.assign(params_, obj);
                if (!this.url) {
                    this.isLoading = false;
                    return ''
                }
                this.$axios["get"]("/api" + this.url, {params: params_})["then"](res => {
                    let data = res.data;
                    this.totalNum = data.total;
                    this.tableData = res.data.list;
                    this.isLoading = false;
                })
            },
            /**
             * @param v 查询的参数
             * */
            queryClick(v) {
                this.refresh(this.currentPage, this.pageSize);
                this.param = v;
                this.$emit("queryClick", v);
            }
        },
        mounted() {
            this.$nextTick(_ => {
                if (!!this.query && this.query.length > 0) {
                    this.query.forEach(i => {
                        this.queryParameter[i.code] = "";
                    });
                }
            });
            this.refresh();
        }
    }
</script>

<style scoped lang="less">
    .TABLE {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        overflow: hidden;
        background: #fff;
        margin-bottom: 10px;

        .TITLE {
            position: relative;
            width: calc(100% - 30px);
            height: 50px;
            background: white;
            padding-left: 30px;
            line-height: 50px;
            font-size: 18px;
            font-weight: 600;
            border-bottom: 5px solid #f3f7ff;
            display: flex;
            flex-direction: row;

            .ICONBL {
                height: 20px;
                margin: 15px 0;
                border-left: 5px solid #1d7dca;
            }

            .ICON {
                padding-left: 10px;
                text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
            }
        }

        .header_search {
            width: calc(100% - 20px);
            padding: 10px 10px 0;
            height: 40px;
            display: flex;
            flex-wrap: nowrap;
            flex-direction: row;
            justify-content: space-between;

            .queryContent {
                width: calc(100% - 100px);
                height: 40px;

                div {
                    margin-right: 10px;
                }

                /deep/ .el-input {
                    width: 140px;

                    .el-input__inner {
                        height: 35px;
                        line-height: 35px;
                    }
                }

                /deep/ .el-select {
                    .el-input__suffix {
                        .el-input__suffix-inner {
                            .el-select__caret {
                                line-height: 35px;
                            }
                        }
                    }
                }

                /deep/ .el-date-editor {
                    height: 35px;

                    .el-input__prefix {
                        .el-input__icon {
                            line-height: 35px;
                        }
                    }
                }

                /deep/ .el-range-editor {
                    padding: 0 10px;
                }
            }

            .queryButton {
                width: 100px;
                height: 40px;
            }
        }

        .content_con {
            width: calc(100% - 20px);
            padding: 10px;
        }
    }
</style>