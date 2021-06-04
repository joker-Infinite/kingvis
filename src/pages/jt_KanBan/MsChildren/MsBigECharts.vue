<template>
    <div class="MsBigECharts">
        <el-dialog align="center"
                   width="800px"
                   :modal-append-to-body="false"
                   :visible.sync="visible">
            <div :class="{'MsBigECharts_container':true,'fBorder':plugIn=='HomeFirstPlugIn','sBorder':plugIn=='HomeSecondPlugIn'}"
                 v-loading="isLoading"
                 element-loading-text="拼命加载中……"
                 element-loading-spinner="el-icon-loading"
                 element-loading-background="rgba(0, 0, 0, 0.5)">
                <div class="MsBigECharts_close iconfont" @click="visible=false">&#xe61b;</div>
                <div class="MsBigECharts_title">
                    {{title}}
                    <el-popover v-show="!!query&&query.length>0" v-model="visible_popover"
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
                </div>
                <div class="MsBigECharts_search">
                    <span v-if="showQueryParameter" class="showQueryParameter">{{showQueryParameter}}</span>
                    <span v-if="showQueryParameter && !required" class="el-icon-circle-close clear"
                          @click="_=>{this.showQueryParameter='';this.clearQuery()}"></span>
                </div>
                <div class="MsBigECharts_ECharts">
                    <div :class="{'MsBigECharts_ECharts_content':true,'zhl':title==='转化率'}" :id="id"></div>
                    <div class="MsBigECharts_ECharts_content_addTo" v-if="title==='转化率'">
                        <span>A分类</span>
                        <span>B分类</span>
                        <span>C分类</span>
                    </div>
                </div>
                <component :is="plugIn=='HomeFirstPlugIn'?'HomeFirstBorder':'HomeSecondBorder'"></component>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import index from "../MsPlugIn/index.js"

    export default {
        name: "MsBigECharts",
        components: {...index},
        props: {
            title: {
                type: String,
                default: _ => {
                    return '请设置标题'
                }
            },
            id: {
                type: String,
                default: _ => {
                    return "lkdskldks"
                }
            },
            plugIn: {
                type: String,
                default: _ => {
                    return ""
                }
            },
            query: {
                type: Array,
                default: _ => {
                    return []
                }
            }
        },
        data() {
            return {
                visible: false,
                visible_popover: false,
                isLoading: true,
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
                showQueryParameter: "",
                required: false,
                itemOption: {}
            }
        },
        methods: {
            ZHL(v) {
                let params = {
                    pageNum: 1,
                    pageSize: 10
                };
                if (v) {
                    Object.assign(params, v);
                }
                this.$axios.get("/api/jtService/station_order_money", {params: params}).then(v => {
                    let name = [];
                    let links = [];
                    name.push({name: "车辆"});
                    let sum = 0;
                    v.data.forEach(item => {
                        item.moneyVoList.forEach(i => {
                            links.push({
                                source:
                                    i.goodsType.substr(0, 2) == "柴油"
                                        ? `0#${i.goodsType.substr(2)}`
                                        : i.goodsType.substr(0, 2) +
                                        "#" +
                                        i.goodsType.substr(2, i.goodsType.length - 1),
                                target: item.typeName,
                                value: i.count
                            });
                            sum += parseInt(i.count);
                        });
                        links.unshift({
                            source: item.typeName,
                            target: "车辆",
                            value: sum.toString()
                        });
                    });
                    links.forEach((i, index) => {
                        let color = "";
                        color = "#00BBFF";
                        if (index == 1) color = "#00BBFF";
                        if (index == 2) color = "#4860FF";
                        if (index == 3) color = "#D7C12F";
                        if (index == 4) color = "#7C1BDA";
                        if (index == 5) color = "#30D6FC";
                        if (index == 6) color = "#52E266";
                        name.push({
                            name: i.source,
                            itemStyle: {
                                normal: {
                                    color: color,
                                    borderColor: color
                                }
                            }
                        });
                    });
                    this.itemOption.series.data = name;
                    this.itemOption.series.links = links;
                    this.$echarts["init"](document.getElementById(this.id)).setOption(this.itemOption);
                    this.isLoading = false;
                })
            },
            /**
             * @param d 数据集
             * @param a 参数一
             * @param b 参数二
             * @param c 参数三
             * */
            formatter(d, a, b, c) {
                let obj = {
                    name: [],
                    value: []
                };
                if (!d || d.length === 0) {
                    return obj;
                }
                d.forEach(i => {
                    obj.name.unshift(i[a]);
                    obj.value.unshift(i[b])
                });
                return obj;
            },
            ranking(selected, changeValue) {
                this.isLoading = true;
                let url;
                let param = {
                    type: ''
                };
                if (selected === 1) url = '/sundry/service_data_orderby_list';
                if (selected === 2) url = '/sundry/station_data_orderby_list';
                if (selected === 3) url = '/sundry/shop_data_orderby_list';
                if (changeValue === 1) param.type = 'sumMoney';
                if (changeValue === 2) param.type = '';
                if (changeValue === 3) param.type = 'onePrice';
                if (changeValue === 4) param.type = 'orderNum';
                if (changeValue === 5) param.type = 'ZhuanHuan';
                if (changeValue == 1) this.itemOption.xAxis.name = "万元";
                if (changeValue == 2 || changeValue == 3) this.itemOption.xAxis.name = "元";
                if (changeValue == 4) this.itemOption.xAxis.name = "个";
                if (changeValue == 5) this.itemOption.xAxis.name = "‰";
                this.$axios.get('/api' + url, {params: param}).then(res => {
                    let data = this.DeepCopy(res.data.data);
                    let fd = this.formatter(data, 'name', param.type);
                    this.itemOption.yAxis.data = fd.name;
                    this.itemOption.series[0].data = fd.value;
                    this.$echarts["init"](document.getElementById(this.id)).setOption(this.itemOption);
                    this.isLoading = false;
                }).catch(e => {
                    this.itemOption.yAxis.data = [];
                    this.itemOption.series[0].data = [];
                    this.$echarts["init"](document.getElementById(this.id)).setOption(this.itemOption);
                    this.isLoading = false;
                })

            },
            queryClick(v) {
                this.isLoading = true;
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
                if (this.title === "转化率") {
                    param = {
                        pageNum: 1,
                        pageSize: 10,
                        companyId: v[0].query ? v[0].query : '',
                        holiday: v[1].query ? v[1].query : '',
                        startTime: v[0].query.length > 0 ? v[0].query[0] : '',
                        endTime: v[0].query.length > 0 ? v[0].query[1] : '',
                    };
                    this.ZHL(param);
                }
                if (this.title === "经营排行") {
                    this.ranking(v[0].query, v[1].query)
                }
                this.$emit("queryClick", param);
                if (sure === 0) {
                    this.$message.warning("请输入需要查询的参数！");
                } else {
                    this.showQueryParameter = '';
                    this.showQueryParameter = showQueryParameter.substring(0, showQueryParameter.length - 2);
                    this.visible_popover = false;
                }

            },
            openDialog(v) {
                v = this.itemOption = this.DeepCopy(v);
                this.visible = true;
                if (v) {
                    if (v.barWidth) {
                        v.barWidth = 25;
                    }
                    if (v.grid) {
                        v.grid = {
                            bottom: 80,
                            left: 80,
                            top: 0,
                            right: 80
                        };
                    }
                    let series = v.series;
                    if (series.length > 0) {
                        let type = '';
                        series.forEach(i => {
                            type += i.type + ','
                        });
                        if (type.indexOf('line') !== -1) {
                            v.grid = {
                                bottom: 80,
                                left: 80,
                                top: 40,
                                right: 80
                            };
                        }
                    }
                    if (series.type && series.type === "sankey") {
                        series.top = 0;
                    }
                }
                this.$nextTick(_ => {
                    this.initECharts(v);
                })
            },
            async initECharts(v) {
                this.isLoading = true;
                this.$echarts["init"](document.getElementById(this.id)).setOption(v);
                await new Promise(resolve => {
                    setTimeout(() => {
                        resolve();
                    }, 1000);
                });
                this.isLoading = false;
            },
            clearQuery() {
                if (!!this.query && this.query.length > 0) {
                    this.queryParameter = [];
                    this.query.forEach(i => {
                        this.queryParameter.push({
                            query: "",
                            type: i.type,
                            i: i
                        });
                        if (i.required) {
                            this.required = i.required;
                        }
                    });
                }
            }
        },
        created() {
            this.clearQuery();
        }
    }
</script>

<style scoped lang="less">
    .fBorder {
        border: 1px solid rgb(76, 188, 244);
        box-shadow: 0 0 20px rgb(76, 188, 244) inset;
        background: rgba(51, 136, 221, 0.11);
    }

    .sBorder {
        border: 1px solid rgb(5, 16, 33);
        box-shadow: rgb(3 84 187) 0 0 20px inset;
        background: rgba(6, 17, 36, 0.6);
    }

    .MsBigECharts {
        /deep/ .el-dialog__wrapper {
            .el-dialog {
                .el-dialog__header {
                    display: none;
                }

                .el-dialog__body {
                    padding: 0;
                }
            }
        }

        .MsBigECharts_container {
            width: 100%;
            height: 550px;
            position: relative;
            background-image: url("../../../assets/showOffHome/homeCommon/seb.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;

            .MsBigECharts_close {
                position: absolute;
                top: 10px;
                right: 10px;
                color: white;
                cursor: pointer;
            }

            .MsBigECharts_close:hover {
                color: #2d8eff;
            }

            .MsBigECharts_title {
                line-height: 50px;
                width: 100%;
                text-align: center;
                font-size: 25px;
                font-family: "幼圆";
                color: white;

                span {
                    right: 50px;

                    /deep/ .el-popover__reference-wrapper {
                        .el-button {
                            line-height: 30px;
                            padding: 0;

                            span {
                                line-height: 30px;
                                font-size: 16px;
                                color: #74adff;
                            }
                        }
                    }
                }
            }

            .MsBigECharts_search {
                height: 30px;
                text-align: right;
                padding-right: 100px;

                .showQueryParameter {
                    line-height: 30px;
                    color: #fff;
                    font-size: 16px;
                    border-bottom: 3px solid #1a73e8;
                }

                .clear {
                    color: #fff;
                    line-height: 19px;
                    font-size: 16px;
                    cursor: pointer;
                    border-bottom: 3px solid #1a73e8;
                }
            }

            .MsBigECharts_ECharts {
                width: 100%;
                height: calc(100% - 50px - 30px);
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: center;

                .MsBigECharts_ECharts_content {
                    width: 100%;
                    height: 100%;
                }

                @flWidth: 200px;

                .zhl {
                    width: calc(100% - @flWidth);
                    height: 100%;
                }

                .MsBigECharts_ECharts_content_addTo {
                    width: @flWidth;
                    height: 100%;
                    display: flex;
                    flex-wrap: nowrap;
                    flex-direction: column;
                    justify-content: center;

                    span {
                        line-height: 100px;
                        color: white;
                        font-weight: bold;
                        text-align: center;
                        font-size: 25px;
                    }
                }
            }
        }
    }
</style>