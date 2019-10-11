<template>
  <div>
    <el-form :inline="true" :model="user" class="demo-form-inline">

    <!--  <el-form-item label="科室表">
        <el-input v-model="doctor.pid"></el-input>
      </el-form-item>
      <br>-->

      <el-form-item label="姓名">
        <el-input v-model="doctor.dname"></el-input>
      </el-form-item>
      <br>

      <el-form-item label="密码">
        <el-input v-model="doctor.password" show-password></el-input>
      </el-form-item>
      <br>


      <el-form-item label="性别">
        <el-input v-model="doctor.sex"></el-input>
      </el-form-item>
      <br>

      <el-form-item label="年龄">
        <el-input v-model="doctor.age"></el-input>
      </el-form-item>
      <br>

      <el-form-item label="创建时间">
        <el-input v-model="doctor.createTime"  readonly  ></el-input>
      </el-form-item>
      <br>

      <el-form-item label="工作年限">
        <el-input v-model="doctor.workyears"></el-input>
      </el-form-item>
      <br>

      <el-form-item label="email">
        <el-input v-model="doctor.email"></el-input>
      </el-form-item>
      <br>

      <el-form-item label="工作时间">
        <el-input v-model="doctor.workTime"></el-input>
      </el-form-item>
      <br>

      <el-form-item label="头像">
        <el-input v-model="doctor.pic"></el-input>
      </el-form-item>
      <br>



      <el-form-item>
        <el-button type="primary" @click="updateDoctor()">提交</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>
<script>
  import axios from 'axios'
  export default{

    data(){
      return {
        doctor: {
          //did不需要展示，但提交入库时需要根据id修改，双向绑定
          did: '',
          pid:'',
          dname: '',
          password: '',
          sex: '',
          age: '',
          createTime:'',
          workyears: '',
          email: '',
          workTime:'',
          pic: '',
        }
      }
    },
    methods: {
      updateDoctor: function () {
        var url = '/api/updateDoctor'
        axios.post(url, this.doctor).then(res => {
          if (res.data !=null) {
            alert("修改成功！")
            this.$router.push('/doctorListPage')
          }else {
            alert("修改失败")

          }
        })
      }
    },
    mounted(){
      var did = this.$route.params.did
      var url = '/api/DoctorSelectById/'
      axios.post(url, {did: did}).then(res => {
        if (res.data != null) {
          this.doctor = res.data;
        } else {
          alert("查找用户失败")
        }
      })
    }


  }


</script>
