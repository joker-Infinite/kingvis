<template>
    <div class="container">
        <div class="nav" id="nav">
            <el-menu
                    background-color="rgb(50, 65, 87)"
                    text-color="rgb(191, 203, 217)"
                    active-text-color="rgb(32, 160, 255)"
                    :unique-opened="true"
                    :collapse="menuStatus % 2 === 0"
                    :default-active="key"
                    router
                    style="height: 100%"
                    class="el-menu-vertical-demo"
                    @select="select">
                <div class="oc" id="oc" style="text-align: right">
                    <i :class="menuStatus % 2 === 0 ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
                       @click="menuOC"
                    ></i>
                </div>
                <div class="blank" @click="select('1')" v-if="showKanBan">
                    <i class="el-icon-menu"></i>
                    <span slot="title">首页</span>
                </div>
                <div class="blank" @click="select('2')">
                    <i class="el-icon-menu"></i>
                    <span slot="title">月度汇报</span>
                </div>
                <el-submenu
                        v-for="(item, index) in submenu"
                        v-if="showMenu(item.menuItem)"
                        :index="item.id"
                        :class="{ addTo: isActive == item.id }"
                        :key="index">
                    <template slot="title">
                        <img :src="isActive == item.id ? item.imgActive : item.img"
                             style="width: 20px;height: 20px;margin-right: 5px"/>
                        <span slot="title">{{ item.label }}</span>
                    </template>
                    <el-menu-item
                            v-if="item.menuItemUrl[cIndex]['url'].charAt(0) !== '#' &&item.menuItemUrl[cIndex]['show']"
                            v-for="(cItem, cIndex) in item.menuItem"
                            :index="item.menuItemUrl[cIndex]['url']"
                            :key="cIndex">
                        {{ cItem.name}}
                    </el-menu-item>
                    <el-submenu
                            v-for="(cItem, cIndex) in item.menuItem"
                            :index="item.menuItemUrl[cIndex]['url']"
                            v-if="item.menuItemUrl[cIndex]['url'].charAt(0) === '#'&&item.menuItemUrl[cIndex]['show']">
                        <template slot="title" v-if="item.menuItemUrl[cIndex]['url'].charAt(0) === '#'">
                            {{ cItem.name }}
                        </template>
                        <el-menu-item
                                v-for="(sItem, sIndex) in item.childMenuItem"
                                :index="item.childMenuItemUrl[sIndex]['url']"
                                v-if="item.menuItemUrl[cIndex]['url'].charAt(1) == 1&&item.menuItemUrl[cIndex]['show']"
                                :key="sIndex">
                            {{ sItem.name }}
                        </el-menu-item>
                        <el-menu-item
                                v-for="(sItem, sIndex) in item.childMenuItem"
                                :index="item.childMenuItemUrl[sIndex]['url']"
                                v-if="item.menuItemUrl[cIndex]['url'].charAt(1) == 3&&item.menuItemUrl[cIndex]['show']"
                                :key="sIndex">
                            {{ sItem.name }}
                        </el-menu-item>
                    </el-submenu>
                </el-submenu>
            </el-menu>
        </div>
        <div class="con" id="con_">
            <router-view
                    :viewChange="menuStatus % 2 === 0"
                    @clickTable="clickTable"
            ></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                submenu: [
                    {
                        id: "2",
                        label: "服务区事业部",
                        img: require("../assets/Home/2.png"),
                        imgActive: require("../assets/Home/1.png"),
                        menuItem: [
                            {name: ">>服务区比对", show: true},
                            {name: ">>服务区营收", show: true},
                            {name: ">>服务区利润", show: true},
                            {name: ">>服务区成本", show: true},
                            {name: ">>基础信息", show: true},
                            {name: ">>业态结构", show: true},
                            {name: ">>应收账款", show: true},
                            {name: ">>供应商", show: true},
                            {name: ">>用户评价", show: true},
                            {name: ">>服务区片区", show: true},
                            {name: ">>服务区线路", show: true}
                        ],
                        menuItemUrl: [
                            {url: "/serviceArea/compared", show: true},
                            {url: "/serviceArea/revenue", show: true},
                            {url: "/serviceArea/profit", show: true},
                            {url: "/serviceArea/costing", show: true},
                            {url: "/serviceArea/basicInformation", show: true},
                            {url: "/serviceArea/construction", show: true},
                            {url: "/serviceArea/rateOfReturn", show: true},
                            {url: "/serviceArea/comment", show: true},
                            {url: "/serviceArea/supplier", show: true},
                            {url: "#1", show: true},
                            {url: "#2", show: true}
                        ],
                        childMenuItem: [
                            {name: ">>>黄冈分公司", show: true},
                            {name: ">>>恩施分公司", show: true},
                            {name: ">>>宜昌分公司", show: true},
                            {name: ">>>咸宁分公司", show: true},
                            {name: ">>>孝感分公司", show: true},
                            {name: ">>>十堰分公司", show: true}
                        ],
                        childMenuItemUrl: [
                            {url: '/serviceArea/huangGang', show: true},
                            {url: '/serviceArea/enShi', show: true},
                            {url: '/serviceArea/yiChang', show: true},
                            {url: '/serviceArea/xianNing', show: true},
                            {url: '/serviceArea/xiaoGan', show: true},
                            {url: '/serviceArea/shiYan', show: true}
                        ]
                    },
                    {
                        id: "3",
                        label: "能源事业部",
                        img: require("../assets/Home/10.png"),
                        imgActive: require("../assets/Home/3.png"),
                        menuItem: [
                            {name: '>>能源营收', show: true},
                            {name: '>>能源利润', show: true},
                            {name: '>>预算控制', show: true},
                            {name: '>>批零差价', show: true},
                            {name: '>>能源零售', show: true},
                            {name: '>>油品批发', show: true},
                            {name: '>>应收账款', show: true},
                            {name: '>>油库来源', show: true},
                            {name: '>>能源子公司', show: true},
                            {name: '>>能源线路', show: true}
                        ],
                        menuItemUrl: [
                            {url: '/energy/energyrevenue', show: true},
                            {url: '/energy/profit', show: true},
                            {url: '/energy/budgetControl', show: true},
                            {url: '/energy/wholesale', show: true},
                            {url: '/energy/gasRetail', show: true},
                            {url: '/energy/gasWholesale', show: true},
                            {url: '/energy/accountsReceivable', show: true},
                            {url: '/energy/gasSource', show: true},
                            {url: '#3', show: true},
                            {url: '#4', show: true}
                        ],
                        childMenuItem: [
                            {name: '>>>中化交投', show: true},
                            {name: '>>>新能源', show: true},
                            {name: '>>>中石化', show: true},
                            {name: '>>>国储', show: true},
                            {name: '>>>高路油站', show: true},
                            {name: '>>>荆港嘉瑞', show: true}
                        ],
                        childMenuItemUrl: [
                            {url: '/energy/zhongHuaJiaoTou', show: true},
                            {url: '/energy/xinNengYuan', show: true},
                            {url: '/energy/zhongShiHua', show: true},
                            {url: '/energy/guoChu', show: true},
                            {url: '/energy/gaoLuYouZhan', show: true},
                            {url: '/energy/jingGangJiaRui', show: true}
                        ]
                    },
                    /*  {
                            id: "4",
                            label: "能源公司",
                            img: require("../assets/Home/8.png"),
                            imgActive: require("../assets/Home/9.png"),
                            menuItem: ['>>数据总览', ">>中化交投", ">>石化能源", ">>新能源"],
                            menuItemUrl: [
                                '/energy/energy',
                                '/energy/ZHJiaoTou',
                                '/comparison/comparison',
                                '/comparison/comparison'
                            ]
                        },
                        {
                            id: "5",
                            label: "能源业务",
                            img: require("../assets/Home/6.png"),
                            imgActive: require("../assets/Home/7.png"),
                            menuItem: [">>批发", ">>油品零售", ">>非油品零售", ">>直分销", ">>大宗采购"],
                            menuItemUrl: [
                                '/energy/piFa',
                                '/energy/YPLingShou',
                                '/energy/FYPLingShou',
                                '/energy/FYPLingShou',
                                '/energy/FYPLingShou',
                            ]
                        },*/
                    {
                        id: "6",
                        label: "传媒事业部",
                        img: require("../assets/Home/4.png"),
                        imgActive: require("../assets/Home/5.png"),
                        menuItem: [
                            {name: '>>传媒营收', show: true},
                            {name: '>>传媒利润', show: true},
                            {name: '>>传媒成本', show: true},
                            {name: '>>基础信息', show: true}
                        ],
                        menuItemUrl: [
                            {url: '/media/mediarevenue', show: true},
                            {url: '/media/mediaprofit', show: true},
                            {url: '/media/mediacosting', show: true},
                            {url: '/media/mediaAreaNumber', show: true}
                        ]
                    },
                    {
                        id: "7",
                        label: "商业事业部",
                        img: require("../assets/Home/4.png"),
                        imgActive: require("../assets/Home/5.png"),
                        menuItem: [
                            {name: '>>商业营收', show: true},
                            {name: '>>商业利润', show: true},
                            {name: '>>商业成本', show: true},
                            {name: '>>中百比对', show: true},
                            {name: '>>应收管理', show: true}
                        ],
                        menuItemUrl: [
                            {url: '/business/businessrevenue', show: true},
                            {url: '/business/businessprofit', show: true},
                            {url: '/business/businesscosting', show: true},
                            {url: '/business/comparison', show: true},
                            {url: '/business/rateOfReturn', show: true}
                        ]
                    },
                ],
                tagData: [],
                key: "/serviceArea/revenue",
                menuStatus: 1,
                isActive: "/serviceArea/revenue",
                openData: "",
                userPages: []
            };
        },
        computed: {
            async showKanBan() {
                let type;
                await this.userPages.forEach(i => {
                    type = i.muenUrl == '/homeKanBan';
                });
                return type;
            }
        },
        methods: {
            showMenu(data) {
                let flag = 0;
                for (let i in data) {
                    if (data[i].show) {
                        flag++;
                    }
                }
                return flag > 0;
            },
            clickTable(v) {
                this.setCookie(
                    document.cookie.split("=")[1].split("-")[0],
                    "/details/serviceDetails"
                );
            },
            menuOC() {
                this.menuStatus++;
                let nav = document.querySelector("#nav");
                let con = document.querySelector("#con_");
                if (this.menuStatus % 2 === 0) {
                    Object.assign(nav.style, {
                        minWidth: "0",
                        width: "64px"
                    });
                    Object.assign(con.style, {
                        width: "100%"
                    });
                } else {
                    Object.assign(nav.style, {
                        minWidth: "200px",
                        width: "10%"
                    });
                    Object.assign(con.style, {
                        width: "90%"
                    });
                }
            },
            select(k, n, m) {
                if (k == "1") {
                    let routeData = this.$router.resolve({
                        path: "/homeKanBan".replace("#", "")
                    });
                    window.open(routeData.href, "_blank");
                } else if (k == "2") {
                    let routeData = this.$router.resolve({
                        path: "/WorkReport".replace("#", "")
                    });
                    window.open(routeData.href, "_blank");
                } else {
                    this.setCookie(k, "");
                }
            },
            getCookie() {
                let cookie = document.cookie;
                if (cookie) {
                    let path = cookie.split("=")[1].split("-");
                    this.key = path[0];
                    if (path[1] && path[1].length > 1) {
                        this.$router.push(path[1].url);
                    } else {
                        this.$router.push(path[0].url);
                    }
                }
            },
            setCookie(v, key) {
                this.key = v;
                document.cookie = "menu=" + v + "-" + key;
            }
        },
        mounted() {
            this.getCookie();
            window.onbeforeunload = function (e) {
                let storage = window.localStorage;
                storage.clear()
            }
        },
        /*created() {
            let userPage = JSON.parse(localStorage.getItem('userPages'));
            this.userPages = JSON.parse(JSON.stringify(userPage));
            let urls = userPage.map(i => {
                return i.muenUrl;
            });
            this.submenu.forEach((item, index) => {
                item.menuItemUrl.forEach((it, ix) => {
                    if (urls.indexOf(it.url) !== -1) {
                        it.show = true;
                        item.menuItem[ix].show = true;
                    } else {
                        it.show = false;
                        item.menuItem[ix].show = false;
                    }
                });
                if (item.childMenuItemUrl && item.childMenuItemUrl.length > 0) {
                    item.childMenuItemUrl.forEach((cit, cix) => {
                        if (urls.indexOf(cit.url) !== -1) {
                            cit.show = true;
                            item.childMenuItem[cix].show = true;
                        } else {
                            cit.show = false;
                            item.childMenuItem[cix].show = false;
                        }
                    })
                }
            })
        }*/
    };
</script>

<style scoped lang="less">
    .container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: left;

        .nav {
            min-width: 210px;
            height: 100%;
            overflow-y: scroll;
            transition: linear 0.3s;
            background: white;
            margin-right: 5px;
            box-shadow: 1px 10px 10px rgba(0, 0, 0, 0.1);

            .oc {
                margin-right: 20px;
            }

            .oc > i {
                font-size: 20px;
                line-height: 25px;
                cursor: pointer;
                color: #909399;
            }

            .blank {
                font-size: 14px;
                padding: 0 20px;
                cursor: pointer;
                transition: border-color .3s, background-color .3s, color .3s;
                box-sizing: border-box;
                color: rgb(191, 203, 217);
                background-color: rgb(50, 65, 87);

                i {
                    font-size: 20px;
                }

                span {
                    line-height: 56px;
                }
            }

            .blank:hover {
                background: #283446;
            }

            .addTo {
                background: #1d7dca !important;
            }

            .addTo > .el-submenu__title > span {
                color: white;
            }

            .addTo /deep/ .el-submenu__title > i {
                color: white !important;
            }

            /deep/ .el-menu {

                .el-submenu:hover {
                    background-color: rgb(40, 52, 70) !important;

                    .el-submenu__title:hover {
                        background-color: rgb(40, 52, 70) !important;
                    }
                }

                .el-menu-item:hover {
                    background-color: rgb(40, 52, 70) !important;
                }
            }
        }

        .nav::-webkit-scrollbar {
            display: none;
        }

        .nav /deep/ .el-menu {
            background: white;
            transition: linear 0.3s;
            border-right: none;
        }

        .con {
            width: 89.5%;
            /*height: calc(100% - 40px);*/
            height: 100%;
            background: #f3f7ff;

            .history {
                z-index: 1111;
                width: 85%;
                margin-left: 1.3%;
                height: 40px;
                background: #f3f7ff;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                overflow-x: scroll;
            }

            .history::-webkit-scrollbar {
                display: none;
            }

            .history /deep/ .el-tag {
                margin: 4px;
                border-radius: 0;
                cursor: pointer;
                min-width: 75px;
                text-align: center;
            }

            .is-active {
                background: #1d7dca;
                color: white;
                border: 1px solid #1d7dca;
            }

            .is-active /deep/ .el-tag__close {
                color: white;
            }
        }
    }
</style>
