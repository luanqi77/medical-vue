<template>
  <div>



    <hr>
    <el-table
      :data="partment"
      stripe
      style="width: 100%" align="center">

      <el-table-column
        prop="pid"
        label="科室号"
        width="300">
      </el-table-column>

      <el-table-column
        prop="name"
        label="科室名"
        width="300">
      </el-table-column>


      <el-table-column label="操作" width="300">

        <template slot-scope="partment">
          <el-button type="primary" icon="el-icon-edit" circle @click="updatePartment(partment.row.pid)"></el-button>
          <el-button type="danger" icon="el-icon-delete" circle @click="del(partment.row.name)"></el-button>
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
        partment: [],
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

      changePage: function (page) {
        this.params.page = page
        this.query();

      },
      query: function () {
        var url = '/api/partmentFindAll/' + this.params.page + "/" + this.params.size
        axios.get(url).then(res => {
          if (res.data != null) {
            this.partment = res.data.list;
            this.total = res.data.total;

          }
        })
      },
      updatePartment: function (pid) {
        this.$router.push({path: '/partmentSelectById/' + pid})
      },
      del: function (pid) {

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

