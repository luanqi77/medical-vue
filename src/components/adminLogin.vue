<template>
  <div>
    <img src="../assets/image/adminHeaderPage.png">
    <h1>请输入账号密码登录</h1>
    <el-form :inline="true" :model="admin" class="demo-form-inline">

      <el-form-item label="姓名">
        <el-input v-model="admin.adminName" placeholder="请输入账号"></el-input>
      </el-form-item>
      <br>

      <el-form-item label="密码">
        <el-input v-model="admin.password" show-password  placeholder="请输入密码"></el-input>
      </el-form-item>
      <br>
      <el-form-item>
        <el-button type="primary" @click="adminLogin()" size="big">登录</el-button><br>
        <el-button type="primary" @click="forgetPWD()" size="mini">忘记密码</el-button>
        <el-button type="primary" @click="registryUser()"  size="mini">注册</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
  import axios from 'axios'
  export default{
    data(){
      return{
        admin:
          {
            adminName:'',
            password:''
          }

      }
    },
    methods:{
      adminLogin:function () {
        var url='/api/adminLogin'
        axios.post(url,this.admin).then(res=>{
          if(res.data=='ok'){
            this.$router.push('/CRUD/doctorListPage');
          }else {
            alert(res.data)
          }
        })
      },
      forgetPWD:function () {
        alert("功能暂未开启！")
      },
      registryUser:function () {
        alert("功能暂未开启！")
      }
    }
  }

</script>
<!--<style>-->
  <!--.el-form{-->
    <!--width: 500px;-->
    <!--height:300px;-->
    <!--background: red;-->
    <!--margin: 0 auto;-->
    <!--padding-top: 50px;-->
    <!--background-image: url("../assets/image/adminLoginPage.jpg");-->
    <!--background-size: 100% 100%;-->
  <!--}-->
<!--</style>-->
