<template>
  <div class="table_c">
    <!-- <el-button @click="add">添加</el-button> -->
    <my-table
      height="1100px"
      :showIndex="false"
      :multiple="false"
      :columns="columns"
      :headerCellStyle="{
        background: '#1d7dca',
        color: '#FFF',
        border: 'none'
      }"
      :border="false"
      :data="tabData"
    ></my-table>
  </div>
</template>

<script>
import MyTable from "../../components/common/myTable";

export default {
  name: "ComparedTest",
  data() {
    return {
      rowStyleData: {
        rowIndex: 0,
        style: {
          background: "yellow",
          color: "red"
        }
      },
      columns: [{ prop: "name", label: "服务区名称", width: "120px" }],
      tabData: [
        {
          name: "基础信息"
        },
        {
          name: "负责人"
        },
        {
          name: "联系方式"
        },
        {
          name: "经营面积"
        },
        {
          name: "占地面积"
        },
        {
          name: "运行开始时间"
        },
        {
          name: "停车位数量"
        },
        {
          name: "大车个数"
        },
        {
          name: "小车个数"
        },
        {
          name: "男蹲位"
        },
        {
          name: "女蹲位"
        },
        {
          name: "业态数量"
        },
        {
          name: "厕所等级"
        },
        {
          name: "厕所改造时间"
        },
        {
          name: "充电桩数量"
        },
        {
          name: "充电桩分布"
        },
        {
          name: "小便器阀数量"
        },
        {
          name: "面盆龙头个数"
        },
        {
          name: "便民休闲座椅"
        },
        {
          name: "保安人数"
        },
        {
          name: "保洁人数"
        },
        {
          name: "经营单位人数"
        },
        {
          name: "加油员配置"
        },
        {
          name: "加油机数量"
        },

        {
          name: "经营对比"
        },
        {
          name: "成本"
        },
        {
          name: "利润"
        },
        {
          name: "营收"
        },
        {
          name: "车流量"
        },
        {
          name: "现金流"
        },
        {
          name: "水费"
        },
        {
          name: "电费"
        },

        {
          name: "业态对比"
        },
        {
          name: "一线品牌"
        },
        {
          name: "超市"
        },
        {
          name: "小吃"
        },
        {
          name: "杂货铺"
        },
        {
          name: "经营面积"
        },
        {
          name: "整体营收"
        },
        {
          name: "餐饮"
        },
        {
          name: "其他服务"
        },

        {
          name: "品牌分布"
        },
        {
          name: "KFC"
        },
        {
          name: "猫屎咖啡"
        }
      ]
    };
  },
  methods: {
    add(inx) {
      let arr = [
        {
          1: "中馆驿服务区",
          2: "王进",
          3: "13972666131",
          4: "6784",
          5: "64666.99",
          6: "2011/4/1",
          7: "",
          8: "110",
          9: "60",
          10: "60",
          11: "86",
          12: "15194378.24",
          13: "五星",
          14: "2018/8/1",
          15: "8",
          16: "双侧",
          17: "66",
          18: "44",
          19: "14",
          20: "9",
          21: "15",
          22: "122",
          23: "13",
          24: "10",

          25: "中馆驿服务区",
          26: "",
          27: "",
          28: "",
          29: "",
          30: "",
          31: "9740.96",
          32: "299217.46",

          33: "中馆驿服务区",
          34: "",
          35: "73748",
          36: "63958",
          37: "",
          38: "",
          39: "",
          40: "328772",
          41: "158",

          42: "中馆驿服务区",
          43: "",
          44: ""
        },
        {
          1: "小池服务区",
          2: "徐全",
          3: "13307225989",
          4: "5700",
          5: "56666.95",
          6: "2013/10/1",
          7: "",
          8: "60",
          9: "120",
          10: "56",
          11: "72",
          12: "11761493.86",
          13: "四星",
          14: "2018/9/1",
          15: "8",
          16: "双侧",
          17: "50",
          18: "24",
          19: "16",
          20: "9",
          21: "14",
          22: "92",
          23: "15",
          24: "8",

          25: "小池服务区",
          26: "",
          27: "",
          28: "",
          29: "",
          30: "",
          31: "10738.7",
          32: "65578.51",

          33: "小池服务区",
          34: "",
          35: "84698",
          36: "380946",
          37: "",
          38: "",
          39: "",
          40: "395583",
          41: "",

          42: "中馆驿服务区",
          43: "",
          44: ""
        },
        {
          1: "木子店服务区",
          2: "邹俊超",
          3: "15672652828",
          4: "3344",
          5: "66667",
          6: "2011/4/1",
          7: "",
          8: "34",
          9: "100",
          10: "88",
          11: "128",
          12: "10999071.1",
          13: "四星",
          14: "2018/1/1",
          15: "8",
          16: "双侧",
          17: "88",
          18: "48",
          19: "0",
          20: "9",
          21: "15",
          22: "71",
          23: "17",
          24: "16",

          25: "木子店服务区",
          26: "",
          27: "",
          28: "",
          29: "",
          30: "",
          31: "3338",
          32: "46281.73",

          33: "木子店服务区",
          34: "",
          35: "50905",
          36: "266243",
          37: "",
          38: "",
          39: "",
          40: "520720",
          41: "",

          42: "中馆驿服务区",
          43: "",
          44: ""
        },
        {
          1: "黄梅服务区",
          2: "皮大超",
          3: "15102799002",
          4: "2000",
          5: "53333.6",
          6: "2001/1/1",
          7: "",
          8: "90",
          9: "100",
          10: "60",
          11: "60",
          12: "19028356.3",
          13: "三星",
          14: "2020/1/1",
          15: "8",
          16: "双侧",
          17: "60",
          18: "60",
          19: "0",
          20: "9",
          21: "17",
          22: "50",
          23: "19",
          24: "12",

          25: "黄梅服务区",
          26: "",
          27: "",
          28: "",
          29: "",
          30: "",
          31: "19250.66",
          32: "284539.4",

          33: "黄梅服务区",
          34: "",
          35: "118091",
          36: "971062",
          37: "",
          38: "",
          39: "",
          40: "1012035",
          41: "",

          42: "中馆驿服务区",
          43: "",
          44: ""
        }
      ];

      let obj = {};
      this.columns.push({
        prop: "service" + inx,
        label: arr[inx - 1][1]
      });
      obj["service" + inx] = "";
      this.tabData.forEach((i, index) => {
        obj["service" + inx] = arr[inx - 1][index + 1];
        Object.assign(i, obj);
      });
    },
    details(inx) {
      this.tabData.forEach((i, index) => {
        delete i["service" + inx];
      });
      this.columns.forEach((element, i) => {
        if (element.prop == "service" + inx) {
          this.columns.splice(i, 1);
        }
      });
    }
  },
  components: { MyTable }
};
</script>

<style scoped lang="less">
.table_c {
  width: 100%;
  height: 100%;
  // background: #3388dd;
}

.table_c
  > .table
  /deep/
  .el-table
  > .el-table__body-wrapper
  > .el-table__body
  > tbody
  > .row0 {
  background-color: #1d7dca !important;
  color: #fff;
  border-right: #1d7dca;
  font-weight: bold;
}
.table_c
  > .table
  /deep/
  .el-table
  > .el-table__body-wrapper
  > .el-table__body
  > tbody
  > .row24 {
  background-color: #1d7dca !important;
  color: #fff;
  border-right: #1d7dca;
  font-weight: bold;
}
</style>
