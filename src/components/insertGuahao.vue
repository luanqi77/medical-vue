<template>
  <div>
    <el-form :inline="true" :model="Guahao" class="demo-form-inline">
      <el-form-item label="医院" prop="gname">
        <el-input v-model="Guahao.gname"></el-input>
      </el-form-item>
      <br>
      <el-form-item label="年龄" prop="age">
        <el-input v-model="Guahao.age"></el-input>
      </el-form-item>
      <br>
      <el-form-item label="时间" prop="g_time">
        <el-input v-model="Guahao.g_time"></el-input>
      </el-form-item>
      <br>
      <el-form-item label="科室" prop="syn">
        <el-input v-model="Guahao.syn"></el-input>
      </el-form-item>
      <br>
      <el-form-item label="部门" prop="department">
        <el-input v-model="Guahao.department"></el-input>
      </el-form-item>
      <br>
      <el-form-item label="医生" prop="g_doctor">
        <el-input v-model="Guahao.g_doctor"></el-input>
      </el-form-item>
      <br>
      <el-form-item label="职位" prop="status">
        <el-input v-model="Guahao.status"></el-input>
      </el-form-item>
      <br>
      <el-form-item label="编号" prop="uid">
        <el-input v-model="Guahao.uid"></el-input>
      </el-form-item>
      <br>
      <el-form-item>
        <el-button type="primary" @click="insertGuahao1()">添加</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import axios from 'axios'
  export default{
    data(){
      return{
        Guahao: {
          gid: '',
          gname: '',
          age: '',
          g_time: '',
          syn: '',
          department: '',
          g_doctor: '',
          status: '',
          uid: ''
        }
      }
    },
    methods:{
      insertGuahao1:function(){
        var url = "api/insertGuahao"
        axios.post(url,this.Guahao).then(res=>{
          if (res.data!='') {
            this.$router.push({path:"/GuahaoList"})
          }else if(res.data=='') {
            alert("添加失败！")
          }
        })
      }
    }
  }
</script>
