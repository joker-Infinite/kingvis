<template>
    <div class="login">
        <div class="register">
            <div class="left">
                <div>交投</div>
            </div>
            <div class="right">
                <div class="conlog">
                    <div class="title">登录</div>
                    <div>
                        <el-input
                                style="margin-bottom:20px"
                                v-model="userData.phone"
                                placeholder="用户名">
                        </el-input>
                        <el-input placeholder="密码"
                                  v-model="userData.password"
                                  show-password
                                  @keyup.enter.native="login(userData)"></el-input>
                    </div>
                    <el-button type="primary" @click.stop="login(userData)">登录</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import router from "../router";

    export default {
        data() {
            return {
                userData: {
                    phone: "",
                    password: ""
                }
            };
        },
        methods: {
            login(d) {
                if (d.phone == "" || d.password == "") {
                    this.$message.error("账号或密码不能为空！");
                } else {
                    /*  let params = new URLSearchParams();
                      for (let i in d) {
                          params.append(i, d[i]);
                      }
                      localStorage.setItem('userPages', '');
                      this.$axios.post("/api/anon/login", d).then(v => {
                          if (v.data.retCode == '用户不存在') {
                              this.$message.warning("用户不存在！");
                              return ''
                          } else if (v.data.data && v.data.data.length > 0) {
                              this.$store.commit('setUserPages', v.data.data);
                              localStorage.setItem('userPages', JSON.stringify(v.data.data));
                              let data = v.data.data;
                              let url;
                              for (let i in data) {
                                  if (data[i].muenUrl !== '/homeKanBan') {
                                      url = data[i].muenUrl;
                                      break;
                                  }
                              }
                              document.cookie = "menu=" + url + "-";
                              router.push(url);
                              this.$message.success("登录成功！");
                          } else if (v.data.data && v.data.data.length === 0) {
                              this.$message.warning("无权访问！");
                          } else if (v.data.retCode == '请输入账号') {
                              this.$message.warning("请输入账号！");
                              return '';
                          } else {
                              this.$message.warning("密码错误！");
                              return '';
                          }
                      })*/
                    this.$router.push("/serviceArea/revenue");
                }
            }
        },
        mounted() {
            document.cookie = "menu=/serviceArea/revenue-";
        }
    };
</script>
<style lang="less" scoped>
    .login {
        width: 100%;
        height: 100%;
        background: rgba(39, 81, 215, 0.6);
        position: fixed;

        .register {
            width: 1000px;
            height: 500px;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            margin: auto;
            display: flex;
            overflow: hidden;
            border-radius: 10px;
            box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);

            .left {
                position: absolute;
                top: -20%;
                height: 140%;
                left: -10%;
                width: 70%;
                background: pink;
                transform: rotate(15deg);
            }

            .right {
                position: absolute;
                right: -10%;
                top: -20%;
                height: 140%;
                width: 60%;
                background: #fff;
                transform: rotate(15deg);

                .conlog {
                    transform: rotate(-15deg);
                    position: absolute;
                    right: 30%;
                    top: 20%;
                    width: 60%;
                    height: 60%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;

                    .title {
                        font-size: 30px;
                    }
                }
            }
        }
    }
</style>
