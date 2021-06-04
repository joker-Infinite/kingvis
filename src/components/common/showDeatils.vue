<template>
  <div style="width: 100%;height: 100%">
    <el-dialog
      align="center"
      width="1200px"
      :title="title + '详情'"
      :modal-append-to-body="false"
      :visible.sync="visible"
    >
      <div style="width: 1160px;height: 500px;background: #f3f7ff;overflow-y: scroll" id="goStart">
        <component
          ref="common"
          :imgSize="imgSize"
          :is="name"
          location="homeKanBan"
        ></component>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import JYZXiangQing from "../../pages/energy/children/JYZXiangQing";
import serviceDetails from "../../pages/details/serviceDetails";

export default {
  name: "showDeatils",
  components: { serviceDetails, JYZXiangQing },
  props: {
    imgSize: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      visible: false,
      name: "",
      title: ""
    };
  },
  methods: {
    openDialog(v, t) {
      this.title = t;
      if (v == "serviceDetails") {
        this.title = t + "服务区";
      }
      this.name = v;
      this.visible = true;
    }
  }
};
</script>

<style scoped></style>
