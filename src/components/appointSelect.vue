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
                <form model="guahao">
                <div style="font-size: 18px;color: darkturquoise;line-height: 80px;margin:auto;" >
                  <span>选择科室 :</span>
                  <el-radio-group v-model="guahao.syn" >
                    <el-radio :label="1"><el-tag style="font-size: 16px">内科</el-tag></el-radio>
                    <el-radio :label="2"><el-tag style="font-size: 16px">外科</el-tag></el-radio>
                    <el-radio :label="3"><el-tag style="font-size: 16px">神经科</el-tag></el-radio>
                    <el-radio :label="4"><el-tag style="font-size: 16px">儿科</el-tag></el-radio>
                    <el-radio :label="5"><el-tag style="font-size: 16px">男科</el-tag></el-radio>
                    <el-radio :label="6"><el-tag style="font-size: 16px">皮肤科</el-tag></el-radio>
                    <el-radio :label="7"><el-tag style="font-size: 16px">妇产科</el-tag></el-radio>
                  </el-radio-group>
                  <br>
                  <div style="margin-top: -15px;margin-left:-10px;width: 100%">就诊日期 :<input type="date" v-model="guahao.g_time" style="width: 200px;
                  margin-left: 10px;margin-top: 20px;height: 20px;color: darkturquoise;border-radius: 10px" ></input>
                    <el-button type="primary" @click="submitForm()" style="margin-left: 450px;font-size: 18px">提交预约</el-button>
                  </div>

                </div>
                </form>
              </div>

              <div style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12);width:24%;
            height: 150px;margin-top: 2px;margin-left: 950px" >
                  <span style="text-align: center;font-size: 18px;line-height: 40px">当前在线<i style="color: darkturquoise">1888</i>名医生</span><br>
                  <span style="text-align: center;font-size: 25px;line-height: 50px">免费向医生咨询</span><br>
                  <el-button plain @click="toAsk()">立即咨询</el-button>
              </div>
              <div style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12);width:76%;height: 400px;margin-top: 2px;
              margin: auto;float: left" >
                <span style="font-size: 20px;line-height: 50px;margin:auto">推荐医生</span>
                <div style="width:100%;height: 300px;margin-top: 2px" >
                  <el-table
                    :data="docter"
                    style="width: 100% ;font-size: 16px;border-right:solid rgba(0, 0, 0, .12);"
                    :row-class-name="tableRowClassName">

                    <el-table-column
                      prop=""
                      label="头像"
                      width="250"
                    >

                      <template slot-scope="docter">
                        <el-avatar shape="circle" :size="60"  :src="docter.row.pic"></el-avatar>
                      </template>
                    </el-table-column>
                    <el-table-column
                      prop="dname"
                      label="姓名"
                      width="210"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="workyears"
                      label="从业时间"
                      width="210"
                    >
                    </el-table-column>
                    <el-table-column
                    prop="experience"
                    label="主治"
                    width="275"
                  >
                  </el-table-column>

                  </el-table>
                  <el-pagination
                    background
                    layout="prev, pager, next"
                    :page-size="this.params.size"
                    v-on:current-change="changePage"
                    :total="total"
                    :current-page="this.params.page">
                  </el-pagination>
                </div>
              </div>
              <img src="../assets/images/gg.png" style="margin: auto;width: 24%;height: 400px">
          </div>
    <div style="float: left">
      <foot></foot>
    </div>

  </div>

</template>
<style>

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
              total: '0',
              docter:[],
              params: {
                page: '1',
                size: '3',
              },
              guahao:{
                  gname:'',
                  g_time:'',
                  syn:'',
                  gdocter:'',
                  uid:''
              },
              users:[]
          }
      },
      mounted(){
        this.query();
        var gname=this.$route.params.hname;
        this.guahao.gname=gname;

        var urls="api/selectUid"
        var username=this.$route.params.username;
        axios.post(urls,{username:username}).then(res=>{
          this.guahao.uid=res.data
        })
      },
    methods: {
      changePage: function (page) {
        this.params.page = page
        this.query();

      },
      query: function () {
        var url = '/api/DocterFindAll/' + this.params.page + "/" + this.params.size
        axios.get(url).then(res => {
          if (res.data != null) {
            this.docter = res.data.list;
            this.total = res.data.total;
          }
        })
      },
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
      index(){
        var username=this.$route.params.username;
        this.$router.push({path:"/index/"+username})
      },
      toAsk(){
        var username=this.$route.params.username;
        this.$router.push({path:"/userAsk/"+username})
      },
      submitForm(){
        var url="api/insertOneGuahao"
        axios.post(url,this.guahao).then(res=>{
            if(res.data=="ok"){
              this.$message({
                message: '预约成功',
                type: 'success'
              });
              var username=this.$route.params.username;
                this.$router.push({path:"/userMain/"+username})
            }else {
              this.$message.error('预约失败');
            }
        })
      }


    }
  }

</script>
