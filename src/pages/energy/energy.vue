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
import MyCollapseBase from "../../components/common/myCollapseBase";

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
          icon: require("../../assets/business/icon_1-1.png"),
          iconActive: require("../../assets/business/icon_1-2.png"),
          collapseItem: [
            {
              id: "a_2020",
              collapseTitle: "2020年营收",
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
                          formatter: "{b} : {c}",
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
                          type: "value"
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
              id: "a_2019",
              collapseTitle: "2019年营收",
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
                          formatter: "{b} : {c}",
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
                          type: "value"
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
              id: "a_gd",
              collapseTitle: "查看更多",
              EChartsBox: []
            }
          ]
        },
        {
          id: "b",
          name: "利润",
          icon: require("../../assets/business/icon_2-1.png"),
          iconActive: require("../../assets/business/icon_2-2.png"),
          collapseItem: [
            {
              id: "b_2020",
              collapseTitle: "2020年利润",
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
                          formatter: "{b} : {c}",
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
                          type: "value"
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
                          formatter: "{b} : {c}",
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
                          type: "value"
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
        },
        {
          id: "c",
          name: "批零差价",
          icon: require("../../assets/energy/1.png"),
          iconActive: require("../../assets/energy/2.png"),
          collapseItem: [
            {
              id: "c_2020",
              collapseTitle: "2020年批零差价",
              EChartsBox: [
                {
                  title: "油品批零差价默认展示总量",
                  /*包裹ECharts的父级元素的属性*/
                  style: {
                    width: "100%",
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
                        tooltip: {
                          trigger: "axis"
                        },
                        legend: {
                          data: ["总量", "汽油", "柴油", "92", "95", "96", "0"]
                        },
                        grid: {
                          left: "3%",
                          right: "4%",
                          top: "10%",
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
                  select: false,
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
                        width: "50%",
                        height: "400px"
                      },
                      option: {
                        title: {
                          text: "",
                          top: 20,
                          left: "5%"
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{a} <br/>{b}: {c} ({d}%)"
                        },
                        legend: {
                          left: "center",
                          bottom: "10px",
                          data: ["柴油", "汽油"]
                        },
                        series: [
                          {
                            name: "",
                            type: "pie",
                            radius: ["50%", "70%"],
                            avoidLabelOverlap: false,
                            label: {
                              formatter: function(val) {
                                return val.name + "\n" + val.percent + "%";
                              }
                            },
                            itemStyle: {
                              color: params => {
                                let colorList = [
                                  "#58D5FF",
                                  "#73ACFF",
                                  "#FDD56A",
                                  "#FDB36A",
                                  "#FD866A",
                                  "#9E87FF"
                                ];
                                return colorList[params.dataIndex];
                              }
                            },
                            labelLine: {
                              normal: {
                                length: 20,
                                length2: 30,
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              { value: 335, name: "柴油" },
                              { value: 310, name: "汽油" }
                            ]
                          },
                          {
                            name: "访问来源",
                            type: "pie",
                            radius: ["50%", "70%"],
                            avoidLabelOverlap: false,
                            itemStyle: {
                              color: params => {
                                let colorList = [
                                  "#58D5FF",
                                  "#73ACFF",
                                  "#FDD56A",
                                  "#FDB36A",
                                  "#FD866A",
                                  "#9E87FF"
                                ];
                                return colorList[params.dataIndex];
                              }
                            },
                            label: {
                              position: "inner",
                              formatter: "{b}：{c}亿元"
                            },
                            label: {
                              show: false,
                              position: "center",
                              length: 30,
                              length2: 55
                            },
                            emphasis: {
                              label: {
                                show: true,
                                fontSize: "30",
                                fontWeight: "bold"
                              }
                            },
                            labelLine: {
                              show: true
                            },
                            data: [
                              { value: 335, name: "柴油" },
                              { value: 310, name: "汽油" }
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
                          text: "",
                          top: 20,
                          left: "5%"
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{a} <br/>{b}: {c} ({d}%)"
                        },
                        legend: {
                          left: "center",
                          bottom: "10px",
                          data: ["92", "95", "98", "0"]
                        },
                        series: [
                          {
                            name: "",
                            type: "pie",
                            radius: ["50%", "70%"],
                            avoidLabelOverlap: false,
                            label: {
                              formatter: function(val) {
                                return val.name + "\n" + val.percent + "%";
                              }
                            },
                            itemStyle: {
                              color: params => {
                                let colorList = [
                                  "#58D5FF",
                                  "#73ACFF",
                                  "#FDD56A",
                                  "#FDB36A",
                                  "#FD866A",
                                  "#9E87FF"
                                ];
                                return colorList[params.dataIndex];
                              }
                            },
                            labelLine: {
                              normal: {
                                length: 20,
                                length2: 30,
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              { value: 335, name: "92" },
                              { value: 310, name: "95" },
                              { value: 310, name: "98" },
                              { value: 310, name: "0" }
                            ]
                          },
                          {
                            name: "访问来源",
                            type: "pie",
                            radius: ["50%", "70%"],
                            avoidLabelOverlap: false,
                            itemStyle: {
                              color: params => {
                                let colorList = [
                                  "#58D5FF",
                                  "#73ACFF",
                                  "#FDD56A",
                                  "#FDB36A",
                                  "#FD866A",
                                  "#9E87FF"
                                ];
                                return colorList[params.dataIndex];
                              }
                            },
                            label: {
                              position: "inner",
                              formatter: "{b}：{c}亿元"
                            },
                            label: {
                              show: false,
                              position: "center",
                              length: 30,
                              length2: 55
                            },
                            emphasis: {
                              label: {
                                show: true,
                                fontSize: "30",
                                fontWeight: "bold"
                              }
                            },
                            labelLine: {
                              show: true
                            },
                            data: [
                              { value: 335, name: "92" },
                              { value: 310, name: "95" },
                              { value: 310, name: "98" },
                              { value: 310, name: "0" }
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
                  style: {
                    width: "60%",
                    height: "450px",
                    background: "white",
                    marginTop: "10px",
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
                          // formatter: function (parms) {
                          //     var str =
                          //         "数量：" + parms.data.value + "头</br>" +
                          //         "占比：" + parms.percent + "%";
                          //     return str;
                          // }
                        },
                        series: [
                          {
                            data: [120, 200, 150, 80, 70, 110, 130],
                            type: "bar",
                            showBackground: true,
                            backgroundStyle: {
                              color: "rgba(220, 220, 220, 0.8)"
                            }
                          },
                          {
                            data: [12, 20, 10, 100, 90, 10, 100],
                            type: "bar",
                            showBackground: true,
                            color: "#4ECB73",
                            backgroundStyle: {
                              color: "rgba(220, 220, 220, 0.8)"
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "各个高速的订单个数占比",
                  time: true,
                  select: false,
                  style: {
                    width: "39%",
                    height: "450px",
                    background: "white",
                    marginTop: "10px",
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
                        tooltip: {
                          trigger: "item",
                          formatter: "{a} <br/>{b}: {c} ({d}%)"
                        },
                        legend: {
                          left: "center",
                          bottom: "10px",
                          data: ["A高速", "Mary", "jim", "Tony", "May"]
                        },
                        series: [
                          {
                            name: "",
                            type: "pie",
                            radius: ["50%", "70%"],
                            avoidLabelOverlap: false,
                            label: {
                              formatter: function(val) {
                                return val.name + "\n" + val.percent + "%";
                              }
                            },
                            itemStyle: {
                              color: params => {
                                let colorList = [
                                  "#58D5FF",
                                  "#73ACFF",
                                  "#FDD56A",
                                  "#FDB36A",
                                  "#FD866A",
                                  "#9E87FF"
                                ];
                                return colorList[params.dataIndex];
                              }
                            },
                            labelLine: {
                              normal: {
                                length: 20,
                                length2: 30,
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              { value: 335, name: "A高速" },
                              { value: 310, name: "Mary" },
                              { value: 310, name: "jim" },
                              { value: 310, name: "Tony" },
                              { value: 310, name: "May" }
                            ]
                          },
                          {
                            name: "访问来源",
                            type: "pie",
                            radius: ["50%", "70%"],
                            avoidLabelOverlap: false,
                            itemStyle: {
                              color: params => {
                                let colorList = [
                                  "#58D5FF",
                                  "#73ACFF",
                                  "#FDD56A",
                                  "#FDB36A",
                                  "#FD866A",
                                  "#9E87FF"
                                ];
                                return colorList[params.dataIndex];
                              }
                            },
                            label: {
                              position: "inner",
                              formatter: "{b}：{c}亿元"
                            },
                            label: {
                              show: false,
                              position: "center",
                              length: 30,
                              length2: 55
                            },
                            emphasis: {
                              label: {
                                show: true,
                                fontSize: "30",
                                fontWeight: "bold"
                              }
                            },
                            labelLine: {
                              show: true
                            },
                            data: [
                              { value: 335, name: "A高速" },
                              { value: 310, name: "Mary" },
                              { value: 310, name: "jim" },
                              { value: 310, name: "Tony" },
                              { value: 310, name: "May" }
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
                  style: {
                    width: "49.5%",
                    height: "450px",
                    background: "white",
                    marginTop: "10px",
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
                          // formatter: function (parms) {
                          //     var str =
                          //         "数量：" + parms.data.value + "头</br>" +
                          //         "占比：" + parms.percent + "%";
                          //     return str;
                          // }
                        },
                        series: [
                          {
                            data: [120, 200, 150, 80, 70, 110, 130],
                            type: "bar",
                            showBackground: true,
                            backgroundStyle: {
                              color: "rgba(220, 220, 220, 0.8)"
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "高速展示加油站订单个数",
                  time: false,
                  select: false,
                  style: {
                    width: "49.5%",
                    height: "450px",
                    background: "white",
                    marginTop: "10px",
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
                          // formatter: function (parms) {
                          //     var str =
                          //         "数量：" + parms.data.value + "头</br>" +
                          //         "占比：" + parms.percent + "%";
                          //     return str;
                          // }
                        },
                        series: [
                          {
                            data: [120, 200, 150, 80, 70, 110, 130],
                            type: "bar",
                            showBackground: true,
                            backgroundStyle: {
                              color: "rgba(220, 220, 220, 0.8)"
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              id: "c_2019",
              collapseTitle: "2019年批零差价",
              EChartsBox: [
                {
                  title: "油品批零差价默认展示总量",

                  /*包裹ECharts的父级元素的属性*/
                  style: {
                    width: "100%",
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
                        tooltip: {
                          trigger: "axis"
                        },
                        legend: {
                          data: ["总量", "汽油", "柴油", "92", "95", "96", "0"]
                        },
                        grid: {
                          left: "3%",
                          right: "4%",
                          top: "10%",
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
                  select: false,
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
                        width: "50%",
                        height: "400px"
                      },
                      option: {
                        title: {
                          text: "",
                          top: 20,
                          left: "5%"
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{a} <br/>{b}: {c} ({d}%)"
                        },
                        legend: {
                          left: "center",
                          bottom: "10px",
                          data: ["柴油", "汽油"]
                        },
                        series: [
                          {
                            name: "",
                            type: "pie",
                            radius: ["50%", "70%"],
                            avoidLabelOverlap: false,
                            label: {
                              formatter: function(val) {
                                return val.name + "\n" + val.percent + "%";
                              }
                            },
                            itemStyle: {
                              color: params => {
                                let colorList = [
                                  "#58D5FF",
                                  "#73ACFF",
                                  "#FDD56A",
                                  "#FDB36A",
                                  "#FD866A",
                                  "#9E87FF"
                                ];
                                return colorList[params.dataIndex];
                              }
                            },
                            labelLine: {
                              normal: {
                                length: 20,
                                length2: 30,
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              { value: 335, name: "柴油" },
                              { value: 310, name: "汽油" }
                            ]
                          },
                          {
                            name: "访问来源",
                            type: "pie",
                            radius: ["50%", "70%"],
                            avoidLabelOverlap: false,
                            itemStyle: {
                              color: params => {
                                let colorList = [
                                  "#58D5FF",
                                  "#73ACFF",
                                  "#FDD56A",
                                  "#FDB36A",
                                  "#FD866A",
                                  "#9E87FF"
                                ];
                                return colorList[params.dataIndex];
                              }
                            },
                            label: {
                              position: "inner",
                              formatter: "{b}：{c}亿元"
                            },
                            label: {
                              show: false,
                              position: "center",
                              length: 30,
                              length2: 55
                            },
                            emphasis: {
                              label: {
                                show: true,
                                fontSize: "30",
                                fontWeight: "bold"
                              }
                            },
                            labelLine: {
                              show: true
                            },
                            data: [
                              { value: 335, name: "柴油" },
                              { value: 310, name: "汽油" }
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
                          text: "",
                          top: 20,
                          left: "5%"
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{a} <br/>{b}: {c} ({d}%)"
                        },
                        legend: {
                          left: "center",
                          bottom: "10px",
                          data: ["92", "95", "98", "0"]
                        },
                        series: [
                          {
                            name: "",
                            type: "pie",
                            radius: ["50%", "70%"],
                            avoidLabelOverlap: false,
                            label: {
                              formatter: function(val) {
                                return val.name + "\n" + val.percent + "%";
                              }
                            },
                            itemStyle: {
                              color: params => {
                                let colorList = [
                                  "#58D5FF",
                                  "#73ACFF",
                                  "#FDD56A",
                                  "#FDB36A",
                                  "#FD866A",
                                  "#9E87FF"
                                ];
                                return colorList[params.dataIndex];
                              }
                            },
                            labelLine: {
                              normal: {
                                length: 20,
                                length2: 30,
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              { value: 335, name: "92" },
                              { value: 310, name: "95" },
                              { value: 310, name: "98" },
                              { value: 310, name: "0" }
                            ]
                          },
                          {
                            name: "访问来源",
                            type: "pie",
                            radius: ["50%", "70%"],
                            avoidLabelOverlap: false,
                            itemStyle: {
                              color: params => {
                                let colorList = [
                                  "#58D5FF",
                                  "#73ACFF",
                                  "#FDD56A",
                                  "#FDB36A",
                                  "#FD866A",
                                  "#9E87FF"
                                ];
                                return colorList[params.dataIndex];
                              }
                            },
                            label: {
                              position: "inner",
                              formatter: "{b}：{c}亿元"
                            },
                            label: {
                              show: false,
                              position: "center",
                              length: 30,
                              length2: 55
                            },
                            emphasis: {
                              label: {
                                show: true,
                                fontSize: "30",
                                fontWeight: "bold"
                              }
                            },
                            labelLine: {
                              show: true
                            },
                            data: [
                              { value: 335, name: "92" },
                              { value: 310, name: "95" },
                              { value: 310, name: "98" },
                              { value: 310, name: "0" }
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
                  style: {
                    width: "60%",
                    height: "450px",
                    background: "white",
                    marginTop: "10px",
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
                          // formatter: function (parms) {
                          //     var str =
                          //         "数量：" + parms.data.value + "头</br>" +
                          //         "占比：" + parms.percent + "%";
                          //     return str;
                          // }
                        },
                        series: [
                          {
                            data: [120, 200, 150, 80, 70, 110, 130],
                            type: "bar",
                            showBackground: true,
                            backgroundStyle: {
                              color: "rgba(220, 220, 220, 0.8)"
                            }
                          },
                          {
                            data: [12, 20, 10, 100, 90, 10, 100],
                            type: "bar",
                            showBackground: true,
                            color: "#4ECB73",
                            backgroundStyle: {
                              color: "rgba(220, 220, 220, 0.8)"
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "各个高速的订单个数占比",
                  time: true,
                  select: false,
                  style: {
                    width: "39%",
                    height: "450px",
                    background: "white",
                    marginTop: "10px",
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
                        tooltip: {
                          trigger: "item",
                          formatter: "{a} <br/>{b}: {c} ({d}%)"
                        },
                        legend: {
                          left: "center",
                          bottom: "10px",
                          data: ["A高速", "Mary", "jim", "Tony", "May"]
                        },
                        series: [
                          {
                            name: "",
                            type: "pie",
                            radius: ["50%", "70%"],
                            avoidLabelOverlap: false,
                            label: {
                              formatter: function(val) {
                                return val.name + "\n" + val.percent + "%";
                              }
                            },
                            itemStyle: {
                              color: params => {
                                let colorList = [
                                  "#58D5FF",
                                  "#73ACFF",
                                  "#FDD56A",
                                  "#FDB36A",
                                  "#FD866A",
                                  "#9E87FF"
                                ];
                                return colorList[params.dataIndex];
                              }
                            },
                            labelLine: {
                              normal: {
                                length: 20,
                                length2: 30,
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              { value: 335, name: "A高速" },
                              { value: 310, name: "Mary" },
                              { value: 310, name: "jim" },
                              { value: 310, name: "Tony" },
                              { value: 310, name: "May" }
                            ]
                          },
                          {
                            name: "访问来源",
                            type: "pie",
                            radius: ["50%", "70%"],
                            avoidLabelOverlap: false,
                            itemStyle: {
                              color: params => {
                                let colorList = [
                                  "#58D5FF",
                                  "#73ACFF",
                                  "#FDD56A",
                                  "#FDB36A",
                                  "#FD866A",
                                  "#9E87FF"
                                ];
                                return colorList[params.dataIndex];
                              }
                            },
                            label: {
                              position: "inner",
                              formatter: "{b}：{c}亿元"
                            },
                            label: {
                              show: false,
                              position: "center",
                              length: 30,
                              length2: 55
                            },
                            emphasis: {
                              label: {
                                show: true,
                                fontSize: "30",
                                fontWeight: "bold"
                              }
                            },
                            labelLine: {
                              show: true
                            },
                            data: [
                              { value: 335, name: "A高速" },
                              { value: 310, name: "Mary" },
                              { value: 310, name: "jim" },
                              { value: 310, name: "Tony" },
                              { value: 310, name: "May" }
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
                  style: {
                    width: "49.5%",
                    height: "450px",
                    background: "white",
                    marginTop: "10px",
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
                          // formatter: function (parms) {
                          //     var str =
                          //         "数量：" + parms.data.value + "头</br>" +
                          //         "占比：" + parms.percent + "%";
                          //     return str;
                          // }
                        },
                        series: [
                          {
                            data: [120, 200, 150, 80, 70, 110, 130],
                            type: "bar",
                            showBackground: true,
                            backgroundStyle: {
                              color: "rgba(220, 220, 220, 0.8)"
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "高速展示加油站订单个数",
                  time: false,
                  select: false,
                  style: {
                    width: "49.5%",
                    height: "450px",
                    background: "white",
                    marginTop: "10px",
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
                          // formatter: function (parms) {
                          //     var str =
                          //         "数量：" + parms.data.value + "头</br>" +
                          //         "占比：" + parms.percent + "%";
                          //     return str;
                          // }
                        },
                        series: [
                          {
                            data: [120, 200, 150, 80, 70, 110, 130],
                            type: "bar",
                            showBackground: true,
                            backgroundStyle: {
                              color: "rgba(220, 220, 220, 0.8)"
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              id: "c_gd",
              collapseTitle: "查看更多",
              EChartsBox: []
            }
          ]
        },
        {
          id: "rateofreturn",
          name: "回款率",
          icon: require("../../assets/energy/6.png"),
          iconActive: require("../../assets/energy/5.png"),
          collapseItem: [
            {
              id: "rateofreturn_2020",
              collapseTitle: "2020年回款率",
              EChartsBox: [
                {
                  title: "各个公司的现金流",
                  time: true,
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
                        tooltip: {
                          trigger: "axis"
                        },
                        legend: {
                          data: [
                            "邮件营销",
                            "联盟广告",
                            "视频广告",
                            "直接访问",
                            "搜索引擎"
                          ],
                          top: "bottom"
                        },
                        grid: {
                          left: "3%",
                          right: "4%",
                          bottom: "7%",
                          containLabel: true
                        },
                        xAxis: {
                          type: "category",
                          boundaryGap: false,
                          data: [
                            "周一",
                            "周二",
                            "周三",
                            "周四",
                            "周五",
                            "周六",
                            "周日"
                          ]
                        },
                        yAxis: {
                          type: "value"
                        },
                        series: [
                          {
                            name: "邮件营销",
                            type: "line",
                            stack: "总量",
                            data: [120, 132, 101, 134, 90, 230, 210]
                          },
                          {
                            name: "联盟广告",
                            type: "line",
                            stack: "总量",
                            data: [220, 182, 191, 234, 290, 330, 310]
                          },
                          {
                            name: "视频广告",
                            type: "line",
                            stack: "总量",
                            data: [150, 232, 201, 154, 190, 330, 410]
                          },
                          {
                            name: "直接访问",
                            type: "line",
                            stack: "总量",
                            data: [320, 332, 301, 334, 390, 330, 320]
                          },
                          {
                            name: "搜索引擎",
                            type: "line",
                            stack: "总量",
                            data: [820, 932, 901, 934, 1290, 1330, 1320]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "各个公司回款占比",
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
                          formatter: "{b}: {c} ({d}%)"
                        },
                        legend: {
                          left: "center",
                          bottom: "10px",
                          data: ["A公司", "B公司", "C公司", "D公司"]
                        },
                        series: [
                          {
                            name: "",
                            type: "pie",
                            radius: ["30%", "50%"],
                            avoidLabelOverlap: false,
                            itemStyle: {
                              color: params => {
                                let colorList = [
                                  "#58D5FF",
                                  "#73ACFF",
                                  "#FDD56A",
                                  "#FDB36A",
                                  "#FD866A",
                                  "#9E87FF"
                                ];
                                return colorList[params.dataIndex];
                              }
                            },
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
                              { value: 335, name: "A公司" },
                              { value: 310, name: "B公司" },
                              { value: 234, name: "C公司" },
                              { value: 135, name: "D公司" }
                            ]
                          },
                          {
                            name: "",
                            type: "pie",
                            radius: ["30%", "50%"],
                            avoidLabelOverlap: false,
                            itemStyle: {
                              color: params => {
                                let colorList = [
                                  "#58D5FF",
                                  "#73ACFF",
                                  "#FDD56A",
                                  "#FDB36A",
                                  "#FD866A",
                                  "#9E87FF"
                                ];
                                return colorList[params.dataIndex];
                              }
                            },
                            label: {
                              show: false,
                              position: "center"
                            },
                            emphasis: {
                              label: {
                                show: true,
                                fontSize: "20",
                                fontWeight: "bold"
                              }
                            },
                            labelLine: {
                              show: false
                            },
                            data: [
                              { value: 335, name: "A公司" },
                              { value: 310, name: "B公司" },
                              { value: 234, name: "C公司" },
                              { value: 135, name: "D公司" }
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
                          formatter: "{b}: {c} ({d}%)"
                        },
                        legend: {
                          left: "center",
                          bottom: "10px",
                          data: ["A公司", "B公司", "C公司", "D公司"]
                        },
                        series: [
                          {
                            name: "",
                            type: "pie",
                            radius: ["30%", "50%"],
                            avoidLabelOverlap: false,
                            itemStyle: {
                              color: params => {
                                let colorList = [
                                  "#58D5FF",
                                  "#73ACFF",
                                  "#FDD56A",
                                  "#FDB36A",
                                  "#FD866A",
                                  "#9E87FF"
                                ];
                                return colorList[params.dataIndex];
                              }
                            },
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
                              { value: 335, name: "A公司" },
                              { value: 310, name: "B公司" },
                              { value: 234, name: "C公司" },
                              { value: 135, name: "D公司" }
                            ]
                          },
                          {
                            name: "访问来源",
                            type: "pie",
                            radius: ["30%", "50%"],
                            avoidLabelOverlap: false,

                            itemStyle: {
                              color: params => {
                                let colorList = [
                                  "#58D5FF",
                                  "#73ACFF",
                                  "#FDD56A",
                                  "#FDB36A",
                                  "#FD866A",
                                  "#9E87FF"
                                ];
                                return colorList[params.dataIndex];
                              }
                            },
                            label: {
                              show: false,
                              position: "center"
                            },
                            emphasis: {
                              label: {
                                show: true,
                                fontSize: "20",
                                fontWeight: "bold"
                              }
                            },
                            labelLine: {
                              show: false
                            },
                            data: [
                              { value: 335, name: "A公司" },
                              { value: 310, name: "B公司" },
                              { value: 234, name: "C公司" },
                              { value: 135, name: "D公司" }
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
                  /*包裹ECharts的父级元素的属性*/
                  style: {
                    width: "49.5%",
                    height: "600px",
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
                        height: "550px"
                      },
                      option: {
                        xAxis: {
                          type: "value"
                        },
                        barWidth: 20,
                        color: "#3AA1FF",
                        tooltip: {
                          trigger: "item"
                          // formatter: '{a} <br/>{b}: {c} ({d}%)'
                        },
                        yAxis: {
                          type: "category",
                          data: [
                            "A批发商1",
                            "A批发商2",
                            "A批发商3",
                            "A批发商4",
                            "A批发商5",
                            "A批发商6",
                            "A批发商7",
                            "A批发商8",
                            "A批发商9",
                            "A批发商10"
                          ]
                        },
                        series: [
                          {
                            data: [
                              120,
                              200,
                              150,
                              80,
                              70,
                              110,
                              130,
                              70,
                              110,
                              130
                            ],
                            type: "bar",
                            showBackground: true,
                            backgroundStyle: {
                              color: "rgba(220, 220, 220, 0.8)"
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
                  timeValue: "",
                  selectValue: "",
                  /*包裹ECharts的父级元素的属性*/
                  style: {
                    width: "49.5%",
                    height: "600px",
                    borderRadius: "10px",
                    background: "white",
                    marginBottom: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      type: "table",
                      isPagination: true,
                      height: "600px",
                      style: {
                        width: "100%",
                        height: "550px",
                        marginTop: "50px",
                        background: "#FFF"
                      },
                      columns: [
                        { prop: "A", label: "批发商" },
                        { prop: "B", label: "总体占比" },
                        { prop: "C", label: "毛利" },
                        { prop: "D", label: "汽油" },
                        { prop: "E", label: "柴油" },
                        { prop: "F", label: "总量(吨)" }
                      ],
                      tableData: [
                        {
                          A: "批发商11",
                          B: "8%",
                          C: "8%",
                          D: "8%",
                          E: "8%",
                          F: "110000"
                        },
                        {
                          A: "批发商12",
                          B: "8%",
                          C: "8%",
                          D: "8%",
                          E: "8%",
                          F: "120000"
                        },
                        {
                          A: "批发商13",
                          B: "8%",
                          C: "8%",
                          D: "8%",
                          E: "8%",
                          F: "130000"
                        },
                        {
                          A: "批发商14",
                          B: "8%",
                          C: "8%",
                          D: "8%",
                          E: "8%",
                          F: "140000"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "rateofreturn_2019",
              collapseTitle: "2019年回款率润",
              EChartsBox: [
                {
                  title: "各个公司的现金流",
                  time: true,
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
                        tooltip: {
                          trigger: "axis"
                        },
                        legend: {
                          data: [
                            "邮件营销",
                            "联盟广告",
                            "视频广告",
                            "直接访问",
                            "搜索引擎"
                          ],
                          top: "bottom"
                        },
                        grid: {
                          left: "3%",
                          right: "4%",
                          bottom: "7%",
                          containLabel: true
                        },
                        xAxis: {
                          type: "category",
                          boundaryGap: false,
                          data: [
                            "周一",
                            "周二",
                            "周三",
                            "周四",
                            "周五",
                            "周六",
                            "周日"
                          ]
                        },
                        yAxis: {
                          type: "value"
                        },
                        series: [
                          {
                            name: "邮件营销",
                            type: "line",
                            stack: "总量",
                            data: [120, 132, 101, 134, 90, 230, 210]
                          },
                          {
                            name: "联盟广告",
                            type: "line",
                            stack: "总量",
                            data: [220, 182, 191, 234, 290, 330, 310]
                          },
                          {
                            name: "视频广告",
                            type: "line",
                            stack: "总量",
                            data: [150, 232, 201, 154, 190, 330, 410]
                          },
                          {
                            name: "直接访问",
                            type: "line",
                            stack: "总量",
                            data: [320, 332, 301, 334, 390, 330, 320]
                          },
                          {
                            name: "搜索引擎",
                            type: "line",
                            stack: "总量",
                            data: [820, 932, 901, 934, 1290, 1330, 1320]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "各个公司回款占比",
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
                          formatter: "{b}: {c} ({d}%)"
                        },
                        legend: {
                          left: "center",
                          bottom: "10px",
                          data: ["A公司", "B公司", "C公司", "D公司"]
                        },
                        series: [
                          {
                            name: "",
                            type: "pie",
                            radius: ["30%", "50%"],
                            avoidLabelOverlap: false,
                            itemStyle: {
                              color: params => {
                                let colorList = [
                                  "#58D5FF",
                                  "#73ACFF",
                                  "#FDD56A",
                                  "#FDB36A",
                                  "#FD866A",
                                  "#9E87FF"
                                ];
                                return colorList[params.dataIndex];
                              }
                            },
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
                              { value: 335, name: "A公司" },
                              { value: 310, name: "B公司" },
                              { value: 234, name: "C公司" },
                              { value: 135, name: "D公司" }
                            ]
                          },
                          {
                            name: "",
                            type: "pie",
                            radius: ["30%", "50%"],
                            avoidLabelOverlap: false,
                            itemStyle: {
                              color: params => {
                                let colorList = [
                                  "#58D5FF",
                                  "#73ACFF",
                                  "#FDD56A",
                                  "#FDB36A",
                                  "#FD866A",
                                  "#9E87FF"
                                ];
                                return colorList[params.dataIndex];
                              }
                            },
                            label: {
                              show: false,
                              position: "center"
                            },
                            emphasis: {
                              label: {
                                show: true,
                                fontSize: "20",
                                fontWeight: "bold"
                              }
                            },
                            labelLine: {
                              show: false
                            },
                            data: [
                              { value: 335, name: "A公司" },
                              { value: 310, name: "B公司" },
                              { value: 234, name: "C公司" },
                              { value: 135, name: "D公司" }
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
                          formatter: "{b}: {c} ({d}%)"
                        },
                        legend: {
                          left: "center",
                          bottom: "10px",
                          data: ["A公司", "B公司", "C公司", "D公司"]
                        },
                        series: [
                          {
                            name: "",
                            type: "pie",
                            radius: ["30%", "50%"],
                            avoidLabelOverlap: false,
                            itemStyle: {
                              color: params => {
                                let colorList = [
                                  "#58D5FF",
                                  "#73ACFF",
                                  "#FDD56A",
                                  "#FDB36A",
                                  "#FD866A",
                                  "#9E87FF"
                                ];
                                return colorList[params.dataIndex];
                              }
                            },
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
                              { value: 335, name: "A公司" },
                              { value: 310, name: "B公司" },
                              { value: 234, name: "C公司" },
                              { value: 135, name: "D公司" }
                            ]
                          },
                          {
                            name: "访问来源",
                            type: "pie",
                            radius: ["30%", "50%"],
                            avoidLabelOverlap: false,

                            itemStyle: {
                              color: params => {
                                let colorList = [
                                  "#58D5FF",
                                  "#73ACFF",
                                  "#FDD56A",
                                  "#FDB36A",
                                  "#FD866A",
                                  "#9E87FF"
                                ];
                                return colorList[params.dataIndex];
                              }
                            },
                            label: {
                              show: false,
                              position: "center"
                            },
                            emphasis: {
                              label: {
                                show: true,
                                fontSize: "20",
                                fontWeight: "bold"
                              }
                            },
                            labelLine: {
                              show: false
                            },
                            data: [
                              { value: 335, name: "A公司" },
                              { value: 310, name: "B公司" },
                              { value: 234, name: "C公司" },
                              { value: 135, name: "D公司" }
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
                  /*包裹ECharts的父级元素的属性*/
                  style: {
                    width: "49.5%",
                    height: "600px",
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
                        height: "550px"
                      },
                      option: {
                        xAxis: {
                          type: "value"
                        },
                        barWidth: 20,
                        color: "#3AA1FF",
                        tooltip: {
                          trigger: "item"
                          // formatter: '{a} <br/>{b}: {c} ({d}%)'
                        },
                        yAxis: {
                          type: "category",
                          data: [
                            "A批发商1",
                            "A批发商2",
                            "A批发商3",
                            "A批发商4",
                            "A批发商5",
                            "A批发商6",
                            "A批发商7",
                            "A批发商8",
                            "A批发商9",
                            "A批发商10"
                          ]
                        },
                        series: [
                          {
                            data: [
                              120,
                              200,
                              150,
                              80,
                              70,
                              110,
                              130,
                              70,
                              110,
                              130
                            ],
                            type: "bar",
                            showBackground: true,
                            backgroundStyle: {
                              color: "rgba(220, 220, 220, 0.8)"
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
                  timeValue: "",
                  selectValue: "",
                  /*包裹ECharts的父级元素的属性*/
                  style: {
                    width: "49.5%",
                    height: "600px",
                    borderRadius: "10px",
                    background: "white",
                    marginBottom: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      type: "table",
                      height: "600px",
                      isPagination: true,
                      style: {
                        width: "100%",
                        height: "600px",
                        marginTop: "50px",
                        background: "#FFF"
                      },
                      columns: [
                        { prop: "A", label: "批发商" },
                        { prop: "B", label: "总体占比" },
                        { prop: "C", label: "毛利" },
                        { prop: "D", label: "汽油" },
                        { prop: "E", label: "柴油" },
                        { prop: "F", label: "总量(吨)" }
                      ],
                      tableData: [
                        {
                          A: "批发商11",
                          B: "8%",
                          C: "8%",
                          D: "8%",
                          E: "8%",
                          F: "110000"
                        },
                        {
                          A: "批发商12",
                          B: "8%",
                          C: "8%",
                          D: "8%",
                          E: "8%",
                          F: "120000"
                        },
                        {
                          A: "批发商13",
                          B: "8%",
                          C: "8%",
                          D: "8%",
                          E: "8%",
                          F: "130000"
                        },
                        {
                          A: "批发商14",
                          B: "8%",
                          C: "8%",
                          D: "8%",
                          E: "8%",
                          F: "140000"
                        }
                      ]
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
        },
        {
          id: "profit",
          name: "加油站分布",
          icon: require("../../assets/energy/3.png"),
          iconActive: require("../../assets/energy/4.png"),
          collapseItem: [
            {
              id: "profit_2020",
              collapseTitle: "2020年加油站分布",
              EChartsBox: [
                {
                  title: "展示加油站展示油库",
                  time: false,
                  select: false,
                  timeValue: "",
                  selectValue: "",
                  style: {
                    width: "100%",
                    height: "600px",
                    borderRadius: "10px",
                    background: "white",
                    marginBottom: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      type: "map",
                      style: {
                        width: "100%",
                        height: "600px",
                        background: "#fff"
                      }
                    }
                  ]
                },
                {
                  title: "加油站个数",
                  time: true,
                  select: false,
                  timeValue: "",
                  selectValue: "",
                  /*包裹ECharts的父级元素的属性*/
                  style: {
                    width: "100%",
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
                        width: "60%",
                        height: "450px"
                      },
                      option: {
                        title: { text: "", top: 20, left: "5%" },
                        grid: {
                          top: "20%",

                          bottom: "20%" //图表尺寸大小
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
                        tooltip: {
                          trigger: "item"
                          // formatter: '{a} <br/>{b}: {c} ({d}%)'
                        },
                        yAxis: {
                          type: "value"
                        },
                        series: [
                          {
                            data: [120, 200, 150, 80, 70, 110, 130],
                            type: "bar",
                            showBackground: true,
                            backgroundStyle: {
                              color: "rgba(220, 220, 220, 0.8)"
                            }
                          }
                        ]
                      }
                    },
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "39%",
                        height: "450px"
                      },
                      option: {
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}: {c} ({d}%)"
                        },
                        legend: {
                          left: "center",
                          bottom: "12%",
                          data: ["自营", "承包", "非自营"]
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
                            itemStyle: {
                              color: params => {
                                let colorList = [
                                  "#58D5FF",
                                  "#73ACFF",
                                  "#FDD56A",
                                  "#FDB36A",
                                  "#FD866A",
                                  "#9E87FF"
                                ];
                                return colorList[params.dataIndex];
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
                              { value: 335, name: "自营" },
                              { value: 310, name: "承包" },
                              { value: 234, name: "非自营" }
                            ]
                          },
                          {
                            name: "",
                            type: "pie",
                            radius: ["30%", "50%"],
                            avoidLabelOverlap: false,
                            itemStyle: {
                              color: params => {
                                let colorList = [
                                  "#58D5FF",
                                  "#73ACFF",
                                  "#FDD56A",
                                  "#FDB36A",
                                  "#FD866A",
                                  "#9E87FF"
                                ];
                                return colorList[params.dataIndex];
                              }
                            },
                            label: {
                              show: false,
                              position: "center"
                            },
                            emphasis: {
                              label: {
                                show: true,
                                fontSize: "30",
                                fontWeight: "bold"
                              }
                            },
                            labelLine: {
                              show: false
                            },
                            data: [
                              { value: 335, name: "自营" },
                              { value: 310, name: "承包" },
                              { value: 234, name: "非自营" }
                            ]
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
              id: "profit_2019",
              collapseTitle: "2019年加油站分布",
              EChartsBox: [
                {
                  title: "展示加油站展示油库",
                  time: false,
                  select: false,
                  timeValue: "",
                  selectValue: "",
                  style: {
                    width: "100%",
                    height: "600px",
                    borderRadius: "10px",
                    background: "white",
                    marginBottom: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      type: "map",
                      style: {
                        width: "100%",
                        height: "600px",
                        background: "#fff"
                      }
                    }
                  ]
                },
                {
                  title: "加油站个数",
                  time: true,
                  select: false,
                  timeValue: "",
                  selectValue: "",
                  /*包裹ECharts的父级元素的属性*/
                  style: {
                    width: "100%",
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
                        width: "60%",
                        height: "450px"
                      },
                      option: {
                        title: { text: "", top: 20, left: "5%" },
                        grid: {
                          top: "20%",

                          bottom: "20%" //图表尺寸大小
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
                        tooltip: {
                          trigger: "item"
                          // formatter: '{a} <br/>{b}: {c} ({d}%)'
                        },
                        yAxis: {
                          type: "value"
                        },
                        series: [
                          {
                            data: [120, 200, 150, 80, 70, 110, 130],
                            type: "bar",
                            showBackground: true,
                            backgroundStyle: {
                              color: "rgba(220, 220, 220, 0.8)"
                            }
                          }
                        ]
                      }
                    },
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "39%",
                        height: "450px"
                      },
                      option: {
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}: {c} ({d}%)"
                        },
                        legend: {
                          left: "center",
                          bottom: "12%",
                          data: ["自营", "承包", "非自营"]
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
                            itemStyle: {
                              color: params => {
                                let colorList = [
                                  "#58D5FF",
                                  "#73ACFF",
                                  "#FDD56A",
                                  "#FDB36A",
                                  "#FD866A",
                                  "#9E87FF"
                                ];
                                return colorList[params.dataIndex];
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
                              { value: 335, name: "自营" },
                              { value: 310, name: "承包" },
                              { value: 234, name: "非自营" }
                            ]
                          },
                          {
                            name: "",
                            type: "pie",
                            radius: ["30%", "50%"],
                            avoidLabelOverlap: false,
                            itemStyle: {
                              color: params => {
                                let colorList = [
                                  "#58D5FF",
                                  "#73ACFF",
                                  "#FDD56A",
                                  "#FDB36A",
                                  "#FD866A",
                                  "#9E87FF"
                                ];
                                return colorList[params.dataIndex];
                              }
                            },
                            label: {
                              show: false,
                              position: "center"
                            },
                            emphasis: {
                              label: {
                                show: true,
                                fontSize: "30",
                                fontWeight: "bold"
                              }
                            },
                            labelLine: {
                              show: false
                            },
                            data: [
                              { value: 335, name: "自营" },
                              { value: 310, name: "承包" },
                              { value: 234, name: "非自营" }
                            ]
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
              id: "profit_gd",
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
    selectionChange(v) {
      this.$router.push("/energy/JYZXiangQing");
    }
  },
  mounted() {
    this.$refs["collapse"].initECharts(this.collapseData);
  },
  watch: {
    viewChange() {
      this.$refs["collapse"].refresh(this.collapseData);
    }
  }
};
</script>

<style scoped></style>
