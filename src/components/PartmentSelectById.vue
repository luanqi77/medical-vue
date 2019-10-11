<template>
  <div>
    <el-form :inline="true" :model="partment" class="demo-form-inline">


      <el-form-item label="科室名">
        <el-input v-model="partment.name" show-text></el-input>
      </el-form-item>
      <br>

      <el-form-item>
        <el-button type="primary" @click="updatePartment()">提交</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>
<script>
  import axios from 'axios'
  export default{

    data(){
      return {
        partment: {
          pid: '',
          name: '',
        }
      }
    },
    methods: {
      updatePartment: function () {
        var url = '/api/updatePartment'
        axios.post(url, this.partment).then(res => {
          if (res.data != null) {
            alert("修改成功！")
            this.$router.push('/CRUD/PartmentListPage')
          } else {
            alert("修改失败")

          }
        })
      }
    },
    mounted(){
      var pid = this.$route.params.pid
      var url = '/api/PartmentSelectById/'
      axios.post(url, {pid: pid}).then(res => {
        if (res.data != null) {
          this.partment = res.data;
        } else {
          alert("查找用户失败")
        }
      })
    }


  }


</script>
