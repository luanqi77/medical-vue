<template>
  <div>
      <headerok></headerok>
      <div  style=" margin: auto;margin-top: 10px;width: 100%;height: 42px;
      border-radius:4px;background-color: darkturquoise;" >
        <div style="margin-right: 728px;font-size: 14px;line-height: 42px;color: white ;">
          <el-link :underline="false"style="font-size: 15px;line-height: 42px;color: white ;">华佗医疗 ></el-link>
          <span>个人中心 ></span>
          <span>我的回复</span>
        </div>
        <div style="margin: auto;width: 75%">
          <div style="float: left;width:715px;margin-left: 158px;">
            <div style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12);width:715px;
          height: 50px;margin-top: 10px" >

                <div style="float: left;">
                 <el-link  @click="doctermain()" style="line-height: 50px;margin-left: 20px;font-size: 18px;color: darkturquoise">问题信箱</el-link>
                 <el-link  @click="myanswer()" style="line-height: 50px;margin-left: 40px;font-size: 18px;color: darkturquoise">我的回复</el-link>
                </div>
            </div>
            <div style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12);width:715px;height: 525px;margin-top: 2px;margin: auto" >

              <el-table
                :data="docteranswers"
                style="width: 100% ;font-size: 16px;border-right:solid rgba(0, 0, 0, .12);"
                :row-class-name="tableRowClassName">
                <el-table-column
                  prop="uid"
                  label="用户ID"
                  width="100"
                >
                </el-table-column>
                <el-table-column
                  prop="createTime"
                  label="回复时间"
                  width="150"
                  :formatter="dateFormat"
                >
                </el-table-column>
                <el-table-column
                  prop="answer"
                  label="回复详情"
                  width="250"
                >
                </el-table-column>
                <el-table-column
                  label="操作"
                  width="140"
                >
                <template slot-scope="docteranswer">
                  <el-button type="primary" plain @click="answerinfo(docteranswer.row.qid)">查看详情</el-button>
                </template>
                </el-table-column>
              </el-table>
            </div>
          </div>

          <div style="float: left;width: 200px;height: 594px;box-shadow: 0 2px 4px rgba(0, 0, 0, .12);margin-top: 10px">
            <div style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12);width:200px;
          height: 50px; font-size: 18px;color: darkturquoise;line-height: 50px" >个人信息</div><br>
            <div style="width: 200px;height: 190px">
              <el-avatar :size="160" shape="square" :src="docter.pic"></el-avatar>
            </div>
            <div style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12);width:200px;
          height: 335px; font-size: 16px;color:indigo;line-height: 40px" >
              <div>姓名：{{docter.realname}}</div>
              <div>科室：{{department}}</div>
              <div>工作年限：{{docter.workyears}}</div>
              <div>{{docter.email}}</div>
              <div>从业时间：{{docter.workTime.substr(0,10)}}</div>

              修改:<el-divider direction="vertical"></el-divider><el-button
              size="mini" @click="updatedocter()" icon="el-icon-edit" style="color: limegreen"></el-button>
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
  import headerok from  './headerok'
  import ElLink from "../../node_modules/element-ui/packages/link/src/main";
  import ElButton from "../../node_modules/element-ui/packages/button/src/button";
  export default{
    components: {
      headerok,
      foot,
      ElButton,
      ElLink},
    data(){
          return{
            docter: {
              dname: '',
              password: '',
              realname: '',
              sex: '',
              workTime: '',
              workyears: '',
              email: '',
              experience: '',
              pic: '',
              pid: ''
            },
            docteranswers:[],
            department: '',
            partid: '',
            did: ''
          }
      },
      mounted(){
        this.getdocter();
        this.getanswers();
      },
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
      query: function () {
        var url = '/api/selectHospital/' + this.params.page + "/" + this.params.size
        axios.get(url).then(res => {
          if (res.data != null) {
            this.hospitals = res.data.list;
            this.total = res.data.total;

          }
        })
      },
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
      doctermain(){
        var id=this.$route.params.id;
        this.$router.push({path:"/doctermain/"+id})
      },
      userAppoint(){
        var username=this.$route.params.username;
        this.$router.push({path:"/userAppoint/"+username})
      },
      appoint(hname){
        var username=this.$route.params.username;
          this.$router.push({path:"/appointSelect/"+username+"/"+hname})
      },
      updatedocter:function () {
        var id=this.did;
        this.$router.push({path:"/docterupdate/"+id})
      },
      getdocter: function () {
        var did = this.$route.params.id
        var url = 'api/selectbydid'
        axios.post(url, {did: did}).then(res => {
          this.docter = res.data
          this.partid = this.docter.pid
          this.did = this.docter.did
          this.getpart();
          this.getquestions();
        })
      },
      getpart: function () {
        var url = "api/getpart"
        axios.post(url, {pid: this.partid}).then(res => {
          this.department = res.data
        })
      },
      getanswers: function () {
        var url = 'api/getanswers'
        var did =this.$route.params.id
        axios.post(url, {did: did}).then(res => {
          this.docteranswers = res.data
        })
      },
      dateFormat:function(row,column){
        var t=new Date(row.createTime);//row 表示一行数据, updateTime 表示要格式化的字段名称
        return t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate();
      }
    }
  }

</script>
