<template>
  <div>
    <headerok></headerok>

    <el-header></el-header>
    <h3 style="margin: auto">欢迎您，{{docter.name}}医生</h3>
    <el-row style="width: 75%;margin: auto">
        <el-col :span="12" >
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        style="width: 33%;height: 600px">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>查看问题</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">@我的</el-menu-item>
              <el-menu-item index="1-2">已回复</el-menu-item>
              <el-menu-item index="1-3">未回复</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <!--<el-menu-item index="3" disabled>-->
            <!--<i class="el-icon-document"></i>-->
            <!--<span slot="title">设置</span>-->
          <!--</el-menu-item>-->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>设置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">我的信息</el-menu-item>
              <el-menu-item index="3-2">修改信息</el-menu-item>
              <!--<el-menu-item index="3-3">未回复</el-menu-item>-->
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
      </el-row>
  </div>
</template>

<script>
  import headerok from './headerok.vue';
  import ElForm from "../../node_modules/element-ui/packages/form/src/form";
  import ElInput from "../../node_modules/element-ui/packages/input/src/input";
  import ElButton from "../../node_modules/element-ui/packages/button/src/button";
  import ElRow from "element-ui/packages/row/src/row";
  import ElHeader from "../../node_modules/element-ui/packages/header/src/main";
  import ElSubmenu from "../../node_modules/element-ui/packages/menu/src/submenu";
  export default {
    name: 'docterinfo',
    components:{
      ElSubmenu,
      ElHeader,
      ElRow,
      ElButton,
      ElInput,
      ElForm,
      headerok
    },
    data () {
      return {
          docter:{
              name:'张三'
          }
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style>

</style>

