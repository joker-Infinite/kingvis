<template>
  <div class="more_setting">
    <span class="focus" @click="operations('focus')"></span>
    <!--    <span class="export" @click="operations('export')"></span>-->
    <!--    <span class="moree" @click="operations('more')"></span>-->
  </div>
</template>

<script>
export default {
  name: "operations",
  data() {
    return {};
  },
  methods: {
    operations(v) {
      if (v === "focus") {
        this.$emit("showOne", true);
      }
    }
  }
};
</script>

<style scoped lang="less">
.more_setting {
  width: 29px;
  height: 30px;
  position: absolute;
  display: none;
  z-index: 900;
  top: 2px;
  right: 0;

  .focus {
    background: url("../../assets/big.png") no-repeat;
    background-size: 100%;
  }

  .focus:hover {
    background: url("../../assets/big_.png") no-repeat;
    background-size: 100%;
  }

  .export {
    background: url("../../assets/export.png") no-repeat;
    background-size: 100%;
  }

  .export:hover {
    background: url("../../assets/export_.png") no-repeat;
    background-size: 100%;
  }

  .moree {
    background: url("../../assets/more.png") no-repeat;
    background-size: 100%;
  }

  .moree:hover {
    background: url("../../assets/more_.png") no-repeat;
    background-size: 100%;
  }
}

.more_setting > span {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 3px;
}
</style>
