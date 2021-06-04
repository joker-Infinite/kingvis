<template>
    <div class="map">
        <map-common ref="mapCommon" :selected="selected" @mapDot="mapDot"></map-common>
        <div class="small left top" style="height: 100%">
            <img src="../../../assets/nh_img/2_01.png" style="height: 100%" alt="">
        </div>
        <div class="small top left" style="width: 100%;top:-8px">
            <img src="../../../assets/nh_img/1_01.png" style="width: 100%">
        </div>
        <div class="small right top" style="height: 100%">
            <img src="../../../assets/nh_img/3_03.png" style="height: 100%">
        </div>
        <div class="small bottom left" style="text-align: center;bottom: -7px;width: 100%">
            <img src="../../../assets/nh_img/4_05.png" style="width: 100%;">
        </div>
        <div class="console">
            <img :src="selected=='f'?require('../../../assets/nh_img/icon-1-1.png'):require('../../../assets/nh_img/icon-1.png')"
                 alt="" @click="selectBtn('服务区','f')"/>
            <img :src="selected=='y'?require('../../../assets/nh_img/icon-2-1.png'):require('../../../assets/nh_img/icon-2.png')"
                 alt="" @click="selectBtn('油站','y')"/>
            <img :src="selected=='c'?require('../../../assets/nh_img/icon-3-1.png'):require('../../../assets/nh_img/icon-3.png')"
                 alt="" @click="selectBtn('超市','c')"/>
            <img :src="selected=='k'?require('../../../assets/nh_img/icon-4-1.png'):require('../../../assets/nh_img/icon-4.png')"
                 alt="" @click="selectBtn('卡口','k')"/>
            <img :src="selected=='s'?require('../../../assets/nh_img/icon-5-1.png'):require('../../../assets/nh_img/icon-5.png')"
                 alt="" @click="selectBtn('收银','s')"/>
        </div>
    </div>
</template>

<script>
    import CenterMapBase from "../../homeKanBan/children/centerMapBase";
    import MapCommon from "../common/mapCommon";

    export default {
        name: "childCTTemp",
        components: {MapCommon, CenterMapBase},
        data() {
            return {
                selected: 'f',
                obj: {
                    f: '服务区',
                    y: '油站',
                    k: '卡口',
                    c: '超市',
                    s: '收银',
                },
                oid: ''
            }
        },
        methods: {
            selectBtn(v, m) {
                this.selected = m;
                let gasChecked = ['新能源公司', '石化能源公司', '中化交投公司', '高路油站公司'];
                this.$refs['mapCommon'].refresh(m, gasChecked);
            },
            mapDot(v) {
                this.oid = v;
                this.$store.commit('newSearchValue', {oid: v, selected: this.obj[this.selected]});
            }
        },
        mounted() {
            let searchValue = this.$store.state.searchValue;
            if (searchValue.selected !== '') {
                if (searchValue.selected === '服务区') {
                    this.selected = 'f'
                }
                if (searchValue.selected === '油站') {
                    this.selected = 'y'
                }
                if (searchValue.selected === '超市') {
                    this.selected = 'c'
                }
                if (searchValue.selected === '卡口') {
                    this.selected = 'k'
                }
                if (searchValue.selected === '收银') {
                    this.selected = 's'
                }
            }
        },
        watch: {
            selected: {
                handler: function (nc, ov) {
                    this.$store.commit('newSearchValue', {oid: '', selected: this.obj[this.selected]});
                }
            }
        }
    };
</script>

<style scoped lang="less">
    .map {
        width: 100%;
        height: calc(100% - 35px);
        position: relative;

        .small {
            position: absolute;
            z-index: 999;
        }

        .top {
            top: 0;
        }

        .left {
            left: 0;
        }

        .right {
            right: 0;
        }

        .bottom {
            bottom: 0;
        }

        .img {
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
        }

        .console {
            position: absolute;
            z-index: 9999;
            height: 35px;
            bottom: 10px;
            width: 70%;
            left: 15%;
            display: flex;
            flex-wrap: nowrap;
            flex-direction: row;
            justify-content: space-between;

            img {
                cursor: pointer;
            }
        }
    }
</style>
