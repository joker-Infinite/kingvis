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
          id: "revenue",
          name: "营收",
          icon: require("../../../assets/business/icon_1-1.png"),
          iconActive: require("../../../assets/business/icon_1-2.png"),
          collapseItem: [
            {
              id: "revenue_2020",
              collapseTitle: "2020年营收",
              EChartsBox: [
                {
                  title: "月营收",
                  time: false,
                  select: false,
                  style: {
                    width: "40%",
                    height: "420px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "370px"
                      },
                      // unit:'万元',
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
                  title: "媒体类型/目标完成率",
                  istime: true,
                  query: {
                    inputValue: "",
                    selectValue: "",
                    timeValue: ""
                  },
                  style: {
                    width: "59.5%",
                    height: "420px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "70%",
                        height: "370px"
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
                          trigger: "item",
                          formatter:'{b}:{c}万元({d}%)'
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["50%", "50%"],
                            radius: ["30%", "50%"],
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
                                "档案",
                                "自由媒体",
                                "外有媒体",
                                "设计策划"
                              ];
                              let datas = [1.45, 2.93, 3.15, 4];
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
                    },
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "30%",
                        height: "370px"
                      },
                      isShow:true,
                      option: {
                          title: {
                              text: '',
                              textStyle: {
                                  fontWeight: 'normal',
                                  fontSize: 20,
                                  color: 'rgb(97, 142, 205)'
                              }
                          },
                          series: [{
                                  type: 'liquidFill',
                                  radius: '62%',
                                  center: ['50%', '50%'],
                                  data: [0.5, 0.5, 0.5], // data个数代表波浪数
                                  backgroundStyle: {
                                      borderWidth: 1,
                                      color: 'rgb(97, 142, 205,0.1)'
                                  },
                                  label: {
                                      normal: {
                                          formatter: (0.5 * 100).toFixed(2) + '%',
                                          textStyle: {
                                              fontSize: 20
                                          }
                                      }
                                  },
                                  outline: {
                                      show: false,
                                  }
                              },
                              {
                                  "type": "pie",
                                  "center": ["50%", "50%"],
                                  "radius": ["70%", "75%"],
                                  "hoverAnimation": false,
                                  "data": [{
                                          "name": "",
                                          "value": 500,
                                          labelLine: {
                                              show: false
                                          },
                                          itemStyle: {
                                              color: '#5886f0'
                                          },
                                          emphasis: {
                                              labelLine: {
                                                  show: false
                                              },
                                              itemStyle: {
                                                  color: '#5886f0'
                                              },
                                          }
                                      },
                                      { //画中间的图标
                                          "name": "",
                                          "value": 4,
                                          labelLine: {
                                              show: false
                                          },
                                          itemStyle: {
                                              color: '#ffffff',
                                              "normal": {
                                                  "color": "#5886f0",
                                                  "borderColor": "#5886f0",
                                                  "borderWidth": 20,
                                                  // borderRadius: '100%'
                                              },
                                          },
                                          label: {

                                              borderRadius: '100%'
                                          },
                                          emphasis: {
                                              labelLine: {
                                                  show: false
                                              },
                                              itemStyle: {
                                                  color: '#5886f0'
                                              },
                                          }

                                      },
                                      { // 解决圆点过大后续部分显示明显的问题
                                          "name": "",
                                          "value": 4,
                                          labelLine: {
                                              show: false
                                          },
                                          itemStyle: {
                                              color: '#5886f0'
                                          },
                                          emphasis: {
                                              labelLine: {
                                                  show: false
                                              },
                                              itemStyle: {
                                                  color: '#5886f0'
                                              },
                                          }
                                      },
                                      { //画剩余的刻度圆环
                                          "name": "",
                                          "value": 88,
                                          itemStyle: {
                                              color: '#050038'
                                          },
                                          "label": {
                                              show: false
                                          },
                                          labelLine: {
                                              show: false
                                          },
                                          emphasis: {
                                              labelLine: {
                                                  show: false
                                              },
                                              itemStyle: {
                                                  color: 'rgba(255,255,255,0)'
                                              },
                                          }
                                      }
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
              id: "revenue_2019",
              collapseTitle: "2019年营收",
              EChartsBox: [
                {
                  title: "月营收",
                  time: false,
                  select: false,
                  style: {
                    width: "40%",
                    height: "420px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "370px"
                      },
                      // unit:'万元',
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
                  title: "媒体类型/目标完成率",
                  istime: true,
                  query: {
                    inputValue: "",
                    selectValue: "",
                    timeValue: ""
                  },
                  style: {
                    width: "59.5%",
                    height: "420px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "70%",
                        height: "370px"
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
                          trigger: "item",
                          formatter:'{b}:{c}万元({d}%)'
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["50%", "50%"],
                            radius: ["30%", "50%"],
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
                                "档案",
                                "自由媒体",
                                "外有媒体",
                                "设计策划"
                              ];
                              let datas = [1.45, 2.93, 3.15, 4];
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
                    },
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "30%",
                        height: "370px"
                      },
                      isShow:true,
                      option: {
                          title: {
                              text: '',
                              textStyle: {
                                  fontWeight: 'normal',
                                  fontSize: 20,
                                  color: 'rgb(97, 142, 205)'
                              }
                          },
                          series: [{
                                  type: 'liquidFill',
                                  radius: '62%',
                                  center: ['50%', '50%'],
                                  data: [0.5, 0.5, 0.5], // data个数代表波浪数
                                  backgroundStyle: {
                                      borderWidth: 1,
                                      color: 'rgb(97, 142, 205,0.1)'
                                  },
                                  label: {
                                      normal: {
                                          formatter: (0.5 * 100).toFixed(2) + '%',
                                          textStyle: {
                                              fontSize: 20
                                          }
                                      }
                                  },
                                  outline: {
                                      show: false,
                                  }
                              },
                              {
                                  "type": "pie",
                                  "center": ["50%", "50%"],
                                  "radius": ["70%", "75%"],
                                  "hoverAnimation": false,
                                  "data": [{
                                          "name": "",
                                          "value": 500,
                                          labelLine: {
                                              show: false
                                          },
                                          itemStyle: {
                                              color: '#5886f0'
                                          },
                                          emphasis: {
                                              labelLine: {
                                                  show: false
                                              },
                                              itemStyle: {
                                                  color: '#5886f0'
                                              },
                                          }
                                      },
                                      { //画中间的图标
                                          "name": "",
                                          "value": 4,
                                          labelLine: {
                                              show: false
                                          },
                                          itemStyle: {
                                              color: '#ffffff',
                                              "normal": {
                                                  "color": "#5886f0",
                                                  "borderColor": "#5886f0",
                                                  "borderWidth": 20,
                                                  // borderRadius: '100%'
                                              },
                                          },
                                          label: {

                                              borderRadius: '100%'
                                          },
                                          emphasis: {
                                              labelLine: {
                                                  show: false
                                              },
                                              itemStyle: {
                                                  color: '#5886f0'
                                              },
                                          }

                                      },
                                      { // 解决圆点过大后续部分显示明显的问题
                                          "name": "",
                                          "value": 4,
                                          labelLine: {
                                              show: false
                                          },
                                          itemStyle: {
                                              color: '#5886f0'
                                          },
                                          emphasis: {
                                              labelLine: {
                                                  show: false
                                              },
                                              itemStyle: {
                                                  color: '#5886f0'
                                              },
                                          }
                                      },
                                      { //画剩余的刻度圆环
                                          "name": "",
                                          "value": 88,
                                          itemStyle: {
                                              color: '#050038'
                                          },
                                          "label": {
                                              show: false
                                          },
                                          labelLine: {
                                              show: false
                                          },
                                          emphasis: {
                                              labelLine: {
                                                  show: false
                                              },
                                              itemStyle: {
                                                  color: 'rgba(255,255,255,0)'
                                              },
                                          }
                                      }
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
              id: "revenue_gd",
              collapseTitle: "查看更多",
              EChartsBox: []
            }
          ]
        },
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
                        sItem.EChartsItem[0].option.xAxis[0].data.push(
                          i.xBxis.split("-")[1]
                        );
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
          this.$nextTick(_ => {
            this.$refs["collapse"].searchClick(this.arrData);
          });
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
                        if (index == 12) {
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
    this.obtainData("营收", "2019");
    await this.obtainAxios("营收", "2020", "ys");
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
