<template>
  <div>
  <el-table
    :data="Yaos"
    style="width: 100%">
    <el-table-column
      prop="yid"
      label="编号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="y_name"
      label="药名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="产地">
    </el-table-column>
    <el-table-column
      prop="pic"
      label="图片">
    </el-table-column>
    <el-table-column
      prop="des"
      label="描述">
    </el-table-column>

    <el-table-column label="操作" width="180">
      <template slot-scope="Yao">
        <el-button type="primary" icon="el-icon-edit" circle @click="updateYao(Yao.row.yid)"></el-button>

        <el-button type="danger" icon="el-icon-delete" circle @click="deleteYao(Yao.row.yid)"></el-button>

        <el-button type="success" icon="el-icon-check" circle @click="insertYao()"></el-button>
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
        Yaos: []
      }
    },
    mounted(){
        console.log(this.$router);
      //默认查询页面
      this.query();
    },
    methods:{

        query:function () {
          var url = 'api/findAllYao'
          axios.get(url).then(res =>{
                  this.Yaos = res.data;
          })
        },
    updateYao: function (yid) {
        this.$router.push({path: '/selectYaoById/' + yid})
    },
    insertYao:function (){
        this.$router.push({path:'/insertYao/'})
    },
        deleteYao:function (yid) {
          this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$message({
              type: 'success',
              message: '成功',
            });
            var url = 'api/deleteYao'
            axios.post(url,{yid:yid}).then(res=>{
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
