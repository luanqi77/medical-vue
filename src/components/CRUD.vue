<template>

  <div>

    <img src="../assets/image/adminHeaderPage.png">

    <div id="big">


      <!--左边侧边栏-->
      <div id="left">
        <el-row class="tac">
          <el-col :span="20">
            <h5>后台分类</h5>
            <el-menu default-active="8" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>数据管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">
                    <router-link to="/CRUD/doctorListPage">医师表</router-link>
                  </el-menu-item>
                  <el-menu-item index="1-2">
                    <router-link to="/CRUD/userListPage">患者表</router-link>
                  </el-menu-item>
                  <el-menu-item index="1-3">
                    <router-link to="/CRUD/partmentListPage">科室表</router-link>
                  </el-menu-item>
                  <el-menu-item index="1-4">
                    <router-link to="/CRUD/DoctorAnswerListPage">医生回复表</router-link>
                  </el-menu-item>
                  <el-menu-item index="1-5">
                    <router-link to="/CRUD/Yao">药品数据表</router-link>
                  </el-menu-item>
                  <el-menu-item index="1-6">
                    <router-link to="/CRUD/HospitalList">医院表</router-link>
                  </el-menu-item>
                  <el-menu-item index="1-7">
                    <router-link to="/CRUD/NewsList">新闻表</router-link>
                  </el-menu-item>
                  <el-menu-item index="1-8">
                    <router-link to="/CRUD/GuahaoList">挂号表</router-link>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </div>


      <div id="right">

        <router-view/>
      </div>

    </div>
  </div>
</template>

<script>
  export default{
      mounted(){
        this.$router.push('/CRUD/doctorListPage')
      }
  }
</script>



<style>
  /*总的div*/
  #big {
    /*background-color: #fefff9;*/
    width: 1510px;
    height: 900px;
  }

  /*左边菜单*/
  #left {
    background-color: linen;

    width: 150px;
    height: 450px;
    float: left;
  }

  #right {

    width: 1350px;
    height: 1000px;
    float: left;

  }

  /*左边菜单宽度*/
  .el-col-20 {
    width: 100%;
  }
</style>


<!--<template>
  <div>

      <el-button type="primary" @click="doctorList()" size="big">医生表</el-button><br><hr>
      <el-button type="primary" @click="userList()" size="big">患者表</el-button><br><hr>
      <el-button type="primary" @click="partmentList()"  size="big">科室表</el-button><br><hr>
      <el-button type="primary" @click="DoctorAnswerList()"  size="big">医生回复表</el-button><br><hr>

  </div>
</template>-->
<!--
<script>
  import axios from 'axios'
  export default{
    data(){
      return{
      }
    },
    methods:{
      doctorList:function () {
        this.$router.push('/doctorListPage');
      },
      userList:function () {
        this.$router.push('/userListPage');
      },
      partmentList:function () {
        this.$router.push('/partmentListPage');
      },
      DoctorAnswerList:function () {
        this.$router.push('/DoctorAnswerListPage');
      }
    }
  }

</script>-->
