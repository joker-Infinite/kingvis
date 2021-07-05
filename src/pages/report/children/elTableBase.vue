<template>
    <div class="elTableBase">
        <el-table :data="tableData"
                  ref="elTable"
                  height="100%"
                  row-key="id"
                  default-expand-all
                  :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
                  highlight-current-row>
            <el-table-column align="center" label="序号" width="90px">
                <template slot-scope="scope">
                    {{scope.row.tableIndex}}
                </template>
            </el-table-column>
            <el-table-column align="left" label="项目名称" prop="name" width="150px"></el-table-column>
            <el-table-column align="center" label="进度状态" prop="progressRate" width="150px">
                <template slot-scope="scope">
                    <div style="width: 100%;height: 25%;position: relative">
                        <div class="cellECharts" :id="'ID'+currentPage+'-'+ (scope.row.tableIndex)"></div>
                    </div>
                    <div style="font-size: 16px;width: 80px;position: absolute;z-index: 99999;right:0;top: calc(50% - 10px)">
                        <i v-if="calculation(scope.row.progressRate, increase[scope.row.id])>=0"
                           style="color: greenyellow" class="iconfont iconshangsheng"></i>
                        <i v-if="calculation(scope.row.progressRate, increase[scope.row.id])<0"
                           style="color: red" class="iconfont iconxiajiang"></i>
                        {{calculation(scope.row.progressRate, increase[scope.row.id])}}%
                    </div>
                </template>
            </el-table-column>
            <el-table-column align="center" label="目标" prop="goalDetail">
                <template slot-scope="scope">
                    <div v-if="scope.row.goalDetail">{{scope.row.goalDetail}}</div>
                    <div v-if="!scope.row.goalDetail">无</div>
                </template>
            </el-table-column>
            <el-table-column align="center" label="当月计划">
                <template slot-scope="scope">
                    <div style="text-align: left" :id="scope.row.plan" v-if="scope.row.plan">
                        <p v-for="(m,n) in scope.row.plan" :key="n">
                            {{n+1}}、{{m}}
                        </p>
                    </div>
                    <div v-if="!scope.row.plan||scope.row.plan.length===0">无</div>
                </template>
            </el-table-column>
            <el-table-column align="center" label="状态" prop="state" width="90px">
                <template slot-scope="scope">
                    <div style="text-align: left" :id="scope.row.states" v-if="scope.row.states">
                        <p v-for="(m,n) in scope.row.states" :key="n">
                            {{n+1}}、<i :style="{color:m==2?'#67C23A':'#F56C6C',verticalAlign: '-1px'}"
                                       :class="{'iconfont':true,'icongou':m==2,'iconcha':m!=2}"></i>
                        </p>
                    </div>
                    <div v-if="!scope.row.states||scope.row.states.length===0">无</div>
                </template>
            </el-table-column>
            <el-table-column align="center" prop="stateDesc" label="情况说明">
                <template slot-scope="scope">
                    <div style="text-align: left" :id="scope.row.stateDescs" v-if="scope.row.stateDescs">
                        <p v-for="(m,n) in scope.row.stateDescs" :key="n">
                            {{n+1}}、{{m}}
                        </p>
                    </div>
                    <div v-if="!scope.row.stateDescs||scope.row.stateDescs.length===0">无</div>
                </template>
            </el-table-column>
            <el-table-column align="center" label="下月计划">
                <template slot-scope="scope">
                    <!--  <div style="text-align: left" :id="scope.row.plan" v-if="scope.row.plan">
                          <p v-for="(m,n) in scope.row.plan" :key="n">
                              {{n+1}}、{{m}}
                          </p>
                      </div>
                      <div v-if="scope.row.plan.length===0">无</div>-->
                    无
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "elTableBase",
        props: {
            currentPage: {
                type: Number,
                default: _ => {
                    return 1
                }
            },
            btnImg: {
                type: Number,
                default: _ => {
                    return 1
                }
            }
        },
        data() {
            return {
                tableData: [],
                allData: [],
                increase: []
            }
        },
        methods: {
            calculation(v1, v2) {
                if (v1 && v2) {
                    return Math.round(Math.round((v1 - v2) / 100));
                }
                if (!v2) {
                    return Math.round(Math.round(v1 / 100));
                }
            },
            cellEChartsInit(table, page) {
                if (table && table.length > 0) {
                    for (let i = 0; i < table.length; i++) {
                        let carryOut = Math.round(table[i]["progressRate"] / 100);
                        let undone = 100 - carryOut;
                        let option = {
                            series: [
                                {
                                    type: 'pie',
                                    radius: ['40%', '45%'],
                                    center: ['25%', '50%'],
                                    avoidLabelOverlap: false,
                                    hoverAnimation: false,
                                    label: {show: true, position: 'center', textStyle: {color: "white", fontSize: 16}},
                                    labelLine: {show: false},
                                    itemStyle: {
                                        normal: {
                                            color: function (v) {
                                                let colorList = ["#15b3e2", "#2e65fd"];
                                                return colorList[v.dataIndex];
                                            }
                                        }
                                    },
                                    data: [
                                        {value: carryOut, name: carryOut + '%'},
                                        {value: undone, name: ''},
                                    ]
                                }
                            ]
                        };
                        this.$nextTick(_ => {
                            this.$echarts["init"](document.getElementById('ID' + page + '-' + (table[i].tableIndex))).setOption(option);
                        })
                        let tableChildren = table[i].children ? table[i].children : [];
                        if (tableChildren && tableChildren.length > 0) {
                            for (let j = 0; j < tableChildren.length; j++) {
                                let carryOut_c = Math.round(tableChildren[j]["progressRate"] / 100);
                                let undone_c = 100 - carryOut_c;
                                let option_ = {
                                    series: [
                                        {
                                            type: 'pie',
                                            radius: ['40%', '45%'],
                                            center: ['25%', '50%'],
                                            avoidLabelOverlap: false,
                                            hoverAnimation: false,
                                            label: {
                                                show: true,
                                                position: 'center',
                                                textStyle: {color: "white", fontSize: 16}
                                            },
                                            labelLine: {show: false},
                                            itemStyle: {
                                                normal: {
                                                    color: function (v) {
                                                        let colorList = ["#15b3e2", "#2e65fd"];
                                                        return colorList[v.dataIndex];
                                                    }
                                                }
                                            },
                                            data: [
                                                {value: carryOut_c, name: carryOut_c + '%'},
                                                {value: undone_c, name: ''},
                                            ]
                                        }
                                    ]
                                };
                                this.$nextTick(_ => {
                                    this.$echarts["init"](document.getElementById('ID' + page + '-' + (tableChildren[j].tableIndex))).setOption(option_);
                                })
                            }
                        }
                    }
                }
            },
            refresh(v, typeSelect, increase) {
                this.increase = increase;
                let project = [];
                v.forEach(a => {
                    let child = a.child;
                    if (child.length > 0) {
                        for (let j in child) {
                            project.push(child[j]);
                        }
                    }
                });
                project.forEach((i, x) => {
                    if (i.child && i.child.length > 0) {
                        let childPlans = i.child[0].plans;
                        let plans = [];
                        let stateDescs = [];
                        let state = [];
                        childPlans.forEach((m, n) => {
                            plans.push(m.planDetail);
                            state.push(m.state);
                            if (m.stateDesc) {
                                stateDescs.push(m.stateDesc);
                            }
                        });
                        i["plan"] = (plans && plans.length > 0) ? plans : [];
                        i["states"] = (state && state.length > 0) ? state : [];
                        i["stateDescs"] = (stateDescs && stateDescs.length > 0) ? stateDescs : [];
                        i["tableIndex"] = x + 1;
                    }
                    if (i["subProject"] && i["subProject"].length > 0) {
                        let subProject = i["subProject"];
                        subProject.forEach((a, b) => {
                            if (a.child && a.child.length > 0) {
                                let scPlans = a.child[0].plans;
                                let aPlans = [];
                                let state = [];
                                let stateDescs = [];
                                scPlans.forEach((c, d) => {
                                    aPlans.push(c.planDetail);
                                    state.push(c.state);
                                    if (c.stateDesc) {
                                        stateDescs.push(c.stateDesc);
                                    }
                                });
                                a["plan"] = (aPlans && aPlans.length > 0) ? aPlans : [];
                                a["states"] = (state && state.length > 0) ? state : [];
                                a["stateDescs"] = (stateDescs && stateDescs.length > 0) ? stateDescs : [];
                                a["tableIndex"] = (x + 1) + '.' + (b + 1);
                            }
                        });
                        if (i["subProject"] && i["subProject"].length > 0) {
                            i["children"] = i["subProject"];
                        } else {
                            i["children"] = [];
                        }
                    }
                });
                this.formatterData(project, typeSelect);
            },
            formatterData(v, typeSelect) {
                let arr_ = this.DeepCopy(v);
                let arr = [];
                arr_.forEach(i => {
                    if (typeSelect === 2) {
                        arr = [];
                    } else if (typeSelect === 4) {
                        arr.push(i)
                    } else if (typeSelect === 3) {
                        arr.push(i)
                    } else if (typeSelect === 1) {
                        arr.push(i)
                    }
                });
                //分页
                let n = 0;
                let sure = [];
                for (let i = 0; i < arr.length / 4; i++) {
                    sure.push([]);
                }
                //分页
                arr.forEach((i, x) => {
                    if (x % 4 === 0 && x !== 0) {
                        n++;
                    }
                    sure[n].push(i);
                });
                this.$emit('allData', arr);
                this.tableData = sure[this.currentPage - 1];
                this.$nextTick(_ => {
                    this.cellEChartsInit(this.tableData, this.currentPage)
                })
            },
        }
    }
</script>

<style scoped lang="less">
    .elTableBase {
        width: 100%;
        height: calc(100% - 30px);

        /deep/ .el-table {
            .el-table__body-wrapper {
                .el-table__body {
                    .el-table__row {
                        td {
                            .cell {
                                .el-table__expand-icon {
                                    .el-icon-arrow-right {
                                        color: white;
                                        font-size: 20px;
                                        vertical-align: -2px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>