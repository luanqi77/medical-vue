<template>
  <div>

      <el-button type="primary" @click="doctorList()" size="big">医生表</el-button><br><hr>
      <el-button type="primary" @click="userList()" size="big">患者表</el-button><br><hr>
      <el-button type="primary" @click="partmentList()"  size="big">科室表</el-button><br><hr>

  </div>
</template>

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
      }
    }
  }

</script>
