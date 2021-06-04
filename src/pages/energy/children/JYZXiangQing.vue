  
<template>
  <div class="box" style="width: 100%;height: 100%;">
    <my-collapse-base ref="collapse" :collapseData="collapseData">
      <el-collapse v-model="activeNames">
        <el-collapse-item title="基础信息" name="1">
          <el-row class="body" :gutter="24">
            <el-col :span="12" v-for="item in baseData" :key="item">
              <el-row :gutter="24">
                <el-col :span="9" style="text-align:right"
                  >{{ item.label }}:</el-col
                >
                <el-col :span="10" style="text-align:center">{{
                  item.value
                }}</el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-collapse-item>
      </el-collapse>
    </my-collapse-base>
  </div>
</template>

<script>
import MyCollapseBase from "../../../components/common/myCollapseBase";
export default {
  name: "JYZXiangQing",
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
          id: "profit",
          name: "加油站",
          icon: require("../../../assets/business/icon_2-1.png"),
          iconActive: require("../../../assets/business/icon_2-2.png"),
          collapseItem: [
            // {
            // 	id: "revenue_gd",
            // 	collapseTitle: "基本信息",
            // 	EChartsBox: []
            // },
            {
              id: "profit_2020",
              collapseTitle: "加油站",
              EChartsBox: [
                {
                  title: "成本利润率",
                  time: false,
                  year: false,
                  month: false,
                  day: false,
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
                              text: ""
                          },
                          tooltip: {
                              trigger: "axis",
                              formatter: '{b}<br>{a0}:{c0}万元<br>{a1}:{c1}万元<br>{a2}:{c2}%',
                          },
                          grid: {
                              top: "20%",
                              right: "40",
                              left: "60",
                              bottom: "70" //图表尺寸大小
                          },
                          legend: {
                              orient: "horizontal",
                              top: 30,
                              data: ["成本", "利润",'成本利润率']
                          },
                          xAxis: [{
                              type: "category",
                              color: "#59588D",
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
                          }],
                          yAxis: [{
                              name:'万元',
                              nameTextStyle:{
                                  color:'#000'
                              },
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
                          }, {
                              name:'%',
                              nameTextStyle:{
                                  color:'#000'
                              },
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
                          }],
                          
                          series: [{
                                  name: "成本",
                                  type: "bar",
                                  data: [
                                      321,
                                      432,
                                      123,
                                      543,
                                      256,
                                      123,
                                      400,
                                      265,
                                      654,
                                      352,
                                      326,
                                      765
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
                                  name: "利润",
                                  type: "bar",
                                  data: [
                                      221,
                                      321,
                                      101,
                                      421,
                                      121,
                                      91,
                                      321,
                                      121,
                                      521,
                                      221,
                                      221,
                                      621
                                  ],
                                  barWidth: "16px",
                                  itemStyle: {
                                      normal: {
                                          color:"#fd866a",
                                          barBorderRadius: [30, 30, 30, 30]
                                      }
                                  }
                              },
                              {
                                  name: "成本利润率",
                                  type: "line",
                                  yAxisIndex: 1,
                                  data: [
                                      58,
                                      56,
                                      50,
                                      36,
                                      25,
                                      36,
                                      40,
                                      26,
                                      33,
                                      35,
                                      25,
                                      36
                                  ],
                                  barWidth: "16px",
                                  itemStyle: {
                                      normal: {
                                          color: "#76c15c",
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
                  title: "营收",
                  timeValue: "",
                  style: {
                    width: "100%",
                    height: "450px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginBottom: "10px"
                  },
                  istime:true,
                  query: {
                        inputValue: "",
                        selectValue: "",
                        timeValue: ""
                      },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "400px"
                      },
                      isShow:true,
                      
                      
                      option: {
                          tooltip: {
                                trigger: "item",
                                formatter: "{b} : {c} 万元"
                              },
                          series: [{
                          roam:false,
                          breadcrumb: { show: false},
                          color:["#cb9bff","#3cb8fe","#73abf8","#fdb36a","#ff9393"],
                          nodeClick:false,
                          
                              type: 'treemap',
                              data: [{
                                  name: '油品',            // First tree
                                  value: 15000,
                                  itemStyle: {
                                      color: 'transparent',
                                  },
                                  children: [{
                                      name: '汽油',       // First leaf of first tree
                                      value: 10000,
                                      children: [{
                                          name: '92#',       // First leaf of first tree
                                          value: 6000,
                                          itemStyle: {
                                              color: '#cb9bff',
                                          },
                                      },
                                      {
                                          name: '98#',       // First leaf of first tree
                                          value: 2000,
                                          itemStyle: {
                                              color: '#3cb8fe',
                                          },
                                      },{
                                          name: '95#',       // First leaf of first tree
                                          value: 2000,
                                          itemStyle: {
                                              color: '#73abf8',
                                          },
                                      }]
                                  }, {
                                      name: '柴油',       // Second leaf of first tree
                                      value: 5000,
                                      itemStyle: {
                                              color: '#fdb36a',
                                          },
                                  }]
                              }, {
                                  name: '非油品',            // Second tree
                                  value: 5000,
                                  itemStyle: {
                                              color: "#ff9393",
                                          },
                              }]
                          }]
                      }
                    }
                  ]
                },
                {
                  title: "油站总营收结构",
                  time: false,
                  select: false,
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
                          data: ["非油品", "柴油", "92#", "95#", "98#"]
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b} : {c} ({d}%)"
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["50%", "50%"],
                            radius: ["30%", "45%"],
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
                            data: [
                              { value: 335, name: "非油品" },
                              { value: 310, name: "柴油" },
                              { value: 234, name: "92#" },
                              { value: 135, name: "95#" },
                              { value: 1548, name: "98#" }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "非油品油站总营收结构",
                  time: false,
                  select: false,
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
                          data: ["非油品", "柴油", "92#", "95#", "98#"]
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b} : {c} ({d}%)"
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["50%", "50%"],
                            radius: ["30%", "45%"],
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
                            data: [
                              { value: 335, name: "非油品" },
                              { value: 310, name: "柴油" },
                              { value: 234, name: "92#" },
                              { value: 135, name: "95#" },
                              { value: 1548, name: "98#" }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "订单列表",
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
                      type: "table",
                      /*ECharts的属性*/
                      isPagination: true,
                      height: "500px",
                      style: {
                        width: "100%",
                        height: "400px"
                      },
                      border: true,
                      columns: [
                        { prop: "a", label: "加油站",width:'240' },
                        { prop: "b", label: "零食（金额/订单）" },
                        { prop: "c", label: "小吃（金额/订单）" },
                        { prop: "d", label: "酒水饮料（金额/订单）",width:'170' },
                        { prop: "e", label: "汽车用品（金额/订单）",width:'170' },
                        { prop: "f", label: "时间" },
                        { prop: "g", label: "汽油" ,
                        children: [
                            { prop: "92#", label: "92#" },
                            { prop: "95#", label: "95#" },
                            { prop: "98#", label: "98#" },
                          ]},
                        { prop: "h", label: "柴油" }
                      ],
                      tableData: [
                        {
                           a: "汉十高速双沟停车区加油北站",
                           b: "703.2922",
                           c: "535.1852",
                           d: "791.8291",
                           e: "4954.5455",
                           f: "2019-07",
                          '92#':"21056.2554",
                          '95#':"28842.8178",
                          '98#':"33440.5405",
                           h: "28921.4",
                        },
                        {
                          a: "汉十高速双沟停车区加油南站",
                           b: "741.4345",
                           c: "927.1186",
                           d: "793.8475",
                           e: "5700",
                           f: "2019-07",
                          '92#':"21400.2934",
                          '95#':"29273.043",
                          '98#':"33524.9",
                           h: "32081.3187",
                        },
                      ],
                      option: {}
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      activeNames: ["1"],
      formBasis: {},
      baseData: [
        { label: "运用公司", value: "湖北交投新能源投资有限公司运营" },
        { label: "加油站名称", value: "汉十高速双沟停车区加油北站" },
        { label: "省份", value: "湖北省" },
        { label: "地市", value: "襄阳市" },
        { label: "区县", value: "襄阳区" },
        { label: "负责人电话", value: "18684821991" },
        { label: "负责人Email", value: "237232893@qq.com" },
        { label: "地址", value: "河北省唐山市路南区" },
        { label: "加油站油枪92#", value: "10个" },
        { label: "加油站油枪95#", value: "12个" },
        { label: "加油站油枪98#", value: "8个" },
        { label: "加油站油枪0#", value: "8个" },
        { label: "POS一体机名称", value: "智谷联" },
        { label: "是否启用未启用", value: "是" },
        { label: "是否删除", value: "否" },
        { label: "业务范围", value: "1.加油,  2.洗车" },
        { label: "参与物流平台加油", value: "参与" },
        { label: "站点导航、洗车导航、加油的站点列表", value: "不显示 " },
      ]
    };
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

<style scoped lang="less">
.body {
  background: #fff;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 20px;
}
.body > .el-col {
  height: 50px;
}
.box /deep/ .el-collapse {
  border-bottom: none;
}
.box /deep/ .el-collapse > .noMargin > div > .el-collapse-item__header {
  margin-top: 0 !important;
}
.box /deep/ .el-collapse > .el-collapse-item {
}
.box /deep/ .el-collapse > .el-collapse-item > div > .el-collapse-item__header {
  background: #1d7dca;
  border-radius: 10px;
  font-size: 16px;
  height: 48px;
  line-height: 48px;
  margin: 8px 0;
  width: 100%;
  color: white;
  border: none;
  text-indent: 10px;
}
.box /deep/ .el-collapse > .el-collapse-item > .el-collapse-item__wrap {
  background-color: rgba(0, 0, 0, 0) !important;
}
.box
  /deep/
  .el-collapse
  > .el-collapse-item
  > .el-collapse-item__wrap
  > .el-collapse-item__content {
  padding-bottom: 0;
}
</style>