<template>
  <div>
    <el-form :inline="true" :model="Hospital" class="demo-form-inline">
      <el-form-item label="医院名" prop="h_name">
        <el-input v-model="Hospital.h_name"></el-input>
      </el-form-item>
      <br>
      <el-form-item label="医院地址" prop="h_address">
        <el-input v-model="Hospital.h_address"></el-input>
      </el-form-item>
      <br>
      <el-form-item label="电话" prop="h_tel">
        <el-input v-model="Hospital.h_tel"></el-input>
      </el-form-item>
      <br>
      <el-form-item label="人数" prop="doctor">
        <el-input v-model="Hospital.doctor"></el-input>
      </el-form-item>
      <br>
      <el-form-item label="床位" prop="beds">
        <el-input v-model="Hospital.beds"></el-input>
      </el-form-item>
      <br>
      <el-form-item label="图片" prop="pic">
        <el-input v-model="Hospital.pic"></el-input>
      </el-form-item>
      <br>
      <el-form-item label="描述" prop="description">
        <el-input v-model="Hospital.description"></el-input>
      </el-form-item>
      <br>
      <el-form-item label="等级" prop="level">
        <el-input v-model="Hospital.level"></el-input>
      </el-form-item>
      <br>
      <el-form-item label="特色" prop="special">
        <el-input v-model="Hospital.special"></el-input>
      </el-form-item>
      <br>
      <el-form-item label="评价" prop="comment">
        <el-input v-model="Hospital.comment"></el-input>
      </el-form-item>
      <br>
      <el-form-item>
        <el-button type="primary" @click="updateHospital1()">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import axios from 'axios'
  export default{
    data(){
      return {
        Hospital: {
          hid: '',
          h_name: '',
          h_address: '',
          h_tel:'',
          doctor:'',
          beds:'',
          pic: '',
          description: '',
          level:'',
          special:'',
          comment:''
        }
      }
    },
    mounted(){
      var hid = this.$route.params.hid
      var url = 'api/selectHospitalById/'
      axios.post(url, {hid: hid}).then(res => {
        if (res.data != null) {
          this.Hospital = res.data;
        } else {
          alert("查找用户失败")
        }
      })
    },
    methods: {
      updateHospital1: function () {
        var url = '/api/updateHospital'
        axios.post(url, this.Hospital).then(res => {
          if (res.data != null) {
            alert("修改成功！")
            this.$router.push('/CRUD/HospitalList')
          } else {
            alert("修改失败")
          }
        })
      }
    }

  }
</script>
