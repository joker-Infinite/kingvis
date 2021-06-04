<template>
    <div class="map">
        <div class="searchMap" style="width: 20%;position:absolute;top:25px;left: 40px;z-index: 99">
            <el-select v-model="searchSelect" filterable @change="searchMapDot(searchSelect)">
                <el-option v-for="(i,x) in searchOption" :key="x" :value="i.oid" :label="i.searchName"></el-option>
                <div slot="prefix">
                    <div style="width: 25px;height: 35px;line-height: 35px;text-align: center;font-size: 16px"
                         class="el-icon-search">
                    </div>
                </div>
            </el-select>
        </div>
        <div id="MAP"></div>
        <el-dialog
                :title="serviceName + '服务区'"
                align="center"
                width="1240px"
                :modal-append-to-body="false"
                :visible.sync="visible">
            <img-floor-plan ref="imgFloorPlan" location="homeKanBan"></img-floor-plan>
        </el-dialog>
    </div>
</template>

<script>
    import ImgFloorPlan from "../../../components/common/imgFloorPlan";

    export default {
        name: "mapCommon",
        components: {ImgFloorPlan},
        props: {
            selected: {
                type: String,
                default: 'f'
            }
        },
        data() {
            return {
                serviceName: '',
                visible: false,
                searchSelect: '',
                searchOption: [],
                mapData: [],
                myService: [],
                otherService: [],
                allPosition: [],
                supermarket: [],
                xny: [],
                shny: [],
                zhjt: [],
                glyz: [],
                bayonet: [],
                position: [],
                backdrop: 2,
                mapStyleArr: [
                    '8cb6df918ee512eae9c9198c38a40c91',
                    "fresh",
                    "darkblue",
                    "blue"
                ],
                gasChecked: ['新能源公司', '石化能源公司', '中化交投公司', '高路油站公司'],
                pieceData: [],
                imgUrl: ''
            }
        },
        methods: {
            initMap(position) {
                let searchValue = this.$store.state.searchValue;
                let center = [112.34, 31.1];
                let zoom = 7;
                if (searchValue.oid !== '') {
                    this.searchSelect = searchValue.oid;
                    let data = searchValue.oid.split('-');
                    center = [data[1], data[2]];
                    zoom = 20;
                    if (data[0] === 'ms' || data[0] === 'os') {
                        position = this.allPosition.f;
                        this.searchOption = this.allPosition.f;
                    }
                    if (data[0] === '新能源公司' || data[0] === '石化能源公司' || data[0] === '中化交投公司' || data[0] === '高路油站公司') {
                        position = this.allPosition.y
                        this.searchOption = this.allPosition.y
                    }
                    if (data[0] === '卡口') {
                        position = this.allPosition.k
                        this.searchOption = this.allPosition.k
                    }
                    if (data[0] === '中百') {
                        position = this.allPosition.c
                        this.searchOption = this.allPosition.c
                    }
                    if (data[0] === '收银') {
                        position = this.allPosition.s
                        this.searchOption = this.allPosition.s
                    }
                } else {
                    if (!!searchValue.selected) {
                        if (searchValue.selected === '服务区') {
                            position = this.allPosition.f;
                            this.searchOption = this.allPosition.f;
                        }
                        if (searchValue.selected === '油站') {
                            position = this.allPosition.y
                            this.searchOption = this.allPosition.y
                        }
                        if (searchValue.selected === '卡口') {
                            position = this.allPosition.k
                            this.searchOption = this.allPosition.k
                        }
                        if (searchValue.selected === '超市') {
                            position = this.allPosition.c
                            this.searchOption = this.allPosition.c
                        }
                        if (searchValue.selected === '收银') {
                            position = this.allPosition.s
                            this.searchOption = this.allPosition.s
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
                        if (item.type === "ms")
                            icon = require("../../../assets/gas/service-k.png");
                        if (item.type === "os")
                            icon = require("../../../assets/gas/service-c.png");
                        if (item.type === "新能源公司")
                            icon = require("../../../assets/gas/新能源.png");
                        if (item.type === "石化能源公司")
                            icon = require("../../../assets/gas/zsh_a.png");
                        if (item.type === "中化交投公司")
                            icon = require("../../../assets/gas/中化交投.png");
                        if (item.type === "高路油站公司")
                            icon = require("../../../assets/gas/高路油站.png");
                        if (item.type === "卡口")
                            icon = require("../../../assets/gas/kk.png");
                        if (item.type === "中百")
                            icon = require("../../../assets/gas/zb.png");
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
                                serviceInfoId: item.gisServiceInfoId
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
                            await that.showSmallPiece(i.gisName, i.serviceInfoId);
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
                            let arr = i.oid.split("-");
                            let position_ = [arr[1], arr[2]];
                            that.$store.commit('newSearchValue', {oid: i.oid, selected: that.selected});
                            that.refresh(that.selected, "", position_, "enlarge");
                        }, 200);
                    });
                    let content = [];
                    let id = i.oid.split("-");
                    content.push(
                        "<div style='width: 200px;text-align: center;font-weight: 700'>" +i.gisName +"</div>"
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
            refresh(sv, gv, center, b) {
                if (!gv) {
                    gv = this.gasChecked;
                }
                if (!sv) {
                    sv = this.selected;
                }
                this.map.remove(this.marker);
                this.marker = [];
                let position = [];
                if (sv === 'f') position.push(...this.myService, ...this.otherService);
                if (sv === 'k') position.push(...this.bayonet);
                if (sv === 'c') position.push(...this.supermarket);
                if (sv === 's') position.push(...[]);
                if (sv === 'y') position.push(...this.xny, ...this.shny, ...this.zhjt, ...this.glyz);
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
                map.setMapStyle("amap://styles/" + this.mapStyleArr[2]);
                this.map = map;
                this.addMarker(map, position);
            },
            searchMapDot(select) {
                let d = select.split('-');
                let position = [d[1], d[2]];
                this.refresh(this.selected, '', position, 'enlarge');
                this.$emit('mapDot', this.searchSelect);
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
            this.mapData.push(...data, ...res, ...bayonet);
            if (data && data.length > 0) {
                data.forEach((i, x) => {
                    if (
                        i.longitude &&
                        i.latitude &&
                        i.longitude != "NULL" &&
                        i.latitude != "NULL"
                    ) {
                        if (i.section === "湖北交投实业发展有限公司") {
                            this.myService.push(
                                Object.assign(i, {
                                    type: "ms",
                                    oid: "ms" + "-" + i.longitude + "-" + i.latitude,
                                    searchName: i.gisName,
                                    serviceInfoId: i.gisServiceInfoId
                                })
                            );
                        }
                        if (i.section !== "湖北交投实业发展有限公司") {
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
            this.allPosition = {
                //服务区
                f: [...this.myService, ...this.otherService],
                //加油站
                y: [...this.xny, ...this.shny, ...this.zhjt, ...this.glyz],
                //卡口
                k: this.bayonet,
                //超市
                c: this.supermarket,
                //收银
                s: []
            };
            this.searchOption = [...this.myService, ...this.otherService];
            position.push(...this.myService, ...this.otherService);
            this.initMap(position);
        },
        watch: {
            selected: {
                handler: function (nv, ov) {
                    this.searchSelect = '';
                    this.searchOption = this.allPosition[nv];
                },
                deep: true
            }
        }
    }
</script>

<style scoped lang="less">
    .map {
        width: 100%;
        height: 100%;
        position: relative;

        #MAP {
            width: 100%;
            height: 100%;
        }

        .searchMap {
            /deep/ .el-select {
                margin: 10px 0 0 10px;

                .el-input {
                    .el-input__inner {
                        line-height: 35px;
                        height: 35px;
                        border-radius: 0;
                        color: white;
                        border: none;
                        background: none;
                        background-image: linear-gradient(to right,
                        rgba(33, 122, 255, 0.1),
                        rgba(33, 122, 255, 0.7),
                        rgba(33, 122, 255, 0.1),);
                    }

                    .el-input__suffix {
                        .el-input__suffix-inner {
                            .el-input__icon {
                                color: white;
                                height: 35px;
                                line-height: 35px;
                            }
                        }
                    }
                }
            }
        }
    }

    .map /deep/ .el-dialog__wrapper > .el-dialog {
        background: #0c2348;
        color: white;
    }

    .map
    /deep/
    .el-dialog__wrapper
    > .el-dialog
    > .el-dialog__header
    > .el-dialog__title {
        color: white;
    }

    .map /deep/ .el-dialog__wrapper > .el-dialog > .el-dialog__header {
        padding: 10px 20px;
    }

    .map /deep/ .el-dialog__wrapper > .el-dialog > .el-dialog__body {
        padding: 0;
        color: white;
    }
</style>