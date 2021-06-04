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
          id: "a",
          name: "营收",
          icon: require("../../../assets/business/icon_1-1.png"),
          iconActive: require("../../../assets/business/icon_1-2.png"),
          collapseItem: [
            {
              id: "a_2020",
              collapseTitle: "2020年营收",
              year: "2020",
              EChartsBox: [
                {
                  title: "月营收",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "40.5%",
                    height: "400px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "320px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          trigger: "axis",
                          formatter: function(val) {
                            return (
                              val[0].name +
                              "月" +
                              ":" +
                              "<br />营收:" +
                              (val[0].value / 10000).toFixed(2) +
                              "万元"
                            );
                          }
                        },
                        grid: {
                          top: "50",
                          right: "60",
                          left: "60",
                          bottom: "60" //图表尺寸大小
                        },
                        dataZoom: [
                          {
                            type: "inside"
                          },
                          {
                            type: "slider"
                          }
                        ],
                        xAxis: [
                          {
                            type: "category",
                            name: "月",
                            nameTextStyle: {
                              color: "#000"
                            },
                            color: "#59588D",
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
                            ],
                            axisLabel: {
                              margin: 10,
                              color: "#999",
                              textStyle: {
                                fontSize: 12
                              }
                            },
                            axisLine: {
                              lineStyle: {
                                color: "rgba(107,107,107,0.37)"
                              }
                            },
                            axisTick: {
                              show: false
                            }
                          }
                        ],
                        yAxis: [
                          {
                            name: "万元",
                            nameTextStyle: {
                              color: "#000"
                              // fontSize: 16,
                              // padding: 10,
                            },
                            axisLabel: {
                              formatter: function(val) {
                                return val / 10000;
                              },
                              color: "#999",
                              textStyle: {
                                fontSize: 12
                              }
                            },
                            axisLine: {
                              lineStyle: {
                                color: "rgba(107,107,107,0.37)"
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
                          }
                          // {
                          //     type: 'value',
                          //     min: '',//最小坐标
                          //     max: '',//最大坐标
                          //     axisLabel: {
                          //         fontSize: 14,
                          //         color: "#999",
                          //         formatter: '{value} %'
                          //     },
                          //     axisLine: {
                          //         lineStyle: {
                          //             color:
                          //                 "rgba(107,107,107,0.37)",
                          //         },
                          //     },
                          //     splitLine: {
                          //         show: false//是否显示分隔线。
                          //     },
                          //     axisTick: {
                          //         show: false,
                          //     },
                          // }
                        ],

                        series: [
                          {
                            type: "bar",
                            data: [
                              41227980.97,
                              66379186.39,
                              21512554.34,
                              23536277.13,
                              25344513.25,
                              21883601.06,
                              29285722.58,
                              33682947.29,
                              25867750.94
                            ],
                            barWidth: "16px",
                            itemStyle: {
                              normal: {
                                color: "#38A0FF",
                                barBorderRadius: [30, 30, 30, 30]
                              }
                            }
                          }
                          // {
                          //     data: [],
                          //     type: "line",
                          //     name: "折线图",
                          //     yAxisIndex: 1,
                          //     // symbol: 'none',
                          //     lineStyle: {
                          //         color: "#fea2a2",
                          //         width: 2,
                          //         shadowColor:
                          //             "rgba(0, 0, 0, 0.3)", //设置折线阴影
                          //         shadowBlur: 10,
                          //         shadowOffsetY: 10,
                          //     },
                          //     itemStyle: {
                          //         normal: {
                          //             color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          //                 offset: 0,
                          //                 color: 'rgb(255, 204, 102)'
                          //             }, {
                          //                 offset: 1,
                          //                 color: 'rgb(255, 153, 51)'
                          //             }]),
                          //             label: {
                          //                 show: true,
                          //                 position: 'top',
                          //                 textStyle: {
                          //                     fontSize: '16',
                          //                     color: 'rgb(255, 156, 54)',
                          //                 }
                          //             }
                          //         },
                          //     },
                          //     areaStyle: {
                          //         normal: {
                          //             color:
                          //                 "rgba(0,0,0,0)",
                          //         },
                          //     },
                          // },
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "子公司/业态占比",
                  istime: true,
                  isselect: false,
                  query: {
                    inputValue: "",
                    selectValue: "",
                    timeValue: ""
                  },
                  timeValue: "",
                  selectValue: "",
                  /*包裹ECharts的父级元素的属性*/
                  style: {
                    width: "59%",
                    height: "400px",
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
                        height: "350px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}: {c}万元 ({d}%)",
                          axisPointer: {
                            // 坐标轴指示器，坐标轴触发有效
                            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
                          }
                        },
                        legend: {
                          left: "center",
                          bottom: "10px",
                          data: [
                            "新能源",
                            "石化",
                            "中化交投",
                            "国储",
                            "高路油站",
                            "荆港嘉瑞"
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
                                length: 15,
                                length2: 15,
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
                              {
                                value: 335,
                                name: "新能源"
                              },
                              {
                                value: 310,
                                name: "石化"
                              },
                              {
                                value: 234,
                                name: "中化交投"
                              },
                              {
                                value: 135,
                                name: "国储"
                              },
                              {
                                value: 1548,
                                name: "高路油站"
                              },
                              {
                                value: 1548,
                                name: "荆港嘉瑞"
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
                        height: "350px"
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
                            color: [
                              "#ff78e7",
                              "#02cab3",
                              "#4885ff",
                              "#fec67c",
                              "#cb9bff",
                              "#54c3fc"
                            ],
                            data: [
                              {
                                value: 335,
                                name: "过票"
                              },
                              {
                                value: 310,
                                name: "油品批发"
                              },
                              {
                                value: 234,
                                name: "分销"
                              },
                              {
                                value: 135,
                                name: "油品零售"
                              },
                              {
                                value: 1548,
                                name: "非油品零售"
                              },
                              {
                                value: 1548,
                                name: "其他"
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
              id: "a_2019",
              collapseTitle: "2019年营收",
              year: "2019",
              EChartsBox: [
                {
                  title: "月营收",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "40.5%",
                    height: "400px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "320px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          trigger: "axis",
                          formatter: function(val) {
                            return (
                              val[0].name +
                              "月" +
                              ":" +
                              "<br />营收:" +
                              (val[0].value / 10000).toFixed(2) +
                              "万元"
                            );
                          }
                        },
                        grid: {
                          top: "50",
                          right: "60",
                          left: "60",
                          bottom: "60" //图表尺寸大小
                        },
                        dataZoom: [
                          {
                            type: "inside"
                          },
                          {
                            type: "slider"
                          }
                        ],
                        xAxis: [
                          {
                            type: "category",
                            name: "月",
                            nameTextStyle: {
                              color: "#000"
                            },
                            color: "#59588D",
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
                            ],
                            axisLabel: {
                              margin: 10,
                              color: "#999",
                              textStyle: {
                                fontSize: 12
                              }
                            },
                            axisLine: {
                              lineStyle: {
                                color: "rgba(107,107,107,0.37)"
                              }
                            },
                            axisTick: {
                              show: false
                            }
                          }
                        ],
                        yAxis: [
                          {
                            name: "万元",
                            nameTextStyle: {
                              color: "#000"
                              // fontSize: 16,
                              // padding: 10,
                            },
                            axisLabel: {
                              formatter: function(val) {
                                return val / 10000;
                              },
                              color: "#999",
                              textStyle: {
                                fontSize: 12
                              }
                            },
                            axisLine: {
                              lineStyle: {
                                color: "rgba(107,107,107,0.37)"
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
                          }
                          // {
                          //     type: 'value',
                          //     min: '',//最小坐标
                          //     max: '',//最大坐标
                          //     axisLabel: {
                          //         fontSize: 14,
                          //         color: "#999",
                          //         formatter: '{value} %'
                          //     },
                          //     axisLine: {
                          //         lineStyle: {
                          //             color:
                          //                 "rgba(107,107,107,0.37)",
                          //         },
                          //     },
                          //     splitLine: {
                          //         show: false//是否显示分隔线。
                          //     },
                          //     axisTick: {
                          //         show: false,
                          //     },
                          // }
                        ],
                        series: [
                          {
                            type: "bar",
                            data: [
                              51227980.97,
                              26379186.39,
                              51512554.34,
                              53536277.13,
                              55344513.25,
                              71883601.06,
                              39285722.58,
                              33682947.29,
                              65867750.94
                            ],
                            barWidth: "16px",
                            itemStyle: {
                              normal: {
                                color: "#38A0FF",
                                barBorderRadius: [30, 30, 30, 30]
                              }
                            }
                          }
                          // {
                          //     data: [],
                          //     type: "line",
                          //     name: "折线图",
                          //     yAxisIndex: 1,
                          //     // symbol: 'none',
                          //     lineStyle: {
                          //         color: "#fea2a2",
                          //         width: 2,
                          //         shadowColor:
                          //             "rgba(0, 0, 0, 0.3)", //设置折线阴影
                          //         shadowBlur: 10,
                          //         shadowOffsetY: 10,
                          //     },
                          //     itemStyle: {
                          //         normal: {
                          //             color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          //                 offset: 0,
                          //                 color: 'rgb(255, 204, 102)'
                          //             }, {
                          //                 offset: 1,
                          //                 color: 'rgb(255, 153, 51)'
                          //             }]),
                          //             label: {
                          //                 show: true,
                          //                 position: 'top',
                          //                 textStyle: {
                          //                     fontSize: '16',
                          //                     color: 'rgb(255, 156, 54)',
                          //                 }
                          //             }
                          //         },
                          //     },
                          //     areaStyle: {
                          //         normal: {
                          //             color:
                          //                 "rgba(0,0,0,0)",
                          //         },
                          //     },
                          // },
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "子公司/业态占比",
                  istime: true,
                  select: false,
                  query: {
                    inputValue: "",
                    selectValue: "",
                    timeValue: ""
                  },
                  timeValue: "",
                  selectValue: "",
                  /*包裹ECharts的父级元素的属性*/
                  style: {
                    width: "59%",
                    height: "400px",
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
                        height: "350px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}: {c}万元 ({d}%)",
                          axisPointer: {
                            // 坐标轴指示器，坐标轴触发有效
                            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
                          }
                        },
                        legend: {
                          left: "center",
                          bottom: "10px",
                          data: [
                            "新能源",
                            "石化",
                            "中化交投",
                            "国储",
                            "高路油站",
                            "荆港嘉瑞"
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
                                length: 15,
                                length2: 15,
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
                              {
                                value: 335,
                                name: "新能源"
                              },
                              {
                                value: 310,
                                name: "石化"
                              },
                              {
                                value: 234,
                                name: "中化交投"
                              },
                              {
                                value: 1135,
                                name: "国储"
                              },
                              {
                                value: 1548,
                                name: "高路油站"
                              },
                              {
                                value: 1548,
                                name: "荆港嘉瑞"
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
                        height: "350px"
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
                            color: [
                              "#ff78e7",
                              "#02cab3",
                              "#4885ff",
                              "#fec67c",
                              "#cb9bff",
                              "#54c3fc"
                            ],
                            data: [
                              {
                                value: 1335,
                                name: "过票"
                              },
                              {
                                value: 310,
                                name: "油品批发"
                              },
                              {
                                value: 234,
                                name: "分销"
                              },
                              {
                                value: 135,
                                name: "油品零售"
                              },
                              {
                                value: 1548,
                                name: "非油品零售"
                              },
                              {
                                value: 1548,
                                name: "其他"
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
              id: "a_gd",
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
    await this.obtainAxios("营收", "2020", "ys");
    await this.obtainAxios("营收", "2019", "ys");
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
                      for (let index = data.length + 1; index <= 12; index++) {
                        xBxis.push(index);
                        if (index == 12 && year == "2020") {
                          yAxis.push(0);
                        } else {
                          yAxis.push(Math.ceil(Math.random() * 500000000));
                        }
                      }
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
