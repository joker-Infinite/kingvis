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
  name: "gasSource",
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
          id: "profit",
          name: "",
          icon: require("../../../assets/business/icon_1-1.png"),
          iconActive: require("../../../assets/business/icon_1-2.png"),
          collapseItem: [
            {
              id: "profit_2020",
              year: 2020,
              collapseTitle: "2020年油库来源",
              EChartsBox: [
                {
                  title: "",
                  time: false,
                  style: {
                    width: "100%",
                    height: "800px",
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
                        height: "800px"
                      },
                      option: {
                        color: [
                          "#fc853e",
                          "#28cad8",
                          "#9564bf",
                          "#bd407e",
                          "#e5a214",
                          "red"
                        ],
                        tooltip: {
                          trigger: "item",
                          triggerOn: "mousemove",
                          formatter: function(val) {
                            if (!val.data.target) {
                              return val.name + ":" + val.value + "吨";
                            } else {
                              return val.name + ":" + val.value + "吨";
                            }
                          }
                        },
                        animation: false,
                        series: [
                          {
                            type: "sankey",
                            bottom: "10%",
                            right: "5%",

                            focusNodeAdjacency: "allEdges",
                            data: [
                              {
                                name: "库存",
                                itemStyle: {
                                  color: "red"
                                }
                              },
                              {
                                name: "贸易",
                                itemStyle: {
                                  color: "#28cad8"
                                }
                              },
                              { name: "A公司" },
                              { name: "92#" },
                              { name: "95#" },
                              { name: "98#" },
                              { name: "0#" },
                              { name: "92# " },
                              { name: "95# " },
                              { name: "98# " },
                              { name: "0# " },
                              { name: "B公司" },
                              { name: "C公司" },
                              { name: "D公司" },
                              {
                                name: "直分销"
                              },
                              { name: "A批发商" },
                              { name: "B批发商" },
                              { name: "C批发商" },
                              { name: "D批发商" },
                              {
                                name: "零售"
                              },
                              { name: "汉十高速双沟停车区加油北站" },
                              { name: "双沟0#" },
                              { name: "双沟92#" },
                              { name: "双沟95#" },
                              { name: "双沟98#" },
                              { name: "汉十高速枣阳服务区加油南站(新)" },
                              { name: "枣阳0#" },
                              { name: "枣阳92#" },
                              { name: "枣阳95#" },
                              { name: "枣阳98#" },
                              { name: "汉十高速随州服务区加油南站" },
                              { name: "随州0#" },
                              { name: "随州92#" },
                              { name: "随州95#" },
                              { name: "随州98#" },
                              { name: "沙公高速沙市服务区西站" },
                              { name: "沙市0#" },
                              { name: "沙市92#" },
                              { name: "沙市95#" },
                              { name: "沙市98#" },
                              { name: "汉十高速钟岗服务区加油北站" },
                              { name: "钟岗0#" },
                              { name: "钟岗92#" },
                              { name: "钟岗95#" },
                              { name: "钟岗98#" },
                              { name: "孝洪高速汉川西服务区加油东站" },
                              { name: "汉川0#" },
                              { name: "汉川92#" },
                              { name: "汉川95#" },
                              { name: "汉川98#" },
                              {
                                name: "A供应商"
                              },
                              {
                                name: "B供应商"
                              }
                            ],
                            links: [
                              {
                                source: "A供应商",
                                target: "库存",
                                value: 50000
                              },
                              {
                                source: "B供应商",
                                target: "库存",
                                value: 20000
                              },

                              {
                                source: "库存",
                                target: "贸易",
                                value: 20000
                              },
                              {
                                source: "贸易",
                                target: "A公司",
                                value: 17000
                              },
                              {
                                source: "A公司",
                                target: "92#",
                                value: 4250
                              },
                              {
                                source: "A公司",
                                target: "95#",
                                value: 4250
                              },
                              {
                                source: "A公司",
                                target: "98#",
                                value: 4250
                              },
                              {
                                source: "A公司",
                                target: "0#",
                                value: 4250
                              },
                              {
                                source: "贸易",
                                target: "B公司",
                                value: 1000
                              },
                              {
                                source: "贸易",
                                target: "C公司",
                                value: 1000
                              },
                              {
                                source: "贸易",
                                target: "D公司",
                                value: 1000
                              },

                              {
                                source: "库存",
                                target: "直分销",
                                value: 20000
                              },
                              {
                                source: "直分销",
                                target: "A批发商",
                                value: 17000
                              },
                              {
                                source: "A批发商",
                                target: "0# ",
                                value: 4250
                              },
                              {
                                source: "A批发商",
                                target: "92# ",
                                value: 4250
                              },
                              {
                                source: "A批发商",
                                target: "95# ",
                                value: 4250
                              },
                              {
                                source: "A批发商",
                                target: "98# ",
                                value: 4250
                              },
                              {
                                source: "直分销",
                                target: "B批发商",
                                value: 1000
                              },
                              {
                                source: "直分销",
                                target: "C批发商",
                                value: 1000
                              },
                              {
                                source: "直分销",
                                target: "D批发商",
                                value: 1000
                              },

                              {
                                source: "库存",
                                target: "零售",
                                value: 20000
                              },
                              {
                                source: "零售",
                                target: "汉十高速双沟停车区加油北站",
                                value: 3333
                              },
                              {
                                source: "汉十高速双沟停车区加油北站",
                                target: "双沟0#",
                                value: 833
                              },
                              {
                                source: "汉十高速双沟停车区加油北站",
                                target: "双沟92#",
                                value: 833
                              },
                              {
                                source: "汉十高速双沟停车区加油北站",
                                target: "双沟95#",
                                value: 833
                              },
                              {
                                source: "汉十高速双沟停车区加油北站",
                                target: "双沟98#",
                                value: 833
                              },

                              {
                                source: "零售",
                                target: "汉十高速枣阳服务区加油南站(新)",
                                value: 3333
                              },
                              {
                                source: "汉十高速枣阳服务区加油南站(新)",
                                target: "枣阳0#",
                                value: 833
                              },
                              {
                                source: "汉十高速枣阳服务区加油南站(新)",
                                target: "枣阳92#",
                                value: 833
                              },
                              {
                                source: "汉十高速枣阳服务区加油南站(新)",
                                target: "枣阳95#",
                                value: 833
                              },
                              {
                                source: "汉十高速枣阳服务区加油南站(新)",
                                target: "枣阳98#",
                                value: 833
                              },
                              {
                                source: "零售",
                                target: "汉十高速随州服务区加油南站",
                                value: 3333
                              },
                              {
                                source: "汉十高速随州服务区加油南站",
                                target: "随州0#",
                                value: 833
                              },
                              {
                                source: "汉十高速随州服务区加油南站",
                                target: "随州92#",
                                value: 833
                              },
                              {
                                source: "汉十高速随州服务区加油南站",
                                target: "随州95#",
                                value: 833
                              },
                              {
                                source: "汉十高速随州服务区加油南站",
                                target: "随州98#",
                                value: 833
                              },
                              {
                                source: "零售",
                                target: "沙公高速沙市服务区西站",
                                value: 3333
                              },
                              {
                                source: "沙公高速沙市服务区西站",
                                target: "沙市0#",
                                value: 833
                              },
                              {
                                source: "沙公高速沙市服务区西站",
                                target: "沙市92#",
                                value: 833
                              },
                              {
                                source: "沙公高速沙市服务区西站",
                                target: "沙市95#",
                                value: 833
                              },
                              {
                                source: "沙公高速沙市服务区西站",
                                target: "沙市98#",
                                value: 833
                              },

                              {
                                source: "零售",
                                target: "汉十高速钟岗服务区加油北站",
                                value: 3333
                              },
                              {
                                source: "汉十高速钟岗服务区加油北站",
                                target: "钟岗0#",
                                value: 833
                              },
                              {
                                source: "汉十高速钟岗服务区加油北站",
                                target: "钟岗92#",
                                value: 833
                              },
                              {
                                source: "汉十高速钟岗服务区加油北站",
                                target: "钟岗95#",
                                value: 833
                              },
                              {
                                source: "汉十高速钟岗服务区加油北站",
                                target: "钟岗98#",
                                value: 833
                              },

                              {
                                source: "零售",
                                target: "孝洪高速汉川西服务区加油东站",
                                value: 3333
                              },
                              {
                                source: "孝洪高速汉川西服务区加油东站",
                                target: "汉川0#",
                                value: 833
                              },
                              {
                                source: "孝洪高速汉川西服务区加油东站",
                                target: "汉川92#",
                                value: 833
                              },
                              {
                                source: "孝洪高速汉川西服务区加油东站",
                                target: "汉川95#",
                                value: 833
                              },
                              {
                                source: "孝洪高速汉川西服务区加油东站",
                                target: "汉川98#",
                                value: 833
                              }
                            ],
                            // nodeWidth:'30',
                            nodeAlign: "left",
                            draggable: true,
                            label: {
                              position: "left"
                            },
                            lineStyle: {
                              color: "source",
                              curveness: 0.5
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "流入占比",
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
                            "A进货商",
                            "B进货商",
                            "C进货商",
                            "D进货商",
                            "E进货商"
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
                              "#47a2ff",
                              "#53c8d1",
                              "#59cb74",
                              "#fbd444",
                              "#7f6aad"
                            ],
                            data: [
                              { value: 335, name: "A进货商" },
                              { value: 310, name: "B进货商" },
                              { value: 234, name: "C进货商" },
                              { value: 135, name: "D进货商" },
                              { value: 1548, name: "E进货商" }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "流出占比",
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
                          formatter: "{b}: {c}万元 ({d}%)"
                        },

                        legend: {
                          orient: "horizontal",
                          bottom: 10,
                          data: ["贸易", "直分销", "零售"]
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
                              { value: 335, name: "贸易" },
                              { value: 310, name: "直分销" },
                              { value: 234, name: "零售" }
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
              id: "profit_2019",
              year: 2019,
              collapseTitle: "2019年油库来源",
              EChartsBox: [
                {
                  title: "",
                  time: false,
                  style: {
                    width: "100%",
                    height: "800px",
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
                        height: "800px"
                      },
                      option: {
                        color: [
                          "#fc853e",
                          "#28cad8",
                          "#9564bf",
                          "#bd407e",
                          "#e5a214",
                          "red"
                        ],
                        tooltip: {
                          trigger: "item",
                          triggerOn: "mousemove",
                          formatter: function(val) {
                            if (!val.data.target) {
                              return val.name + ":" + val.value + "吨";
                            } else {
                              return val.name + ":" + val.value + "吨";
                            }
                          }
                        },
                        animation: false,
                        series: [
                          {
                            type: "sankey",
                            bottom: "10%",
                            right: "5%",

                            focusNodeAdjacency: "allEdges",
                            data: [
                              {
                                name: "库存",
                                itemStyle: {
                                  color: "red"
                                }
                              },
                              {
                                name: "贸易",
                                itemStyle: {
                                  color: "#28cad8"
                                }
                              },
                              { name: "A公司" },
                              { name: "92#" },
                              { name: "95#" },
                              { name: "98#" },
                              { name: "0#" },
                              { name: "92# " },
                              { name: "95# " },
                              { name: "98# " },
                              { name: "0# " },
                              { name: "B公司" },
                              { name: "C公司" },
                              { name: "D公司" },
                              {
                                name: "直分销"
                              },
                              { name: "A批发商" },
                              { name: "B批发商" },
                              { name: "C批发商" },
                              { name: "D批发商" },
                              {
                                name: "零售"
                              },
                              { name: "汉十高速双沟停车区加油北站" },
                              { name: "双沟0#" },
                              { name: "双沟92#" },
                              { name: "双沟95#" },
                              { name: "双沟98#" },
                              { name: "汉十高速枣阳服务区加油南站(新)" },
                              { name: "枣阳0#" },
                              { name: "枣阳92#" },
                              { name: "枣阳95#" },
                              { name: "枣阳98#" },
                              { name: "汉十高速随州服务区加油南站" },
                              { name: "随州0#" },
                              { name: "随州92#" },
                              { name: "随州95#" },
                              { name: "随州98#" },
                              { name: "沙公高速沙市服务区西站" },
                              { name: "沙市0#" },
                              { name: "沙市92#" },
                              { name: "沙市95#" },
                              { name: "沙市98#" },
                              { name: "汉十高速钟岗服务区加油北站" },
                              { name: "钟岗0#" },
                              { name: "钟岗92#" },
                              { name: "钟岗95#" },
                              { name: "钟岗98#" },
                              { name: "孝洪高速汉川西服务区加油东站" },
                              { name: "汉川0#" },
                              { name: "汉川92#" },
                              { name: "汉川95#" },
                              { name: "汉川98#" },
                              {
                                name: "A供应商"
                              },
                              {
                                name: "B供应商"
                              }
                            ],
                            links: [
                              {
                                source: "A供应商",
                                target: "库存",
                                value: 50000
                              },
                              {
                                source: "B供应商",
                                target: "库存",
                                value: 20000
                              },

                              {
                                source: "库存",
                                target: "贸易",
                                value: 20000
                              },
                              {
                                source: "贸易",
                                target: "A公司",
                                value: 17000
                              },
                              {
                                source: "A公司",
                                target: "92#",
                                value: 4250
                              },
                              {
                                source: "A公司",
                                target: "95#",
                                value: 4250
                              },
                              {
                                source: "A公司",
                                target: "98#",
                                value: 4250
                              },
                              {
                                source: "A公司",
                                target: "0#",
                                value: 4250
                              },
                              {
                                source: "贸易",
                                target: "B公司",
                                value: 1000
                              },
                              {
                                source: "贸易",
                                target: "C公司",
                                value: 1000
                              },
                              {
                                source: "贸易",
                                target: "D公司",
                                value: 1000
                              },

                              {
                                source: "库存",
                                target: "直分销",
                                value: 20000
                              },
                              {
                                source: "直分销",
                                target: "A批发商",
                                value: 17000
                              },
                              {
                                source: "A批发商",
                                target: "0# ",
                                value: 4250
                              },
                              {
                                source: "A批发商",
                                target: "92# ",
                                value: 4250
                              },
                              {
                                source: "A批发商",
                                target: "95# ",
                                value: 4250
                              },
                              {
                                source: "A批发商",
                                target: "98# ",
                                value: 4250
                              },
                              {
                                source: "直分销",
                                target: "B批发商",
                                value: 1000
                              },
                              {
                                source: "直分销",
                                target: "C批发商",
                                value: 1000
                              },
                              {
                                source: "直分销",
                                target: "D批发商",
                                value: 1000
                              },

                              {
                                source: "库存",
                                target: "零售",
                                value: 20000
                              },
                              {
                                source: "零售",
                                target: "汉十高速双沟停车区加油北站",
                                value: 3333
                              },
                              {
                                source: "汉十高速双沟停车区加油北站",
                                target: "双沟0#",
                                value: 833
                              },
                              {
                                source: "汉十高速双沟停车区加油北站",
                                target: "双沟92#",
                                value: 833
                              },
                              {
                                source: "汉十高速双沟停车区加油北站",
                                target: "双沟95#",
                                value: 833
                              },
                              {
                                source: "汉十高速双沟停车区加油北站",
                                target: "双沟98#",
                                value: 833
                              },

                              {
                                source: "零售",
                                target: "汉十高速枣阳服务区加油南站(新)",
                                value: 3333
                              },
                              {
                                source: "汉十高速枣阳服务区加油南站(新)",
                                target: "枣阳0#",
                                value: 833
                              },
                              {
                                source: "汉十高速枣阳服务区加油南站(新)",
                                target: "枣阳92#",
                                value: 833
                              },
                              {
                                source: "汉十高速枣阳服务区加油南站(新)",
                                target: "枣阳95#",
                                value: 833
                              },
                              {
                                source: "汉十高速枣阳服务区加油南站(新)",
                                target: "枣阳98#",
                                value: 833
                              },
                              {
                                source: "零售",
                                target: "汉十高速随州服务区加油南站",
                                value: 3333
                              },
                              {
                                source: "汉十高速随州服务区加油南站",
                                target: "随州0#",
                                value: 833
                              },
                              {
                                source: "汉十高速随州服务区加油南站",
                                target: "随州92#",
                                value: 833
                              },
                              {
                                source: "汉十高速随州服务区加油南站",
                                target: "随州95#",
                                value: 833
                              },
                              {
                                source: "汉十高速随州服务区加油南站",
                                target: "随州98#",
                                value: 833
                              },
                              {
                                source: "零售",
                                target: "沙公高速沙市服务区西站",
                                value: 3333
                              },
                              {
                                source: "沙公高速沙市服务区西站",
                                target: "沙市0#",
                                value: 833
                              },
                              {
                                source: "沙公高速沙市服务区西站",
                                target: "沙市92#",
                                value: 833
                              },
                              {
                                source: "沙公高速沙市服务区西站",
                                target: "沙市95#",
                                value: 833
                              },
                              {
                                source: "沙公高速沙市服务区西站",
                                target: "沙市98#",
                                value: 833
                              },

                              {
                                source: "零售",
                                target: "汉十高速钟岗服务区加油北站",
                                value: 3333
                              },
                              {
                                source: "汉十高速钟岗服务区加油北站",
                                target: "钟岗0#",
                                value: 833
                              },
                              {
                                source: "汉十高速钟岗服务区加油北站",
                                target: "钟岗92#",
                                value: 833
                              },
                              {
                                source: "汉十高速钟岗服务区加油北站",
                                target: "钟岗95#",
                                value: 833
                              },
                              {
                                source: "汉十高速钟岗服务区加油北站",
                                target: "钟岗98#",
                                value: 833
                              },

                              {
                                source: "零售",
                                target: "孝洪高速汉川西服务区加油东站",
                                value: 3333
                              },
                              {
                                source: "孝洪高速汉川西服务区加油东站",
                                target: "汉川0#",
                                value: 833
                              },
                              {
                                source: "孝洪高速汉川西服务区加油东站",
                                target: "汉川92#",
                                value: 833
                              },
                              {
                                source: "孝洪高速汉川西服务区加油东站",
                                target: "汉川95#",
                                value: 833
                              },
                              {
                                source: "孝洪高速汉川西服务区加油东站",
                                target: "汉川98#",
                                value: 833
                              }
                            ],
                            // nodeWidth:'30',
                            nodeAlign: "left",
                            draggable: true,
                            label: {
                              position: "left"
                            },
                            lineStyle: {
                              color: "source",
                              curveness: 0.5
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "流入占比",
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
                            "A进货商",
                            "B进货商",
                            "C进货商",
                            "D进货商",
                            "E进货商"
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
                              "#47a2ff",
                              "#53c8d1",
                              "#59cb74",
                              "#fbd444",
                              "#7f6aad"
                            ],
                            data: [
                              { value: 335, name: "A进货商" },
                              { value: 310, name: "B进货商" },
                              { value: 234, name: "C进货商" },
                              { value: 135, name: "D进货商" },
                              { value: 1548, name: "E进货商" }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "流出占比",
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
                          formatter: "{b}: {c}万元 ({d}%)"
                        },

                        legend: {
                          orient: "horizontal",
                          bottom: 10,
                          data: ["贸易", "直分销", "零售"]
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
                              { value: 335, name: "贸易" },
                              { value: 310, name: "直分销" },
                              { value: 234, name: "零售" }
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
    /*await this.obtainAxios("利润", "2020", "lr");
    await this.obtainAxios("利润", "2019", "lr");*/
  },
  watch: {
    viewChange() {
      this.$refs["collapse"].refresh(this.collapseData);
    }
  }
};
</script>
