<template>
  <div class="nav">
    <el-collapse class="left" id="left" v-model="activeName">
      <el-collapse-item
        :name="ix"
        :id="'box' + ix"
        :class="{ box: true, noMargin: ix === 0 }"
        v-for="(it, ix) in tabData"
        :key="ix"
      >
        <template slot="title">
          <span
            style="font-weight:bold;font-size:14px;color:#fff;margin-left:20px"
          ></span>
          <i
            :class="{
              'header-icon': true,
              'el-icon-open': ix === 0,
              'el-icon-info': ix === 1,
              'el-icon-data-line': ix === 2,
              'el-icon-tickets': ix === 3,
              'el-icon-tableware': ix === 4,
              'el-icon-view': ix === 5
            }"
          ></i>
          <span style="display: inline-block;width: 5px"></span>
          {{ it.content }}
        </template>
        <div class="content_l">
          <div class="form_box">
            <el-form
              class="baseForm"
              :model="formStatus"
              label-width="110px"
              v-if="it.content === '服务区状态'"
            >
              <el-col :span="24">
                <el-form-item label="服务区状态：">
                  <el-radio-group v-model="formStatus.service">
                    <el-radio label="正常"></el-radio>
                    <el-radio label="关闭"></el-radio>
                    <el-radio label="能进不能出"></el-radio>
                    <el-radio label="能出不能进"></el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="加油站状态：">
                  <el-checkbox-group
                    v-model="formStatus.gas"
                    @change="gasType(formStatus.gas)"
                  >
                    <el-checkbox
                      :value="1"
                      label="正常"
                      :disabled="closed"
                    ></el-checkbox>
                    <el-checkbox
                      :value="2"
                      label="停业"
                      :disabled="normal"
                    ></el-checkbox>
                    <el-checkbox
                      :value="3"
                      label="汽油"
                      class="checkbox_select"
                      :disabled="closed"
                    >
                      <template slot="default">
                        汽油
                        <el-select
                          v-model="formStatus.gasoline"
                          :class="{ disabled: gasolineDisabled }"
                          :disabled="gasolineDisabled"
                          multiple
                        >
                          <el-option :value="1" :label="92"></el-option>
                          <el-option :value="2" :label="95"></el-option>
                          <el-option :value="3" :label="98"></el-option>
                        </el-select>
                        告罄
                      </template>
                    </el-checkbox>
                    <el-checkbox
                      :value="4"
                      label="柴油告罄"
                      :disabled="closed"
                    ></el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="自营商店：">
                  <el-radio-group v-model="formStatus.store">
                    <el-radio label="正常"></el-radio>
                    <el-radio label="停业"></el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
            </el-form>
            <div
              style="width: 100%;height: 100%"
              v-if="it.content === '基础信息'"
            >
              <service-floor-plan
                :imgSize="imgSize"
                :location="location"
              ></service-floor-plan>
              <el-tabs
                class="tabs"
                v-model="activeNameTabs"
                @tab-click="tabsClick"
                type="card"
              >
                <el-tab-pane label="A区" name="first">
                  <el-form
                    class="baseForm"
                    :model="formBasis"
                    label-width="125px"
                    style="width: 62%;float:left"
                  >
                    <el-col :span="12" v-for="item in baseData">
                      <el-form-item :label="item.label + '：'">
                        {{ item.value }}
                      </el-form-item>
                    </el-col>
                  </el-form>
                  <div class="content_r">
                    <div class="img_box">
                      <img-common :img-data="it.imgData"></img-common>
                    </div>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="B区" name="second">
                  <el-form
                    class="baseForm"
                    :model="formBasis"
                    label-width="125px"
                    style="width: 62%;float:left"
                  >
                    <el-col :span="12" v-for="item in baseData">
                      <el-form-item :label="item.label + '：'">
                        {{ item.value }}
                      </el-form-item>
                    </el-col>
                  </el-form>
                  <div class="content_r">
                    <div class="img_box">
                      <img-common
                        v-for="i in 4"
                        :img-data="it.imgData"
                      ></img-common>
                    </div>
                  </div>
                </el-tab-pane>
                <!--  <el-tab-pane label="南区" name="third">
                      <el-form
                              class="baseForm"
                              :model="formBasis"
                              label-width="125px"
                              style="width: 62%;float:left">
                          <el-col :span="12" v-for="item in baseData">
                              <el-form-item :label="item.label + '：'">
                                  {{ item.value }}
                              </el-form-item>
                          </el-col>
                      </el-form>
                      <div class="content_r">
                          <div class="img_box">
                              <img-common
                                      v-for="i in 4"
                                      :img-data="it.imgData"
                              ></img-common>
                          </div>
                      </div>
                  </el-tab-pane>
                  <el-tab-pane label="北区" name="fourth">
                      <el-form
                              class="baseForm"
                              :model="formBasis"
                              label-width="125px"
                              style="width: 62%;float:left">
                          <el-col :span="12" v-for="item in baseData">
                              <el-form-item :label="item.label + '：'">
                                  {{ item.value }}
                              </el-form-item>
                          </el-col>
                      </el-form>
                      <div class="content_r">
                          <div class="img_box">
                              <img-common v-for="i in 4"
                                          :img-data="it.imgData"></img-common>
                          </div>
                      </div>
                  </el-tab-pane>-->
              </el-tabs>
            </div>
            <div class="businessInformation" v-if="it.content === '经营信息'">
              <div style="width: 40%;height: 400px;" id="fff"></div>
              <div style="width: 29.5%;height: 400px;" id="sss"></div>
              <div style="width: 29.5%;height: 400px;" id="ttt"></div>
            </div>
            <div v-if="it.content === '合同信息'">
              <my-table
                :isDetails="false"
                height="500px"
                :isPagination="true"
                :multiple="true"
                :columns="columns"
                :data="tableData"
              ></my-table>
            </div>
            <el-form
              class="common"
              :model="formSpecialty"
              label-width="110px"
              v-if="it.content === '特产信息'"
            >
              <el-col :span="12">
                <el-form-item label="名称：">
                  <el-input v-model="formSpecialty.name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="类型：">
                  <el-input v-model="formSpecialty.type"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="联系人员：">
                  <el-input v-model="formSpecialty.contactPerson"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="手机号码：">
                  <el-input v-model="formSpecialty.mobile"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="电子邮箱：">
                  <el-input v-model="formSpecialty.Email"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="地址：">
                  <el-input v-model="formSpecialty.address"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="描述：">
                  <el-input
                    type="textarea"
                    resize="none"
                    :rows="6"
                    show-word-limit
                    :maxlength="500"
                    v-model="formSpecialty.remark"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
            </el-form>
            <el-form
              class="common"
              :model="formFeatures"
              label-width="110px"
              v-if="it.content === '特色信息'"
            >
              <el-col :span="12">
                <el-form-item label="名称：">
                  <el-input v-model="formFeatures.name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="类型：">
                  <el-input v-model="formFeatures.type"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="联系人员：">
                  <el-input v-model="formFeatures.contactPerson"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="手机号码：">
                  <el-input v-model="formFeatures.mobile"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="电子邮箱：">
                  <el-input v-model="formFeatures.Email"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="地址：">
                  <el-input v-model="formFeatures.address"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="描述：">
                  <el-input
                    type="textarea"
                    resize="none"
                    :rows="6"
                    show-word-limit
                    :maxlength="500"
                    v-model="formFeatures.remark"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
            </el-form>
          </div>
          <div class="LDB" v-if="it.content === '服务区状态'">
            <div class="title">综合指数:</div>
            <div id="LD"></div>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
    <div class="right">
      <div class="navBar">
        <p @click="collapseAll">
          {{ activeName.length !== 0 ? "全部收起" : "全部展开" }}
        </p>
        <p
          v-for="(it, ix) in tabData"
          @click="goto(ix)"
          :class="{ active: isActive === ix }"
          :key="ix"
        >
          <i :class="tabData_icon[ix]"></i> {{ it.content }}
        </p>
      </div>
    </div>
    <contract-information ref="contract"></contract-information>
  </div>
</template>

<script>
import ImgCommon from "./imgCommon";
import ServiceFloorPlan from "../../serviceArea/children/serviceFloorPlan";
import MyTable from "../../../components/common/myTable";
import ContractInformation from "./contractInformation";

export default {
  name: "navCommon",
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
  components: { ContractInformation, MyTable, ServiceFloorPlan, ImgCommon },
  data() {
    return {
      columns: [
        { prop: "a", label: "商家" },
        { prop: "b", label: "面积" },
        { prop: "c", label: "租金" },
        { prop: "d", label: "合同签署日期" },
        { prop: "e", label: "合同生效日期" },
        { prop: "f", label: "合同结束日期" }
        // { prop: "g", label: "描述" }
      ],
      tableData: [
        {
          a: "KFC",
          b: "300平方",
          c: "600万",
          d: "2018/2/1",
          e: "2018/4/1",
          f: "2023/3/1",
          g: "XXXXXXXXXX"
        },
        {
          a: "猫屎咖啡",
          b: "180平方",
          c: "200万",
          d: "2017/4/1",
          e: "2017/7/1",
          f: "2022/6/1",
          g: "XXXXXXXXXX"
        },
        {
          a: "一品荆楚",
          b: "100平方",
          c: "180万",
          d: "2017/8/23",
          e: "2017/9/23",
          f: "2022/9/23",
          g: "XXXXXXXXXX"
        },
        {
          a: "交投中百",
          b: "63平方",
          c: "100万",
          d: "2017/8/12",
          e: "2018/11/12",
          f: "2023/10/1",
          g: "XXXXXXXXXX"
        }
      ],
      activeNameTabs: "first",
      closed: false,
      normal: false,
      gasolineDisabled: false,
      activeName: [0, 1, 2, 3, 4, 5],
      isActive: 0,
      tabData: [],
      tabData_icon: [
        "el-icon-open",
        "el-icon-info",
        "el-icon-data-line",
        "el-icon-tickets",
        "el-icon-tableware",
        "el-icon-view"
      ],
      navData: [],
      formBasis: {},
      formStatus: {
        service: "",
        gas: ["汽油"],
        gasoline: [1, 2, 3],
        store: ""
      },
      //特色
      formFeatures: {
        name: "",
        type: "",
        remark: "",
        contactPerson: "",
        mobile: "",
        Email: "",
        address: ""
      },
      //特产
      formSpecialty: {
        name: "",
        type: "",
        remark: "",
        contactPerson: "",
        mobile: "",
        Email: "",
        address: ""
      },
      baseData: [
        { label: "服务区", value: "蔡甸服务区-A区" },
        { label: "类别", value: "一类服务区" },
        { label: "所属公司", value: "孝感分公司" },
        { label: "开通状况", value: "是" },
        { label: "开通时间", value: "2002.11" },
        { label: "所在高速", value: "京港澳高速" },
        { label: "高速编号", value: "G4" },
        { label: "高速桩号", value: "K1165" },
        { label: "占地面积", value: "131(亩)" },
        { label: "建筑面积", value: "87333.3(㎡)" },
        { label: "经营面积", value: "15347.26(㎡)" },
        { label: "绿化面积", value: "5689.64(㎡)" },
        { label: "日均车流量", value: "33960.7(辆)" },
        { label: "日高峰期车流量", value: "3500(辆)" },
        { label: "厕所等级", value: "五星" },
        { label: "厕所改造时间", value: "2018.09" },
        { label: "男女蹲位数量", value: "男:11个，女:12个" },
        { label: "小便器阀数量", value: "11(个)" },
        { label: "大车位个数", value: "112(个)" },
        { label: "小车位个数", value: "150(个)" },
        { label: "保安人数", value: "18(位)" },
        { label: "保洁人数", value: "35(位)" },
        { label: "加油站开通", value: "是" },
        { label: "加油机数量", value: "14(个)" },
        { label: "充电桩数量", value: "8(个)" },
        { label: "充电桩分布", value: "双侧" },
        { label: "所属地域", value: "孝感市孝南区" },
        { label: "路段管理单位", value: "京珠运营公司" },
        { label: "服务区负责人", value: "王永红" },
        { label: "联系方式", value: "18071019995" },
        { label: "停车场面积", value: "90757.3(㎡)" },
        { label: "加油站管理单位", value: "中石化" }
      ]
    };
  },
  methods: {
    selectionChange(v) {
      this.$refs["contract"].openDialog(v);
    },
    /***全部收起来 */
    collapseAll() {
      if (this.activeName.length !== 0) {
        this.activeName = [];
      } else {
        this.activeName = [0, 1, 2, 3, 4, 5];
      }
    },
    tabsClick(e) {
      let a = "蔡甸服务区-" + e.label;
      this.baseData[0].value = a;
    },
    gasType(v) {
      if (v.indexOf("停业") !== -1) {
        this.gasolineDisabled = true;
        this.closed = true;
      } else {
        this.gasolineDisabled = false;
        this.closed = false;
      }

      this.normal = v.indexOf("正常") !== -1;
    },
    /**
     * @param data
     * */
    refresh(data) {
      this.tabData = data;
      this.isActive = 0;
      this.$nextTick(_ => {
        document.querySelector("#box0").scrollIntoView(true);
      });
    },
    /**
     * @param v 所点击导航的下标
     * */
    goto(v) {
      let id = "#box" + v;
      document.querySelector(id).scrollIntoView(true);
    },
    /**
     * 监听滚动事件
     * */
    scrollChange() {
      let left = document.getElementById("left");
      left.addEventListener("scroll", _ => {
        this.navData = [];
        this.tabData.forEach((item, index) => {
          this.navData.push({
            index: index,
            height: document.getElementById("box" + index).offsetTop
          });
        });
        this.navBar(left.scrollTop);
      });
    },
    /**
     * 滚动后导航选中
     * */
    navBar(v) {
      for (let i = 0; i < this.navData.length; i++) {
        if (v < this.navData[i].height || v == this.navData[i].height) {
          this.isActive = i;
          break;
        }
      }
    },
    async initECharts() {
      await new Promise(resolve => {
        setInterval(() => {
          resolve();
        }, 500);
      });

      let ECharts = this.$echarts.init(document.getElementById("LD"));
      let fff = this.$echarts.init(document.getElementById("fff"));
      let sss = this.$echarts.init(document.getElementById("sss"));
      let ttt = this.$echarts.init(document.getElementById("ttt"));
      let option = {
        radar: {
          name: {
            textStyle: {
              color: "#fff",
              backgroundColor: "#999",
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            { name: "水", max: 6500 },
            { name: "电", max: 16000 },
            { name: "提成", max: 30000 },
            { name: "服务费", max: 38000 },
            { name: "租金", max: 52000 },
            { name: "气", max: 25000 }
          ]
        },
        series: [
          {
            name: "XX",
            type: "radar",
            data: [
              {
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: "XX"
              }
            ]
          }
        ]
      };
      let option_f = {
        title: {
          text: ""
        },
        tooltip: {
          trigger: "axis",
          formatter: "{b}月:营收{c}"
        },
        grid: {
          top: "20%",
          right: "40",
          left: "60",
          bottom: "40" //图表尺寸大小
        },
        xAxis: [
          {
            name: "月",
            nameTextStyle: {
              color: "#000"
            },
            type: "category",
            color: "#59588D",
            data: [
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12"
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
          }
        ],
        yAxis: [
          {
            name: "元",
            nameTextStyle: {
              color: "#000"
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
          }
        ],
        series: [
          {
            type: "bar",
            data: [
              79.28,
              127.65,
              41.37,
              45.262,
              48.739,
              42.08,
              56.318,
              64.77,
              49.74,
              65.7,
              42.95,
              43.749
            ],
            barWidth: "16px",
            itemStyle: {
              normal: {
                color: "#38A0FF",
                barBorderRadius: [30, 30, 30, 30]
              }
            }
          }
        ]
      };
      let option_s = {
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
          trigger: "item",
          formatter: "{b}: {c}万元 ({d}%)"
        },
        series: [
          {
            type: "pie",
            center: ["48%", "50%"],
            radius: ["30%", "38%"],
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
              let title = ["特产", "小吃", "餐饮", "便利店", "加油"];
              let datas = [1.45, 2.93, 3.15, 4, 5];
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
      };
      let option_t = {
        title: {
          text: ""
        },
        tooltip: {
          trigger: "item",
          formatter: "{b}: {c}万元 ({d}%)"
        },

        legend: {
          orient: "horizontal",
          bottom: 10
        },

        series: [
          {
            type: "pie",
            minAngle: 5, //最小的扇区角度（0 ~ 360），用于防止某个值过小导致扇区太小影响交互
            avoidLabelOverlap: true, //是否启用防止标签重叠策略
            center: ["48%", "50%"],
            radius: ["30%", "38%"],
            clockwise: true,
            hoverOffset: 20,
            itemStyle: {
              normal: {
                color: function(params) {
                  let colorList = [
                    "#76c15c",
                    "#15b3e2",
                    "#2e65fd",
                    "#1fcaa8",
                    "#ee6565",
                    "#fec02a"
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
                length2: 10,
                lineStyle: {
                  width: 1
                }
              }
            },
            data: [
              {
                name: "水费",
                value: 1.45
              },
              {
                name: "电费",
                value: 2.93
              },
              {
                name: "房租",
                value: 3.15
              },
              {
                name: "提成",
                value: 2
              }
            ]
          }
        ]
      };
      ECharts.setOption(option);
      fff.setOption(option_f);
      sss.setOption(option_s);
      ttt.setOption(option_t);
    }
  },
  mounted() {
    this.scrollChange();
    this.initECharts();
  }
};
</script>

<style scoped lang="less">
.nav {
  width: 98%;
  height: 100%;
  margin: auto;

  .left {
    float: left;
    width: calc(98% - 150px);
    height: 100%;
    overflow-y: scroll;
    scroll-behavior: smooth;

    .box {
      width: 100%;
      margin: 1em 0;
      /*background: #d4d4d4;*/
      text-align: center;
    }
  }

  .left::-webkit-scrollbar {
    display: none;
  }

  .left /deep/ .el-collapse-item > .el-collapse-item__wrap {
    border-radius: 10px;
  }

  .left
    /deep/
    .el-collapse-item
    > .el-collapse-item__wrap
    > .el-collapse-item__content {
    font-size: 14px;

    .content_l {
      min-height: 300px;
      width: 100%;
      float: left;
      position: relative;

      .form_box {
        overflow: hidden;
        margin: 10px 20px;

        .checkbox_select /deep/ .el-checkbox__label > .el-select > .el-input {
          min-width: 50px !important;
          border: none;
        }

        .checkbox_select /deep/ .el-checkbox__label > .el-select {
          /*max-width: 120px !important;*/
          border: none;
        }

        .checkbox_select
          /deep/
          .el-checkbox__label
          > .el-select
          > .el-select__tags {
          /*max-width: 120px !important;*/
        }

        .checkbox_select
          /deep/
          .el-checkbox__label
          > .el-select
          > .el-input
          > .el-input__inner {
          border: none;
          border-bottom: 1px solid #e5e5e5;
        }

        .checkbox_select
          /deep/
          .el-checkbox__label
          > .el-select
          > .is-disabled
          > .el-input__inner {
          background: white;
          border: none;
          padding-right: 0;
          max-width: 120px !important;
        }

        .checkbox_select /deep/ .el-checkbox__label > .disabled {
          max-width: 120px !important;
          border: none;
        }

        .checkbox_select
          /deep/
          .el-checkbox__label
          > .disabled
          > .el-select__tags {
          max-width: 120px !important;
        }

        .checkbox_select
          /deep/
          .el-checkbox__label
          > .disabled
          > .is-disabled
          > .el-input__suffix {
          display: none;
        }

        .content_r {
          min-height: 500px;
          width: 38%;
          float: right;

          .img_box {
            overflow: hidden;
            margin: 10px;
          }
        }

        .tabs
          /deep/
          .el-tabs__header
          > .el-tabs__nav-wrap
          > .el-tabs__nav-scroll
          > .el-tabs__nav
          > .is-active {
          background: #1d7dca;
          color: white;
          font-size: 18px;
          font-weight: 700;
        }

        .tabs
          /deep/
          .el-tabs__header
          > .el-tabs__nav-wrap
          > .el-tabs__nav-scroll
          > .el-tabs__nav
          > .el-tabs__item {
          font-size: 18px;
          font-weight: 700;
        }

        .businessInformation {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: space-around;
        }
      }

      .LDB {
        position: absolute;
        right: 10px;
        top: 10px;

        .title {
          position: absolute;
          left: -50px;
          top: 0;
          font-weight: 700;
          font-size: 20px;
        }

        #LD {
          width: 290px;
          height: 290px;
        }
      }

      .form_box > .baseForm /deep/ .el-col > .el-form-item {
        height: 30px;
        text-align: left;
      }

      .form_box
        > .baseForm
        /deep/
        .el-col
        > .el-form-item
        > .el-form-item__label {
        font-size: 12px;
        line-height: 30px;
      }

      .form_box
        > .baseForm
        /deep/
        .el-col
        > .el-form-item
        > .el-form-item__content {
        height: 30px;
        line-height: 30px;
      }

      .form_box
        > .baseForm
        /deep/
        .el-col
        > .el-form-item
        > .el-form-item__content
        > .el-input
        > .el-input__inner {
        height: 30px;
        line-height: 30px;
        border: none;
      }
    }
  }

  .left /deep/ .el-collapse-item > div > .el-collapse-item__header {
    background: #1d7dca;
    border-radius: 10px;
    font-size: 16px;
    height: 48px;
    line-height: 48px;
    margin: 1em 0;
    width: 100%;
    // margin: auto;
    color: white;
    border: none;
  }

  .left /deep/ .el-collapse-item > .el-collapse-item__wrap {
    border: none;
  }

  .right {
    float: right;
    width: 150px;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;

    .navBar {
      width: 100%;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
      background: #fff;
      z-index: 100;
      top: 10%;
      right: 1%;
      border-radius: 10px;

      .active {
        // color: #409eff;
        // border-left: 5px solid #409eff;
        background: #1d7dca;
        margin-left: -20px;
        margin-right: 8%;
        text-align: left;
        color: white;
        padding-left: 40px;
        box-shadow: 10px 5px 10px 0 rgba(0, 0, 0, 0.3);
      }
    }

    .navBar > p {
      // cursor: pointer;
      font-size: 16px;
      padding: 10% 0;
      margin: 5% 0;
      text-align: center;
      border-radius: 10px;
      cursor: pointer;
      transition: linear 0.4s;
    }
  }
}

.nav /deep/ .el-collapse {
  /*box-shadow: 0 0 1px 0 rgba(0, 0, 0, .5);*/
}

.nav /deep/ .el-collapse > .noMargin > div > .el-collapse-item__header {
  margin-top: 0 !important;
}

.nav /deep/ .el-collapse > .noMargin {
  margin-top: 0 !important;
}
</style>
