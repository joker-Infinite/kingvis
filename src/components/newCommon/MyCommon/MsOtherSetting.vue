<template>
    <div class="inform">
        <span @click="operations('ECharts')">
          <el-tooltip class="item" effect="dark" content="图表" placement="top">
            <i class="el-icon-s-marketing"></i>
          </el-tooltip>
        </span>
        <span @click="operations('table')">
          <el-tooltip class="item" effect="dark" content="列表" placement="top">
            <i class="el-icon-s-grid"></i>
          </el-tooltip>
        </span>
        <span @click="operations('excel')">
          <el-tooltip class="item" effect="dark" content="导出Excel" placement="top">
            <i class="el-icon-download"></i>
          </el-tooltip>
        </span>
    </div>
</template>
<script>
    export default {
        name: 'MsOtherSetting',
        methods: {
            operations(v) {
                this.$emit("clickType", v);
            }
        }
    };
</script>
<style lang="less" scoped>
    .el-icon-s-marketing,
    .el-icon-s-grid,
    .el-icon-download {
        color: #38a0ff;
    }

    .inform {
        position: absolute;
        z-index: 999;
        width: 200px;
        top: 0;
        left: 0;

        span {
            display: inline-block;
            cursor: pointer;
            font-size: 16px;
            width: 20px;
            height: 20px;
            line-height: 20px;
            border-radius: 100px;
            text-align: center;
            margin: 5px 0;
            border: 1px solid #38a0ff;
        }

        span + span {
            margin-left: 5px;
        }
    }
</style>
