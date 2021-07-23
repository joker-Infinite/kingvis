
<template>
  <div class="financialChart" v-loading="loading">
    <div class="financialChart_left">
      <div class="left">
        <el-input placeholder="输入关键字进行过滤" v-model="filterText">
        </el-input>
        <div class="myTree">
          <div>
            <el-tree
              class="filter-tree"
              :check-on-click-node="true"
              show-checkbox
              node-key="deptDwbh"
              :data="treeData"
              :props="defaultProps"
              :check-strictly="true"
              highlight-current
              :default-expand-all="true"
              :load="loadNode"
              lazy
              @check="checkTree"
              :filter-node-method="filterNode"
              ref="tree"
            >
            </el-tree>
          </div>
        </div>
      </div>
    </div>
    <div class="financialChart_right">
      <div class="financialChart_right_header">
        <el-switch v-model="switchShow" active-text="图表" inactive-text="列表">
        </el-switch>
        <span style="width: 20px; display: inline-block"></span>
        <el-date-picker
          v-model="time"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
        <span style="width: 20px; display: inline-block"></span>
        <el-select v-model="pageType">
          <el-option label="全部" :value="null"></el-option>
          <el-option label="收入" :value="1"></el-option>
          <el-option label="支出" :value="2"></el-option>
        </el-select>
        <span style="width: 20px; display: inline-block"></span>
        <el-select v-model="year">
          <el-option label="2020" :value="2020"></el-option>
          <el-option label="2021" :value="2021"></el-option>
        </el-select>
        <span style="width: 20px; display: inline-block"></span>
      </div>
      <div class="financialChart_right_content">
        <div
          id="dimension_container"
          :class="{
            dimension_container: true,
            dimension_container_height: !visible,
            dimension_container_min_height: visible,
          }"
        >
          <div class="dimension">
            <el-checkbox-group v-model="select">
              <el-collapse accordion>
                <el-collapse-item>
                  <template #title>
                    <span v-for="i in latitude.slice(0, 8)">
                      <el-checkbox :label="i['kmId']" :value="i['kmId']">{{
                        i["kmName"]
                      }}</el-checkbox>
                    </span>
                  </template>
                  <span v-for="i in latitude.slice(8, latitude.length)">
                    <el-checkbox :label="i['kmId']" :value="i['kmId']">{{
                      i["kmName"]
                    }}</el-checkbox>
                  </span>
                </el-collapse-item>
              </el-collapse>
            </el-checkbox-group>
          </div>
          <div class="dimension_btn">
            <el-button @click="common(node)">查询</el-button>
          </div>
        </div>
        <div class="container" :style="{ height: content_height }">
          <div class="table_container" v-show="!switchShow">
            <my-table-base
              height="calc(100% - 50px)"
              :search="false"
              chooseItem="single"
              :columns="columns"
              :tableData="tableData"
              :pageSize="pageNum"
              :totalNum="totalNum"
              @size-change="sizeChange"
              @current-change="currentChange"
            >
            </my-table-base>
          </div>
          <!-- <div class="charts_container" v-show="switchShow">
                        <template v-for="i in 3">
                            <div class="eCharts" style="position: relative" @mousemove="mouseHover(option[i-1])">
                                <div class="title" v-if="i === 1">科目占比</div>
                                <div class="title" v-if="i === 2">公司占比</div>
                                <div class="title" v-if="i === 3">月度流水</div>
                                <div style="width: 100%;height: 100%" :id="'financialChart-'+i"></div>
                                <div class="otherSetting" v-if="option[i-1]['series'][0].data.length!==0">
                                    <ms-other-setting :i="i" @clickType="clickType"></ms-other-setting>
                                </div>
                                <div class="table_" v-if="type ==='table'&&index ===i&&index===1">
                                    <div style="width: 50%;float: left;height: 100%;text-align: left">
                                        <p v-for="l in tableColumns_p1[0]" :title="l">{{l}}</p>
                                    </div>
                                    <div style="width: 50%;float: right;height: 100%">
                                        <p v-for="l in tableColumns_p1[1]" :title="l">{{l}}</p>
                                    </div>
                                </div>
                                <div class="table_" v-if="type ==='table'&&index ===i&&index===2">
                                    <div style="width: 50%;float: left;height: 100%;text-align: left">
                                        <p v-for="l in tableColumns_p2[0]" :title="l">{{l}}</p>
                                    </div>
                                    <div style="width: 50%;float: right;height: 100%">
                                        <p v-for="l in tableColumns_p2[1]" :title="l">{{l}}</p>
                                    </div>
                                </div>
                                <div class="table_" v-if="type ==='table'&&index ===i&&index===3">
                                    <div style="width: 30%;float: left;height: 100%">
                                        <p v-for="l in tableColumns[0]" :title="l">{{l}}</p>
                                    </div>
                                    <div style="width: 30%;float: left;height: 100%">
                                        <p v-for="l in tableColumns[1]" :title="l">{{l}}</p>
                                    </div>
                                    <div style="width: 30%;float: left;height: 100%">
                                        <p v-for="l in tableColumns[2]" :title="l">{{l}}</p>
                                    </div>
                                </div>
                                <div class="noData" v-if="option[i-1]['series'][0].data.length===0">暂无数据</div>
                            </div>
                        </template>
                    </div> -->
          <div class="echars_right">
            <div class="echars_box">
              <div
                style="width: 100%; height: 100%"
                id="financialChart-4"
              ></div>
            </div>
            <div class="echars_box">
                <div
                    style="width: 100%; height: 100%"
                    id="financialChart-5"
                ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./financialChart.less";
import MyTableBase from "../../components/common/myTableBase";
import MyDialog from "../../components/common/myDialog";
import MsOtherSetting from "../../components/newCommon/MyCommon/MsOtherSetting";
import { printExcel } from "../../../public/api/excel";
import index from "../../../src/components/newCommon/javaScript/index";

export default {
  name: "financialChart",
  mixins: [index],
  components: { MsOtherSetting, MyDialog, MyTableBase },
  data() {
    return {
      currentPage: 1,
      pageNum: 10,
      totalNum: 0,
      value: "",
      loading: false,
      visible: false,
      columns: [
        {
          prop: "flowingKmmc",
          label: "科目名称",
          formatter: (v) => {
            if (!v["flowingKmmc"]) {
              return 0;
            }
            return v["flowingKmmc"];
          },
        },
        {
          prop: "flowingTitle",
          label: "流水名称",
          formatter: (v) => {
            if (!v["flowingTitle"]) {
              return 0;
            }
            return v["flowingTitle"];
          },
        },
        {
          prop: "flowingMoney",
          label: "金额",
          formatter: (v) => {
            if (!v["flowingMoney"]) {
              return 0;
            }
            return v["flowingMoney"] + "元";
          },
        },
        {
          prop: "deptName",
          label: "单位名称",
          formatter: (v) => {
            if (!v["deptName"]) {
              return 0;
            }
            return v["deptName"];
          },
        },

        // {
        //     prop: 'time', label: '时间', formatter: v => {
        //         if (!v['time']) {
        //             return 0;
        //         }
        //         return v['time'];
        //     }
        // },
      ],
      tableData: [],
      switchShow: false,
      treeData: [
        {
          deptDwbh: "business",
          deptName: "商业事业部",
          children: [],
        },
        {
          deptDwbh: "media",
          deptName: "传媒事业部",
          children: [],
        },
        {
          deptDwbh: "other",
          deptName: "其他",
          children: [],
        },
        {
          deptDwbh: "service",
          deptName: "服务区事业部",
          children: [],
        },
      ],
      defaultProps: {
        children: "children",
        label: "deptName",
      },
      filterText: "",
      year: 2021,
      pageType: null,
      node: [],
      select: [],
      selectTWo: [],
      latitude: [],
      option: [
        {
          grid: {
            top: "20%",
            right: "40",
            left: "0",
            bottom: "40", //图表尺寸大小
          },
          tooltip: {
            trigger: "item",
          },
          series: [
            {
              type: "pie",
              center: ["50%", "50%"],
              radius: "80%",
              clockwise: true,
              avoidLabelOverlap: true,
              hoverOffset: 15,
              label: {
                show: true,
                position: "outer",
                width: 0,
                height: 0,
                lineHeight: 0,
                backgroundColor: "auto",
                padding: [2, -2, 2, -2],
                borderRadius: 2,
                distanceToLabelLine: 0,
                normal: {
                  formatter(v) {
                    let text = v.name + "\n" + v.percent + "%";
                    // let text = v.percent + "%";
                    return text;
                  },
                  textStyle: {
                    fontSize: 14,
                  },
                },
              },
              labelLine: {
                normal: {
                  length: 15,
                  length2: 25,
                  lineStyle: {
                    width: 1,
                  },
                },
              },
              data: [],
            },
          ],
        },
        {
          grid: {
            top: "20%",
            right: "40",
            left: "0",
            bottom: "40", //图表尺寸大小
          },
          tooltip: {
            trigger: "item",
          },
          series: [
            {
              type: "pie",
              center: ["50%", "50%"],
              radius: "80%",
              clockwise: true,
              avoidLabelOverlap: true,
              hoverOffset: 15,
              label: {
                show: true,
                position: "outer",
                width: 0,
                height: 0,
                lineHeight: 0,
                backgroundColor: "auto",
                padding: [2, -2, 2, -2],
                borderRadius: 2,
                distanceToLabelLine: 0,
                normal: {
                  formatter(v) {
                    let text = v.name + "\n" + v.percent + "%";
                    // let text = v.percent + "%";
                    return text;
                  },
                  textStyle: {
                    fontSize: 14,
                  },
                },
              },
              labelLine: {
                normal: {
                  length: 15,
                  length2: 25,
                  lineStyle: {
                    width: 1,
                  },
                },
              },
              data: [],
            },
          ],
        },
        {
          tooltip: {
            trigger: "item",
          },
          legend: {
            data: ["收入", "支出"],
            bottom: 10,
          },
          xAxis: [
            {
              type: "category",
              name: "月",
              nameTextStyle: {
                color: "#000",
              },
              data: [],
            },
          ],
          yAxis: [
            {
              type: "value",
              name: "元",
            },
          ],
          series: [
            {
              name: "收入",
              data: [],
              type: "bar",
              itemStyle: {
                color: "#38d",
              },
            },
            {
              name: "支出",
              data: [],
              type: "bar",
              itemStyle: {
                color: "#ddb533",
              },
            },
          ],
        },
      ],
      zhuOption: {
        title: {
          top: 20,
          text: "科目流水",
          subtext: "",
          x: "center",
          textStyle: {
            color: "#000000",
            fontWeight: 100,
            fontSize: 20,
          },
        },
        tooltip: {
          trigger: "axis",
          show: false,
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        legend: {
          show: false,
        },
        grid: {
          left: "3%",
          right: "10%",
          bottom: "3%",
          containLabel: true,
        },
        dataZoom: [
          {
            type: "slider",
            show: true,
            yAxisIndex: [0],
            left: "93%",
            width: 10,
            start: 0, //数据窗口范围的起始百分比
            end: 36,
          },
        ],
        xAxis: [
          {
            splitLine: {
              show: true,
              lineStyle: {
                type: "dashed", //设置网格线类型 dotted：虚线   solid:实线
                width: 1,
              },
            },
            type: "value",
            show: true,
          },
        ],
        yAxis: [
          {
          type: 'category',
            offset: -10,
            position: "left",
            axisLine: {
              show: false
            },
          
            axisTick: {
              show: false
            },
             axisLabel: {
                show: false,
            },
            data: [],
          },
        ],
        series: [
          {
            name: "标准化",
            type: "bar",
            barWidth: 12, // 柱子宽度
            itemStyle: {
              color: "#51C5FD",
            },
            data: [],
             label: {
              normal: {
                color: '#b3ccf8',
                show: true,
                position: [0, '-24px'],
                textStyle: {
                  fontSize: 10
                },
                formatter: function (a, b) {
                          return a.name
                }
              }
            }
          },
        ],
      },
      title: "",
      title_: "",
      time: [],
      hoverOption: [],
      tableColumns: [[], [], []],
      tableColumns_p1: [[], []],
      tableColumns_p2: [[], []],
      check_table_charts: false,
      index: "",
      type: "",
      content_height: "calc(100% - 30px)",
    };
  },
  methods: {
    checkTree(data, checked) {
      var checkedKeys = this.$refs.tree.getCheckedNodes(false);
      var flag = true;
      checkedKeys.forEach((i) => {
        if (i.level !== data.level) {
          this.$refs.tree.setChecked(data.deptDwbh, false, false);
          this.$message.warning("二级三级节点不可同时选择");
          flag = false;
          return;
        }
      });
      if (!flag) {
        return;
      }
      let arr = [];
      let node = this.DeepCopy(this.node);
      if (checked === true) {
        this.node.push(data.key);
      } else {
        node.forEach((i) => {
          if (i !== data.key) {
            arr.push(i);
          }
        });
        this.node = arr;
      }
      // this.common(this.node);
    },
    sizeChange(v) {
      this.pageNum = v;
      this.common(this.node);
    },
    currentChange(v) {
      this.currentPage = v;
      this.common(this.node);
    },
    mouseHover(s) {
      this.hoverOption = s;
    },
    clickType(v, i) {
      this.type = v;
      this.index = i;
      let type = this.hoverOption["series"][0]["type"];
      let table = [];
      let table_ = [[], []];
      let tables = [];
      if (type === "pie") {
        if (i === 1) {
          this.hoverOption["series"][0].data.forEach((i) => {
            this.tableColumns_p1[0].push(i.name);
            this.tableColumns_p1[1].push(i.value);
          });
          table_[0].push({
            data: this.tableColumns_p1[0],
            name: "name",
            type: "label",
          });
          table_[1].push({
            data: this.tableColumns_p1[1],
            name: "value",
            type: "value",
          });
        }
        if (i === 2) {
          this.hoverOption["series"][0].data.forEach((i) => {
            this.tableColumns_p2[0].push(i.name);
            this.tableColumns_p2[1].push(i.value);
          });
          table_[0].push({
            data: this.tableColumns_p2[0],
            name: "name",
            type: "label",
          });
          table_[1].push({
            data: this.tableColumns_p2[1],
            name: "value",
            type: "value",
          });
        }
      }
      if (type === "bar") {
        table = this.getData(v, this.hoverOption);
        table_ = this.DeepCopy(table);
        tables = this.DeepCopy(table);
        this.tableColumns[0] = tables[0][0]["data"];
        this.tableColumns[0].unshift(tables[0][0]["name"]);
        this.tableColumns[1] = tables[1][0]["data"];
        this.tableColumns[1].unshift(tables[1][0]["name"]);
        this.tableColumns[2] = tables[1][1]["data"];
        this.tableColumns[2].unshift(tables[1][1]["name"]);
      }
      if (v === "excel") {
        let excelData = {
          name: "",
          keyColumns: [],
          valueColumns: [],
        };
        table_.forEach((item) => {
          item.forEach((cItem) => {
            if (cItem.type === "label") {
              excelData.keyColumns = [cItem.name, ...cItem.data];
            }
            if (cItem.type === "value") {
              excelData.valueColumns.push([cItem.name, ...cItem.data]);
            }
          });
        });
        excelData.name = "";
        printExcel(excelData);
      }
    },

    querySelect() {
      if (this.select.indexOf(this.value) === -1) {
        this.select.push(this.value);
      }
      // this.common(this.node);
    },
    // switchChart() {
    //     this.loading = true;
    //     setTimeout(_ => {
    //         for (let i = 1; i < 4; i++) {
    //             let id = 'financialChart-' + i;
    //             this.$echarts.init(document.getElementById(id)).dispose();
    //             this.$echarts.init(document.getElementById(id)).setOption(this.option[i - 1]);
    //         }
    //         this.loading = false;
    //     }, 500)
    // },
    async getElBox() {
      const r = await this.$axios.get(
        "/apifin/jt_financial/get_subjects_data",
        {
          params: { financialAccountLevel: "1" },
        }
      );

      this.latitude = r.data.data;
    },
    async common(v) {
      //选中的下拉列表
      let kmmc = [];this.select;
        
        this.latitude.forEach(i=>{
            this.select.forEach(j => {
                if(i['kmId'] === j){
                    kmmc.push(i['kmName'])
                    return;
                }   
            })
        })
      this.title = v["father"];
      this.loading = true;
      const t = await this.$axios.get("/apifin/jt_financial/get_form_data", {
        params: {
          flowingDwbh: v.join(","),
          flowingKmbh: this.select.join(","),
          isExpenditure: this.pageType,
          slectYear: this.year,
          startTime: this.time[0],
          endTime: this.time[1],
          pageNum: this.currentPage,
          pageSize: this.pageNum,
        },
      });
      this.totalNum = t.data.total;
      this.tableData = t.data.list;
      let [km_, gs_, zz_] = [[], [], []];
      const [km, gs, zz] = await Promise.all([
        this.$axios.get("/apifin/jt_financial/get_km_money", {
          params: {
            flowingKmbh: this.select.join(","),
            flowingkmName: kmmc.join(","),
            isExpenditure: this.pageType,
            selectYear: this.year,
          },
        }),
        this.$axios.get("/apifin/jt_financial/get_company_money", {
          params: {
            deptSjgs: v.join(","),
            isExpenditure: this.pageType,
            selectYear: this.year,
          },
        }),
        this.$axios.get("/apifin/jt_financial/get_month_money", {
          params: {
            flowingKmbh: this.select.join(","),
            isExpenditure: this.pageType,
            selectYear: this.year,
          },
        }),
      ]);
      km_ = km.data.data;
      gs_ = gs.data.data;
      zz_ = zz.data.data;
      let caiWuKM = {
        name: [],
        value: [],
      };
       let caiWuGS = {
        name: [],
        value: [],
      };
      km_.forEach((i) => {
        i["name"] = i["xBxis"] + "-" + i["ytwo"];
        i["value"] = Number(i["yAxis"]).toFixed(2);
        //以下为新柱状图
        caiWuKM.name.push(i["name"]);
        caiWuKM.value.push(i["value"]);
      });
      gs_.forEach((i) => {
        i["name"] = i["xBxis"] + "-" + i["ytwo"];
        i["value"] = i["yAxis"];
        //以下为新柱状图
        caiWuGS.name.push(i["name"]);
        caiWuGS.value.push(i["value"]);
      });
      let xb = this.mySet(zz_, "xBxis");
      let xb_ = [];
      xb.forEach((i) => {
        xb_.push(i.substring(0, 4) + "-" + i.substring(4, 6));
      });
      let zc = [];
      let sr = [];
      zz_.forEach((i) => {
        if (!this.pageType) {
          if (i["ytwo"] === "收入") {
            sr.push(i);
          }
          if (i["ytwo"] === "支出") {
            zc.push(i);
          }
        }
      });
      if (!!this.pageType) {
        sr = zz_;
      }

      this.zhuOption.series[0].data = caiWuKM.value;
      this.zhuOption.yAxis[0].data = caiWuKM.name;
      await this.getZhu("financialChart-4");
      this.zhuOption.series[0].data = caiWuGS.value;
      this.zhuOption.yAxis[0].data = caiWuGS.name;
      this.zhuOption.title.text = '公司流水';
      await this.getZhu("financialChart-5");
      this.loading = false;
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.deptDwbh.indexOf(value) !== -1;
    },
    async loadNode(node, resolve) {
      if (node.level === 0) {
        //   await this.getTree();
        return resolve(this.treeData);
      }
      if (node.level > 3) return resolve([]);

      var hasChild;
      if (node.data.deptName === "湖北交投中百商业管理有限公司") {
        const v1 = await this.$axios.get("/wj/jt_finance/get_third_shop", {
          params: {
            formatName: "中百超市",
          },
        });
        let zhongBai = v1.data.data;
        zhongBai.forEach((i) => {
          i["deptDwbh"] = i["yAxis"];
          i["deptName"] = i["xBxis"];
        });
        return resolve(zhongBai);
      } else if (node.data.type === "service") {
        const v2 = await this.$axios.get("/wj/jt_finance/get_third_company", {
          params: {
            serviceCompanyId: node.data.deptSystemDwbh,
          },
        });
        let gs = v2.data.data;
        gs.forEach((i) => {
          i["deptDwbh"] = i["yAxis"];
          i["deptName"] = i["xBxis"];
        });
        return resolve(gs);
      }
      setTimeout(() => {
        var data = [];
        // if (hasChild) {
        //     data = [{
        //     name: 'children' + this.count++
        //     }, {
        //     name: 'children' + this.count++
        //     }];
        // } else {
        //     data = [];
        // }

        resolve(data);
      }, 500);
    },
    async getTree() {
      const v1 = await this.$axios.get("/apifin/jt_financial/get_tree_data");
      let tree = v1.data.data;
      this.treeData.forEach((i) => {
        i.children = tree[i.deptDwbh];
      });
    },
    async getZhu(id) {
      var myChart = this.$echarts.init(
        document.getElementById(id)
      );
      myChart.setOption(this.zhuOption);
    },
  },

  async mounted() {
    const r = await this.$axios.get("/apifin/jt_financial/get_subjects_data", {
      params: { financialAccountLevel: "1" },
    });
    r.data.data.forEach((i) => {
      this.select.push(i["kmId"]);
    });
    await this.getTree();
    await this.getElBox();
    await this.common(this.node);
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    },
  },
};
</script>

<style scoped></style>
