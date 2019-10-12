<template>
  <div>
    <headerno></headerno>
    <div  style=" margin: auto;margin-top: 10px;width: 100%;height: 42px;
border-radius:4px;background-color: darkturquoise;" >
      <div style="margin-right: 800px;font-size: 14px;line-height: 42px;color: white ;">
        <el-link :underline="false" @click="index()" style="font-size: 15px;line-height: 42px;color: white ;">小华佗在线 ></el-link>
        <span>医生服务 ></span><span>注册</span>
      </div>
    </div>
  <div style="width: 75%;margin: auto">
    <img src="../assets/newsinfo/gygghf.png" width="100%">
    <div style="width: 70%;float: left;background-color: whitesmoke">
      <div style="width:50%;margin: auto">
        <h2 style="color:rebeccapurple;" >欢迎加入小华佗</h2><br>
          <el-form ref="form" :model="newdocter" label-width="80px">
            <el-form-item label="用户名">
              <el-input v-model="newdocter.dname" @blur="checkdname()"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input type="password" v-model="newdocter.password" @blur="checkpassword()"></el-input>
            </el-form-item>
            <el-form-item label="真实姓名" style="width: 100%;margin: auto">
              <el-input v-model="newdocter.realname" @blur="checkrealname()"></el-input>
            </el-form-item><br>
            <el-form-item label="所属科室" style="width: 100%;">
              <el-select  v-model="newdocter.pid"  style="float: left">
                <el-option
                  v-for="department in departments"
                  :key="department.pid"
                  :label="department.name"
                  :value="department.pid"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="从业时间" style="width: 80%;">
              <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="newdocter.workTime" style="width: 192px" @blur="checkworkTime()"></el-date-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="性别" style="width: 50%">
              <el-radio-group v-model="newdocter.sex" @blur="checksex()">
                <el-radio label="男" value="男"></el-radio>
                <el-radio label="女" value="女"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="工作年限" style="width: 100%;margin: auto">
              <el-input-number v-model="newdocter.workyears" @change="handleChange" :min="1" :max="99" label="描述文字" @blur="checkworkyears()" style="width: 50%;float: left"></el-input-number>
            </el-form-item><br>
            <el-form-item label="邮箱" style="width: 100%;margin: auto">
              <el-input v-model="newdocter.email" @blur="checkemail()"></el-input>
            </el-form-item><br>
            <el-form-item label="邮箱验证" style="width: 100%">
              <el-input v-model="inputcode" placeholder="请输入邮箱内的验证码" @blur="checkcode" style="width: 50%;float: left"></el-input>
              <el-button style="background-color: skyblue;width: 40%;color: brown;float:left;margin-left: 20px" @click="getcode()">{{content}}</el-button>
            </el-form-item>
            <el-form-item label="上传头像" style="width: 100%;float: left" >
              <el-upload
                class="upload-file"
                drag
                :action="doUpload"
                :before-upload="beforeUpload">
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              </el-upload>
              <!--<el-button style="float:left" @click="uploadpic()">确认上传</el-button>-->
            </el-form-item>

            <el-form-item label="工作经历" style="width: 99%;float: left">
              <el-input type="textarea" v-model="newdocter.experience" @blur="checkexperience()"></el-input>
            </el-form-item>
            <el-form-item style="width: 100%;float: left">
              <el-button type="primary" @click="docterregist(newdocter)" style="width: 66%">立即创建</el-button>
              <el-button @click="cancle()" style="width: 30%">取消</el-button>
            </el-form-item>
          </el-form>
      </div>
    </div>
    <div style="width: 30%;float: left">
      <div style="width: 100%">
        <img src="../assets/newsinfo/ggwzz.jpg" width="100%">
      </div>
      <div>
        <h3>如有需求，请联系网站管理员:栾旗</h3>
      </div>
      <div style="width: 100%">
       <img src="../assets/newsinfo/gygg.png" width="100%">
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import headerno from './headerno.vue';
  import ElForm from "../../node_modules/element-ui/packages/form/src/form";
  import ElInput from "../../node_modules/element-ui/packages/input/src/input";
  import ElButton from "../../node_modules/element-ui/packages/button/src/button";
  import ElMain from "../../node_modules/element-ui/packages/main/src/main";
  import ElAside from "../../node_modules/element-ui/packages/aside/src/main";
  import ElDivider from "../../node_modules/element-ui/packages/divider/src/main";
  export default {
    name: 'newsinfo',
    components:{
      ElDivider,
      ElAside,
      ElMain,
      ElButton,
      ElInput,
      ElForm,
      headerno
    },
    data () {
      return {
        doUpload:'api/uploadpic',
        content:'发送验证码',
        totalTime: 60,
        canClick: true,
        realcode:'%……#@%Rsdfsdfgf',
        newdocter:{
          dname:'',
          password:'',
          realname:'',
          sex:'',
          workTime:'',
          workyears:'',
          email:'',
          experience:'',
          pic:'',
          pid:''
        },
        inputcode:'',
        departments:[],
        docterpic:''
      }
    },
    mounted(){
      this.queryparts();
    },
    methods:{
      queryparts:function () {
        var url="api/getParts"
        axios.get(url).then(res=>{
          this.departments=res.data
        })
      },
      getcode:function () {
        if (!this.canClick)return;
        this.canClick=false;
        this.content=this.totalTime+'s后重新发送';//解决倒计时开始不是60s的问题
        var url="api/getcode"
        axios.post(url,{email:this.newdocter.email}).then(res=>{
          if(res.data!=''){
            this.realcode=res.data;
            this.$message('验证码已成功发送至您的邮箱，请注意查收');
          }else{
            this.$message.error('发送失败，请检查您的邮箱')
          }
        })
        let clock=window.setInterval(()=>{
          this.totalTime--;
          this.content=this.totalTime+'s后重新发送';
          if (this.totalTime<0){
            window.clearInterval(clock)//倒计时小于0时清楚定时器
            this.content='重新发送验证码';
            this.totalTime=60;
            this.canClick= true;
          }
        },1000)
      },
      checkcode:function () {
        if(this.inputcode!=this.realcode){
          this.$message({message:'验证码错误，请重新填写',type:'warning'})
        }else{
          this.$message({message:'恭喜，验证成功',type:'success'})
        }
      },
      checkdname:function () {
        if(this.newdocter.dname.length>11||this.newdocter.dname.length<6){
          this.$message({message:'用户名长度不正确，请重新填写(6-11位)',type:'warning'})
          this.newdocter.dname='';
        }else{
          var url='api/checkdname'
          axios.post(url,{dname:this.newdocter.dname}).then(res=>{
            if(res.data!='0'){
              this.$message({message:'恭喜您，该用户名可用',type:'success'})
            }else {
              this.$message.error('对不起，该用户名已被注册')
              this.newdocter.dname='';
            }
          })
        }
      },
      checkpassword:function () {
        if (this.newdocter.password.length > 11 || this.newdocter.password.length < 4) {
          this.$message({message: '密码格式不正确，请重新填写(4-11位)', type: 'warning'})
          this.newdocter.password = '';
        } else {
        }
      },
      checkrealname:function () {
        if(this.newdocter.realname==''){
          this.$message({message: '真实姓名不能为空', type: 'warning'})
        }
      },
      checksex:function () {
        if(this.newdocter.sex==''){
          this.$message({message: '性别不能为空', type: 'warning'})
        }
      },
      checkworkTime:function () {
        if(this.newdocter.workTime==''){
          this.$message({message: '从业时间不能为空', type: 'warning'})
        }
      },
      checkworkyears:function () {
        if(this.newdocter.workyears==''){
          this.$message({message: '工作年限不能为空', type: 'warning'})
        }
      },
      checkexperience:function () {
        if(this.newdocter.experience==''){
          this.$message({message: '工作经历不能为空', type: 'warning'})
        }
      },
      beforeUpload(file){
        var url='api/uploadpic'
        let fd=new FormData();
        fd.append('file',file);
        axios.post(url,fd).then(res=>{
          if(res!=''){
            this.newdocter.pic=res.data;
          }else{
            this.$message.error('上传失败，请检查您的网络')
          }
        })
      },
      docterregist:function (newdocter) {
        if (this.newdocter.dname != ''&&this.newdocter.realname != ''&&this.newdocter.sex != ''&&this.newdocter.workyears != ''&&this.newdocter.workTime != ''&&
          this.newdocter.experience != ''&&this.newdocter.password != ''&&this.newdocter.email != ''&&this.newdocter.pic != ''){
          var url = 'api/docterregist'
          axios.post(url, this.newdocter).then(res => {
            if (res.data != '0') {
              const h = this.$createElement;
              this.$notify({
                title: '注册成功',
                message: '已自动返回主页',
                type: 'success'
              });
              this.$router.push({name: 'index'})
            } else {
              this.$message.error('注册失败，请稍后重试')
            }
          })
        }else{
          this.$message.error('请填写完整信息')
        }
      },
      cancle:function () {
        this.$router.push({name:'index'})
      },
      checkemail:function () {
        if(this.newdocter.email==''){
          this.$message({message: '邮箱未填写', type: 'warning'})
        }
      }
    }
  }
</script>
<style>

</style>

