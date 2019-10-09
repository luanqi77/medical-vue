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

              <div style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12);width:75%;
            height: 150px;margin-top: 10px;float: left;margin: auto" >
                <!--<span style="font-size: 18px;line-height: 80px;margin-left: -700px">真的是什么问题</span>-->
                <form model="questions">
                <div style="font-size: 18px;color: darkturquoise;line-height: 80px;margin-left: -250px;" ><i class="el-icon-question"></i>
                  <input v-model="questions.description" style="width: 500px;color:darkturquoise;font-size: 16px ;"/></div>
                </form>
              </div>

              <div style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12);width:24%;
            height: 150px;margin-top: 2px;margin-left: 945px" >
                  <span style="text-align: center;font-size: 18px;line-height: 40px">当前在线<i style="color: darkturquoise">1888</i>名医生</span><br>
                  <span style="text-align: center;font-size: 25px;line-height: 50px">免费向医生咨询</span><br>
                  <el-button plain >立即咨询</el-button>
              </div>
              <div style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12);width:75%;height: 300px;margin-top: 2px;
              margin: auto;float: left" >
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
              questions:{
                description:'',
               createTime: '',

              },
              users:[]
          }
      },
      mounted(){
//        this.questions=[{description:"头大头大"}]
        var url="api/selectUserQuestion"
        axios.post(url).then(res=>{
          this.questions=res.data;
        })
      },
    methods: {
      index(){
        this.$router.push("/index")
      },
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
