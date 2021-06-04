<template>
  <div class="imgs">
    <slot></slot>
    <!-- <div class="img">
            <div class="img1"></div>
            <div class="img2"></div>
        </div>
        <div class="nanimg">
            <div class="nanimg1"></div>
            <div class="nanimg2"></div>
        </div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped lang="less">
.imgs {
  // width: 100%;
  // height: 100%;
}
.img,
.nanimg {
  width: 150px;
  height: 150px;
  position: relative;
  .img1,
  .nanimg1 {
    width: 85%;
    height: 85%;
    // background: url("../../../assets/animation/5.png") no-repeat;
    // background-size: 100% 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: -0;
    bottom: 0;
    margin: auto;
    z-index: 100;
    animation: myfirst 25s linear infinite;
  }
  .img2,
  .nanimg2 {
    width: 100%;
    height: 100%;
    // background: url("../../../assets/animation/66.png") no-repeat;
    // background-size: 100% 100%;
    animation: myfirstq 20s linear infinite;
  }
  @keyframes myfirst {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes myfirstq {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }
}
.nanimg {
  .nanimg1 {
    background: url("../../../assets/animation/4_03.png") no-repeat;
    background-size: 100% 100%;
  }
  .nanimg2 {
    background: url("../../../assets/animation/4_02.png") no-repeat;
    background-size: 100% 100%;
  }
}
</style>
