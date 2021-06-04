<template>
  <div class="test">
    <!-- 查询开始 -->
    <div class="labelFlex">
      <div class="label">
        <span>时间：</span>
        <el-date-picker
          v-model="selectData.time"
          type="monthrange"
          align="right"
          value-format="yyyy-MM-dd"
          format="yyyy-MM-dd"
          unlink-panels
          range-separator="至"
          start-placeholder="开始月份"
          end-placeholder="结束月份"
          :picker-options="pickerOptions"
        >
        </el-date-picker>
      </div>
      <div class="label">
        <span>门店：</span>
        <el-select v-model="selectData.service">
          <el-option
            v-for="(it, ix) in serviceData"
            :label="it.label"
            :value="it.value"
            :key="ix"
          >
          </el-option>
        </el-select>
      </div>
      <div class="label" style="width:30%">
        <span>请选择模板：</span>
        <el-select v-model="selectData.services">
          <el-option
            v-for="(it, ix) in serviceDatas"
            :label="it.label"
            :value="it.value"
            :key="ix"
          >
          </el-option>
        </el-select>
      </div>
      <div>
        <el-button @click="newAdd">确定</el-button>
        <el-button @click="conservative()">保存模板</el-button>
      </div>
      <!-- <div class="detail">
                <div v-for="(item,index) of NewData" :key="index">
                    {{item.data}}
                    <span @click="detailData(index)">删除</span>
                </div>
            </div> -->
    </div>
    <!-- 查询结束 -->
    <!-- 信息开始 -->
    <div class="serviceArea">
      <div
        class="serviceAreaLeft"
        :style="{ height: screeHeight + 'px' }"
        id="scrollId"
        ref="Box"
        @scroll="orderScroll"
      >
        <!-- <div class="title">
                    服务区名称
                </div> -->
        <div class="text">
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item
              v-for="(item, index) of forTable"
              :key="index"
              :title="item.title"
              :id="item.id"
              :name="item.name"
              :ref="item.id"
            >
              <el-table
                ref="multipleTable"
                tooltip-effect="dark"
                @selection-change="handleSelectionChange"
                border
                :data="item.data"
                :header-cell-style="{
                  background: '#409EFE',
                  color: '#fff',
                  borderColor: '#409EFE'
                }"
                style="width: 100%;"
              >
              
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column label="" width="170">
                  <template slot-scope="scope">
                    {{scope.row.title1}}
                  </template>
                </el-table-column>
                <el-table-column
                  :prop="'date' + (inx + 1)"
                  v-for="(items, inx) in 4"
                  :key="inx"
                  :label="'tableTitle' + (inx + 1)"
                >
                <template slot-scope="scope">
                  <span v-if="scope.row.title1!='流通商品结构'">
                    {{scope.row[('date'+(inx+1))]}}
                  </span>
                  <div style="height:100px;width:100%" :id="('date'+(inx+1+`-${item.id}`))" v-if="scope.row.title1=='流通商品结构'&& scope.row[('date'+(inx+1))]!=''">
                    {{(function(){
                      echartsClick('date'+(inx+1+`-${item.id}`))
                    })()}}
                  </div>
                </template>
                  <template slot="header" slot-scope="scope">
                    <div>
                      {{ tableTr["tableTitle" + (inx + 1)] }}
                      
                      <span
                        v-if="
                          tableTr['tableTitle' + (inx + 1)] != '' &&
                            item.title == '基础信息'
                        "
                        class="el-icon-delete"
                        style="float: right;line-height:23px"
                        @click="detailData(inx)"
                        >删除</span
                      >
                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
      <!-- <div class="navService">
        <div class="nav">
          <div
            :class="{ isNav: navindex == index }"
            v-for="(item, index) of forTable"
            :key="index"
            @click="navClick(index, item.id)"
          >
            {{ item.title }}
          </div>
        </div>
      </div> -->
    </div>
    <!-- 信息结束 -->
  </div>
</template>
<script>
export default {
  name: "test",
  data() {
    return {
      screeHeight: document.documentElement.clientHeight - 110,
      //value
      navindex: 0,
      selectData: {
        service: "",
        services: "",
        business: "",
        format: "",
        time: ""
      },
      serviceData: [
        {
          label: "中馆驿(接店前)",
          value: 1,
          serviceId: "451d2s"
        },
        {
          label: "中馆驿(接店后)",
          value: 2,
          serviceId: "45we2s"
        },
        {
          label: "木子店",
          value: 3,
          serviceId: "45rw3s"
        },
        {
          label: "黄梅",
          value: 4,
          serviceId: "45r22s"
        }
      ],
      serviceDatas: [],
      pickerOptions: {
        shortcuts: [
          {
            text: "本月",
            onClick(picker) {
              picker.$emit("pick", [new Date(), new Date()]);
            }
          },
          {
            text: "今年至今",
            onClick(picker) {
              const end = new Date();
              const start = new Date(new Date().getFullYear(), 0);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近六个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setMonth(start.getMonth() - 6);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      activeNames: ["1", "2", "3"],
      forTable: [],
      // 基础信息
      tableData: [
        {
          title1: "经营单位面积",
          date1: "",
          date2: "",
          date3: "",
          date4: ""
        },
        {
          title1: "车流量",
          date1: "",
          date2: "",
          date3: "",
          date4: ""
        },
        {
          title1: "客流量",
          date1: "",
          date2: "",
          date3: "",
          date4: ""
        },
        {
          title1: "硬件环境得分",
          date1: "",
          date2: "",
          date3: "",
          date4: ""
        },
        {
          title1: "周边商户综合得分",
          date1: "",
          date2: "",
          date3: "",
          date4: ""
        },
        {
          title1: "油站及其他业态订单数",
          date1: "",
          date2: "",
          date3: "",
          date4: ""
        },
        {
          title1: "转化率",
          date1: "",
          date2: "",
          date3: "",
          date4: ""
        },
        {
          title1: "订单数",
          date1: "",
          date2: "",
          date3: "",
          date4: ""
        },
        {
          title1: "客单价",
          date1: "",
          date2: "",
          date3: "",
          date4: ""
        },
        {
          title1: "转化率",
          date1: "",
          date2: "",
          date3: "",
          date4: ""
        },
        {
          title1: "流通商品结构",
          date1: "",
          date2: "",
          date3: "",
          date4: ""
        },
      //   {
      //     title1: "厕所等级",
      //     date1: "",
      //     date2: "",
      //     date3: "",
      //     date4: ""
      //   },
      //   {
      //     title1: "厕所改造时间",
      //     date1: "",
      //     date2: "",
      //     date3: "",
      //     date4: ""
      //   },
      //   {
      //     title1: "充电桩数量(个)",
      //     date1: "",
      //     date2: "",
      //     date3: "",
      //     date4: ""
      //   },
      //   {
      //     title1: "充电桩分布",
      //     date1: "",
      //     date2: "",
      //     date3: "",
      //     date4: ""
      //   },
      //   {
      //     title1: "小便器阀数量(个)",
      //     date1: "",
      //     date2: "",
      //     date3: "",
      //     date4: ""
      //   },
      //   {
      //     title1: "面盆龙头个数(个)",
      //     date1: "",
      //     date2: "",
      //     date3: "",
      //     date4: ""
      //   },
      //   {
      //     title1: "便民休闲座椅(个)",
      //     date1: "",
      //     date2: "",
      //     date3: "",
      //     date4: ""
      //   },
      //   {
      //     title1: "保安人数(位)",
      //     date1: "",
      //     date2: "",
      //     date3: "",
      //     date4: ""
      //   },
      //   {
      //     title1: "保洁人数(位)",
      //     date1: "",
      //     date2: "",
      //     date3: "",
      //     date4: ""
      //   },
      //   {
      //     title1: "经营单位人数(位)",
      //     date1: "",
      //     date2: "",
      //     date3: "",
      //     date4: ""
      //   },
      //   {
      //     title1: "加油员配置(位)",
      //     date1: "",
      //     date2: "",
      //     date3: "",
      //     date4: ""
      //   },
      //   {
      //     title1: "加油机数量(个)",
      //     date1: "",
      //     date2: "",
      //     date3: "",
      //     date4: ""
      //   }
      // ],
      // //经营对比
      // tableDatamanage: [
      //   {
      //     title1: "成本(万元)",
      //     date1: "",
      //     date2: "",
      //     date3: "",
      //     date4: ""
      //   },
      //   {
      //     title1: "利润(万元)",
      //     date1: "",
      //     date2: "",
      //     date3: "",
      //     date4: ""
      //   },
      //   {
      //     title1: "营收(万元)",
      //     date1: "",
      //     date2: "",
      //     date3: "",
      //     date4: ""
      //   },
      //   {
      //     title1: "车流量(辆)",
      //     date1: "",
      //     date2: "",
      //     date3: "",
      //     date4: ""
      //   },
      //   {
      //     title1: "现金流(万元)",
      //     date1: "",
      //     date2: "",
      //     date3: "",
      //     date4: ""
      //   },
      //   {
      //     title1: "水费(元)",
      //     date1: "",
      //     date2: "",
      //     date3: "",
      //     date4: ""
      //   },
      //   {
      //     title1: "电费(元)",
      //     date1: "",
      //     date2: "",
      //     date3: "",
      //     date4: ""
      //   }
      // ],
      // //业态对比
      // tableDatacommercial: [
      //   {
      //     title1: "一线品牌订单个数(个)",
      //     date1: "",
      //     date2: "",
      //     date3: "",
      //     date4: ""
      //   },
      //   {
      //     title1: "超市订单个数(个)",
      //     date1: "",
      //     date2: "",
      //     date3: "",
      //     date4: ""
      //   },
      //   {
      //     title1: "小吃订单个数(个)",
      //     date1: "",
      //     date2: "",
      //     date3: "",
      //     date4: ""
      //   },
      //   {
      //     title1: "杂货铺订单个数(个)",
      //     date1: "",
      //     date2: "",
      //     date3: "",
      //     date4: ""
      //   },
      //   {
      //     title1: "经营面积(㎡)",
      //     date1: "",
      //     date2: "",
      //     date3: "",
      //     date4: ""
      //   },
      //   {
      //     title1: "整体营收(万元)",
      //     date1: "",
      //     date2: "",
      //     date3: "",
      //     date4: ""
      //   },
      //   {
      //     title1: "餐饮订单个数(个)",
      //     date1: "",
      //     date2: "",
      //     date3: "",
      //     date4: ""
      //   },
      //   {
      //     title1: "其他收入(元)",
      //     date1: "",
      //     date2: "",
      //     date3: "",
      //     date4: ""
      //   }
      // ],
      // //品牌分类
      // tableDatabrand: [
      //   {
      //     title1: "KFC收入(元)",
      //     date1: "",
      //     date2: "",
      //     date3: "",
      //     date4: ""
      //   },
      //   {
      //     title1: "猫屎咖啡收入(元)",
      //     date1: "",
      //     date2: "",
      //     date3: "",
      //     date4: ""
      //   }
      ],
      //保存数据
      NewData: [
        {
          index: "",
          data: ""
        },
        {
          index: "",
          data: ""
        },
        {
          index: "",
          data: ""
        },
        {
          index: "",
          data: ""
        }
      ],
      // 表头内容
      tableTr: {
        tableTitle1: "",
        tableTitle2: "",
        tableTitle3: "",
        tableTitle4: ""
      },
      // 用来可以删除服务的
      navData: [],
      multipleSelection: []
    };
  },
  mounted() {
    this.forTable.forEach((item, index) => {
      this.navData.push({
        index: index,
        height: document.getElementById(item.id).offsetTop
      });
    });
  },
  created() {
    this.forTable = [
      {
        title: "基础信息",
        name: "1",
        data: this.tableData,
        id: "table11"
      },
      // {
      //   title: "经营对比",
      //   name: "2",
      //   data: this.tableDatamanage,
      //   id: "table22"
      // },
      // {
      //   title: "业态对比",
      //   name: "3",
      //   data: this.tableDatacommercial,
      //   id: "table33"
      // },
      // {
      //   title: "品牌分类",
      //   name: "4",
      //   data: this.tableDatabrand,
      //   id: "table44"
      // }
    ];
  },
  methods: {
    echartsClick(data){
      let HomeTopLeft_top
      this.$nextTick(()=>{   
        HomeTopLeft_top = this.$echarts.init(
            document.getElementById(data)
          );
          let option = {
             tooltip:{
                formatter:'{b}:{c}  ({d}%)'
            },
            series: [{
                type: 'pie',
                radius: '60%',
                center: ['50%', '50%'],
                data: [{
                name: 'A商品',
                    value: 70
                    }, {
                        name: 'B商品',
                        value: 68
                    }, {
                        name: 'C商品',
                        value: 48
                    }, {
                        name: 'D商品',
                        value: 40
                    }],
                animation: false,
                label: {
                    position: 'outer',
                    alignTo: 'none',
                    bleedMargin: 5
                },
                left: 0,
                // right: '66.6667%',
                top: 0,
                bottom: 0
            }]
        };
        HomeTopLeft_top.setOption(option);
      })
				
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    conservative() {
      this.$prompt("请输入模板名", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(({ value }) => {
          if (value.trim() !== "") {
            this.serviceDatas.push({
              label: value,
              value: 1,
              serviceId: "451d2s"
            });
            this.$message({
              type: "success",
              message: "保存成功: " + value
            });
          } else {
            this.$message({
              type: "info",
              message: "请规范输入"
            });
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    detailData(indexs) {
      this.forTable.forEach((element, i) => {
        element.data.forEach((item, index) => {
          item["date" + (indexs + 1)] = "";
        });
      });
      this.tableTr["tableTitle" + (indexs + 1)] = "";
      this.NewData[indexs] = { index: "", data: "" };
    },
    orderScroll() {
      this.navData = [];
      this.forTable.forEach((item, index) => {
        this.navData.push({
          index: index,
          height: document.getElementById(item.id).offsetTop - 125
        });
      });
      this.navData.forEach((element, index) => {
        if (element.height <= this.$refs.Box.scrollTop) {
          this.navindex = index;
        }
      });
    },
    navClick(index, id) {
      document.getElementById(id).scrollIntoView(true);
    },
    handleChange(val) {},
    newAdd() {
      if (!this.selectData.service) {
        this.$message({
          showClose: true,
          message: "服务区不能为空哦!",
          type: "warning"
        });
        return;
      }
      let indexData = "";
      this.NewData.forEach((element, inx) => {
        if (element.index === "") {
          if (indexData === "") {
            indexData = inx;
          } else {
            return false;
          }
        }
      });

      // if (this.NewData.length == 4) {
      //     this.$message({
      //         showClose: true,
      //         message: '最多添加4条哦!',
      //         type: 'warning'
      //     });
      //     return
      // }
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
      this.NewData[indexData] = {
        index: indexData,
        data: this.serviceData[this.selectData.service - 1].label
      };
      this.tableTr["tableTitle" + (indexData + 1)] =
        arr[this.selectData.service - 1][1];
      this.forTable.forEach((element, i) => {
        element.data.forEach((item, index) => {
          switch (i) {
            case 0:
              item["date" + (indexData + 1)] =
                arr[this.selectData.service - 1][index + 2] != ""
                  ? arr[this.selectData.service - 1][index + 2]
                  : "/";
              break;
            case 1:
              item["date" + (indexData + 1)] =
                arr[this.selectData.service - 1][index + 26] != ""
                  ? arr[this.selectData.service - 1][index + 26]
                  : "/";
              break;
            case 2:
              item["date" + (indexData + 1)] =
                arr[this.selectData.service - 1][index + 34] != ""
                  ? arr[this.selectData.service - 1][index + 34]
                  : "/";
              break;
            default:
              item["date" + (indexData + 1)] =
                arr[this.selectData.service - 1][index + 43] != ""
                  ? arr[this.selectData.service - 1][index + 43]
                  : "/";
              break;
          }
        });
      });
      this.selectData.service = "";
    }
  }
};
</script>
<style lang="less" scoped>
.labelFlex {
  display: flex;
  margin: 10px;
  padding: 20px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
  background: #fff;
  align-items: center;
  .label {
    width: 20%;
    span {
      font-size: 14px;
    }
  }
  .detail {
    position: fixed;
    right: 1%;
    top: 2%;
    width: 10%;
    height: 15%;
    border-radius: 10px;
    padding: 20px;
    background: #fff;
    box-shadow: 1px 0px 10px rgba(0, 0, 0, 0.1);
    span {
      cursor: pointer;
    }
  }
}
.serviceArea {
  // width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 10px 0 10px;

  .serviceAreaLeft {
    width: 100%;
    // height: 30%;
    overflow: auto;
    scroll-behavior: smooth;
    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      color: #fff;
      background: #1579d1;
    }
    .text {
    }
  }

  .navService {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;
    .nav {
      div {
        background: #1d7dca;
        margin: 10px;
        padding: 10px 20px 10px 20px;
        color: #fff;
        cursor: pointer;
      }
      .isNav {
        background: #409efe;
      }
    }
  }
}

.text /deep/ .el-collapse-item__arrow {
  margin: 0;
  margin-left: 10px;
}
.text /deep/ .el-collapse-item__header {
  padding-left: 10px;
}
.label /deep/ .el-select {
  width: 75%;
}

.label /deep/ .el-select > .el-input {
  width: 100%;
}

.label /deep/ .el-select > .el-input > .el-input__inner {
  width: 100%;
  height: 40px;
  line-height: 30px;
}

.label
  /deep/
  .el-select
  > .el-input
  > .el-input__suffix
  > .el-input__suffix-inner
  > .el-select__caret {
  height: 40px;
  line-height: 40px;
}

.label /deep/ .el-date-editor {
  width: 80%;
  height: 40px;
  line-height: 40px;
}

.label /deep/ .el-date-editor > .el-input__icon {
  height: 30px;
  line-height: 30px;
}

.label /deep/ .el-date-editor > .el-range-input {
  height: 25px;
  line-height: 25px;
}

.label /deep/ .el-date-editor > .el-range-separator {
  height: 30px;
  line-height: 30px;
}
</style>
