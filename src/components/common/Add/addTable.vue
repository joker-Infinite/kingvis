<template>
  <div class="addTable">
    <el-dialog
      title="添加"
      :modal-append-to-body="false"
      @close="confirmClick('')"
      :visible.sync="dialogFormVisible"
    >
      <el-form :model="form">
        <!-- <el-form-item label="指标名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" placeholder="请输入指标名称(选填)" autocomplete="off"></el-input>
                </el-form-item> -->
        <el-form-item label="最高零售指导价:汽油" :label-width="formLabelWidth">
          <el-input
            v-model="form.qy"
            placeholder="最高零售指导价:汽油(选填)"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="最高零售指导价:柴油" :label-width="formLabelWidth">
          <el-input
            v-model="form.cy"
            placeholder="最高零售指导价:柴油(选填)"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="中国汽油批发价格指数"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="form.qypf"
            placeholder="中国汽油批发价格指数(选填)"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="中国柴油批发价格指数"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="form.cypf"
            placeholder="中国柴油批发价格指数(选填)"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="最高零售指导价:#95" :label-width="formLabelWidth">
          <el-input
            v-model="form[95]"
            placeholder="最高零售指导价:#95(选填)"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="最高零售指导价:#98" :label-width="formLabelWidth">
          <el-input
            v-model="form[98]"
            placeholder="最高零售指导价:#98(选填)"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="最高零售指导价:#92" :label-width="formLabelWidth">
          <el-input
            v-model="form[92]"
            placeholder="最高零售指导价:#92(选填)"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="时间" :label-width="formLabelWidth">
          <el-date-picker
            v-model="form.item"
            type="date"
            placeholder="请选择一个或多个日期(选填)"
          ></el-date-picker>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeClick('取消')">取 消</el-button>
        <el-button type="primary" @click="closeClick('确定')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import testVue from "../../../pages/comparison/test.vue";
export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: "",
        qy: "",
        cy: "",
        qypf: "",
        cypf: "",
        "95": "",
        "98": "",
        "92": "",
        item: ""
      },
      formLabelWidth: "170px"
    };
  },
  methods: {
    confirmClick() {
      this.$confirm(
        "检测到未保存的内容，是否在离开页面前保存修改？",
        "确认信息",
        {
          distinguishCancelAndClose: false,
          closeOnClickModal: false,
          closeOnPressEscape: false,
          showClose: false,
          confirmButtonText: "保存",
          cancelButtonText: "放弃修改"
        }
      )
        .then(() => {
          (this.dialogFormVisible = false), this.$emit("isForm", this.form);
          this.$message({
            type: "success",
            message: "保存修改"
          });
        })
        .catch(action => {
          (this.dialogFormVisible = false),
            this.$message({
              type: "info",
              message:
                action === "cancel" ? "放弃保存并离开页面" : "停留在当前页面"
            });
        });
    },
    closeClick(val) {
      if (val !== "确认") {
        this.dialogFormVisible = false;
      } else {
        this.dialogFormVisible = true;
      }
    }
  }
};
</script>
<style scoped>
.addTable /deep/ .el-dialog {
  margin-top: 10vh !important;
}
</style>
