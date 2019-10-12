<template>
  <div>
      <headerok></headerok>
      <div  style=" margin: auto;margin-top: 10px;width: 100%;height: 42px;
      border-radius:4px;background-color: darkturquoise;" >
        <div style="margin-right: 800px;font-size: 14px;line-height: 42px;color: white ;">
          <el-link :underline="false"  style="font-size: 15px;line-height: 42px;color: white ;">华佗医疗 ></el-link>
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
        <el-form :inline="true" :model="answer" status-icon :rules="rules" class="demo-ruleForm">
          <el-form-item  prop="description" label=" ">
            <div style="float: left;margin-left: 70px">患者年龄：{{question.age}}</div><br>
            <div style="float: left;margin-left: 70px">患者性别：{{question.sex}}</div><br>
            <div style="float: left;margin-left: 70px">问题描述：{{question.description}}</div>
            <el-input
              type="textarea"
              style="border-radius: 4px; margin-left: auto;margin-top: 10px;
              height: 250px;width: 600px; font-size: 16px"
              :rows="8"
              placeholder="请输入您的回复，帮助该患者解决问题(至少输入10个字)"
              v-model="answer.answer">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm()" style="margin-top: 0px;height: 40px;width: 100px">提交</el-button>
            <el-button @click="cancle()" style="width: 80px;text-align: center">取消</el-button>
          </el-form-item>
        </el-form>
    </div>
    <!--<img src="../assets/images/gg.png" style="margin-right: 212px;width: 24%">-->
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
  import headerok from  './headerok'
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
      headerok,
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
                answer: [
                  { required: true, message: '请至少输入10个字', trigger: 'blur' },
                  { min: 10, max: 100, message: '长度在 10 到 200 个字符', trigger: 'blur' }
                ]
              },
              answer:{
                  did:'',
                  uid:'',
                  qid:'',
                  answer:'',
                  createTime:'',
                  state:''
              }
          }
      },
      mounted(){
        this.queryquestion();
      },
    methods: {
      index(){
        var doctername=this.$route.params.doctername;
        this.$router.push({path:"/index/"+doctername})
      },
      toAsk(){
        var doctername=this.$route.params.doctername;
        this.$router.push({path:"/docterAsk/"+doctername})
      },
      submitForm(){
        var url="api/insertQuestion"
        axios.post(url,this.question).then(res=>{
            if(res.data=="ok"){
              var doctername=this.$route.params.doctername;
              this.$router.push({path:"/docterMain/"+doctername})
            }else {
              this.$message.error('请填写信息');
            }
        })
      },
      queryquestion:function () {
        var qid=this.$route.params.qid
        var url="api/queryquestion"
        axios.post(url,{qid:qid}).then(res=>{
            this.question=res.data
        })
      },
      cancle:function () {
          var id=this.question.did
        this.$router.push({path:"/docterMain/"+id})
      },
      submitForm:function () {
        var url='api/addanswered'
        this.answer.uid=this.question.uid;
        this.answer.qid=this.question.qid;
        this.answer.did=this.question.did;
        axios.post(url,this.answer).then(res=>{
          if (res.data != '0') {
            var id =this.question.did
            const h = this.$createElement;
            this.$notify({
              title: '回复成功',
              message: '已自动返回',
              type: 'success'
            });
            this.$router.push({path:"/doctermain/"+id})
          } else {
            this.$message.error('回复失败，请稍后重试')
          }
        })
      }
      }
  }

</script>
