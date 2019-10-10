<template>
  <div>
      <okuserheader></okuserheader>
      <div  style=" margin: auto;margin-top: 10px;width: 100%;height: 42px;
      border-radius:4px;background-color: darkturquoise;" >
        <div style="margin-right: 800px;font-size: 14px;line-height: 42px;color: white ;">
          <el-link :underline="false" @click="index()" style="font-size: 15px;line-height: 42px;color: white ;">华佗医疗 ></el-link>
          <span>普通咨询</span>
        </div>
        <div style="float: left;width:715px;margin-left: 332px;">
          <div style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12);width:715px;
        height: 50px;margin-top: 10px" >
            <div style="float: left; margin-left: 35px">
              <span style="line-height: 50px;margin-left: 0px;font-size: 18px;color: darkturquoise">病情描述(至少10个字)</span>
            </div>
          </div>
        </div>
      </div>
    <div style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12);width:24%;
            height: 150px;margin-top: -51px;margin-left: 1050px;float: left" >
      <span style="text-align: center;font-size: 18px;line-height: 40px">当前在线<i style="color: darkturquoise">1888</i>名医生</span><br>
      <span style="text-align: center;font-size: 25px;line-height: 50px">免费向医生咨询</span><br>
      <el-button plain @click="toAsk()">立即咨询</el-button>
    </div>
    <div style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12);width:715px;height: 500px;margin-top: -96px;
    float: left;margin-left: 332px" >
        <el-form :inline="true" :model="question" status-icon :rules="rules" class="demo-ruleForm">
          <el-form-item  prop="description" label=" ">
            <el-input
              type="textarea"
              style="border-radius: 4px; margin-left: auto;margin-top: 10px;
              height: 250px;width: 600px; font-size: 16px"
              :rows="8"
              placeholder="请详细描述您的病情，有助于医生的解答(至少输入10个字)"
              v-model="question.description">
            </el-input>
          </el-form-item>
          <div style="float: left; margin-left: -175px;width: 715px">
            <span style="line-height: 50px;margin-left: -175px;font-size: 18px;color: darkturquoise">患者信息</span>
          </div>
          <el-form-item prop="age" label="年龄">
            <el-input v-model.number="question.age"placeholder="输入您的年龄"  style="margin-left: 10px"></el-input>
          </el-form-item><br>
          <el-radio-group v-model="question.sex" >
            <el-radio :label="1">男</el-radio>
            <el-radio :label="2">女</el-radio>
          </el-radio-group><br>
          <el-form-item>
            <el-button type="primary" @click="submitForm()" style="margin-top: 10px">提交</el-button>
          </el-form-item>
        </el-form>
    </div>
    <img src="../assets/images/gg.png" style="margin-right: 212px;width: 24%">
    <div style="float: left">
      <foot></foot>
    </div>

  </div>

</template>
<style>
</style>
<script>
  import axios from 'axios'
  import foot from './foot'
  import okuserheader from  './okuserheader'
  import ElLink from "../../node_modules/element-ui/packages/link/src/main";
  import ElButton from "../../node_modules/element-ui/packages/button/src/button";
  import ElForm from "../../node_modules/element-ui/packages/form/src/form";
  import ElInput from "../../node_modules/element-ui/packages/input/src/input";
  import ElFormItem from "../../node_modules/element-ui/packages/form/src/form-item";
  import ElRadio from "../../node_modules/element-ui/packages/radio/src/radio";
  import ElRadioGroup from "../../node_modules/element-ui/packages/radio/src/radio-group";
  export default{
    components: {
      foot,
      okuserheader,
      ElRadioGroup,
      ElRadio,
      ElFormItem,
      ElInput,
      ElForm,
      ElButton,
      ElLink},
    data(){
          return{
              question:{
                description:'',
                age:'',
                sex:'',
                uid:''
              },
              rules:{
                description: [
                  { required: true, message: '请至少输入10个字', trigger: 'blur' },
                  { min: 10, max: 100, message: '长度在 10 到 200 个字符', trigger: 'blur' }
                ],
                age: [
                  { required: true, message: '请输入年龄', trigger: 'blur' },
                  { type:'number', message: '请输入数字', trigger:[ 'blur','change' ] }
                ],
              },
              users:[]
          }
      },
      mounted(){
        var username=this.$route.params.username;
        var urls="api/selectUid"
        axios.post(urls,{username:username}).then(res=>{
          this.question.uid=res.data
        })
      },
    methods: {
      index(){
        var username=this.$route.params.username;
        this.$router.push({path:"/index/"+username})
      },
      toAsk(){
        var username=this.$route.params.username;
        this.$router.push({path:"/userAsk/"+username})
      },
      submitForm(){
        var url="api/insertQuestion"
        axios.post(url,this.question).then(res=>{
            if(res.data=="ok"){
              var username=this.$route.params.username;
              this.$router.push({path:"/userMain/"+username})
            }else {
                alert("请填写信息")
            }
        })
      }


    }
  }

</script>
