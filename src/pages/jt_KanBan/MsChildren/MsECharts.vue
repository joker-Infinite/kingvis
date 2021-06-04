<template>
    <div :class="{'MsECharts':true,'fBorder':plugIn=='HomeFirstPlugIn','sBorder':plugIn=='HomeSecondPlugIn'}"
         v-loading="isLoading"
         element-loading-text="拼命加载中……"
         element-loading-spinner="el-icon-loading"
         element-loading-background="rgba(0, 0, 0, 0.5)">
        <!--标题-->
        <div class="MsECharts_Title">
            <slot name="title">
                <div class="MsECharts_Title_slot">{{title}}</div>
            </slot>
        </div>
        <!--内容-->
        <div class="MsECharts_content">
            <slot name="content">
                <div class="MsECharts_content_slot" :id="ECId+'-MsECharts'"></div>
            </slot>
        </div>
        <!--插件-->
        <component is="HomeFirstPlugIn" class="plugIn" @open="open"></component>
        <!--边框-->
        <component :is="plugIn=='HomeFirstPlugIn'?'HomeFirstBorder':'HomeSecondBorder'"></component>
        <!--查看放大图表-->
        <MsBigECharts ref="big" :query="queryData[title]" :plugIn="plugIn" :id="ECId+'-MsEChartsBig'"
                      :title="title"></MsBigECharts>
    </div>
</template>

<script>
    import index from "../MsPlugIn/index.js"
    import MsBigECharts from "./MsBigECharts";

    export default {
        name: "MsECharts",
        components: {MsBigECharts, ...index},
        props: {
            ECId: {
                type: String,
                default: _ => {
                    return "SSH"
                }
            },
            title: {
                type: String,
                default: _ => {
                    return "请定义标题"
                }
            },
            plugIn: {
                type: String,
                default: _ => {
                    return "HomeFirstPlugIn"
                }
            },
            optionData: {
                type: Object,
                default: _ => {
                    return {}
                }
            }
        },
        data() {
            return {
                isLoading: true,
                queryData: {
                    "转化率": [
                        {
                            type: 'el-select',
                            required: false,
                            code: 'companyId',
                            placeholder: '请选择服务区片区',
                            option: []
                        },
                        {
                            type: 'el-select',
                            required: false,
                            code: 'holiday',
                            placeholder: '请选择节假日',
                            option: [
                                {label: '春节', value: '春节'},
                                {label: '清明节', value: '清明节'},
                                {label: '劳动节', value: '劳动节'},
                                {label: '端午节', value: '端午节'},
                                {label: '中秋节', value: '中秋节'},
                                {label: '国庆节', value: '国庆节'},
                            ]
                        },
                        {type: 'el-date-picker', required: false, code: 'time', placeholder: '请选择时间'},
                    ],
                    "经营排行": [
                        {
                            type: 'el-select',
                            required: true,
                            code: 't1',
                            placeholder: '请选择',
                            option: [
                                {label: '服务区', value: 1},
                                {label: '自营油站', value: 2},
                                {label: '自营超市', value: 3},
                                {label: '服务区招商', value: 4},
                            ]
                        },
                        {
                            type: 'el-select',
                            required: true,
                            code: 't2',
                            placeholder: '请选择',
                            option: [
                                {label: '营收', value: 1},
                                {label: '利润', value: 2},
                                {label: '客单价', value: 3},
                                {label: '订单数', value: 4},
                                {label: '转化率', value: 5},
                            ]
                        },
                    ]
                },
                option: [],
            }
        },
        methods: {
            open() {
                this.$refs["big"].openDialog(this.optionData);
            },
            async initECharts(v) {
                await this.$echarts["init"](document.getElementById(this.ECId + '-MsECharts')).setOption(v);
                this.isLoading = false;
            },
            stopLoading() {
                this.isLoading = false;
            },
            startLoading() {
                this.isLoading = true;
            },
        },
        created() {
            this.$axios.get("/api/basic/company_name_id", {params: {type: "service"}}).then(v => {
                let data = v.data.data;
                data.forEach(i => {
                    this.queryData["转化率"][0].option.push({
                        label: i.yAxis,
                        value: i.xBxis,
                    })
                })
            });
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

    .MsECharts {
        width: calc(100% - 2px);
        height: calc(100% - 2px);
        position: relative;

        @MsECharts_Title_height: 30px;

        .MsECharts_Title {
            height: @MsECharts_Title_height;
            width: 100%;

            .MsECharts_Title_slot {
                width: 100%;
                height: 100%;
                text-align: center;
                line-height: @MsECharts_Title_height;
                font-size: 18px;
                font-family: "幼圆";
                font-weight: 900;
                color: white;
            }
        }

        .MsECharts_content {
            height: calc(100% - @MsECharts_Title_height - 10px);
            width: calc(100% - 10px);
            padding: 5px;

            .MsECharts_content_slot {
                width: 100%;
                height: 100%;
            }
        }
    }

    .plugIn {
        display: none;
        transition: linear .4s;
    }

    .MsECharts:hover .plugIn {
        display: block;
    }
</style>