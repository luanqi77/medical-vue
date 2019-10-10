<template>
  <div>
      <okuserheader></okuserheader>
      <div  style=" margin: auto;margin-top: 10px;width: 100%;height: 42px;
      border-radius:4px;background-color: darkturquoise;" >
        <div style="margin-right: 800px;font-size: 14px;line-height: 42px;color: white ;">
          <el-link :underline="false" @click="index()" style="font-size: 15px;line-height: 42px;color: white ;">华佗医疗 ></el-link>
          <span>个人中心 ></span><span>我的消息</span>
        </div>
        <div style="margin: auto;width: 80%">
        <div style="float: left;width:715px;margin-left: 165px;">
          <div style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12);width:715px;
        height: 50px;margin-top: 10px" >
            <div style="float: left; margin-left: 35px">
              <el-link  @click="userMain()" style="line-height: 50px;margin-left: 20px;font-size: 18px;color: darkturquoise">我的提问</el-link>
              <el-link  @click="userMessage()" style="line-height: 50px;margin-left: 40px;font-size: 18px;color: darkturquoise">我的消息</el-link>
              <el-link  @click="userAppoint()" style="line-height: 50px;margin-left: 40px;font-size: 18px;color: darkturquoise">挂号预约</el-link>
            </div>
          </div>
          <div style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12);width:715px;height: 525px;margin-top: 2px" >
            <div style="height: 300px;margin-left: 60px; padding-top: 30px;">
              <el-steps direction="vertical" :active="1" >
                <el-step title="2019-10-12" description="已提问" ></el-step>
                <el-step title="2019-10-12" description="已有医生查看你的问题"></el-step>
                <el-step title="2019-10-12" description="已有医生开始为您服务，2小时内可和医生沟通3轮"></el-step>
              </el-steps>
            </div>
          </div>
        </div>

        <div style="float: left;width: 200px;height: 576px;box-shadow: 0 2px 4px rgba(0, 0, 0, .12);margin-top: 10px">
          <div style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12);width:200px;
        height: 50px; font-size: 18px;color: darkturquoise;line-height: 50px" >上传头像</div>

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
          return{
              questions:[],
              imageUrl: '',
            user:{
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
              alert("修改成功")
              var username=this.$route.params.username;
              this.$router.push({path:"/userMain/"+username})
            }
          })
        },
    }
  }

</script>
