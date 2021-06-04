<template>
    <div class="ECharts" v-loading="isLoading" element-loading-text="拼命加载中……">
        <div class="ECharts_title">
            <span class="ICONLB"></span>
            <span class="ICON">{{title}}</span>
            <span class="queryButton" v-if="!!query&&query.length>0">
                <el-popover v-model="visible"
                            placement="bottom"
                            trigger="click">
                <div class="queryContent">
                    <p style="margin-bottom: 10px"
                       v-for="(i,x) in query">
                        <component
                                style="width: 300px"
                                :is="i.type"
                                :key="x"
                                :placeholder="i.placeholder?i.placeholder:''"
                                value-format="yyyy-MM"
                                type="monthrange"
                                align="center"
                                unlink-panels
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期"
                                :picker-options="pickerOptions"
                                v-model="queryParameter[x]['query']">
                            <el-option v-if="i.option"
                                       v-for="(ci,cx) in i.option"
                                       :label="ci.label"
                                       :value="ci.value"
                                       :key="cx"></el-option>
                        </component>
                    </p>
                </div>
                <div style="width: 100%;text-align: right">
                    <el-button type="primary" size="small" @click="queryClick(queryParameter)">查询</el-button>
                </div>
                <el-button slot="reference" type="text">查询</el-button>
            </el-popover>
                <span v-if="showQueryParameter" class="showQueryParameter">{{showQueryParameter}}</span>
                <span v-if="showQueryParameter" class="el-icon-circle-close clear"
                      @click="showQueryParameter=''"></span>
            </span>
        </div>
        <div class="ECharts_con">
            <div class="otherSettings" v-if="showOtherSetting">
                <ms-other-setting class="setting" @clickType="clickType"></ms-other-setting>
            </div>
            <template v-for="(i,x) in ECharts">
                <div class="EC"
                     v-show="!show&&i.option.series[0].data.length>0"
                     @mouseover="enterThis(i.option)"
                     :key="x"
                     :id="oid+'-'+x+'-'+$route.path"
                     :style="{width:i.span?i.span:100+'%'}">
                </div>
                <div class="EC table"
                     v-show="show&&i.option.series[0].data.length>0"
                     :style="{width:i.span?i.span:100+'%'}">
                    <template v-for="i in table">
                        <template v-for="ci in i">
                            <ul class="myTable">
                                <li>{{ci.name}}</li>
                                <li v-for="csi in ci.data">
                                    {{csi}}
                                </li>
                            </ul>
                        </template>
                    </template>
                </div>
                <div class="noData" v-if="i.option.series[0].data.length===0&&!isLoading">
                    <span>暂无数据</span>
                </div>
            </template>
        </div>
        <div class="additionalContent" v-if="JSON.stringify(addCon)!=='{}'">
            <p>
                <span>平均</span>
                <span>:</span>
                <span>{{addCon["avgNum"]}}</span>
            </p>
            <p>
                <span>{{addCon["maxServiceName"]}}</span>
                <span>最高</span>
                <span>:</span>
                <span>{{addCon["maxNum"]}}</span>
            </p>
            <p>
                <span>{{addCon["minServiceNam"]}}</span>
                <span>最低</span>
                <span>:</span>
                <span>{{addCon["minNum"]}}</span>
            </p>
        </div>
    </div>
</template>

<script>
    import MsOtherSetting from "../MyCommon/MsOtherSetting";
    import index from "../javaScript/index.js"
    import {printExcel} from "../../../../public/api/excel";

    export default {
        name: "childrenEChartsTemp",
        components: {MsOtherSetting},
        mixins: [index],
        props: {
            query: {
                type: Array,
                default: _ => {
                    return []
                }
            },
            oid: {
                type: String,
                default: _ => {
                    return ""
                }
            },
            ECharts: {
                type: Array,
                default: _ => {
                    return []
                }
            },
            title: {
                type: String,
                default: _ => {
                    return '标题'
                }
            },
            addCon: {
                type: Object,
                default: _ => {
                    return {}
                }
            }
        },
        data() {
            return {
                isLoading: true,
                showQueryParameter: "",
                visible: false,
                key: "",
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
                queryParameter: [],
                thisECharts: [],
                show: false,
                table: [],
                columns: [],
                showOtherSetting: false
            }
        },
        methods: {
            /**
             * @param v 鼠标进入图表的参数
             * */
            enterThis(v) {
                this.thisECharts = v;
                if (v.series[0].type === "line" || v.series[0].type === "bar") {
                    this.showOtherSetting = true;
                }
            },
            /**
             * @param v 点击扩展功能的代号
             * */
            clickType(v) {
                if (v === "table") {
                    this.show = true;
                }
                if (v === "ECharts") {
                    this.show = false;
                }
                this.table = this.getData(v, this.thisECharts);
                this.columns = this.table[0][0].data;
                let excelData = {
                    name: "",
                    keyColumns: [],
                    valueColumns: [],
                };
                if (v === 'excel') {
                    let table = this.DeepCopy(this.table);
                    table.forEach(item => {
                        item.forEach(cItem => {
                            if (cItem.type === "label") {
                                excelData.keyColumns = [cItem.name, ...cItem.data];
                            }
                            if (cItem.type === "value") {
                                excelData.valueColumns.push([cItem.name, ...cItem.data]);
                            }
                        })
                    });
                    excelData.name = this.title;
                    printExcel(excelData)
                }
            },
            /**
             * @param v 查询的参数
             * */
            queryClick(v) {
                let param = [];
                let showQueryParameter = "";
                let sure = 0;
                v.forEach(i => {
                    param.push(i.query);
                    if (i.query) {
                        if (i.type === "el-date-picker") {
                            showQueryParameter += i.query[0] + " 至 " + i.query[1] + " , "
                        }
                        if (i.type === "el-input") {
                            showQueryParameter += i.query + " , ";
                        }
                        if (i.type === "el-select") {
                            i.i.option.forEach(c => {
                                if (c.value === i.query) {
                                    showQueryParameter += c.label + " , ";
                                }
                            })
                        }
                        sure++;
                    }
                });
                this.$emit("queryClick", param);
                if (sure === 0) {
                    this.$message.warning("请输入需要查询的参数！");
                } else {
                    this.showQueryParameter = '';
                    this.showQueryParameter = showQueryParameter.substring(0, showQueryParameter.length - 2);
                    this.visible = false;
                }

            },
            initECharts() {
                this.$nextTick(_ => {
                    this.ECharts.forEach((i, x) => {
                        let eId = this.oid + "-" + x + '-' + this.$route.path;
                        this.$echarts["init"](document.getElementById(eId)).setOption(i.option);
                    });
                    this.isLoading = false;
                })
            }
        },
        created() {
            if (!!this.query && this.query.length > 0) {
                this.query.forEach(i => {
                    this.queryParameter.push({
                        query: "",
                        type: i.type,
                        i: i
                    })
                });
            }
        }
    }
</script>

<style scoped lang="less">
    .ECharts {
        width: 100%;
        height: 400px;
        border-radius: 10px;
        overflow: hidden;
        background: #fff;
        position: relative;
        margin-bottom: 10px;

        .ECharts_title {
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

            .ICONLB {
                height: 20px;
                margin: 15px 0;
                border-left: 5px solid #1d7dca;
            }

            .ICON {
                padding-left: 10px;
                text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
            }

            .queryButton {
                margin-left: 20px;
                display: flex;
                flex-direction: row;
            }

            /deep/ .el-popover {
                .queryContent {
                    width: calc(100% - 100px);
                    height: 40px;
                }
            }

            .showQueryParameter {
                display: inline-block;
                font-size: 14px;
                margin-left: 10px;
                font-weight: 500;
                color: red;
                max-width: 500px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                line-height: 53px;
            }

            .clear {
                line-height: 54px;
                text-indent: 10px;
                font-size: 16px;
                cursor: pointer;
            }
        }

        .ECharts_con {
            overflow: hidden;
            width: 100%;
            height: calc(100% - 55px);
            display: flex;
            flex-wrap: nowrap;
            flex-direction: row;
            position: relative;
            justify-content: space-between;

            .otherSettings {
                position: absolute;
                height: 35px;
                left: 20px;
                top: 5px;
                display: none;

                span {
                    font-size: 20px;
                    margin-right: 10px;
                }

                span:hover {
                    color: #00b8fe;
                }
            }

            .otherSettings:hover .setting {
                display: block;
            }

            .EC {
                height: 100%;

                .myTable {
                    list-style: none;

                    li {
                        line-height: 25px;
                        border-bottom: 1px solid black;
                        text-align: center;
                        padding: 0 100px;
                    }
                }
            }

            .table {
                display: flex;
                flex-direction: row;
                justify-content: center;
                flex-wrap: nowrap;
                overflow-y: scroll;
                padding: 0 20px;
            }

            .noData {
                width: 100%;
                height: 100%;
                text-align: center;
                font-size: 25px;
                font-weight: bold;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
        }

        .ECharts_con:hover .otherSettings {
            display: block;
        }

        .additionalContent {
            position: absolute;
            display: flex;
            flex-direction: column;
            z-index: 900;
            top: 10px;
            right: 10px;
            background: #fff;
            padding: 5px;
            box-shadow: 1px 1px 10px rgba(0, 0, 0, .3);
            border-radius: 5px;
            font-size: 14px;

            p {

                span {
                    margin: 0 4px;
                    font-weight: 700;
                    line-height: 22px;
                }
            }
        }
    }
</style>