<template>
  <div style="width: 100%; height: 100%;">
    <my-collapse-base
      ref="collapse"
      :collapseData="collapseData"
      @searchQuery="searchQuery"
    ></my-collapse-base>
  </div>
</template>
<script>
import MyCollapseBase from "../../../components/common/myCollapseBase";
import common from "../../../components/js/common";

export default {
  name: "accountsReceivable",
  components: { MyCollapseBase },
  mixins: [common],
  props: {
    viewChange: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      collapseData: [
        {
          id: "accountsReceivable",
          name: "回款率",
          icon: require("../../../assets/business/icon_1-1.png"),
          iconActive: require("../../../assets/business/icon_1-2.png"),
          collapseItem: [
            {
              id: "budget_2020",
              year: 2020,
              collapseTitle: "2020年回款",
              EChartsBox: [
                {
                  title: "月回款",
                  time: false,
                  style: {
                    width: "39.5%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "300px"
                      },
                      unit: "万元",
                      option: {
                        xAxis: {
                          type: "category",
                          data: [
                            "01",
                            "02",
                            "03",
                            "04",
                            "05",
                            "06",
                            "07",
                            "08",
                            "09",
                            "10",
                            "11",
                            "12"
                          ]
                        },
                        tooltip: {
                          trigger: "axis",
                          formatter: "{b}月: {c}万元 "
                        },
                        yAxis: {
                          type: "value",
                          name: "万元"
                        },
                        series: [
                          {
                            data: [
                              522,
                              932,
                              521,
                              734,
                              540,
                              530,
                              630,
                              721,
                              943,
                              176,
                              621,
                              212
                            ],
                            type: "line"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "子公司占比/回款公司占比",
                  istime: true,
                  select: false,
                  query: {
                    inputValue: "",
                    selectValue: "",
                    timeValue: ""
                  },
                  style: {
                    width: "60%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      style: {
                        width: "50%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        grid: {
                          top: "20%",
                          right: "40",
                          left: "60",
                          bottom: "40"
                        },
                        legend: {
                          orient: "horizontal",
                          bottom: 5,
                          data: [
                            "新能源",
                            "石化",
                            "国储",
                            "高路油站",
                            "荆港嘉瑞"
                          ]
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}: {c}万元 ({d}%)"
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["50%", "50%"],
                            radius: ["30%", "45%"],
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
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 16
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            color: [
                              "#73ddff",
                              "#73acff",
                              "#fdd56a",
                              "#fdb36a",
                              "#fd866a",
                              "#9e87ff"
                            ],
                            data: [
                              { value: 135, name: "新能源" },
                              { value: 1010, name: "石化" },
                              { value: 934, name: "国储" },
                              { value: 835, name: "高路油站" },
                              { value: 748, name: "荆港嘉瑞" }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      style: {
                        width: "50%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}: {c}万元 ({d}%)"
                        },

                        legend: {
                          orient: "horizontal",
                          bottom: 10,
                          data: ["A公司", "B公司", "C公司", "D公司", "其余"]
                        },
                        series: [
                          {
                            type: "pie",
                            avoidLabelOverlap: true,
                            center: ["50%", "50%"],
                            radius: ["30%", "50%"],
                            clockwise: true,
                            hoverOffset: 20,
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
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 16
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            color: [
                              "#47a2ff",
                              "#53c8d1",
                              "#59cb74",
                              "#fbd444",
                              "#7f6aad"
                            ],
                            data: [
                              { value: 1035, name: "A公司" },
                              { value: 1510, name: "B公司" },
                              { value: 434, name: "C公司" },
                              { value: 1935, name: "D公司" },
                              { value: 548, name: "其余" }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              id: "budget_2019",
              year: 2019,
              collapseTitle: "2019年回款",
              EChartsBox: [
                {
                  title: "月回款",
                  time: false,
                  style: {
                    width: "39.5%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "300px"
                      },
                      unit: "万元",
                      option: {
                        xAxis: {
                          type: "category",
                          data: [
                            "01",
                            "02",
                            "03",
                            "04",
                            "05",
                            "06",
                            "07",
                            "08",
                            "09",
                            "10",
                            "11",
                            "12"
                          ]
                        },
                        tooltip: {
                          trigger: "axis",
                          formatter: "{b}月: {c}万元 "
                        },
                        yAxis: {
                          type: "value",
                          name: "万元"
                        },
                        series: [
                          {
                            data: [
                              522,
                              932,
                              521,
                              734,
                              540,
                              530,
                              630,
                              721,
                              943,
                              176,
                              621,
                              212
                            ],
                            type: "line"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "子公司占比/回款公司占比",
                  istime: true,
                  select: false,
                  query: {
                    inputValue: "",
                    selectValue: "",
                    timeValue: ""
                  },
                  style: {
                    width: "60%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      style: {
                        width: "50%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        grid: {
                          top: "20%",
                          right: "40",
                          left: "60",
                          bottom: "40"
                        },
                        legend: {
                          orient: "horizontal",
                          bottom: 5,
                          data: [
                            "新能源",
                            "石化",
                            "国储",
                            "高路油站",
                            "荆港嘉瑞"
                          ]
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}: {c}万元 ({d}%)"
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["50%", "50%"],
                            radius: ["30%", "45%"],
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
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 16
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            color: [
                              "#73ddff",
                              "#73acff",
                              "#fdd56a",
                              "#fdb36a",
                              "#fd866a",
                              "#9e87ff"
                            ],
                            data: [
                              { value: 935, name: "新能源" },
                              { value: 1010, name: "石化" },
                              { value: 634, name: "国储" },
                              { value: 835, name: "高路油站" },
                              { value: 548, name: "荆港嘉瑞" }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      style: {
                        width: "50%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}: {c}万元 ({d}%)"
                        },

                        legend: {
                          orient: "horizontal",
                          bottom: 10,
                          data: ["A公司", "B公司", "C公司", "D公司", "其余"]
                        },
                        series: [
                          {
                            type: "pie",
                            avoidLabelOverlap: true,
                            center: ["50%", "50%"],
                            radius: ["30%", "50%"],
                            clockwise: true,
                            hoverOffset: 20,
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
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 16
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            color: [
                              "#47a2ff",
                              "#53c8d1",
                              "#59cb74",
                              "#fbd444",
                              "#7f6aad"
                            ],
                            data: [
                              { value: 1035, name: "A公司" },
                              { value: 510, name: "B公司" },
                              { value: 434, name: "C公司" },
                              { value: 935, name: "D公司" },
                              { value: 548, name: "其余" }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              id: "revenue_gd",
              collapseTitle: "查看更多",
              EChartsBox: []
            },
            {
              id: "budget_2020",
              year: 2020,
              collapseTitle: " 当月收款计划列表",
              EChartsBox: [
                {
                  title: "",
                  time: false,
                  style: {
                    width: "100%",
                    height: "500px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      type: "table",
                      isPagination: true,
                      style: {
                        width: "100%",
                        height: "500px"
                      },
                      height: "600px",
                      columns: [
                        { prop: "a", label: "供应商" },
                        { prop: "b", label: "回款时间" },
                        { prop: "c", label: "超期时间" },
                        { prop: "d", label: "金额(元)" }
                      ],
                      tableData: [
                        {
                          a: "中海油华东销售有限公司",
                          b: "2020-12-31",
                          c: "0天",
                          d: "3879750"
                        },
                        {
                          a: "中铁十二局集团有限公司",
                          b: "2020-12-31",
                          c: "0天",
                          d: "4671700"
                        },
                        {
                          a: "湖北省交通投资集团有限公司",
                          b: "2020-12-31",
                          c: "0天",
                          d: "12828090.01"
                        },
                        {
                          a: "武汉双驰贸易有限公司",
                          b: "2020-12-31",
                          c: "0天",
                          d: "26625490.95"
                        },
                        {
                          a: "湖北省羊肚菌农业科技有限公司",
                          b: "2020-12-31",
                          c: "0天",
                          d: "87860562.51"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      arrData: [],
      ValueData: {
        inputValue: "",
        selectValue: "",
        timeValue: ["", ""]
      }
    };
  },
  methods: {
    async searchQuery(id, collapse, year, name) {
      this.ValueData = collapse;
      id.EChartsBox.forEach((element, index) => {
        element.EChartsItem.forEach((element, sindex) => {
          this.arrData.push({
            id: id.id + "-" + index + "-" + sindex,
            option: element.option
          });
        });
      });
      await this.obtainData(name, year);
    },
    async obtainData(name, year) {
      let data = [];
      let id = "";
      this.ValueData.timeValue === null &&
        (this.ValueData.timeValue = ["", ""]);
      const res = await this.$axios.get("/api/sundry/finance_type_list");
      for (let i = 0; i < res.data.data.length; i++) {
        if (res.data.data[i].financeName == name) {
          id = res.data.data[i].financeTypeId;
          break;
        }
      }
      await this.$axios
        .get("/api/jtService/list_service_finance", {
          params: {
            financeTypeId: id,
            nianfen: year,
            endTime: this.ValueData.timeValue[1],
            stateTime: this.ValueData.timeValue[0]
          }
        })
        .then(v => {
          data = v.data.data;
          let mm = [];
          this.collapseData.forEach((item, index) => {
            if (item.name == name) {
              item.collapseItem.forEach((cItem, cIndex) => {
                if (cItem.year == year) {
                  cItem.EChartsBox.forEach((sItem, sIndex) => {
                    if (sIndex == 0) {
                      sItem.EChartsItem[0].option.series[0].data = [];
                      sItem.EChartsItem[0].option.xAxis[0].data = [];
                      data.xYListFrom1.forEach((i, ix) => {
                        sItem.EChartsItem[0].option.series[0].data.push(
                          i.yAxis
                        );
                        mm.push(i.yAxis);
                        sItem.EChartsItem[0].option.xAxis[0].data.push(i.xBxis);
                      });
                      // if (mm.length !== 0) {
                      //     let arr = this.YoYIncrease(mm);
                      //     // sItem.EChartsItem[0].option.yAxis[1].min = parseInt(Math.min(...arr) - 5);
                      //     // sItem.EChartsItem[0].option.yAxis[1].max = parseInt(Math.max(...arr) + 5);
                      //     sItem.EChartsItem[0].option.series[1].data.push(...arr);
                      // }
                    }
                    if (sIndex == 1) {
                      sItem.EChartsItem[0].option.series[0].data = [];
                      data.xYListFrom2.forEach((i, ix) => {
                        sItem.EChartsItem[0].option.series[0].data.push({
                          name: i.xBxis,
                          value: i.yAxis
                        });
                      });
                      sItem.EChartsItem[1].option.series[0].data = [];
                      data.xYListFrom3.forEach((i, ix) => {
                        sItem.EChartsItem[1].option.series[0].data.push({
                          name: i.xBxis,
                          value: i.yAxis
                        });
                      });
                    }
                  });
                }
              });
            }
          });
          // this.$nextTick(_ => {
          //     this.$refs['collapse'].searchClick(this.arrData)
          // })
        });
    },
    async obtainAxios(name, year, years) {
      let data = [];
      let id = "";
      await this.$axios
        .get("/api/sundry/fuwuqucaiwu", {
          params: { nianfen: year, type: years, plateName: "服务区板块" }
        })
        .then(v => {
          data = v.data.data;
          let mm = [];
          this.collapseData.forEach((item, index) => {
            if (item.name == name) {
              item.collapseItem.forEach((cItem, cIndex) => {
                if (cItem.year == year) {
                  cItem.EChartsBox.forEach((sItem, sIndex) => {
                    if (sIndex == 0) {
                      sItem.EChartsItem[0].option.series[0].data = [];
                      sItem.EChartsItem[0].option.xAxis[0].data = [];
                      let yAxis = [];
                      let xBxis = [];
                      data.forEach(element => {
                        xBxis.push(element.xBxis.split("-")[1]);
                        yAxis.push(element.yAxis * 10000);
                      });
                      sItem.EChartsItem[0].option.series[0].data = yAxis;
                      sItem.EChartsItem[0].option.xAxis[0].data = xBxis;
                    }
                    // if (sIndex == 1) {
                    //     sItem.EChartsItem[0].option.series[0].data = [];
                    //     data.xYListFrom2.forEach((i, ix) => {
                    //         sItem.EChartsItem[0].option.series[0].data.push({
                    //             name: i.xBxis,
                    //             value: i.yAxis
                    //         });
                    //     })
                    //     sItem.EChartsItem[1].option.series[0].data = []
                    //     data.xYListFrom3.forEach((i, ix) => {
                    //         sItem.EChartsItem[1].option.series[0].data.push({
                    //             name: i.xBxis,
                    //             value: i.yAxis
                    //         });
                    //     })
                    // }
                  });
                }
              });
            }
          });
        });
      // this.$axios.get('/api/sundry/fuwuqucaiwu',{params:{nianfen:year,type:name}}).then(res=>{
      //     let xBxis = [];
      //     let yAxis = [];
      //     res.data.data.forEach(element => {

      //     });
      // })
    }
  },
  async mounted() {
    await new Promise(resolve => {
      setInterval(_ => {
        resolve();
      }, 500);
    });
    this.$refs["collapse"].initECharts(this.collapseData);
  },
  async created() {
    // await this.obtainData('营收', '2019');
    // await this.obtainData('营收', '2020');
    // await this.obtainData('利润', '2019');
    // await this.obtainData('利润', '2020');
 /*   await this.obtainAxios("利润", "2020", "lr");
    await this.obtainAxios("利润", "2019", "lr");*/
  },
  watch: {
    viewChange() {
      this.$refs["collapse"].refresh(this.collapseData);
    }
  }
};
</script>
