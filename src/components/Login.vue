<template>
  <div id="login-container">
    <div class="box">
      <p>登录页</p>
      <el-form ref="form" :model="form" :rules="rules">
        <el-form-item prop="phone">
          <el-input
            placeholder="请输入手机号"
            prefix-icon="el-icon-user"
            v-model="form.phone"
          >
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
            v-model="form.password"
            show-password
          >
          </el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-col :span="16">
            <el-input
              placeholder="请输入验证码"
              prefix-icon="el-icon-key"
              v-model="form.code"
            >
            </el-input>
          </el-col>
          <el-col :span="8">
            <img
              src="../assets/key.png"
              alt=""
              class="code"
            />
          </el-col>
        </el-form-item>
        <el-form-item prop="checked">
          <el-checkbox v-model="form.checked"
            >我已阅读并同意 <el-link type="primary">用户协议</el-link>和
            <el-link type="primary">隐私条款</el-link>
          </el-checkbox>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="primary" @click="register">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        phone: "",
        password: "",
        code: "",
        checked: [],
      },
      rules: {
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { pattern:/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/, message: "手机号格式错误", trigger: "change" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 12, message: "长度在 6 到 12 个字符", trigger: "change" },
        ],
        code: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { min: 4, max: 4, message: "验证码长度4个字符", trigger: "change" },
        ],
        checked: [
          { required: true, message: "必须要同意", trigger: "change" },
        ],
      },
    };
  },
  methods: {
    login(){
       this.$refs.form.validate((valid) => {
          if (valid) {
            // userLogin({
            //   phone:this.form.phone,
            //   password:this.form.password,
            //   code:this.form.code,
            // }).then(res=>{
            //   //成功回调
            //   console.log(res);
            // });
          } else {
            // console.log('error submit!!');
            this.$message.error('数据格式有误');
            return false;
          }
        });
    },
    onSubmit() {
      console.log("submit!");
    },
  },
  mounted(){
    console.log('mounted')
    let height =  document.body.clientHeight
    document.getElementById('login-container').style.height = height+'px';
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#login-container{
  position: relative;
  height: 100%;
  background: #bfa;
}
.box{
  position: absolute;
  left: 0;
  top: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
  width: 500px;
  height: 500px;
}
</style>
