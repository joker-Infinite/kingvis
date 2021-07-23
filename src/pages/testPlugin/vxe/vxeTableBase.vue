<template>
    <div class="vxeTableBase" :style="{height:height}">
        <vxe-table ref="vxeTable"
                   :border="false"
                   size="medium"
                   show-header-overflow
                   highlight-hover-row
                   highlight-current-row
                   highlight-hover-column
                   stripe
                   :keyboard-config="{isArrow: true}"
                   :resizable="resizable"
                   :show-footer="showFooter"
                   :height="parseInt(height)-(pagination?50:0)+'px'"
                   :data="tableData"
                   :show-header="true"
                   :loading="loading"
                   :checkbox-config="chooseItem !== 'single'?{labelField: 'name', highlight: true, range: true, trigger: 'row'}:{}"
                   :seq-config="{seqMethod}"
                   :header-cell-class-name="headerCellClassName"
                   :footer-method="footerMethod"
                   @header-cell-click="headerCellClick"
                   @checkbox-change="checkboxChange"
                   @checkbox-all="checkboxAll"
                   @current-change="currentChange">
            <vxe-table-column type="checkbox" fixed="left" align="center" width="60"
                              v-if="chooseItem !== 'single'"></vxe-table-column>
            <vxe-table-column type="seq" fixed="left" title="序号" width="60" align="center"
                              v-if="isIndex"></vxe-table-column>
            <template v-for="(item,index) in columns">
                <vxe-table-column :width="item.width"
                                  :align="item.align?item.align:'center'"
                                  :sortable="item.sortable"
                                  :filters="item.filters"
                                  :filter-multiple="item.filterMultiple"
                                  :show-overflow="item.showOverflow"
                                  :fixed="item.fixed"
                                  :field="item.code"
                                  :title="item.value"
                                  :type="item.type"
                                  :formatter="item.formatter"
                                  v-if="!(item.children&&item.children.length>0)">
                </vxe-table-column>
                <vxe-table-colgroup :align="item.align?item.align:'center'"
                                    :field="item.code"
                                    :title="item.value"
                                    v-if="item.children&&item.children.length>0">
                    <template v-if="item.children&&item.children.length>0" v-for="(cItem,cIndex) in item.children">
                        <vxe-table-column :align="cItem.align?cItem.align:'center'"
                                          :field="cItem.code"
                                          :type="cItem.type"
                                          :filters="cItem.filters"
                                          :showOverflow="cItem.showOverflow"
                                          :formatter="cIndex.formatter"
                                          :title="cItem.value">
                        </vxe-table-column>
                    </template>
                </vxe-table-colgroup>
            </template>
        </vxe-table>
        <vxe-pager class="vxePager" v-if="pagination"></vxe-pager>
    </div>
</template>

<script>
    import "./vxeTableBase.less"

    export default {
        name: "vxeTableBase",
        props: {
            showFooter: {
                type: Boolean,
                default: () => {
                    return false;
                }
            },
            chooseItem: {
                type: String,
                default: () => {
                    return "single"
                }
            },
            isIndex: {
                type: Boolean,
                default: () => {
                    return false
                }
            },
            resizable: {
                type: Boolean,
                default: () => {
                    return false
                }
            },
            columns: {
                type: Array,
                default: () => {
                    return []
                }
            },
            tableData: {
                type: Array,
                default: () => {
                    return []
                }
            },
            defaultHeaderActive: {
                type: String,
                default: () => {
                    return ""
                }
            },
            loading: {
                type: Boolean,
                default: () => {
                    return false;
                }
            },
            height: {
                type: String,
                default: () => {
                    return "450px"
                }
            },
            pagination: {
                type: Boolean,
                default: () => {
                    return true
                }
            }
        },
        data() {
            return {
                cellRow: null,
                cellColumn: null,
                headerActive: ''
            }
        },
        methods: {
            /**
             * 点击行选择 单选
             * @param newValue
             * @param oldValue
             * */
            currentChange({newValue, oldValue}) {
                console.log(newValue, oldValue)
            },
            /**
             * 点击头部全选 多选
             * @param records
             * */
            checkboxAll({records}) {
                console.log(records)
            },
            /**
             * 点击列表行选择 多选
             * @param records
             * */
            checkboxChange({records}) {
                console.log(records)
            },
            /**
             * 点击头部单元格
             * @param $rowIndex
             * @param column
             * */
            headerCellClick({$rowIndex, column}) {
                if (column.property) {
                    this.headerActive = column.property;
                }
            },
            /**
             * 展示序号的方法
             * @param rowIndex
             * */
            seqMethod({rowIndex}) {
                return rowIndex + 1;
            },
            /**
             * 选中的表头单元格追加className
             * @param column
             * */
            headerCellClassName({column}) {
                if (column.property && column.property === this.headerActive) {
                    return "bgB_cW"
                }
            },
            /**
             *底部行显示数据
             * @param columns
             * @param data
             * */
            footerMethod({columns, data}) {
                const sums = []
                columns.forEach((column) => {
                    if (!column.property) {
                        sums.push('和值')
                    } else {
                        sums.push(this.sumNum(data, column.property, column.title))
                    }
                })
                return [sums]
            },
            /**
             *处理数据
             * @param list 列数据
             * @param field 列key
             * @param title 列名
             * */
            sumNum(list, field, title) {
                let count = 0
                list.forEach(item => {
                    let value = item[field];
                    if (typeof Number(value) === 'number' && !isNaN(value)) {
                        count += Number(item[field])
                    }
                })
                return "sum(" + title + ")：" + count
            },
        },
        mounted() {
            this.headerActive = this.defaultHeaderActive;
        }
    }
</script>