<template>
    <div :class="{'Finance':true,'FinanceColor':theme===2}">
        <div class="Finance_header flexRowStart">
            <!--头部前半部分-->
            <div class="forward flexRowStart">
                <div class="iconfont iconmenu-two"></div>
                <ul>
                    <template v-for="(i,x) in unit">
                        <li @click="unitActiveChange(x)" :class="{'unit':unitActive === x}">{{i}}</li>
                    </template>
                </ul>
            </div>
            <!--头部后半部分-->
            <div class="rear flexRowStart">
                <div class="Finance_search">
                    <el-input prefix-icon="el-icon-search" placeholder="请输入……" v-model="searchAll"></el-input>
                </div>
                <div class="Finance_operate">
                    <div class="Finance_operate_content flexRowStart">
                        <el-button size="small" @click="activeBtn=0" :class="{'activeBtn':activeBtn===0}">营收</el-button>
                        <el-button size="small" @click="activeBtn=1" :class="{'activeBtn':activeBtn===1}">成本</el-button>
                        <el-button size="small" @click="activeBtn=2" :class="{'activeBtn':activeBtn===2}">利润</el-button>
                        <div class="iconfont iconpifu" @click="changeTheme" style="cursor: pointer"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="Finance_content flexRowStart">
            <div class="Finance_content_left flexColumnStart">
                <div style="width: 100%;height: 30px"></div>
                <template v-for="(i,x) in company">
                    <div :class="{'item':true, 'flexRowStart':true,'activeItem':activeItem.indexOf(x)!==-1}"
                         @click="selectItem(x)">
                        <div class="border_left"></div>
                        <div class="text">{{i}}</div>
                    </div>
                </template>
            </div>
            <div class="Finance_content_right">
                <component :is="switchComponent" :theme="theme" @selectSBU="selectSBU"></component>
            </div>
        </div>
    </div>
</template>

<script>
    import "./less/Finance.less"
    import "./less/common.less"
    import FirstLevelPage from "./children/firstLevelPage";
    import SecondLevelPage from "./children/secondLevelPage";

    export default {
        name: "Finance",
        components: {SecondLevelPage, FirstLevelPage},
        data() {
            return {
                unit: ["首页", "财务系统", "服务区事业部", "能源事业部", "传媒事业部", "商业事业部"],
                unitActive: 0,
                activeItem: [0],
                activeBtn: 0,
                searchAll: "",
                company: ["实业公司", "服务区事业部", "能源事业部", "传媒事业部", "商业事业部"],
                theme: 1,
                switchComponent: "FirstLevelPage"
            }
        },
        methods: {
            selectSBU() {
                this.switchComponent = "SecondLevelPage"
                this.unit = ["首页", "aaaa"];
            },
            unitActiveChange(x) {
                if (this.switchComponent === "SecondLevelPage" && x === 0) {
                    this.switchComponent = "FirstLevelPage";
                    this.unit = ["首页", "财务系统", "服务区事业部", "能源事业部", "传媒事业部", "商业事业部"]
                } else {
                    this.unitActive = x;
                }
            },
            selectItem(v) {
                let IndexOf = this.activeItem.indexOf(v);
                if (IndexOf === -1) {
                    this.activeItem.push(v)
                } else {
                    this.activeItem.splice(IndexOf, 1)
                }
            },
            changeTheme() {
                this.theme = this.theme === 1 ? 2 : 1;
                this.$store.commit("changeFinance", {theme: this.theme})
            }
        }
    }
</script>