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
            <vxe-table-column field="goalDesc" width="90" title="项目等级">
                <template #default="{ row }">
                    <div :style="{'fontSize': '25px','fontWeight': 800,color:row['goalDesc']=='S'?'orange':row['goalDesc']=='SS'?'orangeRed':''}">
                        {{row["goalDesc"]}}
                    </div>
                </template>
            </vxe-table-column>
            <vxe-table-column field="progressRate" width="110" title="进度状态">
                <template #default="{ row }">
                    {{row['progressRate']}}
                    <span :style="{'color':!parseInt(row['changeValue'])||parseInt(row['changeValue'])>=0?'#67C23A':'#F56C6C'}">
                        <i class="iconfont iconshangsheng" v-if="!parseInt(row['changeValue'])||parseInt(row['changeValue'])>=0"></i>
                        <i class="iconfont iconxiajiang" v-if="parseInt(row['changeValue'])<0"></i>
                        {{row["changeValue"]?row["changeValue"]:0}}%
                    </span>
                </template>
            </vxe-table-column>
            <vxe-table-column field="state" width="90" title="状态">
                <template #default="{ row }">
                    <div :id="row.state" v-if="row.state">
                        <i :style="{color:row.state==2?'#67C23A':'#F56C6C',verticalAlign: '-1px'}"
                           :class="{'iconfont':true,'icongou':row.state==2,'iconcha':row.state!=2}"></i>
                    </div>
                    <div v-if="!row.state">无</div>
                </template>
            </vxe-table-column>
            <vxe-table-column field="planDetail" width="200" title="计划" align="left">
                <template #default="{ row }">
                    <el-tooltip class="item" effect="light">
                        <div :style="{height:height+'px',
                           width:'100%',
                         overflow:'hidden',
                         display: '-webkit-box',
                         '-webkit-box-orient': 'vertical',
                         textOverflow: 'ellipsis',
                         '-webkit-line-clamp':parseInt(height/19)}"
                             v-if="row['planDetail']">{{row["planDetail"]}}
                        </div>
                        <div slot="content" style="width: 200px">
                            {{row["planDetail"]}}
                        </div>
                    </el-tooltip>
                    <div v-if="!row['planDetail']">无</div>
                </template>
            </vxe-table-column>
            <vxe-table-column field="goalDetail" width="600" title="目标" align="left">
                <template #default="{ row }">
                    <el-tooltip class="item" effect="light">
                        <div :style="{height:height+'px',
                    width:'100%',
                         overflow:'hidden',
                         display: '-webkit-box',
                         '-webkit-box-orient': 'vertical',
                         textOverflow: 'ellipsis',
                         '-webkit-line-clamp':parseInt(height/19)}"
                             v-if="row['goalDetail']">{{row["goalDetail"]}}
                        </div>
                        <div slot="content" style="width: 400px">
                            {{row["goalDetail"]}}
                        </div>
                    </el-tooltip>
                    <div :style="{height:height+'px'}" v-if="!row['goalDetail']">无</div>
                </template>
            </vxe-table-column>
            <vxe-table-column field="stateDesc" width="200" title="情况说明" align="left">
                <template #default="{ row }">
                    <div v-if="row['stateDesc']">{{row["stateDesc"]}}</div>
                    <div v-if="!row['stateDesc']">无</div>
                </template>
            </vxe-table-column>
            <vxe-table-column field="startTime" title="开始时间">
                <template #default="{ row }">
                    <div v-if="row['startTime']">{{row["startTime"]}}</div>
                    <div v-if="!row['startTime']">无</div>
                </template>
            </vxe-table-column>
            <vxe-table-column field="endTime" title="结束时间">
                <template #default="{ row }">
                    <div v-if="row['endTime']">{{row["endTime"]}}</div>
                    <div v-if="!row['endTime']">无</div>
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
            }
        },
        data() {
            return {
                height: 0
            }
        },
        methods: {
            refresh() {
                this.$refs["vxeTable"].loadData(this.tableData)
            }
        },
        mounted() {
            let ele = document.getElementsByClassName("MonthlyReportTable")[0];
            this.height = (ele.offsetHeight - 48) / 4 - 30;
            window.onresize = () => {
                let ele = document.getElementsByClassName("MonthlyReportTable")[0];
                this.height = (ele.offsetHeight - 48) / 4 - 30;
            }
        }
    }
</script>