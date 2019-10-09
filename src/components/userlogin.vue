<template>
  <div>
    <!--<el-button plain @click="dialogFormVisible = true">登录</el-button>-->
    <el-link @click="dialogFormVisible = true" style="margin-left: 1250px;height: 30px ;font-size: 16px">登陆</el-link>
    <el-divider direction="vertical"></el-divider>
    <el-dialog title="登录" :visible.sync="dialogFormVisible" center>

      <!-- 插入测试 -->
      <el-form :model="user" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">

        <el-form-item label="账号" prop="username">
          <el-input v-model="user.username"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="user.password" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="记住密码" prop="delivery">
          <el-switch v-model="user.delivery"></el-switch>
        </el-form-item>
      </el-form>
      <!-- 插入测试 -->
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false; resetForm('ruleForm2')">取 消</el-button>
        <el-button type="primary" @click="submitForm(user.username)">登 录</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import axios from 'axios'
  export default{
      name:'userlogin',
    /*在script里面*/
    data() {
      /*插入form方法*/
      var checkNum = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('账号不能为空'));
        }else {
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
      /*插入form方法*/
      return {
        loginPower:false,
        /*插入form方法*/
        /*设定规则指向*/
        user: {
          username: '',
          password: '',
          delivery: false,
        },
        rules2: {
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          username: [
            { validator: checkNum, trigger: 'blur' }
          ]
        },

        /*插入form方法*/

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
    methods: {
      submitForm:function (username) {

        var url="api/login"
        axios.post(url,this.user).then(res=>{
          if (res.data=="main"){
            alert("登录成功")
            this.$router.push({path:"/userMain/"+username})
          }else {
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




