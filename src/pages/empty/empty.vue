<template>
  <div calss="empty" style="width: 100%;height:100vh;">
    <div class="emptys">
      <img
        src="http://www.hbjtsy.com/themes/simpleboot3_web/public/web/images/index/logo.png"
      />
      {{text}}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props:{
    text:{
      type:String,
      default:'数据正在挖掘中'
    }
  }
};
</script>
<style scoped>
.empty {
  position: relative;
}
.emptys {
  position: absolute;
  top: 45%;
  left: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 50px;
}
</style>
