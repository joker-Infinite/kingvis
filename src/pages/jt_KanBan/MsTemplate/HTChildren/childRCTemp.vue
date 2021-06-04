<template>
    <div class="RCT" v-loading="loadIng"
         element-loading-text="拼命加载中……"
         element-loading-spinner="el-icon-loading"
         element-loading-background="rgba(0, 0, 0, 0.8)">
        <div>
            <el-select v-model="selected" @change="selectType(selected)">
                <el-option :value="1" label="服务区"></el-option>
                <el-option :value="2" label="自营油站"></el-option>
                <el-option :value="3" label="自营超市"></el-option>
                <el-option :value="4" label="服务区招商"></el-option>
            </el-select>
        </div>
        <div class="table">
            <table border="1" cellspacing="0">
                <tr>
                    <td class="tts">名称</td>
                    <td :class="{selected:changeValue===1, 'tt':true}" @click="changeType(1)">营收
                        <div class="mask" v-if="changeValue===1"></div>
                    </td>
                    <td :class="{selected:changeValue===2, 'tt':true}" @click="changeType(2)">利润
                        <div class="mask" v-if="changeValue===2"></div>
                    </td>
                    <td :class="{selected:changeValue===3, 'tt':true}" @click="changeType(3)">客单价
                        <div class="mask" v-if="changeValue===3"></div>
                    </td>
                    <td :class="{selected:changeValue===4, 'tt':true}" @click="changeType(4)">订单数
                        <div class="mask" v-if="changeValue===4"></div>
                    </td>
                    <td :class="{selected:changeValue===5, 'tt':true}" @click="changeType(5)">转化率
                        <div class="mask" v-if="changeValue===5"></div>
                    </td>
                </tr>
                <tr v-for="(i,x) in tableData">
                    <td class="mc">
                        <span style="display: inline-block;width: 100px;overflow: hidden;line-height: 30px; text-overflow: ellipsis;
                        white-space: nowrap;" :title="i.name">{{i.name}}</span></td>
                    <td class="ys">{{i.sumMoney}}</td>
                    <td class="lr"></td>
                    <td class="kdj">{{i.onePrice}}</td>
                    <td class="dds">{{i.orderNum}}</td>
                    <td class="zhl">{{i.zhuanHuan}}%</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "childRCTemp",
        data() {
            return {
                selected: 1,
                changeValue: 1,
                tableData: [],
                loadIng: false
            }
        },
        methods: {
            selectType(v) {
                this.selected = v;
                this.getTableData(v, this.changeValue);
            },
            /**
             * @param selected  业务
             * @param changeValue 业态
             * */
            async getTableData(selected, changeValue) {
                this.loadIng = true;
                let url;
                let param = {type: ''};
                if (selected === 1) url = '/sundry/service_data_orderby_list';
                if (selected === 2) url = '/sundry/station_data_orderby_list';
                if (selected === 3) url = '/sundry/shop_data_orderby_list';
                if (changeValue === 1) param.type = 'sumMoney';
                if (changeValue === 2) param.type = '';
                if (changeValue === 3) param.type = 'onePrice';
                if (changeValue === 4) param.type = 'orderNum';
                if (changeValue === 5) param.type = 'ZhuanHuan';
                const res = await this.$axios.get('/api' + url, {params: param});
                this.tableData = [];
                this.tableData = res.data.data;
                await new Promise(resolve => {
                    setTimeout(() => {
                        resolve();
                    }, 500);
                });
                this.loadIng = false;
            },
            changeType(v) {
                this.changeValue = v;
                this.getTableData(this.selected, v);
            }
        },
        mounted() {
            // this.getTableData(1, 1);
        }
    };
</script>

<style scoped lang="less">
    .RCT {
        width: 100%;
        height: 100%;

        div {
            width: 100%;
            margin: 0 0 10px;
            text-align: right;

            /deep/ .el-select {
                width: 100px;
                height: 30px;
                background-repeat: no-repeat;
                background-image: url("../../../../assets/showOffHome/home3/fuwuq_03.png");
                background-size: 100% 100%;

                .el-input {
                    height: 30px;

                    .el-input__inner {
                        line-height: 30px;
                        height: 30px;
                        background: none;
                        border: none;
                        color: white;
                    }

                    .el-input__suffix {
                        .el-input__suffix-inner {
                            .el-input__icon {
                                line-height: 30px;
                            }
                        }
                    }
                }
            }
        }

        .table {
            width: 100%;
            height: calc(100% - 28px);
            color: white;

            table {
                border-collapse: collapse;
                width: 99%;
                text-align: center;

                tr {
                    td {
                        position: relative;

                        .mask {
                            top: 0;
                            position: absolute;
                            height: 700%;
                            background-image: linear-gradient(rgba(86, 228, 255, 0.31),
                            rgba(86, 228, 255, 0),);
                        }
                    }
                }

                tr:nth-child(n) {
                    background-image: linear-gradient(to right,
                    rgba(33, 122, 255, 0),
                    rgba(33, 122, 255, 0.4),
                    rgba(33, 122, 255, 0),);
                }

                tr:nth-child(2n) {
                    background: none;
                }

                .tt {
                    font-weight: 700;
                    font-size: 15px;
                    cursor: pointer;
                }

                .tts {
                    font-weight: 700;
                    font-size: 15px;
                }

                .selected {
                    color: #ffe55d;
                }

                .ys {
                    color: #00e5ed;
                }

                .lr {
                    color: #ff6a6a
                }

                .zhl {
                    color: #1db7fa;
                }
            }

            table,
            th,
            td {
                border: none;
                line-height: 25px;
                font-size: 14px;
            }
        }
    }
</style>
