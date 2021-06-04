<template>
  <div class="container">
    <nav-common
      :imgSize="imgSize"
      :location="location"
      ref="navCommon"
    ></nav-common>
  </div>
</template>

<script>
import NavCommon from "./common/navCommon";

export default {
  name: "serviceDetails",
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
  data() {
    return {
      tabData: [
        { content: "服务区状态", imgData: [1] },
        { content: "基础信息", imgData: [1] },
        { content: "经营信息", imgData: [1, 2] },
        { content: "合同信息", imgData: [1, 3] },
        { content: "特产信息", imgData: [1, 4] },
        { content: "特色信息", imgData: [1] }
      ]
    };
  },
  components: { NavCommon },
  methods: {
    getBack() {
      this.$router.push("/serviceArea/basicInformations");
    }
  },
  mounted() {
    this.$refs["navCommon"].refresh(this.tabData);
  }
};
</script>

<style scoped lang="less">
.container {
  width: 100%;
  /*height: 100%;*/
  margin: auto;
  background: #f3f7ff;
  position: relative;
}

.getBack {
  position: relative;
  // background: url('../../assets/return.png') no-repeat;
  // background-size: 100% 100%;
  width: 60px;
  height: 40px;
  z-index: 1000;
  cursor: pointer;
}
</style>
