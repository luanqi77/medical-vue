<template>
  <div>
  <el-table
    :data="Hospitals"
    style="width: 100%">
    <el-table-column
      prop="hid"
      label="编号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="h_name"
      label="医院名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="h_address"
      label="医院地址">
    </el-table-column>
    <el-table-column
      prop="h_tel"
      label="电话">
    </el-table-column>
    <el-table-column
      prop="doctor"
      label="人数">
    </el-table-column>
    <el-table-column
      prop="beds"
      label="床位">
    </el-table-column>
    <el-table-column
      prop="pic"
      label="图片">
    </el-table-column>
    <el-table-column
      prop="description"
      label="描述">
    </el-table-column>
    <el-table-column
      prop="level"
      label="等级">
    </el-table-column>
    <el-table-column
      prop="special"
      label="特色">
    </el-table-column>
    <el-table-column
      prop="comment"
      label="评价">
    </el-table-column>

    <el-table-column label="操作" width="180">
      <template slot-scope="Hospital">
        <el-button type="primary" icon="el-icon-edit" circle @click="updateHospital(Hospital.row.hid)"></el-button>

        <el-button type="danger" icon="el-icon-delete" circle @click="deleteHospital(Hospital.row.hid)"></el-button>

        <el-button type="success" icon="el-icon-check" circle @click="insertHospital()"></el-button>
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
        Hospitals: []
      }
    },
    mounted(){
      //默认查询页面
      this.query();
    },
    methods:{
        query:function () {
          var url = 'api/findAllHospital'
          axios.get(url).then(res =>{
                  this.Hospitals = res.data;
          })
        },
    updateHospital: function (hid) {
        this.$router.push({path:'/updateHospital2/' + hid})
    },
    insertHospital:function (){
        this.$router.push({path:'/insertHospital/'})
    },
        deleteHospital:function (hid) {
          this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$message({
              type: 'success',
              message: '成功',
            });
            var url = 'api/deleteHospital'
            axios.post(url,{hid:hid}).then(res=>{
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
