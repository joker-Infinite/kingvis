<template>
  <div class="big">
    <el-button @click="click_">点击</el-button>
    <ms-dialog title="0000" :visible.sync="visible">
      <div>99999999999</div>
    </ms-dialog>
  </div>
</template>

<script>
import MsDialog from "./common/jsx_common/MsDialog";

export default {
  name: "EChartsTest",
  components: { MsDialog },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    click_() {
      this.visible = true;
    }
  }
};
</script>

<style scoped lang="less">
.big {
  width: 100%;
  height: 100%;
}
</style>
