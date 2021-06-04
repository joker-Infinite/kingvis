<template>
  <div style="width: 100%; height: 100%;">
    <my-collapse-base
      nav-bar-show
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
  name: "gasWholesale",
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
          id: "gasWholesale",
          name: "批发营收",
          icon: require("../../../assets/serviceArea/yppf/ys.png"),
          iconActive: require("../../../assets/serviceArea/yppf/ys1.png"),
          collapseItem: [
            {
              id: "budget_2020",
              year: 2020,
              collapseTitle: "2020年批发营收",
              EChartsBox: [
                {
                  title: "月批发营收",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "34.5%",
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
                        ],
                        series: [
                          {
                            type: "bar",
                            data: [
                              91227980.97,
                              56379186.39,
                              81512554.34,
                              63536277.13,
                              25344513.25,
                              41883601.06,
                              79285722.58,
                              63682947.29,
                              85867750.94,
                              25867750.94,
                              15867750.94,
                              0
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
                  title: "分公司占比/业态占比",
                  istime: true,
                  select: false,
                  query: {
                    inputValue: "",
                    selectValue: "",
                    timeValue: ""
                  },
                  style: {
                    width: "65%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      style: {
                        width: "33%",
                        height: "300px"
                      },
                      option: {
                        legend: {
                          orient: "horizontal",
                          bottom: "20",
                          x: "center",
                          data: ["92#", "95#", "98#", "0#"],
                          textStyle: {
                            color: "#000",
                            fontSize: 12
                          }
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b} :<br> {c}万元 ({d}%)"
                        },
                        color: ["#49c7ad", "#ffa55b", "#4a90e2", "#797aff"],
                        series: [
                          {
                            type: "pie",
                            radius: "50%",
                            center: ["50%", "40%"],
                            label: {
                              position: "inner"
                            },
                            data: [
                              {
                                value: 3350,
                                name: "92#"
                              },
                              {
                                value: 310,
                                name: "95#"
                              },
                              {
                                value: 234,
                                name: "98#"
                              },
                              {
                                value: 1350,
                                name: "0#"
                              }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      style: {
                        width: "33%",
                        height: "300px"
                      },
                      option: {
                        legend: {
                          orient: "horizontal",
                          bottom: "10",
                          x: "center",
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
                          formatter: "{b} :<br> {c}万元 ({d}%)"
                        },
                        color: [
                          "#FFC371",
                          "#FC892C",
                          "#797AFF",
                          "#507AFF",
                          "#51D9A2"
                        ],
                        series: [
                          {
                            type: "pie",
                            radius: ["30%", "50%"],
                            center: ["50%", "40%"],

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
                                name: "国储"
                              },
                              {
                                value: 135,
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
                      style: {
                        width: "33%",
                        height: "300px"
                      },
                      option: {
                        legend: {
                          orient: "horizontal",
                          bottom: "20",
                          right: "5%",
                          data: ["贸易", "直分销", "票面", "其他"]
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b} :<br> {c}万元 ({d}%)"
                        },
                        color: ["#9e87ff", "#73acff", "#fd8a2d", "#4ecb73"],
                        series: [
                          {
                            type: "pie",
                            radius: "50%",
                            center: ["50%", "40%"],
                            label: {
                              position: "inner"
                            },
                            data: [
                              {
                                value: 335,
                                name: "贸易"
                              },
                              {
                                value: 310,
                                name: "直分销"
                              },
                              {
                                value: 234,
                                name: "票面"
                              },
                              {
                                value: 135,
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
              id: "budget_2019",
              year: 2019,
              collapseTitle: "2019年批发营收",
              EChartsBox: [
                {
                  title: "月批发营收",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "34.5%",
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
                        ],
                        series: [
                          {
                            type: "bar",
                            data: [
                              51227980.97,
                              26379186.39,
                              31512554.34,
                              43536277.13,
                              55344513.25,
                              81883601.06,
                              19285722.58,
                              43682947.29,
                              75867750.94,
                              85867750.94,
                              95867750.94,
                              15867750.94
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
                  title: "分公司占比/业态占比",
                  istime: true,
                  select: false,
                  query: {
                    inputValue: "",
                    selectValue: "",
                    timeValue: ""
                  },
                  style: {
                    width: "65%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      style: {
                        width: "33%",
                        height: "300px"
                      },
                      option: {
                        legend: {
                          orient: "horizontal",
                          bottom: "20",
                          x: "center",
                          data: ["92#", "95#", "98#", "0#"],
                          textStyle: {
                            color: "#000",
                            fontSize: 12
                          }
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b} :<br> {c}万元 ({d}%)"
                        },
                        color: ["#49c7ad", "#ffa55b", "#4a90e2", "#797aff"],
                        series: [
                          {
                            type: "pie",
                            radius: "50%",
                            center: ["50%", "40%"],
                            label: {
                              position: "inner"
                            },
                            data: [
                              {
                                value: 1050,
                                name: "92#"
                              },
                              {
                                value: 310,
                                name: "95#"
                              },
                              {
                                value: 234,
                                name: "98#"
                              },
                              {
                                value: 1350,
                                name: "0#"
                              }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      style: {
                        width: "33%",
                        height: "300px"
                      },
                      option: {
                        legend: {
                          orient: "horizontal",
                          bottom: "10",
                          x: "center",
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
                          formatter: "{b} :<br> {c}万元 ({d}%)"
                        },
                        color: [
                          "#FFC371",
                          "#FC892C",
                          "#797AFF",
                          "#507AFF",
                          "#51D9A2"
                        ],
                        series: [
                          {
                            type: "pie",
                            radius: ["30%", "50%"],
                            center: ["50%", "40%"],

                            data: [
                              {
                                value: 535,
                                name: "新能源"
                              },
                              {
                                value: 210,
                                name: "石化"
                              },
                              {
                                value: 634,
                                name: "国储"
                              },
                              {
                                value: 135,
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
                      style: {
                        width: "33%",
                        height: "300px"
                      },
                      option: {
                        legend: {
                          orient: "horizontal",
                          bottom: "20",
                          right: "5%",
                          data: ["贸易", "直分销", "票面", "其他"]
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b} :<br> {c}万元 ({d}%)"
                        },
                        color: ["#9e87ff", "#73acff", "#fd8a2d", "#4ecb73"],
                        series: [
                          {
                            type: "pie",
                            radius: "50%",
                            center: ["50%", "40%"],
                            label: {
                              position: "inner"
                            },
                            data: [
                              {
                                value: 335,
                                name: "贸易"
                              },
                              {
                                value: 310,
                                name: "直分销"
                              },
                              {
                                value: 534,
                                name: "票面"
                              },
                              {
                                value: 235,
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
              id: "revenue_gd",
              collapseTitle: "查看更多",
              EChartsBox: []
            }
          ]
        },
        {
          id: "gasWholesale2",
          name: "批发利润",
          icon: require("../../../assets/serviceArea/yppf/lr.png"),
          iconActive: require("../../../assets/serviceArea/yppf/lr1.png"),
          collapseItem: [
            {
              id: "gasWholesale2_2020",
              year: 2020,
              collapseTitle: "2020年批发利润",
              EChartsBox: [
                {
                  title: "月批发利润",
                  time: false,
                  timeValue: "",
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
                        ],
                        series: [
                          {
                            type: "bar",
                            data: [
                              11227980.97,
                              56379186.39,
                              61512554.34,
                              43536277.13,
                              75344513.25,
                              31883601.06,
                              59285722.58,
                              33682947.29,
                              25867750.94,
                              15867750.94,
                              65867750.94,
                              0
                            ],
                            barWidth: "16px",
                            itemStyle: {
                              normal: {
                                color: "#38A0FF",
                                barBorderRadius: [30, 30, 30, 30]
                              }
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "分公司占比/业态占比",
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
                        width: "33%",
                        height: "300px"
                      },
                      option: {
                        legend: {
                          orient: "horizontal",
                          bottom: "20",
                          x: "center",
                          data: ["92#", "95#", "98#", "0#"],
                          textStyle: {
                            color: "#000",
                            fontSize: 12
                          }
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b} :<br> {c}万元 ({d}%)"
                        },
                        color: ["#49c7ad", "#ffa55b", "#4a90e2", "#797aff"],
                        series: [
                          {
                            type: "pie",
                            radius: "50%",
                            center: ["50%", "40%"],
                            label: {
                              position: "inner"
                            },
                            data: [
                              {
                                value: 2050,
                                name: "92#"
                              },
                              {
                                value: 510,
                                name: "95#"
                              },
                              {
                                value: 934,
                                name: "98#"
                              },
                              {
                                value: 1350,
                                name: "0#"
                              }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      style: {
                        width: "33%",
                        height: "300px"
                      },
                      option: {
                        legend: {
                          orient: "horizontal",
                          bottom: "10",
                          x: "center",
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
                          formatter: "{b} :<br> {c}万元 ({d}%)"
                        },
                        color: [
                          "#FFC371",
                          "#FC892C",
                          "#797AFF",
                          "#507AFF",
                          "#51D9A2"
                        ],
                        series: [
                          {
                            type: "pie",
                            radius: ["30%", "50%"],
                            center: ["50%", "40%"],

                            data: [
                              {
                                value: 535,
                                name: "新能源"
                              },
                              {
                                value: 610,
                                name: "石化"
                              },
                              {
                                value: 634,
                                name: "国储"
                              },
                              {
                                value: 1135,
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
                      style: {
                        width: "33%",
                        height: "300px"
                      },
                      option: {
                        legend: {
                          orient: "horizontal",
                          bottom: "20",
                          right: "5%",
                          data: ["贸易", "直分销", "票面", "其他"]
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b} :<br> {c}万元 ({d}%)"
                        },
                        color: ["#9e87ff", "#73acff", "#fd8a2d", "#4ecb73"],
                        series: [
                          {
                            type: "pie",
                            radius: "50%",
                            center: ["50%", "40%"],
                            label: {
                              position: "inner"
                            },
                            data: [
                              {
                                value: 835,
                                name: "贸易"
                              },
                              {
                                value: 610,
                                name: "直分销"
                              },
                              {
                                value: 534,
                                name: "票面"
                              },
                              {
                                value: 435,
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
              id: "gasWholesale2_2019",
              year: 2019,
              collapseTitle: "2019年批发利润",
              EChartsBox: [
                {
                  title: "月批发利润",
                  time: false,
                  timeValue: "",
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
                        ],
                        series: [
                          {
                            type: "bar",
                            data: [
                              51227980.97,
                              66379186.39,
                              11512554.34,
                              63536277.13,
                              85344513.25,
                              41883601.06,
                              69285722.58,
                              43682947.29,
                              75867750.94,
                              95867750.94,
                              15867750.94,
                              35867750.94
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
                  title: "分公司占比/业态占比",
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
                        width: "33%",
                        height: "300px"
                      },
                      option: {
                        legend: {
                          orient: "horizontal",
                          bottom: "20",
                          x: "center",
                          data: ["92#", "95#", "98#", "0#"],
                          textStyle: {
                            color: "#000",
                            fontSize: 12
                          }
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b} :<br> {c}万元 ({d}%)"
                        },
                        color: ["#49c7ad", "#ffa55b", "#4a90e2", "#797aff"],
                        series: [
                          {
                            type: "pie",
                            radius: "50%",
                            center: ["50%", "40%"],
                            label: {
                              position: "inner"
                            },
                            data: [
                              {
                                value: 2050,
                                name: "92#"
                              },
                              {
                                value: 510,
                                name: "95#"
                              },
                              {
                                value: 934,
                                name: "98#"
                              },
                              {
                                value: 1350,
                                name: "0#"
                              }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      style: {
                        width: "33%",
                        height: "300px"
                      },
                      option: {
                        legend: {
                          orient: "horizontal",
                          bottom: "10",
                          x: "center",
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
                          formatter: "{b} :<br> {c}万元 ({d}%)"
                        },
                        color: [
                          "#FFC371",
                          "#FC892C",
                          "#797AFF",
                          "#507AFF",
                          "#51D9A2"
                        ],
                        series: [
                          {
                            type: "pie",
                            radius: ["30%", "50%"],
                            center: ["50%", "40%"],

                            data: [
                              {
                                value: 535,
                                name: "新能源"
                              },
                              {
                                value: 610,
                                name: "石化"
                              },
                              {
                                value: 634,
                                name: "国储"
                              },
                              {
                                value: 1135,
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
                      style: {
                        width: "33%",
                        height: "300px"
                      },
                      option: {
                        legend: {
                          orient: "horizontal",
                          bottom: "20",
                          right: "5%",
                          data: ["贸易", "直分销", "票面", "其他"]
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b} :<br> {c}万元 ({d}%)"
                        },
                        color: ["#9e87ff", "#73acff", "#fd8a2d", "#4ecb73"],
                        series: [
                          {
                            type: "pie",
                            radius: "50%",
                            center: ["50%", "40%"],
                            label: {
                              position: "inner"
                            },
                            data: [
                              {
                                value: 835,
                                name: "贸易"
                              },
                              {
                                value: 610,
                                name: "直分销"
                              },
                              {
                                value: 534,
                                name: "票面"
                              },
                              {
                                value: 435,
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
              id: "revenue_gd",
              collapseTitle: "查看更多",
              EChartsBox: []
            }
          ]
        },
        {
          id: "mmm",
          name: "成本利润",
          icon: require("../../../assets/serviceArea/yppf/qs.png"),
          iconActive: require("../../../assets/serviceArea/yppf/qs1.png"),
          collapseItem: [
            {
              id: "mmm_2020",
              year: 2020,
              collapseTitle: "2020年成本利润",

              EChartsBox: [
                {
                  title: "成本利润",
                  select: false,

                  selectNum: 3,
                  selectOption: [
                    ["新能源", "石化", "国储", "荆港嘉瑞"],
                    ["贸易", "直分销", "票面", "其他"],
                    ["成本", "利润", "成本费用利润率"]
                  ],
                  style: {
                    width: "100%",
                    height: "450px",
                    background: "white",
                    borderRadius: "10px",
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
                        xAxis: {
                          type: "category",
                          data: [
                            "01月",
                            "02月",
                            "03月",
                            "04月",
                            "05月",
                            "06月",
                            "07月",
                            "08月",
                            "09月",
                            "10月",
                            "11月",
                            "12月"
                          ]
                        },
                        yAxis: [
                          {
                            type: "value",
                            name: "万元",
                            nameTextStyle: {
                              color: "#000"
                            }
                          },
                          {
                            type: "value",
                            name: "%",
                            nameTextStyle: {
                              color: "#000"
                            }
                          }
                        ],
                        grid: {
                          bottom: 50,
                          right: 30,
                          left: 70,
                          top: 80
                        },
                        tooltip: {
                          trigger: "axis",
                          formatter:
                            "{b}:<br>{a0}:{c0}万元<br>{a1}:{c1}万元<br>{a2}:{c2}% "
                        },
                        legend: {
                          orient: "horizontal",
                          top: 30,
                          icon: "circle",
                          data: ["成本", "利润", "成本费用利润率"]
                        },
                        color: ["#9e87ff", "#73acff", "#fd8a2d"],
                        series: [
                          {
                            name: "成本",
                            barWidth: 20,
                            data: [
                              32012,
                              43232,
                              30121,
                              53334,
                              12940,
                              13350,
                              13120,
                              32321,
                              54653,
                              57646,
                              49821,
                              31542
                            ],
                            type: "bar"
                          },
                          {
                            name: "利润",
                            barWidth: 20,
                            data: [
                              22012,
                              33232,
                              20121,
                              43334,
                              10940,
                              10350,
                              10120,
                              22321,
                              44653,
                              47646,
                              39821,
                              21542
                            ],
                            type: "bar"
                          },
                          {
                            name: "成本费用利润率",
                            yAxisIndex: 1,
                            data: [
                              68.76,
                              76.86,
                              66.80,
                              81.25,
                              84.54,
                              77.52,
                              77.13,
                              69.06,
                              81.70,
                              82.65,
                              79.92,
                              68.29,
                            ],
                            type: "line"
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              id: "mmm_2019",
              year: 2019,
              collapseTitle: "2019年成本利润",
              EChartsBox: [
                {
                  title: "成本利润",
                  select: false,
                  selectNum: 3,
                  selectOption: [
                    ["新能源", "石化", "国储", "荆港嘉瑞"],
                    ["贸易", "直分销", "票面", "其他"],
                    ["批发毛利", "利润率", "成本费用利润率"]
                  ],
                  style: {
                    width: "100%",
                    height: "450px",
                    background: "white",
                    borderRadius: "10px",
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
                        xAxis: {
                          type: "category",
                          data: [
                            "01月",
                            "02月",
                            "03月",
                            "04月",
                            "05月",
                            "06月",
                            "07月",
                            "08月",
                            "09月",
                            "10月",
                            "11月",
                            "12月"
                          ]
                        },
                        yAxis: [
                          {
                            type: "value",
                            name: "万元",
                            nameTextStyle: {
                              color: "#000"
                            }
                          },
                          {
                            type: "value",
                            name: "%",
                            nameTextStyle: {
                              color: "#000"
                            }
                          }
                        ],
                        grid: {
                          bottom: 50,
                          right: 30,
                          left: 70,
                          top: 80
                        },
                        tooltip: {
                          trigger: "axis",
                          formatter:
                            "{b}:<br>{a0}:{c0}万元<br>{a1}:{c1}万元<br>{a2}:{c2}% "
                        },
                        legend: {
                          orient: "horizontal",
                          top: 30,
                          icon: "circle",
                          data: ["成本", "利润", "成本费用利润率"]
                        },
                        color: ["#9e87ff", "#73acff", "#fd8a2d"],
                        series: [
                          {
                            name: "成本",
                            barWidth: 20,
                            data: [
                              82012,
                              33232,
                              40121,
                              63334,
                              92940,
                              83350,
                              23120,
                              12321,
                              54653,
                              77646,
                              29821,
                              11542
                            ],
                            type: "bar"
                          },
                          {
                            name: "利润",
                            barWidth: 20,
                            data: [
                              62012,
                              23232,
                              30121,
                              53334,
                              82940,
                              73350,
                              13120,
                              10321,
                              44653,
                              67646,
                              19821,
                              9542
                            ],
                            type: "bar"
                          },
                          {
                            name: "成本费用利润率",
                            yAxisIndex: 1,
                            data: [
                              75.61,
                              69.91, 
                              75.08, 
                              84.21, 
                              89.24, 
                              88.00, 
                              56.75, 
                              83.77, 
                              81.70, 
                              87.12, 
                              66.47, 
                              82.67, 

                            ],
                            type: "line"
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
            }
          ]
        },
        {
          id: "money",
          name: "现金流量",
          icon: require("../../../assets/serviceArea/yppf/xj.png"),
          iconActive: require("../../../assets/serviceArea/yppf/xj1.png"),
          collapseItem: [
            {
              id: "money_2020",
              year: 2020,
              collapseTitle: "2020年现金流量",
              allQuery: false,
              allQueryData: {
                select: false,
                selectOption: [["新能源", "石化", "国储", "荆港嘉瑞"]]
              },
              EChartsBox: [
                {
                  title: "现金流量",
                  istime: false,
                  timeValue: "",
                  style: {
                    width: "60%",
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
                              "<br />金额:" +
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
                        ],
                        series: [
                          {
                            type: "bar",
                            data: [
                              11227980.97,
                              56379186.39,
                              61512554.34,
                              43536277.13,
                              75344513.25,
                              31883601.06,
                              59285722.58,
                              33682947.29,
                              25867750.94,
                              15867750.94,
                              65867750.94,
                              0
                            ],
                            barWidth: "16px",
                            itemStyle: {
                              normal: {
                                color: "#38A0FF",
                                barBorderRadius: [30, 30, 30, 30]
                              }
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "业务类型占分公司占比",
                  style: {
                    width: "39.5%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      style: {
                        width: "100%",
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
                              { value: 335, name: "新能源" },
                              { value: 310, name: "石化" },
                              { value: 234, name: "国储" },
                              { value: 135, name: "高路油站" },
                              { value: 1548, name: "荆港嘉瑞" }
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
              id: "money_2019",
              year: 2019,
              collapseTitle: "2019年现金流量",
              allQuery: false,
              allQueryData: {
                select: false,
                selectOption: [["新能源", "石化", "国储", "荆港嘉瑞"]]
              },
              EChartsBox: [
                {
                  title: "现金流量",
                  istime: false,
                  timeValue: "",
                  style: {
                    width: "60%",
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
                              "<br />金额:" +
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
                        ],
                        series: [
                          {
                            type: "bar",
                            data: [
                              51227980.97,
                              56379186.39,
                              51512554.34,
                              93536277.13,
                              75344513.25,
                              31883601.06,
                              59285722.58,
                              63682947.29,
                              85867750.94,
                              95867750.94,
                              25867750.94,
                              15867750.94
                            ],
                            barWidth: "16px",
                            itemStyle: {
                              normal: {
                                color: "#38A0FF",
                                barBorderRadius: [30, 30, 30, 30]
                              }
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "业务类型占分公司占比",
                  style: {
                    width: "39.5%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      style: {
                        width: "100%",
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
                              { value: 1335, name: "新能源" },
                              { value: 310, name: "石化" },
                              { value: 234, name: "国储" },
                              { value: 135, name: "高路油站" },
                              { value: 1548, name: "荆港嘉瑞" }
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
    /*await this.obtainAxios("利润", "2020", "lr");
    await this.obtainAxios("利润", "2019", "lr");*/
  },
  watch: {
    viewChange() {
      this.$refs["collapse"].refresh(this.collapseData);
    }
  }
};
</script>
