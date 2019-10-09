<template>
  <div>

    <hr>
    <el-table
      :data="DoctorAnswer"
      stripe
      style="width: 100%" align="center">

      <el-table-column
        prop="answer"
        label="答复"
        width="250">
      </el-table-column>

      <el-table-column
        prop="createTime"
        label="创建时间"
        width="130">
      </el-table-column>

      <el-table-column
        prop="state"
        label="状态"
        width="120">
      </el-table-column>


      <el-table-column label="操作" width="200">

        <template slot-scope="DoctorAnswer">
          <el-button type="danger" icon="el-icon-delete" circle @click="del(DoctorAnswer.row.aid)"></el-button>
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
        DoctorAnswer: [],
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
        var url = '/api/DoctorAnswerFindAll/' + this.params.page + "/" + this.params.size
        axios.get(url).then(res => {
          if (res.data != null) {
            this.DoctorAnswer = res.data.list;
            this.total = res.data.total;

          }
        })
      },

      del: function (aid) {

        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
//         var url='/api/del'
          var url = 'api/delDoctorAnswerById'
          axios.post(url, {aid: aid}).then(res => {
            if (res.data == 1) {
              this.query();
            } else {
              alert("删除失败")
            }
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
