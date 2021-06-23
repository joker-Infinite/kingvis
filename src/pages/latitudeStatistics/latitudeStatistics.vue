<template>
  <div class="latitudeStatistics">
    <my-table-base
      :search="false"
      :buttons="buttons"
      :columns="columns"
      :table-data="tableData"
      :operations="operations"
    ></my-table-base>
    <my-dialog
      title="新增"
      width="900px"
      height="200px"
      :visible.sync="visible"
    >
      <el-form label-width="100px" :model="form">
        <template v-for="i in columns">
          <el-col :span="12" v-if="!i.hidden">
            <el-form-item :label="i.label">
              <el-input v-model="form[i.prop]"></el-input>
            </el-form-item>
          </el-col>
        </template>
      </el-form>
      <div slot="footerButton">
        <el-button size="medium" type="primary" @click="save">确认</el-button>
        <el-button size="medium" @click="visible = false">取消</el-button>
      </div>
    </my-dialog>
  </div>
</template>

<script>
import MyDialog from "../../components/common/myDialog";
import MyTableBase from "../../components/common/myTableBase";

export default {
  name: "latitudeStatistics",
  components: { MyTableBase, MyDialog },
  data() {
    return {
      visible: false,
      columns: [
        { prop: "dimensionName", label: "维度名称" },
        { prop: "dimensionType", label: "维度类型" },
        { prop: "dimensionValue", label: "维度值" },
        { prop: "dimensionCause", label: "维度范围" },
        { prop: "dimensionId", label: "维度ID", hidden: true },
        { prop: "businessType", label: "业务类型" }
      ],
      tableData: [],
      buttons: [
        {
          name: "新增",
          icon: "el-icon-plus",
          callback: v => {
            this.visible = true;
          }
        }
      ],
      operations: [
        {
          name: "编辑",
          type: "info",
          callback: v => {}
        },
        {
          name: "删除",
          type: "danger",
          callback: v => {
            this.$confirm("确定要删除吗？", "提示", {
              type: "warning"
            }).then(() => {
              this.$axios
                .delete("/api/admin/util/del_dimension", {
                  params: { dimensionId: v["dimensionId"] }
                })
                .then(res => {
                  this.$message.success("删除成功！");
                  this.refresh();
                })
                .catch(err => {
                  this.$message.error("删除失败！");
                });
            });
          }
        }
      ],
      form: {
        businessType: "",
        dimensionCause: "",
        dimensionId: "",
        dimensionName: "",
        dimensionType: "",
        dimensionValue: ""
      }
    };
  },
  methods: {
    save() {
      this.$axios
        .post("/api/admin/util/add_dimension", this.form)
        .then(res => {
          this.$message.success("添加成功！");
          this.visible = false;
        })
        .catch(err => {
          this.$message.error("添加失败！");
        });
    },
    refresh() {
      this.$axios.get("/api/admin/util/get_dimension").then(res => {
        this.tableData = res.data.data;
      });
    }
  },
  mounted() {
    this.refresh();
  }
};
</script>

<style scoped lang="less">
.latitudeStatistics {
  width: calc(100% - 20px);
  height: 100%;
  padding: 10px 0;
}
</style>
