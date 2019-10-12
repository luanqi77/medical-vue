<template>
  <div>
    <headerno></headerno>
    <div  style=" margin: auto;margin-top: 10px;width: 100%;height: 42px;
border-radius:4px;background-color: darkturquoise;" >
      <div style="margin-right: 800px;font-size: 14px;line-height: 42px;color: white ;">
        <el-link :underline="false" @click="index()" style="font-size: 15px;line-height: 42px;color: white ;">小华佗在线 ></el-link>
        <span>医生登录/注册 ></span><span>欢迎您，医生</span>
      </div>
    </div>
    <div style="width: 75%;margin: auto">
      <img src="../assets/newsinfo/gygghf.png" width="100%"><br><br><br>
      <div id="back" style="width: 70%;float: left;background-color:white;height: 803px">
      <el-tabs type="border-card" style="width: 70%;height: 600px;margin: auto;margin-top:100px;background-color:rgba(0,0,0,0.03)">
        <el-tab-pane label="登录" >
          <el-form style="width: 70%;margin: auto;height: 80%"> <br>
            用户名&nbsp;&nbsp;&nbsp;<el-input placeholder="请输入用户名" style="width: 80%"></el-input> <br> <br> <br>
            密码&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<el-input placeholder="请输入密码" style="width: 80%"></el-input> <br> <br> <br>
            <el-input placeholder="请输入验证码" style="width: 60%;margin: auto"></el-input>
            <el-button style="width: 25%;float: left;text-align: center">获取验证码</el-button>
            <br> <br> <br>
            <el-button @click="login()">登陆</el-button>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="注册">
          <el-form style="width: 75%;margin: auto;height: 80%"> <br>
            用户名&nbsp;&nbsp;&nbsp;<el-input placeholder="请输入用户名" style="width: 80%"></el-input> <br> <br> <br>
            密码&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<el-input placeholder="请输入密码" style="width: 80%"></el-input> <br> <br> <br>
            <el-input placeholder="请输入验证码" style="width: 60%;margin: auto"></el-input>
            <el-button style="width: 25%;float: left;text-align: center">获取验证码</el-button>
            <br> <br> <br>
            <el-button @click="regist()">立即注册</el-button>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>
      <div style="width: 29%;float: left">
        <div style="width: 100%">
          <img src="../assets/newsinfo/ggwzz.jpg" width="100%">
        </div>
        <div>
          <h3>如有需求，请联系网站管理员:栾旗</h3>
        </div>
        <div style="width: 100%">
          <img src="../assets/newsinfo/gygg.png" width="100%">
        </div>
      </div>
    </div>
    </div>
</template>

<script>
  import headerno from './headerno.vue';
  import ElForm from "../../node_modules/element-ui/packages/form/src/form";
  import ElInput from "../../node_modules/element-ui/packages/input/src/input";
  import ElButton from "../../node_modules/element-ui/packages/button/src/button";
  export default {
    name: 'docterlogin',
    components:{
      ElButton,
      ElInput,
      ElForm,
      headerno
    },
    data () {
      return {}
    },
    methods:{

    }
  }
</script>
<style>
</style>

