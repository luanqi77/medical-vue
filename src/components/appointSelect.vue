<template>
  <div>
      <okuserheader></okuserheader>
      <div  style=" margin: auto;margin-top: 10px;width: 100%;height: 42px;
      border-radius:4px;background-color: darkturquoise;" >
        <div style="margin-right: 900px;font-size: 14px;line-height: 42px;color: white ;">
          <el-link :underline="false" @click="index()" style="font-size: 15px;line-height: 42px;color: white ;">华佗医疗 ></el-link>
          <span>预约挂号</span>
        </div>
      </div>
          <div style="margin: auto;width: 75%">
              <img src="../assets/images/guanggao.png" style="margin: auto;width: 100%">

              <div style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12);width:76%;
            height: 150px;margin-top: 10px;float: left;margin: auto" >
                <form model="questions">
                <div style="font-size: 18px;color: darkturquoise;line-height: 80px;margin-left: -100px;" >
                  <span>科室 :</span>
                  <el-tag style="font-size: 16px">内科</el-tag><el-divider direction="vertical"></el-divider>
                  <el-tag style="font-size: 16px">外科</el-tag><el-divider direction="vertical"></el-divider>
                  <el-tag style="font-size: 16px">神经科</el-tag><el-divider direction="vertical"></el-divider>
                  <el-tag style="font-size: 16px">妇产科</el-tag><el-divider direction="vertical"></el-divider>
                  <el-tag style="font-size: 16px">儿科</el-tag><el-divider direction="vertical"></el-divider>
                  <el-tag style="font-size: 16px">皮肤科</el-tag><el-divider direction="vertical"></el-divider>
                  <el-tag style="font-size: 16px">男科</el-tag><el-divider direction="vertical"></el-divider>
                  <el-tag style="font-size: 16px">整形外科</el-tag><el-divider direction="vertical"></el-divider>
                  <el-tag style="font-size: 16px">肿瘤科</el-tag>
                  <br>
                  <div style="margin-top: -15px;margin-left: 67px;width: 400px">就诊日期 :<input type="date"  style="width: 200px;
                  margin-left: 10px;margin-top: 20px;height: 20px;color: darkturquoise" ></input></div>
                </div>
                </form>
              </div>

              <div style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12);width:24%;
            height: 150px;margin-top: 2px;margin-left: 950px" >
                  <span style="text-align: center;font-size: 18px;line-height: 40px">当前在线<i style="color: darkturquoise">1888</i>名医生</span><br>
                  <span style="text-align: center;font-size: 25px;line-height: 50px">免费向医生咨询</span><br>
                  <el-button plain @click="toAsk()">立即咨询</el-button>
              </div>
              <div style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12);width:76%;height: 300px;margin-top: 2px;
              margin: auto;float: left" >
                <span style="color: darkturquoise;font-size: 20px;line-height: 50px;margin-left: -850px">推荐医生</span>
                <div style="float: left;width: 100px;height: 100px;
                margin-left: 100px;margin-top: 70px; ">
                  <img src="../assets/images/huatuo.jpg" style="width: 100px;height: 100px">
                </div>

                <div style="float: left;width: 100px;height: 100px;
                margin-left: 50px;margin-top: 70px;">
                  <span style="font-size: 20px">华佗</span><br>
                  <span>主治医师</span><br>
                  <span>中华医院</span><br>
                  <span>全能</span>
                </div>
                <div style="float: left;width: 100px;height: 100px;
                margin-left: 50px;margin-top: 70px; ">
                  <span>擅长疾病:全身上下无所不能</span><br>
                </div>
                <div style="float: left;width: 100px;height: 100px;
                margin-left: 50px;margin-top: 70px;">
                  <span>9999次被赞</span><br>
                  <span>9999次预约</span>
                </div>
                <div style="float: left;width: 100px;height: 100px;
                margin-left: 50px;margin-top: 70px; ">
                  <span>暂不接受预约</span><br>
                </div>
              </div>
              <img src="../assets/images/gg.png" style="margin: auto;width: 24%">
          </div>
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
  import ElTag from "../../node_modules/element-ui/packages/tag/src/tag";
  export default{
    components: {
      ElTag,
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
              questions:{
                description:'',
               createTime: '',

              },
              users:[]
          }
      },
      mounted(){
////        this.questions=[{description:"头大头大"}]
//        var url="api/selectUserQuestion"
//        axios.post(url).then(res=>{
//          this.questions=res.data;
//        })
      },
    methods: {
      index(){
        var username=this.$route.params.username;
        this.$router.push({path:"/index/"+username})
      },
      toAsk(){
        var username=this.$route.params.username;
        this.$router.push({path:"/userAsk/"+username})
      }
//      submitForm(){
//        var url="api/insertQuestion"
//        axios.post(url,this.question).then(res=>{
//            if(res.data=="ok"){
//                this.$router.push("/userMessage")
//            }
//        })
//      }


    }
  }

</script>
