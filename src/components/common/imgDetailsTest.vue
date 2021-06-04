<template>
  <div style="width: 100%;height: 100%" id="imgTest">
    <el-dialog
      title=""
      :modal-append-to-body="false"
      @close="$emit('showPopover', true)"
      :visible.sync="visible"
    >
      <img :src="img[name]" style="width: 100%;height:100%" />
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "imgDetailsTest",
  data() {
    return {
      visible: false,
      name: "",
      img: {
        办公区: require("../../assets/detailsTest/BGQ.jpg"),
        楚天舒便利店: require("../../assets/detailsTest/CTSBLD.jpg"),
        加油区: require("../../assets/detailsTest/JYQ.jpg"),
        隆盛牛肉面: require("../../assets/detailsTest/LSNRM.jpg"),
        猫屎咖啡: require("../../assets/detailsTest/MSKF.jpg"),
        男厕: require("../../assets/detailsTest/NC.jpg"),
        女厕: require("../../assets/detailsTest/MC.jpg"),
        伟鸿汽修: require("../../assets/detailsTest/WHQX.jpg"),
        小圆满餐厅: require("../../assets/detailsTest/XYMCT.jpg"),
        驿路香伴小吃: require("../../assets/detailsTest/YLXBXC.jpg")
      }
    };
  },
  methods: {
    openDialog(v) {
      this.name = v.name;
      if (v.name == "大厅") {
        return "";
      }
      this.visible = true;
    }
  }
};
</script>

<style scoped lang="less">
#imgTest {
  /deep/ .el-dialog__wrapper > .el-dialog {
    .el-dialog__header {
      padding: 0;
    }

    .el-dialog__body {
      height: 591px;
      padding: 0;
      background: none;
    }
  }
}
</style>
