<template>
    <div class="compared">
        <div class="content">
            <div class="header_">
                <div class="h_c">
                    <el-form :model="searchForm" label-width="80px">
                        <el-col :span="6">
                            <el-form-item label="时间">
                                <el-time-picker v-model="searchForm.time"></el-time-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="服务区">
                                <el-select v-model="searchForm.service"></el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="模板">
                                <el-select v-model="searchForm.mb"></el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-button type="primary">确定</el-button>
                            <el-button type="primary">清除</el-button>
                            <el-button type="primary">保存模板</el-button>
                        </el-col>
                    </el-form>
                </div>
            </div>
            <div class="con_">
                <div class="con_header">
                    <ul class="tabs">
                        <li :class="{'isActive':navActive===1}" @click="navigationClick(1)">基础信息</li>
                        <li :class="{'isActive':navActive===2}" @click="navigationClick(2)">经营对比</li>
                        <li :class="{'isActive':navActive===3}" @click="navigationClick(3)">业态对比</li>
                        <li :class="{'isActive':navActive===4}" @click="navigationClick(4)">品牌分类</li>
                    </ul>
                    <ul class="service_card">
                        <li>
                            <div class="base">
                                <p>服务区基本信息</p>
                                <el-radio-group v-model="selfRadio">
                                    <el-radio :value="1" label="全部"></el-radio>
                                    <el-radio :value="2" label="自定义"></el-radio>
                                </el-radio-group>
                            </div>
                        </li>
                        <li class="select">
                            <service-card :form="first"></service-card>
                        </li>
                        <li class="select">
                            <service-card></service-card>
                        </li>
                        <li class="select">
                            <service-card></service-card>
                        </li>
                        <li class="select">
                            <service-card></service-card>
                        </li>
                    </ul>
                </div>
                <div class="con_content" id="con_content">
                    <el-collapse id="collapse" v-model="collapseActive">
                        <el-collapse-item title="基础信息" name="1" id="collapse1">
                            <collapse-table @cellCheck="cellCheck" type="base"></collapse-table>
                        </el-collapse-item>
                        <el-collapse-item title="经营对比" name="2" id="collapse2">
                            <collapse-table @cellCheck="cellCheck" type="operating"></collapse-table>
                        </el-collapse-item>
                        <el-collapse-item title="业态对比" name="3" id="collapse3">
                            <collapse-table @cellCheck="cellCheck" type="format"></collapse-table>
                        </el-collapse-item>
                        <el-collapse-item title="品牌分类" name="4" id="collapse4">
                            <collapse-table @cellCheck="cellCheck" type="brand"></collapse-table>
                        </el-collapse-item>
                    </el-collapse>
                </div>
            </div>
        </div>
        <div class="navigation">
            <ul class="nav_">
                <li>
                    <i class="el-icon-date sIcon"></i>
                    选择时间
                </li>
                <li>
                    <i class="el-icon-place sIcon"></i>
                    服务区
                </li>
                <li>
                    <i class="el-icon-coin sIcon"></i>
                    选择模板
                </li>
                <li :class="{'navActive':navActive===1}" @click="navigationClick(1)">
                    <i class="el-icon-setting sIcon"></i>
                    基础信息
                </li>
                <li :class="{'navActive':navActive===2}" @click="navigationClick(2)">
                    <i class="el-icon-data-analysis sIcon"></i>
                    经营对比
                </li>
                <li :class="{'navActive':navActive===3}" @click="navigationClick(3)">
                    <i class="el-icon-pie-chart sIcon"></i>
                    业态对比
                </li>
                <li :class="{'navActive':navActive===4}" @click="navigationClick(4)">
                    <i class="el-icon-star-on sIcon"></i>
                    品牌分类
                </li>
                <li>
                    <i class="el-icon-caret-top sIcon"></i>
                    返回顶部
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import ServiceCard from "./children/serviceCard";
    import CollapseTable from "./children/collapseTable";

    export default {
        name: "compared",
        components: {CollapseTable, ServiceCard},
        data() {
            return {
                searchForm: {
                    time: '',
                    service: '',
                    mb: ''
                },
                first: {
                    name: 'XXXXX',
                    location: 'XXX高速-XXX服务区'
                },
                selfRadio: 1,
                navActive: 1,
                collapseActive: ['1', '2', '3', '4']
            }
        },
        methods: {
            cellCheck(checked, row, index, type) {
                console.log(type);
            },
            navigationClick(v) {
                document.querySelector("#collapse" + v).scrollIntoView(true);
            },
            scrollChange() {
                document.getElementById('con_content').addEventListener("scroll", _ => {
                    let collapse = [];
                    let scrollTop = document.getElementById('con_content').scrollTop;
                    for (let i = 1; i < 5; i++) {
                        let id = 'collapse' + i;
                        collapse.push((document.getElementById(id).offsetTop - document.getElementById('collapse').offsetTop))
                    }
                    for (let i = 0; i < collapse.length; i++) {
                        if (i < collapse.length - 1) {
                            if (scrollTop >= collapse[i] && scrollTop < collapse[i + 1]) {
                                this.navActive = i + 1;
                                break;
                            }
                        }
                        if (i === collapse.length - 1) {
                            if (scrollTop >= collapse[i]) {
                                this.navActive = collapse.length;
                                break;
                            }
                        }
                    }
                })
            }
        },
        mounted() {
            this.scrollChange();
        }
    }
</script>

<style scoped lang="less">
    .compared {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;

        .content {
            width: calc(100% - 90px);
            height: calc(100% - 20px);
            padding: 10px 0;
            display: flex;
            flex-wrap: nowrap;
            flex-direction: column;
            justify-content: space-between;

            .header_ {
                width: 100%;
                height: 40px;
                padding: 20px 0;
                border-radius: 2px;
                background: #FFF;
                box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .3);

                .h_c {
                    width: calc(100% - 40px);
                    height: 40px;
                    margin: 0 20px;
                }
            }

            .con_ {
                width: 100%;
                height: calc(100% - 100px);
                border-radius: 2px;
                background: #FFF;
                overflow: hidden;
                box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .3);

                .con_header {
                    width: 100%;
                    height: 220px;
                    display: flex;
                    flex-direction: column;
                    flex-wrap: nowrap;
                    justify-content: space-between;

                    .tabs {
                        list-style: none;
                        width: 90%;
                        margin: 0 5%;
                        border-bottom: 1px solid rgba(187, 187, 187, 0.71);
                        height: 42px;

                        li {
                            cursor: pointer;
                            padding: 10px;
                            float: left;
                            border-bottom: 2px solid rgba(187, 187, 187, 0);
                        }

                        .isActive {
                            border-bottom: 2px solid #1a73e8;
                            color: #1a73e8;
                        }
                    }

                    .service_card {
                        width: 100%;
                        height: 150px;
                        list-style: none;
                        display: flex;
                        flex-wrap: nowrap;
                        flex-direction: row;
                        justify-content: space-around;
                        border-bottom: 1px solid rgba(187, 187, 187, 0.71);
                        border-top: 1px solid rgba(187, 187, 187, 0.71);

                        li {
                            width: calc(20% - 1px);
                            height: 100%;
                            border-right: 1px solid rgba(187, 187, 187, 0.71);
                            overflow: hidden;

                            .base {
                                width: 70%;
                                height: 80%;
                                margin: 5% 15%;

                                p {
                                    width: 100%;
                                    font-size: 18px;
                                    line-height: 40px;
                                }

                                /deep/ .el-radio-group {
                                    .el-radio {
                                        width: 100%;
                                        line-height: 30px;
                                    }
                                }
                            }
                        }

                        li:last-child {
                            border: none;
                        }

                        .select {
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            flex-wrap: nowrap;
                        }
                    }
                }

                .con_content {
                    width: 100%;
                    height: calc(100% - 220px);
                    overflow-y: scroll;
                    scroll-behavior: smooth;

                    /deep/ .el-collapse {
                        height: 100%;
                        border-top: none;

                        .el-collapse-item {
                            div {
                                .el-collapse-item__header {
                                    background: #4495E6;
                                    font-size: 16px;
                                    text-indent: 20px;
                                    color: white;

                                    .el-collapse-item__arrow {
                                        text-indent: 0;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            .con_content::-webkit-scrollbar {
                display: none;
            }
        }

        .navigation {
            width: 60px;
            height: 100%;
            position: relative;

            .nav_ {
                width: 60px;
                height: 700px;
                background: #FFF;
                box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .3);
                list-style: none;
                display: flex;
                flex-direction: column;
                flex-wrap: nowrap;
                justify-content: center;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto;

                li {
                    width: 50%;
                    padding: 0 25%;
                    min-height: 70px;
                    border-bottom: 1px solid rgba(187, 187, 187, 0.71);
                    font-size: 14px;
                    line-height: 18px;
                    cursor: pointer;

                    .sIcon {
                        font-size: 22px;
                        line-height: 30px;
                        width: 100%;
                        text-align: center;
                    }
                }

                .navActive {
                    color: #4495E6;
                }

                li:first-child {
                    border-top: 1px solid rgba(187, 187, 187, 0.71);
                }
            }
        }
    }
</style>