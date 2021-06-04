<template>
    <div style="width: 100%;height: 100%">
        <my-table-base ref="table"
                       :columns="columns"
                       :table-data="tableData"
                       :search="false"
                       :pagination="false"
                       :gridIndex="false"
                       :showHeader="false"
                       chooseItem="single"
                       @cellCheck="cellCheck"
                       :border="true">
        </my-table-base>
    </div>
</template>

<script>
    import MyTableBase from "../../../components/common/myTableBase";

    export default {
        name: "collapseTable",
        components: {MyTableBase},
        props: {
            type: {
                type: String,
                default: function () {
                    return ''
                }
            }
        },
        data() {
            return {
                columns: [
                    {prop: 'a', label: '111', cellCheck: true, checked: 'base'},
                    {prop: 'b', label: '222'},
                    {prop: 'c', label: '333'},
                    {prop: 'd', label: '444'},
                    {prop: 'e', label: '555'},
                ],
                tableData: [
                    {a: '1', b: '2', c: '3', d: '4', e: '5'},
                    {a: '1', b: '2', c: '3', d: '4', e: '5'},
                    {a: '1', b: '2', c: '3', d: '4', e: '5'},
                    {a: '1', b: '2', c: '3', d: '4', e: '5'},
                    {a: '1', b: '2', c: '3', d: '4', e: '5'},
                    {a: '1', b: '2', c: '3', d: '4', e: '5'},
                    {a: '1', b: '2', c: '3', d: '4', e: '5'},
                    {a: '1', b: '2', c: '3', d: '4', e: '5'},
                    {a: '1', b: '2', c: '3', d: '4', e: '5'},
                    {a: '1', b: '2', c: '3', d: '4', e: '5'},
                    {a: '1', b: '2', c: '3', d: '4', e: '5'},
                    {a: '1', b: '2', c: '3', d: '4', e: '5'},
                    {a: '1', b: '2', c: '3', d: '4', e: '5'},
                    {a: '1', b: '2', c: '3', d: '4', e: '5'},
                ]
            }
        },
        methods: {
            cellCheck(checked, row, index) {
                this.$emit('cellCheck', checked, row, index, this.type)
            }
        }
    }
</script>

<style scoped>

</style>