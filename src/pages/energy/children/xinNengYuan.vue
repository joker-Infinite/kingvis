<template>
  <div style="width: 100%;height: 100%;">
    <my-collapse-base
      ref="collapse"
      :collapseData="collapseData"
      nav-bar-show
      @selectionChange="selectionChange"
    ></my-collapse-base>
  </div>
</template>

<script>
import MyCollapseBase from "../../../components/common/myCollapseBase";

export default {
  name: "xinNengYuan",
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
          id: "ag",
          name: "油站分布",
          icon: require("../../../assets/serviceArea/nyls/yzfb.png"),
          iconActive: require("../../../assets/serviceArea/nyls/yzfb1.png"),
          collapseItem: [
            {
              id: "cc_2020",
              text:'新能源公司',
              year: 2020,
              collapseTitle: "油站分布",
              allQuery: false,
              allQueryData: {
                time: false
              },
              EChartsBox: [
                {
                  title: "油站分布",
                  style: {
                    width: "100%",
                    height: "500px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginBottom: "10px"
                  },
                  EChartsItem: [
                    {
                      type: "map",
                      style: {
                        width: "100%",
                        height: "500px"
                      }
                    }
                  ]
                },
                {
                  title: "历史油站个数增长",
                  time: false,
                  style: {
                    width: "59.5%",
                    height: "350px",
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
                        height: "300px"
                      },
                      unit: "个",
                      option: {
                        xAxis: {
                          type: "category",
                          name: "年",
                          nameTextStyle: {
                            color: "#000"
                          },
                          data: ["2015", "2016", "2017", "2018", "2019", "2020"]
                        },
                        yAxis: {
                          type: "value",
                          name: "月",
                          nameTextStyle: {
                            color: "#000"
                          }
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}: {c}个"
                        },
                        series: [
                          {
                            data: [12, 12, 21, 34, 40, 50],
                            type: "bar",
                            itemStyle: {
                              color: "#38d"
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "子公司个数占比",
                  time: false,
                  select: false,
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
                          orient: "vertical",
                          right: "5%",
                          top: "center",
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
                          formatter: "{b}: {c}个 ({d}%)"
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["40%", "50%"],
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
            }
          ]
        },
        // {
        //   id: "gasRetails",
        //   name: "订单列表",
        //   icon: require("../../../assets/serviceArea/nyls/dingdanliebiao.png"),
        //   iconActive: require("../../../assets/serviceArea/nyls/dingdanliebiao1.png"),
        //   collapseItem: [
        //     {
        //       id: "gasRetail_table",
        //       year: 2020,
        //       collapseTitle: "订单列表",
        //       EChartsBox: [
        //         {
        //           title: "订单列表",
        //           select: true,
        //           input: true,
        //           time: true,
        //           selectOption: [["新能源", "石化", "国储", "荆港嘉瑞"]],
        //           style: {
        //             width: "100%",
        //             height: "500px",
        //             background: "white",
        //             borderRadius: "10px",
        //             overflow: "hidden",
        //             marginBottom: "10px"
        //           },
        //           EChartsItem: [
        //             {
        //               type: "table",
        //               isPagination: true,
        //               style: {
        //                 width: "100%",
        //                 height: "600px"
        //               },
        //               height: "600px",
        //               columns: [
        //                 {
        //                   prop: "加油站名称",
        //                   width: "300px",
        //                   label: "加油站名称"
        //                 },
        //                 { prop: "负责人", label: "负责人" },
        //                 { prop: "负责人电话", label: "负责人电话" },
        //                 { prop: "加油岛", width: "100px", label: "加油岛(个)" },
        //                 {
        //                   prop: "加油枪",
        //                   label: "加油枪(个)",
        //                   children: [
        //                     { prop: "92", label: "92#" },
        //                     { prop: "95", label: "95#" },
        //                     { prop: "98", label: "98#" },
        //                     { prop: "0", label: "0#" }
        //                   ]
        //                 },
        //                 {
        //                   prop: "订单",
        //                   label: "订单(个)",
        //                   children: [
        //                     { prop: "油品订单", label: "油品订单(个)" },
        //                     { prop: "非油品订单", label: "非油品订单(个)" }
        //                   ]
        //                 }
        //               ],
        //               tableData: [
        //                 {
        //                   加油站名称: "汉十高速双沟停车区加油北站",
        //                   负责人: "张xx",
        //                   负责人电话: "176xxxxxxxx",
        //                   加油岛: "5",
        //                   "92": "1",
        //                   "95": "2",
        //                   "98": "1",
        //                   "0": "1",
        //                   油品订单: "10",
        //                   非油品订单: "5"
        //                 },
        //                 {
        //                   加油站名称: "汉十高速双沟停车区加油北站",
        //                   负责人: "李xx",
        //                   负责人电话: "174xxxxxxxx",
        //                   加油岛: "7",
        //                   "92": "3",
        //                   "95": "2",
        //                   "98": "1",
        //                   "0": "1",
        //                   油品订单: "9",
        //                   非油品订单: "4"
        //                 },
        //                 {
        //                   加油站名称: "汉十高速双沟停车区加油北站",
        //                   负责人: "王xx",
        //                   负责人电话: "172xxxxxxxx",
        //                   加油岛: "8",
        //                   "92": "3",
        //                   "95": "1",
        //                   "98": "1",
        //                   "0": "3",
        //                   油品订单: "9",
        //                   非油品订单: "4"
        //                 },
        //                 {
        //                   加油站名称: "汉十高速双沟停车区加油北站",
        //                   负责人: "刘xx",
        //                   负责人电话: "177xxxxxxxx",
        //                   加油岛: "6",
        //                   "92": "2",
        //                   "95": "1",
        //                   "98": "1",
        //                   "0": "4",
        //                   油品订单: "4",
        //                   非油品订单: "10"
        //                 },
        //                 {
        //                   加油站名称: "汉十高速双沟停车区加油北站",
        //                   负责人: "xx",
        //                   负责人电话: "177xxxxxxxx",
        //                   加油岛: "10",
        //                   "92": "3",
        //                   "95": "2",
        //                   "98": "2",
        //                   "0": "3",
        //                   油品订单: "16",
        //                   非油品订单: "10"
        //                 }
        //               ]
        //             }
        //           ]
        //         }
        //       ]
        //     }
        //   ]
        // },
        {
          id: "a",
          name: "营收",
          icon: require("../../../assets/serviceArea/jcxq/yingshou.png"),
          iconActive: require("../../../assets/serviceArea/jcxq/yingshou1.png"),
          collapseItem: [
            {
              id: "a_2020ss",
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
              id: "a_2019ssd",
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
        },
        {
          id: "profit",
          name: "利润",
          icon: require("../../../assets/serviceArea/jcxq/lirun.png"),
          iconActive: require("../../../assets/serviceArea/jcxq/lirun1.png"),
          collapseItem: [
            {
              id: "profit_2020sd",
              year: 2020,
              collapseTitle: "2020年利润",
              allQuery: false,
              allQueryData: {
                input: false,
                select: false,
                time: false
              },
              EChartsBox: [
                {
                  title: "纯利润",
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
                        height: "280px"
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
                              "<br />利润:" +
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
                            name: "月",
                            nameTextStyle: {
                              color: "#000"
                            },
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
                            name: "万元",
                            nameTextStyle: {
                              color: "#000"
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
                  title: "子公司/业态占比",
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
                              { value: 335, name: "新能源" },
                              { value: 310, name: "石化" },
                              { value: 234, name: "国储" },
                              { value: 135, name: "高路油站" },
                              { value: 1548, name: "荆港嘉瑞" }
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
                          data: [
                            "过票",
                            "油品批发",
                            "分销",
                            "油品零售",
                            "非油品零售"
                          ]
                        },
                        // color: [],

                        series: [
                          {
                            type: "pie",
                            avoidLabelOverlap: true,
                            center: ["48%", "50%"],
                            radius: ["38%", "50%"],
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
                              "#ff78e7",
                              "#02cab3",
                              "#4885ff",
                              "#fec67c",
                              "#cb9bff",
                              "#54c3fc"
                            ],
                            data: [
                              { value: 335, name: "过票" },
                              { value: 310, name: "油品批发" },
                              { value: 234, name: "分销" },
                              { value: 135, name: "油品零售" },
                              { value: 1548, name: "非油品零售" }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "毛利润",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "39.5%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginTop:'10px'
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "280px"
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
                              "<br />利润:" +
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
                              35867750.94,
                              65867750.94,
                              55867750.94,
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
                  title: "子公司/业态占比",
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
                    overflow: "hidden",
                    marginTop:'10px'
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
                              { value: 335, name: "新能源" },
                              { value: 310, name: "石化" },
                              { value: 234, name: "国储" },
                              { value: 135, name: "高路油站" },
                              { value: 1548, name: "荆港嘉瑞" }
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
                          data: [
                            "过票",
                            "油品批发",
                            "分销",
                            "油品零售",
                            "非油品零售"
                          ]
                        },
                        series: [
                          {
                            type: "pie",
                            avoidLabelOverlap: true,
                            center: ["48%", "50%"],
                            radius: ["38%", "50%"],
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
                              "#ff78e7",
                              "#02cab3",
                              "#4885ff",
                              "#fec67c",
                              "#cb9bff",
                              "#54c3fc"
                            ],
                            data: [
                              { value: 335, name: "过票" },
                              { value: 310, name: "油品批发" },
                              { value: 234, name: "分销" },
                              { value: 135, name: "油品零售" },
                              { value: 1548, name: "非油品零售" }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                
              ]
            },
            {
              id: "profit_2019fd",
              year: 2019,
              collapseTitle: "2019年利润",
              allQuery: false,
              allQueryData: {
                input: false,
                select: false,
                time: false
              },
              EChartsBox: [
                {
                  title: "纯利润",
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
                        height: "280px"
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
                              "<br />利润:" +
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
                            name: "月",
                            nameTextStyle: {
                              color: "#000"
                            },
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
                            name: "万元",
                            nameTextStyle: {
                              color: "#000"
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
                  title: "子公司/业态占比",
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
                              { value: 335, name: "新能源" },
                              { value: 1310, name: "石化" },
                              { value: 234, name: "国储" },
                              { value: 135, name: "高路油站" },
                              { value: 1548, name: "荆港嘉瑞" }
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
                          data: [
                            "过票",
                            "油品批发",
                            "分销",
                            "油品零售",
                            "非油品零售"
                          ]
                        },
                        series: [
                          {
                            type: "pie",
                            avoidLabelOverlap: true,
                            center: ["48%", "50%"],
                            radius: ["38%", "50%"],
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
                              "#ff78e7",
                              "#02cab3",
                              "#4885ff",
                              "#fec67c",
                              "#cb9bff",
                              "#54c3fc"
                            ],
                            data: [
                              { value: 335, name: "过票" },
                              { value: 2310, name: "油品批发" },
                              { value: 234, name: "分销" },
                              { value: 135, name: "油品零售" },
                              { value: 1548, name: "非油品零售" }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "毛利润",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "39.5%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginTop:'10px'
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "280px"
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
                              "<br />利润:" +
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
                              31227980.97,
                              26379186.39,
                              61512554.34,
                              63536277.13,
                              75344513.25,
                              51883601.06,
                              69285722.58,
                              53682947.29,
                              25867750.94,
                              45867750.94,
                              65867750.94,
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
                  title: "子公司/业态占比",
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
                    overflow: "hidden",
                    marginTop:'10px'
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
                              { value: 335, name: "新能源" },
                              { value: 310, name: "石化" },
                              { value: 3234, name: "国储" },
                              { value: 135, name: "高路油站" },
                              { value: 1548, name: "荆港嘉瑞" }
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
                          data: [
                            "过票",
                            "油品批发",
                            "分销",
                            "油品零售",
                            "非油品零售"
                          ]
                        },
                        series: [
                          {
                            type: "pie",
                            avoidLabelOverlap: true,
                            center: ["48%", "50%"],
                            radius: ["38%", "50%"],
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
                              "#ff78e7",
                              "#02cab3",
                              "#4885ff",
                              "#fec67c",
                              "#cb9bff",
                              "#54c3fc"
                            ],
                            data: [
                              { value: 335, name: "过票" },
                              { value: 1310, name: "油品批发" },
                              { value: 234, name: "分销" },
                              { value: 1135, name: "油品零售" },
                              { value: 548, name: "非油品零售" }
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
          id: "budgefdst",
          name: "费用",
          icon: require("../../../assets/serviceArea/nn/fy.png"),
          iconActive: require("../../../assets/serviceArea/nn/fy1.png"),
          collapseItem: [
            {
              id: "budget_2020",
              year: 2020,
              collapseTitle: "2020年预算控制",
              EChartsBox: [
                {
                  title: "月预算控制",
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
                              "<br />预算:" +
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
                              41227980.97,
                              66379186.39,
                              21512554.34,
                              23536277.13,
                              25344513.25,
                              21883601.06,
                              29285722.58,
                              33682947.29,
                              25867750.94,
                              95867750.94,
                              55867750.94,
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
                  title: "子公司占比/业态占比",
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
                              { value: 335, name: "新能源" },
                              { value: 310, name: "石化" },
                              { value: 234, name: "国储" },
                              { value: 135, name: "高路油站" },
                              { value: 1548, name: "荆港嘉瑞" }
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
                          trigger: "item"
                        },

                        legend: {
                          orient: "horizontal",
                          bottom: 10,
                          data: [
                            "过票",
                            "油品批发",
                            "分销",
                            "油品零售",
                            "非油品零售"
                          ]
                        },
                        series: [
                          {
                            type: "pie",
                            avoidLabelOverlap: true,
                            center: ["48%", "50%"],
                            radius: ["38%", "50%"],
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
                              "#ff78e7",
                              "#02cab3",
                              "#4885ff",
                              "#fec67c",
                              "#cb9bff",
                              "#54c3fc"
                            ],
                            data: [
                              { value: 335, name: "过票" },
                              { value: 310, name: "油品批发" },
                              { value: 234, name: "分销" },
                              { value: 135, name: "油品零售" },
                              { value: 1548, name: "非油品零售" }
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
              collapseTitle: "2019年预算控制",
              EChartsBox: [
                {
                  title: "月预算控制",
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
                              "<br />预算:" +
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
                              41227980.97,
                              26379186.39,
                              51512554.34,
                              63536277.13,
                              85344513.25,
                              11883601.06,
                              59285722.58,
                              83682947.29,
                              65867750.94,
                              45867750.94,
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
                  title: "子公司占比/业态占比",
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
                              { value: 655, name: "新能源" },
                              { value: 510, name: "石化" },
                              { value: 334, name: "国储" },
                              { value: 435, name: "高路油站" },
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
                          trigger: "item"
                        },

                        legend: {
                          orient: "horizontal",
                          bottom: 10,
                          data: [
                            "过票",
                            "油品批发",
                            "分销",
                            "油品零售",
                            "非油品零售"
                          ]
                        },
                        series: [
                          {
                            type: "pie",
                            avoidLabelOverlap: true,
                            center: ["48%", "50%"],
                            radius: ["38%", "50%"],
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
                              "#ff78e7",
                              "#02cab3",
                              "#4885ff",
                              "#fec67c",
                              "#cb9bff",
                              "#54c3fc"
                            ],
                            data: [
                              { value: 635, name: "过票" },
                              { value: 910, name: "油品批发" },
                              { value: 434, name: "分销" },
                              { value: 635, name: "油品零售" },
                              { value: 1548, name: "非油品零售" }
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
              id: "budget_",
              year: 2019,
              collapseTitle: "预算控制",
              EChartsBox: [
                {
                  title: "成本费用利用率",
                  style: {
                    width: "49.5%",
                    height: "400px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginBottom: "10px"
                  },
                  EChartsItem: [
                    {
                      unit: "%",
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "380px"
                      },

                      option: {
                        xAxis: {
                          type: "category",
                          name: "年",
                          nameTextStyle: {
                            color: "#000"
                          },
                          data: ["2015", "2016", "2017", "2018", "2019", "2020"]
                        },
                        tooltip: {
                          trigger: "axis",
                          formatter: "{b}年: {c}% "
                        },
                        yAxis: {
                          type: "value",
                          name: "%"
                        },
                        series: [
                          {
                            data: [3.1, 2.2, 2.6, 8.5, 7.4, 2.9],
                            type: "line",
                            itemStyle: {
                              color: "#38d"
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "分项成本变化趋势",
                  showSearch: "notShow",
                  selectOption: [
                    ["零售业务", "批发业务", "经营租赁", "开办费"]
                  ],
                  select: true,
                  query: {
                    inputValue: "",
                    selectValue: "",
                    timeValue: ""
                  },
                  style: {
                    width: "49.5%",
                    height: "400px",
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
                        height: "380px"
                      },
                      unit: "万元",
                      option: {
                        xAxis: {
                          type: "category",
                          name: "年",
                          nameTextStyle: {
                            color: "#000"
                          },
                          data: ["2015", "2016", "2017", "2018", "2019", "2020"]
                        },
                        tooltip: {
                          trigger: "axis",
                          formatter: "{b}: {c}万元"
                        },
                        yAxis: {
                          type: "value",
                          name: "万元"
                        },
                        series: [
                          {
                            data: [120, 200, 1500, 800, 700, 110],
                            type: "bar",
                            itemStyle: {
                              color: "#38d"
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title:
                    '<span style="float: left">预算项目列表</span><span style="float: right ;text-shadow:none;height: 100%;text-align: right;padding-right: 20px;font-weight:100;">2020年 执行金额:3478万元 预算金额:5432万元 总执行度:64%</span>',
                  input: true,
                  select: true,
                  query: {
                    inputValue: "",
                    selectValue: "",
                    timeValue: ""
                  },
                  selectOption: [[2015, 2016, 2017, 2018]],
                  style: {
                    width: "100%",
                    height: "650px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginBottom: "10px"
                  },
                  EChartsItem: [
                    {
                      style: {
                        width: "100%",
                        height: "650px"
                      },
                      isPagination: true,
                      height: "660px",
                      type: "table",
                      columns: [
                        { prop: "a", label: "预算项目" },
                        { prop: "b", label: "预算金额（元）" },
                        { prop: "c", label: "执行金额（元）" },
                        { prop: "d", label: "执行进度" },
                        { prop: "e", label: "时间偏离度（执行进度-时间进度）" },
                        { prop: "f", label: "年份" }
                      ],
                      tableData: [
                        {
                          a: "零售业务",
                          b: "2041.55",
                          c: "3894.80",
                          d: "74.88%",
                          e: "22.46%",
                          f: "2020"
                        },
                        {
                          a: "批发业务",
                          b: "3015.05",
                          c: "4202.41",
                          d: "102.49%",
                          e: "30.75%",
                          f: "2020"
                        },
                        {
                          a: "经营租赁",
                          b: "557.37",
                          c: "927.39",
                          d: "85.86%",
                          e: "25.76%",
                          f: "2020"
                        },
                        {
                          a: "开办费",
                          b: "313.77",
                          c: "552.44",
                          d: "81.14%",
                          e: "24.34%",
                          f: "2020"
                        },
                        {
                          a: "物业费收入",
                          b: "548.56",
                          c: "1091.13",
                          d: "71.82%",
                          e: "21.55%",
                          f: "2020"
                        },
                        {
                          a: "自动售货机",
                          b: "193.30",
                          c: "332.17",
                          d: "83.11%",
                          e: "24.93%",
                          f: "2020"
                        },
                        {
                          a: "公益补助",
                          b: "260.93",
                          c: "430.15",
                          d: "92.46%",
                          e: "27.74%",
                          f: "2020"
                        }
                      ]
                    }
                  ]
                },
                
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
          id: "gasRetailssfasd",
          name: "零售",
          icon: require("../../../assets/serviceArea/nn/ls.png"),
          iconActive: require("../../../assets/serviceArea/nn/ls1.png"),
          collapseItem: [
            {
              id: "gasRetail_table",
              year: 2020,
              collapseTitle: "加油站",
              EChartsBox: [
                {
                  title: "加油站列表",
                  select: false,
                  input: true,
                  time: true,
                  query: {
                    inputValue: "",
                    selectValue: "",
                    timeValue: ""
                  },
                  selectOption: [["新能源", "石化", "国储", "荆港嘉瑞"]],
                  style: {
                    width: "100%",
                    height: "500px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginBottom: "10px"
                  },
                  EChartsItem: [
                    {
                      type: "table",
                      isPagination: true,
                      style: {
                        width: "100%",
                        height: "600px"
                      },
                      height: "600px",
                      columns: [
                        {
                          prop: "加油站名称",
                          width: "300px",
                          label: "加油站名称"
                        },
                        { prop: "负责人", label: "负责人" },
                        { prop: "负责人电话", label: "负责人电话" },
                        { prop: "加油岛", width: "100px", label: "加油岛(个)" },
                        {
                          prop: "加油枪",
                          label: "加油枪(个)",
                          children: [
                            { prop: "92", label: "92#" },
                            { prop: "95", label: "95#" },
                            { prop: "98", label: "98#" },
                            { prop: "0", label: "0#" }
                          ]
                        },
                        {
                          prop: "订单",
                          label: "订单(个)",
                          children: [
                            { prop: "油品订单", label: "油品订单(个)" },
                            { prop: "非油品订单", label: "非油品订单(个)" }
                          ]
                        }
                      ],
                      tableData: [
                        {
                          加油站名称: "汉十高速双沟停车区加油北站",
                          负责人: "张xx",
                          负责人电话: "176xxxxxxxx",
                          加油岛: "5",
                          "92": "1",
                          "95": "2",
                          "98": "1",
                          "0": "1",
                          油品订单: "10",
                          非油品订单: "5"
                        },
                        {
                          加油站名称: "汉十高速双沟停车区加油北站",
                          负责人: "李xx",
                          负责人电话: "174xxxxxxxx",
                          加油岛: "7",
                          "92": "3",
                          "95": "2",
                          "98": "1",
                          "0": "1",
                          油品订单: "9",
                          非油品订单: "4"
                        },
                        {
                          加油站名称: "汉十高速双沟停车区加油北站",
                          负责人: "王xx",
                          负责人电话: "172xxxxxxxx",
                          加油岛: "8",
                          "92": "3",
                          "95": "1",
                          "98": "1",
                          "0": "3",
                          油品订单: "9",
                          非油品订单: "4"
                        },
                        {
                          加油站名称: "汉十高速双沟停车区加油北站",
                          负责人: "刘xx",
                          负责人电话: "177xxxxxxxx",
                          加油岛: "6",
                          "92": "2",
                          "95": "1",
                          "98": "1",
                          "0": "4",
                          油品订单: "4",
                          非油品订单: "10"
                        },
                        {
                          加油站名称: "汉十高速双沟停车区加油北站",
                          负责人: "xx",
                          负责人电话: "177xxxxxxxx",
                          加油岛: "10",
                          "92": "3",
                          "95": "2",
                          "98": "2",
                          "0": "3",
                          油品订单: "16",
                          非油品订单: "10"
                        }
                      ]
                    }
                  ]
                },

                {
                  title: "2020年营收月营收",
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
                              1227980.97,
                              6379186.39,
                              1512554.34,
                              3536277.13,
                              5344513.25,
                              1883601.06,
                              9285722.58,
                              3682947.29,
                              4867750.94,
                              2867750.94,
                              6867750.94,
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
                  title: "2020年营收子公司/非油与油占比",
                  istime: true,
                  select: false,
                  query: {
                    inputValue: "",
                    selectValue: "",
                    timeValue: ""
                  },
                  style: {
                    width: "59.5%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginBottom: "10px"
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
                              { value: 335, name: "新能源" },
                              { value: 1310, name: "石化" },
                              { value: 234, name: "国储" },
                              { value: 135, name: "高路油站" },
                              { value: 1548, name: "荆港嘉瑞" }
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
                          formatter: "{b}:{c}元"
                        },

                        legend: {
                          orient: "horizontal",
                          bottom: 10,
                          data: ["油品零售", "非油品零售"]
                        },
                        series: [
                          {
                            type: "pie",
                            avoidLabelOverlap: true,
                            center: ["48%", "50%"],
                            radius: ["38%", "50%"],
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
                            data: [
                              { value: 350, name: "油品零售" },
                              { value: 35, name: "非油品零售" }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "2020年营收汽油柴油销售量占比",
                  time: false,
                  select: false,
                  style: {
                    width: "33%",
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
                          trigger: "item",
                          formatter: "{b}:{c}吨"
                        },

                        legend: {
                          orient: "horizontal",
                          bottom: 10,
                          data: ["汽油", "柴油"]
                        },
                        series: [
                          {
                            type: "pie",
                            avoidLabelOverlap: true,
                            center: ["48%", "50%"],
                            radius: ["38%", "50%"],
                            clockwise: true,
                            hoverOffset: 20,
                            itemStyle: {
                              normal: {
                                color: function(v) {
                                  let colorList = [
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
                            data: [
                              { value: 335, name: "汽油" },
                              { value: 310, name: "柴油" }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "2020年营收汽油柴油订单占比",
                  time: false,
                  select: false,
                  style: {
                    width: "33%",
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
                          trigger: "item",
                          formatter: "{b}:{c}个"
                        },

                        legend: {
                          orient: "horizontal",
                          bottom: 10,
                          data: ["汽油", "柴油"]
                        },
                        series: [
                          {
                            type: "pie",
                            avoidLabelOverlap: true,
                            center: ["48%", "50%"],
                            radius: ["38%", "50%"],
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
                            data: [
                              { value: 335, name: "汽油" },
                              { value: 310, name: "柴油" }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "2020年营收92#|95#|98#订单占比",
                  time: false,
                  select: false,
                  style: {
                    width: "33%",
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
                          trigger: "item",
                          formatter: "{b}:{c}个"
                        },

                        legend: {
                          orient: "horizontal",
                          bottom: 10,
                          data: ["92#", "95#", "98#"]
                        },
                        series: [
                          {
                            type: "pie",
                            avoidLabelOverlap: true,
                            center: ["48%", "50%"],
                            radius: ["38%", "50%"],
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
                            data: [
                              { value: 335, name: "92#" },
                              { value: 310, name: "95#" },
                              { value: 310, name: "98#" }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },

                {
                  title: "2019年营收月营收",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "40%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginTop:'10px'
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
                              41227980.97,
                              66379186.39,
                              21512554.34,
                              23536277.13,
                              25344513.25,
                              21883601.06,
                              29285722.58,
                              33682947.29,
                              25867750.94,
                              55867750.94,
                              35867750.94,
                              75867750.94
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
                  title: "2019年营收子公司/非油与油占比",
                  istime: true,
                  select: false,
                  query: {
                    inputValue: "",
                    selectValue: "",
                    timeValue: ""
                  },
                  style: {
                    width: "59.5%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginBottom: "10px",
                    marginTop:'10px'
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
                              { value: 335, name: "新能源" },
                              { value: 310, name: "石化" },
                              { value: 234, name: "国储" },
                              { value: 135, name: "高路油站" },
                              { value: 1548, name: "荆港嘉瑞" }
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
                          formatter: "{b}:{c}元"
                        },

                        legend: {
                          orient: "horizontal",
                          bottom: 10,
                          data: ["油品零售", "非油品零售"]
                        },
                        series: [
                          {
                            type: "pie",
                            avoidLabelOverlap: true,
                            center: ["48%", "50%"],
                            radius: ["38%", "50%"],
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
                            data: [
                              { value: 335, name: "油品零售" },
                              { value: 30, name: "非油品零售" }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "2019年营收汽油柴油销售量占比",
                  time: false,
                  select: false,
                  style: {
                    width: "33%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
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
                          trigger: "item",
                          formatter: "{b}:{c}吨"
                        },

                        legend: {
                          orient: "horizontal",
                          bottom: 10,
                          data: ["汽油", "柴油"]
                        },
                        series: [
                          {
                            type: "pie",
                            avoidLabelOverlap: true,
                            center: ["48%", "50%"],
                            radius: ["38%", "50%"],
                            clockwise: true,
                            hoverOffset: 20,
                            itemStyle: {
                              normal: {
                                color: function(v) {
                                  let colorList = [
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
                            data: [
                              { value: 435, name: "汽油" },
                              { value: 310, name: "柴油" }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "2019年营收月汽油柴油订单占比",
                  time: false,
                  select: false,
                  style: {
                    width: "33%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
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
                          trigger: "item",
                          formatter: "{b}:{c}个"
                        },

                        legend: {
                          orient: "horizontal",
                          bottom: 10,
                          data: ["汽油", "柴油"]
                        },
                        series: [
                          {
                            type: "pie",
                            avoidLabelOverlap: true,
                            center: ["48%", "50%"],
                            radius: ["38%", "50%"],
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
                            data: [
                              { value: 335, name: "汽油" },
                              { value: 510, name: "柴油" }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "2019年营收月92#|95#|98#订单占比",
                  time: false,
                  select: false,
                  style: {
                    width: "33%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
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
                          trigger: "item",
                          formatter: "{b}:{c}个"
                        },

                        legend: {
                          orient: "horizontal",
                          bottom: 10,
                          data: ["92#", "95#", "98#"]
                        },
                        series: [
                          {
                            type: "pie",
                            avoidLabelOverlap: true,
                            center: ["48%", "50%"],
                            radius: ["38%", "50%"],
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
                            data: [
                              { value: 335, name: "92#" },
                              { value: 610, name: "95#" },
                              { value: 310, name: "98#" }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },

                {
                  title: "2020年非油品月营收",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "39.5%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginTop:'10px'
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
                              1227980.97,
                              6379186.39,
                              1512554.34,
                              3536277.13,
                              5344513.25,
                              1883601.06,
                              9285722.58,
                              3682947.29,
                              5867750.94,
                              2867750.94,
                              3867750.94,
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
                  title: "2020年非油品子公司/业态占比",
                  time: false,
                  select: false,
                  istime: true,
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
                    overflow: "hidden",
                    marginBottom: "10px",
                    marginTop:'10px'
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
                              { value: 335, name: "新能源" },
                              { value: 1310, name: "石化" },
                              { value: 2234, name: "国储" },
                              { value: 135, name: "高路油站" },
                              { value: 1548, name: "荆港嘉瑞" }
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
                          data: ["小吃", "酒水饮料", "香烟", "车用品", "其他"]
                        },
                        series: [
                          {
                            type: "pie",
                            avoidLabelOverlap: true,
                            center: ["48%", "50%"],
                            radius: ["38%", "50%"],
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
                              "#ff78e7",
                              "#02cab3",
                              "#4885ff",
                              "#fec67c",
                              "#cb9bff",
                              "#54c3fc"
                            ],
                            data: [
                              { value: 335, name: "小吃" },
                              { value: 310, name: "酒水饮料" },
                              { value: 1310, name: "香烟" },
                              { value: 310, name: "车用品" },
                              { value: 310, name: "其他" }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },

                {
                  title: "2019年非油品月营收",
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
                              1227980.97,
                              6379186.39,
                              1512554.34,
                              3536277.13,
                              5344513.25,
                              1883601.06,
                              9285722.58,
                              3682947.29,
                              5867750.94,
                              4867750.94,
                              6867750.94,
                              7867750.94
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
                  title: "2019年非油品子公司/业态占比",
                  time: false,
                  select: false,
                  istime: true,
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
                    overflow: "hidden",
                    marginBottom: "10px"
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
                              { value: 1335, name: "新能源" },
                              { value: 310, name: "石化" },
                              { value: 234, name: "国储" },
                              { value: 135, name: "高路油站" },
                              { value: 1548, name: "荆港嘉瑞" }
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
                          data: ["小吃", "酒水饮料", "香烟", "车用品", "其他"]
                        },
                        series: [
                          {
                            type: "pie",
                            avoidLabelOverlap: true,
                            center: ["48%", "50%"],
                            radius: ["38%", "50%"],
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
                              "#ff78e7",
                              "#02cab3",
                              "#4885ff",
                              "#fec67c",
                              "#cb9bff",
                              "#54c3fc"
                            ],
                            data: [
                              { value: 335, name: "小吃" },
                              { value: 310, name: "酒水饮料" },
                              { value: 310, name: "香烟" },
                              { value: 310, name: "车用品" },
                              { value: 310, name: "其他" }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },

                {
                  title: "2020年率月油站转换率",
                  time: false,
                  style: {
                    width: "49.5%",
                    height: "350px",
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
                        height: "300px"
                      },
                      unit: "%",
                      option: {
                        xAxis: {
                          type: "category",
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
                          ]
                        },
                        tooltip: {
                          trigger: "axis",
                          formatter: "{b} : {c}%"
                        },
                        yAxis: {
                          type: "value"
                        },
                        series: [
                          {
                            data: [
                              1.56,
                              3.45,
                              2.95,
                              3.62,
                              4.42,
                              5.62,
                              2.95,
                              2.64,
                              5.33,
                              4.14,
                              2.53,
                              4.62
                            ],
                            type: "line",
                            itemStyle: {
                              color: "#38d"
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "2020年月均油站排名",
                  istime: true,
                  query: {
                    inputValue: "",
                    selectValue: "",
                    timeValue: ""
                  },
                  style: {
                    width: "49.5%",
                    height: "350px",
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
                        height: "300px"
                      },
                      isShow: true,
                      option: {
                        tooltip: {
                          trigger: "axis",
                          axisPointer: {
                            type: "shadow"
                          },
                          formatter: "{b}:<br>{c}万元"
                        },
                        grid: {
                          left: "3%",
                          right: "7%",
                          bottom: "3%",
                          containLabel: true
                        },
                        xAxis: {
                          type: "value",
                          name: "万元",
                          nameTextStyle: {
                            color: "#000"
                          },
                          boundaryGap: [0, 0.01]
                        },

                        yAxis: {
                          type: "category",
                          axisLine: { show: false },
                          axisLabel: { show: false },
                          axisTick: { show: false },
                          splitLine: { show: false },
                          data: [
                            "汉十高速双沟停车区加油北站",
                            "汉十高速枣阳服务区加油南站（新）",
                            "汉十高速双沟停车区加油南站",
                            "汉十高速枣阳服务区加油北站 (新）",
                            "汉十高速双沟停车区加油南站（新）"
                          ]
                        },
                        series: [
                          {
                            type: "bar",
                            label: {
                              show: true,
                              position: "insideLeft",
                              color: "#000",
                              formatter: "{b}" + "：{c}"
                            },
                            data: [15851, 25851, 55851, 65551, 95851],
                            itemStyle: {
                              color: "#38d"
                            }
                          }
                        ]
                      }
                    }
                  ]
                },

                {
                  title: "2020年月油站转换率",
                  time: false,
                  style: {
                    width: "49.5%",
                    height: "350px",
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
                        height: "300px"
                      },
                      unit: "%",
                      option: {
                        xAxis: {
                          type: "category",
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
                          ]
                        },
                        tooltip: {
                          trigger: "axis",
                          formatter: "{b} : {c}%"
                        },
                        yAxis: {
                          type: "value"
                        },
                        series: [
                          {
                            data: [
                              6.56,
                              3.45,
                              4.95,
                              9.62,
                              8.42,
                              2.62,
                              6.95,
                              2.64,
                              10.33,
                              6.14,
                              5.53,
                              6.62
                            ],
                            type: "line",
                            itemStyle: {
                              color: "#38d"
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "2020年月均油站排名",
                  istime: true,
                  query: {
                    inputValue: "",
                    selectValue: "",
                    timeValue: ""
                  },
                  style: {
                    width: "49.5%",
                    height: "350px",
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
                        height: "300px"
                      },
                      isShow: true,
                      option: {
                        tooltip: {
                          trigger: "axis",
                          axisPointer: {
                            type: "shadow"
                          },
                          formatter: "{b}:<br>{c}万元"
                        },
                        grid: {
                          left: "3%",
                          right: "7%",
                          bottom: "3%",
                          containLabel: true
                        },
                        xAxis: {
                          type: "value",
                          name: "万元",
                          nameTextStyle: {
                            color: "#000"
                          },
                          boundaryGap: [0, 0.01]
                        },

                        yAxis: {
                          type: "category",
                          axisLine: { show: false },
                          axisLabel: { show: false },
                          axisTick: { show: false },
                          splitLine: { show: false },
                          data: [
                            "汉十高速枣阳服务区加油南站（新）",
                            "汉十高速枣阳服务区加油北站 (新）",
                            "汉十高速双沟停车区加油南站（新）",
                            "汉十高速双沟停车区加油北站",
                            "汉十高速双沟停车区加油南站"
                          ]
                        },
                        series: [
                          {
                            type: "bar",
                            label: {
                              show: true,
                              position: "insideLeft",
                              color: "#000",
                              formatter: "{b}" + "：{c}"
                            },
                            data: [8851, 25851, 35851, 95551, 105851],
                            itemStyle: {
                              color: "#38d"
                            }
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
          id: "gasWholesale",
          name: "批发",
          icon: require("../../../assets/serviceArea/nn/pf.png"),
          iconActive: require("../../../assets/serviceArea/nn/pf1.png"),
          collapseItem: [
            {
              id: "budget_20200",
              year: 2020,
              collapseTitle: "2020年批发营收",
              EChartsBox: [
                {
                  title: "2020年月批发营收",
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
                  title: "2020年分公司占比/业态占比",
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
                },

                {
                  title: "2019年月批发营收",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "34.5%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginTop:'10px'
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
                  title: "2019年分公司占比/业态占比",
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
                    overflow: "hidden",
                    marginTop:'10px'
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
                },

                {
                  title: "2020年月批发利润",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "39.5%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginTop:'10px'
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
                  title: "2020年分公司占比/业态占比",
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
                    overflow: "hidden",
                    marginTop:'10px'
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
                },

                {
                  title: "2019年月批发利润",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "39.5%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginTop:'10px'
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
                  title: "2019年分公司占比/业态占比",
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
                    overflow: "hidden",
                    marginTop:'10px'
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
                },

                {
                  title: "2020年成本利润",
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
                    overflow: "hidden",
                    marginTop:'10px'
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
                },

                {
                  title: "2019年成本利润",
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
                    overflow: "hidden",
                    marginTop:'10px'
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
                },

                {
                  title: "2020年现金流量",
                  istime: false,
                  timeValue: "",
                  style: {
                    width: "60%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginTop:'10px'
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
                  title: "2020年业务类型占分公司占比",
                  style: {
                    width: "39.5%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginTop:'10px'
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
                },

                {
                  title: "2019年现金流量",
                  istime: false,
                  timeValue: "",
                  style: {
                    width: "60%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginTop:'10px'
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
                  title: "2019年业务类型占分公司占比",
                  style: {
                    width: "39.5%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginTop:'10px'
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
            }
          ]
        },
        {
          id: "accountsReceivabless",
          name: "回款率",
          icon: require("../../../assets/serviceArea/jcxq/huikuanlv1.png"),
          iconActive: require("../../../assets/serviceArea/jcxq/huikuanlv.png"),
          collapseItem: [
            {
              id: "budget_2020s",
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
              id: "budget_2019f",
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
              id: "revenue_gdg",
              collapseTitle: "查看更多",
              EChartsBox: []
            },
            {
              id: "budget_2020sa",
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
    /*await this.obtainAxios("营收", "2020", "ys");
    await this.obtainAxios("营收", "2019", "ys");
    await this.obtainAxios("利润", "2020", "lr");
    await this.obtainAxios("利润", "2019", "lr");*/
  },
  methods: {
    selectionChange(v) {
      if(Object.keys(v).length==10){
        this.$router.push("/energy/JYZXiangQing");
      }

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
                      for (let index = data.length + 1; index <= 12; index++) {
                        xBxis.push(index);
                        if (index == 12 && year==2020) {
                          yAxis.push(0);
                        } else {
                          yAxis.push(Math.ceil(Math.random() * 10000000));
                        }
                      }
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
  watch: {
    viewChange() {
      this.$refs["collapse"].refresh(this.collapseData);
    }
  }
};
</script>

<style scoped></style>
