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
  name: "revenue",
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
          id: "rateofreturn",
          name: "回款",
          icon: require("../../../assets/business/icon_6-1.png"),
          iconActive: require("../../../assets/business/icon_6-2.png"),
          collapseItem: [
            {
              id: "rateofreturn_2020",
              year: 2020,
              collapseTitle: "2020回款率",
              EChartsBox: [
                {
                  title: "回款率",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "33%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      isTitle: true,
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "300px"
                      },
                      option: {
                        tooltip: {
                          trigger: "axis",
                          axisPointer: {
                            lineStyle: {
                              color: {
                                type: "linear",
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                  {
                                    offset: 0,
                                    color: "rgba(0, 255, 233,0)"
                                  },
                                  {
                                    offset: 0.5,
                                    color: "rgba(0, 0, 0,1)"
                                  },
                                  {
                                    offset: 1,
                                    color: "rgba(0, 255, 233,0)"
                                  }
                                ],
                                global: false
                              }
                            }
                          },
                          formatter: function(val) {
                            return (
                              val[0].name +
                              ":<br>" +
                              val[0].seriesName +
                              ":" +
                              val[0].value +
                              "%<br>" +
                              val[1].seriesName +
                              ":" +
                              val[1].value +
                              "%"
                            );
                          }
                        },
                        xAxis: {
                          splitLine: {
                            show: false
                          },
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
                        legend: {
                          data: ["整体回款率", "服务区回款率"]
                        },
                        yAxis: {
                          name: "%",
                          nameTextStyle: {
                            color: "#000"
                          },
                          splitLine: {
                            show: false
                          },
                          type: "value"
                        },
                        series: [
                          {
                            name: "服务区回款率",
                            data: [
                              22,
                              18,
                              19,
                              23,
                              29,
                              33,
                              31,
                              20,
                              15,
                              19,
                              33,
                              41
                            ],
                            type: "line"
                          },
                          {
                            name: "整体回款率",
                            data: [
                              52,
                              38,
                              29,
                              53,
                              49,
                              43,
                              81,
                              40,
                              65,
                              49,
                              53,
                              71
                            ],
                            type: "line"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "回款金额排行",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "33%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      isbar: true,
                      style: {
                        width: "100%",
                        height: "300px"
                      },
                      option: {
                        tooltip: {
                          trigger: "axis",
                          axisPointer: {
                            type: "shadow"
                          },
                          formatter: "{b}<br>金额:{c}万元"
                        },
                        grid: {
                          left: "3%",
                          right: "10%",
                          bottom: "10%",
                          top: "10%",
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
                            "湖北长江路桥股份有限公司枣潜高速公路第七标段项目经理部",
                            "应收稻谷款(加工厂)",
                            "应收大米款（加工厂）",
                            "茂名市金瑞粮油贸易有限公司",
                            "湖北省羊肚菌农业科技有限公司"
                          ]
                        },
                        series: [
                          {
                            type: "bar",
                            label: {
                              show: true,
                              position: "insideLeft",
                              color: "#000",
                              formatter: "{b}"
                            },
                            data: (function() {
                              let data = [
                                29348333.33,
                                33032530.21,
                                35496337.3,
                                49985731.14,
                                87860562.51
                              ];
                              let datas = [];
                              data.forEach(element => {
                                datas.push((element / 10000).toFixed(2));
                              });
                              return datas;
                            })(),
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
                  title: "回款超期",
                  style: {
                    width: "33%",
                    height: "350px",
                    borderRadius: "10px",
                    background: "white",
                    marginBottom: "5px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      type: "table",
                      height: "470px",
                      isPagination: false,
                      border: true,
                      style: {
                        width: "100%",
                        height: "330px",
                        background: "#fff"
                      },
                      columns: [
                        {
                          prop: "A",
                          label: "供应商",
                          width: "220"
                        },
                        {
                          prop: "B",
                          label: "回款时间"
                        },
                        {
                          prop: "C",
                          label: "超期时间"
                        },
                        {
                          prop: "D",
                          label: "金额(元)",
                          width: "120"
                        }
                      ],
                      tableData: [
                        {
                          A: "应收大米款（加工厂）",
                          B: "2020-9-4",
                          C: "21天",
                          D: "35496337.3"
                        },
                        {
                          A: "茂名市金瑞粮油贸易有限公司",
                          B: "2020-9-3",
                          C: "20天",
                          D: "49985731.14"
                        },
                        {
                          A: "湖北省羊肚菌农业科技有限公司",
                          B: "2020-9-5",
                          C: "15天",
                          D: "87860562.51"
                        },
                        // {
                        //   A: "湖北长江路桥股份有限公司枣潜高速公路第七标段项目经理部",
                        //   B: "2020-9-3",
                        //   C: "12天",
                        //   D: "29348333.33"
                        // },
                        {
                          A: "应收稻谷款(加工厂)",
                          B: "2020-9-2",
                          C: "10天",
                          D: "33032530.21"
                        }
                      ]
                    }
                  ]
                },

                {
                  title: "预计收款",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "49.5%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginTop: "10px"
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
                        title: {
                          text: ""
                        },
                        tooltip: {
                          //提示框组件
                          trigger: "axis",
                          formatter: function(val) {
                            let val0 = val[0];
                            let val1 = val[1];
                            return (
                              val0.name +
                              ":<br>" +
                              val0.seriesName +
                              ":" +
                              val0.value.toFixed(2) +
                              "万元<br>" +
                              val1.seriesName +
                              ":" +
                              val1.value.toFixed(2) +
                              "万元"
                            );
                          },
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
                          top: "1%",
                          textStyle: {
                            color: "#a4a8b4"
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
                              // textStyle: {
                              //     color: "#c8c9c9",
                              //     fontStyle: "normal",
                              //     fontFamily: "微软雅黑",
                              //     fontSize: 12,
                              // },
                              // rotate: 50,
                            },
                            axisTick: {
                              //坐标轴刻度相关设置。
                              show: true
                            },
                            axisLine: {
                              //坐标轴轴线相关设置
                              lineStyle: {
                                // color: "#c8c9c9",
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
                            name: "万元",
                            nameTextStyle: {
                              color: "#000"
                            },
                            splitNumber: 5,
                            // axisLabel: {
                            //     textStyle: {
                            //         // color: "#c8c9c9",
                            //         fontStyle: "normal",
                            //         fontFamily: "微软雅黑",
                            //         fontSize: 12,
                            //     },
                            // },
                            axisLine: {
                              show: true
                            },
                            axisTick: {
                              show: true
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
                              6200,
                              8000,
                              8000,
                              6200,
                              6000,
                              5500,
                              4500,
                              3000,
                              1500,
                              1060,
                              5500,
                              4500,
                              3000,
                              1500,
                              1000
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
                              2200,
                              3000,
                              5000,
                              3200,
                              4000,
                              3500,
                              3500,
                              1000,
                              500,
                              900,
                              2500,
                              3500,
                              2200,
                              1500,
                              500
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
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "回款占比",
                  time: false,
                  select: false,
                  style: {
                    width: "49.5%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginTop: "10px"
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
                            text: "",
                            // top: 15,
                            // left: 20,
                            x: "36%",
                            y: "47%",
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
                          orient: "vertical",
                          right: "10%",
                          top: "20%"
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}: {c}万元 ({d}%)"
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["40%", "50%"],
                            radius: ["35%", "55%"],
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
                  title: "回款率",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "33%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      isTitle: true,
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "300px"
                      },
                      option: {
                        tooltip: {
                          trigger: "axis",
                          axisPointer: {
                            lineStyle: {
                              color: {
                                type: "linear",
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                  {
                                    offset: 0,
                                    color: "rgba(0, 255, 233,0)"
                                  },
                                  {
                                    offset: 0.5,
                                    color: "rgba(0, 0, 0,1)"
                                  },
                                  {
                                    offset: 1,
                                    color: "rgba(0, 255, 233,0)"
                                  }
                                ],
                                global: false
                              }
                            }
                          },
                          formatter: function(val) {
                            return (
                              val[0].name +
                              ":<br>" +
                              val[0].seriesName +
                              ":" +
                              val[0].value +
                              "%<br>" +
                              val[1].seriesName +
                              ":" +
                              val[1].value +
                              "%"
                            );
                          }
                        },
                        xAxis: {
                          splitLine: {
                            show: false
                          },
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
                        legend: {
                          data: ["整体回款率", "服务区回款率"]
                        },
                        yAxis: {
                          name: "%",
                          nameTextStyle: {
                            color: "#000"
                          },
                          splitLine: {
                            show: false
                          },
                          type: "value"
                        },
                        series: [
                          {
                            name: "服务区回款率",
                            data: [
                              80,
                              14,
                              39,
                              73,
                              19,
                              53,
                              91,
                              50,
                              45,
                              69,
                              13,
                              71
                            ],
                            type: "line"
                          },
                          {
                            name: "整体回款率",
                            data: [
                              90,
                              34,
                              59,
                              83,
                              49,
                              73,
                              93,
                              65,
                              55,
                              79,
                              33,
                              81
                            ],
                            type: "line"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "回款金额排行",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "33%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      isbar: true,
                      style: {
                        width: "100%",
                        height: "300px"
                      },
                      option: {
                        tooltip: {
                          trigger: "axis",
                          axisPointer: {
                            type: "shadow"
                          },
                          formatter: "{b}<br>金额:{c}万元"
                        },
                        grid: {
                          left: "3%",
                          right: "10%",
                          bottom: "10%",
                          top: "10%",
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
                            "湖北长江路桥股份有限公司枣潜高速公路第七标段项目经理部",
                            "应收稻谷款(加工厂)",
                            "应收大米款（加工厂）",
                            "茂名市金瑞粮油贸易有限公司",
                            "湖北省羊肚菌农业科技有限公司"
                          ]
                        },
                        series: [
                          {
                            type: "bar",
                            label: {
                              show: true,
                              position: "insideLeft",
                              color: "#000",
                              formatter: "{b}"
                            },
                            data: (function() {
                              let data = [
                                29348333.33,
                                33032530.21,
                                35496337.3,
                                49985731.14,
                                87860562.51
                              ];
                              let datas = [];
                              data.forEach(element => {
                                datas.push((element / 10000).toFixed(2));
                              });
                              return datas;
                            })(),
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
                  title: "回款超期",
                  style: {
                    width: "33%",
                    height: "350px",
                    borderRadius: "10px",
                    background: "white",
                    marginBottom: "5px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      type: "table",
                      height: "470px",
                      isPagination: false,
                      border: true,
                      style: {
                        width: "100%",
                        height: "330px",
                        background: "#fff"
                      },
                      columns: [
                        {
                          prop: "A",
                          label: "供应商",
                          width: "220"
                        },
                        {
                          prop: "B",
                          label: "回款时间"
                        },
                        {
                          prop: "C",
                          label: "超期时间"
                        },
                        {
                          prop: "D",
                          label: "金额(元)",
                          width: "120"
                        }
                      ],
                      tableData: [
                        {
                          A: "应收大米款（加工厂）",
                          B: "2020-9-4",
                          C: "21天",
                          D: "35496337.3"
                        },
                        {
                          A: "茂名市金瑞粮油贸易有限公司",
                          B: "2020-9-3",
                          C: "20天",
                          D: "49985731.14"
                        },
                        {
                          A: "湖北省羊肚菌农业科技有限公司",
                          B: "2020-9-5",
                          C: "15天",
                          D: "87860562.51"
                        },
                        // {
                        //   A: "湖北长江路桥股份有限公司枣潜高速公路第七标段项目经理部",
                        //   B: "2020-9-3",
                        //   C: "12天",
                        //   D: "29348333.33"
                        // },
                        {
                          A: "应收稻谷款(加工厂)",
                          B: "2020-9-2",
                          C: "10天",
                          D: "33032530.21"
                        }
                      ]
                    }
                  ]
                },

                {
                  title: "预计收款",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "49.5%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginTop: "10px"
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
                        title: {
                          text: ""
                        },
                        tooltip: {
                          //提示框组件
                          trigger: "axis",
                          formatter: function(val) {
                            let val0 = val[0];
                            let val1 = val[1];
                            return (
                              val0.name +
                              ":<br>" +
                              val0.seriesName +
                              ":" +
                              val0.value.toFixed(2) +
                              "万元<br>" +
                              val1.seriesName +
                              ":" +
                              val1.value.toFixed(2) +
                              "万元"
                            );
                          },
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
                          top: "1%",
                          textStyle: {
                            color: "#a4a8b4"
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
                              // textStyle: {
                              //     color: "#c8c9c9",
                              //     fontStyle: "normal",
                              //     fontFamily: "微软雅黑",
                              //     fontSize: 12,
                              // },
                              // rotate: 50,
                            },
                            axisTick: {
                              //坐标轴刻度相关设置。
                              show: true
                            },
                            axisLine: {
                              //坐标轴轴线相关设置
                              lineStyle: {
                                // color: "#c8c9c9",
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
                            name: "万元",
                            nameTextStyle: {
                              color: "#000"
                            },
                            splitNumber: 5,
                            // axisLabel: {
                            //     textStyle: {
                            //         // color: "#c8c9c9",
                            //         fontStyle: "normal",
                            //         fontFamily: "微软雅黑",
                            //         fontSize: 12,
                            //     },
                            // },
                            axisLine: {
                              show: true
                            },
                            axisTick: {
                              show: true
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
                              8200,
                              5000,
                              5000,
                              3200,
                              4000,
                              9500,
                              5500,
                              5000,
                              6500,
                              7060,
                              2500,
                              3500,
                              2000,
                              5500,
                              3000
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
                              7200,
                              4000,
                              3000,
                              2200,
                              3000,
                              7500,
                              4500,
                              4000,
                              3500,
                              2060,
                              1500,
                              2500,
                              500,
                              2500,
                              1000
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
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "回款占比",
                  time: false,
                  select: false,
                  style: {
                    width: "49.5%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginTop: "10px"
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
                            text: "",
                            // top: 15,
                            // left: 20,
                            x: "36%",
                            y: "47%",
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
                          orient: "vertical",
                          right: "10%",
                          top: "20%"
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}: {c}万元 ({d}%)"
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["40%", "50%"],
                            radius: ["35%", "55%"],
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
  },
  watch: {
    viewChange() {
      this.$refs["collapse"].refresh(this.collapseData);
    }
  }
};
</script>
