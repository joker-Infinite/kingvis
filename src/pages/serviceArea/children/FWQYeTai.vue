<template>
  <div class="con">
    <div class="checkBox">
      <el-form :model="formData" label-width="100px">
        <el-col :span="24">
          <el-form-item label="车流量：">
            <el-checkbox-group v-model="formData.car">
              <el-checkbox label="小于等于1000"></el-checkbox>
              <el-checkbox label="1000-2000"></el-checkbox>
              <el-checkbox label="2000-3000"></el-checkbox>
              <el-checkbox label="3000-5000"></el-checkbox>
              <el-checkbox label="50000以上"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="服务区品牌：">
            <el-checkbox-group v-model="formData.brand">
              <el-checkbox label="一线品牌"></el-checkbox>
              <el-checkbox label="特色品牌"></el-checkbox>
              <el-checkbox label="传统品牌"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="服务区业态：">
            <el-checkbox-group v-model="formData.format">
              <el-checkbox label="KTC"></el-checkbox>
              <el-checkbox label="麦当劳"></el-checkbox>
              <el-checkbox label="大娘水饺"></el-checkbox>
              <el-checkbox label="更多分类"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-col>
      </el-form>
    </div>
    <div class="table">
      <my-table
        :isPagination="true"
        :columns="columns"
        height="800px"
        :border="true"
        :data="tableData"
        :multiple="false"
      ></my-table>
    </div>
  </div>
</template>

<script>
import MyTable from "../../../components/common/myTable";

export default {
  name: "FWQYeTai",
  components: { MyTable },
  data() {
    return {
      columns: [
        { prop: "a", label: "服务区名称" },
        { prop: "b", label: "高速名称" },
        {
          prop: "c",
          label: "车流量（辆）",
          children: [
            { prop: "c1", label: "大车" },
            { prop: "c2", label: "小车" }
          ]
        },
        { prop: "d", label: "收益（元）" },
        { prop: "e", label: "利润（元）" },
        { prop: "f", label: "坪效（元）" },
        { prop: "g", label: "面积（m）" },
        {
          prop: "h",
          label: "业态订单数",
          children: [
            { prop: "h1", label: "加油" },
            { prop: "h2", label: "小吃" },
            { prop: "h3", label: "便利店" },
            { prop: "h4", label: "餐饮" }
          ]
        }
      ],
      tableData: [
        {
          a: "11",
          b: "22",
          c1: "33",
          c2: "44",
          d: "55",
          e: "66",
          f: "77",
          g: "88",
          h1: "99",
          h2: "00",
          h3: "21",
          h4: "32"
        }
      ],
      formData: {
        car: [],
        brand: [],
        format: []
      }
    };
  }
};
</script>

<style scoped lang="less">
.con {
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .checkBox {
    /*width: 100%;*/
    padding: 10px;
    height: 250px;
    background: #fff;
  }

  .table {
    height: 100%;
    background: #fff;
  }
}
</style>
