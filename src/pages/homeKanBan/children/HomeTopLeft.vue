<template>
  <div class="content">
    <div class="top tcb" @mouseover="mouseHover('AD')">
      <border v-if="backdrop == 0"></border>
      <border-plan-b v-if="backdrop == 1"></border-plan-b>
      <operations class="operations" @showOne="showOne"></operations>
      <div id="initECharts_top_data"></div>
      <div id="HomeTopLeft_top"></div>
    </div>
    <div class="center tcb" @mouseover="mouseHover('BD')">
      <border v-if="backdrop == 0"></border>
      <border-plan-b v-if="backdrop == 1"></border-plan-b>
      <operations class="operations" @showOne="showOne"></operations>
      <div id="HomeTopLeft_center_data"></div>
      <div id="HomeTopLeft_center"></div>
    </div>
    <div class="bottom tcb" @mouseover="mouseHover('CD')">
      <border v-if="backdrop == 0"></border>
      <border-plan-b v-if="backdrop == 1"></border-plan-b>
      <operations class="operations" @showOne="showOne"></operations>
      <div id="initECharts_bottom_data"></div>
      <div id="HomeTopLeft_bottom"></div>
    </div>
    <show-e-charts ref="showECharts" :backdrop="backdrop"></show-e-charts>
  </div>
</template>

<script>
	import Operations from "../../../components/common/operations";
	import ShowECharts from "../../../components/common/showECharts";
	import clone from "../../../../public/api/clone";
	import Border from "./border";
	import BorderPlanB from "./borderPlanB";

	export default {
		name: "HomeTopLeft",
		props: {
			backdrop: {
				type: Number,
				default: 0
			}
		},
		components: {BorderPlanB, Border, ShowECharts, Operations},
		data() {
			return {
				AD: {},
				BD: {},
				CD: {},
				option: {},
				company: [],
				budget: [],
				clickOn: ''
			};
		},
		methods: {
			mouseHover(v) {
				this.clickOn = v;
				this.option = this[v];
			},
			isNoData(is, id, ids, option) {
				if (is.length === 0) {
					document.getElementById(id).innerHTML = "暂无数据";
					option.xAxis[0].show = false;
					option.yAxis[0].show = false;
					this.$echarts.init(document.getElementById(ids)).setOption(option);
				} else {
					document.getElementById(id).innerHTML = "";
					this.$echarts.init(document.getElementById(ids)).setOption(option);
				}
			},
			showOne(is) {
				let tooltip = [];
				if (this.clickOn == 'AD') {
					tooltip = this.budget;
				}
				/*  console.log(this.option.yAxis.data)
              if (this.option.yAxis[0].data) {
                  this.option.yAxis[0].data.forEach((element, index) => {
                      this.option.yAxis[0].data[index] = this.company[index]
                  });
              }*/
				// 修改柱状图的粗细
				this.option.barWidth = 30;
				// 修改title中文字的大小
				this.option.title.textStyle.fontSize = 30;
				// 修改title的边距
				this.option.title.padding = [50, 50, 50, 50];
				this.option.title.x = "center";
				this.option.title.y = "-2.5%";
				// this.option.legend.right = "50";
				// this.option.legend.textStyle.fontSize = "20";
				// this.option.legend.itemHeight = 15;
				// this.option.legend.itemWidth = 15;
				this.$refs["showECharts"].openDialog(this.option, '', '', tooltip);
			},
			initECharts_top() {
				let HomeTopLeft_top = this.$echarts.init(
					document.getElementById("HomeTopLeft_top")
				);
				let option = {
					barWidth: 10,
					title: {
						x: "center",
						y: "",
						text: "预算控制率",
						show: true,
						textStyle: {
							fontFamily: "幼圆",
							color: "#FFF",
							fontSize: "15",
							lineHeight: 20
						}
					},
					tooltip: {
						trigger: "axis",
						formatter: v => {
							let label = "";
							this.budget.forEach(i => {
								if (v[0].name == i.plateName) {
									label =
										"实际控制率：" +
										i.sjRateCount +
										"%<br>实际金额：" +
										i.sjMoney +
										"万<br>预算金额：" +
										i.ysMoney +
										"万";
								}
							});
							return label;
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
						max: 100,
						axisTick: {
							//坐标轴刻度
							show: false
						},
						axisLabel: {
							textStyle: {
								color: "#FFF"
							}
						},
						splitLine: {show: false},
						axisLine: {
							lineStyle: {
								color: "#FFF"
							}
						}
					},
					yAxis: {
						type: "category",
						axisLine: {show: false},
						axisLabel: {show: false},
						axisTick: {show: false},
						splitLine: {show: false},
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
											color: "rgba(192,42,84,1)"
										},
										{
											offset: 1,
											color: "rgba(127,69,224,1)"
										}
									])
								}
							},
							label: {
								show: true,
								position: "insideLeft",
								color: "#fff",
								formatter: "{b}" + "：{c}" + "%"
							},
							data: [],
							markLine: {}
						}
					]
				};
				this.$axios
					.get("/api/index/rate_list", {params: {type: "ys"}})
					.then(res => {
						let rateCount = [];
						let xBxis = [];
						let data = res.data.data;
						let sum = 0;
						data.forEach(i => {
							sum += i.ysRateCount - 0;
						});
						this.budget = data;
						data.sort(function (a, b) {
							return b.ysRateCount - a.ysRateCount;
						});
						res.data.data.forEach(element => {
							rateCount.unshift(element.ysRateCount);
							xBxis.unshift(element.plateName);
						});
						option.series[0].data = rateCount;
						option.yAxis.data = xBxis;
						this.AD = JSON.parse(JSON.stringify(option));
						this.AD.series[0].markLine = {
							data: [
								{
									type: "average",
									name: "平均值",
									xAxis: (sum / data.length).toFixed(2)
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
										formatter: "平均值 : " + (sum / data.length).toFixed(2) + "%"
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
						HomeTopLeft_top.setOption(option);
						HomeTopLeft_top.on('click', v => {
							let dbData = [];
							if (v.name == '服务区板块' || v.name == '能源板块') {
								if (v.name == '服务区板块') {
									dbData = [
										[
											{name: "办公费", value: 13.62},
											{name: "误餐费", value: 1.86},
											{name: "招待费", value: 1.00},
											{name: "房租水电费", value: 0.27},
											{name: "审计咨询费", value: 23.57}
										],
										[
											{name: "办公费", value: 11.34},
											{name: "误餐费", value: 2.81},
											{name: "招待费", value: 3.00},
											{name: "房租水电费", value: 92.76},
											{name: "审计咨询费", value: 42.00}
										]
									];
								}
								if (v.name == '能源板块') {
									dbData = [
										[
											{name: "办公耗材", value: 0.35},
											{name: "专项费用", value: 0.40},
											{name: "公共维修费", value: 0.40},
											{name: "误餐费", value: 0.72},
											{name: "招待费", value: 0.81}
										],
										[
											{name: "办公耗材", value: 2.11},
											{name: "专项费用", value: 2.05},
											{name: "公共维修费", value: 0.70},
											{name: "误餐费", value: 3.29},
											{name: "招待费", value: 4.70}
										]
									];
								}
								this.$refs["showECharts"].openDialog([{
									title: {
										text: "执行金额",
										x: "center",
										y: '5%',
										textStyle: {
											color: 'white',
											fontSize: 30
										}
									},
									grid: {
										top: "0",
										right: "40",
										left: "0",
										bottom: "40" //图表尺寸大小
									},
									legend: {
										bottom: 80,
										textStyle: {
											color: 'white'
										}
									},
									tooltip: {
										trigger: "item",
										formatter: '{b}: {c}万元 ({d}%)'
									},
									series: [
										{
											type: "pie",
											center: ["50%", "50%"],
											radius: ["30%", "42%"],
											clockwise: true,
											avoidLabelOverlap: true,
											hoverOffset: 15,
											itemStyle: {
												normal: {
													color: function (v) {
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
														return text;
													},
													textStyle: {
														fontSize: 14
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
											data: dbData[0]
										}
									]
								}, {
									title: {
										text: "预算金额",
										x: "center",
										y: '5%',
										textStyle: {
											color: 'white',
											fontSize: 30
										}
									},
									grid: {
										top: "0",
										right: "40",
										left: "0",
										bottom: "40" //图表尺寸大小
									},
									legend: {
										bottom: 80,
										textStyle: {
											color: 'white'
										},
									},
									tooltip: {
										trigger: "item",
										formatter: '{b}: {c}万元 ({d}%)'
									},
									series: [
										{
											type: "pie",
											center: ["50%", "50%"],
											radius: ["30%", "42%"],
											clockwise: true,
											avoidLabelOverlap: true,
											hoverOffset: 15,
											itemStyle: {
												normal: {
													color: function (v) {
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
														return text;
													},
													textStyle: {
														fontSize: 14
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
											data: dbData[1]
										}
									]
								},], 'timeSelect');
							}
						});
						this.isNoData(
							res.data.data,
							"initECharts_top_data",
							"HomeTopLeft_top",
							option
						);
					});
			},
			initECharts_center() {
				let HomeTopLeft_center = this.$echarts.init(
					document.getElementById("HomeTopLeft_center")
				);
				let option = (this.BD = {
					barWidth: 10,
					title: {
						x: "center",
						y: "",
						text: "回款率",
						show: true,
						textStyle: {
							fontFamily: "幼圆",
							color: "#FFF",
							fontSize: "15",
							lineHeight: 20
						}
					},
					tooltip: {
						trigger: "axis",
						formatter: v => {
							let show = [
								{
									name: "服务区板块",
									receivable: "34735.63",
									received: "27897.51",
									exacutiveRate: "80.31%"
								},
								{
									name: "能源板块",
									receivable: "876456.62",
									received: "852421.61",
									exacutiveRate: "97.26%"
								},
								{
									name: "商业板块",
									receivable: "298225.10",
									received: "184270.84",
									exacutiveRate: "61.79%"
								},
								{
									name: "传媒板块",
									receivable: "9300",
									received: "5792.49",
									exacutiveRate: "62.28%"
								}
							];
							let index = 0;
							for (let i = 0; i < show.length; i++) {
								if (v[0].name == show[i].name) {
									index = i;
									break;
								}
							}
							return (
								"合同应收款：" +
								show[index].receivable +
								"万元<br>合同已收款：" +
								show[index].received +
								"万元"
							);
						},
						axisPointer: {
							type: "shadow"
						}
					},
					grid: {
						top: 20,
						bottom: 30,
						left: 20
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
						splitLine: {show: false},
						axisLine: {
							lineStyle: {
								color: "#FFF"
							}
						}
					},
					yAxis: {
						type: "category",
						axisLine: {show: false},
						axisLabel: {show: false},
						axisTick: {show: false},
						splitLine: {show: false},
						data: ["商业板块", "传媒板块", "服务区板块", "能源板块"]
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
											color: "rgba(192,42,84,1)"
										},
										{
											offset: 1,
											color: "rgba(127,69,224,1)"
										}
									])
								}
							},
							label: {
								show: true,
								position: "insideLeft",
								color: "#fff",
								formatter: "{b}" + "：{c}" + "%"
							},
							data: [61.79, 62.28, 80.31, 97.26],
							markLine: {
								data: [],
								symbol: ["none", "none"],
								position: "insideTopCenter",
								itemStyle: {
									normal: {
										lineStyle: {
											type: "dotted",
											color: "white"
										},
										label: {
											show: false,
											position: "middle",
											formatter: "数据平均 :"
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
							}
						}
					]
				});
				/*var sum = 0;
            var money = []
            this.$axios.get('/api/index/list_jtsupplier_groupnian').then((res) => {
              res.data.data.forEach(element => {
                sum += parseFloat(element.yAxis)
              });
              res.data.data.forEach(element => {
                option.xAxis[0].data.push({
                  value: element.xBxis,
                  textStyle: {
                    fontSize: "12px"
                  }
                });
                option.series[0].data.push(((element.yAxis) / sum * 100).toFixed(2))
                money.push(element.yAxis)
              });*/
				HomeTopLeft_center.setOption(option);
				HomeTopLeft_center.on("click", v => {
					let obj = ["服务区板块", "能源板块", "商业板块", "传媒板块"];
					let allData = [
						{
							//应收款
							receivable: [6822.52, 8422.05, 9302.05, 10189.01],
							//已收款
							received: [4762, 6832, 8206.39, 8097.12]
						},
						{
							receivable: [179169.28, 204886.95, 216387.17, 276013.22],
							received: [173495.99, 203127.35, 208401.6, 267396.67]
						},
						{
							receivable: [67768.74, 73199.97, 77403.27, 79853.12],
							received: [34122.02, 46878.08, 50457.28, 52813.46]
						},
						{
							receivable: [1800, 2100, 2600, 2800],
							received: [1020, 1256.83, 1637.83, 1877.83]
						}
					];
					let ix = obj.indexOf(v.name);
					let serviceOption = {
						title: {
							text: v.name + "(2020)",
							x: "center",
							y: "2%",
							textStyle: {
								fontFamily: "幼圆",
								color: "#FFF",
								fontSize: "30"
							}
						},
						tooltip: {
							trigger: "axis",
							formatter: v => {
								if (v.length === 2) {
									return (
										v[0].name +
										"月<br>" +
										v[0].seriesName +
										"：" +
										v[0].value +
										"万元<br>" +
										v[1].seriesName +
										"：" +
										v[1].value +
										"万元"
									);
								}
								if (v.length === 1) {
									return (
										v[0].name +
										"月<br>" +
										v[0].seriesName +
										"：" +
										v[0].value +
										"万元"
									);
								}
							}
						},
						grid: {
							top: "35",
							left: "12%",
							right: "5%",
							bottom: "30"
						},
						legend: {
							data: ["合同已收款", "合同应收款"],
							left: "center",
							bottom: 20,
							textStyle: {
								color: "white"
							}
						},
						xAxis: {
							name: "月",
							type: "category",
							data: ["7", "8", "9", "10"],
							axisPointer: {
								type: "shadow"
							},
							axisTick: {show: false},
							splitLine: {show: false},
							axisLine: {
								lineStyle: {
									color: "#FFF"
								}
							}
						},
						yAxis: {
							name: "万元",
							type: "value",
							axisTick: {show: false},
							splitLine: {show: false},
							axisLine: {
								lineStyle: {
									color: "#FFF"
								}
							}
						},
						series: [
							{
								name: "合同已收款",
								data: allData[ix].received,
								type: "line",
								itemStyle: {
									color: "#03b3ff"
								}
							},
							{
								name: "合同应收款",
								data: allData[ix].receivable,
								type: "line"
							}
						]
					};
					this.$refs["showECharts"].openDialog(serviceOption);
				});
				// this.isNoData(res.data.data, 'HomeTopLeft_center_data', 'HomeTopLeft_center', option)
				// })
			},
			initECharts_bottom() {
				let HomeTopLeft_bottom = this.$echarts.init(
					document.getElementById("HomeTopLeft_bottom")
				);
				let max = 0;
				let option = {
					barWidth: "10", //设置柱状图的粗细
					tooltip: {
						trigger: "axis",
						//  湖北长江路桥股份有限公司枣潜高速公路第七标段项目经理部
						formatter: v => {
							let name = "";
							if (v[0].name == "湖北长江路桥股份有限公司……") {
								name = "湖北长江路桥股份有限公司枣潜高速公路第七标段项目经理部";
							}
							if (v[0].name !== "湖北长江路桥股份有限公司……") {
								name = v[0].name;
							}
							return name + "：" + v[0].value + "万元";
						},
						axisPointer: {
							type: "shadow"
						}
					},
					title: {
						x: "center",
						padding: "",
						text: "合同未收款",
						show: true,
						textStyle: {
							fontFamily: "幼圆",
							lineHeight: 20,
							textAlign: "center",
							color: "#FFF",
							fontSize: "15"
						}
					},
					legend: {
						data: ["c", "d"],
						icon: "circle",
						textStyle: {
							color: "#6691ff"
						},
						itemWidth: 10,
						itemHeight: 10,
						left: 0,
						top: 25
					},
					xAxis: [
						{
							type: "value",
							show: true,
							// min: 0,
							// max: 250,
							axisLine: {
								lineStyle: {
									color: "#fff"
								}
							},
							splitLine: {
								show: false
							},
							axisTick: {
								//坐标轴刻度
								show: false
							}
						}
					],
					yAxis: [
						{
							show: false,
							type: "category",
							data: [
								"湖北长江路桥股份有限公司……",
								"稻谷款(加工厂)",
								"大米款（加工厂）",
								"茂名市金瑞粮油贸易有限公司",
								"湖北省羊肚菌农业科技有限公司"
							],
							axisLine: {
								lineStyle: {
									color: "#fff"
								}
							},
							axisTick: {
								//坐标轴刻度
								show: false
							},
							axisLabel: {
								show: false,
								textStyle: {
									color: "#fff"
								}
							},
							splitLine: {
								show: false
							}
						}
					],
					grid: {
						width: "auto",
						top: "25",
						bottom: "30",
						left: "10"
					},
					series: [
						{
							data: [2934.83, 3303.25, 3549.63, 4998.57, 8786.06],
							type: "bar",
							color: "rgba(208,137,208,0.5)",
							showBackground: false,
							label: {
								show: true,
								position: "insideLeft",
								color: "#fff",
								formatter: "{b}"
							},
							// backgroundStyle: {
							//     color: "rgba(255,255,255,0.2)"
							// },
							barCategoryGap: "100%",
							markLine: {
								data: [],
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
											formatter: "数据平均 : "
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
							}
						}
					]
				};
				var sum = 0;
				// let company = []
				/*	this.$axios.get('/api/index/jtsupplier_arrears_topfive').then((res) => {
                res.data.data.sort(function (a, b) {
                  return a.xBxis - b.xBxis;
                })
                let color = ["#00df4b", "#008bf7", "#ffb541", "#ff6a6a", "#ff6a8a"]
                res.data.data.forEach((element, index) => {
                  sum += parseFloat(element.xBxis)
                  option.yAxis[0].data.unshift(index + 1)
                  option.series[0].data.push({
                    value: element.xBxis,
                    itemStyle: {
                      normal: {
                        barBorderRadius: 30, //设置柱状图为圆角
                        color: color[index]
                      }
                    }
                  })
                  this.company.push(element.yAxis)
                  company.push(element.yAxis)
                });*/
				this.CD = clone(option);
				let average = 0;
				this.CD.series[0].data.forEach(i => {
					average += Number(i.value);
				});
				average = average / this.CD.series[0].data.length;
				this.CD.series[0].markLine.data = [
					{
						type: "average",
						name: "平均值",
						xAxis: average //设置平均值所在位置
					}
				];
				this.CD.series[0].markLine.itemStyle.normal.label = {
					show: true,
					position: "middle",
					formatter: "数据平均 : " + average
				};
				this.CD.series[0].markLine.itemStyle.normal.label.formatter =
					"数据平均 : " + sum / this.CD.series[0].data.length;
				HomeTopLeft_bottom.setOption(option);
				// this.isNoData(res.data.data, 'initECharts_bottom_data', 'HomeTopLeft_bottom', option)
				// })
			}
		},
		mounted() {
			this.initECharts_top();
			this.initECharts_center();
			this.initECharts_bottom();
			// setInterval(_ => {
			//     this.$echarts.init(document.getElementById('HomeTopLeft_top')).dispose();
			//     this.$echarts.init(document.getElementById('HomeTopLeft_bottom')).dispose();
			//     this.$echarts.init(document.getElementById('HomeTopLeft_center')).dispose();
			//     this.$nextTick(_ => {
			//         this.initECharts_bottom();
			//         this.initECharts_center();
			//         this.initECharts_top();
			//     })
			// }, 10000)
		},
		watch: {
			backdrop: {
				handler: function (nv, ov) {
					let data = document.getElementsByClassName("tcb");
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
  #HomeTopLeft_center_data,
  #initECharts_top_data,
  #initECharts_bottom_data {
    position: absolute;
    width: 80px;
    height: 20px;
    color: #fff;
    font-size: 20px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }

  .content {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;

    .top {
      width: 100%;
      height: 30%;
      border: 1px solid #4cbcf4;
      box-shadow: 0 0 20px #4cbcf4 inset;
      position: relative;
      /*background: url("../../../assets/small.png") no-repeat;*/
      background-size: 100% 100%;

      #HomeTopLeft_top {
        width: 100%;
        height: 100%;
      }
    }

    .center {
      width: 100%;
      height: 30%;
      margin-top: 5%;
      border: 1px solid #4cbcf4;
      box-shadow: 0 0 50px #4cbcf4 inset;
      position: relative;
      /*background: url("../../../assets/small.png") no-repeat;*/
      background-size: 100% 100%;

      #HomeTopLeft_center {
        width: 100%;
        height: 100%;
      }
    }

    .bottom {
      width: 100%;
      height: 30%;
      margin-top: 5%;
      border: 1px solid #4cbcf4;
      box-shadow: 0 0 50px #4cbcf4 inset;
      position: relative;
      /*background: url("../../../assets/small.png") no-repeat;*/
      background-size: 100% 100%;

      #HomeTopLeft_bottom {
        width: 100%;
        height: 100%;
      }
    }

    .top:hover .operations {
      display: block;
    }

    .center:hover .operations {
      display: block;
    }

    .bottom:hover .operations {
      display: block;
    }
  }
</style>
