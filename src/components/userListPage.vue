<template>
  <div>

    <!--<el-button type="primary" @click="addUser()">新增</el-button>-->
    <hr>

    <el-table
      :data="users"
      stripe
      style="width: 100%" align="center">
      <el-table-column
        prop="uid"
        label="uid"
        width="100">
      </el-table-column>


      <el-table-column
        prop="username"
        label="姓名"
        width="100">
      </el-table-column>
      <el-table-column
        prop="password"
        label="密码"
        width="100">
      </el-table-column>
      <el-table-column
        prop="name"
        label="用户姓名"
        width="100">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        width="100">
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄"
        width="100">
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="创建时间"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        width="150">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱"
        width="150">
      </el-table-column>
      <el-table-column
        prop="pic"
        label="头像"
        width="200">
      </el-table-column>

      <el-table-column label="操作" width="200">

        <template slot-scope="users">
          <el-button type="primary" icon="el-icon-edit" circle @click="updateUser(users.row.uid)"></el-button>
          <!--<el-button plain @click="updateUser(users.row.userId)" size="mini">修改</el-button>-->
          <el-button type="danger" icon="el-icon-delete" circle @click="del(users.row.uid)"></el-button>
          <!--<el-button plain @click="del(users.row.userId)"  size="mini" >删除</el-button>-->
        </template>

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
</template>

<script>
  import axios from 'axios'
  export default{
    data(){
      return {
        total: '0',
        users: [],
        params: {
          page: '1',
          size: '3',
        }
      }
    },
    mounted(){
      this.query();
    },
    methods: {
      addUser: function () {

        this.$router.push({name: 'insertUser'})
      },
      changePage:function (page) {
        this.params.page=page
        this.query();

      },
      query:function () {
        var url = '/api/UserFindAll/'+this.params.page+"/"+this.params.size
        axios.get(url).then(res => {
          this.users = res.data.list;
          this.total=res.data.total;
        })
      },
      updateUser:function (uid) {
        this.$router.push({path:'/UserSelectById/'+uid})
      },
      del:function (uid) {

        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(()=>{
//          alert("功能正在开发中！")

          this.$message({
            type: 'success',
            message: '功能正在开发中!'
          });
        }).catch(()=>{
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        })
     }
    }
  }
</script>

