<template>
  <div>
    <el-form :inline="true" :model="user" class="demo-form-inline">

      <el-form-item label="姓名">
        <el-input v-model="user.username"></el-input>
      </el-form-item>
      <br>

      <el-form-item label="密码">
        <el-input v-model="user.password" show-password></el-input>
      </el-form-item>
      <br>

      <el-form-item label="真实姓名">
        <el-input v-model="user.name"></el-input>
      </el-form-item>
      <br>

      <el-form-item label="性别">
        <el-input v-model="user.sex"></el-input>
      </el-form-item>
      <br>

      <el-form-item label="年龄">
        <el-input v-model="user.age"></el-input>
      </el-form-item>
      <br>

      <el-form-item label="创建时间">
        <el-input v-model="user.createTime"></el-input>
      </el-form-item>
      <br>

      <el-form-item label="地址">
        <el-input v-model="user.address"></el-input>
      </el-form-item>
      <br>

      <el-form-item label="email">
        <el-input v-model="user.email"></el-input>
      </el-form-item>
      <br>

      <el-form-item label="头像">
        <el-input v-model="user.pic"></el-input>
      </el-form-item>
      <br>



      <el-form-item>
        <el-button type="primary" @click="updateUser()">提交</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>
<script>
  import axios from 'axios'
  export default{

    data(){
      return {
        user: {
            //userId不需要展示，但提交入库时需要根据id修改，双向绑定
          uid: '',
          username: '',
          password: '',
          name:'',
          sex: '',
          age: '',
          createTime:'',
          addrss: '',
          email: '',
          pic: '',
        }
      }
    },
    methods: {
      updateUser: function () {
        var url = '/api/updateUser'
        axios.post(url, this.user).then(res => {
          if (res.data !=null) {
            alert("修改成功！")
            this.$router.push('/userListPage')
          }else {
            alert("修改失败")

          }
        })
      }
    },
    mounted(){
      var uid = this.$route.params.uid
      var url = '/api/UserSelectById/'
      axios.post(url, {uid: uid}).then(res => {
        if (res.data != null) {
          this.user = res.data;
        } else {
          alert("查找用户失败")
        }
      })
    }


  }


</script>
