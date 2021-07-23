<template>
    <div class="con_c">
        <map-base-child ref="map" @dblclickDot="dblclickDot"></map-base-child>
    </div>
</template>

<script>
    import MyDialog from "./myDialog";
    import ImgFloorPlan from "./imgFloorPlan";
    import MapBaseChild from "../MapBaseChild";

    export default {
        name: "temporary",
        components: {MapBaseChild, ImgFloorPlan, MyDialog},
        data() {
            return {
                ms: [],
                os: [],
                xny: [],
                shny: [],
                glyz: [],
                zhjt: [],
                kk: [],
                zb: []
            }
        },
        methods: {
            dblclickDot(oid, obj) {
            },
            async getMarkerData() {
                let [service, allGas, bayonet, supermarket] = await Promise.all([
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
                let s = service.data.data;
                let g = allGas.data.data;
                let b = bayonet.data.data;
                let m = supermarket.data.data;
                this.ms = await this.formatterMarker(s, 'ms-longitude-latitude', 'serviceInfoId', 'section-湖北交投实业发展有限公司', '===');
                this.os = await this.formatterMarker(s, 'os-longitude-latitude', 'serviceInfoId', 'section-湖北交投实业发展有限公司', '!==');
                this.xny = await this.formatterMarker(g, 'xny-longitude-latitude', 'serviceInfoId', 'gisCompanyName-湖北交投新能源投资有限公司', '===');
                this.shny = await this.formatterMarker(g, 'shny-longitude-latitude', 'serviceInfoId', 'gisCompanyName-湖北交投石化能源发展有限公司', '===');
                this.zhjt = await this.formatterMarker(g, 'zhjt-longitude-latitude', 'serviceInfoId', 'gisCompanyName-中化交投（湖北）能源有限公司', '===');
                this.glyz = await this.formatterMarker(g, 'glyz-longitude-latitude', 'serviceInfoId', 'gisCompanyName-湖北高速公路油站管理分公司（新）', '===');
                this.kk = await this.formatterMarker(b, 'kk-longitude-latitude', 'serviceInfoId');
                this.zb = await this.formatterMarker(m, 'zb-longitude-latitude', 'serviceInfoId');
                this.ms.forEach(i => {
                    console.log(i.searchName)
                })
            },
            /**
             * @param data 数据源
             * @param oId 拼接字段
             * @param any 额外参数
             * @param query 条件
             * @param compare 比较条件
             * */
            formatterMarker(data, oId, any, query, compare) {
                let oId_ = oId ? oId.split('-') : [];
                let query_ = query ? query.split('-') : [];
                let returnData = [];
                let condition = true;
                if (!data || data.length === 0) {
                    return returnData;
                }
                data.forEach(i => {
                    if (!!i.longitude && !!i.latitude && i.latitude !== "NULL" && i.latitude !== "NULL") {
                        if (compare && compare === '===') {
                            condition = i[query_[0]] === query_[1]
                        }
                        if (compare && compare === '!==') {
                            condition = i[query_[0]] !== query_[1]
                        }
                        if (condition) {
                            if (i[oId_[1]] && i[oId_[2]] && i[oId_[1]] !== "NULL" && i[oId_[2]] !== "NULL") {
                                Object.assign(i, {
                                    type: oId_[0],
                                    oid: oId_[0] + "-" + i[oId_[1]] + "-" + i[oId_[2]],
                                    searchName: i.gisName,
                                    serviceInfoId: any ? i[any] ? i[any] : '' : ''
                                });
                            }
                            if (i.serviceInfoVo && i.serviceInfoVo.length > 0) {
                                i.serviceInfoVo.forEach(j => {
                                    if (j[oId_[1]] && j[oId_[2]] && j[oId_[1]] !== "NULL" && j[oId_[2]] !== "NULL") {
                                        Object.assign(j, {
                                            type: oId_[0],
                                            oid: oId_[0] + "-" + j[oId_[1]] + "-" + j[oId_[2]],
                                            searchName: j.gisName,
                                            serviceInfoId: any ? j[any] ? j[any] : '' : ''
                                        });
                                    }
                                })

                            }
                            returnData.push(i)
                        }
                    }
                });
                return returnData;
            }
        },
        async mounted() {
            // await this.getMarkerData();
            let ps = [...this.ms, ...this.os];
            this.$nextTick(_ => {
                this.$refs['map'].initMap(ps);
            })
        }
    };
</script>

<style scoped lang="less">
    .con_c {
        width: 100%;
        height: 100%;
    }
</style>
