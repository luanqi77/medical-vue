<template>
  <div>
      <okuserheader></okuserheader>
      <div  style=" margin: auto;margin-top: 10px;width: 100%;height: 42px;
      border-radius:4px;background-color: darkturquoise;" >
        <div style="margin-right: 900px;font-size: 14px;line-height: 42px;color: white ;">
          <el-link :underline="false" @click="index()" style="font-size: 15px;line-height: 42px;color: white ;">华佗医疗 ></el-link>
          <span>普通咨询</span>
        </div>
      </div>
          <div style="margin: auto;width: 75%">

              <img src="../assets/images/guanggao.png" style="margin: auto;width: 100%">

              <div style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12);width:75%;
            height: 150px;margin-top: 10px;float: left;margin: auto" >


                <form model="questions">
                <div style="font-size: 18px;color: darkturquoise;line-height: 80px;margin-left: 80px;width: 500px;text-align: left" >
                  <i class="el-icon-s-custom"></i>{{questions.description}}
                  </div>
                  <el-button plain @click="toAsk()" style="background-color: darkturquoise;color: white;
                  margin-right: -700px ;margin-top: -10px" >向医生提问</el-button>
                  <div style="color: darkturquoise;margin-top: 10px;margin-left: 600px; font-size: 16px;width: 350px" >
                     {{questions.createTime}}
                  </div>
                  <div style="color: darkturquoise;margin-top: -45px;margin-left: 120px;font-size: 16px;width: 50px" >
                   {{questions.age}}岁
                  </div>
                  <div style="color: darkturquoise;margin-top: -22px;margin-left: 90px;width: 20px" >
                     {{questions.sex==1?'男':'女'}}
                  </div>

                </form>
              </div>

              <div style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12);width:24%;
            height: 150px;margin-top: 2px;margin-left: 945px" >
                  <span style="text-align: center;font-size: 18px;line-height: 40px">当前在线<i style="color: darkturquoise">1888</i>名医生</span><br>
                  <span style="text-align: center;font-size: 25px;line-height: 50px">免费向医生咨询</span><br>
                  <el-button plain @click="toAsk()" >立即咨询</el-button>
              </div>
              <div style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12);width:75%;height: 300px;margin-top: 2px;
              margin: auto;float: left" >
                <div style="font-size: 18px;margin-left: -650px;margin-top: 30px">医生回答<i class="el-icon-star-off"></i>
                  <i class="el-icon-star-off"></i></div>
                <div style="margin:auto;margin-top: 20px;height: 200px">
                    <div style="margin: auto;height: 50px">
                      <div style="float:left;width: 50px;height: 50px;margin-left: 80px"> <el-avatar icon="el-icon-user-solid"></el-avatar></div>
                      <form model="docter">
                        <div style="float: left;width: 150px;height: 50px;line-height: 40px;font-size: 18px">医生:{{docter.dname}}</div>
                        <div style="float: left;width: 160px;height: 50px;line-height: 40px;font-size: 18px">从业时间:{{docter.workyears}}年</div>
                      </form>
                    </div>
                    <div style="margin: auto;height: 150px;">
                        <form model="doctorAnswer">
                            <div style="width: 600px;height: 50px;font-size: 18px;margin-left: 150px;text-align: left">{{doctorAnswer.answer}}</div>
                            <div style="width: 200px;height: 50px;margin-left: 700px;margin-top: 40px">{{doctorAnswer.createTime}}</div>
                        </form>

                    </div>

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
                age:'',
                sex:''

              },
              docter:{
                  dname:'',
                  workyears:''
              },
            doctorAnswer:{
                  answer:'',
                  createTime:''
            }
          }
      },
      mounted(){
        var description=this.$route.params.description;
        var url="api/selectUserQuestion"
        axios.post(url,{description:description}).then(res=>{
          this.questions=res.data;
        })

        var  urls="api/selectDocter"
        axios.post(urls,{description:description}).then(res=>{
            this.docter=res.data;
        })

        var urlss="api/selectAnswer"
        axios.post(urlss,{description:description}).then(res=>{
            this.doctorAnswer=res.data;
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
      }

    }
  }

</script>
