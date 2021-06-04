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
          id: "vacancyrate",
          name: "空置率",
          icon: require("../../../assets/business/icon_2-1.png"),
          iconActive: require("../../../assets/business/icon_2-2.png"),
          collapseItem: [
            {
              id: "vacancyrate_2020ss",
              collapseTitle: "2020年空置率",
              allQuery: true,
              query: {
                inputValue: "",
                selectValue: "",
                timeValue: ""
              },
              allQueryData: {
                input: false,
                select: false,
                time: true
              },
              EChartsBox: [
                  {
                  title: "已经出售、未售出、已锁定、建设中（当前）",
                  select: false,
                  style: {
                    width: "50%",
                    height: "600px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginBottom:'10px'
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "550px"
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
                              orient: "vertical",
                              bottom: 10,
                              right:10
                          },
                          tooltip: {
                              trigger: "item"
                          },
                          series: [{
                              type: "pie",
                              center: ["40%", "50%"],
                              radius: ["30%", "40%"],
                              clockwise: true,
                              avoidLabelOverlap: true,
                              hoverOffset: 15,
                              itemStyle: {
                                  normal: {
                                      color: function(params) {
                                          let colorList = [
                                              
                                          ];
                                          for(let index = 0;index<32;index++){
                                              colorList.push(`rgb(${Math.floor(Math.random()*224)},${Math.floor(Math.random()*224)},${Math.floor(Math.random()*224)})`)
                                          }
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
                                  let dataName = ["京珠高速",
                                      "汉十高速",
                                      "黄黄高速",
                                      "鄂西高速",
                                      "荆岳大桥",
                                      "武英高速",
                                      "麻武高速",
                                      "九江二桥",
                                      "恩来高速",
                                      "恩黔高速",
                                      "宜巴高速",
                                      "十房高速",
                                      "十白高速",
                                      "郧十高速",
                                      "谷竹高速",
                                      "襄随高速",
                                      "江南高速",
                                      "保宜高速",
                                      "麻武穴高速",
                                      "潜石高速",
                                      "仙洪高速",
                                      "宜张高速",
                                      "咸宁西高速",
                                      "岳宜高速",
                                      "建恩高速",
                                      "翻坝高速",
                                      "利万高速",
                                      "武黄高速",
                                      "市内媒体",
                                      "服务区媒体",
                                      "杭瑞高速",
                                      "机场媒体",
                                  ];
                                  dataName.forEach((item,index)=>{
                                      data.push({value:Math.floor(Math.random()*224),name:item})
                                  })
                                  return data
                              }())
                          }]
                      }
                    }
                  ]
                },
                {
                  title: "已经出售、未售出、已锁定、建设中（累计）",
                  time: false,
                  select: false,
                  style: {
                    width: "49.5%",
                    height: "600px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginBottom:'10px'
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "550px"
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
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#15b3e2",
                                    "#f69f41",
                                    "#f2535f",
                                    "#2e65fd",
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
                            data: []
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "当前空置率",
                  time: false,
                  select: false,
                  style: {
                    width: "50%",
                    height: "450px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginBottom: "5px"
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
                              let title = ["May", "Tom", "Mary", "Jim", "Tony"];
                              let datas = [1.45, 2.93, 3.15, 6, 5];
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
                  title: "累计空置率",
                  time: false,
                  select: false,
                  style: {
                    width: "49.5%",
                    height: "450px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginBottom: "5px"
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
                              let title = ["May", "Tom", "Mary", "Jim", "Tony"];
                              let datas = [1.45, 2.93, 3.15, 6, 5];
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

              ]
            },
            {
              id: "vacancyrate_gd",
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
    // this.obtainData("营收", "2019");
    // await this.obtainAxios("营收", "2020", "ys");
    // await this.obtainData("利润", "2019");
    // await this.obtainData("利润", "2020");
  },
  watch: {
    viewChange() {
      this.$refs["collapse"].refresh(this.collapseData);
    }
  }
};
</script>