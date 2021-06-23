<template>
  <div class="businessComparison_" v-loading="loading">
    <div class="left_">
      <el-input placeholder="输入关键字进行过滤" v-model="filterText">
      </el-input>
      <div class="myTree">
        <div>
          <el-tree
            class="filter-tree"
            :data="data"
            :props="defaultProps"
            :highlight-current="true"
            :default-expand-all="false"
            @node-click="nodeClick"
            :filter-node-method="filterNode"
            ref="tree"
          >
          </el-tree>
        </div>
      </div>
    </div>
    <div class="right_">
      <div class="select_year">
        <div class="select_year_btn">
          <el-select v-model="year" @change="lookView">
            <el-option value="2020" label="2020"></el-option>
            <el-option value="2021" label="2021"></el-option>
          </el-select>
        </div>
      </div>
      <div id="prosecution_unit" class="prosecution_unit">
        <div
          :class="{
            prosecution_unit_container: true,
            container_height: showOptions,
            container_min_height: !showOptions
          }"
        >
          <template v-for="i in all">
            <div class="type_select">
              <div class="type_header">
                <span>{{ i[0].businessType }}:</span>
              </div>
              <div class="type_content">
                <el-checkbox-group
                  v-if="i[0]['dimensionType'] !== 'pie1'"
                  v-model="selected[i[0].businessType]"
                  @change="selectTypeChange(i)"
                >
                  <el-checkbox
                    v-if="m['dimensionType'] === 'tab'"
                    v-for="(m, x) in i"
                    :key="x"
                    :label="m.dimensionName"
                    :disabled="m['havaData'] == '0'"
                    :value="m.dimensionValue"
                  ></el-checkbox>
                </el-checkbox-group>
                <el-radio-group
                  v-if="i[0]['dimensionType'] === 'pie1'"
                  v-model="selected[i[0].businessType]"
                  @change="selectTypeChange(i)"
                >
                  <el-radio
                    v-if="m['dimensionType'] === 'pie1'"
                    v-for="(m, x) in i"
                    :key="x"
                    :disabled="m['havaData'] == '0'"
                    :label="m.dimensionName"
                  >
                    {{ m.dimensionName }}
                  </el-radio>
                </el-radio-group>
              </div>
            </div>
            <el-divider></el-divider>
          </template>
        </div>
        <el-button
          type="text"
          class="prosecution_unit_btn"
          @click.stop="moreUnit"
        >
          展示纬度
        </el-button>
      </div>
      <div class="con" :style="{ height: content_height }">
        <div style="height: calc(100% - 300px);">
          <my-table-base
            height="calc(100% - 50px)"
            :pagination="false"
            chooseItem="single"
            :gridIndex="false"
            :search="false"
            :columns="columns"
            :table-data="tableData"
          >
          </my-table-base>
        </div>
        <div class="charts_gas">
          <div class="content">
            <div class="content_echarts_t" id="cbb1"></div>
          </div>
          <div class="content">
            <div class="maxAMin" v-if="JSON.stringify(max_min) !== '{}'">
              <div>
                <span class="ys" style="font-weight: 700;">营收：</span>
                <span class="ys"
                  >最高：{{
                    (max_min["maxTotalSales"] / 10000).toFixed(2)
                  }}万元</span
                ><br />
                <span class="ys pl"
                  >最低：{{
                    (max_min["minTotalSales"] / 10000).toFixed(2)
                  }}万元</span
                ><br />
                <span class="ys pl"
                  >平均：{{
                    (max_min["avgTotalSales"] / 10000).toFixed(2)
                  }}万元</span
                ><br />
              </div>
              <div>
                <span class="cl" style="font-weight: 700;">车辆：</span>
                <span class="cl">最高：{{ max_min["maxCount"] }}辆</span><br />
                <span class="cl pl">最低：{{ max_min["minCount"] }}辆</span
                ><br />
                <span class="cl pl">平均：{{ max_min["avgCount"] }}辆</span
                ><br />
              </div>
            </div>
            <div class="content_echarts" id="cbb2"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./gas.less";
import MyDialog from "../../components/common/myDialog";
import MyTableBase from "../../components/common/myTableBase";

export default {
  name: "gas",
  components: { MyTableBase, MyDialog },
  data() {
    return {
      year: 2021,
      loading: false,
      unfold: 0,
      content_height: "calc(100% - 45px)",
      selected: {},
      all: [],
      max_min: {},
      noData: [false, false],
      columns: [
        { prop: "name", label: "名称" },
        { prop: "id", label: "加油站ID", hidden: true }
      ],
      tableData: [],
      filterText: "",
      data: [],
      defaultProps: {
        children: "children",
        label: "label"
      },
      param: {
        selectYear: "",
        companyId: "",
        stationId: ""
      },
      listParam: {}
    };
  },
  computed: {
    showOptions() {
      this.loading = true;
      setTimeout(_ => {
        let change = document.getElementById("prosecution_unit").offsetHeight;
        this.content_height = "calc(100% - 45px - " + change + "px)";
        if (
          JSON.stringify(this.max_min) !== "{}" &&
          this.tableData.length !== 0
        ) {
          this.loading = false;
        }
        setTimeout(_ => {
          this.loading = false;
        }, 10000);
      }, 500);
      return this.unfold % 2 === 0;
    }
  },
  methods: {
    nodeClick(v, s) {
      this.loading = true;
      this.param["selectYear"] = this.year;
      if (s["level"] === 1) {
        this.loading = false;
      }
      if (s["level"] === 2) {
        this.param["companyId"] = v["companyId"];
        this.param["stationId"] = "";
        this.lookView();
      }
      if (s["level"] === 3) {
        this.param["companyId"] = "";
        this.param["stationId"] = v["stationId"];
        this.lookView();
      }
    },
    lookView() {
      this.loading = true;
      let n = 0;
      let data = JSON.parse(JSON.stringify(this.selected));
      for (let i in data) {
        if (data[i].length !== 0) {
          n++;
        }
      }
      this.param["selectYear"] = this.year;
      let param = new URLSearchParams();
      for (let i in this.listParam) {
        param.append(i, this.listParam[i]);
      }
      param.append("selectYear", this.year);
      param.append("companyId", this.param["companyId"]);
      param.append("stationId", this.param["stationId"]);
      this.$axios
        .get("/zyf/station/station_datas2", { params: param })
        .then(res => {
          this.tableData = [];
          let data = res.data;
          this.tableData = data;
        });
      this.initECharts();
    },
    selectTypeChange(v) {
      let columns = [];
      let data = JSON.parse(JSON.stringify(this.selected));
      this.selected = {};
      this.selected = data;
      let str = "";
      for (let j in data) {
        if (data[j].constructor === Array) {
          data[j].forEach(i => {
            str += i + ",";
          });
        } else {
          str += data[j] + ",";
        }
      }
      for (let i in this.all) {
        this.all[i].forEach(j => {
          if (i === j["dimensionName"]) {
            this.listParam[j["dimensionValue"]] = "1";
          }
          if (str.indexOf(j["dimensionName"]) !== -1) {
            if (j["dimensionType"] !== "pie1") {
              columns.push({
                label: j["dimensionName"],
                prop: j["dimensionValue"],
                formatter: v => {
                  return v[i["dimensionValue"]] ? v[i["dimensionValue"]] : 0;
                }
              });
            }
          }
        });
      }
      columns.unshift({ prop: "name", label: "名称" });
      if (columns.length === 0) {
        columns = [{ prop: "name", label: "名称" }];
      }
      columns.unshift({ prop: "id", label: "加油站ID", hidden: true });
      this.columns = columns;
      this.lookView();
    },
    moreUnit() {
      this.unfold++;
      if (this.unfold === 2) {
        this.unfold = 0;
      }
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    async initECharts() {
      this.noData = [];
      let [legend, d] = [[], []];
      let param = this.DeepCopy(this.param);
      for (let i in this.selected) {
        if (i === "饼图1") {
          for (let j in this.all) {
            this.all[i].forEach(s => {
              if (this.selected[i] === s["dimensionName"]) {
                param["dimensionValue"] = s["dimensionValue"];
              }
            });
          }
        }
      }
      let v = await this.$axios.get("/api/station/station_datas_bing", {
        params: param
      });
      let datas = v.data["pie1"];
      datas.forEach(i => {
        for (let j in i) {
          legend.push(j);
          d.push({
            name: j,
            value: i[j]
          });
        }
      });
      let res = await this.$axios.get("/api/station/station_data", {
        params: this.param
      });
      let data = res.data.data;
      this.max_min = data;
      let count = { name: [], value: [] };
      let totalSales = { name: [], value: [] };
      let stationTimeCountVoList = data["stationTimeCountVoList"];
      stationTimeCountVoList.forEach(i => {
        count["name"].push(i.month);
        totalSales["name"].push(i.month);
        count["value"].push(i.count);
        totalSales["value"].push((i["totalSales"] / 10000).toFixed(2));
      });
      if (count["value"].length > 0 || totalSales["value"].length > 0) {
        this.noData[0] = true;
      }
      let option = [
        {
          legend: {
            orient: "vertical",
            left: 10,
            top: "center",
            data: legend
          },
          series: [
            {
              name: "",
              type: "pie",
              radius: ["0%", "60%"],
              center: ["50%", "50%"],
              avoidLabelOverlap: false,
              itemStyle: {
                normal: {
                  color: function(v) {
                    let colorList = [
                      "#fec279",
                      "#968af5",
                      "#e790e8",
                      "#36c78b",
                      "#51a3fc"
                    ];
                    return colorList[v.dataIndex];
                  }
                }
              },
              labelLine: {
                normal: {
                  length: 30,
                  length2: 25,
                  fontSize: 16,
                  lineStyle: {
                    width: 1
                  }
                }
              },
              label: {
                show: true,
                position: "outer",
                normal: {
                  formatter(v) {
                    return v.name + ":" + Number(v.value).toFixed(2);
                  },
                  textStyle: {
                    fontSize: 14
                  }
                }
              },
              data: d
            }
          ]
        },
        {
          tooltip: {
            confine: true,
            trigger: "axis",
            axisPointer: {
              type: "shadow"
            },
            formatter: v => {
              return (
                v[0]["name"] +
                " 月<br>" +
                v[0]["value"] +
                " 辆<br>" +
                v[1]["value"] +
                " 万元"
              );
            }
          },
          grid: {
            left: 100,
            top: 100,
            bottom: 30
          },
          xAxis: [
            {
              name: "月",
              type: "category",
              data: count.name,
              splitLine: {
                show: false
              },
              axisTick: {
                show: false
              }
            }
          ],
          yAxis: [
            {
              name: "辆",
              nameTextStyle: {
                color: "#fea528"
              },
              type: "value",
              splitLine: {
                show: false
              },
              axisTick: {
                show: false
              }
            },
            {
              name: "万元",
              nameTextStyle: {
                color: "#6796fe"
              },
              type: "value",
              splitLine: {
                show: false
              },
              axisTick: {
                show: false
              }
            }
          ],
          series: [
            {
              data: count.value,
              type: "line",
              lineStyle: {
                color: "#fea528",
                width: 2,
                shadowColor: "rgba(255,155,53,0.68)", //设置折线阴影
                shadowBlur: 10,
                shadowOffsetY: 10
              }
            },
            {
              data: totalSales.value,
              type: "line",
              yAxisIndex: "1",
              lineStyle: {
                color: "#6796fe",
                width: 2,
                shadowColor: "rgba(108,146,255,0.68)", //设置折线阴影
                shadowBlur: 10,
                shadowOffsetY: 10
              }
            }
          ]
        }
      ];
      this.$nextTick(_ => {
        this.$echarts.init(document.getElementById("cbb1")).dispose();
        this.$echarts.init(document.getElementById("cbb2")).dispose();
        this.$echarts
          .init(document.getElementById("cbb1"))
          .setOption(option[0]);
        this.$echarts
          .init(document.getElementById("cbb2"))
          .setOption(option[1]);
        if (this.tableData.length > 0) {
          this.loading = false;
        }
      });
    }
  },
  async mounted() {
    this.loading = true;
    this.param.selectYear = this.year;
    await this.$axios.get("/zyf/station/station_field").then(res => {
      let data = res.data.data;
      let arr = this.mySet(data, "businessType");
      let all = {};
      arr.forEach(i => {
        all[i] = [];
        let obj = {};
        obj[i] = [];
        if (i === "饼图1") {
          let obj = {};
          obj[i] = "";
        }
        Object.assign(this.selected, obj);
      });
      let mm = 0;
      data.forEach(i => {
        for (let j in all) {
          if (i["businessType"] === j) {
            all[j].push(i);
            if (j === "饼图1" && mm === 0) {
              this.selected[j] = i["dimensionName"];
              mm++;
            } else if (i["dimensionType"] === "tab" && i["havaData"] != "0") {
              this.selected[j].push(i["dimensionName"]);
              this.listParam[i["dimensionValue"]] = "1";
            }
          }
        }
        if (i["dimensionType"] !== "pie1" && i["havaData"] != "0") {
          this.columns.push({
            prop: i["dimensionValue"],
            label: i["dimensionName"],
            formatter: v => {
              //allOrderAmount allOrderCount allOrderMoney
              let arr = ["allOrderAmount", "allOrderCount", "allOrderMoney"];
              console.log(v["stationOrderDto92"]);
              console.log(v["stationOrderDto95"]);
              console.log(v["stationOrderDto98"]);
              console.log(v["stationOrderDtoFY"]);
              return v[i["dimensionValue"]] ? v[i["dimensionValue"]] : 0;
            }
          });
        }
      });
      this.all = all;
    });
    this.$axios.get("/api/station/all_station_cop").then(res => {
      let data = res.data.data;
      let tree = [];
      data.forEach(a => {
        for (let b in a) {
          tree.push({
            label: b,
            children: []
          });
          if (a[b] && a[b].length > 0) {
            a[b].forEach(c => {
              c["label"] = c["companyName"];
              c["value"] = c["companyId"];
              if (c["childList"] && c["childList"].length > 0) {
                c["childList"].forEach(d => {
                  d["label"] = d["stationName"];
                  d["value"] = d["stationId"];
                });
                c["children"] = c["childList"];
              }
            });
          }
        }
      });
      data.forEach(a => {
        for (let b in a) {
          for (let c of tree) {
            if (b === c["label"]) {
              c["children"] = a[b];
            }
          }
        }
      });
      this.data = tree;
    });
    let param = new URLSearchParams();
    for (let i in this.listParam) {
      param.append(i, this.listParam[i]);
    }
    param.append("selectYear", this.year);
    param.append("companyId", this.param["companyId"]);
    param.append("stationId", this.param["stationId"]);
    this.$axios
      .get("/zyf/station/station_datas2", { params: this.listParam })
      .then(res => {
        let data = res.data;
        this.tableData = data;
        this.loading = false;
      });
    this.initECharts();
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    }
  }
};
</script>
