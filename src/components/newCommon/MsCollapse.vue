<template>
    <div class="collapseBody">
        <div class="content" id="content" :style="{width:formGroup.length===0?'100%':''}">
            <slot name="content"></slot>
        </div>
        <div class="navigation" v-if="formGroup.length>0">
            <ul class="nav">
                <li style="height: 40px"></li>
                <li v-for="(i,x) in formGroup" :class="{'isActive':isActive===x}" :key="x" @click="goto(i)">
                    <img style="vertical-align: -6px;margin-right: 5px"
                         v-if="!!navIconData&&navIconData.length>0"
                         :src="navIconData[x][(isActive===x?'iconActive':'icon')]" alt=""/>
                    {{i.label}}
                </li>
                <li style="height:40px"></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MsCollapse",
        props: {
            navIconData: {
                type: Array,
                default: _ => {
                    return []
                }
            }
        },
        data() {
            return {
                formGroup: [],
                navData: [],
                isActive: 0
            }
        },
        methods: {
            /**
             * 点击导航栏时进行跳转
             * @param v
             * */
            goto(v) {
                document.querySelector("#" + v.id).scrollIntoView(true);
            },
            /**
             * 滚动条发生变化时
             * */
            scrollChange() {
                let content = document.getElementById("content");
                content.addEventListener("scroll", _ => {
                    this.navData = [];
                    this.formGroup.forEach((item, index) => {
                        this.navData.push({
                            index: index,
                            height: document.getElementById(item.id).offsetTop - 1
                        });
                    });
                    this.navBar(content.scrollTop);
                });
            },
            /**
             * 滚动后导航选中
             * @param v
             * */
            navBar(v) {
                for (let i = 0; i < this.navData.length; i++) {
                    if (i < this.navData.length - 1) {
                        if (v > this.navData[i].height && v < this.navData[i + 1].height) {
                            this.isActive = i;
                            break;
                        }
                    }
                    if (i === this.navData.length - 1) {
                        if (v > this.navData[i].height) {
                            this.isActive = i;
                            break;
                        }
                    }
                }
            },
        },
        mounted() {
            let id = document.getElementsByClassName("form-group");
            for (let key of id) {
                if (!!key.id) {
                    this.formGroup.push({
                        id: key.id,
                        label: key.id
                    })
                }
            }
            this.scrollChange();
        }
    }
</script>

<style scoped lang="less">
    .collapseBody {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: nowrap;

        .content {
            width: 90%;
            height: 100%;
            overflow-y: scroll;
            scroll-behavior: smooth;
        }

        .content::-webkit-scrollbar {
            display: none;
        }

        .navigation {
            width: 8%;
            height: 100%;
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: center;
            margin-right: 0.5%;

            .nav {
                list-style: none;
                width: 100%;
                background: #fff;
                border-radius: 10px;
                box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.2);

                li {
                    font-size: 15px;
                    line-height: 50px;
                    width: 100%;
                    text-indent: 20px;
                    text-align: left;
                    cursor: pointer;
                    transition: linear .3s;
                    border-radius: 10px;
                }

                .isActive {
                    color: white;
                    background: #1d7dca;
                    margin-left: -20px;
                    box-shadow: 10px 5px 10px 0 rgba(0, 0, 0, 0.3);
                }
            }
        }
    }
</style>