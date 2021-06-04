<template>
  <div style="width: 100%;height: 100%;">
    <my-collapse-base
      ref="collapse"
      :collapseData="collapseData"
      @selectionChange="selectionChange"
    ></my-collapse-base>
  </div>
</template>

<script>
import MyCollapseBase from "../../../components/common/myCollapseBase";

export default {
  name: "energy",
  components: { MyCollapseBase },
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
          id: "b",
          name: "利润",
          icon: require("../../../assets/business/icon_2-1.png"),
          iconActive: require("../../../assets/business/icon_2-2.png"),
          collapseItem: [
            {
              id: "b_2020",
              collapseTitle: "2020年利润",
              year: 2020,
              EChartsBox: [
                {
                  title: "营收",
                  time: false,
                  select: false,
                  timeValue: "",
                  selectValue: "",
                  /*包裹ECharts的父级元素的属性*/
                  style: {
                    width: "40%",
                    height: "450px",
                    borderRadius: "10px",
                    background: "white",
                    marginBottom: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "400px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        barWidth: 20,
                        tooltip: {
                          trigger: "axis",
                          formatter: function(params) {
                            return (
                              params[0].name +
                              "月" +
                              ":" +
                              "<br>" +
                              params[0].data / 10000 +
                              "万元"
                            );
                          },
                          axisPointer: {
                            // 坐标轴指示器，坐标轴触发有效
                            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
                          }
                        },
                        xAxis: {
                          type: "category",
                          data: [
                            "Jan",
                            "Fab",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                            "Aug",
                            "Sep",
                            "Oct",
                            "Nov",
                            "Dec"
                          ]
                        },
                        yAxis: {
                          name: "万元",
                          nameTextStyle: {
                            color: "#000"
                          },
                          axisLabel: {
                            formatter: function(val) {
                              return val / 10000;
                            },
                            textStyle: {
                              fontSize: 12
                            }
                          },
                          axisTick: {
                            show: false
                          },
                          splitLine: {
                            lineStyle: {
                              color: "rgba(131,101,101,0.2)",
                              type: "dashed"
                            }
                          }
                        },
                        series: [
                          {
                            data: [
                              586,
                              560,
                              500,
                              365,
                              256,
                              362,
                              400,
                              265,
                              333,
                              352,
                              254,
                              360
                            ],
                            type: "bar",
                            itemStyle: {
                              color: "#38A0FF"
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "各个公司营收占比",
                  time: true,
                  select: false,
                  timeValue: "",
                  selectValue: "",
                  /*包裹ECharts的父级元素的属性*/
                  style: {
                    width: "59%",
                    height: "450px",
                    borderRadius: "10px",
                    background: "white",
                    marginBottom: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "50%",
                        height: "400px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b} : {c}",
                          axisPointer: {
                            // 坐标轴指示器，坐标轴触发有效
                            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
                          }
                        },
                        legend: {
                          left: "center",
                          bottom: "10px",
                          data: ["A公司", "B公司", "C公司", "D公司", "E公司"]
                        },
                        series: [
                          {
                            name: "",
                            type: "pie",
                            radius: ["30%", "50%"],
                            avoidLabelOverlap: false,
                            label: {
                              formatter: function(val) {
                                return val.name + "\n" + val.percent + "%";
                              }
                            },
                            labelLine: {
                              normal: {
                                length: 15,
                                length2: 15,
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              {
                                value: 335,
                                name: "A公司",
                                itemStyle: { color: "#3AA1FF" }
                              },
                              {
                                value: 310,
                                name: "B公司",
                                itemStyle: { color: "#59D4D4" }
                              },
                              {
                                value: 234,
                                name: "C公司",
                                itemStyle: { color: "#4ECB73" }
                              },
                              {
                                value: 135,
                                name: "D公司",
                                itemStyle: { color: "#F8D33D" }
                              },
                              {
                                value: 1548,
                                name: "E公司",
                                itemStyle: { color: "#F2637B" }
                              }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "50%",
                        height: "400px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{a} <br/>{b}: {c} ({d}%)"
                        },
                        legend: {
                          left: "center",
                          bottom: "10px",
                          data: [
                            "过票",
                            "油品批发",
                            "分销",
                            "油品零售",
                            "非油品零售",
                            "其他"
                          ]
                        },

                        series: [
                          {
                            name: "",
                            type: "pie",
                            radius: ["30%", "50%"],
                            avoidLabelOverlap: false,
                            label: {
                              formatter: function(val) {
                                return val.name + "\n" + val.percent + "%";
                              }
                            },
                            labelLine: {
                              normal: {
                                length: 10,
                                length2: 10,
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              {
                                value: 335,
                                name: "过票",
                                itemStyle: { color: "#3AA1FF" }
                              },
                              {
                                value: 310,
                                name: "油品批发",
                                itemStyle: { color: "#59D4D4" }
                              },
                              {
                                value: 234,
                                name: "分销",
                                itemStyle: { color: "#4ECB73" }
                              },
                              {
                                value: 135,
                                name: "油品零售",
                                itemStyle: { color: "#F8D33D" }
                              },
                              {
                                value: 1548,
                                name: "非油品零售",
                                itemStyle: { color: "#F2637B" }
                              },
                              {
                                value: 1548,
                                name: "其他",
                                itemStyle: { color: "#975FE5" }
                              }
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
              id: "b_2019",
              collapseTitle: "2019年利润",
              year: 2019,
              EChartsBox: [
                {
                  title: "营收",
                  time: false,
                  select: false,
                  timeValue: "",
                  selectValue: "",
                  /*包裹ECharts的父级元素的属性*/
                  style: {
                    width: "40%",
                    height: "450px",
                    borderRadius: "10px",
                    background: "white",
                    marginBottom: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "400px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        barWidth: 20,
                        tooltip: {
                          trigger: "axis",
                          formatter: function(params) {
                            return (
                              params[0].name +
                              "月" +
                              ":" +
                              "<br>" +
                              params[0].data / 10000 +
                              "万元"
                            );
                          },
                          axisPointer: {
                            // 坐标轴指示器，坐标轴触发有效
                            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
                          }
                        },
                        xAxis: {
                          type: "category",
                          data: [
                            "Jan",
                            "Fab",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                            "Aug",
                            "Sep",
                            "Oct",
                            "Nov",
                            "Dec"
                          ]
                        },
                        yAxis: {
                          axisLabel: {
                            formatter: function(val) {
                              return val / 10000;
                            },
                            textStyle: {
                              fontSize: 12
                            }
                          },
                          axisTick: {
                            show: false
                          },
                          splitLine: {
                            lineStyle: {
                              color: "rgba(131,101,101,0.2)",
                              type: "dashed"
                            }
                          }
                        },
                        series: [
                          {
                            data: [
                              586,
                              560,
                              500,
                              365,
                              256,
                              362,
                              400,
                              265,
                              333,
                              352,
                              254,
                              360
                            ],
                            type: "bar",
                            itemStyle: {
                              color: "#38A0FF"
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "各个公司营收占比",
                  time: true,
                  select: false,
                  timeValue: "",
                  selectValue: "",
                  /*包裹ECharts的父级元素的属性*/
                  style: {
                    width: "59%",
                    height: "450px",
                    borderRadius: "10px",
                    background: "white",
                    marginBottom: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "50%",
                        height: "400px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b} : {c}",
                          axisPointer: {
                            // 坐标轴指示器，坐标轴触发有效
                            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
                          }
                        },
                        legend: {
                          left: "center",
                          bottom: "10px",
                          data: ["A公司", "B公司", "C公司", "D公司", "E公司"]
                        },
                        series: [
                          {
                            name: "",
                            type: "pie",
                            radius: ["30%", "50%"],
                            avoidLabelOverlap: false,
                            label: {
                              formatter: function(val) {
                                return val.name + "\n" + val.percent + "%";
                              }
                            },
                            labelLine: {
                              normal: {
                                length: 15,
                                length2: 15,
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              {
                                value: 335,
                                name: "A公司",
                                itemStyle: { color: "#3AA1FF" }
                              },
                              {
                                value: 310,
                                name: "B公司",
                                itemStyle: { color: "#59D4D4" }
                              },
                              {
                                value: 234,
                                name: "C公司",
                                itemStyle: { color: "#4ECB73" }
                              },
                              {
                                value: 135,
                                name: "D公司",
                                itemStyle: { color: "#F8D33D" }
                              },
                              {
                                value: 1548,
                                name: "E公司",
                                itemStyle: { color: "#F2637B" }
                              }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "50%",
                        height: "400px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{a} <br/>{b}: {c} ({d}%)"
                        },
                        legend: {
                          left: "center",
                          bottom: "10px",
                          data: [
                            "过票",
                            "油品批发",
                            "分销",
                            "油品零售",
                            "非油品零售",
                            "其他"
                          ]
                        },

                        series: [
                          {
                            name: "",
                            type: "pie",
                            radius: ["30%", "50%"],
                            avoidLabelOverlap: false,
                            label: {
                              formatter: function(val) {
                                return val.name + "\n" + val.percent + "%";
                              }
                            },
                            labelLine: {
                              normal: {
                                length: 10,
                                length2: 10,
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              {
                                value: 335,
                                name: "过票",
                                itemStyle: { color: "#3AA1FF" }
                              },
                              {
                                value: 310,
                                name: "油品批发",
                                itemStyle: { color: "#59D4D4" }
                              },
                              {
                                value: 234,
                                name: "分销",
                                itemStyle: { color: "#4ECB73" }
                              },
                              {
                                value: 135,
                                name: "油品零售",
                                itemStyle: { color: "#F8D33D" }
                              },
                              {
                                value: 1548,
                                name: "非油品零售",
                                itemStyle: { color: "#F2637B" }
                              },
                              {
                                value: 1548,
                                name: "其他",
                                itemStyle: { color: "#975FE5" }
                              }
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
              id: "b_gd",
              collapseTitle: "查看更多",
              EChartsBox: []
            }
          ]
        }
      ]
    };
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
/*    await this.obtainAxios("利润", "2020", "lr");
    await this.obtainAxios("利润", "2019", "lr");*/
  },
  methods: {
    selectionChange(v) {
      this.$router.push("/energy/JYZXiangQing");
    },
    obtainAxios(name, year, years) {
      let data = [];
      let id = "";
      this.$axios
        .get("/api/sundry/fuwuqucaiwu", {
          params: { nianfen: year, type: years, plateName: "能源板块" }
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
                      sItem.EChartsItem[0].option.xAxis.data = [];

                      let yAxis = [];
                      let xBxis = [];
                      data.forEach(element => {
                        xBxis.push(element.xBxis.split("-")[1]);
                        yAxis.push(element.yAxis * 10000);
                      });
                      sItem.EChartsItem[0].option.series[0].data = yAxis;
                      sItem.EChartsItem[0].option.xAxis.data = xBxis;
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
  watch: {
    viewChange() {
      this.$refs["collapse"].refresh(this.collapseData);
    }
  }
};
</script>

<style scoped></style>
