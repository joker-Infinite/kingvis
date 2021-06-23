<template>
  <div class="financialChart">
    <div class="financialChart_left">
      <div class="left">
        <el-input placeholder="输入关键字进行过滤" v-model="filterText">
        </el-input>
        <div class="myTree">
          <div>
            <el-tree
              class="filter-tree"
              :data="data"
              :props="defaultProps"
              :highlight-current="true"
              :default-expand-all="false"
              @node-click="nodeClick"
              :filter-node-method="filterNode"
              ref="tree"
            >
            </el-tree>
          </div>
        </div>
      </div>
    </div>
    <div class="financialChart_right">
      <div class="financialChart_right_header">
        <el-select v-model="year">
          <el-option label="2020" :value="2020"></el-option>
          <el-option label="2021" :value="2021"></el-option>
        </el-select>
      </div>
      <div class="financialChart_right_content">
        <div class="charts" v-for="i in 20">
          <div
            class="charts_content"
            :id="'financialChart-' + i + '-' + j"
            v-for="j in 2"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./financialChart.less";

export default {
  name: "financialChart",
  data() {
    return {
      data: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1"
                }
              ]
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1"
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      },
      filterText: "",
      year: 2021
    };
  },
  computed: {},
  methods: {
    nodeClick() {},
    filterNode() {}
  },
  mounted() {
    let option = [
      {
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
              ":<br>营收:" +
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
            radius: ["30%", "40%"],
            clockwise: true,
            avoidLabelOverlap: true,
            hoverOffset: 15,
            itemStyle: {
              normal: {
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
                length: 15,
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
              { name: "小龙虾", value: 36578941 },
              { name: "小吃", value: 12054890 }
            ]
          }
        ]
      },
      {
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
    ];
    this.$nextTick(_ => {
      for (let i = 1; i < 21; i++) {
        for (let j = 1; j < 3; j++) {
          let id = "financialChart-" + i + "-" + j;
          this.$echarts
            .init(document.getElementById(id))
            .setOption(option[j - 1]);
        }
      }
    });
  },
  created() {},
  watch: {}
};
</script>

<style scoped></style>
