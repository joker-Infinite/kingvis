<template>
  <div style="width: 100%;height: 100%;position: absolute">
    <div class="mm lt"></div>
    <div class="mm rt"></div>
    <div class="mm lb"></div>
    <div class="mm rb"></div>
  </div>
</template>

<script>
export default {
  name: "borderPlanB"
};
</script>

<style scoped lang="less">
.mm {
  position: absolute;
  width: 5px;
  height: 5px;
  border: 2px solid #006ec3;
}

.lt {
  top: 0;
  left: 0;
}

.rt {
  top: 0;
  right: 0;
}

.lb {
  bottom: 0;
  left: 0;
}

.rb {
  bottom: 0;
  right: 0;
}
</style>
