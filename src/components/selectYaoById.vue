<template>

  <div>

    <el-form :inline="true" :model="Yao" class="demo-form-inline">
      <el-form-item label="药名" prop="y_name">
        <el-input v-model="Yao.y_name"></el-input>
      </el-form-item>
      <br>
      <el-form-item label="地址" prop="address">
        <el-input v-model="Yao.address"></el-input>
      </el-form-item>
      <br>
      <el-form-item label="图片" prop="pic">
        <el-input v-model="Yao.pic"></el-input>
      </el-form-item>
      <br>
      <el-form-item label="描述" prop="des">
        <el-input v-model="Yao.des"></el-input>
      </el-form-item>
      <br>
      <el-form-item>
        <el-button type="primary" @click="updateYao()">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import axios from 'axios'
  export default{
    data(){
      return {
        Yao: {
          yid: '',
          y_name: '',
          address: '',
          pic: '',
          des: '',
        }
      }
    },
    mounted(){
      var yid = this.$route.params.yid
      var url = 'api/selectYaoById/'
      axios.post(url, {yid: yid}).then(res => {
        if (res.data != null) {
          this.Yao = res.data;
        } else {
          alert("查找用户失败")
        }
      })
    },
    methods: {
      updateYao: function () {
        var url = '/api/updateYao'
        axios.post(url, this.Yao).then(res => {
          if (res.data != null) {
            alert("修改成功！")
            this.$router.push('/CRUD/Yao')
          } else {
            alert("修改失败")
          }
        })
      }
    }

  }
</script>
