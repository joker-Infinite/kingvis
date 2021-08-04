<template>
    <div :class="{'firstLevelPage':true, 'flexRowSpaceBetween':true,'firstLevelPage_':theme===2}">
        <div class="firstLevelPage_left flexColumnSpaceBetween">
            <div class="FLPLT">
                <div :class="{'title':true,'title_':theme===2}">今年实业公司营收趋势</div>
                <div :class="{'eChartsStyle':true,'eChartsStyle_':theme===2}"></div>
            </div>
            <div class="FLPLB">
                <div :class="{'title':true,'title_':theme===2}">今年实业公司营收趋势</div>
                <div :class="{'eChartsStyle':true,'eChartsStyle_':theme===2}">
                    <p class="money">单位：万元</p>
                    <div class="vxeTable">
                        <vxe-table align="center"
                                   stripe
                                   highlight-hover-row
                                   highlight-current-row
                                   :data="tableData"
                                   border="none"
                                   :tooltip-config="{enterable: true}"
                                   ref="vxeTable"
                                   height="100%"
                                   @current-change="currentChange">
                            <vxe-table-column field="a" title="名称"></vxe-table-column>
                            <vxe-table-colgroup title="单月收入">
                                <vxe-table-column field="a" title="本月"></vxe-table-column>
                                <vxe-table-column field="a" title="上年同期"></vxe-table-column>
                                <vxe-table-column field="a" title="同比增长"></vxe-table-column>
                            </vxe-table-colgroup>
                            <vxe-table-colgroup title="累计收入">
                                <vxe-table-column field="a" title="环比增长"></vxe-table-column>
                                <vxe-table-column field="a" title="本年累计"></vxe-table-column>
                                <vxe-table-column field="a" title="上年同期"></vxe-table-column>
                                <vxe-table-column field="a" title="同比增长"></vxe-table-column>
                            </vxe-table-colgroup>
                            <vxe-table-colgroup title="目标值">
                                <vxe-table-column field="a" title="目标值"></vxe-table-column>
                                <vxe-table-column field="a" title="完成率"></vxe-table-column>
                                <vxe-table-column field="a" title="与时间进度差值"></vxe-table-column>
                                <vxe-table-column field="a" title="完成率排名"></vxe-table-column>
                            </vxe-table-colgroup>
                        </vxe-table>
                    </div>
                </div>
            </div>
        </div>
        <div class="firstLevelPage_right flexColumnSpaceBetween">
            <div class="FLPRT">
                <div :class="{'title':true,'title_':theme===2}">今年实业公司营收趋势</div>
                <div :class="{'eChartsStyle':true,'eChartsStyle_':theme===2}"></div>
            </div>
            <div class="FLRPC flexRowSpaceBetween">
                <div class="FLRPCL">
                    <div :class="{'title':true,'title_':theme===2}">今年实业公司营收趋势</div>
                    <div :class="{'eChartsStyle':true,'eChartsStyle_':theme===2}"></div>
                </div>
                <div class="FLRPCR">
                    <div :class="{'title':true,'title_':theme===2}">今年实业公司营收趋势</div>
                    <div :class="{'eChartsStyle':true,'eChartsStyle_':theme===2}"></div>
                </div>
            </div>
            <div class="FLRPB flexRowSpaceBetween">
                <div class="FLRPBL">
                    <div :class="{'title':true,'title_':theme===2}">今年实业公司营收趋势</div>
                    <div :class="{'eChartsStyle':true,'eChartsStyle_':theme===2}"></div>
                </div>
                <div class="FLRPBR">
                    <div :class="{'title':true,'title_':theme===2}">今年实业公司营收趋势</div>
                    <div :class="{'eChartsStyle':true,'eChartsStyle_':theme===2}"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import "../less/firstLevelPage.less"
    import "../less/common.less"

    export default {
        name: "firstLevelPage",
        props: {
            theme: {
                type: Number,
                default: () => {
                    return 1
                }
            }
        },
        data() {
            return {
                tableData: [
                    {a: 11111}
                ],
            }
        },
        methods: {
            currentChange({newValue}) {
                this.$emit("selectSBU",newValue)
            }
        }
    }
</script>