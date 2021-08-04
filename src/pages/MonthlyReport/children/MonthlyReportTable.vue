<template>
    <div class="MonthlyReportTable">
        <vxe-table align="center"
                   stripe
                   highlight-hover-row
                   :data="tableData"
                   :tooltip-config="{enterable: true}"
                   border="none"
                   ref="vxeTable"
                   height="100%">
            <vxe-table-column field="name" title="项目名称"></vxe-table-column>
            <!--<vxe-table-column field="goalDesc" title="项目等级">
                <template #default="{ row }">
                    <div :style="{'fontSize': '25px','fontWeight': 800,color:row['goalDesc']=='S'?'orange':row['goalDesc']=='SS'?'orangeRed':''}">
                        {{row["goalDesc"]}}
                    </div>
                </template>
            </vxe-table-column>-->
            <vxe-table-column field="progressRate" title="进度状态">
                <template #default="{ row }">
                    {{row['progressRate']}}
                    <span :style="{'color':!parseInt(row['changeValue'])||parseInt(row['changeValue'])>=0?'#67C23A':'#F56C6C'}">
                        <i class="iconfont iconarrow-up iconarrDown"
                           v-if="!parseInt(row['changeValue'])||parseInt(row['changeValue'])>=0"></i>
                        <i class="iconfont iconarrDown" v-if="parseInt(row['changeValue'])<0"></i>
                        {{row["changeValue"]?row["changeValue"]:0}}%
                    </span>
                </template>
            </vxe-table-column>
            <vxe-table-column field="goalDetail" title="目标" align="left">
                <template #default="{ row }">
                    <el-tooltip class="item" effect="light">
                        <div :style="{height:height+'px',
                         width:'100%',
                         overflow:'hidden',
                         display: '-webkit-box',
                         '-webkit-box-orient': 'vertical',
                         textOverflow: 'ellipsis',
                         '-webkit-line-clamp':parseInt(height/19)}"
                             v-show="row['goalDetail']">{{row["goalDetail"]}}
                        </div>
                        <div slot="content" style="width: 400px;font-size: 18px">
                            {{row["goalDetail"]}}
                        </div>
                    </el-tooltip>
                    <div :style="{height:height+'px'}" v-if="!row['goalDetail']">无</div>
                </template>
            </vxe-table-column>
            <vxe-table-column field="planDetailLastMonth" :title="month-1+'月计划'" align="left">
                <template #default="{ row }">
                    <el-tooltip class="item" effect="light">
                        <div :style="{height:height+'px',
                           width:'100%',
                         overflow:'hidden',
                         display: '-webkit-box',
                         '-webkit-box-orient': 'vertical',
                         textOverflow: 'ellipsis',
                         '-webkit-line-clamp':parseInt(height/19)}"
                             v-show="row.planDetailLastMonth&&row['planDetailLastMonth'].length!==0">
                            <template v-for="(i,x) in row.planDetailLastMonth">
                                <p>{{x+1}}、{{i.planDetail}}</p>
                            </template>
                        </div>
                        <div slot="content" style="width: 200px;font-size: 18px">
                            <template v-for="(i,x) in row.planDetailLastMonth">
                                <p>{{x+1}}、{{i.planDetail}}</p>
                            </template>
                        </div>
                    </el-tooltip>
                    <div v-if="row.planDetailLastMonth&&row['planDetailLastMonth'].length===0">无</div>
                </template>
            </vxe-table-column>
            <vxe-table-column field="state" title="状态">
                <template #default="{ row }">
                    <p v-for="(i,x) in row.planDetailLastMonth">{{x+1}}、
                        <span :style="{color:parseInt(i.state) === 100?'#67C23A':'#F56C6C',verticalAlign: '-3px'}"
                              :class="{'iconfont':true,'icongou':parseInt(i.state) === 100,'iconcha':parseInt(i.state) !== 100}"></span>
                    </p>
                    <div v-if="row.planDetailLastMonth&&row.planDetailLastMonth.length===0">无</div>
                </template>
            </vxe-table-column>
            <vxe-table-column field="stateDesc" title="情况说明" align="left">
                <template #default="{ row }">
                    <div v-if="row['stateDesc']">{{row["stateDesc"]}}</div>
                    <div v-if="!row['stateDesc']">无</div>
                </template>
            </vxe-table-column>
            <vxe-table-column field="plans" :title="month+'月计划'" align="left">
                <template #default="{ row }">
                    <el-tooltip class="item" effect="light">
                        <div :style="{height:height+'px',
                           width:'100%',
                         overflow:'hidden',
                         display: '-webkit-box',
                         '-webkit-box-orient': 'vertical',
                         textOverflow: 'ellipsis',
                         '-webkit-line-clamp':parseInt(height/19)}"
                             v-show="row['plans'].length!==0">
                            <template v-for="(i,x) in row.plans">
                                <p>{{x+1}}、{{i.planDetail}}</p>
                            </template>
                        </div>
                        <div slot="content" style="width: 200px;font-size: 18px">
                            <template v-for="(i,x) in row.plans">
                                <p>{{x+1}}、{{i.planDetail}}</p>
                            </template>
                        </div>
                    </el-tooltip>
                    <div v-if="row['plans'].length===0">无</div>
                </template>
            </vxe-table-column>
        </vxe-table>
    </div>
</template>

<script>
    import "./MonthlyReportTable.less"

    export default {
        name: "MonthlyReportTable",
        props: {
            tableData: {
                type: Array,
                default: () => {
                    return []
                }
            },
            yearMonth: {
                type: String,
                default: () => {
                    return ""
                }
            }
        },
        data() {
            return {
                height: 0,
                month: ""
            }
        },
        methods: {
            refresh() {
                this.month = this.yearMonth.split("-")[1] - 0;
                this.$refs["vxeTable"].loadData(this.tableData)
            }
        },
        mounted() {
            let ele = document.getElementsByClassName("MonthlyReportTable")[0];
            this.height = (ele.offsetHeight - 48) / 4 - 30;
            this.month = this.yearMonth.split("-")[1] - 0;
            window.onresize = () => {
                let ele = document.getElementsByClassName("MonthlyReportTable")[0];
                this.height = (ele.offsetHeight - 48) / 4 - 30;
            }
        }
    }
</script>