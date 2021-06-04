<template>
    <div class="theme">
        <span>{{newTime}}</span>
        <div class="Switch">
            <el-select
                    popper-class="DATAselect"
                    v-model="selectValue"
                    @change="switchStyle(selectValue)">
                <el-option label="默认" :value="0"></el-option>
                <el-option label="靛青" :value="1"></el-option>
                <el-option label="第三" :value="2"></el-option>
            </el-select>
        </div>
    </div>
</template>

<script>
    import time from "../../../components/js/time";

    export default {
        name: "childThemeTemp",
        data() {
            return {
                newTime: '',
                selectValue: 2
            }
        },
        computed: {
            searchValue() {
                return this.$store.state.searchValue;
            },
        },
        methods: {
            switchStyle(v) {
                if (v === 0 || v === 1) {
                    this.$router.push('/homeKanBan')
                }
            }
        },
        mounted() {
            let this_ = this;
            this_.newTime = time();
            setInterval(function () {
                this_.newTime = time();
            }, 1000);
        }
    }
</script>

<style scoped lang="less">
    .theme {
        width: 90%;
        padding: 0 5%;
        height: 35px;
        line-height: 35px;
        color: white;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;

        .Switch {
            height: 30px;
            margin: 0 20px 0;

            /deep/ .el-select > .el-input {
                width: 70px;

                .el-input__inner {
                    padding: 2px 5px;
                    text-align: center;
                    height: 30px;
                    line-height: 30px;
                    background: transparent;
                    color: #fff;
                    border-color: #0681d5;
                    box-shadow: inset 1px 1px 7px rgba(1, 192, 249, 0.5);
                }

                .el-input__suffix {
                    display: none;
                }
            }
        }
    }
</style>