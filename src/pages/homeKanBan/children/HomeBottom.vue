<template>
  <div class="content">
    <div class="tab">
      <div
        :class="{ btn: true, select: select === 'A' }"
        @click="selectOption('A')"
      >
        营<i style="display: inline-block; height: 17px; width: 100%"></i>收
      </div>
      <div
        :class="{ btn: true, select: select === 'B' }"
        @click="selectOption('B')"
      >
        利<i style="display: inline-block; height: 17px; width: 100%"></i>润
      </div>
    </div>
    <div class="item HomeBottomA" @mouseover="mouseHover('AD')">
      <!--  <div class="MMA" v-if="!AD && AD.series[0].data.length===0">
            平均：{{showTarget(this.AD,'average')}}<br>
            最高：{{showTarget(this.AD,'max')}}
            最低：{{showTarget(this.AD,'min')}}
        </div>-->
      <border v-if="backdrop == 0"></border>
      <border-plan-b v-if="backdrop == 1"></border-plan-b>
      <operations class="operations" @showOne="showOne"></operations>
      <div class="DataEi" id="HomeBottomAData"></div>
      <div class="ei" id="HomeBottomA"></div>
    </div>
    <div class="item HomeBottomB" @mouseover="mouseHover('BD')">
      <!-- <div class="MMA">
           平均：{{showTarget(this.BD,'average')}}<br>
           最高：{{showTarget(this.BD,'max')}}
           最低：{{showTarget(this.BD,'min')}}
       </div>-->
      <border v-if="backdrop == 0"></border>
      <border-plan-b v-if="backdrop == 1"></border-plan-b>
      <operations class="operations" @showOne="showOne"></operations>
      <div class="DataEi" id="HomeBottomBData"></div>
      <div class="ei" id="HomeBottomB"></div>
    </div>
    <div class="item HomeBottomC" @mouseover="mouseHover('CD')">
      <!-- <div class="MMA">
           平均：{{showTarget(this.CD,'average')}}<br>
           最高：{{showTarget(this.CD,'max')}}
           最低：{{showTarget(this.CD,'min')}}
       </div>-->
      <border v-if="backdrop == 0"></border>
      <border-plan-b v-if="backdrop == 1"></border-plan-b>
      <operations class="operations" @showOne="showOne"></operations>
      <div class="DataEi" id="HomeBottomCData"></div>
      <div class="ei" id="HomeBottomC"></div>
    </div>
    <div class="item HomeBottomD" @mouseover="mouseHover('DD')">
      <!--  <div class="MMA">
            平均：{{showTarget(this.DD,'average')}}<br>
            最高：{{showTarget(this.DD,'max')}}
            最低：{{showTarget(this.DD,'min')}}
        </div>-->
      <border v-if="backdrop == 0"></border>
      <border-plan-b v-if="backdrop == 1"></border-plan-b>
      <operations class="operations" @showOne="showOne"></operations>
      <div class="DataEi" id="HomeBottomDData"></div>
      <div class="ei" id="HomeBottomD"></div>
    </div>
    <div class="item HomeBottomE" @mouseover="mouseHover('ED')">
      <!-- <div class="MMA">
           平均：{{showTarget(this.ED,'average')}}<br>
           最高：{{showTarget(this.ED,'max')}}
           最低：{{showTarget(this.ED,'min')}}
       </div>-->
      <border v-if="backdrop == 0"></border>
      <border-plan-b v-if="backdrop == 1"></border-plan-b>
      <operations class="operations" @showOne="showOne"></operations>
      <div class="DataEi" id="HomeBottomEData"></div>
      <div class="ei" id="HomeBottomE"></div>
    </div>
    <!--<div class="item HomeBottomF" @mouseover="mouseHover('FD')">
        <div class="MMA">
            平均：{{showTarget(this.FD,'average')}}<br>
            最高：{{showTarget(this.FD,'max')}}
            最低：{{showTarget(this.FD,'min')}}
        </div>
        <operations class="operations" @showOne="showOne"></operations>
        <div class="ei" id="HomeBottomF"></div>
    </div>-->
    <div class="item HomeBottomG" @mouseover="mouseHover('GD')">
      <border v-if="backdrop == 0"></border>
      <border-plan-b v-if="backdrop == 1"></border-plan-b>
      <operations class="operations" @showOne="showOne(1)"></operations>
      <div class="DataEi" id="HomeBottomGData"></div>
      <div class="ei" id="HomeBottomG"></div>
    </div>
  </div>
</template>

<script>
import Operations from "../../../components/common/operations";
import clone from "../../../../public/api/clone";
import Border from "./border";
import BorderPlanB from "./borderPlanB";

export default {
  name: "HomeBottom",
  components: { BorderPlanB, Border, Operations },
  props: {
    backdrop: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      AD: {},
      BD: {},
      CD: {},
      DD: {},
      ED: {},
      FD: {},
      GD: {},
      option: {},
      select: "A",
      option_A: {},
      option_B: {},
      options: {},
      resizeData: [],
      financeTypeId: "",
      finance: [],
      tooltip: [],
      showMore: false
    };
  },
  methods: {
    // 暂无数据啥的
    isNoData(is, id, option) {
      if (is.length === 0) {
        option.grid.show = false;
        option.yAxis[0].show = false;
        option.xAxis[0].show = false;
        document.getElementById(id._zr.dom.id + "Data").innerHTML = "暂无数据";
      } else {
        document.getElementById(id._zr.dom.id + "Data").innerHTML = "";
      }
      this.$echarts
        .init(document.getElementById(id._zr.dom.id))
        .setOption(option);
    },
    showTarget(v, type) {
      let obj = {
        min: "",
        max: "",
        average: ""
      };
      let mun = [];
      let num = 0;
      if (v && v.series) {
        let d = v.series[0].data;
        d.forEach(i => {
          mun.push(i.value);
          num += Number(i.value);
        });
        obj.max = Math.max(...mun);
        obj.min = Math.min(...mun);
        obj.average = num / d.length;
        if (this.select === "A") {
          obj.max = (obj.max / 100000000).toFixed(2);
          obj.min = (obj.min / 100000000).toFixed(2);
          obj.average = (obj.average / 100000000).toFixed(2);
        }
        if (this.select === "B") {
          obj.max = (obj.max / 1000000).toFixed(2);
          obj.min = (obj.min / 1000000).toFixed(2);
          obj.average = (obj.average / 1000000).toFixed(2);
        }
        if (type === "max") {
          return obj.max;
        }
        if (type === "min") {
          return obj.min;
        }
        if (type === "average") {
          return obj.average;
        }
      }
    },
    // 请求axios
    isAxios(url, financeTypeId, plateId, title, option, v, HomeBottom) {
      let optionss = clone(option);
      let params;
      // HomeBottom.setOption(option);
      if (title == "实业公司") {
        params = {
          financeTypeId: this.financeTypeId,
          plateId: 123
        };
      } else {
        params = {
          financeTypeId: this.financeTypeId,
          plateId: plateId
        };
      }
      this.$axios
        .get(url, {
          params: params
        })
        .then(res => {
          optionss.title.text = title;
          let xBxis = [];
          let yAxis = [];
          res.data.data.forEach(element => {
            xBxis.push(element.xBxis);
            let Yaxis = {
              value: element.yAxis,
              itemStyle: {
                normal: {
                  position: "inside",
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "rgb(166,72,255,1)" },
                    { offset: 0.5, color: "rgb(44,30,255,1)" },
                    { offset: 1, color: "rgb(70,70,255,0)" }
                  ])
                }
              }
            };
            yAxis.push(Yaxis);
          });
          xBxis.forEach(i => {
            optionss.xAxis[0].data.push(parseInt(i.split("-")[1]));
          });
          optionss.xAxis[0].data = [1, "", "", 4, "", "", 7, "", "", 10];
          optionss.series[0].data = yAxis;
          this[v] = optionss;
          HomeBottom.setOption(optionss);
          this.isNoData(res.data.data, HomeBottom, optionss);
        });
    },
    selectOption(v) {
      this.select = v;
      if (v === "A") {
        this.initECharts_bottom(this.option_A);
        this.initBottomEnd("A");
        return;
      }
      this.initECharts_bottom(this.option_B);
      this.initBottomEnd("B");
    },
    mouseHover(v) {
      switch (v) {
        case "AD":
          this.option = this.AD;
          break;
        case "BD":
          this.option = this.BD;
          break;
        case "CD":
          this.option = this.CD;
          break;
        case "DD":
          this.option = this.DD;
          break;
        case "ED":
          this.option = this.ED;
          break;
        case "FD":
          this.option = this.FD;
          break;
        default:
          break;
      }
    },
    showOne(is) {
      let option = clone(this.option);
      let options = clone(this.options);
      // if(!!option.grid.borderWidth){

      // }
      if (is === 1) {
        this.showMore = true;
        options.title.x = "center";
        options.title.textStyle.fontSize = 25;
        options.barWidth = 30;
        options.title.padding = [50, 50, 50, 50];
        this.$emit("showOne", options, this.select);
      } else {
        option.title.textStyle.fontSize = 25;
        option.barWidth = 30;
        option.title.x = "center";
        option.title.padding = [50, 50, 50, 50];
        this.$emit("showOne", option, "MMA");
      }
    },
    initECharts_bottom(option) {
      let HomeBottomA = this.$echarts.init(
        document.getElementById("HomeBottomA")
      );
      let HomeBottomB = this.$echarts.init(
        document.getElementById("HomeBottomB")
      );
      let HomeBottomC = this.$echarts.init(
        document.getElementById("HomeBottomC")
      );
      let HomeBottomD = this.$echarts.init(
        document.getElementById("HomeBottomD")
      );
      let HomeBottomE = this.$echarts.init(
        document.getElementById("HomeBottomE")
      );
      /* let HomeBottomF = this.$echarts.init(
               document.getElementById("HomeBottomF")
           );*/
      let datas = "";
      this.$axios.get("/api/jt_finance/plate_list").then(res => {
        datas = res.data.data;
        this.isAxios(
          "/api/index/liudabankuai",
          this.financeTypeId,
          "",
          "实业公司",
          option,
          "AD",
          HomeBottomA
        );
        this.isAxios(
          "/api/index/liudabankuai",
          this.financeTypeId,
          datas[8].plateId,
          datas[8].plateName,
          option,
          "BD",
          HomeBottomB
        );
        this.isAxios(
          "/api/index/liudabankuai",
          this.financeTypeId,
          datas[3].plateId,
          datas[3].plateName,
          option,
          "CD",
          HomeBottomC
        );
        this.isAxios(
          "/api/index/liudabankuai",
          this.financeTypeId,
          datas[4].plateId,
          datas[4].plateName,
          option,
          "DD",
          HomeBottomD
        );
        this.isAxios(
          "/api/index/liudabankuai",
          this.financeTypeId,
          datas[0].plateId,
          datas[0].plateName,
          option,
          "ED",
          HomeBottomE
        );
        /*this.isAxios("/api/index/liudabankuai", this.financeTypeId, datas[5].plateId,
                datas[5].plateName,
                option,
                "FD",
                HomeBottomF
            );*/
      });
    },
    initBottomEnd(v) {
      let that = this;
      let HomeBottomG = this.$echarts.init(
        document.getElementById("HomeBottomG")
      );
      let option = {
        barWidth: 10,
        title: {
          x: "center",
          y: "-1%",
          text: "经营目标完成率",
          show: true,
          textStyle: {
            fontFamily: "幼圆",
            textAlign: "center",
            color: "#FFF",
            fontSize: "15"
          }
        },
        tooltip: {
          trigger: "axis",
          formatter: v => {
            for (let j = 0; j < that.tooltip.length; j++) {
              let i = that.tooltip[j];
              if (i.tCRate == v[0].value && this.select == "A") {
                return (
                  "目标营收：" +
                  i.targetMoney +
                  "万元<br>实际营收：" +
                  i.actualMoney +
                  "万元"
                );
              }
              if (i.tCRate == v[0].value && this.select == "B") {
                return (
                  "目标利润：" +
                  i.targetMoney +
                  "万元<br>实际利润：" +
                  i.actualMoney +
                  "万元"
                );
              }
            }
          },
          axisPointer: {
            type: "shadow"
          }
        },
        grid: {
          top: "15%",
          bottom: 30
        },
        xAxis: {
          type: "value",
          position: "bottom",
          axisTick: {
            //坐标轴刻度
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "#FFF"
            }
          },
          splitLine: { show: false },
          axisLine: {
            lineStyle: {
              color: "#FFF"
            }
          }
        },
        yAxis: {
          type: "category",
          axisLine: { show: false },
          axisLabel: { show: false },
          axisTick: { show: false },
          splitLine: { show: false },
          data: []
        },
        series: [
          {
            name: "收入",
            type: "bar",
            stack: "总量",
            itemStyle: {
              normal: {
                barBorderRadius: 30, //设置柱状图为圆角
                color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: "#0075fe"
                  },
                  {
                    offset: 1,
                    color: "#03b3ff"
                  }
                ])
              }
            },
            label: {
              show: true,
              position: "insideLeft",
              color: "#fff",
              formatter: v => {
                if (that.showMore) {
                  return (
                    v.name +
                    "：" +
                    v.value +
                    "%  " +
                    (v.value - 91.67).toFixed(2) +
                    "%"
                  );
                }
                return v.name + "：" + v.value + "%";
              }
            },
            data: [],
            markLine: {}
          }
        ]
      };
      let financeTypeId = "";
      if (v === "A") {
        this.financeTypeId = financeTypeId = this.finance[1].financeTypeId;
      }
      if (v === "B") {
        this.financeTypeId = financeTypeId = this.finance[0].financeTypeId;
      }
      this.$axios("/api/index/wan_cheng_lv", {
        params: { financeTypeId: financeTypeId }
      }).then(res => {
        let datas = res.data.data;
        this.tooltip = datas;
        datas.sort(function(a, b) {
          return a.tCRate - b.tCRate;
        });
        let xBxis = [];
        let yAxis = [];
        datas.forEach(i => {
          if (i.yAxis != "小龙虾公司" && i.yAxis != "新致公司") {
            xBxis.push(i.tCRate);
            yAxis.push(i.plateId);
          }
        });
        option.yAxis.data = yAxis;
        option.series[0].data = xBxis;
        this.options = clone(option);
        let average = 0;
        this.options.series[0].data.forEach(i => {
          average += Number(i);
        });
        average = parseInt(average / this.options.series[0].data.length);
        this.options.series[0].markLine = {
          data: [
            {
              type: "average",
              name: "目标值",
              xAxis: 91.67 //设置平均值所在位置
            }
          ],
          symbol: ["none", "none"],
          position: "insideTopCenter",
          itemStyle: {
            normal: {
              lineStyle: {
                type: "dotted",
                color: "white"
              },
              label: {
                show: true,
                position: "middle",
                formatter: "目标值 : " + 91.67
              }
            }
          },
          large: true,
          effect: {
            show: false,
            loop: true,
            period: 0,
            scaleSize: 2,
            color: null,
            shadowColor: null,
            shadowBlur: null
          }
        };
        HomeBottomG.setOption(option);
      });
    },
    isResize() {
      this.resizeData.forEach(element => {
        element.resize();
      });
    }
  },
  mounted() {
    this.option_A = {
      barWidth: 10,
      grid: {
        show: true,
        top: "35",
        left: "12%",
        right: "5%",
        bottom: "30"
      },
      title: {
        text: "",
        show: true,
        x: "center",
        y: "-1%",
        textStyle: {
          fontFamily: "幼圆",
          color: "#FFF",
          fontSize: "15"
        }
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "line",
          lineStyle: {
            color: "red",
            width: 1
          }
        },
        formatter: function(list) {
          return (
            list[0].dataIndex +
            1 +
            "月：" +
            (list[0].value / 100000000).toFixed(2)
          );
        }
      },
      color: ["#17cce1", "#a549ff"],
      xAxis: [
        {
          show: true,
          type: "category",
          data: [],
          axisPointer: {
            type: "shadow"
          },
          axisTick: {
            //坐标轴刻度
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "#FFF"
            }
          }
        }
      ],
      yAxis: [
        {
          show: true,
          name: "亿",
          axisLine: {
            show: false,
            lineStyle: {
              color: "#fff"
            }
          },
          type: "value",
          axisLabel: {
            formatter: function(val) {
              return val / 100000000;
            },
            textStyle: {
              color: "#FFF"
            }
          },
          axisTick: {
            //坐标轴刻度
            show: false
          },
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "#001e6c"
            }
          },
          splitNumber: 2.6
        }
      ],
      series: [
        {
          name: "营收",
          type: "line",
          data: []
        }
      ]
    };
    this.option_B = {
      barWidth: 10,
      grid: {
        show: true,
        top: "35",
        left: "12%",
        right: "5%",
        bottom: "30"
      },
      title: {
        text: "",
        show: true,
        x: "center",
        y: "-1%",
        textStyle: {
          fontFamily: "幼圆",
          lineHeight: 25,
          color: "#FFF",
          fontSize: "15"
        }
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "line",
          lineStyle: {
            color: "red",
            width: 1
          }
        },
        formatter: function(list) {
          return (
            list[0].dataIndex +
            1 +
            "月：" +
            (list[0].value / 100000000).toFixed(2)
          );
        }
      },
      color: ["#17cce1"],
      xAxis: [
        {
          type: "category",
          data: [],
          axisPointer: {
            type: "shadow"
          },
          axisTick: {
            //坐标轴刻度
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "#FFF"
            }
          }
        }
      ],
      yAxis: [
        {
          name: "百万",
          axisLine: {
            show: false,
            lineStyle: {
              color: "#fff"
            }
          },
          type: "value",
          axisLabel: {
            formatter: function(val) {
              return val / 1000000;
            },
            textStyle: {
              color: "#FFF"
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "#001e6c"
            }
          },
          splitNumber: 1
        }
      ],
      series: [
        {
          name: "营收",
          type: "line",
          data: []
        }
      ]
    };
    this.$axios.get("/api/index/finance_type_list").then(res => {
      this.finance = res.data.data;
      this.financeTypeId = res.data.data[1].financeTypeId;
      this.initBottomEnd("A");
    });
    this.initECharts_bottom(this.option_A);
  },
  watch: {
    backdrop: {
      handler: function(nv, ov) {
        let data = document.getElementsByClassName("item");
        let style = [
          {
            border: "1px solid #4cbcf4",
            boxShadow: " 0 0 50px #4cbcf4 inset"
          },
          {
            border: "1px solid #051021",
            boxShadow: " 0 0 20px #0354bb inset",
            background: "rgba(6,17,36,.6)"
          },
          {
            border: "none",
            boxShadow: "none",
            background: "#FFF",
            borderRadius: "10px"
          }
        ];
        for (let i = 0; i < data.length; i++) {
          Object.assign(data[i].style, style[nv]);
        }
      },
      deep: true
    }
  }
};
</script>

<style scoped lang="less">
.content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  flex-direction: row;

  .tab {
    width: 30px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .btn {
      width: 100%;
      height: 40%;
      text-align: center;
      // border: 1px solid #38d;
      // background: rgba(42, 57, 115, 0.7);
      border-radius: 2px;
      color: white;
      cursor: pointer;
      background: url("../../../assets/frame3.png") no-repeat;
      background-size: 100% 100%;
      padding-top: 0.5em;
    }

    .btn:hover {
      // background: rgba(51, 136, 221, .7);
      color: #ffc363;
    }

    .select {
      color: #ffc363;
      // background: rgba(51, 136, 221, .7);
    }
  }

  /*
        border: 1px solid #4cbcf4;
                  box-shadow: 0 0 50px #4cbcf4 inset;
      */

  .item {
    width: 15.5%;
    height: 100%;
    position: relative;
    border: 1px solid #4cbcf4;
    box-shadow: 0 0 50px #4cbcf4 inset;
    background-size: 100% 120%;

    .ei {
      width: 100%;
      height: 100%;
    }

    .MMA {
      width: 55%;
      position: absolute;
      top: 14%;
      right: 0;
      text-align: left;
      font-size: 12px;
      color: white;
    }
  }

  .HomeBottomA:hover .operations {
    display: block;
  }

  .HomeBottomB:hover .operations {
    display: block;
  }

  .HomeBottomC:hover .operations {
    display: block;
  }

  .HomeBottomD:hover .operations {
    display: block;
  }

  .HomeBottomE:hover .operations {
    display: block;
  }

  .HomeBottomF:hover .operations {
    display: block;
  }

  .HomeBottomG:hover .operations {
    display: block;
  }

  .DataEi {
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 80px;
    height: 20px;
    font-weight: 700;
    font-size: 20px;
  }
}
</style>
