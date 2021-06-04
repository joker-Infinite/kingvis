<template>
  <div style="width: 100%;height: 100%">
    <el-dialog title="详情" :visible.sync="visible" :modal="false">
      <el-form :model="form" label-width="100px" style="height: 300px" disabled>
        <el-col :span="8">
          <el-form-item label="名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="面积">
            <el-input v-model="form.area"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="租金">
            <el-input v-model="form.income"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="合同签署日期">
            <el-input v-model="form.cost"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="合同生效日期">
            <el-input v-model="form.profit"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="合同结束日期">
            <el-input v-model="form.time"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="描述">
            <el-input
              type="textarea"
              resize="none"
              rows="4"
              v-model="form.remark"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "contractInformation",
  data() {
    return {
      visible: false,
      form: {
        name: "",
        area: "50平方米",
        income: "10000",
        cost: "1000",
        profit: "9000",
        time: "",
        remark: ""
      }
    };
  },
  methods: {
    openDialog(v) {
      this.visible = true;
      this.form.name = v.a;
      this.form.income = v.c;
      this.form.remark = v.g;
      this.form.area = v.b;
      this.form.cost = v.d;
      this.form.profit = v.e;
      this.form.time = v.f;
    }
  }
};
</script>

<style scoped></style>
