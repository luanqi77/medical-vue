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
        <el-button type="primary" @click="insertYao1()">添加</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import axios from 'axios'
  export default{
    data(){
      return{
        Yao: {
          yid: '',
          y_name: '',
          address: '',
          pic: '',
          des: '',
        }
      }
    },
    methods:{
      insertYao1:function(){
        var url = "api/insertYao"
        axios.post(url,this.Yao).then(res=>{
          if (res.data!='') {
            this.$router.push({path:"/Yao"})
          }else if(res.data=='') {
            alert("添加失败！")
          }
        })
      }
    }
  }
</script>
