<template>
  <div style="width: 100%;height: 100%;position: absolute">
    <div class="mm vv left top"></div>
    <div class="mm hh left top"></div>
    <div class="mm vv right top"></div>
    <div class="mm hh right top"></div>
    <div class="mm vv left bottom"></div>
    <div class="mm hh left bottom"></div>
    <div class="mm vv right bottom"></div>
    <div class="mm hh right bottom"></div>
  </div>
</template>

<script>
export default {
  name: "border"
};
</script>

<style scoped lang="less">
.mm {
  position: absolute;
}

.vv {
  width: 3px;
  height: 20px;
  background: #4cbcf4;
}

.hh {
  width: 30px;
  height: 3px;
  background: #4cbcf4;
}

.left {
  left: 0;
}

.top {
  top: 0;
}

.right {
  right: 0;
}

.bottom {
  bottom: 0;
}
</style>
