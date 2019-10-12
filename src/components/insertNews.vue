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
      <el-form-item label="创建时间" prop="createTime">
        <el-input v-model="News.createTime" type="date">
        </el-input>
      </el-form-item>
      <br>
      <el-form-item label="作者" prop="author">
        <el-input v-model="News.author"></el-input>
      </el-form-item>
      <br>
      <el-form-item>
        <el-button type="primary" @click="insertNews2()">添加</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import axios from 'axios'
  export default{
    data(){
      return{
        News: {
          nid: '',
          title: '',
          text: '',
          createTime: '',
          author: '',
        }
      }
    },
    methods:{
      insertNews2:function(){
        var url = "api/insertNews"
        axios.post(url,this.News).then(res=>{
          if (res.data!='0') {
            this.$router.push({path:"/CRUD/NewsList"})
          }else {
            alert("添加失败！")
          }
        })
      }
    }
  }
</script>
