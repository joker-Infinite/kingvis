<template>
  <div>
    <el-dialog
      :modal="false"
      title="自定义模板"
      :visible.sync="visible"
      style="height: 800px"
      width="1000px"
    >
      <div class="head">
        <div class="selected">
          <div class="checkAll">
            <el-checkbox
              :indeterminate="isIndeterminate"
              v-model="checkAll"
              @change="selectAll(checkAll)"
              >全选
            </el-checkbox>
          </div>
          <el-checkbox-group v-model="checked" @change="selectItem(checked)">
            <el-checkbox
              v-for="(it, ix) in checkData"
              :label="it.label"
              :value="it.value"
              :key="ix"
            ></el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
      <div class="btn">
        <el-button type="success" @click="nowUse">立即使用</el-button>
        <el-button type="primary" @click="save">存为模板</el-button>
        <el-button type="info" @click="visible = false">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "customizeTemplate",
  data() {
    return {
      visible: false,
      isIndeterminate: false,
      checkAll: false,
      checkData: [
        { label: "利润", value: "profit" },
        { label: "利率", value: "interestRate" },
        { label: "收入", value: "income" },
        { label: "人流量", value: "humanTraffic" }
      ],
      tableData: [
        {
          parameter: "利润",
          serviceArea_1: "50万",
          serviceArea_2: "10万",
          serviceArea_3: "15万",
          serviceArea_4: "15万"
        },
        {
          parameter: "利率",
          serviceArea_1: "5.8",
          serviceArea_2: "3.9",
          serviceArea_3: "4.2",
          serviceArea_4: "4.2"
        },
        {
          parameter: "收入",
          serviceArea_1: "3.3",
          serviceArea_2: "9.3",
          serviceArea_3: "8.5",
          serviceArea_4: "8.5"
        },
        {
          parameter: "人流量",
          serviceArea_1: "5万",
          serviceArea_2: "1万",
          serviceArea_3: "5000",
          serviceArea_4: "5000"
        }
      ],
      tableData_: [],
      checked: []
    };
  },
  methods: {
    nowUse() {
      this.visible = false;
      this.$emit("templateEmit", this.tableData_);
    },
    save() {
      this.visible = false;
    },
    openDialog() {
      this.visible = true;
    },
    selectItem(v) {
      let data = [];
      if (this.checked.length === this.checkData.length) {
        this.isIndeterminate = false;
        this.checkAll = true;
      } else {
        this.isIndeterminate = true;
        this.checkAll = false;
      }
      if (this.checked.length === 0) {
        this.isIndeterminate = false;
      }
      this.tableData.forEach(i => {
        if (v.join(",").indexOf(i.parameter) !== -1) {
          data.push(i);
        }
      });
      this.tableData_ = data;
    },
    selectAll(v) {
      this.isIndeterminate = false;
      if (v) {
        this.checkData.forEach(i => {
          this.checked.push(i.label);
        });
        this.tableData_ = this.tableData;
      }
      if (!v) {
        this.checked = [];
        this.tableData_ = [];
      }
    }
  }
};
</script>

<style scoped lang="less">
.head {
  display: flex;
  width: 100%;

  .selected {
    width: 100%;
    height: 100px;
    overflow: scroll;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;

    .checkAll {
      width: 100% !important;
      height: 1px !important;
    }
  }

  .selected /deep/ .el-checkbox {
    width: 150px;
  }

  .selected::-webkit-scrollbar {
    display: none;
  }
}

.btn {
  text-align: right;
}
</style>
