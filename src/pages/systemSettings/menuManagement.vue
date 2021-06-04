<template>
    <div style="width: 100%;height: 100%">
        <my-table-base chooseItem="single"
                       :gridIndex="false"
                       :operations="operations"
                       :columns="columns"
                       operationsWidth="180px"
                       :tableData="tableData"
                       :buttons="buttons"
                       :pagination="false"
                       @selection-change="selectionChange">
        </my-table-base>
        <my-dialog width="1000px" title="新增" :visible.sync="visible" :closeOnClickModal="true" height="400px">
            <el-form :model="formData" label-width="100px">
                <el-col :span="8">
                    <el-form-item label="类型：">
                        <el-select v-model="formData.type">
                            <el-option label="主菜单" :value="1"></el-option>
                            <el-option label="子菜单" :value="2"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8" v-if="formData.type==2">
                    <el-form-item label="父菜单">
                        <el-select v-model="formData.fatherName">
                            <el-option label="服务区事业部" :value="1"></el-option>
                            <el-option label="能源事业部" :value="2"></el-option>
                            <el-option label="传媒指标" :value="3"></el-option>
                            <el-option label="商业指标" :value="4"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="名称：">
                        <el-input v-model="formData.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="图标：">
                        <el-input v-model="formData.icon"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="排序：">
                        <el-input v-model="formData.index"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="路由：">
                        <el-input v-model="formData.router"></el-input>
                    </el-form-item>
                </el-col>
            </el-form>
            <div slot="footerButton">
                <el-button type="primary">确定</el-button>
                <el-button type="info" @click="visible=false">取消</el-button>
            </div>
        </my-dialog>
    </div>
</template>

<script>
    import MyTableBase from "../../components/common/myTableBase";
    import MyDialog from "../../components/common/myDialog";

    export default {
        name: "menuManagement",
        components: {MyDialog, MyTableBase},
        data() {
            return {
                visible: false,
                formData: {
                    name: '',
                    fatherName: '',
                    icon: '',
                    type: '',
                    index: '',
                    router: '',
                },
                columns: [
                    {prop: 'a', label: '名称', query: true},
                    {prop: 'b', label: '图标', query: true},
                    {prop: 'c', label: '类型', query: true},
                    {prop: 'd', label: '排序', query: true},
                    {prop: 'e', label: '路由', query: true},
                ],
                tableData: [],
                buttons: [
                    {
                        name: '新增',
                        icon: 'el-icon-plus',
                        callback: _ => {
                            this.visible = true;
                        }
                    },
                    {
                        name: '删除',
                        icon: 'el-icon-close',
                        type: 'danger',
                        callback: v => {
                        }
                    },
                ],
                operations: [
                    {
                        name: '编辑',
                        type: 'info',
                        callback: v => {
                            this.visible = true;
                        }
                    },
                    {
                        name: '删除',
                        type: 'danger',
                        callback: v => {
                        }
                    },
                ],
            }
        },
        methods: {
            selectionChange(d) {
                // console.log(d);
            }
        }
    }
</script>

<style scoped>

</style>