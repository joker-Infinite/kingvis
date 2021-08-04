<template>
    <div class="secondLevelPage flexRowSpaceBetween">
        <div class="secondLevelPage_left flexColumnSpaceBetween">
            <div class="SLPLT">
                <div :class="{'title':true,'title_':theme===2}">今年实业公司营收趋势</div>
                <div :class="{'eChartsStyle':true,'eChartsStyle_':theme===2}"></div>
            </div>
            <div class="SLPLB">
                <div :class="{'title':true,'title_':theme===2}">今年实业公司营收趋势</div>
                <div :class="{'eChartsStyle':true,'eChartsStyle_':theme===2}">
                    <p class="money">单位：万元</p>
                    <div class="vxeTable">
                        <vxe-table align="center"
                                   stripe
                                   :data="tableData"
                                   border="none"
                                   :tooltip-config="{enterable: true}"
                                   ref="vxeTable"
                                   height="100%">
                            <vxe-table-column field="a" title="服务区名称"></vxe-table-column>
                            <vxe-table-column field="a" title="当月收入"></vxe-table-column>
                            <vxe-table-column field="a" title="当月餐饮"></vxe-table-column>
                            <vxe-table-column field="a" title="当月小吃营收"></vxe-table-column>
                            <vxe-table-column field="a" title="当月超市营收"></vxe-table-column>
                            <vxe-table-column field="a" title="上月收入"></vxe-table-column>
                            <vxe-table-column field="a" title="累计收银"></vxe-table-column>
                            <vxe-table-column field="a" title="驶入车辆(辆)"></vxe-table-column>
                        </vxe-table>
                    </div>
                </div>
            </div>
        </div>
        <div class="secondLevelPage_right flexColumnSpaceBetween">
            <div class="SLPRT">
                <div :class="{'title':true,'title_':theme===2}">今年营收TOP4</div>
                <div :class="{'eChartsStyle':true,'eChartsStyle_':theme===2}"></div>
            </div>
            <div class="SLPRC">
                <div :class="{'title':true,'title_':theme===2}">今年营收占比</div>
                <div :class="{'eChartsStyle':true,'eChartsStyle_':theme===2}"></div>
            </div>
            <div class="SLPRB">
                <div :class="{'title':true,'title_':theme===2}">当月营收占比</div>
                <div :class="{'eChartsStyle':true,'eChartsStyle_':theme===2}"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import "../less/secondLevelPage.less"
    import "../less/common.less"

    export default {
        name: "secondLevelPage",
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
                tableData: [{a: 111}]
            }
        }
    }
</script>

<style scoped>

</style>