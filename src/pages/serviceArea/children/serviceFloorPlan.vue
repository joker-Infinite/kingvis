<template>
  <div
          class="imgBox"
          :style="{ width: location == 'homeKanBan' ? '920px' : '1300px' }"
  >
    <img
            src="../../../assets/service_.jpg"
            :style="{ width: location == 'homeKanBan' ? '920px' : '1300px' }"
            class="img"
    />
    <div
            class="smallBox"
            v-for="i in box"
            :style="i.style"
            @click="openDetails(i)"
    >
      <el-popover
              placement="bottom"
              :title="i.name"
              width="300"
              :disabled="popoverDisabled"
              v-if="i.name !== '大厅'"
              trigger="hover"
      >
        <table class="table" border="1" cellspacing="0">
          <tr v-for="(it, ix) in i.data">
            <th>{{ it.a }}</th>
            <th>{{ it.b }}</th>
          </tr>
        </table>

        <div style="width: 100%;height: 100%" slot="reference"></div>
      </el-popover>
    </div>
    <more-information
            NE="serviceFloorPlan"
            :imgSize="imgSize"
            :location="location"
            ref="more"
            @showPopover="popoverDisabled = false"
    ></more-information>
    <start-and-radar color="black"></start-and-radar>
  </div>
</template>

<script>
	import MoreInformation from "../../details/common/moreInformation";
	import MyTable from "../../../components/common/myTable";
	import StartAndRadar from "../../../components/widget/startAndRadar";

	export default {
		name: "serviceFloorPlan",
		props: {
			location: {
				type: String,
				default: ""
			},
			imgSize: {
				type: String,
				default: ""
			}
		},
		components: {StartAndRadar, MyTable, MoreInformation},
		data() {
			return {
				popoverDisabled: false,
				boxStyle: [
					{
						width: "35px",
						height: "18px",
						top: "100px",
						left: "227px"
					},
					{
						width: "35px",
						height: "18px",
						top: "160px",
						left: "214px"
					},
					{
						width: "65px",
						height: "44px",
						top: "120px",
						left: "286px",
						background: "#453"
					},
					{
						width: "39px",
						height: "23px",
						top: "115px",
						left: "352px",
						zIndex: "10",
						background: "#909"
					},
					{
						width: "77px",
						height: "42px",
						top: "120px",
						left: "352px"
					},
					{
						width: "31px",
						height: "47px",
						top: "100px",
						left: "430px"
					},
					{
						width: "31px",
						height: "47px",
						top: "100px",
						left: "462px"
					},
					{
						width: "40px",
						height: "69px",
						top: "79px",
						left: "495px"
					},
					{
						width: "40px",
						height: "69px",
						top: "79px",
						left: "536px"
					},
					{
						width: "33px",
						height: "42px",
						top: "79px",
						left: "577px"
					},
					{
						width: "33px",
						height: "38px",
						top: "126px",
						left: "577px"
					},
					{
						width: "134px",
						height: "54px",
						top: "197px",
						left: "96px"
					},
					{
						width: "134px",
						height: "54px",
						top: "197px",
						left: "680px"
					},
					{
						width: "134px",
						height: "54px",
						top: "197px",
						left: "382px"
					}
				],
				box: [
					{
						name: "办公区",
						BGQ: true,
						noPingEffect: true,
						remark: "为工作人员提供舒适的办公地点",
						data: [
							{a: "负责人", b: "王永红"},
							{a: "联系方式", b: "18071019995"},
							{a: "所属地域", b: "孝感市孝南区"},
							{a: "路段管理单位", b: "京珠运营公司"}
						],
						formData: [
							{label: "服务区", value: "蔡甸服务区-A区"},
							{label: "类别", value: "一类服务区"},
							{label: "所属公司", value: "孝感分公司"},
							{label: "开通状况", value: "是"},
							{label: "开通时间", value: "2002.11"},
							{label: "所在高速", value: "京港澳高速"},
							{label: "固定办公人员", value: "5位"},
							{label: "月均收益", value: "50元/月"},
							{label: "占地面积", value: "13亩"},
							{label: "建筑面积", value: "87333.3㎡"},
							{label: "经营面积", value: "15347.26㎡"},
							{label: "绿化面积", value: "5689.64㎡"}
						],
						chartBox: [
							{
								barWidth: 20,
								title: {
									text: "近半年销售额",
									x: "center"
								},
								xAxis: {
									type: "category",
									name: "月",
									data: ["7", "8", "9", "10", "11", "12"],
									axisPointer: {
										type: "shadow"
									}
								},
								tooltip: {
									trigger: "axis",
									formatter: v => {
										return v[0].name + "月：" + v[0].value + "万元";
									}
								},
								grid: {
									left: 40,
									top: 40,
									bottom: 30,
									right: 50
								},
								yAxis: {
									type: "value",
									name: "万元"
								},
								series: [
									{
										data: [200, 150, 250, 300, 500, 450],
										type: "bar",
										itemStyle: {
											color: "#379DFB"
										}
									}
								]
							},
							{
								title: {
									text: "业务占比",
									x: "center"
								},
								tooltip: {
									trigger: "item",
									formatter: "{b} : {c} ({d}%)"
								},
								legend: {
									data: ["小吃", "餐饮", "零食", "其他"],
									bottom: 10
								},
								series: [
									{
										name: "访问来源",
										type: "pie",
										radius: "55%",
										center: ["50%", "50%"],
										data: [
											{value: 335, name: "小吃"},
											{value: 310, name: "餐饮"},
											{value: 234, name: "零食"},
											{value: 135, name: "其他"}
										],
										itemStyle: {
											normal: {
												color: function (v) {
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
										emphasis: {
											itemStyle: {
												shadowBlur: 10,
												shadowOffsetX: 0,
												shadowColor: "rgba(0, 0, 0, 0.5)"
											}
										}
									}
								]
							}
						],
						style: {
							width: "50px",
							height: "25px",
							top: "142px",
							left: "320px",
							background: "red"
						}
					},
					{
						name: "加油站",
						remark: "提供柴油、汽油（E95、E98、95……）",
						data: [
							{a: "加油站负责人", b: "XXX"},
							{a: "加油站联系电话", b: "Xxxxxxxxxxx"},
							{a: "加油站管理单位", b: "中石化"},
							{a: "加油岛数量", b: "6个"},
							// {a: '加油枪数量', b: '36个'},
							// {a: '可加油', b: '0,92,95,98'},
							{a: "是否有便利店", b: "是"}
							/*	{a: '油枪(92)', b: '8个'},
                  {a: '油枪(95)', b: '8个'},
                  {a: '油枪(98)', b: '8个'},
                  {a: '油枪(0)', b: '6个'},
                  {a: '异常油枪', b: '6个'},*/
						],
						formData: [
							{label: "加油站负责人", value: "XXX"},
							{label: "加油站联系电话", value: "Xxxxxxxxxxx"},
							{label: "加油站管理单位", value: "中石化"},
							{label: "加油岛数量", value: "6个"},
							// {label: '加油枪数量', value: '36个'},
							// {label: '可加油', value: '0,92,95,98'},
							{label: "是否有便利店", value: "是"}
							/*	{label: '油枪(92)', value: '8个'},
                  {label: '油枪(95)', value: '8个'},
                  {label: '油枪(98)', value: '8个'},
                  {label: '油枪(0)', value: '6个'},
                  {label: '异常油枪', value: '6个'},*/
						],
						columns: [
							{a: "92#", b: "95#", c: "98#", d: "0#", e: "异常", f: "总计"},
							{a: "8个", b: "8个", c: "8个", d: "6个", e: "6个", f: "36个"}
						],
						chartBox: [
							{
								barWidth: 20,
								title: {
									text: "近半年销售额",
									x: "center"
								},
								xAxis: {
									type: "category",
									name: "月",
									data: ["7", "8", "9", "10", "11", "12"],
									axisPointer: {
										type: "shadow"
									}
								},
								tooltip: {
									trigger: "axis",
									formatter: v => {
										return v[0].name + "月：" + v[0].value + "万元";
									}
								},
								grid: {
									left: 40,
									top: 40,
									bottom: 30,
									right: 50
								},
								yAxis: {
									type: "value",
									name: "万元"
								},
								series: [
									{
										data: [300, 250, 350, 440, 786, 820],
										type: "bar",
										itemStyle: {
											color: "#379DFB"
										}
									}
								]
							},
							{
								title: {
									text: "类型占比",
									x: "center"
								},
								tooltip: {
									trigger: "item",
									formatter: "{b} : {c} ({d}%)"
								},
								legend: {
									data: ["0#", "92#", "95#", "98#", "非油"],
									bottom: 10
								},
								series: [
									{
										name: "访问来源",
										type: "pie",
										radius: "55%",
										center: ["50%", "50%"],
										data: [
											{value: 180, name: "0#"},
											{value: 250, name: "92#"},
											{value: 234, name: "95#"},
											{value: 320, name: "98#"},
											{value: 50, name: "非油"}
										],
										itemStyle: {
											normal: {
												color: function (v) {
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
										emphasis: {
											itemStyle: {
												shadowBlur: 10,
												shadowOffsetX: 0,
												shadowColor: "rgba(0, 0, 0, 0.5)"
											}
										}
									}
								]
							}
						],
						style: {
							width: "50px",
							height: "25px",
							top: "226px",
							left: "302px",
							background: "#345"
						}
					},
					{
						name: "小圆满餐厅",
						remark: "口味独特、菜品丰富",
						data: [
							{a: "负责人", b: "XXX"},
							{a: "联系方式", b: "XXXXXXXX"},
							{a: "经营面积", b: "Xx㎡"},
							{a: "主营业务", b: "中餐速食(一级品牌)"},
							{a: "合同开始日期", b: "Xxxx年xx月xx日"},
							{a: "合同结束日期", b: "Xxxx年xx月xx日"}
						],
						formData: [
							{label: "负责人", value: "XXX"},
							{label: "联系方式", value: "Xxxxxxxxxxx"},
							{label: "经营面积", value: "Xx㎡"},
							{label: "主营业务", value: "中餐速食(一级品牌)"},
							{label: "合同开始日期", value: "Xxxx年xx月xx日"},
							{label: "合同结束日期", value: "Xxxx年xx月xx日"}
						],
						chartBox: [
							{
								barWidth: 20,
								title: {
									text: "近半年销售额",
									x: "center"
								},
								xAxis: {
									type: "category",
									name: "月",
									data: ["7", "8", "9", "10", "11", "12"],
									axisPointer: {
										type: "shadow"
									}
								},
								tooltip: {
									trigger: "axis",
									formatter: v => {
										return v[0].name + "月：" + v[0].value + "万元";
									}
								},
								grid: {
									left: 40,
									top: 40,
									bottom: 30,
									right: 50
								},
								yAxis: {
									type: "value",
									name: "万元"
								},
								series: [
									{
										data: [34.82, 23.9, 15.68, 21.77, 12.39, 14.09],
										type: "bar",
										itemStyle: {
											color: "#379DFB"
										}
									}
								]
							},
							{
								barWidth: 20,
								title: {
									text: "近半年销售量",
									x: "center"
								},
								xAxis: {
									type: "category",
									name: "月",
									data: ["7", "8", "9", "10", "11", "12"],
									axisPointer: {
										type: "shadow"
									}
								},
								tooltip: {
									trigger: "axis",
									formatter: v => {
										return v[0].name + "月：" + v[0].value + "万单";
									}
								},
								grid: {
									left: 40,
									top: 40,
									bottom: 30,
									right: 50
								},
								yAxis: {
									type: "value",
									name: "万单"
								},
								series: [
									{
										data: [1.56, 0.97, 0.86, 1.18, 0.63, 0.75],
										type: "bar",
										itemStyle: {
											color: "#379DFB"
										}
									}
								]
							}
						],
						style: {
							width: "92px",
							height: "63px",
							top: "169px",
							left: "404px",
							background: "#453"
						}
					},
					{
						name: "隆盛牛肉面",
						remark: "面中之王",
						data: [
							{a: "负责人", b: "Xxx"},
							{a: "联系方式", b: "Xxxxxxxxxxx"},
							{a: "经营面积", b: "Xx㎡"},
							{a: "主营业务", b: "中餐速食(一级品牌)"},
							{a: "合同开始日期", b: "Xxxx年xx月xx日"},
							{a: "合同结束日期", b: "Xxxx年xx月xx日"}
						],
						formData: [
							{label: "负责人", value: "XXX"},
							{label: "联系方式", value: "Xxxxxxxxxxx"},
							{label: "经营面积", value: "Xx㎡"},
							{label: "主营业务", value: "中餐速食(一级品牌)"},
							{label: "合同开始日期", value: "Xxxx年xx月xx日"},
							{label: "合同结束日期", value: "Xxxx年xx月xx日"}
						],
						chartBox: [
							{
								barWidth: 20,
								title: {
									text: "近半年销售额",
									x: "center"
								},
								xAxis: {
									type: "category",
									name: "月",
									data: ["7", "8", "9", "10", "11", "12"],
									axisPointer: {
										type: "shadow"
									}
								},
								tooltip: {
									trigger: "axis",
									formatter: v => {
										return v[0].name + "月：" + v[0].value + "万元";
									}
								},
								grid: {
									left: 40,
									top: 40,
									bottom: 30,
									right: 50
								},
								yAxis: {
									type: "value",
									name: "万元"
								},
								series: [
									{
										data: [9.24, 11.14, 10.2, 12.18, 9.17, 10.46],
										type: "bar",
										itemStyle: {
											color: "#379DFB"
										}
									}
								]
							},
							{
								barWidth: 20,
								title: {
									text: "近半年销售量",
									x: "center"
								},
								xAxis: {
									type: "category",
									name: "月",
									data: ["7", "8", "9", "10", "11", "12"],
									axisPointer: {
										type: "shadow"
									}
								},
								tooltip: {
									trigger: "axis",
									formatter: v => {
										return v[0].name + "月：" + v[0].value + "个";
									}
								},
								grid: {
									left: 40,
									top: 40,
									bottom: 30,
									right: 50
								},
								yAxis: {
									type: "value",
									name: "个"
								},
								series: [
									{
										data: [0.48, 0.62, 0.51, 0.63, 0.46, 0.58],
										type: "bar",
										itemStyle: {
											color: "#379DFB"
										}
									}
								]
							}
						],
						style: {
							width: "56px",
							height: "34px",
							top: "162px",
							left: "496px",
							zIndex: "10",
							background: "#909"
						}
					},
					{
						name: "大厅",
						noPopover: true,
						remark: "咨询问题、提供休息处……",
						style: {
							width: "110px",
							height: "60px",
							top: "169px",
							left: "496px",
							background: "#980"
						}
					},
					{
						name: "楚天舒便利店",
						remark: "便宜实惠、物美价廉……",
						data: [
							{a: "负责人", b: "Xxx"},
							{a: "联系方式", b: "Xxxxxxxxxxx"},
							{a: "经营面积", b: "Xx㎡"},
							{a: "主营业务", b: "便利店"},
							{a: "合同开始日期", b: "Xxxx年xx月xx日"},
							{a: "合同结束日期", b: "Xxxx年xx月xx日"}
						],
						formData: [
							{label: "负责人", value: "XXX"},
							{label: "联系方式", value: "Xxxxxxxxxxx"},
							{label: "经营面积", value: "Xx㎡"},
							{label: "主营业务", value: "便利店"},
							{label: "合同开始日期", value: "Xxxx年xx月xx日"},
							{label: "合同结束日期", value: "Xxxx年xx月xx日"}
						],
						chartBox: [
							{
								barWidth: 20,
								title: {
									text: "近半年销售额",
									x: "center"
								},
								xAxis: {
									type: "category",
									name: "月",
									data: ["7", "8", "9", "10", "11", "12"],
									axisPointer: {
										type: "shadow"
									}
								},
								tooltip: {
									trigger: "axis",
									formatter: v => {
										return v[0].name + "月：" + v[0].value + "万元";
									}
								},
								grid: {
									left: 40,
									top: 40,
									bottom: 30,
									right: 50
								},
								yAxis: {
									type: "value",
									name: "万元"
								},
								series: [
									{
										data: [42.31, 49.51, 36.4, 41.53, 23.4, 19.62],
										type: "bar",
										itemStyle: {
											color: "#379DFB"
										}
									}
								]
							},
							{
								barWidth: 20,
								title: {
									text: "近半年销售量",
									x: "center"
								},
								xAxis: {
									type: "category",
									name: "月",
									data: ["7", "8", "9", "10", "11", "12"],
									axisPointer: {
										type: "shadow"
									}
								},
								tooltip: {
									trigger: "axis",
									formatter: v => {
										return v[0].name + "月：" + v[0].value + "个";
									}
								},
								grid: {
									left: 40,
									top: 40,
									bottom: 30,
									right: 50
								},
								yAxis: {
									type: "value",
									name: "个"
								},
								series: [
									{
										data: [21.25, 24.98, 17.65, 21.35, 12.62, 10.69],
										type: "bar",
										itemStyle: {
											color: "#379DFB"
										}
									}
								]
							}
						],
						style: {
							width: "43px",
							height: "67px",
							top: "142px",
							left: "609px",
							background: "#657"
						}
					},
					{
						name: "驿路相伴小吃",
						remark: "特色小吃、品种丰富……",

						data: [
							{a: "负责人", b: "Xxx"},
							{a: "联系方式", b: "Xxxxxxxxxxx"},
							{a: "经营面积", b: "Xx㎡"},
							{a: "主营业务", b: "中餐速食(一级品牌)"},
							{a: "合同开始日期", b: "Xxxx年xx月xx日"},
							{a: "合同结束日期", b: "Xxxx年xx月xx日"}
						],
						formData: [
							{label: "负责人", value: "XXX"},
							{label: "联系方式", value: "Xxxxxxxxxxx"},
							{label: "经营面积", value: "Xx㎡"},
							{label: "主营业务", value: "中餐速食(一级品牌)"},
							{label: "合同开始日期", value: "Xxxx年xx月xx日"},
							{label: "合同结束日期", value: "Xxxx年xx月xx日"}
						],
						chartBox: [
							{
								barWidth: 20,
								title: {
									text: "近半年销售额",
									x: "center"
								},
								xAxis: {
									type: "category",
									name: "月",
									data: ["7", "8", "9", "10", "11", "12"],
									axisPointer: {
										type: "shadow"
									}
								},
								tooltip: {
									trigger: "axis",
									formatter: v => {
										return v[0].name + "月：" + v[0].value + "万元";
									}
								},
								grid: {
									left: 40,
									top: 40,
									bottom: 30,
									right: 50
								},
								yAxis: {
									type: "value",
									name: "万元"
								},
								series: [
									{
										data: [12.2, 12.81, 10.61, 16.83, 10.81, 12.02],
										type: "bar",
										itemStyle: {
											color: "#379DFB"
										}
									}
								]
							},
							{
								barWidth: 20,
								title: {
									text: "近半年销售量",
									x: "center"
								},
								xAxis: {
									type: "category",
									name: "月",
									data: ["7", "8", "9", "10", "11", "12"],
									axisPointer: {
										type: "shadow"
									}
								},
								tooltip: {
									trigger: "axis",
									formatter: v => {
										return v[0].name + "月：" + v[0].value + "万单";
									}
								},
								grid: {
									left: 40,
									top: 40,
									bottom: 30,
									right: 50
								},
								yAxis: {
									type: "value",
									name: "万单"
								},
								series: [
									{
										data: [1.11, 1.31, 1.02, 1.69, 1.22, 1.21],
										type: "bar",
										itemStyle: {
											color: "#379DFB"
										}
									}
								]
							}
						],
						style: {
							width: "43px",
							height: "67px",
							top: "142px",
							left: "654px",
							background: "#768"
						}
					},
					{
						name: "男厕",
						remark: "男厕所",
						noPingEffect: true,
						data: [
							{a: "厕所等级", b: "五星"},
							{label: "保洁人员", value: "4个"},
							{a: "蹲位数量", b: "114个"},
							{a: "小便器阀数量", b: "114个"},
							{a: "厕所改造时间", b: "2018年09月"}
						],
						formData: [
							{label: "厕所等级", value: "五星"},
							{label: "入厕总数", value: "398个（4/3 男/女）"},
							{label: "保洁人员", value: "4个"},
							{label: "蹲位数量", value: "114个"},
							{label: "小便器阀数量", value: "114个"},
							{label: "厕所改造时间", value: "2018年09月"}
						],
						chartBox: [
							{
								barWidth: 20,
								title: {
									text: "近半年男女如厕",
									x: "center"
								},
								xAxis: {
									type: "category",
									name: "月",
									data: ["7", "8", "9", "10", "11", "12"],
									axisPointer: {
										type: "shadow"
									},
									axisTick: {
										show: false
									},
									splitLine: {show: false}
								},
								tooltip: {
									trigger: "axis",
									formatter: v => {
										return v[0].name + "月：" + v[0].value + "人";
									}
								},
								grid: {
									left: 40,
									top: 40,
									bottom: 50,
									right: 50
								},
								yAxis: {
									type: "value",
									name: "人",
									axisTick: {
										show: false
									},
									splitLine: {show: false}
								},
								legend: {
									bottom: 0,
									data: ["男", "女"]
								},
								series: [
									{
										name: "男",
										data: [800, 932, 901, 934, 1580, 1400],
										type: "bar",
										itemStyle: {color: "#379DFB"}
									},
									{
										name: "女",
										data: [830, 912, 951, 974, 1700, 1550],
										type: "bar",
										itemStyle: {color: "#fa3b43"}
									}
								]
							},
							{
								title: {
									text: "今日各时段男女如厕情况",
									x: "center"
								},
								barWidth: 10,
								tooltip: {
									trigger: "axis",
									axisPointer: {
										type: "shadow"
									},
									formatter: v => {
										if (v.length === 1) {
											return (
												v[0].name +
												"时<br>" +
												v[0].seriesName +
												"：" +
												Math.abs(v[0].value) +
												"辆"
											);
										}
										if (v.length === 2) {
											return (
												v[0].name +
												"时<br>" +
												v[0].seriesName +
												"：" +
												Math.abs(v[0].value) +
												"辆<br>" +
												v[1].seriesName +
												"：" +
												Math.abs(v[1].value) +
												"辆"
											);
										}
									}
								},
								legend: {
									data: ["男", "女"],
									bottom: 0
								},
								grid: {
									left: "3%",
									right: "7%",
									bottom: "30",
									containLabel: true
								},
								xAxis: [
									{
										type: "value",
										axisLabel: {
											formatter: v => {
												return Math.abs(v);
											}
										},
										axisTick: {
											show: false
										}
										// splitLine: {show: false},
									}
								],
								yAxis: [
									{
										name: "时",
										type: "category",
										axisTick: {
											show: false
										},
										data: ["0-3", "4-7", "8-11", "12-15", "16-19", "20-23"]
									}
								],
								series: [
									{
										name: "男",
										type: "bar",
										stack: "总量",
										label: {
											show: true,
											position: "left",
											formatter: v => {
												return Math.abs(v.value);
											}
										},
										itemStyle: {color: "#379DFB"},
										data: [-30, -50, -48, -36, -36, -23]
									},
									{
										name: "女",
										type: "bar",
										stack: "总量",
										label: {
											show: true,
											formatter: v => {
												return Math.abs(v.value);
											}
										},
										itemStyle: {color: "#fa3b43"},
										data: [28, 33, 42, 32, 39, 29]
									}
								]
							}
						],
						style: {
							width: "58px",
							height: "95px",
							top: "113px",
							left: "698px",
							background: "#785"
						}
					},
					{
						name: "女厕",
						remark: "女厕所",
						noPingEffect: true,
						data: [
							{a: "厕所等级", b: "五星"},
							{label: "保洁人员", value: "4个"},
							{a: "蹲位数量", b: "114个"},
							{a: "厕所改造时间", b: "2018年09月"}
						],
						formData: [
							{label: "厕所等级", value: "五星"},
							{label: "如厕总数", value: "398个（4/3 男/女）"},
							{label: "保洁人员", value: "4个"},
							{label: "蹲位数量", value: "114个"},
							{label: "厕所改造时间", value: "2018年09月"}
						],
						chartBox: [
							{
								barWidth: 20,
								title: {
									text: "近半年男女如厕",
									x: "center"
								},
								xAxis: {
									type: "category",
									name: "月",
									data: ["7", "8", "9", "10", "11", "12"],
									axisPointer: {
										type: "shadow"
									},
									axisTick: {
										show: false
									},
									splitLine: {show: false}
								},
								tooltip: {
									trigger: "axis",
									formatter: v => {
										return v[0].name + "月：" + v[0].value + "人";
									}
								},
								grid: {
									left: 40,
									top: 40,
									bottom: 50,
									right: 50
								},
								yAxis: {
									type: "value",
									name: "人",
									axisTick: {
										show: false
									},
									splitLine: {show: false}
								},
								legend: {
									bottom: 0,
									data: ["男", "女"]
								},
								series: [
									{
										name: "男",
										data: [800, 932, 901, 934, 1580, 1400],
										type: "bar",
										itemStyle: {color: "#379DFB"}
									},
									{
										name: "女",
										data: [830, 912, 951, 974, 1700, 1550],
										type: "bar",
										itemStyle: {color: "#fa3b43"}
									}
								]
							},
							{
								title: {
									text: "今日各时段男女如厕情况",
									x: "center"
								},
								barWidth: 10,
								tooltip: {
									trigger: "axis",
									axisPointer: {
										type: "shadow"
									},
									formatter: v => {
										if (v.length === 1) {
											return (
												v[0].name +
												"时<br>" +
												v[0].seriesName +
												"：" +
												Math.abs(v[0].value) +
												"辆"
											);
										}
										if (v.length === 2) {
											return (
												v[0].name +
												"时<br>" +
												v[0].seriesName +
												"：" +
												Math.abs(v[0].value) +
												"辆<br>" +
												v[1].seriesName +
												"：" +
												Math.abs(v[1].value) +
												"辆"
											);
										}
									}
								},
								legend: {
									data: ["男", "女"],
									bottom: 0
								},
								grid: {
									left: "3%",
									right: "7%",
									bottom: "30",
									containLabel: true
								},
								xAxis: [
									{
										type: "value",
										axisLabel: {
											formatter: v => {
												return Math.abs(v);
											}
										},
										axisTick: {
											show: false
										}
										// splitLine: {show: false},
									}
								],
								yAxis: [
									{
										name: "时",
										type: "category",
										axisTick: {
											show: false
										},
										data: ["0-3", "4-7", "8-11", "12-15", "16-19", "20-23"]
									}
								],
								series: [
									{
										name: "男",
										type: "bar",
										stack: "总量",
										label: {
											show: true,
											position: "left",
											formatter: v => {
												return Math.abs(v.value);
											}
										},
										itemStyle: {color: "#379DFB"},
										data: [-30, -50, -48, -36, -36, -23]
									},
									{
										name: "女",
										type: "bar",
										stack: "总量",
										label: {
											show: true,
											formatter: v => {
												return Math.abs(v.value);
											}
										},
										itemStyle: {color: "#fa3b43"},
										data: [28, 33, 42, 32, 39, 29]
									}
								]
							}
						],
						style: {
							width: "57px",
							height: "95px",
							top: "113px",
							left: "757px",
							background: "#004"
						}
					},
					{
						name: "伟鸿汽修",
						remark: "处理及维修汽车故障……",
						data: [
							{a: "负责人", b: "Xxx"},
							{a: "联系方式", b: "Xxxxxxxxxxx"},
							{a: "经营面积", b: "Xx㎡"},
							{a: "主营业务", b: "汽修(一级品牌)"},
							{a: "合同开始日期", b: "Xxxx年xx月xx日"},
							{a: "合同结束日期", b: "Xxxx年xx月xx日"}
						],
						formData: [
							{label: "负责人", value: "XXX"},
							{label: "联系方式", value: "Xxxxxxxxxxx"},
							{label: "经营面积", value: "Xx㎡"},
							{label: "主营业务", value: "汽修(一级品牌)"},
							{label: "合同开始日期", value: "Xxxx年xx月xx日"},
							{label: "合同结束日期", value: "Xxxx年xx月xx日"}
						],
						chartBox: [
							{
								barWidth: 20,
								title: {
									text: "近半年销售额",
									x: "center"
								},
								xAxis: {
									type: "category",
									name: "月",
									data: ["7", "8", "9", "10", "11", "12"],
									axisPointer: {
										type: "shadow"
									}
								},
								tooltip: {
									trigger: "axis",
									formatter: v => {
										return v[0].name + "月：" + v[0].value + "元";
									}
								},
								grid: {
									left: 40,
									top: 40,
									bottom: 30,
									right: 50
								},
								yAxis: {
									type: "value",
									name: "元"
								},
								series: [
									{
										data: [7200.2, 2770.16, 1300.52, 3201.82, 2106.2, 2603.26],
										type: "bar",
										itemStyle: {
											color: "#379DFB"
										}
									}
								]
							},
							{
								barWidth: 20,
								title: {
									text: "近半年销售量",
									x: "center"
								},
								xAxis: {
									type: "category",
									name: "月",
									data: ["7", "8", "9", "10", "11", "12"],
									axisPointer: {
										type: "shadow"
									}
								},
								tooltip: {
									trigger: "axis",
									formatter: v => {
										return v[0].name + "月：" + v[0].value + "单";
									}
								},
								grid: {
									left: 40,
									top: 40,
									bottom: 30,
									right: 50
								},
								yAxis: {
									type: "value",
									name: "单"
								},
								series: [
									{
										data: [35, 14, 7, 16, 10, 13],
										type: "bar",
										itemStyle: {
											color: "#379DFB"
										}
									}
								]
							}
						],
						style: {
							width: "48px",
							height: "58px",
							top: "113px",
							left: "815px",
							background: "#884"
						}
					},
					{
						name: "猫屎咖啡",
						remark: "累了困了喝咖啡，猫屎咖啡你值得拥有……",
						data: [
							{a: "负责人", b: "Xxx"},
							{a: "联系方式", b: "Xxxxxxxxxxx"},
							{a: "经营面积", b: "Xx㎡"},
							{a: "主营业务", b: "咖啡饮料等西式下午茶(一级品牌)"},
							{a: "合同开始日期", b: "Xxxx年xx月xx日"},
							{a: "合同结束日期", b: "Xxxx年xx月xx日"}
						],
						formData: [
							{label: "负责人", value: "XXX"},
							{label: "联系方式", value: "Xxxxxxxxxxx"},
							{label: "经营面积", value: "Xx㎡"},
							{label: "主营业务", value: "咖啡饮料等西式下午茶(一级品牌)"},
							{label: "合同开始日期", value: "Xxxx年xx月xx日"},
							{label: "合同结束日期", value: "Xxxx年xx月xx日"}
						],
						chartBox: [
							{
								barWidth: 20,
								title: {
									text: "近半年销售额",
									x: "center"
								},
								xAxis: {
									type: "category",
									name: "月",
									data: ["7", "8", "9", "10", "11", "12"],
									axisPointer: {
										type: "shadow"
									}
								},
								tooltip: {
									trigger: "axis",
									formatter: v => {
										return v[0].name + "月：" + v[0].value + "万元";
									}
								},
								grid: {
									left: 40,
									top: 40,
									bottom: 30,
									right: 50
								},
								yAxis: {
									type: "value",
									name: "万元"
								},
								series: [
									{
										data: [1.65, 2.26, 2.68, 5.77, 4.69, 3.62],
										type: "bar",
										itemStyle: {
											color: "#379DFB"
										}
									}
								]
							},
							{
								barWidth: 20,
								title: {
									text: "近半年销售量",
									x: "center"
								},
								xAxis: {
									type: "category",
									name: "月",
									data: ["7", "8", "9", "10", "11", "12"],
									axisPointer: {
										type: "shadow"
									}
								},
								tooltip: {
									trigger: "axis",
									formatter: v => {
										return v[0].name + "月：" + v[0].value + "万单";
									}
								},
								grid: {
									left: 40,
									top: 40,
									bottom: 30,
									right: 50
								},
								yAxis: {
									type: "value",
									name: "万单"
								},
								series: [
									{
										data: [0.52, 0.73, 0.82, 1.93, 1.56, 1.21],
										type: "bar",
										itemStyle: {
											color: "#379DFB"
										}
									}
								]
							}
						],
						style: {
							width: "48px",
							height: "48px",
							top: "182px",
							left: "815px",
							background: "#665"
						}
					},
					{
						name: "出口",
						noPingEffect: true,
						remark: "",
						data: [
							{a: "卡口是否正常", b: "是"},
							{a: "今日驶入车辆", b: "2853辆"},
							{a: "今日驶出车辆", b: "2766辆"},
							{a: "日均车流量", b: "1800辆"}
						],
						formData: [
							{label: "卡口是否正常", value: "是"},
							{label: "今日驶入车辆", value: "2853辆"},
							{label: "今日驶出车辆", value: "2766辆"},
							{label: "日均车流量", value: "1800辆"}
						],
						chartBox: [
							{
								barWidth: 20,
								title: {
									text: "近半年车流量",
									x: "center"
								},
								tooltip: {
									trigger: "axis",
									axisPointer: {
										type: "shadow"
									},
									formatter: v => {
										if (v.length === 2) {
											return (
												v[0].name +
												"月<br>" +
												v[0].seriesName +
												"：" +
												v[0].value +
												"辆<br>" +
												v[1].seriesName +
												"：" +
												v[1].value +
												"辆"
											);
										}
										if (v.length === 1) {
											return (
												v[0].name +
												"月<br>" +
												v[0].seriesName +
												"：" +
												v[0].value +
												"辆"
											);
										}
									}
								},
								legend: {
									data: ["大车", "小车"],
									bottom: 0
								},
								grid: {
									left: "3%",
									right: "7%",
									bottom: "30",
									containLabel: true
								},
								xAxis: [
									{
										name: "月",
										type: "category",
										data: ["7", "8", "9", "10", "11", "12"],
										axisTick: {
											show: false
										},
										splitLine: {show: false}
									}
								],
								yAxis: [
									{
										type: "value",
										name: "万辆",
										axisTick: {
											show: false
										},
										splitLine: {show: false}
									}
								],
								series: [
									{
										name: "大车",
										type: "bar",
										stack: "车流量",
										data: [620, 507, 400, 734, 689, 666],
										itemStyle: {color: "#596aec"}
									},
									{
										name: "小车",
										type: "bar",
										stack: "车流量",
										data: [730, 650, 600, 499, 290, 230],
										itemStyle: {color: "#43cef7"}
									}
								]
							},
							{
								title: {
									text: "今日各时段驶出车辆",
									x: "center"
								},
								barWidth: 10,
								tooltip: {
									trigger: "axis",
									axisPointer: {
										type: "shadow"
									},
									formatter: v => {
										if (v.length === 1) {
											return (
												v[0].name +
												"时<br>" +
												v[0].seriesName +
												"：" +
												Math.abs(v[0].value) +
												"辆"
											);
										}
										if (v.length === 2) {
											return (
												v[0].name +
												"时<br>" +
												v[0].seriesName +
												"：" +
												Math.abs(v[0].value) +
												"辆<br>" +
												v[1].seriesName +
												"：" +
												Math.abs(v[1].value) +
												"辆"
											);
										}
									}
								},
								legend: {
									icon: 'circle',
									data: ["大车", "小车"],
									bottom: 0
								},
								grid: {
									left: "3%",
									right: "7%",
									bottom: "30",
									containLabel: true
								},
								xAxis: [
									{
										name: "时",
										type: "category",
										axisTick: {
											show: false
										},
										data: ["0-3", "4-7", "8-11", "12-15", "16-19", "20-23"]
									}
								],
								yAxis: [
									{
										type: "value",
										axisLabel: {
											formatter: v => {
												return Math.abs(v);
											}
										},
										axisTick: {
											show: false
										},
										splitLine: {show: false}
									}
								],
								series: [
									{
										name: "大车",
										type: "line",
										label: {
											show: true,
											formatter: v => {
												return Math.abs(v.value);
											}
										},
										data: [90, 80, 153, 236, 326, 230],
										itemStyle: {color: "#596aec"}
									},
									{
										name: "小车",
										type: "line",
										label: {
											show: true,
											formatter: v => {
												return Math.abs(v.value);
											}
										},
										data: [68, 93, 462, 432, 390, 293],
										itemStyle: {color: "#43cef7"}
									}
								]
							}
						],
						style: {
							width: "190px",
							height: "62px",
							top: "293px",
							left: "96px",
							background: "#66382d"
						}
					},
					{
						name: "入口",
						noPingEffect: true,
						remark: "",
						data: [
							{a: "卡口是否正常", b: "是"},
							{a: "今日驶入车辆", b: "2853辆"},
							{a: "今日驶出车辆", b: "2766辆"},
							{a: "日均车流量", b: "1940辆"}
						],
						formData: [
							{label: "卡口是否正常", value: "是"},
							{label: "今日驶入车辆", value: "2853辆"},
							{label: "今日驶出车辆", value: "2766辆"},
							{label: "日均车流量", value: "1940辆"}
						],
						chartBox: [
							{
								barWidth: 20,
								title: {
									text: "近半年车流量",
									x: "center"
								},
								tooltip: {
									trigger: "axis",
									axisPointer: {
										type: "shadow"
									},
									formatter: v => {
										if (v.length === 2) {
											return (
												v[0].name +
												"月<br>" +
												v[0].seriesName +
												"：" +
												v[0].value +
												"辆<br>" +
												v[1].seriesName +
												"：" +
												v[1].value +
												"辆"
											);
										}
										if (v.length === 1) {
											return (
												v[0].name +
												"月<br>" +
												v[0].seriesName +
												"：" +
												v[0].value +
												"辆"
											);
										}
									}
								},
								legend: {
									data: ["大车", "小车"],
									bottom: 0
								},
								grid: {
									left: "3%",
									right: "7%",
									bottom: "30",
									containLabel: true
								},
								xAxis: [
									{
										name: "月",
										type: "category",
										data: ["7", "8", "9", "10", "11", "12"],
										axisTick: {
											show: false
										},
										splitLine: {show: false}
									}
								],
								yAxis: [
									{
										type: "value",
										name: "万辆",
										axisTick: {
											show: false
										},
										splitLine: {show: false}
									}
								],
								series: [
									{
										name: "大车",
										type: "bar",
										stack: "车流量",
										data: [620, 507, 400, 734, 689, 666],
										itemStyle: {color: "#596aec"}
									},
									{
										name: "小车",
										type: "bar",
										stack: "车流量",
										data: [730, 650, 600, 499, 290, 230],
										itemStyle: {color: "#43cef7"}
									}
								]
							},
							{
								title: {
									text: "今日各时段进入车辆",
									x: "center"
								},
								barWidth: 10,
								tooltip: {
									trigger: "axis",
									axisPointer: {
										type: "shadow"
									},
									formatter: v => {
										if (v.length === 1) {
											return (
												v[0].name +
												"时<br>" +
												v[0].seriesName +
												"：" +
												Math.abs(v[0].value) +
												"辆"
											);
										}
										if (v.length === 2) {
											return (
												v[0].name +
												"时<br>" +
												v[0].seriesName +
												"：" +
												Math.abs(v[0].value) +
												"辆<br>" +
												v[1].seriesName +
												"：" +
												Math.abs(v[1].value) +
												"辆"
											);
										}
									}
								},
								legend: {
									data: ["大车", "小车"],
									icon: 'circle',
									bottom: 0
								},
								grid: {
									left: "3%",
									right: "7%",
									bottom: "30",
									containLabel: true
								},
								xAxis: [
									{
										name: "时",
										type: "category",
										axisTick: {
											show: false
										},
										data: ["0-3", "4-7", "8-11", "12-15", "16-19", "20-23"]
									}
								],
								yAxis: [
									{
										type: "value",
										axisLabel: {
											formatter: v => {
												return Math.abs(v);
											}
										},
										axisTick: {
											show: false
										},
										splitLine: {show: false}
									}
								],
								series: [
									{
										name: "大车",
										type: "line",
										label: {
											show: true,
											formatter: v => {
												return Math.abs(v.value);
											}
										},
										data: [80, 106, 161, 224, 210, 130],
										itemStyle: {color: "#596aec"}
									},
									{
										name: "小车",
										type: "line",
										label: {
											show: true,
											formatter: v => {
												return Math.abs(v.value);
											}
										},
										data: [60, 89, 441, 474, 490, 320],
										itemStyle: {color: "#43cef7"}
									}
								]
							}
						],
						style: {
							width: "190px",
							height: "62px",
							top: "293px",
							left: "1080px",
							background: "#66244a"
						}
					},
					{
						name: "停车区",
						remark: "",
						noPingEffect: true,
						data: [
							{a: "目前停车-大车", b: "100辆"},
							{a: "目前停车-小车", b: "500辆"},
							{a: "今日均停车时长", b: "2小时"},
							{a: "大车停车位", b: "500个"},
							{a: "小车停车位", b: "1000个"}
						],
						formData: [
							{label: "当前大车停放", value: "100辆"},
							{label: "当前小车停放", value: "200辆"},
							{label: "今日均停车时长", value: "2小时"}
						],
						chartBox: [
							{
								barWidth: 20,
								title: {
									text: "当天各时区停车量",
									x: "center"
								},
								tooltip: {
									trigger: "axis",
									axisPointer: {
										type: "shadow"
									},
									formatter: v => {
										if (v.length === 2) {
											return (
												v[0].name +
												"月<br>" +
												v[0].seriesName +
												"：" +
												v[0].value +
												"辆<br>" +
												v[1].seriesName +
												"：" +
												v[1].value +
												"辆"
											);
										}
										if (v.length === 1) {
											return (
												v[0].name +
												"月<br>" +
												v[0].seriesName +
												"：" +
												v[0].value +
												"辆"
											);
										}
									}
								},
								legend: {
									data: ["大车", "小车"],
									bottom: 0
								},
								grid: {
									left: "3%",
									right: "7%",
									bottom: "30",
									containLabel: true
								},
								xAxis: [
									{
										name: "时",
										type: "category",
										data: ["0-3", "4-7", "8-11", "12-15", "16-19", "20-23"],
										axisTick: {
											show: false
										},
										splitLine: {show: false}
									}
								],
								yAxis: [
									{
										type: "value",
										name: "辆",
										axisTick: {
											show: false
										},
										splitLine: {show: false}
									}
								],
								series: [
									{
										name: "大车",
										type: "bar",
										stack: "车流量",
										data: [620, 507, 400, 734, 689, 666],
										itemStyle: {color: "#596aec"}
									},
									{
										name: "小车",
										type: "bar",
										stack: "车流量",
										itemStyle: {color: "#43cef7"},
										data: [730, 650, 600, 499, 290, 230]
									}
								]
							}
						],
						style: {
							width: "160px",
							height: "80px",
							top: "275px",
							left: "532px",
							background: "#176617"
						}
					}
				]
			};
		},
		methods: {
			openDetails(i) {
				if (!i.noPopover) {
					this.popoverDisabled = true;
					this.$refs["more"].openDialog(i);
				}
			}
		},
		mounted() {
			if (this.imgSize == "small") {
				this.box.forEach((i, x) => {
					Object.assign(i.style, this.boxStyle[x]);
				});
			}
		}
	};
</script>

<style scoped lang="less">
  .imgBox {
    width: 920px;
    margin: auto;
    position: relative;

    .img {
      width: 920px;
    }

    .smallBox {
      position: absolute;
      background: none !important;
    }
  }

  table {
    border-collapse: collapse;
    width: 100%;
    text-align: center;
    font-weight: 100;
  }

  table,
  th,
  td {
    border: 1px solid #606266;
    line-height: 2.5;
  }
</style>
<style>
  .el-popover {
    background: rgba(255, 255, 255, 0.75) !important;
    border: 1px solid rgba(255, 255, 255, 0.8);
  }

  .el-popper[x-placement^="bottom"] .popper__arrow::after {
    border-bottom-color: rgba(255, 255, 255, 0.8) !important;
  }

  .el-popover__title {
    text-align: center;
    color: #2b2c30;
  }
</style>
