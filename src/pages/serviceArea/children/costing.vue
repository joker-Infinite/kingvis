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
          id: "cost",
          name: "成本",
          icon: require("../../../assets/business/icon_3-1.png"),
          iconActive: require("../../../assets/business/icon_3-2.png"),
          collapseItem: [
            {
              id: "cost_2020",
              year: 2020,
              collapseTitle: "2020年成本",
              allQuery: false,
              allQueryData: {
                input: false,
                select: false,
                time: false
              },
              EChartsBox: [
                {
                  title: "实际成本",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "40%",
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
                        height: "330px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        dataZoom: [
                          {
                            type: "inside"
                          },
                          {
                            type: "slider"
                          }
                        ],
                        tooltip: {
                          trigger: "axis",
                          formatter: function(val) {
                            return (
                              val[0].name +
                              "月" +
                              ":" +
                              "<br>成本:" +
                              val[0].value / 10000 +
                              "万元"
                            );
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
                              formatter: function(value) {
                                return value / 10000;
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
                  title: "成本占比",
                  istime: true,
                  select: false,
                  query: {
                    inputValue: "",
                    selectValue: "",
                    timeValue: ""
                  },
                  style: {
                    width: "59.5%",
                    height: "400px",
                    background: "white",
                    borderRadius: "10px",
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
                        title: { text: "" },
                        grid: {
                          top: "20%",
                          right: "40",
                          left: "0",
                          bottom: "40" //图表尺寸大小
                        },
                        legend: {
                          orient: "vertical",
                          top: "center",
                          right: 10
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: function(val) {
                            return (
                              val.name +
                              ":<br>利润:" +
                              (val.value / 10000).toFixed(2) +
                              "万元<br>占比:" +
                              val.percent +
                              "%"
                            );
                          }
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["40%", "50%"],
                            radius: ["30%", "50%"],
                            clockwise: true,
                            avoidLabelOverlap: true,
                            hoverOffset: 15,
                            itemStyle: {
                              normal: {
                                // 设置扇形的阴影
                                // shadowBlur: 30,
                                // shadowColor: "rgba(0,0,0,0.3)",
                                // shadowOffsetX: -5,
                                // shadowOffsetY: 5,
                                color: function(v) {
                                  let colorList = [
                                    "#06d3c4",
                                    "#9e87ff",
                                    "#7ebdff",
                                    "#fdd36a",
                                    "#fdb36a",
                                    "#fd866a"
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
                                  // let text = v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 14
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                length: 10,
                                length2: 25,
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              { name: "其他", value: 11154551 },
                              { name: "餐饮", value: 54125877 },
                              { name: "超市", value: 65478254 },
                              { name: "品牌餐饮", value: 69874512 },
                              { name: "小吃", value: 12054890 }
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
                        title: { text: "" },
                        tooltip: {
                          trigger: "item",
                          formatter: function(val) {
                            return (
                              val.name +
                              ":<br>利润:" +
                              (val.value / 10000).toFixed(2) +
                              "万元<br>占比:" +
                              val.percent +
                              "%"
                            );
                          }
                        },
                        legend: {
                          orient: "vertical",
                          top: "center",
                          right: 10
                        },
                        series: [
                          {
                            type: "pie",
                            minAngle: 5, //最小的扇区角度（0 ~ 360），用于防止某个值过小导致扇区太小影响交互
                            avoidLabelOverlap: true, //是否启用防止标签重叠策略
                            center: ["45%", "50%"],
                            radius: ["30%", "50%"],
                            clockwise: true,
                            hoverOffset: 20,
                            itemStyle: {
                              normal: {
                                // 设置扇形的阴影
                                // shadowBlur: 30,
                                // shadowColor: "rgba(0,0,0,0.3)",
                                // shadowOffsetX: -5,
                                // shadowOffsetY: 5,
                                color: function(v) {
                                  let colorList = [
                                    "#3cb8fe",
                                    "#73abf8",
                                    "#cb9bff",
                                    "#fdb36a",
                                    "#ff9393",
                                    "#95a2ff"
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
                                  // let text = v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 14
                                }
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
                              { name: "咸宁中心", value: 5114551 },
                              { name: "宜昌中心", value: 2412577 },
                              { name: "黄冈中心", value: 3547824 },
                              { name: "十堰中心", value: 9987512 },
                              { name: "孝感中心", value: 8657941 },
                              { name: "恩施中心", value: 1205890 }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "公司种类预算控制",
                  time: false,
                  select: false,
                  style: {
                    width: "40%",
                    height: "400px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginTop: "5px"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      isbar: false,
                      isShow:true,
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
                              ":<br>实际:" +
                              (val[0].value / 10000).toFixed(2) +
                              "万元" +
                              "<br>预算:" +
                              (val[1].value / 10000).toFixed(2) +
                              "万元" +
                              "<br>" +
                              "执行率:" +
                              val[2].value +
                              "%"
                            );
                          }
                        },
                        grid: {
                          left: "3%",
                          right: "10%",
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
                            "办公费",
                            "交通",
                            "误餐费",
                            "业务招待费",
                            "差旅费"
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
                                show: false,
                                color: "#fff",
                                position: "insideRight"
                              }
                            },
                            z: 10,
                            data: [0, 34100, 81600, 523600, 866400]
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
                                show: false,
                                color: "#000",
                                position: "insideRight"
                              }
                            },
                            z: 5,
                            data: [0, 21700, 10500, 282600, 609900]
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
                                formatter: function(params) {
                                  return params.value + "%";
                                }
                              }
                            },
                            z: 5,
                            data: ["0", "63.78", "12.90", "53.97", "70.40"]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "种类预算占比",
                  time: false,
                  select: false,
                  style: {
                    width: "59.5%",
                    height: "400px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginTop: "5px"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "50%",
                        height: "350px"
                      },
                      option: {
                        color: [
                          "#ff9999",
                          "#ffb03f",
                          "#ff9b42",
                          "#3dba2d",
                          "#F0D418",
                          "#2E64FF"
                        ],
                        tooltip: {},
                        formatter: function(val) {
                          if (!val.data.id) {
                            return (
                              val.name +
                              ":<br>实际:" +
                              val.value +
                              "万元<br>占比:" +
                              val.percent +
                              "%"
                            );
                          } else {
                            let datas = val.name + ":<br>";
                            val.data.id.forEach((item, index) => {
                              datas +=
                                item.name + ":" + item.value + "万元<br>";
                            });
                            return datas;
                          }
                        },
                        radar: {
                          zlevel: 11,
                          shape: "circle",
                          scale: true,
                          indicator: [
                            {
                              name: "差旅费"
                            },
                            {
                              name: "业务招待费"
                            },
                            {
                              name: "误餐费"
                            },
                            {
                              name: "交通"
                            }
                          ],
                          center: ["50%", "50%"],
                          radius: "40%",
                          startAngle: 40,
                          name: {
                            show: true,
                            color: "transparent"
                          },
                          axisLine: {
                            show: true,
                            lineStyle: {
                              color: "rgba(32,126,255, .5)"
                              // opacity: 0.2
                            }
                          },
                          splitLine: {
                            lineStyle: {
                              color: "rgba(32,126,255, .5)"
                              // opacity: 0.2
                            }
                          },
                          splitArea: {
                            areaStyle: {
                              color: "rgba(32,126,255, 0.1)"
                            }
                          }
                        },
                        polar: {
                          radius: "40%"
                        },
                        angleAxis: {
                          zlevel: 0,
                          min: 0,
                          max: 360,
                          interval: 5,
                          clockwise: false,
                          axisTick: {
                            show: false
                          },
                          axisLabel: {
                            show: false
                          },
                          axisLine: {
                            show: false
                          },
                          splitLine: {
                            show: false
                          }
                        },
                        radiusAxis: {
                          zlevel: 0,
                          min: 0,
                          max: 100,
                          axisLabel: {
                            textStyle: {
                              color: "rgba(29,208,240,0)"
                            }
                          },
                          axisLine: {
                            show: false
                          },
                          splitLine: {
                            show: false
                          },
                          splitArea: {
                            show: false
                          }
                        },
                        series: [
                          {
                            type: "pie",
                            data: [
                              {
                                value: 86.64,
                                name: "差旅费"
                              },
                              {
                                value: 52.36,
                                name: "业务招待费"
                              },
                              {
                                value: 8.16,
                                name: "误餐费"
                              },
                              {
                                value: 3.41,
                                name: "交通"
                              }
                            ],
                            radius: ["45%", "55%"],
                            zlevel: -1,
                            name: "",
                            itemStyle: {
                              normal: {
                                // borderColor: 'white'
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
                                  // let text = v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 14
                                }
                              }
                            }
                          },
                          {
                            type: "radar",
                            data: [
                              {
                                value: [86.64, 52.36, 8.16, 3.41],
                                name: "指数",
                                id: [
                                  {
                                    value: 86.64,
                                    name: "差旅费"
                                  },
                                  {
                                    value: 52.36,
                                    name: "业务招待费"
                                  },
                                  {
                                    value: 8.16,
                                    name: "误餐费"
                                  },
                                  {
                                    value: 3.41,
                                    name: "交通"
                                  }
                                ],
                                max: 100,
                                //   label:{
                                //       show:true,
                                //   },
                                areaStyle: {
                                  normal: {
                                    color: {
                                      type: "radial",
                                      x: 0.5,
                                      y: 0.5,
                                      r: 0.5,
                                      colorStops: [
                                        {
                                          offset: 0,
                                          color: "rgba(32,126,255, 0.5)" // 0% 处的颜色
                                        },
                                        {
                                          offset: 1,
                                          color: "rgba(32,126,255, 0.1)" // 100% 处的颜色
                                        }
                                      ],
                                      global: false // 缺省为 false
                                    }
                                  }
                                }
                              }
                            ],
                            zlevel: 2,
                            z: 4
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
                        color: [
                          "#ff9999",
                          "#ffb03f",
                          "#ff9b42",
                          "#3dba2d",
                          "#F0D418",
                          "#2E64FF"
                        ],
                        tooltip: {},
                        formatter: function(val) {
                          if (!val.data.id) {
                            return (
                              val.name +
                              ":<br>实际:" +
                              val.value +
                              "万元<br>占比:" +
                              val.percent +
                              "%"
                            );
                          } else {
                            let datas = val.name + ":<br>";
                            val.data.id.forEach((item, index) => {
                              datas +=
                                item.name + ":" + item.value + "万元<br>";
                            });
                            return datas;
                          }
                        },
                        radar: {
                          zlevel: 11,
                          shape: "circle",
                          scale: true,
                          indicator: [
                            {
                              name: "差旅费"
                            },
                            {
                              name: "业务招待费"
                            },
                            {
                              name: "误餐费"
                            },
                            {
                              name: "交通"
                            }
                          ],
                          center: ["50%", "50%"],
                          radius: "40%",
                          startAngle: 40,
                          name: {
                            show: true,
                            color: "transparent"
                          },
                          axisLine: {
                            show: true,
                            lineStyle: {
                              color: "rgba(32,126,255, .5)"
                              // opacity: 0.2
                            }
                          },
                          splitLine: {
                            lineStyle: {
                              color: "rgba(32,126,255, .5)"
                              // opacity: 0.2
                            }
                          },
                          splitArea: {
                            areaStyle: {
                              color: "rgba(32,126,255, 0.1)"
                            }
                          }
                        },
                        polar: {
                          radius: "40%"
                        },
                        angleAxis: {
                          zlevel: 0,
                          min: 0,
                          max: 360,
                          interval: 5,
                          clockwise: false,
                          axisTick: {
                            show: false
                          },
                          axisLabel: {
                            show: false
                          },
                          axisLine: {
                            show: false
                          },
                          splitLine: {
                            show: false
                          }
                        },
                        radiusAxis: {
                          zlevel: 0,
                          min: 0,
                          max: 100,
                          axisLabel: {
                            textStyle: {
                              color: "rgba(29,208,240,0)"
                            }
                          },
                          axisLine: {
                            show: false
                          },
                          splitLine: {
                            show: false
                          },
                          splitArea: {
                            show: false
                          }
                        },
                        series: [
                          {
                            type: "pie",
                            data: [
                              {
                                value: 60.99,
                                name: "差旅费"
                              },
                              {
                                value: 28.26,
                                name: "业务招待费"
                              },
                              {
                                value: 1.05,
                                name: "误餐费"
                              },
                              {
                                value: 2.17,
                                name: "交通"
                              }
                            ],
                            radius: ["45%", "55%"],
                            zlevel: -1,
                            name: "",
                            itemStyle: {
                              normal: {
                                // borderColor: 'white'
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
                                  // let text = v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 14
                                }
                              }
                            }
                          },
                          {
                            type: "radar",
                            data: [
                              {
                                value: [60.99, 28.26, 1.05, 2.17],
                                name: "指数",
                                id: [
                                  { value: 60.99, name: "差旅费" },
                                  { value: 28.26, name: "业务招待费" },
                                  { value: 1.05, name: "误餐费" },
                                  { value: 2.17, name: "交通" }
                                ],
                                max: 100,
                                //   label:{
                                //       show:true,
                                //   },
                                areaStyle: {
                                  normal: {
                                    color: {
                                      type: "radial",
                                      x: 0.5,
                                      y: 0.5,
                                      r: 0.5,
                                      colorStops: [
                                        {
                                          offset: 0,
                                          color: "rgba(32,126,255, 0.5)" // 0% 处的颜色
                                        },
                                        {
                                          offset: 1,
                                          color: "rgba(32,126,255, 0.1)" // 100% 处的颜色
                                        }
                                      ],
                                      global: false // 缺省为 false
                                    }
                                  }
                                }
                              }
                            ],
                            zlevel: 2,
                            z: 4
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
              allQuery: false,
              allQueryData: {
                input: false,
                select: false,
                time: false
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
                        height: "280px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        dataZoom: [
                          {
                            type: "inside"
                          },
                          {
                            type: "slider"
                          }
                        ],
                        tooltip: {
                          trigger: "axis",
                          formatter: function(val) {
                            return (
                              val[0].name +
                              "月" +
                              ":" +
                              "<br>成本:" +
                              val[0].value / 10000 +
                              "万元"
                            );
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
                            name: "月",
                            nameTextStyle: {
                              color: "#000"
                            },
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
                            name: "万元",
                            nameTextStyle: {
                              color: "#000"
                            },
                            axisLabel: {
                              formatter: function(value) {
                                return value / 10000;
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
                  title: "成本占比",
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
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "50%",
                        height: "300px"
                      },
                      option: {
                        title: { text: "" },
                        grid: {
                          top: "20%",
                          right: "40",
                          left: "0",
                          bottom: "40" //图表尺寸大小
                        },
                        legend: {
                          orient: "vertical",
                          top: "center",
                          right: 10
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: function(val) {
                            return (
                              val.name +
                              ":<br>利润:" +
                              (val.value / 10000).toFixed(2) +
                              "万元<br>占比:" +
                              val.percent +
                              "%"
                            );
                          }
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["40%", "50%"],
                            radius: ["30%", "50%"],
                            clockwise: true,
                            avoidLabelOverlap: true,
                            hoverOffset: 15,
                            itemStyle: {
                              normal: {
                                // 设置扇形的阴影
                                // shadowBlur: 30,
                                // shadowColor: "rgba(0,0,0,0.3)",
                                // shadowOffsetX: -5,
                                // shadowOffsetY: 5,
                                color: function(v) {
                                  let colorList = [
                                    "#06d3c4",
                                    "#9e87ff",
                                    "#7ebdff",
                                    "#fdd36a",
                                    "#fdb36a",
                                    "#fd866a"
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
                                  // let text = v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 14
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                length: 10,
                                length2: 25,
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              { name: "其他", value: 15154551 },
                              { name: "餐饮", value: 94125877 },
                              { name: "超市", value: 15478254 },
                              { name: "品牌餐饮", value: 49874512 },
                              { name: "小吃", value: 62054890 }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "50%",
                        height: "300px"
                      },
                      option: {
                        title: { text: "" },
                        tooltip: {
                          trigger: "item",
                          formatter: function(val) {
                            return (
                              val.name +
                              ":<br>利润:" +
                              (val.value / 10000).toFixed(2) +
                              "万元<br>占比:" +
                              val.percent +
                              "%"
                            );
                          }
                        },
                        legend: {
                          orient: "vertical",
                          top: "center",
                          right: 10
                        },
                        series: [
                          {
                            type: "pie",
                            minAngle: 5, //最小的扇区角度（0 ~ 360），用于防止某个值过小导致扇区太小影响交互
                            avoidLabelOverlap: true, //是否启用防止标签重叠策略
                            center: ["45%", "50%"],
                            radius: ["30%", "50%"],
                            clockwise: true,
                            hoverOffset: 20,
                            itemStyle: {
                              normal: {
                                // 设置扇形的阴影
                                // shadowBlur: 30,
                                // shadowColor: "rgba(0,0,0,0.3)",
                                // shadowOffsetX: -5,
                                // shadowOffsetY: 5,
                                color: function(v) {
                                  let colorList = [
                                    "#3cb8fe",
                                    "#73abf8",
                                    "#cb9bff",
                                    "#fdb36a",
                                    "#ff9393",
                                    "#95a2ff"
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
                                  // let text = v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 14
                                }
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
                              { name: "咸宁中心", value: 2114551 },
                              { name: "宜昌中心", value: 9412577 },
                              { name: "黄冈中心", value: 6547824 },
                              { name: "十堰中心", value: 7987512 },
                              { name: "孝感中心", value: 2657941 },
                              { name: "恩施中心", value: 5205890 }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "公司种类预算控制",
                  time: false,
                  select: false,
                  style: {
                    width: "40%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginTop: "5px"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      isbar: false,
                      isShow:true,
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
                              ":<br>实际:" +
                              (val[0].value / 10000).toFixed(2) +
                              "万元" +
                              "<br>预算:" +
                              (val[1].value / 10000).toFixed(2) +
                              "万元" +
                              "<br>" +
                              "执行率:" +
                              val[2].value +
                              "%"
                            );
                          }
                        },
                        grid: {
                          left: "3%",
                          right: "10%",
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
                            "办公费",
                            "交通",
                            "误餐费",
                            "业务招待费",
                            "差旅费"
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
                                show: false,
                                color: "#fff",
                                position: "insideRight"
                              }
                            },
                            z: 10,
                            data: [0, 34100, 81600, 523600, 866400]
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
                                show: false,
                                color: "#000",
                                position: "insideRight"
                              }
                            },
                            z: 5,
                            data: [0, 21700, 10500, 282600, 609900]
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
                                formatter: function(params) {
                                  return params.value + "%";
                                }
                              }
                            },
                            z: 5,
                            data: ["0", "63.78", "12.90", "53.97", "70.40"]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "种类预算占比",
                  time: false,
                  select: false,
                  style: {
                    width: "59.5%",
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
                        width: "50%",
                        height: "300px"
                      },
                      option: {
                        color: [
                          "#ff9999",
                          "#ffb03f",
                          "#ff9b42",
                          "#3dba2d",
                          "#F0D418",
                          "#2E64FF"
                        ],
                        tooltip: {},
                        formatter: function(val) {
                          if (!val.data.id) {
                            return (
                              val.name +
                              ":<br>实际:" +
                              val.value +
                              "万元<br>占比:" +
                              val.percent +
                              "%"
                            );
                          } else {
                            let datas = val.name + ":<br>";
                            val.data.id.forEach((item, index) => {
                              datas +=
                                item.name + ":" + item.value + "万元<br>";
                            });
                            return datas;
                          }
                        },
                        radar: {
                          zlevel: 11,
                          shape: "circle",
                          scale: true,
                          indicator: [
                            {
                              name: "差旅费"
                            },
                            {
                              name: "业务招待费"
                            },
                            {
                              name: "误餐费"
                            },
                            {
                              name: "交通"
                            }
                          ],
                          center: ["50%", "50%"],
                          radius: "40%",
                          startAngle: 40,
                          name: {
                            show: true,
                            color: "transparent"
                          },
                          axisLine: {
                            show: true,
                            lineStyle: {
                              color: "rgba(32,126,255, .5)"
                              // opacity: 0.2
                            }
                          },
                          splitLine: {
                            lineStyle: {
                              color: "rgba(32,126,255, .5)"
                              // opacity: 0.2
                            }
                          },
                          splitArea: {
                            areaStyle: {
                              color: "rgba(32,126,255, 0.1)"
                            }
                          }
                        },
                        polar: {
                          radius: "40%"
                        },
                        angleAxis: {
                          zlevel: 0,
                          min: 0,
                          max: 360,
                          interval: 5,
                          clockwise: false,
                          axisTick: {
                            show: false
                          },
                          axisLabel: {
                            show: false
                          },
                          axisLine: {
                            show: false
                          },
                          splitLine: {
                            show: false
                          }
                        },
                        radiusAxis: {
                          zlevel: 0,
                          min: 0,
                          max: 100,
                          axisLabel: {
                            textStyle: {
                              color: "rgba(29,208,240,0)"
                            }
                          },
                          axisLine: {
                            show: false
                          },
                          splitLine: {
                            show: false
                          },
                          splitArea: {
                            show: false
                          }
                        },
                        series: [
                          {
                            type: "pie",
                            data: [
                              {
                                value: 86.64,
                                name: "差旅费"
                              },
                              {
                                value: 52.36,
                                name: "业务招待费"
                              },
                              {
                                value: 8.16,
                                name: "误餐费"
                              },
                              {
                                value: 3.41,
                                name: "交通"
                              }
                            ],
                            radius: ["45%", "55%"],
                            zlevel: -1,
                            name: "",
                            itemStyle: {
                              normal: {
                                // borderColor: 'white'
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
                                  // let text = v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 14
                                }
                              }
                            }
                          },
                          {
                            type: "radar",
                            data: [
                              {
                                value: [86.64, 52.36, 8.16, 3.41],
                                name: "指数",
                                id: [
                                  {
                                    value: 86.64,
                                    name: "差旅费"
                                  },
                                  {
                                    value: 52.36,
                                    name: "业务招待费"
                                  },
                                  {
                                    value: 8.16,
                                    name: "误餐费"
                                  },
                                  {
                                    value: 3.41,
                                    name: "交通"
                                  }
                                ],
                                max: 100,
                                //   label:{
                                //       show:true,
                                //   },
                                areaStyle: {
                                  normal: {
                                    color: {
                                      type: "radial",
                                      x: 0.5,
                                      y: 0.5,
                                      r: 0.5,
                                      colorStops: [
                                        {
                                          offset: 0,
                                          color: "rgba(32,126,255, 0.5)" // 0% 处的颜色
                                        },
                                        {
                                          offset: 1,
                                          color: "rgba(32,126,255, 0.1)" // 100% 处的颜色
                                        }
                                      ],
                                      global: false // 缺省为 false
                                    }
                                  }
                                }
                              }
                            ],
                            zlevel: 2,
                            z: 4
                          }
                        ]
                      }
                    },
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "50%",
                        height: "300px"
                      },
                      option: {
                        color: [
                          "#ff9999",
                          "#ffb03f",
                          "#ff9b42",
                          "#3dba2d",
                          "#F0D418",
                          "#2E64FF"
                        ],
                        tooltip: {},
                        formatter: function(val) {
                          if (!val.data.id) {
                            return (
                              val.name +
                              ":<br>实际:" +
                              val.value +
                              "万元<br>占比:" +
                              val.percent +
                              "%"
                            );
                          } else {
                            let datas = val.name + ":<br>";
                            val.data.id.forEach((item, index) => {
                              datas +=
                                item.name + ":" + item.value + "万元<br>";
                            });
                            return datas;
                          }
                        },
                        radar: {
                          zlevel: 11,
                          shape: "circle",
                          scale: true,
                          indicator: [
                            {
                              name: "差旅费"
                            },
                            {
                              name: "业务招待费"
                            },
                            {
                              name: "误餐费"
                            },
                            {
                              name: "交通"
                            }
                          ],
                          center: ["50%", "50%"],
                          radius: "40%",
                          startAngle: 40,
                          name: {
                            show: true,
                            color: "transparent"
                          },
                          axisLine: {
                            show: true,
                            lineStyle: {
                              color: "rgba(32,126,255, .5)"
                              // opacity: 0.2
                            }
                          },
                          splitLine: {
                            lineStyle: {
                              color: "rgba(32,126,255, .5)"
                              // opacity: 0.2
                            }
                          },
                          splitArea: {
                            areaStyle: {
                              color: "rgba(32,126,255, 0.1)"
                            }
                          }
                        },
                        polar: {
                          radius: "40%"
                        },
                        angleAxis: {
                          zlevel: 0,
                          min: 0,
                          max: 360,
                          interval: 5,
                          clockwise: false,
                          axisTick: {
                            show: false
                          },
                          axisLabel: {
                            show: false
                          },
                          axisLine: {
                            show: false
                          },
                          splitLine: {
                            show: false
                          }
                        },
                        radiusAxis: {
                          zlevel: 0,
                          min: 0,
                          max: 100,
                          axisLabel: {
                            textStyle: {
                              color: "rgba(29,208,240,0)"
                            }
                          },
                          axisLine: {
                            show: false
                          },
                          splitLine: {
                            show: false
                          },
                          splitArea: {
                            show: false
                          }
                        },
                        series: [
                          {
                            type: "pie",
                            data: [
                              {
                                value: 60.99,
                                name: "差旅费"
                              },
                              {
                                value: 28.26,
                                name: "业务招待费"
                              },
                              {
                                value: 1.05,
                                name: "误餐费"
                              },
                              {
                                value: 2.17,
                                name: "交通"
                              }
                            ],
                            radius: ["45%", "55%"],
                            zlevel: -1,
                            name: "",
                            itemStyle: {
                              normal: {
                                // borderColor: 'white'
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
                                  // let text = v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 14
                                }
                              }
                            }
                          },
                          {
                            type: "radar",
                            data: [
                              {
                                value: [60.99, 28.26, 1.05, 2.17],
                                name: "指数",
                                id: [
                                  { value: 60.99, name: "差旅费" },
                                  { value: 28.26, name: "业务招待费" },
                                  { value: 1.05, name: "误餐费" },
                                  { value: 2.17, name: "交通" }
                                ],
                                max: 100,
                                //   label:{
                                //       show:true,
                                //   },
                                areaStyle: {
                                  normal: {
                                    color: {
                                      type: "radial",
                                      x: 0.5,
                                      y: 0.5,
                                      r: 0.5,
                                      colorStops: [
                                        {
                                          offset: 0,
                                          color: "rgba(32,126,255, 0.5)" // 0% 处的颜色
                                        },
                                        {
                                          offset: 1,
                                          color: "rgba(32,126,255, 0.1)" // 100% 处的颜色
                                        }
                                      ],
                                      global: false // 缺省为 false
                                    }
                                  }
                                }
                              }
                            ],
                            zlevel: 2,
                            z: 4
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
                      for (let index = data.length + 1; index <= 12; index++) {
                        xBxis.push(index);
                        if (index == 12 && year == 2020) {
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
    await this.obtainAxios("成本", "2020", "cb");
    await this.obtainAxios("成本", "2019", "cb");
  },
  watch: {
    viewChange() {
      this.$refs["collapse"].refresh(this.collapseData);
    }
  }
};
</script>
