<template>
  <div style="width: 100%" class="box">
    <el-dialog :visible.sync="visible" width="900px" :modal="false">
      <div
              class="bigShow"
              id="bigShow"
              v-if="visible"
              v-loading="loading"
              element-loading-text="拼命加载中……"
              element-loading-spinner="el-icon-loading"
              element-loading-background="rgba(0, 0, 0, 0.5)">
        <border v-if="backdrop === 0"></border>
        <border-plan-b v-if="backdrop === 1"></border-plan-b>
        <div class="time" v-if="timeSelect">
          <el-select v-model="GS" placeholder="请选择片区">
            <el-option :value="1" label="黄冈"></el-option>
            <el-option :value="2" label="恩施"></el-option>
            <el-option :value="3" label="宜昌"></el-option>
            <el-option :value="4" label="咸宁"></el-option>
            <el-option :value="4" label="孝感"></el-option>
            <el-option :value="4" label="十堰"></el-option>
          </el-select>
          <el-select v-model="dateDay" placeholder="请选择节假日">
            <el-option :value="1" label="清明"></el-option>
            <el-option :value="2" label="中秋"></el-option>
            <el-option :value="3" label="元旦"></el-option>
            <el-option :value="4" label="春节"></el-option>
          </el-select>
          <el-date-picker
                  v-model="time"
                  type="daterange"
                  align="right"
                  unlink-panels
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :picker-options="pickerOptions">
          </el-date-picker>
          <el-button size="small">搜索</el-button>
        </div>
        <div class="time" v-if="commonTime||commonSelect">
          <el-select v-if="commonSelect" v-model="commonSelectValue"></el-select>
          <el-date-picker
                  v-model="commonTimeValue"
                  v-if="commonTime"
                  type="daterange"
                  align="right"
                  unlink-panels
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :picker-options="pickerOptions">
          </el-date-picker>
          <el-button>搜索</el-button>
        </div>
        <div class="MMA" v-if="type">
          平均：{{ obj.average }}<br/>
          最高：{{ obj.max }}<br/>
          最低：{{ obj.min }}
        </div>
        <div class="MMA_">
          {{ msg }}
        </div>
        <div id="commonECharts_data"></div>
        <div id="commonECharts" v-if="this.option.constructor !== Array"
             :style="{
            width: isShow ? '85%' : timeSelect ? '80%' : '100%',
            float: 'left',
            height: timeSelect ? '90%' : '100%'}"></div>
        <div class="dblB" v-if="this.option.constructor == Array">
          <div id="commonECharts_a" class="dbl"></div>
          <div id="commonECharts_b" style="float: right" class="dbl"></div>
        </div>
        <div class="addToText" v-if="timeSelect">
          A 分类<br/>
          B 分类<br/>
          C 分类<br/>
        </div>
        <div class="operation" v-if="isShow">
          <el-radio
                  class="checkboxItem"
                  @change="changeRadioCD(1)"
                  v-model="selectCD"
                  :label="1"
          >营收
          </el-radio>
          <el-radio
                  class="checkboxItem"
                  @change="changeRadioCD(2)"
                  v-model="selectCD"
                  :label="2"
          >利润
          </el-radio>
          <el-radio
                  class="checkboxItem"
                  @change="changeRadioCD(3)"
                  v-model="selectCD"
                  :label="3"
          >客单价
          </el-radio>
          <el-radio
                  class="checkboxItem"
                  @change="changeRadioCD(4)"
                  v-model="selectCD"
                  :label="4"
          >订单数
          </el-radio>
          <el-radio
                  class="checkboxItem"
                  @change="changeRadioCD(5)"
                  v-model="selectCD"
                  :label="5"
          >转化率
          </el-radio>
        </div>
      </div>
      <div class="select_type" v-if="isShow">
        <el-radio
                class="checkboxItem"
                @change="changeRadioBD(1)"
                v-model="selectBD"
                :label="1"
        >服务区
        </el-radio>
        <el-radio
                class="checkboxItem"
                @change="changeRadioBD(2)"
                v-model="selectBD"
                :label="2"
        >自营油站
        </el-radio>
        <el-radio
                class="checkboxItem"
                @change="changeRadioBD(3)"
                v-model="selectBD"
                :label="3"
        >自营超市
        </el-radio>
        <el-radio
                class="checkboxItem"
                @change="changeRadioBD(4)"
                v-model="selectBD"
                :label="4"
        >服务区招商
        </el-radio>
      </div>
    </el-dialog>
  </div>
</template>

<script>
	import clone from "../../../public/api/clone";
	import Border from "../../pages/homeKanBan/children/border";
	import BorderPlanB from "../../pages/homeKanBan/children/borderPlanB";

	export default {
		name: "showECharts",
		components: {BorderPlanB, Border},
		props: {
			backdrop: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				commonTime: false,
				commonSelect: false,
				commonTimeValue: '',
				commonSelectValue: '',
				dateDay: "",
				GS: "",
				loading: false,
				timeSelect: false,
				time: "",
				visible: false,
				isShow: false,
				selectBD: 1,
				selectCD: 1,
				pickerOptions: {},
				type: false,
				option: {},
				msg: "",
				obj: {
					min: "",
					max: "",
					average: ""
				}
			};
		},
		methods: {
			changeRadioCD() {
				this.isAxiosw(this.option);
			},
			changeRadioBD() {
				this.selectCD = 1;
				this.isAxiosw(this.option);
			},
			showTarget(v) {
				this.obj = {
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
					this.obj.max = Math.max(...mun);
					this.obj.min = Math.min(...mun);
					this.obj.average = num / d.length;
					if (v.yAxis[0] && v.yAxis[0].name && v.yAxis[0].name == "亿") {
						this.obj.max = (this.obj.max / 100000000).toFixed(2);
						this.obj.min = (this.obj.min / 100000000).toFixed(2);
						this.obj.average = (this.obj.average / 100000000).toFixed(2);
					}
					if (v.yAxis[0] && v.yAxis[0].name && v.yAxis[0].name == "百万") {
						this.obj.max = (this.obj.max / 1000000).toFixed(2);
						this.obj.min = (this.obj.min / 1000000).toFixed(2);
						this.obj.average = (this.obj.average / 1000000).toFixed(2);
					}
				}
			},
			openDialog(v, t, data, tooltip) {
				this.option = v;
				this.type = false;
				this.visible = true;
				this.commonTime = false;
				this.commonSelect = false;
				v = clone(v);
				if (v.constructor !== Array) {
					if (t === "time") {
						v.series.nodeGap = 29;
						this.timeSelect = true;
					} else {
						this.timeSelect = false;
					}
					if (t === "MMA") {
						this.type = true;
						v.xAxis[0].data.forEach((it, ix) => {
							this.option.xAxis[0].data[ix] = ix + 1;
						});
						if (this.option.yAxis[0].name == "亿") {
							this.msg = "营收（亿）";
						}
						if (this.option.yAxis[0].name == "百万") {
							this.msg = "利润（百万）";
						}
						this.showTarget(this.option);
						this.option.yAxis[0].name = "";
					}
					if (t === "A") {
						this.msg = "营收";
					}
					if (t === "B") {
						this.msg = "利润";
					}
					if (tooltip&&tooltip.length != 0) {
						v.tooltip = {
							trigger: "axis",
							formatter: v => {
								let label = "";
								tooltip.forEach(i => {
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
						}
					}
					this.$nextTick(() => {
						if (v.series[0] && v.series[0].data.length === 0) {
							if (v.grid) {
								v.grid.show = false;
							}
							if (v.xAxis[0] && v.xAxis[0].show) {
								v.xAxis[0].show = false;
								v.yAxis[0].show = false;
							}
							this.type = false;
							document.getElementById("commonECharts_data").innerHTML = "暂无数据";
						}
						if (t === "query") {
							this.selectBD = data.selectBD;
							this.selectCD = data.selectCD;
							this.isAxiosw(v, t);
						} else {
							this.initECharts(v, t);
						}
					});
				}
				if (v.constructor === Array) {
					if (t == 'timeSelect') {
						this.commonTime = true;
						this.commonSelect = true;
					}
					this.initDblECharts(v);
				}
				this.$nextTick(_ => {
					let bigShow = document.getElementById("bigShow");
					if (this.backdrop === 0) {
						bigShow.style.background =
							"url('" + require("../../assets/seb.png") + "') no-repeat";
						bigShow.style.backgroundSize = "100% 100%";
					}
				})
			},
			initDblECharts(v) {
				this.$nextTick(_ => {
					let commonEChartsA = this.$echarts.init(document.getElementById("commonECharts_a"));
					let commonEChartsB = this.$echarts.init(document.getElementById("commonECharts_b"));
					commonEChartsA.setOption(v[0]);
					commonEChartsB.setOption(v[1]);
				})
			},
			initECharts(option, t) {
				document
					.getElementById("commonECharts")
					.removeAttribute("_echarts_instance_");
				this.$nextTick(_ => {
					let commonECharts = this.$echarts.init(
						document.getElementById("commonECharts")
					);
					if (t !== "not") {
						option.grid = {
							bottom: "10%",
							left: "9%",
							right: "4%",
							show: option.grid && option.grid.show ? true : false,
							top: "20%"
						};
					}
					commonECharts.setOption(option);
				});
			},
			isAxiosw(option) {
				this.loading = true;
				let echarts = this.$echarts.init(
					document.getElementById("commonECharts")
				);
				let params = {companyType: "service", orderType: "营收", size: 6};
				switch (this.selectBD) {
					case 1:
						params.companyType = "service";
						break;
					case 2:
						params.companyType = "station";
						break;
					default:
						break;
				}
				switch (this.selectCD) {
					case 1:
						params.orderType = "营收";
						break;
					case 2:
						params.orderType = "利润";
						break;
					case 4:
						params.orderType = "orderCount";
						break;
					default:
						break;
				}
				this.$axios.get("/api/jtService/order", {params: params}).then(res => {
					let yAxis = [];
					let xAxis = [];
					res.data.forEach(element => {
						yAxis.unshift(element.serviceName);
						xAxis.unshift((element.sumMoney / 10000).toFixed(2));
					});
					let v = this.selectCD;
					if (v == 1 || v == 2) option.xAxis.name = "万";
					if (v == 3) option.xAxis.name = "元";
					if (v == 4) option.xAxis.name = "个";
					if (v == 5) option.xAxis.name = "%";
					option.yAxis.data = yAxis;
					option.series[0].data = xAxis;
					option.grid = {
						bottom: "10%",
						left: "9%",
						right: "4%",
						show: option.grid && option.grid.show ? true : false,
						top: "20%"
					};
					echarts.setOption(option);
					this.loading = false;
				});
			}
		}
	};
</script>

<style scoped lang="less">
  .select_type {
    width: 90%;
    position: absolute;
    top: 15%;
    left: 5%;
    z-index: 999;
    font-size: 12px !important;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;

    .checkboxItem {
      color: white;
    }
  }

  .box /deep/ .el-dialog__wrapper > .el-dialog {
    background: #030a45;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0);
  }

  .box /deep/ .el-dialog__body {
    padding: 0;
  }

  .box /deep/ .el-dialog__header {
    position: absolute;
    right: 0;
    top: -1vh;
    color: red;
    z-index: 1000;
  }

  .box /deep/ .el-dialog__header > .el-dialog__headerbtn > .el-dialog__close {
    color: white;
  }

  .time {
    text-align: center;
    color: white;
    /*border: 3px solid rgb(22, 154, 252);*/
    border-bottom: none;

    .text_icon {
      padding: 0 10px;
    }

    /deep/ .el-button {
      padding: 10px 15px;
    }

    /deep/ .el-select {
      width: 130px;
      border-radius: 0;
      margin-right: 10px;

      .el-input {
        .el-input__inner {
          border-radius: 0;
          height: 35px;
          line-height: 35px;
        }

        .el-input__suffix {
          .el-input__suffix-inner {
            .el-input__icon {
              line-height: 35px;
            }
          }
        }
      }
    }
  }

  .time /deep/ .el-date-editor {
    background: none;
    border: none;
  }

  .time /deep/ .el-date-editor > .el-range-input {
    color: black;
    /*background: none;*/
  }

  .time /deep/ .el-date-editor > .el-range-separator {
    color: white;
  }

  .time /deep/ .el-date-editor > .el-input__icon {
    color: white;
  }

  .time /deep/ .el-button {
    background: none;
    /*border: none;*/
    border-radius: 0;
    color: white;
  }

  .bigShow {
    width: 100%;
    height: 650px;
    box-shadow: 0 0 10px #38d inset;
    position: relative;
    // background: #10448a;
    // background: url("../../assets/detail_background.jpg") no-repeat;
    .dblB {
      width: 100%;
      height: 100%;

      .dbl {
        width: 49.5%;
        height: 100%;
        float: left;
      }
    }

    .addToText {
      width: 35%;
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      text-align: center;
      line-height: 80px;
      color: white;
      font-size: 30px;
      font-weight: 700;
    }

    #commonECharts_data {
      width: 115px;
      height: 35px;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      margin: auto;
      font-size: 2em;
      color: #fff;
    }

    .MMA {
      width: 18%;
      position: absolute;
      top: 2%;
      right: 0;
      text-align: left;
      font-size: 16px;
      color: white;
    }

    .MMA_ {
      width: 18%;
      position: absolute;
      top: 9%;
      left: 8%;
      text-align: left;
      font-size: 20px;
      color: white;
    }

    #commonECharts {
      // width: 710px;
      // height: 560px;
      // padding: 20px;
      width: 100%;
      height: 90%;
    }

    .operation {
      line-height: 30px;
      width: 15%;
      float: right;
      text-align: center;
      padding: 30% 0 0;
    }

    .operation /deep/ .el-radio {
      color: white;
      padding: 5px 10px;
      width: 100%;
    }

    .operation /deep/ .el-radio > .el-radio__input {
      display: none;
    }

    .block_l {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto 0;
      width: 0.5em;
      height: 4.5em;
      background: #00b8fe;
      z-index: 999;
    }

    .block_r {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto 0;
      width: 0.5em;
      height: 4.5em;
      background: #00b8fe;
      z-index: 999;
    }

    .block_b {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0 auto;
      width: 4.5em;
      height: 0.5em;
      background: #00b8fe;
      z-index: 999;
    }
  }

  .bigShow_ {
    width: 750px;
    height: 600px;
    box-shadow: 0 0 10px #38d inset;
    position: relative;
    background: #10448a;

    .left {
      width: 50%;
      height: 100%;
      float: left;

      #commonEChartsLeft {
        width: 100%;
        height: 100%;
      }
    }

    .right {
      width: 50%;
      height: 100%;
      float: right;

      #commonEChartsRight {
        width: 100%;
        height: 100%;
      }
    }

    .block_l {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto 0;
      width: 0.5em;
      height: 4.5em;
      background: #00b8fe;
      z-index: 999;
    }

    .block_r {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto 0;
      width: 0.5em;
      height: 4.5em;
      background: #00b8fe;
      z-index: 999;
    }

    .block_b {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0 auto;
      width: 4.5em;
      height: 0.5em;
      background: #00b8fe;
      z-index: 999;
    }
  }
</style>
