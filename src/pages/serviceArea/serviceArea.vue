<template>
  <div style="width: 100%; height: 100%;">
    <my-collapse-base
      ref="collapse"
      :collapseData="collapseData"
      @searchQuery="searchQuery"
    >
    </my-collapse-base>
  </div>
</template>

<script>
import MyCollapseBase from "../../components/common/myCollapseBase";
import common from "../../components/js/common";

export default {
  name: "serviceArea",
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
          id: "revenue",
          name: "营收",
          icon: require("../../assets/business/icon_1-1.png"),
          iconActive: require("../../assets/business/icon_1-2.png"),
          collapseItem: [
            {
              id: "revenue_2020",
              year: 2020,
              collapseTitle: "2020年营收",
              allQuery: true,
              allQueryData: {
                input: false,
                select: false,
                time: true
              },
              EChartsBox: [
                {
                  title: "",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "40%",
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
                              ":" +
                              "<br />" +
                              val[0].value / 10000 +
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
                            color: "#59588D",
                            data: [],
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
                            data: [],
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
                  title: "",
                  time: false,
                  select: false,
                  style: {
                    width: "29.5%",
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
                        title: { text: "" },
                        grid: {
                          top: "20%",
                          right: "40",
                          left: "60",
                          bottom: "40" //图表尺寸大小
                        },
                        legend: {
                          orient: "horizontal",
                          bottom: 10
                        },
                        tooltip: { trigger: "item" },
                        series: [
                          {
                            type: "pie",
                            center: ["50%", "50%"],
                            radius: ["25%", "40%"],
                            clockwise: true,
                            avoidLabelOverlap: true,
                            hoverOffset: 15,
                            itemStyle: {
                              normal: {
                                color: function(v) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a",
                                    "#fe3922",
                                    "#52fe36",
                                    "#fe3afc"
                                  ];
                                  return colorList[v.dataIndex];
                                }
                              }
                            },
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
                                length: 30,
                                length2: 25,
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: []
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "",
                  time: false,
                  select: false,
                  style: {
                    width: "29.5%",
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
                        title: { text: "" },
                        tooltip: { trigger: "item" },

                        legend: {
                          orient: "horizontal",
                          bottom: 10
                        },
                        series: [
                          {
                            type: "pie",
                            minAngle: 5, //最小的扇区角度（0 ~ 360），用于防止某个值过小导致扇区太小影响交互
                            avoidLabelOverlap: true, //是否启用防止标签重叠策略
                            center: ["48%", "50%"],
                            radius: ["30%", "38%"],
                            clockwise: true,
                            hoverOffset: 20,
                            itemStyle: {
                              normal: {
                                color: function(v) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a",
                                    "#fe3922",
                                    "#52fe36",
                                    "#fe3afc"
                                  ];
                                  return colorList[v.dataIndex];
                                }
                              }
                            },
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
                                length: 30,
                                length2: 10,
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: []
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              id: "revenue_2019",
              year: 2019,
              collapseTitle: "2019年营收",
              allQuery: true,
              allQueryData: {
                input: false,
                select: false,
                time: true
              },
              EChartsBox: [
                {
                  title: "",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "40%",
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
                        title: { text: "" },
                        tooltip: {
                          trigger: "axis",
                          formatter: function(val) {
                            return (
                              val[0].name +
                              ":" +
                              "<br />" +
                              val[0].value / 10000 +
                              "万元"
                            );
                          }
                        },
                        grid: {
                          top: "50",
                          right: "60",
                          left: "60",
                          bottom: "60"
                        },
                        dataZoom: [{ type: "inside" }, { type: "slider" }],
                        xAxis: [
                          {
                            type: "category",
                            color: "#59588D",
                            data: [],
                            axisLabel: {
                              margin: 10,
                              color: "#999",
                              textStyle: { fontSize: 12 }
                            },
                            axisLine: {
                              lineStyle: { color: "rgba(107,107,107,0.37)" }
                            },
                            axisTick: { show: false }
                          }
                        ],
                        yAxis: [
                          {
                            axisLabel: {
                              formatter: function(val) {
                                return val / 10000;
                              },
                              color: "#999",
                              textStyle: { fontSize: 12 }
                            },
                            axisLine: {
                              lineStyle: {
                                color: "rgba(107,107,107,0.37)"
                              }
                            },
                            axisTick: { show: false },
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
                          //         lineStyle: {color: "rgba(107,107,107,0.37)"},
                          //     },
                          //     splitLine: {show: false},
                          //     axisTick: {show: false},
                          // }
                        ],
                        series: [
                          {
                            type: "bar",
                            data: [],
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
                          //     lineStyle: {
                          //         color: "#fea2a2",
                          //         width: 2,
                          //         shadowColor: "rgba(0, 0, 0, 0.3)",
                          //         shadowBlur: 10,
                          //         shadowOffsetY: 10,
                          //     },
                          //     itemStyle: {
                          //         normal: {
                          //             color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                          //                 {
                          //                     offset: 0,
                          //                     color: 'rgb(255, 204, 102)'
                          //                 },
                          //                 {
                          //                     offset: 1,
                          //                     color: 'rgb(255, 153, 51)'
                          //                 }
                          //             ]),
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
                          //             color: "rgba(0,0,0,0)",
                          //         },
                          //     },
                          // },
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "",
                  time: false,
                  select: false,
                  style: {
                    width: "29.5%",
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
                          bottom: 5
                        },
                        tooltip: {
                          trigger: "item"
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["50%", "50%"],
                            radius: ["25%", "40%"],
                            clockwise: true,
                            avoidLabelOverlap: true,
                            hoverOffset: 15,
                            itemStyle: {
                              normal: {
                                color: function(v) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a",
                                    "#fe3922",
                                    "#52fe36",
                                    "#fe3afc"
                                  ];
                                  return colorList[v.dataIndex];
                                }
                              }
                            },
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
                            data: []
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "",
                  time: false,
                  select: false,
                  style: {
                    width: "29.5%",
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
                        tooltip: {
                          trigger: "item"
                        },

                        legend: {
                          orient: "horizontal",
                          bottom: 10
                        },
                        series: [
                          {
                            type: "pie",
                            avoidLabelOverlap: true,
                            center: ["48%", "50%"],
                            radius: ["30%", "38%"],
                            clockwise: true,
                            hoverOffset: 20,
                            itemStyle: {
                              normal: {
                                color: function(v) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a",
                                    "#fe3922",
                                    "#52fe36",
                                    "#fe3afc"
                                  ];
                                  return colorList[v.dataIndex];
                                }
                              }
                            },
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
                            data: []
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
          id: "profit",
          name: "利润",
          icon: require("../../assets/business/icon_2-1.png"),
          iconActive: require("../../assets/business/icon_2-2.png"),
          collapseItem: [
            {
              id: "profit_2020",
              year: 2020,
              collapseTitle: "2020年利润",
              allQuery: true,
              allQueryData: {
                input: false,
                select: false,
                time: true
              },
              EChartsBox: [
                {
                  title: "",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "40%",
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
                              ":" +
                              "<br />" +
                              val[0].value / 10000 +
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
                            color: "#59588D",
                            data: [],
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
                          },
                          {
                            type: "value",
                            min: "", //最小坐标
                            max: "", //最大坐标
                            axisLabel: {
                              fontSize: 14,
                              color: "#999",
                              formatter: "{value} %"
                            },
                            axisLine: {
                              lineStyle: {
                                color: "rgba(107,107,107,0.37)"
                              }
                            },
                            splitLine: {
                              show: false //是否显示分隔线。
                            },
                            axisTick: {
                              show: false
                            }
                          }
                        ],
                        series: [
                          {
                            type: "bar",
                            data: [],
                            barWidth: "16px",
                            itemStyle: {
                              normal: {
                                color: "#38A0FF",
                                barBorderRadius: [30, 30, 30, 30]
                              }
                            }
                          },
                          {
                            data: [],
                            type: "line",
                            name: "折线图",
                            yAxisIndex: 1,
                            // symbol: 'none',
                            lineStyle: {
                              color: "#fea2a2",
                              width: 2,
                              shadowColor: "rgba(0, 0, 0, 0.3)", //设置折线阴影
                              shadowBlur: 10,
                              shadowOffsetY: 10
                            },
                            itemStyle: {
                              normal: {
                                color: new this.$echarts.graphic.LinearGradient(
                                  0,
                                  0,
                                  0,
                                  1,
                                  [
                                    {
                                      offset: 0,
                                      color: "rgb(255, 204, 102)"
                                    },
                                    {
                                      offset: 1,
                                      color: "rgb(255, 153, 51)"
                                    }
                                  ]
                                ),
                                label: {
                                  show: true,
                                  position: "top",
                                  textStyle: {
                                    fontSize: "16",
                                    color: "rgb(255, 156, 54)"
                                  }
                                }
                              }
                            },
                            areaStyle: {
                              normal: {
                                color: "rgba(0,0,0,0)"
                              }
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "",
                  time: false,
                  select: false,
                  style: {
                    width: "29.5%",
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
                        grid: {
                          top: "20%",
                          right: "40",
                          left: "60",
                          bottom: "40" //图表尺寸大小
                        },
                        legend: {
                          orient: "horizontal",
                          bottom: 10
                        },
                        tooltip: {
                          trigger: "item"
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["50%", "50%"],
                            radius: ["25%", "40%"],
                            clockwise: true,
                            avoidLabelOverlap: true,
                            hoverOffset: 15,
                            itemStyle: {
                              normal: {
                                color: function(v) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a",
                                    "#fe3922",
                                    "#52fe36",
                                    "#fe3afc"
                                  ];
                                  return colorList[v.dataIndex];
                                }
                              }
                            },
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
                                length: 30,
                                length2: 25,
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: []
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "",
                  time: false,
                  select: false,
                  style: {
                    width: "29.5%",
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
                          trigger: "item"
                        },

                        legend: {
                          orient: "horizontal",
                          bottom: 10
                        },

                        series: [
                          {
                            type: "pie",
                            minAngle: 5, //最小的扇区角度（0 ~ 360），用于防止某个值过小导致扇区太小影响交互
                            avoidLabelOverlap: true, //是否启用防止标签重叠策略
                            center: ["48%", "50%"],
                            radius: ["30%", "38%"],
                            clockwise: true,
                            hoverOffset: 20,
                            itemStyle: {
                              normal: {
                                color: function(v) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a",
                                    "#fe3922",
                                    "#52fe36",
                                    "#fe3afc"
                                  ];
                                  return colorList[v.dataIndex];
                                }
                              }
                            },
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
                                length: 30,
                                length2: 10,
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: []
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              id: "profit_2019",
              year: 2019,
              collapseTitle: "2019年利润",
              allQuery: true,
              allQueryData: {
                input: false,
                select: false,
                time: true
              },
              EChartsBox: [
                {
                  title: "",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "40%",
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
                              ":" +
                              "<br />" +
                              val[0].value / 10000 +
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
                            color: "#59588D",
                            data: [],
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
                          },
                          {
                            type: "value",
                            min: "", //最小坐标
                            max: "", //最大坐标
                            axisLabel: {
                              fontSize: 14,
                              color: "#999",
                              formatter: "{value} %"
                            },
                            axisLine: {
                              lineStyle: {
                                color: "rgba(107,107,107,0.37)"
                              }
                            },
                            splitLine: {
                              show: false //是否显示分隔线。
                            },
                            axisTick: {
                              show: false
                            }
                          }
                        ],
                        series: [
                          {
                            type: "bar",
                            data: [],
                            barWidth: "16px",
                            itemStyle: {
                              normal: {
                                color: "#38A0FF",
                                barBorderRadius: [30, 30, 30, 30]
                              }
                            }
                          },
                          {
                            data: [],
                            type: "line",
                            name: "折线图",
                            yAxisIndex: 1,
                            // symbol: 'none',
                            lineStyle: {
                              color: "#fea2a2",
                              width: 2,
                              shadowColor: "rgba(0, 0, 0, 0.3)", //设置折线阴影
                              shadowBlur: 10,
                              shadowOffsetY: 10
                            },
                            itemStyle: {
                              normal: {
                                color: new this.$echarts.graphic.LinearGradient(
                                  0,
                                  0,
                                  0,
                                  1,
                                  [
                                    {
                                      offset: 0,
                                      color: "rgb(255, 204, 102)"
                                    },
                                    {
                                      offset: 1,
                                      color: "rgb(255, 153, 51)"
                                    }
                                  ]
                                ),
                                label: {
                                  show: true,
                                  position: "top",
                                  textStyle: {
                                    fontSize: "16",
                                    color: "rgb(255, 156, 54)"
                                  }
                                }
                              }
                            },
                            areaStyle: {
                              normal: {
                                color: "rgba(0,0,0,0)"
                              }
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "",
                  time: false,
                  select: false,
                  style: {
                    width: "29.5%",
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
                          bottom: 10
                        },
                        tooltip: {
                          trigger: "item"
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["50%", "50%"],
                            radius: ["25%", "40%"],
                            clockwise: true,
                            avoidLabelOverlap: true,
                            hoverOffset: 15,
                            itemStyle: {
                              normal: {
                                color: function(v) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a",
                                    "#fe3922",
                                    "#52fe36",
                                    "#fe3afc"
                                  ];
                                  return colorList[v.dataIndex];
                                }
                              }
                            },
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
                                length: 30,
                                length2: 25,
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: []
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "",
                  time: false,
                  select: false,
                  style: {
                    width: "29.5%",
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
                          trigger: "item"
                        },

                        legend: {
                          orient: "horizontal",
                          bottom: 10
                        },

                        series: [
                          {
                            type: "pie",
                            minAngle: 5, //最小的扇区角度（0 ~ 360），用于防止某个值过小导致扇区太小影响交互
                            avoidLabelOverlap: true, //是否启用防止标签重叠策略
                            center: ["48%", "50%"],
                            radius: ["30%", "38%"],
                            clockwise: true,
                            hoverOffset: 20,
                            itemStyle: {
                              normal: {
                                color: function(v) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a",
                                    "#fe3922",
                                    "#52fe36",
                                    "#fe3afc"
                                  ];
                                  return colorList[v.dataIndex];
                                }
                              }
                            },
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
                                length: 30,
                                length2: 10,
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: []
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              id: "profit_gd",
              collapseTitle: "查看更多",
              EChartsBox: []
            }
          ]
        },
        {
          id: "cost",
          name: "成本",
          icon: require("../../assets/business/icon_3-1.png"),
          iconActive: require("../../assets/business/icon_3-2.png"),
          collapseItem: [
            {
              id: "cost_2020",
              year: 2020,
              collapseTitle: "2020年成本",
              allQuery: true,
              allQueryData: {
                input: false,
                select: false,
                time: true
              },
              EChartsBox: [
                {
                  title: "实际成本",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "40%",
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
                            return val[0].name + ":" + val[0].value + "元";
                          }
                        },
                        grid: {
                          top: "50",
                          right: "40",
                          left: "60",
                          bottom: "60" //图表尺寸大小
                        },
                        xAxis: [
                          {
                            type: "category",
                            color: "#59588D",
                            data: [],
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
                            axisLabel: {
                              formatter: "{value}",
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
                            data: [],
                            barWidth: "16px",
                            itemStyle: {
                              normal: {
                                color: "#38A0FF",
                                barBorderRadius: [30, 30, 30, 30]
                              }
                            }
                          },
                          {
                            data: [],
                            type: "line",
                            name: "折线图",
                            // symbol: 'none',
                            lineStyle: {
                              color: "#fea2a2",
                              width: 2,
                              shadowColor: "rgba(0, 0, 0, 0.3)", //设置折线阴影
                              shadowBlur: 10,
                              shadowOffsetY: 10
                            },
                            areaStyle: {
                              normal: {
                                color: "rgba(0,0,0,0)"
                              }
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "",
                  time: false,
                  select: false,
                  style: {
                    width: "29.5%",
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
                          bottom: 10
                        },
                        tooltip: {
                          trigger: "item"
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["50%", "50%"],
                            radius: ["25%", "40%"],
                            clockwise: true,
                            avoidLabelOverlap: true,
                            hoverOffset: 15,
                            itemStyle: {
                              normal: {
                                color: function(v) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a",
                                    "#fe3922",
                                    "#52fe36",
                                    "#fe3afc"
                                  ];
                                  return colorList[v.dataIndex];
                                }
                              }
                            },
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
                                length: 30,
                                length2: 25,
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: (function() {
                              let data = [];
                              let title = [
                                "特产",
                                "小吃",
                                "餐饮",
                                "便利店",
                                "加油"
                              ];
                              let datas = [1.45, 2.93, 3.15, 4, 5];
                              datas.forEach((element, index) => {
                                data.push({
                                  name: title[index],
                                  value: element
                                });
                              });
                              return data;
                            })()
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "",
                  time: false,
                  select: false,
                  style: {
                    width: "29.5%",
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
                        tooltip: {
                          trigger: "item"
                        },

                        legend: {
                          orient: "horizontal",
                          bottom: 10
                        },

                        series: [
                          {
                            type: "pie",
                            minAngle: 5,
                            avoidLabelOverlap: true,
                            center: ["48%", "50%"],
                            radius: ["30%", "38%"],
                            clockwise: true,
                            hoverOffset: 20,
                            itemStyle: {
                              normal: {
                                color: function(v) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a",
                                    "#fe3922",
                                    "#52fe36",
                                    "#fe3afc"
                                  ];
                                  return colorList[v.dataIndex];
                                }
                              }
                            },
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
                                length: 30,
                                length2: 10,
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              {
                                name: "宜昌",
                                value: 1.45
                              },
                              {
                                name: "恩施",
                                value: 2.93
                              },
                              {
                                name: "孝感",
                                value: 3.15
                              },
                              {
                                name: "咸宁",
                                value: 4.78
                              },
                              {
                                name: "十堰",
                                value: 5.93
                              },
                              {
                                name: "黄冈",
                                value: 5.73
                              }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "公司成本种类预算成本",
                  time: false,
                  select: false,
                  style: {
                    width: "50%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginTop: "5px"
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
                          text: "",
                          top: 20,
                          left: 20
                        },
                        tooltip: {
                          trigger: "axis",
                          formatter: function(val) {
                            return (
                              val[0].name +
                              ":" +
                              val[0].value +
                              "元" +
                              "<br>" +
                              val[1].value +
                              "元" +
                              "<br>" +
                              "实际占比:" +
                              val[2].value +
                              "%"
                            );
                          }
                        },
                        grid: {
                          left: "3%",
                          right: "4%",
                          bottom: "3%",
                          containLabel: true
                        },
                        xAxis: {
                          type: "value",
                          splitLine: {
                            show: false
                          },
                          axisTick: {
                            show: false
                          },
                          axisLine: {
                            show: false
                          },
                          axisLabel: {
                            show: false
                          }
                        },
                        yAxis: {
                          type: "category",
                          data: [
                            "北京",
                            "上海",
                            "天津",
                            "深圳",
                            "456",
                            "7889",
                            "99789"
                          ],
                          splitLine: {
                            show: false
                          },
                          axisTick: {
                            show: false
                          },
                          axisLine: {
                            show: false
                          }
                        },
                        series: [
                          {
                            name: "A门店",
                            type: "bar",
                            stack: "总量",
                            barWidth: 20,
                            itemStyle: {
                              normal: {
                                color: "#379DFB",
                                barBorderRadius: [5, 5, 5, 5]
                              }
                            },
                            label: {
                              normal: {
                                show: true,
                                color: "#fff",
                                position: "insideRight"
                              }
                            },
                            z: 10,
                            data: [320, 302, 301, 543, 320, 302, 301]
                          },
                          {
                            name: "B门店",
                            type: "bar",
                            stack: "总量",
                            itemStyle: {
                              normal: {
                                color: "#dfe5f1",
                                shadowBlur: [0, 0, 0, 10],
                                barBorderRadius: [5, 5, 5, 5]
                              }
                            },
                            label: {
                              normal: {
                                show: true,
                                color: "#000",
                                position: "insideRight"
                              }
                            },
                            z: 5,
                            data: [90, 230, 210, 432, 320, 302, 301]
                          },
                          {
                            name: "B门店",
                            type: "bar",
                            stack: "总量",
                            itemStyle: {
                              normal: {
                                color: "rgba(237,125,49, 0)",
                                shadowBlur: [0, 0, 0, 10],
                                barBorderRadius: [5, 5, 5, 5]
                              }
                            },
                            label: {
                              normal: {
                                color: "red",
                                show: true,
                                position: [10, 5],
                                formatter: "{c}%"
                              }
                            },
                            z: 5,
                            data: [10, 10, 10, 100, 10, 10, 10]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "总公司成本",
                  time: false,
                  select: false,
                  style: {
                    width: "49.5%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginTop: "5px"
                  },
                  EChartsItem: [
                    {
                      type: "box",
                      style: {
                        width: "30%",
                        height: "300px",
                        position: "relative",
                        style: {
                          content: "2000万",
                          width: "75%",
                          color: "#fff",
                          height: "100px",
                          background: "#38d",
                          position: "absolute",
                          top: "100px",
                          left: "10%",
                          borderRadius: "10px",
                          lineHeight: "100px",
                          fontWeight: 700,
                          textAlign: "center",
                          fontSize: "30px"
                        }
                      },
                      option: {}
                    },
                    {
                      type: "box",
                      /*ECharts的属性*/
                      style: {
                        width: "30%",
                        height: "300px",
                        position: "relative",
                        style: {
                          content: "9999万",
                          width: "75%",
                          color: "#fff",
                          height: "100px",
                          background: "#81dd9d",
                          position: "absolute",
                          top: "150px",
                          left: "10%",
                          borderRadius: "10px",
                          lineHeight: "100px",
                          fontWeight: 700,
                          textAlign: "center",
                          fontSize: "30px"
                        }
                      },
                      option: {}
                    },
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "40%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: 66 + "%",
                          x: "center",
                          y: "center",
                          textStyle: {
                            fontWeight: "normal",
                            color: "#29EEF3",
                            fontSize: "25"
                          }
                        },
                        tooltip: {
                          formatter: function(params) {
                            return params.name + "：" + params.percent + " %";
                          }
                        },
                        series: [
                          {
                            name: "circle",
                            type: "pie",
                            clockWise: true,
                            radius: ["50%", "66%"],
                            itemStyle: {
                              normal: {
                                label: {
                                  show: false
                                },
                                labelLine: {
                                  show: false
                                }
                              }
                            },
                            hoverAnimation: false,
                            data: [
                              {
                                value: 66,
                                name: "占比",
                                itemStyle: {
                                  normal: {
                                    color: {
                                      // 颜色渐变
                                      colorStops: [
                                        {
                                          offset: 0,
                                          color: "#4FADFD" // 0% 处的颜色
                                        },
                                        {
                                          offset: 1,
                                          color: "#28E8FA" // 100% 处的颜色1
                                        }
                                      ]
                                    },
                                    label: {
                                      show: false
                                    },
                                    labelLine: {
                                      show: false
                                    }
                                  }
                                }
                              },
                              {
                                name: "剩余",
                                value: 100 - 66,
                                itemStyle: {
                                  normal: {
                                    color: "#E1E8EE"
                                  }
                                }
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
              id: "cost_2019",
              year: 2019,
              collapseTitle: "2019年成本",
              allQuery: true,
              allQueryData: {
                input: false,
                select: false,
                time: true
              },
              EChartsBox: [
                {
                  title: "实际成本",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "40%",
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
                            return val[0].name + ":" + val[0].value + "元";
                          }
                        },
                        grid: {
                          top: "20%",
                          right: "40",
                          left: "60",
                          bottom: "40" //图表尺寸大小
                        },
                        xAxis: [
                          {
                            type: "category",
                            color: "#59588D",
                            data: [
                              "1",
                              "2",
                              "3",
                              "4",
                              "5",
                              "6",
                              "7",
                              "8",
                              "9",
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
                            axisLabel: {
                              formatter: "{value}",
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
                            barWidth: "16px",
                            itemStyle: {
                              normal: {
                                color: "#38A0FF",
                                barBorderRadius: [30, 30, 30, 30]
                              }
                            }
                          },
                          {
                            data: [
                              40,
                              80,
                              500,
                              36,
                              30,
                              35,
                              400,
                              60,
                              40,
                              80,
                              50,
                              360
                            ],
                            type: "line",
                            name: "折线图",
                            // symbol: 'none',
                            lineStyle: {
                              color: "#fea2a2",
                              width: 2,
                              shadowColor: "rgba(0, 0, 0, 0.3)", //设置折线阴影
                              shadowBlur: 10,
                              shadowOffsetY: 10
                            },
                            areaStyle: {
                              normal: {
                                color: "rgba(0,0,0,0)"
                              }
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "",
                  time: false,
                  select: false,
                  style: {
                    width: "29.5%",
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
                          bottom: 10
                        },
                        tooltip: {
                          trigger: "item"
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["50%", "50%"],
                            radius: ["25%", "40%"],
                            clockwise: true,
                            avoidLabelOverlap: true,
                            hoverOffset: 15,
                            itemStyle: {
                              normal: {
                                color: function(v) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a",
                                    "#fe3922",
                                    "#52fe36",
                                    "#fe3afc"
                                  ];
                                  return colorList[v.dataIndex];
                                }
                              }
                            },
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
                                length: 30,
                                length2: 25,
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: (function() {
                              let data = [];
                              let title = [
                                "特产",
                                "小吃",
                                "餐饮",
                                "便利店",
                                "加油"
                              ];
                              let datas = [1.45, 2.93, 3.15, 4, 5];
                              datas.forEach((element, index) => {
                                data.push({
                                  name: title[index],
                                  value: element
                                });
                              });
                              return data;
                            })()
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "",
                  time: false,
                  select: false,
                  style: {
                    width: "29.5%",
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
                          trigger: "item"
                        },

                        legend: {
                          orient: "horizontal",
                          bottom: 10
                        },

                        series: [
                          {
                            type: "pie",
                            minAngle: 5, //最小的扇区角度（0 ~ 360），用于防止某个值过小导致扇区太小影响交互
                            avoidLabelOverlap: true, //是否启用防止标签重叠策略
                            center: ["48%", "50%"],
                            radius: ["30%", "38%"],
                            clockwise: true,
                            hoverOffset: 20,
                            itemStyle: {
                              normal: {
                                color: function(v) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a",
                                    "#fe3922",
                                    "#52fe36",
                                    "#fe3afc"
                                  ];
                                  return colorList[v.dataIndex];
                                }
                              }
                            },
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
                                length: 30,
                                length2: 10,
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              {
                                name: "宜昌",
                                value: 1.45
                              },
                              {
                                name: "恩施",
                                value: 2.93
                              },
                              {
                                name: "孝感",
                                value: 3.15
                              },
                              {
                                name: "咸宁",
                                value: 4.78
                              },
                              {
                                name: "十堰",
                                value: 5.93
                              },
                              {
                                name: "黄冈",
                                value: 5.73
                              }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "公司成本种类预算成本",
                  time: false,
                  select: false,
                  style: {
                    width: "50%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginTop: "5px"
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
                          text: "",
                          top: 20,
                          left: 20
                        },
                        tooltip: {
                          trigger: "axis",
                          formatter: function(val) {
                            return (
                              val[0].name +
                              ":" +
                              val[0].value +
                              "元" +
                              "<br>" +
                              val[1].value +
                              "元" +
                              "<br>" +
                              "实际占比:" +
                              val[2].value +
                              "%"
                            );
                          }
                        },
                        grid: {
                          left: "3%",
                          right: "4%",
                          bottom: "3%",
                          containLabel: true
                        },
                        xAxis: {
                          type: "value",
                          splitLine: {
                            show: false
                          },
                          axisTick: {
                            show: false
                          },
                          axisLine: {
                            show: false
                          },
                          axisLabel: {
                            show: false
                          }
                        },
                        yAxis: {
                          type: "category",
                          data: [
                            "北京",
                            "上海",
                            "天津",
                            "深圳",
                            "456",
                            "7889",
                            "99789"
                          ],
                          splitLine: {
                            show: false
                          },
                          axisTick: {
                            show: false
                          },
                          axisLine: {
                            show: false
                          }
                        },
                        series: [
                          {
                            name: "A门店",
                            type: "bar",
                            stack: "总量",
                            barWidth: 20,
                            itemStyle: {
                              normal: {
                                color: "#379DFB",
                                barBorderRadius: [5, 5, 5, 5]
                              }
                            },
                            label: {
                              normal: {
                                show: true,
                                color: "#fff",
                                position: "insideRight"
                              }
                            },
                            z: 10,
                            data: [320, 302, 301, 543, 320, 302, 301]
                          },
                          {
                            name: "B门店",
                            type: "bar",
                            stack: "总量",
                            itemStyle: {
                              normal: {
                                color: "#dfe5f1",
                                shadowBlur: [0, 0, 0, 10],
                                barBorderRadius: [5, 5, 5, 5]
                              }
                            },
                            label: {
                              normal: {
                                show: true,
                                color: "#000",
                                position: "insideRight"
                              }
                            },
                            z: 5,
                            data: [90, 230, 210, 432, 320, 302, 301]
                          },
                          {
                            name: "B门店",
                            type: "bar",
                            stack: "总量",
                            itemStyle: {
                              normal: {
                                color: "rgba(237,125,49, 0)",
                                shadowBlur: [0, 0, 0, 10],
                                barBorderRadius: [5, 5, 5, 5]
                              }
                            },
                            label: {
                              normal: {
                                color: "red",
                                show: true,
                                position: [10, 5],
                                formatter: "{c}%"
                              }
                            },
                            z: 5,
                            data: [10, 10, 10, 100, 10, 10, 10]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "总公司成本",
                  time: false,
                  select: false,
                  style: {
                    width: "49.5%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginTop: "5px"
                  },
                  EChartsItem: [
                    {
                      type: "box",
                      style: {
                        width: "30%",
                        height: "300px",
                        position: "relative",
                        style: {
                          content: "2000万",
                          width: "75%",
                          color: "#fff",
                          height: "100px",
                          background: "#38d",
                          position: "absolute",
                          top: "100px",
                          left: "10%",
                          borderRadius: "10px",
                          lineHeight: "100px",
                          fontWeight: 700,
                          textAlign: "center",
                          fontSize: "30px"
                        }
                      },
                      option: {}
                    },
                    {
                      type: "box",
                      /*ECharts的属性*/
                      style: {
                        width: "30%",
                        height: "300px",
                        position: "relative",
                        style: {
                          content: "9999万",
                          width: "75%",
                          color: "#fff",
                          height: "100px",
                          background: "#81dd9d",
                          position: "absolute",
                          top: "150px",
                          left: "10%",
                          borderRadius: "10px",
                          lineHeight: "100px",
                          fontWeight: 700,
                          textAlign: "center",
                          fontSize: "30px"
                        }
                      },
                      option: {}
                    },
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "40%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: 66 + "%",
                          x: "center",
                          y: "center",
                          textStyle: {
                            fontWeight: "normal",
                            color: "#29EEF3",
                            fontSize: "25"
                          }
                        },
                        tooltip: {
                          formatter: function(params) {
                            return params.name + "：" + params.percent + " %";
                          }
                        },
                        series: [
                          {
                            name: "circle",
                            type: "pie",
                            clockWise: true,
                            radius: ["50%", "66%"],
                            itemStyle: {
                              normal: {
                                label: {
                                  show: false
                                },
                                labelLine: {
                                  show: false
                                }
                              }
                            },
                            hoverAnimation: false,
                            data: [
                              {
                                value: 66,
                                name: "占比",
                                itemStyle: {
                                  normal: {
                                    color: {
                                      // 颜色渐变
                                      colorStops: [
                                        {
                                          offset: 0,
                                          color: "#4FADFD" // 0% 处的颜色
                                        },
                                        {
                                          offset: 1,
                                          color: "#28E8FA" // 100% 处的颜色1
                                        }
                                      ]
                                    },
                                    label: {
                                      show: false
                                    },
                                    labelLine: {
                                      show: false
                                    }
                                  }
                                }
                              },
                              {
                                name: "剩余",
                                value: 100 - 66,
                                itemStyle: {
                                  normal: {
                                    color: "#E1E8EE"
                                  }
                                }
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
              id: "cost_gd",
              collapseTitle: "查看更多",
              EChartsBox: []
            }
          ]
        },
        {
          id: "quantity",
          name: "数量",
          icon: require("../../assets/business/icon_4-1.png"),
          iconActive: require("../../assets/business/icon_4-2.png"),
          collapseItem: [
            {
              id: "quantity_20",
              collapseTitle: "服务区数量",
              EChartsBox: [
                {
                  title: "",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "100%",
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
                        tooltip: {
                          //提示框组件
                          trigger: "axis",
                          // formatter: '{b}<br />{a0}: {c0}<br />{a1}: {c1}',
                          axisPointer: {
                            type: "none",
                            label: {
                              backgroundColor: "rgba(0,0,0,0)"
                            }
                          },
                          formatter: function(val) {
                            return (
                              val[0].name +
                              ":" +
                              "<br>" +
                              val[0].marker +
                              val[0].seriesName +
                              ":" +
                              val[0].value +
                              "元" +
                              "<br>" +
                              val[1].marker +
                              val[1].seriesName +
                              ":" +
                              val[1].value +
                              "元" +
                              "<br>" +
                              val[2].marker +
                              val[2].seriesName +
                              ":" +
                              val[1].value +
                              "元" +
                              "<br>"
                            );
                          },
                          textStyle: {
                            color: "#fff",
                            fontStyle: "normal",
                            fontFamily: "微软雅黑",
                            fontSize: 12
                          }
                        },
                        grid: {
                          left: "10%",
                          right: "10%",
                          bottom: "5%",
                          top: "10%",
                          //	padding:'0 0 10 0',
                          containLabel: true
                        },
                        legend: {
                          //图例组件，颜色和名字
                          right: "20%",
                          top: "5%",
                          // top: '30%',
                          itemGap: 16,
                          itemWidth: 18,
                          itemHeight: 10,
                          data: [
                            {
                              name: "接手"
                              //icon:'image://../wwwroot/js/url2.png', //路径
                            },
                            {
                              name: "投营"
                            },
                            {
                              name: "总数量"
                            }
                          ],
                          textStyle: {
                            color: "#a8aab0",
                            fontStyle: "normal",
                            fontFamily: "微软雅黑",
                            fontSize: 12
                          }
                        },
                        xAxis: [
                          {
                            type: "category",
                            //	boundaryGap: true,//坐标轴两边留白
                            data: [
                              "2015",
                              "2016",
                              "2017",
                              "2018",
                              "2019",
                              "2020"
                            ],
                            axisLabel: {
                              //坐标轴刻度标签的相关设置。
                              //		interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
                              //	margin:15,
                              textStyle: {
                                color: "#c8c9c9",
                                fontStyle: "normal",
                                fontFamily: "微软雅黑",
                                fontSize: 12
                              }
                              // rotate: 50,
                            },
                            axisTick: {
                              //坐标轴刻度相关设置。
                              show: false
                            },
                            axisLine: {
                              //坐标轴轴线相关设置
                              lineStyle: {
                                color: "#c8c9c9",
                                opacity: 1
                              }
                            },
                            splitLine: {
                              //坐标轴在 grid 区域中的分隔线。
                              show: false
                            }
                          },
                          {
                            type: "value",
                            show: false
                          }
                        ],
                        yAxis: [
                          {
                            type: "value",
                            splitNumber: 5,
                            axisLabel: {
                              textStyle: {
                                color: "#c8c9c9",
                                fontStyle: "normal",
                                fontFamily: "微软雅黑",
                                fontSize: 12
                              }
                            },
                            axisLine: {
                              show: false
                            },
                            axisTick: {
                              show: false
                            },
                            splitLine: {
                              show: true,
                              lineStyle: {
                                color: ["#fff"],
                                opacity: 0.06
                              }
                            }
                          }
                        ],
                        series: [
                          {
                            name: "接手",
                            type: "bar",
                            data: [62, 160, 80, 62, 60, 55, 45, 30, 15, 10],
                            barWidth: 20,
                            // barGap: 10,//柱间距离
                            barCategoryGap: "50%",
                            itemStyle: {
                              normal: {
                                show: true,
                                color: "#01a4f7",
                                barBorderRadius: 50,
                                borderWidth: 0
                              }
                            }
                          },
                          {
                            name: "投营",
                            type: "bar",
                            data: [65, 55, 60, 45, 42, 15, 12, 5],
                            barWidth: 20,
                            // barGap: 0,//柱间距离
                            barCategoryGap: "50%",

                            itemStyle: {
                              normal: {
                                show: true,
                                color: "#0fd927",
                                barBorderRadius: 50,
                                borderWidth: 0
                              }
                            }
                          },
                          {
                            name: "总数量",
                            type: "bar",
                            data: [65, 55, 60, 45, 42, 15, 12, 5],
                            barWidth: 20,
                            // barGap: 0,//柱间距离
                            barCategoryGap: "50%",

                            itemStyle: {
                              normal: {
                                show: true,
                                color: "#fcc32d",
                                barBorderRadius: 50,
                                borderWidth: 0
                              }
                            }
                          },
                          {
                            xAxisIndex: 1,
                            type: "line",
                            itemStyle: {
                              normal: {
                                color: "#b37eeb"
                              }
                            },
                            data: (function() {
                              let data = [65, 55, 60, 45, 42, 15];
                              let datas = [];
                              data.forEach((element, index) => {
                                datas.push([35 + index * 100, element]);
                              });
                              return datas;
                            })()
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "construction",
          name: "结构",
          icon: require("../../assets/business/icon_5-1.png"),
          iconActive: require("../../assets/business/icon_5-2.png"),
          collapseItem: [
            {
              id: "construction_2020",
              year: 2020,
              collapseTitle: "2020年业态结构",
              EChartsBox: [
                {
                  title: "品牌分类",
                  time: true,
                  timeValue: "",
                  style: {
                    width: "100%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "49.5%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: "总营业额",
                          top: "43%",
                          left: "center",
                          textStyle: {
                            fontSize: 16
                          },
                          subtext: "85000",
                          subtextStyle: {
                            fontSize: 20,
                            color: "#F98B2F",
                            fontWeight: "bolder"
                          }
                        },
                        grid: {
                          top: "20%",
                          right: "40",
                          left: "60",
                          bottom: "40" //图表尺寸大小
                        },
                        legend: {
                          orient: "horizontal",
                          bottom: 10
                        },
                        tooltip: {
                          trigger: "item"
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["50%", "50%"],
                            radius: ["35%", "55%"],
                            clockwise: true,
                            avoidLabelOverlap: true,
                            hoverOffset: 15,
                            itemStyle: {
                              normal: {
                                borderWidth: 0,
                                borderColor: "rgba(255,255,255,0)",
                                shadowBlur: 20,
                                shadowColor: "rgba(57,39,132,0.3)",
                                shadowOffsetX: -5,
                                shadowOffsetY: -5,
                                color: function(params) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a",
                                    "#fe3922",
                                    "#52fe36",
                                    "#fe3afc"
                                  ];
                                  return colorList[params.dataIndex];
                                }
                              },
                              emphasis: {
                                borderWidth: 10
                              }
                            },
                            label: {
                              show: true,
                              position: "outer",
                              width: 0,
                              height: 0,
                              lineHeight: 0,
                              backgroundColor: "auto",
                              padding: [0, -100, 25, -100],
                              borderRadius: 2,
                              distanceToLabelLine: 0,
                              normal: {
                                formatter(v) {
                                  return (
                                    "{name|" +
                                    v.name +
                                    "}\n{value|" +
                                    v.percent +
                                    "}"
                                  );
                                },
                                textStyle: {
                                  fontSize: 16
                                },
                                rich: {
                                  name: {
                                    fontSize: 14,
                                    padding: [0, 10, 0, 4]
                                  },
                                  value: {
                                    fontSize: 16
                                  }
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                length: 35,
                                length2: 35,
                                lineStyle: {
                                  width: 1.5
                                }
                              }
                            },
                            data: [
                              {
                                name: "传统",
                                value: 1.45
                              },
                              {
                                name: "品牌",
                                value: 2.93
                              },
                              {
                                name: "特色",
                                value: 3.15
                              }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "49.5%",
                        height: "300px"
                      },
                      option: {
                        legend: {
                          orient: "horizontal",
                          bottom: 10
                        },
                        tooltip: {
                          formatter: "{b}:{c}: ({d}%)"
                        },

                        series: [
                          {
                            name: "整体分类",
                            type: "pie",
                            radius: [0, "30%"],
                            label: {
                              position: "inner",
                              textStyle: {
                                fontSize: 16
                              }
                            },
                            itemStyle: {
                              normal: {
                                borderColor: "#fff",
                                borderWidth: 2,
                                color: function(params) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a",
                                    "#fe3922",
                                    "#52fe36",
                                    "#fe3afc"
                                  ];
                                  return colorList[params.dataIndex];
                                }
                              }
                            },
                            selectedMode: "single",
                            data: [
                              {
                                value: 875,
                                name: "特色"
                              },
                              {
                                value: 1239,
                                name: "传统"
                              },
                              {
                                value: 1239,
                                name: "品牌"
                              }
                            ]
                          },
                          {
                            name: "招标方式",
                            type: "pie",
                            radius: ["40%", "55%"],

                            itemStyle: {
                              normal: {
                                color: function(params) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a",
                                    "#fe3922",
                                    "#52fe36",
                                    "#fe3afc"
                                  ];
                                  return colorList[params.dataIndex];
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                length: 30,
                                length2: 30,
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
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

                            data: [
                              {
                                value: 875,
                                name: "特色",
                                type: "特色"
                              },
                              {
                                value: 1239,
                                name: "传统",
                                type: "传统"
                              },
                              {
                                value: 1239,
                                name: "品牌",
                                type: "品牌"
                              }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "table列表",
                  style: {
                    width: "100%",
                    height: "300px",
                    borderRadius: "10px",
                    background: "white",
                    marginBottom: "5px",
                    marginTop: "5px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      type: "table",
                      height: "400px",
                      isPagination: true,
                      border: true,
                      style: {
                        width: "100%",
                        height: "300px",
                        background: "#fff"
                      },
                      columns: [
                        {
                          prop: "A",
                          label: "业态结构"
                        },
                        {
                          prop: "B",
                          label: "所在服务区个数"
                        },
                        {
                          prop: "C",
                          label: "经营场所个数"
                        },
                        {
                          prop: "D",
                          label: "占地面积(平方米)"
                        },
                        {
                          prop: "E",
                          label: "订单数"
                        },
                        {
                          prop: "F",
                          label: "收入(元)"
                        },
                        {
                          prop: "G",
                          label: "客单价(元)"
                        },
                        {
                          prop: "H",
                          label: "坪效(元)"
                        },
                        {
                          prop: "I",
                          label: "利润(元)"
                        }
                      ],
                      tableData: [
                        {
                          A: "一线品牌",
                          B: "8%",
                          C: "8%",
                          D: "8%",
                          E: "8%",
                          F: "110000",
                          G: "110000",
                          H: "110000",
                          I: "110000"
                        },
                        {
                          A: "本地特色",
                          B: "8%",
                          C: "8%",
                          D: "8%",
                          E: "8%",
                          F: "120000",
                          G: "110000",
                          H: "110000",
                          I: "110000"
                        },
                        {
                          A: "传统产业",
                          B: "8%",
                          C: "8%",
                          D: "8%",
                          E: "8%",
                          F: "130000",
                          G: "110000",
                          H: "110000",
                          I: "110000"
                        }
                      ]
                    }
                  ]
                },
                {
                  title: "业态分类",
                  time: true,
                  timeValue: "",
                  style: {
                    width: "100%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "49.5%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: "总营业额(万元)",
                          top: "40%",
                          left: "center",
                          // x: 'center',
                          // y: 'center',
                          textStyle: {
                            fontSize: 16
                          },
                          subtext: "85000",
                          subtextStyle: {
                            fontSize: 20,
                            color: "#1edf57",
                            fontWeight: "bolder"
                          }
                        },
                        grid: {
                          top: "20%",
                          right: "40",
                          left: "60",
                          bottom: "40" //图表尺寸大小
                        },
                        legend: {
                          orient: "horizontal",
                          bottom: 10
                        },
                        tooltip: {
                          trigger: "item"
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["50%", "50%"],
                            radius: ["44%", "55%"],
                            clockwise: true,
                            avoidLabelOverlap: true,
                            hoverOffset: 15,
                            itemStyle: {
                              normal: {
                                color: function(params) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a",
                                    "#fe3922",
                                    "#52fe36",
                                    "#fe3afc"
                                  ];
                                  return colorList[params.dataIndex];
                                }
                              }
                            },
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
                                length: 30,
                                length2: 30,
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              {
                                name: "传统",
                                value: 1.45
                              },
                              {
                                name: "品牌",
                                value: 2.93
                              },
                              {
                                name: "特色",
                                value: 3.15
                              }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "49.5%",
                        height: "300px"
                      },
                      option: {
                        legend: {
                          orient: "horizontal",
                          bottom: 10
                        },
                        tooltip: {
                          formatter: "{b}:{c}: ({d}%)"
                        },

                        series: [
                          {
                            name: "整体分类",
                            type: "pie",
                            radius: [0, "30%"],
                            label: {
                              position: "inner"
                            },
                            itemStyle: {
                              normal: {
                                borderColor: "#fff",
                                borderWidth: 2,
                                color: function(params) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a",
                                    "#fe3922",
                                    "#52fe36",
                                    "#fe3afc"
                                  ];
                                  return colorList[params.dataIndex];
                                }
                              }
                            },

                            selectedMode: "single",
                            data: [
                              {
                                value: 875,
                                name: "特色"
                              },
                              {
                                value: 1239,
                                name: "传统"
                              },
                              {
                                value: 1239,
                                name: "品牌"
                              }
                            ]
                          },
                          {
                            name: "招标方式",
                            type: "pie",
                            radius: ["40%", "55%"],

                            itemStyle: {
                              normal: {
                                color: function(params) {
                                  let colorList = [
                                    "#73acff",
                                    "#fd866a",
                                    "#9e87ff"
                                  ];
                                  return colorList[params.dataIndex];
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                length: 30,
                                length2: 30,
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
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
                                  fontSize: 15
                                }
                              }
                            },

                            data: [
                              {
                                value: 875,
                                name: "特色",
                                type: "特色"
                              },
                              {
                                value: 1239,
                                name: "传统",
                                type: "传统"
                              },
                              {
                                value: 1239,
                                name: "品牌",
                                type: "品牌"
                              }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "table列表",
                  style: {
                    width: "100%",
                    height: "300px",
                    borderRadius: "10px",
                    background: "white",
                    marginBottom: "5px",
                    marginTop: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      type: "table",
                      height: "400px",
                      isPagination: true,
                      border: true,
                      style: {
                        width: "100%",
                        height: "300px",
                        background: "#fff"
                      },
                      columns: [
                        {
                          prop: "A",
                          label: "业态结构"
                        },
                        {
                          prop: "B",
                          label: "所在服务区个数"
                        },
                        {
                          prop: "C",
                          label: "经营场所个数"
                        },
                        {
                          prop: "D",
                          label: "占地面积(平方米)"
                        },
                        {
                          prop: "E",
                          label: "订单数"
                        },
                        {
                          prop: "F",
                          label: "收入(元)"
                        },
                        {
                          prop: "G",
                          label: "客单价(元)"
                        },
                        {
                          prop: "H",
                          label: "坪效(元)"
                        },
                        {
                          prop: "I",
                          label: "利润(元)"
                        }
                      ],
                      tableData: [
                        {
                          A: "一线品牌",
                          B: "8%",
                          C: "8%",
                          D: "8%",
                          E: "8%",
                          F: "110000",
                          G: "110000",
                          H: "110000",
                          I: "110000"
                        },
                        {
                          A: "本地特色",
                          B: "8%",
                          C: "8%",
                          D: "8%",
                          E: "8%",
                          F: "120000",
                          G: "110000",
                          H: "110000",
                          I: "110000"
                        },
                        {
                          A: "传统产业",
                          B: "8%",
                          C: "8%",
                          D: "8%",
                          E: "8%",
                          F: "130000",
                          G: "110000",
                          H: "110000",
                          I: "110000"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "construction_2019",
              year: 2019,
              collapseTitle: "2019年业态结构",
              EChartsBox: [
                {
                  title: "品牌分类",
                  time: true,
                  timeValue: "",
                  style: {
                    width: "100%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "49.5%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: "总营业额(万元)",
                          top: "40%",
                          left: "center",
                          // x: 'center',
                          // y: 'center',
                          textStyle: {
                            fontSize: 16
                          },
                          subtext: "85000",
                          subtextStyle: {
                            fontSize: 20,
                            color: "#1edf57",
                            fontWeight: "bolder"
                          }
                        },
                        grid: {
                          top: "20%",
                          right: "40",
                          left: "60",
                          bottom: "40" //图表尺寸大小
                        },
                        legend: {
                          orient: "horizontal",
                          bottom: 10
                        },
                        tooltip: {
                          trigger: "item"
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["50%", "50%"],
                            radius: ["44%", "55%"],
                            clockwise: true,
                            avoidLabelOverlap: true,
                            hoverOffset: 15,
                            itemStyle: {
                              normal: {
                                color: function(params) {
                                  let colorList = [
                                    "#fd866a",
                                    "#9e87ff",
                                    "#73acff"
                                  ];
                                  return colorList[params.dataIndex];
                                }
                              }
                            },
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
                                  fontSize: 15
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                length: 30,
                                length2: 30,
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              {
                                name: "传统",
                                value: 1.45
                              },
                              {
                                name: "品牌",
                                value: 2.93
                              },
                              {
                                name: "特色",
                                value: 3.15
                              }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "49.5%",
                        height: "300px"
                      },
                      option: {
                        legend: {
                          orient: "horizontal",
                          bottom: 10
                        },
                        tooltip: {
                          formatter: "{b}:{c}: ({d}%)"
                        },

                        series: [
                          {
                            name: "整体分类",
                            type: "pie",
                            radius: [0, "30%"],
                            label: {
                              position: "inner"
                            },
                            itemStyle: {
                              normal: {
                                borderColor: "#fff",
                                borderWidth: 2,
                                color: function(params) {
                                  let colorList = [
                                    "#73acff",
                                    "#fd866a",
                                    "#9e87ff"
                                  ];
                                  return colorList[params.dataIndex];
                                }
                              }
                            },

                            selectedMode: "single",
                            data: [
                              {
                                value: 875,
                                name: "特色"
                              },
                              {
                                value: 1239,
                                name: "传统"
                              },
                              {
                                value: 1239,
                                name: "品牌"
                              }
                            ]
                          },
                          {
                            name: "招标方式",
                            type: "pie",
                            radius: ["40%", "55%"],

                            itemStyle: {
                              normal: {
                                color: function(params) {
                                  let colorList = [
                                    "#73acff",
                                    "#fd866a",
                                    "#9e87ff"
                                  ];
                                  return colorList[params.dataIndex];
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                length: 30,
                                length2: 30,
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
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
                                  fontSize: 15
                                }
                              }
                            },

                            data: [
                              {
                                value: 875,
                                name: "特色",
                                type: "特色"
                              },
                              {
                                value: 1239,
                                name: "传统",
                                type: "传统"
                              },
                              {
                                value: 1239,
                                name: "品牌",
                                type: "品牌"
                              }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "table列表",
                  style: {
                    width: "100%",
                    height: "300px",
                    borderRadius: "10px",
                    background: "white",
                    marginBottom: "5px",
                    marginTop: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      type: "table",
                      height: "400px",
                      isPagination: true,
                      style: {
                        width: "100%",
                        // height: "300px",
                        background: "#fff"
                      },
                      columns: [
                        {
                          prop: "A",
                          label: "业态结构"
                        },
                        {
                          prop: "B",
                          label: "所在服务区个数"
                        },
                        {
                          prop: "C",
                          label: "经营场所个数"
                        },
                        {
                          prop: "D",
                          label: "占地面积(平方米)"
                        },
                        {
                          prop: "E",
                          label: "订单数"
                        },
                        {
                          prop: "F",
                          label: "收入(元)"
                        },
                        {
                          prop: "G",
                          label: "客单价(元)"
                        },
                        {
                          prop: "H",
                          label: "坪效(元)"
                        },
                        {
                          prop: "I",
                          label: "利润(元)"
                        }
                      ],
                      tableData: [
                        {
                          A: "一线品牌",
                          B: "8%",
                          C: "8%",
                          D: "8%",
                          E: "8%",
                          F: "110000",
                          G: "110000",
                          H: "110000",
                          I: "110000"
                        },
                        {
                          A: "本地特色",
                          B: "8%",
                          C: "8%",
                          D: "8%",
                          E: "8%",
                          F: "120000",
                          G: "110000",
                          H: "110000",
                          I: "110000"
                        },
                        {
                          A: "传统产业",
                          B: "8%",
                          C: "8%",
                          D: "8%",
                          E: "8%",
                          F: "130000",
                          G: "110000",
                          H: "110000",
                          I: "110000"
                        }
                      ]
                    }
                  ]
                },
                {
                  title: "业态分类",
                  time: true,
                  timeValue: "",
                  style: {
                    width: "100%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "49.5%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: "总营业额(万元)",
                          top: "40%",
                          left: "center",
                          // x: 'center',
                          // y: 'center',
                          textStyle: {
                            fontSize: 16
                          },
                          subtext: "85000",
                          subtextStyle: {
                            fontSize: 20,
                            color: "#1edf57",
                            fontWeight: "bolder"
                          }
                        },
                        grid: {
                          top: "20%",
                          right: "40",
                          left: "60",
                          bottom: "40" //图表尺寸大小
                        },
                        legend: {
                          orient: "horizontal",
                          bottom: 10
                        },
                        tooltip: {
                          trigger: "item"
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["50%", "50%"],
                            radius: ["44%", "55%"],
                            clockwise: true,
                            avoidLabelOverlap: true,
                            hoverOffset: 15,
                            itemStyle: {
                              normal: {
                                color: function(params) {
                                  let colorList = [
                                    "#fd866a",
                                    "#9e87ff",
                                    "#73acff"
                                  ];
                                  return colorList[params.dataIndex];
                                }
                              }
                            },
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
                                  fontSize: 15
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                length: 30,
                                length2: 30,
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              {
                                name: "传统",
                                value: 1.45
                              },
                              {
                                name: "品牌",
                                value: 2.93
                              },
                              {
                                name: "特色",
                                value: 3.15
                              }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "49.5%",
                        height: "300px"
                      },
                      option: {
                        legend: {
                          orient: "horizontal",
                          bottom: 10
                        },
                        tooltip: {
                          formatter: "{b}:{c}: ({d}%)"
                        },

                        series: [
                          {
                            name: "整体分类",
                            type: "pie",
                            radius: [0, "30%"],
                            label: {
                              position: "inner"
                            },
                            itemStyle: {
                              normal: {
                                borderColor: "#fff",
                                borderWidth: 2,
                                color: function(params) {
                                  let colorList = [
                                    "#73acff",
                                    "#fd866a",
                                    "#9e87ff"
                                  ];
                                  return colorList[params.dataIndex];
                                }
                              }
                            },

                            selectedMode: "single",
                            data: [
                              {
                                value: 875,
                                name: "特色"
                              },
                              {
                                value: 1239,
                                name: "传统"
                              },
                              {
                                value: 1239,
                                name: "品牌"
                              }
                            ]
                          },
                          {
                            name: "招标方式",
                            type: "pie",
                            radius: ["40%", "55%"],

                            itemStyle: {
                              normal: {
                                color: function(params) {
                                  let colorList = [
                                    "#73acff",
                                    "#fd866a",
                                    "#9e87ff"
                                  ];
                                  return colorList[params.dataIndex];
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                length: 30,
                                length2: 30,
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
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
                                  fontSize: 15
                                }
                              }
                            },

                            data: [
                              {
                                value: 875,
                                name: "特色",
                                type: "特色"
                              },
                              {
                                value: 1239,
                                name: "传统",
                                type: "传统"
                              },
                              {
                                value: 1239,
                                name: "品牌",
                                type: "品牌"
                              }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "table列表",
                  style: {
                    width: "100%",
                    height: "300px",
                    borderRadius: "10px",
                    background: "white",
                    marginBottom: "5px",
                    marginTop: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      type: "table",
                      height: "400px",
                      isPagination: true,
                      style: {
                        width: "100%",
                        // height: "300px",
                        background: "#fff"
                      },
                      columns: [
                        {
                          prop: "A",
                          label: "业态结构"
                        },
                        {
                          prop: "B",
                          label: "所在服务区个数"
                        },
                        {
                          prop: "C",
                          label: "经营场所个数"
                        },
                        {
                          prop: "D",
                          label: "占地面积(平方米)"
                        },
                        {
                          prop: "E",
                          label: "订单数"
                        },
                        {
                          prop: "F",
                          label: "收入(元)"
                        },
                        {
                          prop: "G",
                          label: "客单价(元)"
                        },
                        {
                          prop: "H",
                          label: "坪效(元)"
                        },
                        {
                          prop: "I",
                          label: "利润(元)"
                        }
                      ],
                      tableData: [
                        {
                          A: "一线品牌",
                          B: "8%",
                          C: "8%",
                          D: "8%",
                          E: "8%",
                          F: "110000",
                          G: "110000",
                          H: "110000",
                          I: "110000"
                        },
                        {
                          A: "本地特色",
                          B: "8%",
                          C: "8%",
                          D: "8%",
                          E: "8%",
                          F: "120000",
                          G: "110000",
                          H: "110000",
                          I: "110000"
                        },
                        {
                          A: "传统产业",
                          B: "8%",
                          C: "8%",
                          D: "8%",
                          E: "8%",
                          F: "130000",
                          G: "110000",
                          H: "110000",
                          I: "110000"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "construction_gd",
              collapseTitle: "查看更多",
              EChartsBox: []
            }
          ]
        },
        {
          id: "rateofreturn",
          name: "回款率",
          icon: require("../../assets/business/icon_6-1.png"),
          iconActive: require("../../assets/business/icon_6-2.png"),
          collapseItem: [
            {
              id: "rateofreturn_2020",
              year: 2020,
              collapseTitle: "2020回款率",
              EChartsBox: [
                {
                  title: "店面收入完成百分比",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "49.5%",
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
                          //提示框组件
                          trigger: "axis",
                          formatter: "{b}<br />{a0}: {c0}<br />{a1}: {c1}",
                          axisPointer: {
                            type: "shadow",
                            label: {
                              backgroundColor: "#6a7985"
                            }
                          },
                          textStyle: {
                            color: "#fff",
                            fontStyle: "normal",
                            fontFamily: "微软雅黑",
                            fontSize: 12
                          }
                        },
                        grid: {
                          left: "10%",
                          right: "10%",
                          bottom: "10%",
                          top: "20%",
                          //	padding:'0 0 10 0',
                          containLabel: true
                        },
                        legend: {
                          //图例组件，颜色和名字
                          right: "10%",
                          top: "30%",
                          itemGap: 16,
                          itemWidth: 18,
                          itemHeight: 10,
                          data: [
                            {
                              name: "接手"
                              //icon:'image://../wwwroot/js/url2.png', //路径
                            },
                            {
                              name: "投营"
                            },
                            {
                              name: "总数量"
                            }
                          ],
                          textStyle: {
                            color: "#a8aab0",
                            fontStyle: "normal",
                            fontFamily: "微软雅黑",
                            fontSize: 12
                          }
                        },
                        xAxis: [
                          {
                            type: "category",
                            //	boundaryGap: true,//坐标轴两边留白
                            data: [
                              "1月",
                              "2月",
                              "3月",
                              "4月",
                              "5月",
                              "6月",
                              "7月",
                              "8月",
                              "9月",
                              "10月",
                              "11月",
                              "12月"
                            ],
                            axisLabel: {
                              //坐标轴刻度标签的相关设置。
                              //		interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
                              //	margin:15,
                              textStyle: {
                                color: "#c8c9c9",
                                fontStyle: "normal",
                                fontFamily: "微软雅黑",
                                fontSize: 12
                              }
                              // rotate: 50,
                            },
                            axisTick: {
                              //坐标轴刻度相关设置。
                              show: false
                            },
                            axisLine: {
                              //坐标轴轴线相关设置
                              lineStyle: {
                                color: "#c8c9c9",
                                opacity: 1
                              }
                            },
                            splitLine: {
                              //坐标轴在 grid 区域中的分隔线。
                              show: false
                            }
                          },
                          {
                            type: "value",
                            max:
                              [
                                "1月",
                                "2月",
                                "3月",
                                "4月",
                                "5月",
                                "6月",
                                "7月",
                                "8月",
                                "9月",
                                "10月",
                                "11月",
                                "12月"
                              ].length * 100,
                            show: false
                          }
                        ],
                        yAxis: [
                          {
                            type: "value",
                            splitNumber: 5,
                            axisLabel: {
                              textStyle: {
                                color: "#c8c9c9",
                                fontStyle: "normal",
                                fontFamily: "微软雅黑",
                                fontSize: 12
                              }
                            },
                            axisLine: {
                              show: false
                            },
                            axisTick: {
                              show: false
                            },
                            splitLine: {
                              show: true,
                              lineStyle: {
                                color: ["#fff"],
                                opacity: 0.06
                              }
                            }
                          }
                        ],
                        series: [
                          {
                            name: "应收",
                            type: "bar",
                            data: [
                              62,
                              80,
                              80,
                              62,
                              60,
                              55,
                              45,
                              30,
                              15,
                              106,
                              55,
                              45,
                              30,
                              15,
                              1
                            ],
                            barWidth: 12,
                            barCategoryGap: 50,
                            itemStyle: {
                              normal: {
                                show: true,
                                color: "#3aa1ff",
                                barBorderRadius: 50,
                                borderWidth: 0
                              }
                            }
                          },
                          {
                            name: "未收",
                            type: "bar",
                            data: [
                              65,
                              55,
                              60,
                              45,
                              42,
                              15,
                              12,
                              5,
                              106,
                              55,
                              45,
                              30,
                              15,
                              1
                            ],
                            barWidth: 12,
                            barCategoryGap: 50,
                            itemStyle: {
                              normal: {
                                show: true,
                                color: "#fc5ea9",
                                barBorderRadius: 50,
                                borderWidth: 0
                              }
                            }
                          },
                          {
                            xAxisIndex: 1,
                            type: "line",
                            itemStyle: {
                              normal: {
                                color: "#b37eeb"
                              }
                            },
                            data: (function() {
                              let data = [
                                62,
                                80,
                                80,
                                62,
                                60,
                                55,
                                45,
                                30,
                                15,
                                106,
                                55,
                                45
                              ];
                              let datas = [];
                              data.forEach((element, index) => {
                                datas.push([35 + index * 100, element]);
                              });
                              return datas;
                            })()
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "店面收入完成百分比",
                  time: false,
                  select: false,
                  style: {
                    width: "49.5%",
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
                        title: [
                          {
                            text: "分类统计",
                            // top: 15,
                            // left: 20,
                            x: "center",
                            y: "center",
                            textStyle: {
                              fontSize: 16
                            }
                          }
                        ],
                        grid: {
                          top: "20%",
                          right: "40",
                          left: "60",
                          bottom: "40" //图表尺寸大小
                        },
                        legend: {
                          orient: "horizontal",
                          bottom: 10
                        },
                        tooltip: {
                          trigger: "item"
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["50%", "50%"],
                            radius: ["24%", "45%"],
                            clockwise: true,
                            avoidLabelOverlap: true,
                            hoverOffset: 15,
                            itemStyle: {
                              normal: {
                                color: function(params) {
                                  var colorList = [
                                    "#73ddff",
                                    "#73acff",
                                    "#9e87ff",
                                    "#ff3976",
                                    "#2ccc44",
                                    "#ffbc32",
                                    "#fd866a",
                                    "#1ca7ff"
                                  ];
                                  return colorList[params.dataIndex];
                                }
                              }
                            },
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
                                length: 30,
                                length2: 30,
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              {
                                name: "A供应商",
                                value: 1.45
                              },
                              {
                                name: "B供应商",
                                value: 2.93
                              },
                              {
                                name: "C供应商",
                                value: 3.15
                              },
                              {
                                name: "D供应商",
                                value: 3.15
                              },
                              {
                                name: "E供应商",
                                value: 3.15
                              },
                              {
                                name: "F供应商",
                                value: 3.15
                              },
                              {
                                name: "H供应商",
                                value: 3.15
                              },
                              {
                                name: "其他",
                                value: 3.15
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
              id: "rateofreturn_2019",
              year: 2019,
              collapseTitle: "2019回款率",
              EChartsBox: [
                {
                  title: "店面收入完成百分比",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "49.5%",
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
                          //提示框组件
                          trigger: "axis",
                          formatter: "{b}<br />{a0}: {c0}<br />{a1}: {c1}",
                          axisPointer: {
                            type: "shadow",
                            label: {
                              backgroundColor: "#6a7985"
                            }
                          },
                          textStyle: {
                            color: "#fff",
                            fontStyle: "normal",
                            fontFamily: "微软雅黑",
                            fontSize: 12
                          }
                        },
                        grid: {
                          left: "10%",
                          right: "10%",
                          bottom: "10%",
                          top: "20%",
                          //	padding:'0 0 10 0',
                          containLabel: true
                        },
                        legend: {
                          //图例组件，颜色和名字
                          right: "10%",
                          top: "30%",
                          itemGap: 16,
                          itemWidth: 18,
                          itemHeight: 10,
                          data: [
                            {
                              name: "接手"
                              //icon:'image://../wwwroot/js/url2.png', //路径
                            },
                            {
                              name: "投营"
                            },
                            {
                              name: "总数量"
                            }
                          ],
                          textStyle: {
                            color: "#a8aab0",
                            fontStyle: "normal",
                            fontFamily: "微软雅黑",
                            fontSize: 12
                          }
                        },
                        xAxis: [
                          {
                            type: "category",
                            //	boundaryGap: true,//坐标轴两边留白
                            data: [
                              "1月",
                              "2月",
                              "3月",
                              "4月",
                              "5月",
                              "6月",
                              "7月",
                              "8月",
                              "9月",
                              "10月",
                              "11月",
                              "12月"
                            ],
                            axisLabel: {
                              //坐标轴刻度标签的相关设置。
                              //		interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
                              //	margin:15,
                              textStyle: {
                                color: "#c8c9c9",
                                fontStyle: "normal",
                                fontFamily: "微软雅黑",
                                fontSize: 12
                              }
                              // rotate: 50,
                            },
                            axisTick: {
                              //坐标轴刻度相关设置。
                              show: false
                            },
                            axisLine: {
                              //坐标轴轴线相关设置
                              lineStyle: {
                                color: "#c8c9c9",
                                opacity: 1
                              }
                            },
                            splitLine: {
                              //坐标轴在 grid 区域中的分隔线。
                              show: false
                            }
                          },
                          {
                            type: "value",
                            max:
                              [
                                "1月",
                                "2月",
                                "3月",
                                "4月",
                                "5月",
                                "6月",
                                "7月",
                                "8月",
                                "9月",
                                "10月",
                                "11月",
                                "12月"
                              ].length * 100,
                            show: false
                          }
                        ],
                        yAxis: [
                          {
                            type: "value",
                            splitNumber: 5,
                            axisLabel: {
                              textStyle: {
                                color: "#c8c9c9",
                                fontStyle: "normal",
                                fontFamily: "微软雅黑",
                                fontSize: 12
                              }
                            },
                            axisLine: {
                              show: false
                            },
                            axisTick: {
                              show: false
                            },
                            splitLine: {
                              show: true,
                              lineStyle: {
                                color: ["#fff"],
                                opacity: 0.06
                              }
                            }
                          }
                        ],
                        series: [
                          {
                            name: "应收",
                            type: "bar",
                            data: [
                              62,
                              80,
                              80,
                              62,
                              60,
                              55,
                              45,
                              30,
                              15,
                              106,
                              55,
                              45,
                              30,
                              15,
                              1
                            ],
                            barWidth: 12,
                            barCategoryGap: 50,
                            itemStyle: {
                              normal: {
                                show: true,
                                color: "#3aa1ff",
                                barBorderRadius: 50,
                                borderWidth: 0
                              }
                            }
                          },
                          {
                            name: "未收",
                            type: "bar",
                            data: [
                              65,
                              55,
                              60,
                              45,
                              42,
                              15,
                              12,
                              5,
                              106,
                              55,
                              45,
                              30,
                              15,
                              1
                            ],
                            barWidth: 12,
                            barCategoryGap: 50,
                            itemStyle: {
                              normal: {
                                show: true,
                                color: "#fc5ea9",
                                barBorderRadius: 50,
                                borderWidth: 0
                              }
                            }
                          },
                          {
                            xAxisIndex: 1,
                            type: "line",
                            itemStyle: {
                              normal: {
                                color: "#b37eeb"
                              }
                            },
                            data: (function() {
                              let data = [
                                62,
                                80,
                                80,
                                62,
                                60,
                                55,
                                45,
                                30,
                                15,
                                106,
                                55,
                                45
                              ];
                              let datas = [];
                              data.forEach((element, index) => {
                                datas.push([35 + index * 100, element]);
                              });
                              return datas;
                            })()
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "店面收入完成百分比",
                  time: false,
                  select: false,
                  style: {
                    width: "49.5%",
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
                        title: [
                          {
                            text: "分类统计",
                            // top: 15,
                            // left: 20,
                            x: "center",
                            y: "center",
                            textStyle: {
                              fontSize: 16
                            }
                          }
                        ],
                        grid: {
                          top: "20%",
                          right: "40",
                          left: "60",
                          bottom: "40" //图表尺寸大小
                        },
                        legend: {
                          orient: "horizontal",
                          bottom: 10
                        },
                        tooltip: {
                          trigger: "item"
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["50%", "50%"],
                            radius: ["24%", "45%"],
                            clockwise: true,
                            avoidLabelOverlap: true,
                            hoverOffset: 15,
                            itemStyle: {
                              normal: {
                                color: function(params) {
                                  var colorList = [
                                    "#73ddff",
                                    "#73acff",
                                    "#9e87ff",
                                    "#ff3976",
                                    "#2ccc44",
                                    "#ffbc32",
                                    "#fd866a",
                                    "#1ca7ff"
                                  ];
                                  return colorList[params.dataIndex];
                                }
                              }
                            },
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
                                length: 30,
                                length2: 30,
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              {
                                name: "A供应商",
                                value: 1.45
                              },
                              {
                                name: "B供应商",
                                value: 2.93
                              },
                              {
                                name: "C供应商",
                                value: 3.15
                              },
                              {
                                name: "D供应商",
                                value: 3.15
                              },
                              {
                                name: "E供应商",
                                value: 3.15
                              },
                              {
                                name: "F供应商",
                                value: 3.15
                              },
                              {
                                name: "H供应商",
                                value: 3.15
                              },
                              {
                                name: "其他",
                                value: 3.15
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
              id: "rateofreturn_gd",
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
                    }
                    if (sIndex == 2) {
                      sItem.EChartsItem[0].option.series[0].data = [];
                      data.xYListFrom3.forEach((i, ix) => {
                        sItem.EChartsItem[0].option.series[0].data.push({
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
          // this.$nextTick(_=>{
          //     this.$refs['collapse'].searchClick(this.arrData)
          // })
        });
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
    await this.obtainData("营收", "2019");
    await this.obtainData("营收", "2020");
    await this.obtainData("利润", "2019");
    await this.obtainData("利润", "2020");
  },
  watch: {
    viewChange() {
      this.$refs["collapse"].refresh(this.collapseData);
    }
  }
};
</script>
