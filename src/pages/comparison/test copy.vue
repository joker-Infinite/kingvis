<template>
  <div class="container">
    <div class="left">
      <div style="width: 80%;height: 100%;overflow-y:scroll">
        <compared-test ref="comtest"></compared-test>
      </div>
      <div style="width:10%;height: 100%;background: #1D7DCA">
        <div class="customizeBtn">
          <!-- <el-button @click="customizeTemplate"><i class="el-icon-document-add"></i> 自定义模板 -->
          <!-- </el-button> -->
        </div>
        <div class="navBox">
          <div>
            <span
              :class="{ navItem: true, active: navIndex === i }"
              @click="navClick(i)"
              v-for="(item, i) in tableDatad"
              :key="i"
            >
              {{ item[0] }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div
      class="comparisonList"
      style="text-align:center; width: 20%;height: 100%; position: relative"
    >
      <div class="right">
        <!-- <div class="box" v-for="(it, ix) in columns"  :key="ix">
                    <div class="title">
                        <el-select v-model="it.value">
                            <el-option
                                    v-for="(item, index) in serviceData"
                                    :label="item.label"
                                    :value="item.value"
                                    :key="index"
                            ></el-option>
                        </el-select>
                    </div>
                    <div class="selectCon">
                        <div class="label">
                            <span>时间：</span>
                            <el-date-picker
                                    v-model="it.time"
                                    type="monthrange"
                                    align="right"
                                    value-format="yyyy-MM-dd"
                                    format="yyyy-MM-dd"
                                    unlink-panels
                                    range-separator="至"
                                    start-placeholder="开始月份"
                                    end-placeholder="结束月份"
                                    :picker-options="pickerOptions"
                            >
                            </el-date-picker>
                        </div>
                        <div class="label">
                            <span>服务区：</span>
                            <el-select v-model="it.service">
                                <el-option
                                        v-for="(it, indexs) in serviceData"
                                        :label="it.label"
                                        :value="it.value"
                                        :key="indexs"
                                ></el-option>
                            </el-select>
                        </div>
                        <div class="label">
                            <span>业务：</span>
                            <el-select v-model="it.business">
                                <el-option
                                        v-for="(it, ix) in business"
                                        :label="it.label"
                                        :value="it.value"
                                        :key="ix"
                                ></el-option>
                            </el-select>
                        </div>
                        <div class="label">
                            <span>业态：</span>
                            <el-select v-model="it.format">
                                <el-option
                                        v-for="(itx, ix) in business"
                                        :label="itx.label"
                                        :value="itx.value"
                                        :key="ix"
                                ></el-option>
                            </el-select>
                        </div>
                    </div>
                    <div class="btnGroup small">
                        <i class="el-icon-close" @click="del(it,ix)"></i>
                    </div>
                </div> -->
        <div>
          <table
            style="margin-left:10px; border-radius: 5px;"
            cellspacing="0"
            cellpadding="0"
            width="100%"
          >
            <tr style="background:#1D7DCA;height:30px">
              <th>服务区名称</th>
              <th>操作</th>
            </tr>
            <tr
              :style="{ height: it.label ? '30px' : '' }"
              v-for="(it, ix) in columns"
              :key="ix"
            >
              <td v-if="it.label">{{ it.label }}</td>
              <td
                style="cursor:pointer"
                @click="detail(ix, it)"
                v-if="it.label"
              >
                删除
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="box addService">
        <div class="selectCon">
          <div class="label">
            <span>时间：</span>
            <el-date-picker
              v-model="selectData.time"
              type="monthrange"
              align="right"
              value-format="yyyy-MM-dd"
              format="yyyy-MM-dd"
              unlink-panels
              range-separator="至"
              start-placeholder="开始月份"
              end-placeholder="结束月份"
              :picker-options="pickerOptions"
            >
            </el-date-picker>
          </div>
          <div class="label">
            <span>服务区：</span>
            <el-select v-model="selectData.service">
              <el-option
                v-for="(it, ix) in serviceData"
                :label="it.label"
                :value="it.value"
                :key="ix"
              ></el-option>
            </el-select>
          </div>
          <!-- <div class="label">
                        <span>业务：</span>
                        <el-select v-model="selectData.business">
                            <el-option
                                    v-for="(it, ix) in business"
                                    :label="it.label"
                                    :value="it.value"
                                    :key="ix"
                            ></el-option>
                        </el-select>
                    </div>
                    <div class="label">
                        <span>业态：</span>
                        <el-select v-model="selectData.format">
                            <el-option
                                    v-for="(it, ix) in business"
                                    :label="it.label"
                                    :value="it.value"
                                    :key="ix"
                            ></el-option>
                        </el-select>
                    </div> -->
        </div>
        <div class="btnGroup">
          <el-button
            size="mini"
            class="el-icon-check"
            type="primary"
            @click="newAdd"
          ></el-button>
          <el-button
            size="mini"
            class="el-icon-refresh-right"
            type="info"
            @click="reset"
          >
          </el-button>
        </div>
      </div>
    </div>
    <customize-template
      ref="customizeTemplate"
      @templateEmit="templateEmit"
    ></customize-template>
  </div>
</template>

<script>
import CustomizeTemplate from "./Dialog/customizeTemplate";
import ComparedTest from "./ComparedTest";
export default {
  name: "test",
  components: { CustomizeTemplate, ComparedTest },
  data() {
    return {
      indexx: 0,
      tableDatad: [["基础信息"], ["经营对比"], ["业态对比"], ["品牌分布"]],
      prevent: false,
      navIndex: 0,
      tabIndex: 1,
      service: "",
      isIndeterminate: false,
      checkAll: false,
      tabsData: [
        { name: "我的模板一", value: 1 },
        { name: "我的模板二", value: 2 },
        { name: "我的模板三", value: 3 }
      ],
      checked: [],
      checkData: [
        { label: "利润", value: "profit" },
        { label: "利率", value: "interestRate" },
        { label: "收入", value: "income" },
        { label: "人流量", value: "humanTraffic" }
      ],
      columns: [{ code: "基础信息", value: "profit" }],
      columns_1: [
        { code: "parameter", label: "参数/服务区", width: 200 },
        {
          code: "serviceArea_1",
          label: "sss",
          value: 1,
          time: "",
          service: "",
          business: "",
          format: ""
        },
        {
          code: "serviceArea_2",
          label: "mmm",
          value: 2,
          time: "",
          service: "",
          business: "",
          format: ""
        },
        {
          code: "serviceArea_3",
          label: "ttt",
          value: 3,
          time: "",
          service: "",
          business: "",
          format: ""
        }
      ],
      columns_2: [
        { code: "parameter", label: "参数/服务区", width: 200 },
        {
          code: "serviceArea_1",
          label: "rrr",
          value: 1,
          time: "",
          service: "",
          business: "",
          format: ""
        },
        {
          code: "serviceArea_2",
          label: "uuu",
          value: 2,
          time: "",
          service: "",
          business: "",
          format: ""
        },
        {
          code: "serviceArea_3",
          label: "iii",
          value: 3,
          time: "",
          service: "",
          business: "",
          format: ""
        }
      ],
      columns_3: [
        { code: "parameter", label: "参数/服务区", width: 200 },
        {
          code: "serviceArea_1",
          label: "kkk",
          value: 1,
          time: "",
          service: "",
          business: "",
          format: ""
        },
        {
          code: "serviceArea_2",
          label: "lll",
          value: 2,
          time: "",
          service: "",
          business: "",
          format: ""
        },
        {
          code: "serviceArea_3",
          label: "aaa",
          value: 3,
          time: "",
          service: "",
          business: "",
          format: ""
        }
      ],
      columns_4: [
        { code: "parameter", label: "参数/服务区", width: 200 },
        {
          code: "serviceArea_1",
          label: "bbb",
          value: 1,
          time: "",
          service: "",
          business: "",
          format: ""
        },
        {
          code: "serviceArea_2",
          label: "ddd",
          value: 2,
          time: "",
          service: "",
          business: "",
          format: ""
        },
        {
          code: "serviceArea_3",
          label: "ccc",
          value: 3,
          time: "",
          service: "",
          business: "",
          format: ""
        }
      ],
      tableData: [
        {
          parameter: "利润",
          serviceArea_1: "50万",
          serviceArea_2: "10万",
          serviceArea_3: "15万",
          serviceArea_4: "15万"
        },
        {
          parameter: "利率",
          serviceArea_1: "5.8",
          serviceArea_2: "3.9",
          serviceArea_3: "4.2",
          serviceArea_4: "4.2"
        },
        {
          parameter: "收入",
          serviceArea_1: "3.3",
          serviceArea_2: "9.3",
          serviceArea_3: "8.5",
          serviceArea_4: "8.5"
        },
        {
          parameter: "人流量",
          serviceArea_1: "5万",
          serviceArea_2: "1万",
          serviceArea_3: "5000",
          serviceArea_4: "5000"
        }
      ],
      tableData_: [],
      selectData: {
        service: "",
        business: "",
        format: "",
        time: ""
      },
      serviceData: [
        {
          label: "中馆驿",
          value: 1,
          serviceId: "451d2s"
        },
        {
          label: "小池",
          value: 2,
          serviceId: "45we2s"
        },
        {
          label: "木子店",
          value: 3,
          serviceId: "45rw3s"
        },
        {
          label: "黄梅",
          value: 4,
          serviceId: "45r22s"
        }
      ],
      business: [
        {
          label: "加油站",
          value: 1,
          businessId: "4erw2s"
        },
        {
          label: "自营商店",
          value: 2,
          businessId: "4er96s"
        },
        {
          label: "车辆数",
          value: 3,
          businessId: "49822s"
        }
      ],
      pickerOptions: {
        shortcuts: [
          {
            text: "本月",
            onClick(picker) {
              picker.$emit("pick", [new Date(), new Date()]);
            }
          },
          {
            text: "今年至今",
            onClick(picker) {
              const end = new Date();
              const start = new Date(new Date().getFullYear(), 0);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近六个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setMonth(start.getMonth() - 6);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      }
    };
  },
  methods: {
    detail(index, item) {
      this.$refs.comtest.details(item.service);
      this.columns.splice(index, 1);
      this.tableDatad.forEach((element, i) => {
        this.tableDatad[i].splice(index, 1);
      });
    },
    templateEmit(v) {
      this.tableData_ = v;
    },
    delTabs(v) {
      this.prevent = true;
      let data = JSON.parse(JSON.stringify(this.tabsData));
      this.tabsData = [];
      data.forEach((it, ix) => {
        if (it.value !== v) {
          this.tabsData.push(it);
        }
      });
      this.tabIndex = this.tabsData[0].value;
    },
    addTabs() {
      this.tabsData.push({
        name: "我的模板四",
        value: 4
      });
    },
    customizeTemplate() {
      this.$refs["customizeTemplate"].openDialog();
    },
    navClick(i) {
      document.querySelector(".row20").scrollIntoView(true);
      this.navIndex = i;
    },
    tabClick(i) {
      if (this.prevent) {
        this.tabIndex = this.tabsData[0].value;
        this.columns = this["columns_" + this.tabsData[0].value];
      }
      if (!this.prevent) {
        this.tabIndex = i;
        this.columns = this["columns_" + i];
      }
      this.prevent = false;
    },
    del(item, v) {
      let newData = [];
      let data = JSON.parse(JSON.stringify(this.columns));
      this.columns = [];
      data.forEach((it, ix) => {
        if (ix !== v) {
          newData.push(it);
        }
      });
      this.columns = newData;
      this["columns_" + this.tabIndex] = newData;
    },
    newAdd() {
      if (this.tableDatad[0].length >= 5) {
        this.$message({
          message: "最多添加4条哦",
          type: "warning"
        });
        return;
      }
      if (this.selectData.service == "") {
        this.$message({
          message: "服务区不能为空哦",
          type: "warning"
        });
        return;
      }
      this.$refs.comtest.add(this.selectData.service);
      let obj = {
        code: "serviceArea_5",
        label: "XT服务区",
        value: "",
        time: this.selectData.time,
        service: this.selectData.service,
        business: this.selectData.business,
        format: this.selectData.format
      };
      this.serviceData.forEach((it, ix) => {
        if (ix === this.selectData.service - 1) {
          obj.label = it.label;
          obj.value = ix + 1;
        }
      });
      this.business.forEach((it, ix) => {
        if (ix === this.selectData.business - 1) {
          obj.business = this.selectData.business;
        }
      });
      this.indexx++;
      this.columns.push(obj);
      let obj_ = ["2万", "3.3", "6.3", "10万"];
      this.tableData.forEach((it, ix) => {
        it.serviceArea_5 = obj_[ix];
      });

      this.reset();
    },
    reset() {
      this.selectData = {
        service: "",
        business: "",
        format: "",
        time: ""
      };
    }
  },
  mounted() {
    // this.columns = this.columns_1;
    this.checkAll = true;
    this.checkData.forEach(i => {
      this.checked.push(i.label);
    });
    if (this.checkAll) {
      this.tableData_ = this.tableData;
    }
    if (!this.checkAll) {
      this.tableData_ = [];
    }
  }
};
</script>

<style scoped lang="less">
.container {
  width: 105%;
  height: 930px;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: nowrap;
  justify-content: space-between;
  float: right;

  .left {
    width: 80%;
    height: 100%;
    display: flex;

    .head_tabs {
      width: 100%;
      overflow: hidden;

      .tabs {
        width: 96%;
        margin: 0 2%;
        height: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;

        .tabs_item {
          margin: 0 10px;
          width: 200px;
          height: 70%;
          text-align: center;
          display: flex;
          flex-wrap: nowrap;
          flex-direction: column;
          justify-content: space-around;
          cursor: pointer;
          position: relative;
          border-radius: 5px;
          background: #fff;
          box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

          .del {
            position: absolute;
            width: 20px;
            height: 20px;
            display: none;
            line-height: 20px;
            text-align: center;
            top: 2px;
            right: 2px;
            color: #fff;
          }
        }

        .tabsAdd {
          margin-left: 10px;
          width: 25px;
          height: 25px;
          font-size: 25px;
          line-height: 25px;
          text-align: center;
          cursor: pointer;
        }

        .tabsAdd:hover {
          color: #1d7dca;
        }

        .borderBottom {
          background: #1d7dca;
          color: #fff;
        }

        .tabs_item:hover {
          background: #1d7dca;
          color: #fff;
        }

        .tabs_item:hover .del {
          display: block;
        }
      }
    }

    .navBox {
      width: 100%;
      height: 90%;
      padding-top: 10px;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      overflow: auto;
      justify-content: space-around;

      .navItem {
        display: inline-block;
        width: 80%;
        margin: 0 10%;
        line-height: 2;
        text-align: center;
        cursor: pointer;
      }

      .active {
        color: white;
      }
    }

    .customizeBtn {
      width: 100%;
      height: 5%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }

    .customizeBtn /deep/ .el-button {
      height: 30px;
      width: 80%;
      margin: 0 auto;
      font-size: 16px;
      line-height: 30px;
      padding: 0 5px;
      border-radius: 0;
      background: none;
      border: none;
      color: #000;
    }

    .customizeBtn /deep/ .el-button:hover {
      color: white;
      background: none;
    }

    .head {
      display: flex;
      width: 95%;
      padding: 0 2.5%;

      .selected {
        width: 70%;
        height: 100px;
        background: #efedf2;
        overflow: scroll;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: flex-start;

        .checkAll {
          width: 100% !important;
          height: 1px !important;
        }
      }

      .selected /deep/ .el-checkbox {
        width: 150px;
      }

      .selected::-webkit-scrollbar {
        display: none;
      }

      .time {
      }
    }
  }

  .right {
    width: 100%;
    height: 78%;
    overflow-y: scroll;
    position: relative;

    .box {
      width: 94%;
      height: 215px;
      background: #fff;
      position: relative;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      margin: 5px auto;
      overflow: hidden;

      .selectCon {
        width: 90%;
        margin: auto;
        padding: 5px 0;
        font-size: 12px;

        .label {
          width: 100%;
          line-height: 40px;
        }

        .label > span {
          width: 20%;
          display: inline-block;
        }

        .label /deep/ .el-select {
          width: 75%;
        }

        .label /deep/ .el-select > .el-input {
          width: 100%;
        }

        .label /deep/ .el-select > .el-input > .el-input__inner {
          width: 100%;
          height: 30px;
          line-height: 30px;
        }

        .label /deep/ .el-select > .el-input > .el-input__suffix {
          height: 30px;
        }

        .label
          /deep/
          .el-select
          > .el-input
          > .el-input__suffix
          > .el-input__suffix-inner
          > .el-select__caret {
          height: 30px;
          line-height: 30px;
        }

        .label /deep/ .el-date-editor {
          width: 75%;
          height: 30px;
          line-height: 30px;
        }

        .label /deep/ .el-date-editor > .el-input__icon {
          height: 30px;
          line-height: 30px;
        }

        .label /deep/ .el-date-editor > .el-range-input {
          height: 25px;
          line-height: 25px;
        }

        .label /deep/ .el-date-editor > .el-range-separator {
          height: 30px;
          line-height: 30px;
        }
      }

      .title {
        text-align: center;
      }

      .title /deep/ .el-select > .el-input {
        height: 30px;
        line-height: 30px;
      }

      .title /deep/ .el-select > .el-input > .el-input__inner {
        height: 30px;
        line-height: 30px;
        border: none;
        border-bottom: 1px solid #d1d1d1;
        border-radius: 0;
        text-align: center;
      }

      .title
        /deep/
        .el-select
        > .el-input
        > .el-input__suffix
        > .el-input__suffix-inner
        > .el-select__caret {
        height: 30px;
        line-height: 30px;
      }

      .btnGroup {
        width: 100%;
        height: 30px;
        position: absolute;
        // top: 0;
        // left: 0;
        text-align: center;
      }

      .small {
        width: 100%;
        height: 0;
        font-size: 20px;
        transition: linear 0.2s;
      }

      .small > i {
        width: 20px;
        height: 20px;
        background: rgba(77, 77, 77, 0.66);
        border-radius: 100%;
        color: white;
        cursor: pointer;
      }
    }

    .box > p {
      text-align: center;
    }

    .box:hover .small {
      height: 25px;
      line-height: 25px;
    }
  }

  .addService {
    position: absolute;
    top: 0;
    width: 100%;
    height: 15%;
    overflow: hidden;

    .selectCon {
      width: 90%;
      height: 200px;
      margin: auto;
      padding: 5px 0;

      .label {
        width: 100%;
        line-height: 40px;
      }

      .label > span {
        width: 25%;
        display: inline-block;
      }

      .label /deep/ .el-select {
        width: 75%;
      }

      .label /deep/ .el-select > .el-input {
        width: 100%;
      }

      .label /deep/ .el-select > .el-input > .el-input__inner {
        width: 100%;
        height: 30px;
        line-height: 30px;
      }

      .label /deep/ .el-select > .el-input > .el-input__suffix {
        height: 30px;
      }

      .label
        /deep/
        .el-select
        > .el-input
        > .el-input__suffix
        > .el-input__suffix-inner
        > .el-select__caret {
        height: 30px;
        line-height: 30px;
      }

      .label /deep/ .el-date-editor {
        width: 75%;
        height: 30px;
        line-height: 30px;
      }

      .label /deep/ .el-date-editor > .el-input__icon {
        height: 30px;
        line-height: 30px;
      }

      .label /deep/ .el-date-editor > .el-range-input {
        height: 25px;
        line-height: 25px;
      }

      .label /deep/ .el-date-editor > .el-range-separator {
        height: 30px;
        line-height: 30px;
      }
    }

    .btnGroup {
      width: 100%;
      height: 30px;
      position: absolute;
      bottom: 0;
      left: 0;
      text-align: center;
    }
  }
}

.right::-webkit-scrollbar {
  display: none;
}
.comparisonList {
  display: flex;
  flex-direction: column-reverse;
}
</style>
