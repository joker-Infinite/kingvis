<template>
    <div class="MapBaseChild"
         v-loading="isLoading"
         element-loading-text="拼命加载中……"
         element-loading-spinner="el-icon-loading"
         element-loading-background="rgba(0, 0, 0, 0.5)">
        <div id="MapBaseChild"></div>
        <el-dialog :title="serviceName"
                   align="center"
                   width="1200px"
                   v-loading="childLoading"
                   element-loading-text="拼命加载中……"
                   element-loading-spinner="el-icon-loading"
                   element-loading-background="rgba(0, 0, 0, 0.5)"
                   :modal-append-to-body="false"
                   :visible.sync="visible">
            <img-floor-plan @startLoading="v=>{this.childLoading=v}" ref="imgFloorPlan"
                            location="homeKanBan"></img-floor-plan>
        </el-dialog>
        <more-information NE="gas"
                          ref="more"
                          location="homeKanBan">
        </more-information>
    </div>
</template>

<script>
    import ImgFloorPlan from "./common/imgFloorPlan";
    import MoreInformation from "../pages/details/common/moreInformation";

    export default {
        name: "MapBaseChild",
        components: {MoreInformation, ImgFloorPlan},
        props: {
            mapStyle: {
                type: String,
                default: _ => {
                    return "fresh"
                }
            }
        },
        data() {
            return {
                markerChange: {
                    del: [],
                    add: []
                },
                childLoading: false,
                isLoading: true,
                marker: [],
                map: '',
                markerInstanceAll: [],
                serviceName: "",
                visible: false,
                gasDetails: {
                    name: "加油站",
                    remark: "提供柴油、汽油（E95、E98、95……）",
                    data: [
                        {a: "加油站负责人", b: "XXX"},
                        {a: "加油站联系电话", b: "Xxxxxxxxxxx"},
                        {a: "加油站管理单位", b: "中石化"},
                        {a: "加油岛数量", b: "6个"},
                        {a: "是否有便利店", b: "是"}
                    ],
                    formData: [
                        {label: "加油站负责人", value: "XXX"},
                        {label: "加油站联系电话", value: "Xxxxxxxxxxx"},
                        {label: "加油站管理单位", value: "中石化"},
                        {label: "加油岛数量", value: "6个"},
                        {label: "是否有便利店", value: "是"}
                    ],
                    columns: [
                        {a: "92#", b: "95#", c: "98#", d: "0#", e: "异常", f: "总计"},
                        {a: "8个", b: "8个", c: "8个", d: "6个", e: "6个", f: "36个"}
                    ],
                    chartBox: [
                        {
                            barWidth: 20,
                            title: {
                                text: "近半年销售额",
                                x: "center",
                                textStyle: {
                                    color: "#FFF"
                                }
                            },
                            xAxis: {
                                type: "category",
                                name: "月",
                                data: ["7", "8", "9", "10", "11", "12"],
                                axisPointer: {
                                    type: "shadow"
                                },
                                axisTick: {
                                    show: false
                                },
                                axisLabel: {
                                    textStyle: {
                                        color: "#FFF"
                                    }
                                },
                                splitLine: {show: false},
                                axisLine: {
                                    lineStyle: {
                                        color: "#FFF"
                                    }
                                }
                            },
                            grid: {
                                left: 40,
                                top: 40,
                                bottom: 30,
                                right: 50
                            },
                            tooltip: {
                                trigger: "axis",
                                formatter: v => {
                                    return v[0].name + "月：" + v[0].value + "万元";
                                }
                            },
                            yAxis: {
                                type: "value",
                                name: "万元",
                                axisTick: {
                                    show: false
                                },
                                axisLabel: {
                                    textStyle: {
                                        color: "#FFF"
                                    }
                                },
                                splitLine: {show: false},
                                axisLine: {
                                    lineStyle: {
                                        color: "#FFF"
                                    }
                                }
                            },
                            series: [
                                {
                                    data: [200, 150, 250, 300, 500, 450],
                                    type: "bar",
                                    itemStyle: {
                                        color: "#79f0ea"
                                    }
                                }
                            ]
                        },
                        {
                            title: {
                                text: "类型占比",
                                x: "center",
                                textStyle: {
                                    color: "#FFF"
                                }
                            },
                            tooltip: {
                                trigger: "item",
                                formatter: "{b} : {c} ({d}%)"
                            },
                            legend: {
                                data: ["0#", "92#", "95#", "98#", "非油"],
                                bottom: 10,
                                textStyle: {
                                    color: "#FFF"
                                }
                            },
                            series: [
                                {
                                    name: "访问来源",
                                    type: "pie",
                                    radius: "55%",
                                    center: ["50%", "50%"],
                                    data: [
                                        {value: 180, name: "0#"},
                                        {value: 250, name: "92#"},
                                        {value: 234, name: "95#"},
                                        {value: 320, name: "98#"},
                                        {value: 50, name: "非油"}
                                    ],
                                    itemStyle: {
                                        normal: {
                                            color: function (v) {
                                                let colorList = [
                                                    "#76c15c",
                                                    "#15b3e2",
                                                    "#2e65fd",
                                                    "#1fcaa8",
                                                    "#ee6565",
                                                    "#fec02a",
                                                    "#fe3922",
                                                    "#52fe36",
                                                    "#fe3afc"
                                                ];
                                                return colorList[v.dataIndex];
                                            }
                                        }
                                    },
                                    emphasis: {
                                        itemStyle: {
                                            shadowBlur: 10,
                                            shadowOffsetX: 0,
                                            shadowColor: "rgba(0, 0, 0, 0.5)"
                                        }
                                    }
                                }
                            ]
                        }
                    ],
                    style: {
                        width: "50px",
                        height: "25px",
                        top: "146px",
                        left: "190px",
                        background: "blue"
                    }
                },
                bayonetDetails: {
                    name: "卡口",
                    noPingEffect: true,
                    data: [
                        {a: "卡口是否正常", b: "是"},
                        {a: "今日进入车辆", b: "2853辆"},
                        {a: "日均车流量", b: "1940辆"}
                    ],
                    formData: [
                        {label: "卡口是否正常", value: "是"},
                        {label: "今日进入车辆", value: "2853辆",},
                        {label: "今日驶出车辆", value: "2766辆",},
                        {label: "日均车流量", value: "1940辆"}
                    ],
                    chartBox: [
                        {
                            barWidth: 20,
                            title: {
                                text: "近半年车流量",
                                x: "center",
                                textStyle: {
                                    color: "#FFF"
                                }
                            },
                            tooltip: {
                                trigger: "axis",
                                axisPointer: {
                                    type: "shadow"
                                },
                                formatter: v => {
                                    if (v.length === 2) {
                                        return (
                                            v[0].name +
                                            "月<br>" +
                                            v[0].seriesName +
                                            "：" +
                                            v[0].value +
                                            "辆<br>" +
                                            v[1].seriesName +
                                            "：" +
                                            v[1].value +
                                            "辆"
                                        );
                                    }
                                    if (v.length === 1) {
                                        return (
                                            v[0].name +
                                            "月<br>" +
                                            v[0].seriesName +
                                            "：" +
                                            v[0].value +
                                            "辆"
                                        );
                                    }
                                }
                            },
                            legend: {
                                data: ["大车", "小车"],
                                bottom: 0,
                                textStyle: {color: "white"}
                            },
                            grid: {
                                left: "3%",
                                right: "7%",
                                bottom: "30",
                                containLabel: true
                            },
                            xAxis: [
                                {
                                    name: "月",
                                    type: "category",
                                    data: ["7", "8", "9", "10", "11", "12"],
                                    axisTick: {
                                        show: false
                                    },
                                    axisLabel: {
                                        textStyle: {
                                            color: "#FFF"
                                        }
                                    },
                                    splitLine: {show: false},
                                    axisLine: {
                                        lineStyle: {
                                            color: "#FFF"
                                        }
                                    }
                                }
                            ],
                            yAxis: [
                                {
                                    type: "value",
                                    name: "万辆",
                                    axisTick: {
                                        show: false
                                    },
                                    axisLabel: {
                                        textStyle: {
                                            color: "#FFF"
                                        }
                                    },
                                    splitLine: {show: false},
                                    axisLine: {
                                        lineStyle: {
                                            color: "#FFF"
                                        }
                                    }
                                }
                            ],
                            series: [
                                {
                                    name: "大车",
                                    type: "bar",
                                    stack: "车流量",
                                    data: [620, 507, 400, 734, 689, 666],
                                    itemStyle: {color: "#596aec"}
                                },
                                {
                                    name: "小车",
                                    type: "bar",
                                    stack: "车流量",
                                    data: [730, 650, 600, 499, 290, 230],
                                    itemStyle: {color: "#43cef7"}
                                }
                            ]
                        },
                        {
                            title: {
                                text: "今日各时段进入车辆",
                                x: "center",
                                textStyle: {
                                    color: "#FFF"
                                }
                            },
                            barWidth: 10,
                            tooltip: {
                                trigger: "axis",
                                axisPointer: {
                                    type: "shadow"
                                },
                                formatter: v => {
                                    //进入
                                    let R = {
                                        D: [80, 106, 161, 224, 210, 130],
                                        X: [60, 89, 441, 474, 490, 320]
                                    };
                                    //驶出
                                    let C = {
                                        D: [90, 80, 153, 236, 326, 230],
                                        X: [68, 93, 462, 432, 390, 293]
                                    };
                                    let time = "";
                                    let text = '';
                                    v.forEach(i => {
                                        //dataIndex
                                        time = i.name + "时<br>";
                                        if (i.seriesName == '驶入') {
                                            text += i.seriesName + '<br>大车：' + R.D[i.dataIndex] + '辆<br>小车：' + R.X[i.dataIndex] + '辆<br>';
                                        }
                                        if (i.seriesName == '驶出') {
                                            text += i.seriesName + '<br>大车：' + C.D[i.dataIndex] + '辆<br>小车：' + C.X[i.dataIndex] + '辆';
                                        }
                                    });
                                    return time + text
                                }
                            },
                            legend: {
                                data: ["驶入", "驶出"],
                                icon: 'circle',
                                bottom: 0,
                                textStyle: {
                                    color: "#FFF"
                                }
                            },
                            grid: {
                                left: "3%",
                                right: "50",
                                bottom: "30",
                                containLabel: true
                            },
                            xAxis: [
                                {
                                    name: "时",
                                    type: "category",
                                    axisTick: {
                                        show: false
                                    },
                                    axisLine: {
                                        lineStyle: {
                                            color: "#FFF"
                                        }
                                    },
                                    axisLabel: {
                                        textStyle: {
                                            color: "#FFF"
                                        }
                                    },
                                    data: ["0-3", "4-7", "8-11", "12-15", "16-19", "20-23"]
                                }
                            ],
                            yAxis: [
                                {
                                    name: "辆",
                                    type: "value",
                                    axisLabel: {
                                        formatter: v => {
                                            return Math.abs(v);
                                        },
                                        textStyle: {
                                            color: "#FFF"
                                        }
                                    },
                                    axisLine: {
                                        lineStyle: {
                                            color: "#FFF"
                                        }
                                    },
                                    axisTick: {
                                        show: false
                                    },
                                    splitLine: {show: false}
                                }
                            ],
                            series: [
                                {
                                    name: "驶入",
                                    type: "line",
                                    /*	label: {
                      show: true,
                      formatter: v => {
                        return Math.abs(v.value);
                      }
                    },*/
                                    data: [140, 195, 602, 698, 700, 350],
                                    itemStyle: {color: "#596aec"}
                                },
                                {
                                    name: "驶出",
                                    type: "line",
                                    /*	label: {
                      show: true,
                      formatter: v => {
                        return Math.abs(v.value);
                      }
                    },*/
                                    data: [158, 173, 615, 668, 716, 523],
                                    itemStyle: {color: "#43cef7"}
                                }
                            ]
                        }
                    ],
                    style: {
                        width: "97px",
                        height: "52px",
                        top: "195px",
                        left: "768px",
                        background: "rgb(39,255,221)"
                    }
                },
            }
        },
        methods: {
            /**
             * @param d 需要加载的点
             * @param s 地图样式
             * */
            initMap(d, s) {
                this.isLoading = true;
                let center = [112.34, 31.1];
                let zoom = 7;
                let map = this.map = new AMap.Map("MapBaseChild", {center: center, zoom: zoom});
                map.setMapStyle("amap://styles/" + s);
                let that = this;
                map.on('zoomchange', _ => {
                    that.zoomChange(map)
                });
                this.marker = d;
                this.externalRefreshMap(d, map)
            },
            zoomChange(map) {
                //zoom==8 时，删除双点，改换单点
                let zoom = map.getZoom();
                if (zoom <= 11 && this.markerChange.del.length > 0) {
                    this.markerChange.del.forEach(i => {
                        map.remove(i);
                    });
                    this.markerChange.add.forEach(i => {
                        map.add(i);
                    });
                }
            },
            searchDot(v) {
                this.isLoading = true;
                let item;
                for (let i of this.markerInstanceAll) {
                    if (i.oid == v) {
                        item = i
                    }
                }
                this.internalRefreshMap(this.marker, v, this.map, item)
            },
            /**
             * 点击地图 已加载点时使用
             * @param marker 需要加载的点
             * @param oid 选中需要放大的点
             * @param map map实例
             * @param item 缩小后显示的点的实例
             * */
            internalRefreshMap(marker, oid, map, item) {
                let serviceInfoVo = [];
                let timeID = "";
                let th = this;
                for (let i in marker) {
                    if (marker[i].oid == oid && marker[i].serviceInfoVo) {
                        serviceInfoVo = marker[i];
                        break;
                    }
                }
                if (serviceInfoVo.serviceInfoVo && serviceInfoVo.serviceInfoVo.length > 0) {
                    let addMarker = this.generateInstance(serviceInfoVo.serviceInfoVo);
                    if (addMarker.length > 0) {
                        addMarker.forEach(i => {
                            map.add(i);
                            AMap.event.addListener(i, "dblclick", _ => {
                                clearInterval(timeID);
                                th.serviceName = i.name;
                                th.showSmallPiece(i.gisName, i.serviceInfoId);
                            });
                            AMap.event.addListener(i, "click", _ => {
                                timeID = setTimeout(_ => {
                                }, 500)
                            })
                        });
                        map.remove(item);
                        map.panTo([serviceInfoVo.serviceInfoVo[0].longitude, serviceInfoVo.serviceInfoVo[0].latitude]);
                        this.markerChange.del = [...addMarker];
                    } else {
                        let ll = oid.split("-");
                        map.panTo([ll[1], ll[2]]);
                    }
                    map.setZoom(17);
                    this.markerChange.add.push(item);
                } else {
                    let ll = oid.split("-");
                    map.panTo([ll[1], ll[2]]);
                    map.setZoom(17);
                }
                this.isLoading = false;
            },
            /**
             * 加载外部传入的点
             * @param marker 需要加载的点
             * @param map 地图实例
             * */
            async externalRefreshMap(marker, map) {
                this.isLoading = true;
                await new Promise(resolve => {
                    setInterval(_ => {
                        resolve();
                    }, 1000);
                });
                this.initMarker(marker, map)
            },
            /**
             * 加载点
             * @param marker 点集合
             * @param map map实例
             * */
            async initMarker(marker, map) {
                let th = this;
                let timeID;
                let marker_ = JSON.parse(JSON.stringify(marker));
                let markerInstanceAll = this.markerInstanceAll = this.generateInstance(marker);
                //将点标记实例注入地图
                await markerInstanceAll.forEach(item => {
                    let content = [];
                    let oid = item.oid.split('-');
                    //点标记双击事件
                    AMap.event.addListener(item, "dblclick", async _ => {
                        clearTimeout(timeID);
                        if (oid[0] === 'ms') {
                            th.$emit("dblclickDot", oid, item);
                            th.serviceName = item.name;
                            th.showSmallPiece(item.name, item.serviceInfoId);
                        } else if (oid[0] === "xny" || oid[0] === "shny" || oid[0] === "zhjt" || oid[0] === "glyz") {
                            // th.$refs["more"].openDialog(th.gasDetails, item);
                        } else if (oid[0] === "kk") {
                            // th.$refs["more"].openDialog(th.bayonetDetails, item);
                        } else {
                            infoWindow.open(map, item.getPosition());
                        }
                    });
                    //点击事件
                    AMap.event.addListener(item, "click", async _ => {
                        timeID = setTimeout(_ => {
                            if (oid[0] === 'ms') {
                                th.internalRefreshMap(marker_, item.oid, map, item)
                            } else {
                                map.panTo([oid[1], oid[2]]);
                                map.setZoom(17);
                            }
                        }, 500)
                    });
                    content.push("<div class='title'>" + item.gisName + "</div>");
                    if (oid[0] === 'kk') {
                        content.push(
                            "<div class='content'>卡口是否正常：是</div>",
                            "<div class='content'>日均车流量：3000辆</div>",
                            "<div class='content'>今日进入车辆：1867辆</div>",
                            "<div class='content'>今日驶出车辆：1835辆</div>")
                    } else if (oid[0] === 'xny' || oid[0] === 'shny' || oid[0] === 'zhjt' || oid[0] === 'glyz') {
                        content.push(
                            "<div class='content'>是否开通：是</div>",
                            "<div class='content'>便利店是否开通：是/div>",
                            "<div class='content'>加油类型：0#  92# 95# 98#</div>")
                    } else {
                        content.push("<div class='content'>内容</div>")
                    }
                    //生成窗口实例
                    let infoWindow = new AMap.InfoWindow({
                        content: content.join(""),
                        offset: new AMap.Pixel(3, -33)
                    });
                    infoWindow.on("close", function () {
                    });
                    //将点标记挂载到地图上
                    item.setMap(map);
                });
                this.isLoading = false;
            },
            async showSmallPiece(v, id) {
                const res = await this.$axios.get("/api/index/gis_jtservice_info_id", {params: {serviceInfoId: id}});
                let d = res.data.data;
                let pieceData = (d && d.serviceJson) ? JSON.parse(d.serviceJson) : [];
                let imgUrl = (d && d.servicePicture) ? d.servicePicture : '';
                /* if (!d) {
                     this.$message.warning('暂无数据!');
                     return ''
                 }*/
                this.visible = true;
                this.$nextTick(_ => {
                    this.$refs['imgFloorPlan'].setPages(pieceData, imgUrl, d);
                })
            },
            /**
             * 生成点标记实例
             * @param marker
             * */
            generateInstance(marker) {
                let markerInstanceAll = [];
                marker.forEach(item => {
                    if (!item.oid) {
                        return [];
                    }
                    let icon;
                    if (item.type) {
                        icon = require("../../src/assets/newHome/" + item.type + ".png");
                    }
                    //将需要显示的点生成点标记实例
                    let markerInstance = new AMap.Marker({
                        icon: new AMap.Icon({
                            image: icon,
                            size: new AMap.Size(30, 30),
                            imageSize: new AMap.Size(30, 30)
                        }),
                        position: [item.longitude, item.latitude]
                    });
                    //向已经生成的点标记实例注入所需参数
                    markerInstanceAll.push(Object.assign(markerInstance, {
                        gisName: item.gisName,
                        name: item.searchName,
                        oid: item.oid,
                        serviceInfoId: item.serviceInfoId,
                    }));
                });
                return markerInstanceAll;
            }
        }
    }
</script>

<style scoped lang="less">
    .MapBaseChild {
        width: 100%;
        height: 100%;

        /deep/ .el-dialog__wrapper {
            .el-dialog {
                background: #0c2348;

                .el-dialog__header {
                    padding: 10px 20px;

                    .el-dialog__title {
                        color: white;
                    }
                }

                .el-dialog__body {
                    padding: 0;
                }
            }
        }
    }

    #MapBaseChild {
        width: 100%;
        height: 100%;

        /deep/ .amap-maps {
            .amap-drags {
                .amap-overlays {
                    .amap-info {
                        div {
                            .bottom-center {
                                .amap-info-content {
                                    .title {
                                        width: 200px;
                                        text-align: center;
                                        font-weight: 700;
                                    }

                                    .content {
                                        width: 200px;
                                        text-align: left;
                                        line-height: 22px;
                                        font-size: 14px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>