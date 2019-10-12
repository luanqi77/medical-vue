<template >
  <div id="beijin">
  <div style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);width: 30%;
  margin: auto;margin-top: 150px;">
    <span style="margin:auto;line-height: 30px;font-size: 25px;">注册</span>
    <el-divider></el-divider>
    <div style="margin-left: -30px">
    <el-form :inline="true" :model="user" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="user.username" @blur="fun()"></el-input>
      </el-form-item><br>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="user.password" autocomplete="off" ></el-input>
      </el-form-item><br>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="user.checkPass" autocomplete="off"></el-input>
      </el-form-item><br>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="user.email"></el-input>
      </el-form-item><br>
      <el-form-item label="验证码" prop="code" >
        <el-input v-model="user.code" @blur="fun1()"></el-input>
      </el-form-item><br>
      <el-form-item>
        <el-button type="primary" @click="submitForm()" style="margin-left: 100px">注册</el-button>
        <el-button type="primary" @click="sendMail()">{{content}}</el-button>
      </el-form-item>
    </el-form>
    </div>
    <!--<div style="float: left;margin-left: 50px;margin-top: 150px">-->
      <!--<foot></foot>-->
    <!--</div>-->
  </div>
  </div>
</template>
<script>
  import userlogin from './userlogin'
  import axios from 'axios'
  import foot from './foot'
  import ElDivider from "../../node_modules/element-ui/packages/divider/src/main";
  import ElButton from "../../node_modules/element-ui/packages/button/src/button";

  export default{
    name: "beijin",
    components: {
      foot,
      userlogin,
      ElButton,
      ElDivider},
    data(){

        var validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else {
            if (this.user.checkPass !== '') {
              this.$refs.user.validateField('checkPass');
            }
            callback();
          }
        };
        var validatePass2 = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请再次输入密码'));
          } else if (value !== this.user.password) {
            callback(new Error('两次输入密码不一致!'));
          } else {
            callback();
          }
        };
        return {
          content:'发送验证码',
          totalTime: 60,
          canClick: true,
          user: {
            username:'',
            password: '',
            checkPass: '',
            email:'',
            code:''
          },
          rules: {
            username:[
              { required: true, message: '请输入用户名', trigger: 'blur' },
              { min: 3, max: 11, message: '长度在 3 到 11 个字符', trigger: 'blur' }
            ],
            password: [
              {required: true,validator: validatePass, trigger: 'blur'}
            ],
            checkPass: [
              { required: true,validator: validatePass2, trigger: 'blur'}
            ],
            email:[
              { required: true, message: '请输入邮箱地址', trigger: 'blur' },
              { type:'email', message: '请输入正确的邮箱地址', trigger:[ 'blur','change' ]  }
            ],
            code:[
              { required: true, message: '验证码不为空', trigger: 'blur' },
              {  message: '验证码不为空', trigger: 'blur' }
            ]

          },
        }
      },
    methods:{
      fun:function(){
        var url="api/checkUsername"
        axios.post(url,this.user).then(res=>{
          if (res.data=="no"){
            this.$message('用户已存在');
          }
        })
      },
      fun1:function () {
        var url="api/checkCode"
        axios.post(url,this.user).then(res=>{
          if (res.data=="no"){
            this.$message('验证码有误');
          }
        })
      },
      sendMail:function () {
        if (!this.canClick)return
        this.canClick=false
        this.content=this.totalTime+'s后重新发送'//解决倒计时开始不是60s的问题
        var url='api/sendMail?email='+this.user.email;
        axios.get(url).then(res=>{
          if (res.data=="success"){
            this.$message({
              message: '发送成功',
              type: 'success'
            });
          }else {
            this.$message.error('发送失败');
          }
        })
        let clock=window.setInterval(()=>{
          this.totalTime--
          this.content=this.totalTime+'s后重新发送'
          if (this.totalTime<0){
            window.clearInterval(clock)//倒计时小于0时清除定时器
            this.content='重新发送验证码'
            this.totalTime=60
            this.canClick= true
          }
        },1000)
      },
        submitForm(formName) {
         var url='api/regist'
          axios.post(url,this.user).then(res=>{
              if (res.data=="success"){
                var username=this.$route.params.username;
                this.$message({
                  message: '注册成功',
                  type: 'success'
                });
                  this.$router.push({path:"/index/"+username})
              }else {
                this.$message.error('注册失败');
              }
          })
        },
      }
  }

</script>
<style>

  #beijin{
    background: url("../assets/images/bbb.jpg");
    background-size: 100% 100%;
    height: 100%;
    position: fixed;
    width: 100%;
    margin-top:-60px;
  }
</style>

