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
  name: "ZHJiaoTou",
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
          id: "revenue",
          name: "营收",
          icon: require("../../../assets/business/icon_1-1.png"),
          iconActive: require("../../../assets/business/icon_1-2.png"),
          collapseItem: [
            {
              id: "revenue_2020",
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
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "各个公司营收占比",
                  time: false,
                  select: false,
                  timeValue: "",
                  selectValue: "",
                  style: {
                    width: "29%",
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
                                color: function(params) {
                                  let colorList = [
                                    "#1fcaa8",
                                    "#15b3e2",
                                    "#f69f41",
                                    "#f2535f",
                                    "#2e65fd"
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
                                  fontSize: 12
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
                  title: "营收类型占比",
                  time: false,
                  select: false,
                  timeValue: "",
                  selectValue: "",
                  style: {
                    width: "29%",
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
                                color: function(params) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a"
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
                                  fontSize: 12
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
          icon: require("../../../assets/business/icon_2-1.png"),
          iconActive: require("../../../assets/business/icon_2-2.png"),
          collapseItem: [
            {
              id: "profit_2020",
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
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "各个公司利润占比",
                  time: false,
                  select: false,
                  timeValue: "",
                  selectValue: "",
                  style: {
                    width: "29%",
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
                                color: function(params) {
                                  let colorList = [
                                    "#1fcaa8",
                                    "#15b3e2",
                                    "#f69f41",
                                    "#f2535f",
                                    "#2e65fd"
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
                                  fontSize: 12
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
                  title: "利润类型占比",
                  time: false,
                  select: false,
                  timeValue: "",
                  selectValue: "",
                  style: {
                    width: "29%",
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
                                color: function(params) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a"
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
                                  fontSize: 12
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
          id: "piling",
          name: "批零差价",
          icon: require("../../../assets/business/icon_2-1.png"),
          iconActive: require("../../../assets/business/icon_2-2.png"),
          collapseItem: [
            {
              id: "piling_2020",
              collapseTitle: "2020年批零差价",
              EChartsBox: [
                {
                  title: "油品批零差价默认展示总量",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "100%",
                    height: "450px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginBottom: "10px"
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
                          text: "",
                          top: 20,
                          left: "2%"
                        },
                        tooltip: {
                          trigger: "axis"
                        },
                        legend: {
                          data: ["总量", "汽油", "柴油", "92", "95", "96", "0"]
                        },
                        grid: {
                          left: "3%",
                          right: "4%",
                          top: "20%",
                          bottom: "3%",
                          containLabel: true
                        },
                        xAxis: {
                          type: "category",
                          boundaryGap: false,
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
                          type: "value"
                        },
                        series: [
                          {
                            name: "总量",
                            type: "line",
                            stack: "总量",
                            data: [
                              120,
                              132,
                              101,
                              134,
                              90,
                              230,
                              210,
                              32,
                              12,
                              453,
                              321,
                              453
                            ]
                          },
                          {
                            name: "汽油",
                            type: "line",
                            stack: "总量",
                            data: [
                              220,
                              182,
                              191,
                              234,
                              290,
                              330,
                              310,
                              43,
                              231,
                              546,
                              456,
                              546
                            ]
                          },
                          {
                            name: "柴油",
                            type: "line",
                            stack: "总量",
                            data: [
                              150,
                              232,
                              201,
                              154,
                              190,
                              330,
                              410,
                              55,
                              33,
                              553,
                              456,
                              553
                            ]
                          },
                          {
                            name: "92",
                            type: "line",
                            stack: "总量",
                            data: [
                              320,
                              332,
                              301,
                              334,
                              390,
                              330,
                              320,
                              321,
                              432,
                              675,
                              156,
                              675
                            ]
                          },
                          {
                            name: "95",
                            type: "line",
                            stack: "总量",
                            data: [
                              820,
                              932,
                              901,
                              934,
                              1290,
                              1330,
                              1320,
                              321,
                              901,
                              765,
                              489,
                              765
                            ]
                          },
                          {
                            name: "96",
                            type: "line",
                            stack: "总量",
                            data: [
                              321,
                              435,
                              654,
                              876,
                              987,
                              524,
                              214,
                              458,
                              465,
                              123,
                              156,
                              123
                            ]
                          },
                          {
                            name: "0",
                            type: "line",
                            stack: "总量",
                            data: [
                              489,
                              43,
                              1456,
                              345,
                              1459,
                              735,
                              156,
                              156,
                              12,
                              56,
                              35,
                              56
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "销量环形对比单位（吨）",
                  time: true,
                  timeValue: "",
                  style: {
                    width: "100%",
                    height: "450px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginBottom: "10px"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "49%",
                        height: "400px"
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
                            radius: ["50%", "70%"],
                            clockwise: true,
                            hoverOffset: 20,
                            itemStyle: {
                              normal: {
                                color: function(params) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a"
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
                                  fontSize: 12
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
                                name: "汽油",
                                value: 50
                              },
                              {
                                name: "柴油",
                                value: 50
                              }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "49%",
                        height: "400px"
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
                            radius: ["50%", "70%"],
                            clockwise: true,
                            hoverOffset: 20,
                            itemStyle: {
                              normal: {
                                color: function(params) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a"
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
                                  fontSize: 12
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
                                name: "92",
                                value: 50
                              },
                              {
                                name: "95",
                                value: 50
                              },
                              {
                                name: "98",
                                value: 50
                              },
                              {
                                name: "0",
                                value: 50
                              }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "订单个数每月统计",
                  time: false,
                  select: false,
                  timeValue: "",
                  selectValue: "",
                  style: {
                    width: "59.5%",
                    height: "450px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginBottom: "10px"
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
                          text: "",
                          top: 20,
                          left: "5%"
                        },
                        color: "#3AA1FF",
                        barWidth: 20,
                        xAxis: {
                          type: "category",
                          data: [
                            "Mon",
                            "Tue",
                            "Wed",
                            "Thu",
                            "Fri",
                            "Sat",
                            "Sun"
                          ]
                        },
                        yAxis: {
                          type: "value"
                        },
                        tooltip: {
                          trigger: "item",
                          borderColor: "rgba(255,255,255,.3)",
                          backgroundColor: "rgba(13,5,30,.6)",
                          borderWidth: 1,
                          padding: 5
                        },
                        series: [
                          {
                            data: [120, 200, 150, 80, 70, 110, 130],
                            type: "bar",
                            itemStyle: {
                              color: "#76c15c"
                            }
                          },
                          {
                            data: [32, 43, 321, 231, 54, 76, 98],
                            type: "bar"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "各个高速的订单个数占比",
                  time: false,
                  select: false,
                  timeValue: "",
                  selectValue: "",
                  style: {
                    width: "39.5%",
                    height: "450px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginBottom: "10px"
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
                            radius: ["50%", "70%"],
                            clockwise: true,
                            hoverOffset: 20,
                            itemStyle: {
                              normal: {
                                color: function(params) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a"
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
                                  fontSize: 12
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
                                name: "A高速",
                                value: 50
                              },
                              {
                                name: "B高速",
                                value: 50
                              },
                              {
                                name: "C高速",
                                value: 99
                              }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "各个高速订单个数",
                  time: false,
                  select: false,
                  timeValue: "",
                  selectValue: "",
                  style: {
                    width: "49.5%",
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
                        title: {
                          text: "",
                          top: 20,
                          left: "5%"
                        },
                        color: "#3AA1FF",
                        barWidth: 20,
                        xAxis: {
                          type: "value"
                        },
                        yAxis: {
                          type: "category",
                          data: [
                            "Mon",
                            "Tue",
                            "Wed",
                            "Thu",
                            "Fri",
                            "Sat",
                            "Sun"
                          ]
                        },
                        tooltip: {
                          trigger: "item",
                          borderColor: "rgba(255,255,255,.3)",
                          backgroundColor: "rgba(13,5,30,.6)",
                          borderWidth: 1,
                          padding: 5
                        },
                        series: [
                          {
                            data: [120, 200, 150, 80, 70, 110, 130],
                            type: "bar"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "点击高速展示加油站订单个数",
                  time: false,
                  select: false,
                  timeValue: "",
                  selectValue: "",
                  style: {
                    width: "49.5%",
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
                        title: {
                          text: "",
                          top: 20,
                          left: "5%"
                        },
                        color: "#3AA1FF",
                        barWidth: 30,
                        xAxis: {
                          type: "category",
                          data: [
                            "Mon",
                            "Tue",
                            "Wed",
                            "Thu",
                            "Fri",
                            "Sat",
                            "Sun"
                          ]
                        },
                        yAxis: {
                          type: "value"
                        },
                        tooltip: {
                          trigger: "item",
                          borderColor: "rgba(255,255,255,.3)",
                          backgroundColor: "rgba(13,5,30,.6)",
                          borderWidth: 1,
                          padding: 5
                        },
                        series: [
                          {
                            data: [120, 200, 150, 80, 70, 110, 130],
                            type: "bar"
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              id: "piling_gd",
              collapseTitle: "查看更多",
              EChartsBox: []
            }
          ]
        },
        {
          id: "Collection",
          name: "回款率",
          icon: require("../../../assets/business/icon_2-1.png"),
          iconActive: require("../../../assets/business/icon_2-2.png"),
          collapseItem: [
            {
              id: "Collection_2020",
              collapseTitle: "2020年回款率",
              allQuery: true,
              EChartsBox: [
                {
                  title: "中化交投的现金流",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "40%",
                    height: "450px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginBottom: "10px"
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
                          text: "",
                          top: 20,
                          left: "2%"
                        },
                        tooltip: {
                          trigger: "axis"
                        },
                        legend: {
                          bottom: 10,
                          data: ["总量", "汽油", "柴油", "92", "95", "96", "0"]
                        },
                        grid: {
                          left: "3%",
                          right: "4%",
                          top: "15%",
                          containLabel: true
                        },
                        xAxis: {
                          type: "category",
                          boundaryGap: false,
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
                          type: "value"
                        },
                        series: [
                          {
                            name: "总量",
                            type: "line",
                            stack: "总量",
                            data: [
                              120,
                              132,
                              101,
                              134,
                              90,
                              230,
                              210,
                              32,
                              12,
                              453,
                              321,
                              453
                            ]
                          },
                          {
                            name: "汽油",
                            type: "line",
                            stack: "总量",
                            data: [
                              220,
                              182,
                              191,
                              234,
                              290,
                              330,
                              310,
                              43,
                              231,
                              546,
                              456,
                              546
                            ]
                          },
                          {
                            name: "柴油",
                            type: "line",
                            stack: "总量",
                            data: [
                              150,
                              232,
                              201,
                              154,
                              190,
                              330,
                              410,
                              55,
                              33,
                              553,
                              456,
                              553
                            ]
                          },
                          {
                            name: "92",
                            type: "line",
                            stack: "总量",
                            data: [
                              320,
                              332,
                              301,
                              334,
                              390,
                              330,
                              320,
                              321,
                              432,
                              675,
                              156,
                              675
                            ]
                          },
                          {
                            name: "95",
                            type: "line",
                            stack: "总量",
                            data: [
                              820,
                              932,
                              901,
                              934,
                              1290,
                              1330,
                              1320,
                              321,
                              901,
                              765,
                              489,
                              765
                            ]
                          },
                          {
                            name: "96",
                            type: "line",
                            stack: "总量",
                            data: [
                              321,
                              435,
                              654,
                              876,
                              987,
                              524,
                              214,
                              458,
                              465,
                              123,
                              156,
                              123
                            ]
                          },
                          {
                            name: "0",
                            type: "line",
                            stack: "总量",
                            data: [
                              489,
                              43,
                              1456,
                              345,
                              1459,
                              735,
                              156,
                              156,
                              12,
                              56,
                              35,
                              56
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "中化交投回款占比",
                  time: false,
                  select: false,
                  timeValue: "",
                  selectValue: "",
                  style: {
                    width: "29%",
                    height: "450px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginBottom: "10px"
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
                                color: function(params) {
                                  let colorList = [
                                    "#1fcaa8",
                                    "#15b3e2",
                                    "#f69f41",
                                    "#f2535f",
                                    "#2e65fd"
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
                                  fontSize: 12
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
                              [1.45, 2.93, 3.15, 4, 5].forEach(
                                (element, index) => {
                                  data.push({
                                    name: title[index],
                                    value: element
                                  });
                                }
                              );
                              return data;
                            })()
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "欠钱公司占比",
                  time: false,
                  select: false,
                  timeValue: "",
                  selectValue: "",
                  style: {
                    width: "29%",
                    height: "450px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginBottom: "10px"
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
                                color: function(params) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a"
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
                                  fontSize: 12
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
                  title: "",
                  time: false,
                  select: false,
                  timeValue: "",
                  selectValue: "",
                  style: {
                    width: "100%",
                    height: "500px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "49.5%",
                        height: "450px"
                      },
                      option: {
                        title: {
                          text: "",
                          top: 20,
                          left: "5%"
                        },
                        color: "#3AA1FF",
                        barWidth: 20,
                        xAxis: {
                          type: "value"
                        },
                        yAxis: {
                          type: "category",
                          data: [
                            "Mon",
                            "Tue",
                            "Wed",
                            "Thu",
                            "Fri",
                            "Sat",
                            "Sun"
                          ]
                        },
                        tooltip: {
                          trigger: "item",
                          borderColor: "rgba(255,255,255,.3)",
                          backgroundColor: "rgba(13,5,30,.6)",
                          borderWidth: 1,
                          padding: 5
                        },
                        series: [
                          {
                            data: [120, 200, 150, 80, 70, 110, 130],
                            type: "bar"
                          }
                        ]
                      }
                    },
                    {
                      type: "table",
                      /*ECharts的属性*/
                      style: {
                        width: "49.5%",
                        height: "500px"
                      },
                      isPagination: true,
                      height: "600px",
                      border: true,
                      columns: [
                        { prop: "A", label: "批发商" },
                        { prop: "B", label: "总体占比" },
                        { prop: "c", label: "毛利" },
                        { prop: "d", label: "汽油" },
                        { prop: "e", label: "柴油" },
                        { prop: "f", label: "总量（吨）" }
                      ],
                      tableData: [
                        {
                          A: "批发商1",
                          B: "90%",
                          c: "3%",
                          d: "9%",
                          e: "32%",
                          f: 999
                        },
                        {
                          A: "批发商1",
                          B: "54%",
                          c: "3%",
                          d: "9%",
                          e: "32%",
                          f: 22
                        },
                        {
                          A: "批发商1",
                          B: "32%",
                          c: "3%",
                          d: "9%",
                          e: "32%",
                          f: 33
                        },
                        {
                          A: "批发商1",
                          B: "12%",
                          c: "3%",
                          d: "9%",
                          e: "32%",
                          f: 44
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "Collection_gd",
              collapseTitle: "查看更多",
              EChartsBox: []
            }
          ]
        },
        {
          id: "gas",
          name: "加油站分布",
          icon: require("../../../assets/business/icon_2-1.png"),
          iconActive: require("../../../assets/business/icon_2-2.png"),
          collapseItem: [
            {
              id: "gas_2020",
              collapseTitle: "2020年加油站分布",
              EChartsBox: [
                {
                  title: "展示加油站",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "100%",
                    height: "600px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginBottom: "10px"
                  },
                  EChartsItem: [
                    {
                      type: "map",
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "600px"
                      },
                      option: {}
                    }
                  ]
                },
                {
                  title: "加油站个数",
                  time: false,
                  select: false,
                  timeValue: "",
                  selectValue: "",
                  style: {
                    width: "100%",
                    height: "450px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginBottom: "10px"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "59.5%",
                        height: "400px"
                      },
                      option: {
                        title: {
                          text: "",
                          top: 20,
                          left: "5%"
                        },
                        color: "#3AA1FF",
                        barWidth: 20,
                        xAxis: {
                          type: "category",
                          data: [
                            "Mon",
                            "Tue",
                            "Wed",
                            "Thu",
                            "Fri",
                            "Sat",
                            "Sun"
                          ]
                        },
                        yAxis: {
                          type: "value"
                        },
                        tooltip: {
                          trigger: "item",
                          borderColor: "rgba(255,255,255,.3)",
                          backgroundColor: "rgba(13,5,30,.6)",
                          borderWidth: 1,
                          padding: 5
                        },
                        series: [
                          {
                            data: [120, 200, 150, 80, 70, 110, 130],
                            type: "bar"
                          }
                        ]
                      }
                    },
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "39.5%",
                        height: "400px"
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
                                color: function(params) {
                                  let colorList = [
                                    "#1fcaa8",
                                    "#15b3e2",
                                    "#f69f41",
                                    "#f2535f",
                                    "#2e65fd"
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
                                  fontSize: 12
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
                              [1.45, 2.93, 3.15, 4, 5].forEach(
                                (element, index) => {
                                  data.push({
                                    name: title[index],
                                    value: element
                                  });
                                }
                              );
                              return data;
                            })()
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "加油站",
                  time: false,
                  select: false,
                  timeValue: "",
                  selectValue: "",
                  style: {
                    width: "100%",
                    height: "450px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      type: "table",
                      height: "550px",
                      isPagination: true,
                      columns: [
                        { prop: "a", label: "加油站名称" },
                        { prop: "b", label: "E92" },
                        { prop: "c", label: "E95" },
                        { prop: "d", label: "92" },
                        { prop: "e", label: "95" },
                        { prop: "f", label: "98" },
                        { prop: "g", label: "0" }
                      ],
                      tableData: [
                        {
                          a: "xx加油站",
                          b: "22",
                          c: "32",
                          d: "12",
                          e: "32",
                          f: "43",
                          g: "12"
                        },
                        {
                          a: "xx加油站",
                          b: "22",
                          c: "32",
                          d: "12",
                          e: "32",
                          f: "43",
                          g: "12"
                        },
                        {
                          a: "xx加油站",
                          b: "22",
                          c: "32",
                          d: "12",
                          e: "32",
                          f: "43",
                          g: "12"
                        },
                        {
                          a: "xx加油站",
                          b: "22",
                          c: "32",
                          d: "12",
                          e: "32",
                          f: "43",
                          g: "12"
                        }
                      ],
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "450px"
                      },
                      option: {}
                    }
                  ]
                }
              ]
            },
            {
              id: "map_gd",
              collapseTitle: "查看更多",
              EChartsBox: []
            }
          ]
        }
      ]
    };
  },
  mounted() {
    this.$refs["collapse"].initECharts(this.collapseData);
  },
  methods: {
    selectionChange() {
      this.$router.push("/energy/JYZXiangQing");
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
