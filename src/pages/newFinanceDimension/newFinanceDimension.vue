<template>
    <div class="newFinanceDimension" v-loading="loading">
        <div class="header">
            财务-{{item[index]["label"]}}
            <div class="breadcrumb">
                <template v-for="(i,x) in breadcrumb">
                    <span style="cursor: pointer" @click="breadcrumbDel(x)">{{i}}</span>
                    <span class="slash" v-if="x!==breadcrumb.length-1"> > </span>
                </template>
            </div>
            <div class="content_top" v-if="pageLevel!==2">
                <div class="item" v-for="(i,x) in item" @click="changeType(x,i['type'])">
                    <div class="item_container" :style="{color: x===index?'#4769e9':'#333'}">
                        <div :class="{'item_title':true,'activeStyle':x===index}">
                            {{i.label}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="content_bottom" :style="{height: pageLevel===2?'100%':''}">
                <finance-dimension-first ref="0" v-if="pageLevel===0" @clearLoading="clearLoading"
                                         @changePages="changePages"></finance-dimension-first>
                <finance-dimension-second ref="1" v-if="pageLevel===1" @clearLoading="clearLoading"
                                          @startLoading="startLoading"
                                          @changePages="changePages"></finance-dimension-second>
                <finance-dimension-third ref="2" v-if="pageLevel===2" @startLoading="startLoading"
                                         @clearLoading="clearLoading"></finance-dimension-third>
            </div>
        </div>
    </div>
</template>

<script>
    import "./newFinanceDimension.less"
    import MyTableBase from "../../components/common/myTableBase";
    import FinanceDimensionFirst from "./children/financeDimensionFirst";
    import FinanceDimensionSecond from "./children/financeDimensionSecond";
    import FinanceDimensionThird from "./children/financeDimensionThird";

    export default {
        name: "newFinanceDimension",
        components: {FinanceDimensionThird, FinanceDimensionSecond, FinanceDimensionFirst, MyTableBase},
        data() {
            return {
                index: 0,
                item: [
                    {label: "营收", value: "", color: "#FF8E11", type: "ys"},
                    {label: "利润", value: "", color: "#1E55FF", type: "lr"},
                    {label: "成本", value: "", color: "#36CCA9", type: "cb"},
                    {label: "回款", value: "", color: "#636EFD", type: "hk"},
                    {label: "车流量", value: "", color: "#12AFFF", type: "cll"},
                ],
                sectionType: [1, 1],
                pageLevel: 0,
                companyCode: "",
                companyName: "",
                selection: {},
                breadcrumb: ["全部"],
                params: [],
                loading: false
            }
        },
        methods: {
            changeType(x, type) {
                this.loading = true;
                this.params.forEach(i => {
                    if (i['shopType']) {
                        i['shopType'] = type;
                    }
                })
                this.$refs[this.pageLevel].refresh(this.params[this.pageLevel]);
                this.index = x
            },
            breadcrumbDel(x) {
                this.breadcrumb.splice(x + 1, this.breadcrumb.length);
                this.pageLevel = x;
                this.loading = true;
                this.$nextTick(_ => {
                    this.$refs[x].refresh(this.params[x]);
                })
            },
            changeSection(s, t) {
                let v = this.DeepCopy(this.sectionType);
                v[s] = t;
                this.sectionType = v;
            },
            changePages(v) {
                let d = v[0];
                this.loading = true
                this.pageLevel = d["level"] ? d["level"] : '';
                this.breadcrumb[this.pageLevel] = d.bmbhName;
                Object.assign(d, {shopType: this.item[this.index]['type']})
                this.params[this.pageLevel] = d;
                this.$nextTick(_ => {
                    this.$refs[this.pageLevel].refresh(d);
                })
            },
            clearLoading() {
                this.loading = false;
            },
            startLoading() {
                this.loading = true;
            },
        },
        async mounted() {
            this.loading = true;
            this.params[0] = {shopType: this.item[this.index]['type']};
            await this.$refs[this.pageLevel].refresh({shopType: this.item[this.index]['type']});
            this.loading = false;
        }
    }
</script>