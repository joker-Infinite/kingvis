<template>
    <div class="mapBox"
         @mouseover="showCheckBoxBar"
         @mouseout="hiddenCheckBoxBar">
        <div class="btn" id="btn_map">
            <el-radio-group
                    v-model="serviceChecked"
                    @change="serviceCheck(serviceChecked)">
                <el-radio label="服务区"></el-radio>
                <el-radio label="油站"></el-radio>
                <el-radio label="超市"></el-radio>
                <el-radio label="卡口"></el-radio>
                <el-radio label="收银"></el-radio>
            </el-radio-group>
        </div>
        <div class="searchMap" style="width: 20%;position:absolute;top: 0;left: 0;z-index: 99">
            <el-select v-model="searchSelect" filterable @change="searchMapDot(searchSelect,searchOption)">
                <el-option v-for="(i,x) in searchOption" :key="x" :value="i.oid" :label="i.searchName"></el-option>
                <div slot="prefix">
                    <div style="width: 25px;height: 35px;line-height: 35px;text-align: center;font-size: 16px"
                         class="el-icon-search">
                    </div>
                </div>
            </el-select>
        </div>
        <div id="MAP"></div>
        <div class="el-icon-full-screen enlarge" @click="enlargeMap"></div>
        <el-dialog
                :title="serviceName"
                align="center"
                width="1200px"
                :modal-append-to-body="false"
                :visible.sync="visible">
            <img-floor-plan v-if="visible" location="homeKanBan" :pieceData="pieceData"
                            :imgUrl="imgUrl" ref="imgFloorPlan"></img-floor-plan>
        </el-dialog>
        <more-information
                NE="gas"
                ref="more"
                location="homeKanBan"
        ></more-information>
    </div>
</template>

<script>
    import animation from "./animation";
    import ServiceFloorPlan from "../../serviceArea/children/serviceFloorPlan";
    import ImgFloorPlan from "../../../components/common/imgFloorPlan";
    import MoreInformation from "../../details/common/moreInformation";

    export default {
        name: "centerMapBase",
        components: {MoreInformation, ImgFloorPlan, ServiceFloorPlan, animation},
        props: {
            backdrop: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                searchOption: [],
                searchSelect: '',
                clickIndex: 0,
                serviceChecked: "服务区",
                gasChecked: ['新能源公司', '石化能源公司', '中化交投公司', '高路油站公司'],
                visible: false,
                serviceSelect: 0,
                gasSelect: 0,
                //旋转的
                rotateList: [
                    {
                        png1: require("../../../assets/animation/5.png"),
                        png2: require("../../../assets/animation/66.png"),
                        style: {left: "0", top: "6%"}
                    },
                    {
                        png1: require("../../../assets/animation/4_03.png"),
                        png2: require("../../../assets/animation/4_02.png"),
                        style: {right: "0", top: "6%"}
                    },
                    {
                        png1: require("../../../assets/animation/3_2.png"),
                        png2: require("../../../assets/animation/3_1.png"),
                        style: {bottom: "0", left: "0"}
                    },
                    {
                        png1: require("../../../assets/animation/2_1.png"),
                        png2: require("../../../assets/animation/2_2.png"),
                        style: {bottom: "0", right: "0"}
                    }
                ],
                position: [],
                //交投能源
                energy: [],
                //中石化
                petrochemical: [],
                //中石油
                oil: [],
                //交投服务区
                myService: [],
                //其他服务区
                otherService: [],
                //卡口
                bayonet: [],
                // 服务区名
                serviceName: "",
                //超市
                supermarket: [],
                //加油站详情
                xny: [],
                shny: [],
                zhjt: [],
                glyz: [],
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
                map: "",
                marker: [],
                mapStyleArr: [
                    "fresh",
                    // '8cb6df918ee512eae9c9198c38a40c91',
                    "darkblue",
                    "blue"
                ],
                i: 0,
                timeId: "",
                checked: ["交投服务区", "其他服务区", "中石化", "中石油", "交投能源"],
                mapData: [],
                selectData: ["交投服务区", "其他服务区", "中石化", "中石油", "交投能源"],
                click: true,
                dblclick: true,
                timeID: "",
                oid: '',
                imgUrl: '',
                pieceData: []
            };
        },
        methods: {
            formatterCenter(s, a) {
                let op = [];
                a.forEach((i, x) => {
                    if (i.searchName == s) {
                        op = [i.longitude, i.latitude];
                    }
                });
                return op;
            },
            searchMapDot(s, a) {
                let name = '';
                a.forEach(i => {
                    if (i.oid === s) {
                        name = i.searchName;
                    }
                });
                this.oid = s;
                this.$store.commit('newSearchValue', {oid: s, selected: this.serviceChecked});
                let op = this.formatterCenter(name, a);
                this.refresh(this.backdrop, '', '', op, 'enlarge');
                this.$emit('selectValue', op);
            },
            hiddenCheckBoxBar() {
                let btn_map = document.getElementById("btn_map");
                btn_map.style.right = "-120px";
            },
            showCheckBoxBar() {
                let btn_map = document.getElementById("btn_map");
                btn_map.style.right = "0px";
            },
            serviceCheck(sv) {
                this.$store.commit('newSearchValue', {oid: this.oid, selected: this.serviceChecked});
                this.searchSelect = '';
                this.$emit('selectValue', []);
                this.refresh(this.backdrop, sv, this.gasChecked);
            },
            gasCheck(gv) {
                this.refresh(this.backdrop, this.serviceChecked, gv);
            },
            showCheckBox() {
                let btn_map = document.getElementById("btn_map");
                if (this.clickIndex % 2 === 0) {
                    btn_map.style.right = "0px";
                }
                if (this.clickIndex % 2 !== 0) {
                    btn_map.style.right = "-120px";
                }
                this.clickIndex++;
            },
            enlargeMap() {
                this.$emit("MapBase", this.mapData);
            },
            initMap(position) {
                let searchValue = this.$store.state.searchValue;
                let center = [112.34, 31.1];
                let zoom = 7;
                if (!!searchValue.selected) {
                    this.serviceChecked = searchValue.selected;
                }
                if (searchValue.oid !== '') {
                    this.searchSelect = searchValue.oid;
                    let data = searchValue.oid.split('-');
                    center = [data[1], data[2]];
                    zoom = 20;
                    if (data[0] === 'ms' || data[0] === 'os') {
                        position = [...this.myService, ...this.otherService];
                        this.searchOption = [...this.myService, ...this.otherService];
                    }
                    if (data[0] === '新能源公司' || data[0] === '石化能源公司' || data[0] === '中化交投公司' || data[0] === '高路油站公司') {
                        position = [...this.xny, ...this.shny, ...this.zhjt, ...this.glyz];
                        this.searchOption = [...this.xny, ...this.shny, ...this.zhjt, ...this.glyz];
                    }
                    if (data[0] === '卡口') {
                        position = this.bayonet;
                        this.searchOption = this.bayonet;
                    }
                    if (data[0] === '中百') {
                        position = this.supermarket;
                        this.searchOption = this.supermarket
                    }
                } else {
                    if (!!searchValue.selected) {
                        if (searchValue.selected === '服务区') {
                            position = [...this.myService, ...this.otherService];
                            this.searchOption = [...this.myService, ...this.otherService];
                        }
                        if (searchValue.selected === '油站') {
                            position = [...this.xny, ...this.shny, ...this.zhjt, ...this.glyz];
                            this.searchOption = [...this.xny, ...this.shny, ...this.zhjt, ...this.glyz];
                        }
                        if (searchValue.selected === '卡口') {
                            position = this.bayonet;
                            this.searchOption = this.bayonet;
                        }
                        if (searchValue.selected === '中百') {
                            position = this.supermarket;
                            this.searchOption = this.supermarket
                        }
                        if (searchValue.selected === '收银') {
                            position = [];
                            this.searchOption = []
                        }
                    }
                }
                this.marker = [];
                let map = new AMap.Map("MAP", {
                    center: center,
                    zoom: zoom
                });
                map.setMapStyle("amap://styles/" + this.mapStyleArr[this.backdrop]);
                this.map = map;
                this.addMarker(map, position, this.backdrop);
            },
            addMarker(v, position, d) {
                let that = this;
                position.forEach((item, index) => {
                    let icon;
                    if (item.type) {
                        if (item.type === "ms") {
                            icon = require("../../../assets/gas/service-k.png")
                        }
                        if (item.type === "os") {
                            icon = require("../../../assets/gas/service-c.png")
                        }
                        if (item.type === "新能源公司") icon = require("../../../assets/gas/新能源.png");
                        if (item.type === "石化能源公司") icon = require("../../../assets/gas/zsh_a.png");
                        if (item.type === "中化交投公司") icon = require("../../../assets/gas/中化交投.png");
                        if (item.type === "高路油站公司") icon = require("../../../assets/gas/高路油站.png");
                        if (item.type === "卡口") icon = require("../../../assets/gas/kk.png");
                        if (item.type === "中百") icon = require("../../../assets/gas/zb.png");
                    }
                    if (
                        item.longitude &&
                        item.latitude &&
                        item.longitude != "NULL" &&
                        item.latitude != "NULL"
                    ) {
                        let marker = new AMap.Marker({
                            icon: new AMap.Icon({
                                image: icon,
                                size: new AMap.Size(30, 30),
                                imageSize: new AMap.Size(30, 30)
                            }),
                            position: [item.longitude, item.latitude]
                        });
                        this.marker.push(
                            Object.assign(marker, {
                                gisName: item.gisName,
                                name: item.gisCompany,
                                oid: item.oid,
                                serviceInfoId: item.serviceInfoId,
                            })
                        );
                    }
                });
                this.marker.forEach((i, x) => {
                    AMap.event.addListener(i, "dblclick", async function () {
                        clearTimeout(that.timeID);
                        let arr = i.oid.split("-");
                        if (arr[0] == "ms") {
                            that.serviceName = i.gisName;
                            that.showSmallPiece(i.gisName, i.serviceInfoId);
                        } else if (
                            id[0] === "新能源公司" ||
                            id[0] === "石化能源公司" ||
                            id[0] === "中化交投公司" ||
                            id[0] === "高路油站公司"
                        ) {
                            that.$refs["more"].openDialog(that.gasDetails);
                        } else if (id[0] === "卡口") {
                            that.$refs["more"].openDialog(that.bayonetDetails);
                        } else {
                            infoWindow.open(v, i.getPosition());
                        }
                    });
                    AMap.event.addListener(i, "click", function () {
                        that.timeID = setTimeout(_ => {
                            that.$store.commit('newSearchValue', {oid: i.oid, selected: that.serviceChecked});
                            let arr = i.oid.split("-");
                            let position_ = [arr[1], arr[2]];
                            that.refresh(that.backdrop, "", "", position_, "enlarge");
                        }, 200);
                    });
                    let content = [];
                    let id = i.oid.split("-");
                    content.push(
                        "<div style='width: 200px;text-align: center;font-weight: 700'>" +
                        i.gisName +
                        "</div>"
                    );
                    if (id[0] === "卡口") {
                        content.push(
                            "<div style='width: 200px;text-align: left;line-height: 22px;font-size: 14px'>卡口是否正常：是</div>"
                        );
                        content.push(
                            "<div style='width: 200px;text-align: left;line-height: 22px;font-size: 14px'>日均车流量：3000辆</div>"
                        );
                        content.push(
                            "<div style='width: 200px;text-align: left;line-height: 22px;font-size: 14px'>今日进入车辆：1867辆</div>"
                        );
                        content.push(
                            "<div style='width: 200px;text-align: left;line-height: 22px;font-size: 14px'>今日驶出车辆：1835辆</div>"
                        );
                    } else if (
                        id[0] === "新能源公司" ||
                        id[0] === "石化能源公司" ||
                        id[0] === "中化交投公司" ||
                        id[0] === "高路油站公司"
                    ) {
                        content.push(
                            "<div style='width: 200px;text-align: left;line-height: 22px;font-size: 14px'>是否开通：是</div>"
                        );
                        content.push(
                            "<div style='width: 200px;text-align: left;line-height: 22px;font-size: 14px'>便利店是否开通：是</div>"
                        );
                        content.push(
                            "<div style='width: 200px;text-align: left;line-height: 22px;font-size: 14px'>加油类型：0#  92# 95# 98#</div>"
                        );
                    } else {
                        content.push(
                            "<div style='width: 200px;text-align: center;line-height: 88px;font-size: 14px'>内容</div>"
                        );
                    }
                    let infoWindow = new AMap.InfoWindow({
                        content: content.join(""),
                        offset: new AMap.Pixel(3, -33)
                    });
                    infoWindow.on("close", function () {
                    });
                    i.setMap(v);
                });
            },
            async showSmallPiece(v, id) {
                const res = await this.$axios.get("/api/index/gis_jtservice_info_id", {params: {serviceInfoId: id}})
                let d = res.data.data;
                this.pieceData = JSON.parse(d.serviceJson);
                this.imgUrl = d.servicePicture;
                this.visible = true;
                this.$nextTick(_ => {
                    this.$refs['imgFloorPlan'].setPages(this.pieceData, this.imgUrl, d);
                })
            },
            //点聚合
            _renderClusterMarker(context) {
                let that = this;
                let count = this.marker.length;
                let factor;
                let Hue;
                factor = Math.pow(context.count / count, 1 / 18);
                Hue = 180 - factor * 180;
                let bgColor = "hsla(" + Hue + ",100%,50%,0.7)";
                let borderColor = "hsla(" + Hue + ",100%,40%,1)";
                if (
                    this.selectData.indexOf("交投服务区") !== -1 &&
                    this.selectData.length === 1
                ) {
                    factor = Math.pow(context.count / count, 1 / 18);
                    Hue = 180 - factor * 230;
                    bgColor = "hsla(" + Hue + ",100%,50%,0.7)";
                    borderColor = "hsla(" + Hue + ",100%,40%,1)";
                }
                if (
                    this.selectData.indexOf("其他服务区") !== -1 &&
                    this.selectData.length === 1
                ) {
                    factor = Math.pow(context.count / count, 1 / 18);
                    Hue = 180 - factor * 80;
                    bgColor = "hsla(" + Hue + ",0%,50%,0.7)";
                    borderColor = "hsla(" + Hue + ",0%,40%,1)";
                }
                let div = document.createElement("div");
                let fontColor = "rgba(255,255,255,1)";
                let shadowColor = "hsla(" + Hue + ",100%,50%,1)";
                div.style.backgroundColor = bgColor;
                let size = Math.round(30 + Math.pow(context.count / count, 1 / 5) * 20);
                div.style.width = div.style.height = size + "px";
                div.style.border = "solid 1px " + borderColor;
                div.style.borderRadius = size / 2 + "px";
                div.style.boxShadow = "0 0 1px " + shadowColor;
                div.innerHTML = context.count;
                div.style.lineHeight = size + "px";
                div.style.color = fontColor;
                div.style.fontSize = "14px";
                div.style.textAlign = "center";
                div.onmousemove = function () {
                    let arr = [];
                    if (context.markers.length > 0) {
                        context.markers.forEach(i => {
                            arr.push(that.position[that.marker.indexOf(i)]);
                        });
                    }
                    let ms = [];
                    let os = [];
                    let sh = [];
                    let sy = [];
                    let jt = [];
                    if (arr.length > 0) {
                        arr.forEach(i => {
                            if (i.type === "ms") {
                                ms.push(i);
                            }
                            if (i.type === "os") {
                                os.push(i);
                            }
                            if (i.type === "中石化") {
                                sh.push(i);
                            }
                            if (i.type === "中石油") {
                                sy.push(i);
                            }
                            if (i.type === "交投能源") {
                                jt.push(i);
                            }
                        });
                    }
                    let ds = document.getElementById("ds");
                    ds.innerHTML =
                        "<p>交投服务区：" +
                        ms.length +
                        "</p>" +
                        "<p>其他服务区：" +
                        os.length +
                        "</p>" +
                        "<p>中石化：" +
                        sh.length +
                        "</p>" +
                        "<p>中石油：" +
                        sy.length +
                        "</p>" +
                        "<p>交投能源：" +
                        jt.length +
                        "</p>";
                    ds.style.right = "0px";
                };
                div.onmouseout = function () {
                    let ds = document.getElementById("ds");
                    ds.style.right = "-200px";
                };
                context.marker.setOffset(new AMap.Pixel(-size / 2, -size / 2));
                context.marker.setContent(div);
            },
            refresh(d, sv, gv, center, b) {
                this.searchOption = [];
                if (!gv) {
                    gv = this.gasChecked;
                }
                if (!sv) {
                    sv = this.serviceChecked;
                }
                this.map.remove(this.marker);
                this.marker = [];
                let position = [];
                if (sv.indexOf("服务区") != -1) position.push(...this.myService, ...this.otherService);
                if (sv.indexOf("卡口") != -1) position.push(...this.bayonet);
                if (sv.indexOf("超市") != -1) position.push(...this.supermarket);
                if (sv.indexOf("收银") != -1) position.push(...[]);
                if (sv.indexOf("油站") != -1) position.push(...this.xny, ...this.shny, ...this.zhjt, ...this.glyz);
                this.searchOption = [...position];
                let map;
                if (b === "enlarge") {
                    map = new AMap.Map("MAP", {
                        center: center,
                        zoom: 20
                    });
                }
                if (b !== "enlarge") {
                    map = new AMap.Map("MAP", {
                        center: [112.34, 31.1],
                        zoom: 7
                    });
                }
                map.setMapStyle("amap://styles/" + this.mapStyleArr[d]);
                this.map = map;
                this.addMarker(map, position, d);
            }
        },
        async mounted() {
            let position = [];
            let [service, allGas, bayonet_, supermarket_] = await Promise.all([
                //服务区
                this.$axios.get("/api/index/list_gis", {
                    params: {gisType: "service"}
                }),
                //油站
                this.$axios.get("/api/index/list_gis", {
                    params: {gisType: 'station'}
                }),
                //卡口
                this.$axios.get("/api/index/list_gis", {
                    params: {gisType: "bayonet"}
                }),
                // 超市
                this.$axios.get("/api/index/list_gis", {
                    params: {gisType: "store"}
                }),
            ]);
            let data = service.data.data;
            let res = allGas.data.data;
            let bayonet = bayonet_.data.data;
            let supermarket = supermarket_.data.data;
            this.mapData.push(...data, ...res);
            if (data && data.length > 0) {
                data.forEach((i, x) => {
                    if (i.longitude && i.latitude && i.longitude != "NULL" && i.latitude != "NULL") {
                        if (i.section == "湖北交投实业发展有限公司") {
                            this.myService.push(
                                Object.assign(i, {
                                    type: "ms",
                                    oid: "ms" + "-" + i.longitude + "-" + i.latitude,
                                    searchName: i.gisName,
                                    serviceInfoId: i.serviceInfoId
                                })
                            );
                        }
                        if (i.section != "湖北交投实业发展有限公司") {
                            this.otherService.push(
                                Object.assign(i, {
                                    type: "os",
                                    oid: "os" + "-" + i.longitude + "-" + i.latitude,
                                    searchName: i.gisName
                                })
                            );
                        }
                    }
                });
            }
            if (res && res.length > 0) {
                res.forEach((i, x) => {
                    if (
                        i.longitude &&
                        i.latitude &&
                        i.longitude != "NULL" &&
                        i.latitude != "NULL"
                    ) {
                        if (i.gisCompanyName === "湖北交投新能源投资有限公司") {
                            this.xny.push(
                                Object.assign(i, {
                                    type: "新能源公司",
                                    oid: "新能源公司" + "-" + i.longitude + "-" + i.latitude,
                                    searchName: i.gisName
                                })
                            );
                        }
                        if (i.gisCompanyName === "湖北交投石化能源发展有限公司") {
                            this.shny.push(
                                Object.assign(i, {
                                    type: "石化能源公司",
                                    oid: "石化能源公司" + "-" + i.longitude + "-" + i.latitude,
                                    searchName: i.gisName
                                })
                            );
                        }
                        if (i.gisCompanyName === "中化交投（湖北）能源有限公司") {
                            this.zhjt.push(
                                Object.assign(i, {
                                    type: "中化交投公司",
                                    oid: "中化交投公司" + "-" + i.longitude + "-" + i.latitude,
                                    searchName: i.gisName
                                })
                            );
                        }
                        if (i.gisCompanyName === "湖北高速公路油站管理分公司（新）" || i.gisCompanyName === "湖北高速公路油站管理分公司") {
                            this.glyz.push(
                                Object.assign(i, {
                                    type: "高路油站公司",
                                    oid: "高路油站公司" + "-" + i.longitude + "-" + i.latitude,
                                    searchName: i.gisName
                                })
                            );
                        }
                    }
                });
            }
            if (bayonet && bayonet.length > 0) {
                bayonet.forEach((i, x) => {
                    if (
                        i.longitude &&
                        i.latitude &&
                        i.longitude != "NULL" &&
                        i.latitude != "NULL"
                    ) {
                        this.bayonet.push(
                            Object.assign(i, {
                                type: "卡口",
                                gisType: "卡口",
                                oid: "卡口" + "-" + i.longitude + "-" + i.latitude,
                                searchName: i.gisName
                            })
                        );
                    }
                });
            }
            if (supermarket && supermarket.length > 0) {
                supermarket.forEach((i, x) => {
                    if (
                        i.longitude &&
                        i.latitude &&
                        i.longitude != "NULL" &&
                        i.latitude != "NULL"
                    ) {
                        this.supermarket.push(
                            Object.assign(i, {
                                type: "中百",
                                gisType: "中百",
                                oid: "中百" + "-" + i.longitude + "-" + i.latitude,
                                searchName: i.gisName
                            })
                        );
                    }
                });
            }
            position.push(...this.myService, ...this.otherService);
            this.position.push(
                ...this.myService,
                ...this.otherService,
                ...this.bayonet,
                ...this.supermarket,
                ...this.xny,
                ...this.shny,
                ...this.zhjt,
                ...this.glyz,
            );
            this.searchOption = [...position];
            this.initMap(position);
        }
    };
</script>

<style scoped lang="less">
    .mapBox {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;

        .searchMap {
            /deep/ .el-select {
                margin: 10px 0 0 10px;

                .el-input {
                    .el-input__inner {
                        line-height: 35px;
                        height: 35px;
                        border-radius: 0;
                    }

                    .el-input__suffix {
                        .el-input__suffix-inner {
                            .el-input__icon {
                                height: 35px;
                                line-height: 35px;
                            }
                        }
                    }
                }
            }
        }

        .details {
            color: white;
            width: 160px;
            height: 110px;
            position: absolute;
            top: 30px;
            right: -200px;
            transition: linear 0.3s;
            padding: 20px;
            border-radius: 5px;
            background: rgba(0, 0, 0, 0.4);
        }

        .btn {
            width: 70px;
            padding: 10px;
            position: absolute;
            top: 0;
            right: -120px;
            background: rgba(0, 0, 0, 0.7);
            z-index: 99;
            color: white;
            margin: auto;
            transition: linear 0.4s;

            .btnIcon {
                top: 0;
                width: 30px;
                position: absolute;
                left: -30px;
                height: 30px;
                background: rgba(0, 0, 0, 0.7);
                text-align: center;
                cursor: pointer;

                i {
                    font-weight: 700;
                    line-height: 30px;
                    font-size: 20px;
                    transition: linear 0.4s;
                }
            }

            /deep/ .el-radio-group {
                .el-radio {
                    margin-right: 0;
                    line-height: 20px;

                    .el-radio__label {
                        color: white;
                    }
                }

                .is-checked {
                    .el-radio__label {
                        color: #409eff;
                    }
                }
            }
        }

        /* .btn /deep/ .el-checkbox {
             color: white;
             margin-right: 0;
           }

           .btn /deep/ .el-select {
             width: 90px;
           }

           .btn /deep/ .el-select > .el-select__tags {
             overflow: hidden;
             height: 30px;
           }

           .btn /deep/ .el-select > .el-input {
             min-width: 90px;
           }

           .btn /deep/ .el-select > .el-input > .el-input__inner {
             line-height: 30px;
             height: 30px;
             border: none;
             border-radius: 0;
             background: none;
             min-width: 90px;
             padding: 0 2px;
             color: white;
           }

           .btn /deep/ .el-select > .el-input > .el-input__inner::-webkit-input-placeholder {
             color: #cccccc;
           }

           .btn /deep/ .el-select > .el-input > .el-input__suffix {
             !*width: 20px;*!
           }

           .btn /deep/ .el-select > .el-input > .el-input__suffix > .el-input__suffix-inner > .el-input__icon {
             line-height: 30px;
             color: white;
           }*/

        #MAP {
            width: 100%;
            height: 100%;
        }

        .enlarge {
            position: absolute;
            z-index: 300;
            right: 0;
            bottom: 0;
            width: 30px;
            height: 30px;
            background: rgba(0, 0, 0, 0.5);
            border: 1px solid white;
            // z-index: 99;
            font-size: 30px;
            text-align: center;
            line-height: 30px;
            cursor: pointer;
            color: white;
        }
    }

    .mapBox /deep/ .el-dialog__wrapper > .el-dialog {
        background: #0c2348;
        color: white;
    }

    .mapBox
    /deep/
    .el-dialog__wrapper
    > .el-dialog
    > .el-dialog__header
    > .el-dialog__title {
        color: white;
    }

    .mapBox /deep/ .el-dialog__wrapper > .el-dialog > .el-dialog__header {
        padding: 10px 20px;
    }

    .mapBox /deep/ .el-dialog__wrapper > .el-dialog > .el-dialog__body {
        padding: 0;
        color: white;
    }

    .animation {
        position: absolute;
        // top: 5%;
        // right: 1%;
        z-index: 200;
    }
</style>
