<template>
    <div class="MonthlyReportTable">
        <vxe-table align="center"
                   stripe
                   highlight-hover-row
                   :data="tableData"
                   :tooltip-config="{enterable: true}"
                   border="none"
                   height="100%">
            <vxe-table-column field="a" title="AAA"></vxe-table-column>
            <vxe-table-column field="b" title="BBB"></vxe-table-column>
            <vxe-table-column field="c" title="CCC"></vxe-table-column>
            <vxe-table-column field="d" title="DDD"></vxe-table-column>
            <vxe-table-column field="e" title="EEE"></vxe-table-column>
        </vxe-table>
    </div>
</template>

<script>
    import "./MonthlyReportTable.less"

    export default {
        name: "MonthlyReportTable",
        data() {
            return {
                tableData: [
                    {a: 1, b: 2, c: 3, d: 4, e: 5},
                    {a: 1, b: 2, c: 3, d: 4, e: 5},
                    {a: 1, b: 2, c: 3, d: 4, e: 5},
                ]
            }
        }
    }
</script>