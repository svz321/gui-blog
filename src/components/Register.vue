<template>
  <div class="register_container">
      <div class="register_box">

        <div class="avatar_box">
            <img src="../assets/logo.png" alt="">
        </div>

        <el-form ref="registerFormRef" :rules="registerFormRules" :model="registerForm" class="register_form" label-width="80px">
            <el-form-item prop="username" label="用户名" >
                <el-input v-model="registerForm.username"></el-input>
            </el-form-item>
            <el-form-item prop="phone" label="手机号">
                <el-input v-model="registerForm.phone"></el-input>
            </el-form-item>
            <el-form-item prop="password" label="密码">
                <el-input v-model="registerForm.password"></el-input>
            </el-form-item>
            <el-form-item label="验证码" :inline="true">
                <el-input style="width:75%"></el-input>
                <el-button type="info">获取验证码</el-button>
            </el-form-item>
            <el-form-item class="btns">
                <el-button type="primary" style="width:70%" @click="register">注册</el-button>
            </el-form-item>
        </el-form>

      </div>
  </div>
</template>

<script>
export default {
    name:"register_set",
        data () {
        return{
            registerForm:{
                username:'122',
                phone:'2211',
                password:'123',
            },
            registerFormRules: {
                username:[
                    {required: true, message: '请输入用户名', trigger: 'blur'},
                    {min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur'}
                    ],
                password:[
                    {required: true, message: '请输入密码', trigger: 'blur'},
                    {min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur'}
                    ],
                phone:[
                    {required: true,message: "请输入手机号码",trigger: "blur"},
                    { validator: function(rule, value, callback) {
                            if (/^1[34578]\d{9}$/.test(value) == false) {
                                callback(new Error("手机号格式错误"));
                            } else {
                                callback();
                            }
                        },trigger: "blur"}
                    ]
            }
        } 
    },
    methods: {
        register(){
            this.$refs.registerFormRef.validate(async valid => {
                if(!valid) return;
                //const {data:res}=await this.$http.post('../components/login.json',this.loginForm);
                //console.log(res);
                //window.sessionStorage.setItem('token',res.data.token)
                this.$router.push('/home')
                if(!valid) return this.$message.error('登录失败');
                this.$message.success('登录成功')
            })
        }
    }
}
</script>

<style lang="less" scoped>
.register_container {
    background-color: #dda3df;
    height: 100%;
}
.register_box {
    width:600px;
    height:500px;
    background-color:#fff;
    border-radius:3px;
    position:absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);

    .avatar_box {
        height:130px;
        width:130px;
        border:1px solid #eee;
        border-radius:50%;
        padding:10px;
        box-shadow:0 0 10px #ddd;
        position: absolute;
        left:50%;
        transform: translate(-50%,-50%);
        background-color:#fff;
        img{
            width:100%;
            height:100%;
            border-radius:50%;
            background-color:#eee;
        }
    }
}
.register_form{
    position:absolute;
    bottom:0;
    width: 100%;
    padding: 20px 20px;
    box-sizing: border-box;
}

.btns {
    text-align: center;
}
</style>