<template>
  <div>
      <okuserheader></okuserheader>
      <div  style=" margin: auto;margin-top: 10px;width: 100%;height: 42px;
      border-radius:4px;background-color: darkturquoise;" >
        <div style="margin-right: 860px;font-size: 14px;line-height: 42px;color: white ;">
          <el-link :underline="false" @click="index()" style="font-size: 15px;line-height: 42px;color: white ;">华佗医疗 ></el-link>
          <span >个人中心</span>
        </div>
        <div style="margin: auto;width: 80%">
          <div style="float: left;width:800px;margin-left: 158px;">
            <div style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12);width:800px;
          height: 50px;margin-top: 10px" >

                <div style="float: left; ">
                 <el-link  @click="userMain()" style="line-height: 50px;margin-left: 20px;font-size: 18px;color: darkturquoise">我的提问</el-link>
                 <el-link  @click="userMessage()" style="line-height: 50px;margin-left: 40px;font-size: 18px;color: darkturquoise">我的消息</el-link>
                 <el-link  @click="userAppoint()" style="line-height: 50px;margin-left: 40px;font-size: 18px;color: darkturquoise">挂号预约</el-link>
                </div>
            </div>
            <div style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12);width:800px;height: 525px;margin-top: 2px" >
              <el-table
                :data="userQuestions"
                style="width: 100% ;font-size: 16px;border-right:solid rgba(0, 0, 0, .12);"
                :row-class-name="tableRowClassName">

                <el-table-column
                  prop="description"
                  label="问题描述"
                  width="400"
                  >
                </el-table-column>
                <el-table-column
                  prop="createTime"
                  label="日期"
                  width="237"
                >
                </el-table-column>
                <el-table-column
                  label="操作"
                  width="160"
                >
                  <template slot-scope="userQuestions">
                    <el-button type="primary" plain @click="toUserAnswer(userQuestions.row.description)">查看回复</el-button>
                  </template>
                </el-table-column>

              </el-table>
            </div>
          </div>

          <div style="float: left;width: 200px;height: 576px;box-shadow: 0 2px 4px rgba(0, 0, 0, .12);margin-top: 10px">
            <div style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12);width:200px;
          height: 50px; font-size: 18px;color: darkturquoise;line-height: 50px" >修改头像</div>

            <div style="width: 200px;height: 190px">
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </div>
            <div style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12);width:200px;
          height: 335px; font-size: 16px;color: darkturquoise;line-height: 40px" >个人资料
                <form model="user">
                  <div style="font-size: 16px;color: darkturquoise;line-height: 40px" >用户名:
                    <el-divider direction="vertical"></el-divider>{{user.username}}</div>
                  <div style="font-size: 16px;color: darkturquoise;line-height: 40px" >真实姓名:
                    <el-divider direction="vertical"></el-divider><input v-model="user.name"
                    style="border: hidden;width: 50px;color:darkturquoise;font-size: 16px "/></div>
                  <div style="font-size: 16px;color: darkturquoise;line-height: 40px" >性别:
                    <el-divider direction="vertical"></el-divider><input v-model="user.sex"
                    style="border: hidden;width: 50px;color:darkturquoise;font-size: 16px "/></div>

                  <div style="font-size: 16px;color: darkturquoise;line-height: 40px" >年龄:
                    <el-divider direction="vertical"></el-divider><input v-model="user.age"
                     style="border: hidden;width: 50px;color:darkturquoise;font-size: 16px "/></div>

                  <div style="font-size: 16px;color: darkturquoise;line-height: 40px" >地址:
                    <el-divider direction="vertical"></el-divider><input v-model="user.address"
                    style="border: hidden;width: 50px;color:darkturquoise;font-size: 16px "/></div>
                  点击修改:<el-divider direction="vertical"></el-divider><el-button
                  size="mini" @click="updateUser(user.uid)" icon="el-icon-edit"></el-button>
              </form>
            </div>
          </div>
        </div>
      </div>
    <div style="float: left">
      <foot></foot>
    </div>
  </div>

</template>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    margin-top: 5px;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
<script>
  import axios from 'axios'
  import foot from './foot'
  import okuserheader from  './okuserheader'
  import ElLink from "../../node_modules/element-ui/packages/link/src/main";
  import ElButton from "../../node_modules/element-ui/packages/button/src/button";
  export default{
    components: {
      okuserheader,
      foot,
      ElButton,
      ElLink},
    data(){
          return {
            userQuestions:[],

              imageUrl: '',
              user:{
                uid:'',
                username:'',
                name:'',
                sex:'',
                age:'',
                email:'',
                address:''
              }
          }
      },
      mounted(){
        var username=this.$route.params.username;
        var url="api/selectOne"
        axios.post(url,{username:username}).then(res=>{
            this.user=res.data;
        });

        var urls="api/selectQuestion"
        axios.post(urls,{username:username}).then(res=>{
                this.userQuestions=res.data
        })

      },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
      userMessage(){
        var username=this.$route.params.username;
          this.$router.push({path:"/userMessage/"+username})
      },
      userMain(){
        var username=this.$route.params.username;
        this.$router.push({path:"/userMain/"+username})
      },
      userAppoint(){
        var username=this.$route.params.username;
        this.$router.push({path:"/userAppoint/"+username})
      },
      index(){
        var username=this.$route.params.username;
        this.$router.push({path:"/index/"+username})
      },
      updateUser(){
          var url="api/updateUsers"
          axios.post(url,this.user).then(res=>{
              if (res.data=="ok"){
                this.$message({
                  message: '修改成功',
                  type: 'success'
                });
                var username=this.$route.params.username;
                this.$router.push({path:"/userMain/"+username})
              }
          })
      },
      toUserAnswer(description){
        var username=this.$route.params.username;
          this.$router.push({path:"/userAnswer/"+description+"/"+username})
      }
    }
  }

</script>
