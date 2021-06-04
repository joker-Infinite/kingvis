<template>
  <div class="amap-page-container">
    <div class="query">
      <el-checkbox-group v-model="checked">
        <el-checkbox label="服务区"></el-checkbox>
        <el-checkbox label="卡口"></el-checkbox>
        <el-checkbox label="收银"></el-checkbox>
        <el-checkbox label="其他服务区"></el-checkbox>
        <el-checkbox label="加油站-石化"></el-checkbox>
        <el-checkbox label="加油站-交投"></el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="el-icon-full-screen enlarge" @click="enlargeMap"></div>
    <el-amap
      v-if="markers[0]"
      :vid="vid"
      :center="center"
      :zoom="zoom"
      class="amap-demo"
      :events="events"
      :map-style="mapStyleArr[backdrop]"
      pitch-enable="false"
    >
      <el-amap-marker
        v-for="(marker, index) in markers"
        :key="index"
        :events="marker.events"
        :position="marker.position"
        :icon="marker.icon"
      />
      <el-amap-info-window
        v-if="window"
        :position="window.position"
        :visible="window.visible"
        :content="window.content"
        :offset="window.offset"
        :close-when-click-map="true"
        :is-custom="true"
      >
        <div id="info-windows">
          <p style="line-height: 30px;text-align: center">
            {{ window.address }}
          </p>
          <p
            style="text-align: center;font-size: 20px;font-weight: 700;color: black"
          >
            收益： {{ window.money }}
          </p>
        </div>
      </el-amap-info-window>
    </el-amap>
  </div>
</template>

<script>
export default {
  name: "centerMap",
  components: {},
  props: {
    backdrop: {
      type: Number,
      default: 1
    }
  },
  data() {
    let self = this;
    return {
      checked: [],
      vid: "kljk",
      amaps: false,
      markersData: [],
      markerRefs: [],
      zoom: 8,
      center: [112.34, 31.10],
      expandZoomRange: true,
      markers: [],
      windows: [],
      window: "",
      events: {
        init(o) {
          setTimeout(() => {
            let cluster;
            AMap.plugin(["AMap.MarkerClusterer"], function() {
              cluster = new AMap.MarkerClusterer(o, self.markerRefs, {
                gridSize: 50,
                renderCluserMarker: self._renderCluserMarker
              });
            });
          }, 100);
        }
      },
      mapStyleArr: [
        "amap://styles/8cb6df918ee512eae9c9198c38a40c91",
        "amap://styles/1111cca74c703c3218b102779351f6eb",
        "amap://styles/f1f4181c84a35130099dfd661f061466"
      ],
      //amap://styles/1111cca74c703c3218b102779351f6eb 深色
      //'amap://styles/f1f4181c84a35130099dfd661f061466',
      mapStyle: "amap://styles/8cb6df918ee512eae9c9198c38a40c91",
      i: 0,
      timeClear: "",
      timeInformation: [
        "凌晨二时 蔡甸服务区因为XXX 已临时关闭 预计XXX开放",
        "凌晨三时 小池服务区因为XXX 已临时关闭 预计XXX开放",
        "凌晨二时 大悟服务区因为XXX 已临时关闭 预计XXX开放"
      ],
      marker_: []
    };
  },
  methods: {
    del() {
      let position = [];
      this.markers = [];
      this.window = [];
      this.$axios.get("/api/index/list_jtService").then(res => {
        position = res.data.data.servicefrom;
        res.data.data.stationfrom.forEach(i => {
          if (i.latitude != 1) {
            i.gas = "gas";
            position.push(i);
          }
        });
        this.vid = "klkjkl";
        this.point(position, 10);
      });
    },
    _renderCluserMarker(context) {
      const count = this.markers.length;
      let factor = Math.pow(context.count / count, 1 / 18);
      let div = document.createElement("div");
      let Hue = 180 - factor * 180;
      let bgColor = "hsla(" + Hue + ",100%,50%,0.7)";
      let fontColor = "hsla(" + Hue + ",100%,20%,1)";
      let borderColor = "hsla(" + Hue + ",100%,40%,1)";
      let shadowColor = "hsla(" + Hue + ",100%,50%,1)";
      div.style.backgroundColor = bgColor;
      let size = Math.round(30 + Math.pow(context.count / count, 1 / 5) * 20);
      div.style.width = div.style.height = size + "px";
      // div.style.border = "solid 1px " + borderColor;
      div.style.borderRadius = size / 2 + "px";
      div.style.boxShadow = "0 0 1px " + shadowColor;
      div.innerHTML = context.count;
      div.style.lineHeight = size + "px";
      div.style.color = fontColor;
      div.style.fontSize = "14px";
      div.style.textAlign = "center";
      context.marker.setOffset(new AMap.Pixel(-size / 1, -size / 5));
      context.marker.setContent(div);
    },
    enlargeMap() {
      this.$emit("showMap", this.markersData);
    },
    check() {
      let con = document.getElementById("con");
      if (this.i < this.timeInformation.length - 1) {
        this.i++;
        con.style.marginTop = -30 * this.i + "px";
      }
      if (this.i == this.timeInformation.length - 1) {
        // clearInterval(this.timeClear);
        this.i = 0;
        con.style.marginTop = "0px;";
      }
    },
    point(data, n) {
      this.window = "";
      let that = this;
      data.forEach((item, index) => {
        if (index < n) {
          let icon = require("../../../assets/First.png");
          if (index === 0) {
            icon = require("../../../assets/First.png");
          }
          if (index === 1) {
            icon = require("../../../assets/Second.png");
          }
          if (index === 2) {
            icon = require("../../../assets/Thrid.png");
          }
          if (index > 2 && !item.gas) {
            icon =
              "https://iknow-pic.cdn.bcebos.com/43a7d933c895d1438b0a645d63f082025aaf074b";
          }
          if (item.gas && item.gas == "gas") {
            icon = require("../../../assets/gas.png");
          }
          this.markers.push({
            position: [item.longitude, item.latitude],
            events: {
              init(o) {
                that.markerRefs.push(o);
              },
              click() {
                // 方法：鼠标移动到点标记上，显示相应窗体
                that.windows.forEach(window => {
                  window.visible = false; // 关闭窗体
                });
                that.window = that.windows[index];
                that.$nextTick(() => {
                  that.window.visible = true;
                });
              }
            },
            icon: new AMap.Icon({
              image: icon,
              size: new AMap.Size(30, 30),
              imageSize: new AMap.Size(25, 30)
            })
          });
          this.windows.push({
            position: [item.longitude, item.latitude],
            isCustom: true,
            offset: [115, 55], // 窗体偏移
            showShadow: false,
            visible: false, // 初始是否显示
            address: item.serviceName,
            money: item.shouyi
          });
        }
      });
    }
  },
  mounted() {
    let position = [];
    this.$axios.get("/api/index/list_jtService").then(res => {
      position = res.data.data.servicefrom;
      res.data.data.stationfrom.forEach(i => {
        if (i.latitude != 1) {
          i.gas = "gas";
          position.push(i);
        }
      });
      this.point(position, 123);
    });
    this.timeClear = setInterval(this.check, 3000);
  }
};
</script>

<style lang="less" scoped>
.amap-demo {
  height: 99.7%;
  width: 100%;
}

.amap-page-container {
  width: 100%;
  height: 100%;
  position: relative;

  .query {
    width: 100%;
    height: 30px;
    position: absolute;
    top: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 99;
    color: white;
    margin: auto;
  }

  .query /deep/ .el-checkbox-group {
    padding: 5px 20px;
  }

  .query /deep/ .el-checkbox-group > .el-checkbox {
    color: white;
  }

  .enlarge {
    position: absolute;
    right: 0;
    bottom: 2px;
    width: 30px;
    height: 30px;
    background: rgba(0, 0, 0, 0);
    border: 1px solid white;
    z-index: 99;
    font-size: 30px;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
    color: white;
  }
}

#info-windows {
  width: 211px;
  height: 146px;
  margin-left: 30px;
  background: rgba(255, 255, 255, 0.6);
  z-index: 99999;
  position: relative;
  overflow: hidden;
  border-radius: 10px;

  .detail {
    width: 100%;
    height: 24px;
    color: #fff;
    background-color: #1a73e8;
    position: absolute;
    bottom: 0;
    font-size: 12px;
    line-height: 24px;
    text-align: center;
    cursor: pointer;
  }
}
</style>
