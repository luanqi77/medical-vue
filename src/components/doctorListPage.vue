<template>
  <div>

    <!--<el-button type="primary" @click="addUser()">新增</el-button>-->
    <hr>

    <el-table
      :data="docter"
      stripe
      style="width: 100%" align="center">

      <el-table-column
        prop="dname"
        label="姓名"
        width="100">
      </el-table-column>

      <el-table-column
        prop="password"
        label="密码"
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
        width="60">
      </el-table-column>

      <el-table-column
        prop="createTime"
        label="创建时间"
        width="150"
        :formatter="dateFormat">
      </el-table-column>

      <el-table-column
        prop="workyears"
        label="工作年限"
        width="100">
      </el-table-column>

      <el-table-column
        prop="email"
        label="邮箱"
        width="100">
      </el-table-column>

      <el-table-column
        prop="work_time"
        label="工作时间"
        width="100">
      </el-table-column>

      <el-table-column
        label="头像"
        width="150">
        <template slot-scope="docter">
          <el-image :src="docter.row.pic" style="width: 50px;height: 50px;"></el-image>
        </template>
      </el-table-column>

      <el-table-column label="操作" width="180">

        <template slot-scope="users">
          <el-button type="primary" icon="el-icon-edit" circle @click="updateDoctor(users.row.did)"></el-button>
          <!--<el-button plain @click="updateUser(users.row.userId)" size="mini">修改</el-button>-->
          <el-button type="danger" icon="el-icon-delete" circle @click="del(users.row.did)"></el-button>
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
        docter: [],
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
      dateFormat:function(row,column){
        var t=new Date(row.createTime);//row 表示一行数据, updateTime 表示要格式化的字段名称
        return t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate();
      },
      addUser: function () {

        this.$router.push({name: 'insertUser'})
      },
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
      updateDoctor: function (uid) {
        this.$router.push({path: '/DoctorSelectById/' + uid})
      },
      del: function (uid) {

        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
//          alert("功能正在开发中！")

          this.$message({
            type: 'success',
            message: '功能正在开发中!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        })
      }
    }
  }
</script>
<style>

</style>

