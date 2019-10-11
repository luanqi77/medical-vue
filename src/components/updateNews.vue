<template>
  <div>
    <el-form :inline="true" :model="News" class="demo-form-inline">
      <el-form-item label="标题" prop="title">
        <el-input v-model="News.title"></el-input>
      </el-form-item>
      <br>
      <el-form-item label="内容" prop="text">
        <el-input v-model="News.text"></el-input>
      </el-form-item>
      <br>
      <el-form-item label="创建时间" prop="create_time">
        <el-input v-model="News.createTime"></el-input>
      </el-form-item>
      <br>
      <el-form-item label="作者" prop="author">
        <el-input v-model="News.author"></el-input>
      </el-form-item>
      <br>
      <el-form-item>
        <el-button type="primary" @click="updateNews2()">修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import axios from 'axios'
  export default{
    data(){
      return {
        News: {
          nid: '',
          title: '',
          text: '',
          createTime: '',
          author: '',
        }
      }
    },
    mounted(){
      var nid = this.$route.params.nid
      var url = 'api/selectNewsById/'
      axios.post(url, {nid: nid}).then(res => {
        if (res.data != null) {
          this.News = res.data;
        } else {
          alert("查找用户失败")
        }
      })
    },
    methods: {
      updateNews2: function () {
        var url = '/api/updateNews'
        axios.post(url, this.News).then(res => {
          if (res.data !='0') {
            alert("修改成功！")
            this.$router.push('/NewsList')
          } else {
            alert("修改失败")
          }
        })
      }
    }

  }
</script>
