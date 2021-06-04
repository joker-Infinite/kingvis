<template>
    <div style="width: 100%;height: 100%">
        <my-table-base
                :columns="columns"
                :tableData="tableData"
                :operations="operations"
                :buttons="buttons">
        </my-table-base>
        <my-dialog width="1000px" title="新增" :visible.sync="visible" :closeOnClickModal="true" height="400px">
            <el-form :model="formData" label-width="100px">
                <el-col :span="8">
                    <el-form-item label="用户名：">
                        <el-input v-model="formData.userName"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="部门：">
                        <el-input v-model="formData.department"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="密码：">
                        <el-input v-model="formData.password"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="确认密码：">
                        <el-input v-model="formData.surePassword"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="真实姓名：">
                        <el-input v-model="formData.actualName"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="性别：">
                        <el-input v-model="formData.sex"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="邮箱：">
                        <el-input v-model="formData.eMail"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="手机号：">
                        <el-input v-model="formData.phone"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="状态：">
                        <el-input v-model="formData.state"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="授权页面：">
                        <el-input v-model="formData.mark"></el-input>
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
        name: "userManagement",
        components: {MyDialog, MyTableBase},
        data() {
            return {
                visible: false,
                formData: {
                    userName: '',
                    department: '',
                    password: '',
                    surePassword: '',
                    actualName: '',
                    sex: '',
                    eMail: '',
                    phone: '',
                    state: '',
                    mark: '',
                },
                columns: [
                    {prop: 'a', label: '用户名'},
                    {prop: 'b', label: '姓名'},
                    {prop: 'c', label: '性别'},
                    {prop: 'd', label: '邮箱'},
                    {prop: 'e', label: '手机号'},
                    {prop: 'f', label: '部门名称'},
                    {prop: 'g', label: '状态'},
                    {prop: 'i', label: '标识'},
                    {prop: 'h', label: '创建时间', sortable: true},
                ],
                tableData: [
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
                    {a:'XXX',b:'XX',c:'man',d:'XXX@qq.com',e:'135XXXXX',f:'wwww',g:'2we',h:'2020/12/30',i:'@@@@'},
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
                        callback: _ => {
                        }
                    },
                ],
                operations: [
                    {
                        name: '编辑',
                        callback: _ => {
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
        }
    }
</script>

<style scoped>

</style>