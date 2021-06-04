<template>
  <div class="table" :id="id">
    <el-table
      :data="data"
      :height="parseInt(height) - 200 + 'px'"
      style="width: 100%;"
      :border="border"
      highlight-current-row
      :row-class-name="tableRowClassName"
      :header-cell-style="headerCellStyle"
      @current-change="singleChoice"
      @selection-change="multipleChoice"
    >
      <el-table-column
        v-if="multiple"
        align="center"
        type="selection"
        width="55"
      >
      </el-table-column>
      <el-table-column
        v-if="showIndex"
        label="序号"
        align="center"
        type="index"
        width="50"
      >
      </el-table-column>
      <el-table-column
        v-for="(item, index) in columns"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        :align="item.align ? item.align : 'center'"
        :width="item.width ? item.width : ''"
      >
        <el-table-column
          v-if="item.children && item.children.length > 0"
          v-for="(cit, cix) in item.children"
          :key="cix"
          :align="cit.align ? cit.align : 'center'"
          :prop="cit.prop"
          :label="cit.label"
        ></el-table-column>
      </el-table-column>
      <el-table-column v-if="isDetails" label="操作" align="center" width="100">
        <template slot-scope="scope">
          <el-button class="btn" size="mini" @click="details(scope)"
            >详情</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-if="isPagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage1"
      :page-sizes="[5, 10, 15, 20, 30]"
      :page-size="numberCount"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalCount"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "myTable",
  props: {
    totalCount: {
      type: Number,
      default: 0
    },
    data: {
      type: Array,
      default: []
    },
    columns: {
      type: Array,
      default: []
    },
    multiple: {
      type: Boolean,
      default: true
    },
    showIndex: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: true
    },
    height: {
      type: String,
      default: "400px"
    },
    isPagination: {
      type: Boolean,
      default: false
    },
    isDetails: {
      type: Boolean,
      default: false
    },
    headerCellStyle: Object,
    rowStyleData: Object,
    numberCount: {
      type: Number,
      default: 5
    },
    id: {
      type: String,
      default: "tableId"
    }
  },
  data() {
    return {
      currentPage1: 1,
      currentPage2: 2,
      currentPage3: 3,
      currentPage4: 4,
      ClickTotal: {
        pageSize: this.numberCount,
        pageNum: 0
      },
      obj: {}
    };
  },
  methods: {
    details(row) {
      this.$emit("selectionChange", row.row);
    },
    singleChoice(v) {
      this.$emit("selectionChange", v);
    },
    multipleChoice(v) {
      this.$emit("selectionChange", v);
    },
    handleSizeChange(val) {
      this.ClickTotal.pageSize = val;
      this.$emit("ClickTotal", this.ClickTotal);
    },
    handleCurrentChange(val) {
      this.ClickTotal.pageNum = val;
      this.$emit("ClickTotal", this.ClickTotal);
    },
    tableRowClassName({ row, rowIndex }) {
      return "row" + rowIndex;
    }
  }
};
</script>

<style scoped lang="less">
.table {
  padding: 10px;
}

.table /deep/ .el-pagination {
  padding: 5px;
  text-align: right;
}

.btn {
  border: none !important;
  background: none !important;
}
</style>
