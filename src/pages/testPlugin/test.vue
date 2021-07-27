<template>
    <div style="width: 100%;height: 100%">
        <vxe-table-base :showFooter="true"
                        :resizable="true"
                        defaultHeaderActive="a"
                        :isIndex="false"
                        :pagination="false"
                        :tableData="tableData"
                        :columns="columns">
        </vxe-table-base>
        <public_bar_line_only style="height: 300px" layout="horizontal" show-type="bar"></public_bar_line_only>
    </div>
</template>

<script>
    import VxeTableBase from "./vxe/vxeTableBase";
    import Public_bar_line_double from "./public_bar_line_double/public_bar_line_double";
    import Public_bar_line_only from "./public_bar_line_only/public_bar_line_only";

    export default {
        name: "test",
        components: {Public_bar_line_only, Public_bar_line_double, VxeTableBase},
        data() {
            return {
                tableData: [
                    {
                        a: 1,
                        b: 2,
                        c: 3132,
                        d: 4,
                        e: 5,
                        f: '<span style="color: red">字母 <span style="color: blue">aa</span> -1</span>',
                        g: 9
                    },
                    {
                        a: 3,
                        b: 1,
                        c: 3,
                        d: 313,
                        e: 5,
                        f: '<a href="/">我是链接</a>',
                        g: 9
                    },
                    {
                        a: 2,
                        b: 2,
                        c: 3,
                        d: 4,
                        e: 5,
                        f: '<a href="/">我是链接</a>',
                        g: 9
                    },
                    {a: 2, b: 2, c: 3, d: 4, e: 5, f: '<span class="iconfont iconstart"></span>', g: 9},
                ],
                columns: [
                    {code: "a", value: "AAA", sortable: true},
                    {
                        code: "b",
                        value: "BBB",
                        filters: [{value: 1, label: '1'}, {value: 2, label: '2'}],
                        filterMultiple: false,
                        sortable: true
                    },
                    {
                        code: "c", value: "CCC", showOverflow: true, formatter: v => {
                            return v.cellValue
                        }
                    },
                    {code: "d", value: "DDD", showOverflow: true},
                    {code: "f", value: "FFF", type: "html"},
                ],
            }
        }
    }
</script>