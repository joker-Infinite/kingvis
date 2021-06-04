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
          id: "construction",
          name: "结构",
          icon: require("../../../assets/business/icon_5-1.png"),
          iconActive: require("../../../assets/business/icon_5-2.png"),
          collapseItem: [
            {
              id: "construction_2020",
              year: 2020,
              collapseTitle: "2020年业态结构",
              EChartsBox: [
                {
                  title: "品牌收入占比",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "50%",
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
                          text: "",
                          top: "43%",
                          left: "55%",
                          textStyle: {
                            fontSize: 16
                          },
                          subtext: "",
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
                          orient: "vertical",
                          top: "center",
                          left: 100,
                          // padding:['1000px','100px','10px','10px']
                          itemGap: 25
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}:{c}: ({d}%)"
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["60%", "50%"],
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
                                    "#fec279",
                                    "#968af5",
                                    "#e790e8"
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
                                name: "一线品牌",
                                value: 1.45
                              },
                              {
                                name: "二线品牌",
                                value: 2.93
                              },
                              {
                                name: "无品牌",
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
                          orient: "vertical",
                          top: "center",
                          left: 10,
                          itemGap: 25
                        },
                        tooltip: {
                          formatter: "{b}:{c}: ({d}%)"
                        },

                        series: [
                          {
                            name: "整体分类",
                            type: "pie",
                            radius: [0, "30%"],
                            center: ["50%", "55%"],
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
                                    "#fec279",
                                    "#968af5",
                                    "#e790e8"
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
                            center: ["50%", "55%"],
                            radius: ["40%", "55%"],
                            itemStyle: {
                              normal: {
                                color: function(params) {
                                  let colorList = [
                                    "#fec279",
                                    "#968af5",
                                    "#e790e8"
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
                  title: "品牌经营面积占比",
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
                          text: "",
                          top: "50%",
                          left: "45%"
                        },
                        legend: {
                          orient: "vertical",
                          top: "center",
                          left: 10,
                          itemGap: 25
                        },
                        tooltip: {
                          formatter: "{b}:{c}: ({d}%)"
                        },

                        series: [
                          // {
                          //     name: "整体分类",
                          //     type: "pie",
                          //     radius: [0, "30%"],
                          //     center: ["50%", "55%"],
                          //     label: {
                          //         position: "inner",
                          //         textStyle: {
                          //             fontSize: 16
                          //         }
                          //     },
                          //     itemStyle: {
                          //         normal: {
                          //             borderColor:
                          //                 "#fff",
                          //             borderWidth: 2,
                          //             color: function (
                          //                 params
                          //             ) {
                          //                 let colorList = [
                          //                     "#76c15c",
                          //                     "#15b3e2",
                          //                     "#2e65fd",
                          //                     "#1fcaa8",
                          //                     "#ee6565",
                          //                     "#fec02a",
                          //                     "#fe3922",
                          //                     "#52fe36",
                          //                     "#fe3afc",
                          //                 ];
                          //                 return colorList[
                          //                     params
                          //                         .dataIndex
                          //                 ];
                          //             },
                          //         },
                          //     },
                          //     selectedMode: "single",
                          //     data: [
                          //         {
                          //             value: 875,
                          //             name: "一线品牌",
                          //         },
                          //         {
                          //             value: 1239,
                          //             name: "二线品牌",
                          //         },
                          //         {
                          //             value: 1239,
                          //             name: "无品牌",
                          //         },
                          //     ],
                          // },
                          {
                            name: "招标方式",
                            type: "pie",
                            center: ["50%", "55%"],
                            radius: ["40%", "55%"],
                            itemStyle: {
                              normal: {
                                color: function(params) {
                                  let colorList = [
                                    "#fec279",
                                    "#968af5",
                                    "#e790e8"
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
                                name: "一线品牌",
                                type: "一线品牌"
                              },
                              {
                                value: 1239,
                                name: "二线品牌",
                                type: "二线品牌"
                              },
                              {
                                value: 1239,
                                name: "无品牌",
                                type: "无品牌"
                              }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "品牌列表",
                  style: {
                    width: "100%",
                    height: "310px",
                    borderRadius: "10px",
                    background: "white",
                    marginBottom: "5px",
                    marginTop: "5px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      type: "table",
                      height: "430px",
                      isPagination: false,
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
                          B: "12",
                          C: "15",
                          D: "556",
                          E: "3436",
                          F: "203006",
                          G: "20",
                          H: "300",
                          I: "105465"
                        },
                        {
                          A: "二线品牌",
                          B: "10",
                          C: "12",
                          D: "452",
                          E: "2452",
                          F: "185451",
                          G: "18",
                          H: "254",
                          I: "85214"
                        },
                        {
                          A: "无品牌",
                          B: "8",
                          C: "10",
                          D: "350",
                          E: "1548",
                          F: "152014",
                          G: "15",
                          H: "210",
                          I: "75465"
                        }
                      ]
                    }
                  ]
                },
                {
                  title: "业态分类占比",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "50%",
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
                          text: "",
                          top: "43%",
                          left: "55%",
                          textStyle: {
                            fontSize: 16
                          },
                          subtext: "",
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
                          orient: "vertical",
                          top: "center",
                          left: 100,
                          // padding:['1000px','100px','10px','10px']
                          itemGap: 25
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}:{c}: ({d}%)"
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["60%", "50%"],
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
                                    "#4ecb73",
                                    "#73acff",
                                    "#fd8a2d",
                                    "#9e87ff"
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
                                name: "便利店",
                                value: 1.45
                              },
                              {
                                name: "特产",
                                value: 2.93
                              },
                              {
                                name: "小吃",
                                value: 3.15
                              },
                              {
                                name: "餐饮",
                                value: 3.15
                              }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "业态经营面积占比",
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
                          text: "",
                          left: "45%",
                          top: "50%"
                        },
                        legend: {
                          orient: "vertical",
                          top: "center",
                          left: 10,
                          itemGap: 25
                        },
                        tooltip: {
                          formatter: "{b}:{c}: ({d}%)"
                        },

                        series: [
                          // {
                          //     name: "整体分类",
                          //     type: "pie",
                          //     radius: [0, "30%"],
                          //     center: ["50%", "55%"],
                          //     label: {
                          //         position: "inner",
                          //         textStyle: {
                          //             fontSize: 16
                          //         }
                          //     },
                          //     itemStyle: {
                          //         normal: {
                          //             borderColor:
                          //                 "#fff",
                          //             borderWidth: 2,
                          //             color: function (
                          //                 params
                          //             ) {
                          //                 let colorList = [
                          //                     "#76c15c",
                          //                     "#15b3e2",
                          //                     "#2e65fd",
                          //                     "#1fcaa8",
                          //                     "#ee6565",
                          //                     "#fec02a",
                          //                     "#fe3922",
                          //                     "#52fe36",
                          //                     "#fe3afc",
                          //                 ];
                          //                 return colorList[
                          //                     params
                          //                         .dataIndex
                          //                 ];
                          //             },
                          //         },
                          //     },
                          //     selectedMode: "single",
                          //     data: [
                          //         {
                          //             value: 875,
                          //             name: "特色",
                          //         },
                          //         {
                          //             value: 1239,
                          //             name: "传统",
                          //         },
                          //         {
                          //             value: 1239,
                          //             name: "品牌",
                          //         },
                          //     ],
                          // },
                          {
                            name: "招标方式",
                            type: "pie",
                            center: ["50%", "55%"],
                            radius: ["40%", "55%"],
                            itemStyle: {
                              normal: {
                                color: function(params) {
                                  let colorList = [
                                    "#4ecb73",
                                    "#73acff",
                                    "#fd8a2d",
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
                                  fontSize: 16
                                }
                              }
                            },

                            data: [
                              {
                                value: 875,
                                name: "便利店",
                                type: "便利店"
                              },
                              {
                                value: 1239,
                                name: "餐饮",
                                type: "餐饮"
                              },
                              {
                                value: 1239,
                                name: "特产",
                                type: "特产"
                              },
                              {
                                value: 1239,
                                name: "小吃",
                                type: "小吃"
                              }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "业态列表",
                  style: {
                    width: "100%",
                    height: "330px",
                    borderRadius: "10px",
                    background: "white",
                    marginBottom: "5px",
                    marginTop: "5px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      type: "table",
                      height: "550px",
                      isPagination: false,
                      border: true,
                      style: {
                        width: "100%",
                        height: "250px",
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
                          A: "餐饮",
                          B: "15",
                          C: "12",
                          D: "585",
                          E: "3456",
                          F: "152052",
                          G: "20",
                          H: "258",
                          I: "95465"
                        },
                        {
                          A: "小吃",
                          B: "12",
                          C: "15",
                          D: "556",
                          E: "3436",
                          F: "203006",
                          G: "20",
                          H: "300",
                          I: "105465"
                        },
                        {
                          A: "便利店",
                          B: "10",
                          C: "13",
                          D: "456",
                          E: "4531",
                          F: "185421",
                          G: "19",
                          H: "265",
                          I: "106541"
                        },
                        {
                          A: "特产",
                          B: "11",
                          C: "13",
                          D: "365",
                          E: "4871",
                          F: "163526",
                          G: "18",
                          H: "260",
                          I: "152401"
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
                  title: "品牌收入占比",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "50%",
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
                          text: "",
                          top: "43%",
                          left: "55%",
                          textStyle: {
                            fontSize: 16
                          },
                          subtext: "",
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
                          orient: "vertical",
                          top: "center",
                          left: 100,
                          // padding:['1000px','100px','10px','10px']
                          itemGap: 25
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}:{c}: ({d}%)"
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["60%", "50%"],
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
                                    "#fec279",
                                    "#968af5",
                                    "#e790e8"
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
                                name: "一线品牌",
                                value: 1.45
                              },
                              {
                                name: "二线品牌",
                                value: 2.93
                              },
                              {
                                name: "无品牌",
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
                          orient: "vertical",
                          top: "center",
                          left: 10,
                          itemGap: 25
                        },
                        tooltip: {
                          formatter: "{b}:{c}: ({d}%)"
                        },

                        series: [
                          {
                            name: "整体分类",
                            type: "pie",
                            radius: [0, "30%"],
                            center: ["50%", "55%"],
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
                                    "#fec279",
                                    "#968af5",
                                    "#e790e8"
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
                            center: ["50%", "55%"],
                            radius: ["40%", "55%"],
                            itemStyle: {
                              normal: {
                                color: function(params) {
                                  let colorList = [
                                    "#fec279",
                                    "#968af5",
                                    "#e790e8"
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
                  title: "品牌经营面积占比",
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
                          text: "",
                          top: "50%",
                          left: "45%"
                        },
                        legend: {
                          orient: "vertical",
                          top: "center",
                          left: 10,
                          itemGap: 25
                        },
                        tooltip: {
                          formatter: "{b}:{c}: ({d}%)"
                        },

                        series: [
                          // {
                          //     name: "整体分类",
                          //     type: "pie",
                          //     radius: [0, "30%"],
                          //     center: ["50%", "55%"],
                          //     label: {
                          //         position: "inner",
                          //         textStyle: {
                          //             fontSize: 16
                          //         }
                          //     },
                          //     itemStyle: {
                          //         normal: {
                          //             borderColor:
                          //                 "#fff",
                          //             borderWidth: 2,
                          //             color: function (
                          //                 params
                          //             ) {
                          //                 let colorList = [
                          //                     "#76c15c",
                          //                     "#15b3e2",
                          //                     "#2e65fd",
                          //                     "#1fcaa8",
                          //                     "#ee6565",
                          //                     "#fec02a",
                          //                     "#fe3922",
                          //                     "#52fe36",
                          //                     "#fe3afc",
                          //                 ];
                          //                 return colorList[
                          //                     params
                          //                         .dataIndex
                          //                 ];
                          //             },
                          //         },
                          //     },
                          //     selectedMode: "single",
                          //     data: [
                          //         {
                          //             value: 875,
                          //             name: "一线品牌",
                          //         },
                          //         {
                          //             value: 1239,
                          //             name: "二线品牌",
                          //         },
                          //         {
                          //             value: 1239,
                          //             name: "无品牌",
                          //         },
                          //     ],
                          // },
                          {
                            name: "招标方式",
                            type: "pie",
                            center: ["50%", "55%"],
                            radius: ["40%", "55%"],
                            itemStyle: {
                              normal: {
                                color: function(params) {
                                  let colorList = [
                                    "#fec279",
                                    "#968af5",
                                    "#e790e8"
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
                                name: "一线品牌",
                                type: "一线品牌"
                              },
                              {
                                value: 1239,
                                name: "二线品牌",
                                type: "二线品牌"
                              },
                              {
                                value: 1239,
                                name: "无品牌",
                                type: "无品牌"
                              }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "品牌列表",
                  style: {
                    width: "100%",
                    height: "310px",
                    borderRadius: "10px",
                    background: "white",
                    marginBottom: "5px",
                    marginTop: "5px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      type: "table",
                      height: "430px",
                      isPagination: false,
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
                          B: "12",
                          C: "15",
                          D: "556",
                          E: "3436",
                          F: "203006",
                          G: "20",
                          H: "300",
                          I: "105465"
                        },
                        {
                          A: "二线品牌",
                          B: "10",
                          C: "12",
                          D: "452",
                          E: "2452",
                          F: "185451",
                          G: "18",
                          H: "254",
                          I: "85214"
                        },
                        {
                          A: "无品牌",
                          B: "8",
                          C: "10",
                          D: "350",
                          E: "1548",
                          F: "152014",
                          G: "15",
                          H: "210",
                          I: "75465"
                        }
                      ]
                    }
                  ]
                },
                {
                  title: "业态分类占比",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "50%",
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
                          text: "",
                          top: "43%",
                          left: "55%",
                          textStyle: {
                            fontSize: 16
                          },
                          subtext: "",
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
                          orient: "vertical",
                          top: "center",
                          left: 100,
                          // padding:['1000px','100px','10px','10px']
                          itemGap: 25
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}:{c}: ({d}%)"
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["60%", "50%"],
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
                                    "#4ecb73",
                                    "#73acff",
                                    "#fd8a2d",
                                    "#9e87ff"
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
                                name: "便利店",
                                value: 1.45
                              },
                              {
                                name: "特产",
                                value: 2.93
                              },
                              {
                                name: "小吃",
                                value: 3.15
                              },
                              {
                                name: "餐饮",
                                value: 3.15
                              }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "业态经营面积占比",
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
                          text: "",
                          left: "45%",
                          top: "50%"
                        },
                        legend: {
                          orient: "vertical",
                          top: "center",
                          left: 10,
                          itemGap: 25
                        },
                        tooltip: {
                          formatter: "{b}:{c}: ({d}%)"
                        },

                        series: [
                          // {
                          //     name: "整体分类",
                          //     type: "pie",
                          //     radius: [0, "30%"],
                          //     center: ["50%", "55%"],
                          //     label: {
                          //         position: "inner",
                          //         textStyle: {
                          //             fontSize: 16
                          //         }
                          //     },
                          //     itemStyle: {
                          //         normal: {
                          //             borderColor:
                          //                 "#fff",
                          //             borderWidth: 2,
                          //             color: function (
                          //                 params
                          //             ) {
                          //                 let colorList = [
                          //                     "#76c15c",
                          //                     "#15b3e2",
                          //                     "#2e65fd",
                          //                     "#1fcaa8",
                          //                     "#ee6565",
                          //                     "#fec02a",
                          //                     "#fe3922",
                          //                     "#52fe36",
                          //                     "#fe3afc",
                          //                 ];
                          //                 return colorList[
                          //                     params
                          //                         .dataIndex
                          //                 ];
                          //             },
                          //         },
                          //     },
                          //     selectedMode: "single",
                          //     data: [
                          //         {
                          //             value: 875,
                          //             name: "特色",
                          //         },
                          //         {
                          //             value: 1239,
                          //             name: "传统",
                          //         },
                          //         {
                          //             value: 1239,
                          //             name: "品牌",
                          //         },
                          //     ],
                          // },
                          {
                            name: "招标方式",
                            type: "pie",
                            center: ["50%", "55%"],
                            radius: ["40%", "55%"],
                            itemStyle: {
                              normal: {
                                color: function(params) {
                                  let colorList = [
                                    "#4ecb73",
                                    "#73acff",
                                    "#fd8a2d",
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
                                  fontSize: 16
                                }
                              }
                            },

                            data: [
                              {
                                value: 875,
                                name: "便利店",
                                type: "便利店"
                              },
                              {
                                value: 1239,
                                name: "餐饮",
                                type: "餐饮"
                              },
                              {
                                value: 1239,
                                name: "特产",
                                type: "特产"
                              },
                              {
                                value: 1239,
                                name: "小吃",
                                type: "小吃"
                              }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "业态列表",
                  style: {
                    width: "100%",
                    height: "330px",
                    borderRadius: "10px",
                    background: "white",
                    marginBottom: "5px",
                    marginTop: "5px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      type: "table",
                      height: "550px",
                      isPagination: false,
                      border: true,
                      style: {
                        width: "100%",
                        height: "250px",
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
                          A: "餐饮",
                          B: "15",
                          C: "12",
                          D: "585",
                          E: "3456",
                          F: "152052",
                          G: "20",
                          H: "258",
                          I: "95465"
                        },
                        {
                          A: "小吃",
                          B: "12",
                          C: "15",
                          D: "556",
                          E: "3436",
                          F: "203006",
                          G: "20",
                          H: "300",
                          I: "105465"
                        },
                        {
                          A: "便利店",
                          B: "10",
                          C: "13",
                          D: "456",
                          E: "4531",
                          F: "185421",
                          G: "19",
                          H: "265",
                          I: "106541"
                        },
                        {
                          A: "特产",
                          B: "11",
                          C: "13",
                          D: "365",
                          E: "4871",
                          F: "163526",
                          G: "18",
                          H: "260",
                          I: "152401"
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
