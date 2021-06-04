<template>
  <div class="inform">
    <span class="focus" @click="operations('focus')">
      <el-tooltip class="item" effect="dark" content="图表" placement="top">
        <i class="el-icon-s-marketing"></i>
      </el-tooltip>
    </span>
    <span class="datas" @click="operations('datas')">
      <el-tooltip class="item" effect="dark" content="列表" placement="top">
        <i class="el-icon-s-grid"></i>
      </el-tooltip>
    </span>
    <span class="excel" @click="operations('excel')">
      <el-tooltip
        class="item"
        effect="dark"
        content="导出Excel"
        placement="top">
        <i class="el-icon-download"></i>
      </el-tooltip>
    </span>
  </div>
</template>
<script>
export default {
  data() {
    return { show: false };
  },
  methods: {
    operations(v) {
      this.$emit("isData", v);
    }
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
.el-icon-s-marketing,
.el-icon-s-grid,
.el-icon-download {
  color: #38a0ff;
}
.inform {
  position: absolute;
  z-index: 10000;
  top: 0;
  left: 10px;
  width: 120px;
  display: flex;
  // flex-direction: column;
  span {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
    font-size: 16px;
    // font-size:30px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 100px;
    text-align: center;
    // background: #38A0FF;
    margin: 5px 0;
    border: 1px solid #38a0ff;
  }
  span + span {
    margin-left: 10px;
  }
}
</style>
