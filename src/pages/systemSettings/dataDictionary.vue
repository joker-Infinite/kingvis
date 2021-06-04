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
        <my-dialog width="1000px" title="新增" :visible.sync="visible" :closeOnClickModal="true"
                   height="300px">
            <el-form :model="dataForm" label-width="100px">
                <el-col :span="24">
                    <el-form-item label="字典名称：">
                        <el-input v-model="dataForm.name" @input="inputChange(dataForm.name)"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="字典code：">
                        <el-input v-model="dataForm.code" disabled></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="描述：">
                        <el-input v-model="dataForm.remark"></el-input>
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
    import vPinYin from '../../components/js/vue-py'

    export default {
        name: "dataDictionary",
        components: {MyDialog, MyTableBase},
        mixins: [vPinYin],
        data() {
            return {
                visible: false,
                columns: [
                    {prop: 'a', label: '字典名称'},
                    {prop: 'b', label: '字典code'},
                    {prop: 'c', label: '描述'},
                    {prop: 'd', label: '创建时间'},
                ],
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
                    }
                ],
                tableData: [],
                operations: [],
                dataForm: {
                    name: '',
                    code: '',
                    remark: ''
                }
            }
        },
        methods: {
            selectionChange() {
            },
            inputChange(v) {
                this.dataForm.code = this.simplePinYin(v);//简拼
            }
        }
    }
</script>

<style scoped>

</style>