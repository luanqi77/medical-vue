<template>
  <div>
    <el-table
      :data="Guahaos"
      style="width: 100%">
      <el-table-column
        prop="gid"
        label="挂号"
        >
      </el-table-column>
      <el-table-column
        prop="gname"
        label="医院"
       >
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄">
      </el-table-column>
      <el-table-column
        prop="g_time"
        label="时间" >
      </el-table-column>
      <el-table-column
        prop="syn"
        label="科室">
      </el-table-column>
      <el-table-column
        prop="department"
        label="部门">
      </el-table-column>
      <el-table-column
        prop="g_doctor"
        label="医生">
      </el-table-column>
      <el-table-column
        prop="status"
        label="职位">
      </el-table-column>
      <el-table-column
        prop="uid"
        label="编号">
      </el-table-column>

      <el-table-column label="操作" width="180">
        <template slot-scope="Guahao">
          <el-button type="primary" icon="el-icon-edit" circle @click="updateGuahao(Guahao.row.gid)"></el-button>

          <el-button type="danger" icon="el-icon-delete" circle @click="deleteGuahao(Guahao.row.gid)"></el-button>

          <el-button type="success" icon="el-icon-check" circle @click="insertGuahao()"></el-button>
        </template>
      </el-table-column>


    </el-table>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        Guahaos: []
      }
    },
    mounted(){
      //默认查询页面
      this.query();
    },
    methods: {

      query: function () {
        var url = 'api/findAllGuahao'
        axios.get(url).then(res => {
          this.Guahaos = res.data;
        })
      },
      updateGuahao: function (gid) {
        this.$router.push({path: '/updateGuahao/' + gid})
      },
      insertGuahao: function () {
        this.$router.push({path: '/insertGuahao/'})
      },
      deleteGuahao: function (gid) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '成功',
          });
          var url = 'api/deleteGuahao'
          axios.post(url, {gid: gid}).then(res => {
            this.query();
          })
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
