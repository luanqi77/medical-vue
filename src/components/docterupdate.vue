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
        <h2 style="color:rebeccapurple;" >个人信息修改</h2>
          <el-form ref="form" :model="docter" label-width="80px">
            <el-form-item label="用户名">
              <p style="float: left;margin-top: auto;font-weight: 300;height: 0px;font-size: 15px">{{docter.dname}}</p>
            </el-form-item>
            <el-form-item label="密码">
              <el-input type="password" v-model="docter.password" @blur="checkpassword()"></el-input>
            </el-form-item>
            <el-form-item label="真实姓名" style="width: 100%;margin: auto">
              <el-input v-model="docter.realname" @blur="checkrealname()"></el-input>
            </el-form-item><br>
            <el-form-item label="所属科室" style="width: 100%;">
              <p style="float: left;margin-top: auto;font-weight: 300;height: 0px;font-size: 15px">{{department}}</p>
            </el-form-item>
            <el-form-item label="从业时间" style="width: 80%;">
              <el-col :span="11">
                <p style="float: left;margin-top: auto;font-weight: 300;height: 0px;font-size: 15px">{{docter.workTime}}</p>
              </el-col>
            </el-form-item>
            <el-form-item label="性别" style="width: 50%">
              {{docter.sex}}
            </el-form-item>
            <el-form-item label="工作年限" style="width: 100%;margin: auto">
              <el-input-number v-model="docter.workyears" @change="handleChange" :min="1" :max="99" label="描述文字" @blur="checkworkyears()" style="width: 50%;float: left"></el-input-number>
            </el-form-item><br>
            <el-form-item label="邮箱" style="width: 100%;margin: auto">
              <p style="float: left;margin-top: auto;font-weight: 300;height: 0px;font-size: 15px">{{docter.email}}</p>
            </el-form-item><br>
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
              <el-input type="textarea" v-model="docter.experience" @blur="checkexperience()"></el-input>
            </el-form-item>
            <el-form-item style="width: 100%;float: left">
              <el-button type="primary" @click="docterupdate(docter)" style="width: 66%">确认修改</el-button>
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
        docter:{
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
        department:'',
        partid:'',
        docterpic:''
      }
    },
    mounted(){
        this.querydocter();
    },
    methods:{
      getpart: function () {
        var url = "api/getpart"
        axios.post(url, {pid: this.partid}).then(res => {
          this.department = res.data
        })
      },
      checkpassword:function () {
        if (this.docter.password.length > 11 || this.docter.password.length < 4) {
          this.$message({message: '密码格式不正确，请重新填写(4-11位)', type: 'warning'})
          this.docter.password = '';
        } else {
        }
      },
      checkrealname:function () {
        if(this.docter.realname==''){
          this.$message({message: '真实姓名不能为空', type: 'warning'})
        }
      },
      checkworkTime:function () {
        if(this.docter.workTime==''){
          this.$message({message: '从业时间不能为空', type: 'warning'})
        }
      },
      checkworkyears:function () {
        if(this.docter.workyears==''){
          this.$message({message: '工作年限不能为空', type: 'warning'})
        }
      },
      checkexperience:function () {
        if(this.docter.experience==''){
          this.$message({message: '工作经历不能为空', type: 'warning'})
        }
      },
      beforeUpload(file){
        var url='api/uploadpic'
        let fd=new FormData();
        fd.append('file',file);
        axios.post(url,fd).then(res=>{
          if(res!=''){
            this.docter.pic=res.data;
          }else{
            this.$message.error('上传失败，请检查您的网络')
          }
        })
      },
      docterupdate:function (docter) {
        if (this.docter.dname != ''&&this.docter.realname != ''&&this.docter.sex != ''&&this.docter.workyears != ''&&this.docter.workTime != ''&&
          this.docter.experience != ''&&this.docter.password != ''&&this.docter.email != ''&&this.docter.pic != ''){
          var url = 'api/docterupdate'
          var id =this.docter.did
          axios.post(url, this.docter).then(res => {
            if (res.data != '0') {
              const h = this.$createElement;
              this.$notify({
                title: '修改成功',
                message: '已自动返回',
                type: 'success'
              });
              this.$router.push({path:"/doctermain/"+id})
            } else {
              this.$message.error('修改失败，请稍后重试')
            }
          })
        }else{
          this.$message.error('请填写完整信息')
        }
      },
      cancle:function () {
          var id = this.docter.did
        this.$router.push('doctermain/'+id)
      },
      querydocter:function () {
        var did = this.$route.params.id
        var url = 'api/selectbydid'
        axios.post(url, {did: did}).then(res => {
          this.docter = res.data
          this.partid = this.docter.pid
          this.getpart();
        })
      }
    }
  }
</script>
<style>

</style>

