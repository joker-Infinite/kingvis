<template>
  <div class="container">
    <div class="odd_img" v-if="imgData.length === 1">
      <img v-for="(item, index) of ListImg" :key="index" :src="item.img" />
    </div>
    <div class="dual_img" v-if="imgData.length > 1">
      <el-carousel height="150px">
        <!--最多8张图片-->
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "imgCommon",
  props: {
    imgData: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      ListImg: [
        {
          img: require("../../../assets/imgCommon/background4.jpg")
        },
        {
          img: require("../../../assets/imgCommon/background1.jpg")
        },
        {
          img: require("../../../assets/imgCommon/background2.jpg")
        },
        {
          img: require("../../../assets/imgCommon/background3.jpg")
        }
      ]
    };
  }
};
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;

  .odd_img {
    width: 100%;
    height: 100vh;
    overflow: auto;
  }

  .odd_img > img {
    width: 100%;
  }

  .dual_img {
    width: 100%;
  }

  .dual_img /deep/ .el-carousel {
    margin-bottom: 10px;
  }

  .dual_img
    /deep/
    .el-carousel
    > .el-carousel__indicators
    > .el-carousel__indicator {
    padding: 4px;
  }

  .dual_img
    /deep/
    .el-carousel
    > .el-carousel__indicators
    > .el-carousel__indicator
    > .el-carousel__button {
    width: 8px;
    height: 8px;
  }
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
