<template>
  <div class="container">
    <el-form class="head">
      <div v-for="i in 4" class="serviceArea">
        <div class="item">
          <div class="time">
            <el-time-picker></el-time-picker>
            -
            <el-time-picker></el-time-picker>
          </div>
          <div>
            <span>服务区：</span>
            <el-select></el-select>
          </div>
          <div>
            <span>业务：</span>
            <el-select></el-select>
          </div>
          <div>
            <span>业态：</span>
            <el-select></el-select>
          </div>
        </div>
      </div>
    </el-form>
    <div class="con">
      <div class="left">
        <div
          style="width: 80%;float: right; background: #eeeeee;"
          v-for="i in 50"
        >
          <i style="display: inline-block;width: 10px"></i>
          <el-checkbox :label="i == 1 ? '全选' : '选项1'"></el-checkbox>
        </div>
      </div>
      <div class="center"></div>
      <div class="right">
        <div style="width: 80%;float: left; background: #eeeeee;">
          <div v-for="i in 100" :class="{ nav: true, addTo: i === 1 }">
            第{{ i }}项
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "compared"
};
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  position: fixed;
  margin: 0;
  padding: 0;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: nowrap;

  .head {
    height: 20%;
    width: 80%;
    margin: auto;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;

    .serviceArea {
      width: 24%;
      height: 99.5%;
      background: #f8f8f8;
      border: 1px solid #eeeeee;
      border-radius: 5px;
      position: relative;

      .item {
        width: 90%;
        height: 90%;
        position: absolute;
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;
        margin: auto;

        .time {
          margin-bottom: 5px;
        }
      }

      .item > div > span {
        display: inline-block;
        width: 70px;
      }
    }

    .serviceArea /deep/ .el-date-editor {
      width: 47%;
    }

    .serviceArea /deep/ .el-date-editor .el-input__inner {
      height: 30px;
      line-height: 30px;
    }

    .serviceArea /deep/ .el-date-editor .el-input__prefix {
      height: 30px;
      line-height: 30px;
    }

    .serviceArea /deep/ .el-date-editor .el-input__prefix .el-input__icon {
      height: 30px;
      line-height: 30px;
    }

    .serviceArea /deep/ .el-select {
      margin-bottom: 5px;
    }

    .serviceArea /deep/ .el-select .el-input .el-input__inner {
      height: 30px;
      line-height: 30px;
    }

    .serviceArea
      /deep/
      .el-select
      .el-input
      .el-input__suffix
      .el-input__suffix-inner
      .el-select__caret {
      height: 30px;
      line-height: 30px;
    }
  }

  .con {
    height: 80%;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;

    .left {
      width: 10%;
      height: 80%;
      overflow-y: scroll;
    }

    .left /deep/ .el-checkbox {
    }

    .left::-webkit-scrollbar {
      display: none;
    }

    .center {
      width: 80%;
      height: 100%;
      background: #10448a;
    }

    .right {
      width: 10%;
      height: 80%;
      overflow-y: scroll;
      text-align: center;

      .nav {
        line-height: 30px;
      }

      .addTo {
        background: #fcfcfc;
      }
    }

    .right::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
