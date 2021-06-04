<template>
    <div style="width: 100%;position: relative">
        <div class="clear" v-if="dontSelect">×</div>
        <p class="name" v-if="dontSelect">{{form.name}}</p>
        <p class="location" v-if="dontSelect">{{form.location}}</p>
        <div class="notSelect" v-if="!dontSelect">
            <i class="el-icon-office-building ICON"></i>
            <p>暂无服务区</p>
        </div>
        <p class="change">
            <el-select v-model="form.select"></el-select>
            <el-button>搜索</el-button>
        </p>
    </div>
</template>

<script>
    export default {
        name: "serviceCard",
        props: {
            form: {
                type: Object,
                default: function () {
                    return {};
                }
            }
        },
        computed: {
            dontSelect() {
                if (!this.form.name && !this.form.location)
                    return false;
                if (this.form.name && this.form.location)
                    return true;
            }
        },
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style scoped lang="less">
    .clear {
        width: 30px;
        height: 30px;
        position: absolute;
        font-size: 30px;
        right: 20px;
        top: -15px;
        color: red;
        cursor: pointer;
    }

    p {
        text-align: center;
    }

    .name {
        width: 100%;
        line-height: 40px;
        font-size: 22px;
        font-weight: 700;
    }

    .location {
        line-height: 60px;
    }

    .change {
        /deep/ .el-select {
            .el-input {
                .el-input__inner {
                    height: 30px;
                    line-height: 30px;
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

        /deep/ .el-button {
            padding: 8px 12px;
            margin-left: 15px;
        }
    }

    .notSelect {
        width: 100%;
        height: 100px;
        text-align: center;
        color: #cecece;

        i {
            line-height: 60px;
            font-size: 50px;
        }
    }
</style>