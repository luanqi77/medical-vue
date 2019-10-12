<template>
  <div >
    <el-link @click="dialogFormVisible = true" style="height: 15px">登陆</el-link>
    <el-divider direction="vertical"></el-divider>
    <el-dialog title="欢迎您，救死扶伤的大善人" :visible.sync="dialogFormVisible" center style="line-height: 10px;margin-top:-100px">
      <div style="width:30%;margin: auto">
        <img src="../assets/index/hyys.gif" width="100%"><br><br><br>
      </div>
      <!--<el-tabs type="border-card" style="width: 75%;margin: auto">-->
      <div style="width: 75%;margin: auto">
          <el-form :model="docter" status-icon :rules="rules2" ref="ruleForm2" label-width="130px" style="margin-left: 100px" class="demo-ruleForm">
          <el-form-item label="账号" prop="dname" >
            <el-input v-model="docter.dname" style="width: 50%"></el-input><br>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="docter.password" auto-complete="off"  style="width: 50%"></el-input><br>
          </el-form-item>
          <!--<el-form-item label="记住密码" prop="delivery">-->
            <!--<el-switch v-model="docter.delivery"></el-switch>-->
          <!--</el-form-item>-->
            <div style="width:100%;margin-left: 120px">
              <el-button @click="dialogFormVisible = false; resetForm('ruleForm2')">取 消</el-button>
              <el-button type="primary" @click="submitForm(docter)">登 录</el-button>
            </div>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import axios from 'axios'
  import ElFormItem from "../../node_modules/element-ui/packages/form/src/form-item";
  import ElButton from "../../node_modules/element-ui/packages/button/src/button";
  import ElUpload from "../../node_modules/element-ui/packages/upload/src/index";
  import ElInput from "../../node_modules/element-ui/packages/input/src/input";
  export default{
    components: {
      ElInput,
      ElUpload,
      ElButton,
      ElFormItem
    },
    name: 'docterlogin',
    data() {
      var checkNum = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('账号不能为空'));
        } else {
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
        loginPower: false,
        docter: {
          did: '',
          dname: '',
          password: ''
        },
        did:'',
        rules2: {
          password: [
            {validator: validatePass, trigger: 'blur'}
          ],
          dname: [
            {validator: checkNum, trigger: 'blur'}
          ]
        },
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      };
    },
    mounted(){

    },
    methods: {
      submitForm: function (docter) {

        var url = "api/docterlogin"
        axios.post(url, this.docter).then(res => {
          if (res.data != '') {
            this.$alert('登陆成功', '系统提示', {
              confirmButtonText: '确定',
              type:'success'
            });
            this.$router.push('doctermain/' + res.data)
          } else {
            alert("密码错误或用户不存在")
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }

</script>




