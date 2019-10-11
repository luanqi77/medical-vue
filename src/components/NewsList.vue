<template>
  <div>
  <el-table
    :data="Newss"
    style="width: 100%">
    <el-table-column
      prop="nid"
      label="编号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="title"
      label="标题"
      width="180">
    </el-table-column>
    <el-table-column
      prop="text"
      label="内容">
    </el-table-column>
    <el-table-column
      prop="createTime"
      label="创建时间">
    </el-table-column>
    <el-table-column
      prop="author"
      label="作者">
    </el-table-column>

    <el-table-column label="操作" width="180">
      <template slot-scope="News">
        <el-button type="primary" icon="el-icon-edit" circle @click="updateNews1(News.row.nid)"></el-button>

        <el-button type="danger" icon="el-icon-delete" circle @click="deleteNews(News.row.nid)"></el-button>

        <el-button type="success" icon="el-icon-check" circle @click="insertNews1()"></el-button>
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
        Newss: []
      }
    },
    mounted(){
      //默认查询页面
      this.query();
    },
    methods:{
        query:function () {
          var url = 'api/findAllNews'
          axios.get(url).then(res =>{
                  this.Newss = res.data;
          })
        },
    updateNews1: function (nid) {
        this.$router.push({path: '/updateNews/' + nid})
    },
    insertNews1:function (){
        this.$router.push({path:'/insertNews/'})
    },
    deleteNews:function (nid) {
          this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$message({
              type: 'success',
              message: '成功',
            });
            var url = 'api/deleteNews'
            axios.post(url,{nid:nid}).then(res=>{
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
