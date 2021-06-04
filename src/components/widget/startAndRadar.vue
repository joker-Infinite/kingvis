<template>
  <div style="width: 100%;height: 100%">
    <div class="star" v-if="showStar">
      <p>
        <span :style="{ color: color }">硬件环境：</span>
        <el-rate :max="3" :value="3" disabled></el-rate>
      </p>
      <p>
        <span :style="{ color: color }">车流量：</span>
        <el-rate :max="3" :value="3" disabled></el-rate>
      </p>
      <p>
        <span :style="{ color: color }">商户评级：</span>
        <el-rate :max="3" :value="3" disabled></el-rate>
      </p>
    </div>
    <div class="radar" v-if="color !== 'black'">
      <div style="position:absolute;left: -20px;font-size: 18px;">指数：</div>
      <div id="radar"></div>
    </div>
    <show-e-charts ref="showECharts"></show-e-charts>
  </div>
</template>

<script>
	import ShowECharts from "../common/showECharts";

	export default {
		name: "startAndRadar",
		components: {ShowECharts},
		props: {
			color: {
				type: String,
				default: "white"
			},
			showStar: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				option: {
					tooltip: {},
					radar: {
						center: ["55%", "50%"],
						radius: 50,
						indicator: [
							{name: "订单数量", max: 1000},
							{name: "客单价", max: 500},
							{name: "均车消费", max: 500},
							{name: "转化率", max: 100},
							{name: "坪效", max: 600}
						],
						name: {
							formatter: function (v) {
								return v;
							}
						},
						triggerEvent: true
					},
					series: [
						{
							name: '指数',
							type: "radar",
							data: [{
								value: [500, 90, 200, 80, 85, 90]
							}]
						}
					]
				}
			};
		},
		methods: {
			initCharts() {
				let that = this;
				let EChartsBox = {
					//订单数量
					'订单数量': {
						title: {
							text: '订单数量',
							x: 'center',
							y: '5%',
							textStyle: {
								color: '#FFF',
								fontSize: 30
							}
						},
						grid: {
							bottom: "10%",
							left: "9%",
							right: "5%",
							top: "20%"
						},
						tooltip: {
							trigger: "axis",
							formatter:'{b} 月<br>{c} 单',
							axisPointer: {
								type: "shadow"
							}
						},
						xAxis: {
							name: '月',
							type: 'category',
							data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
							axisTick: {show: false},
							axisLabel: {
								textStyle: {color: "#FFF"}
							},
							splitLine: {show: false},
							axisLine: {
								lineStyle: {color: "#FFF"}
							}
						},
						yAxis: {
							name: '单',
							type: 'value',
							axisTick: {show: false},
							axisLabel: {
								textStyle: {color: "#FFF"}
							},
							splitLine: {show: false},
							axisLine: {
								lineStyle: {color: "#FFF"}
							}
						},
						series: [{
							data: [50, 80, 60, 62, 68, 56, 76, 87, 98, 96, 99, 112],
							type: 'line',
							color: '#43CEF7'
						}]
					},
					//客单价
					'客单价': {
						title: {
							text: '客单价',
							x: 'center',
							y: '5%',
							textStyle: {
								color: '#FFF',
								fontSize: 30
							}
						},
						grid: {
							bottom: "10%",
							left: "9%",
							right: "5%",
							top: "20%"
						},
						tooltip: {
							trigger: "axis",
							formatter:'{b} 月<br>{c} 元',
							axisPointer: {
								type: "shadow"
							}
						},
						xAxis: {
							name: '月',
							type: 'category',
							data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
							axisTick: {show: false},
							axisLabel: {
								textStyle: {color: "#FFF"}
							},
							splitLine: {show: false},
							axisLine: {
								lineStyle: {color: "#FFF"}
							}
						},
						yAxis: {
							name: '元',
							type: 'value',
							axisTick: {show: false},
							axisLabel: {
								textStyle: {color: "#FFF"}
							},
							splitLine: {show: false},
							axisLine: {
								lineStyle: {color: "#FFF"}
							}
						},
						series: [{
							data: [82, 93, 90, 93, 129, 133, 132, 145, 156, 127, 146, 143],
							type: 'line',
							color: '#43CEF7'
						}]
					},
					//坪效
					'坪效': {
						title: {
							text: '坪效',
							x: 'center',
							y: '5%',
							textStyle: {
								color: '#FFF',
								fontSize: 30
							}
						},
						grid: {
							bottom: "10%",
							left: "9%",
							right: "5%",
							top: "20%"
						},
						tooltip: {
							trigger: "axis",
							formatter:'{b} 月<br>{c} 元/平',
							axisPointer: {
								type: "shadow"
							}
						},
						xAxis: {
							name: '月',
							type: 'category',
							data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
							axisTick: {show: false},
							axisLabel: {
								textStyle: {color: "#FFF"}
							},
							splitLine: {show: false},
							axisLine: {
								lineStyle: {color: "#FFF"}
							}
						},
						yAxis: {
							name: '元/平',
							type: 'value',
							axisTick: {show: false},
							axisLabel: {
								textStyle: {color: "#FFF"}
							},
							splitLine: {show: false},
							axisLine: {
								lineStyle: {color: "#FFF"}
							}
						},
						series: [{
							data: [3, 3.2, 4.3, 5.1, 4.6, 3.7, 4.8, 5.3, 6.2, 6.8, 5.9, 6.1],
							type: 'line',
							color: '#43CEF7'
						}]
					},
					//均车消费
					'均车消费': {
						title: {
							text: '均车消费',
							x: 'center',
							y: '5%',
							textStyle: {
								color: '#FFF',
								fontSize: 30
							}
						},
						grid: {
							bottom: "10%",
							left: "9%",
							right: "5%",
							top: "20%"
						},
						tooltip: {
							trigger: "axis",
							formatter:'{b} 月<br>{c} 元/车',
							axisPointer: {
								type: "shadow"
							}
						},
						xAxis: {
							name: '月',
							type: 'category',
							data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
							axisTick: {show: false},
							axisLabel: {
								textStyle: {color: "#FFF"}
							},
							splitLine: {show: false},
							axisLine: {
								lineStyle: {color: "#FFF"}
							}
						},
						yAxis: {
							name: '元/车',
							type: 'value',
							axisTick: {show: false},
							axisLabel: {
								textStyle: {color: "#FFF"}
							},
							splitLine: {show: false},
							axisLine: {
								lineStyle: {color: "#FFF"}
							}
						},
						series: [{
							data: [321, 254, 225, 331, 421, 435, 436, 502, 485, 523, 533, 569],
							type: 'line',
							color: '#43CEF7'
						}]
					},
					//转化率
					'转化率': {
						title: {
							text: '转化率',
							x: 'center',
							y: '5%',
							textStyle: {
								color: '#FFF',
								fontSize: 30
							}
						},
						grid: {
							bottom: "10%",
							left: "9%",
							right: "5%",
							top: "20%"
						},
						tooltip: {
							trigger: "axis",
							formatter:'{b} 月<br>{c} %',
							axisPointer: {
								type: "shadow"
							}
						},
						xAxis: {
							name: '月',
							type: 'category',
							data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
							axisTick: {show: false},
							axisLabel: {
								textStyle: {color: "#FFF"}
							},
							splitLine: {show: false},
							axisLine: {
								lineStyle: {color: "#FFF"}
							}
						},
						yAxis: {
							name: '%',
							type: 'value',
							axisTick: {show: false},
							axisLabel: {
								textStyle: {color: "#FFF"}
							},
							splitLine: {show: false},
							axisLine: {
								lineStyle: {color: "#FFF"}
							}
						},
						series: [{
							data: [30.32, 33.56, 36.52, 37.23, 42.55, 42.87, 53.87, 55.63, 57.32, 62.58, 60.63, 67.32],
							type: 'line',
							color: '#43CEF7'
						}]
					}
				};
				let charts = this.$echarts.init(document.getElementById("radar"));
				charts.setOption(this.option);
				charts.on('click', v => {
					that.$refs['showECharts'].openDialog(EChartsBox[v.name]);
				});
			}
		},
		mounted() {
			this.initCharts();
		}
	};
</script>

<style scoped lang="less">
  .star {
    position: absolute;
    font-size: 14px;
    left: 15px;
    top: 35px;
    width: 250px;

    p {
      width: 200px;
      height: 100%;
      overflow: hidden;
    }

    span {
      width: 70px;
      color: white;
      float: left;
      text-align: right;
      line-height: 20px;
    }

    /deep/ .el-rate {
      float: left;
      width: 48px;
    }

    /deep/ .el-rate > .el-rate__item > .el-rate__icon {
      font-size: 16px;
      margin-right: 0;
      line-height: 20px;
    }
  }

  .radar {
    position: absolute;
    right: 0;
    top: 0;
    width: 200px;
    height: 200px;

    #radar {
      width: 200px;
      height: 200px;
    }
  }
</style>
