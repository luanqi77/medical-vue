<template>
  <div>
    <headerok></headerok>
    <div  style=" margin: auto;margin-top: 10px;width: 100%;height: 42px;
border-radius:4px;background-color: darkturquoise;" >
      <div style="margin-right: 800px;font-size: 14px;line-height: 42px;color: white ;">
        <el-link :underline="false" @click="index()" style="font-size: 15px;line-height: 42px;color: white ;">小华佗在线 ></el-link>
        <span>健康资讯 ></span><span>资讯详情</span>
      </div>
    </div>


  <div style="width: 75%;margin: auto">
    <img src="../assets/newsinfo/gygghf.png" width="100%">
    <div style="width: 70%;float: left;background-color: whitesmoke">
      <div style="width: 80%;margin: auto">
      <p style="text-align: center;font-style: inherit;font-weight: 400;font-size: 25px;line-height: 30px">{{news.title}}</p>
      <p style="text-align: center;font-style: italic;font-weight: 200;font-size: 18px;line-height: 30px">作者：{{news.author}}</p>
      <p style="text-align: center;font-style: inherit;font-weight: 100;line-height: 40px">{{news.text}}</p>
      </div>
    </div>
    <div style="width: 30%;float: left">
      <div style="width: 100%">
        <img src="../assets/newsinfo/ggwzz.jpg" width="100%">
      </div>
      <div>
        <h3>如有需求，请联系网站管理员:栾旗</h3>
      </div>
      <div style="width: 100%">
       <img src="../assets/newsinfo/gygg.png" width="100%">
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import okuserheader from  './okuserheader'
  import headerok from './headerok.vue'
  import headerno from './headerno.vue';
  import ElForm from "../../node_modules/element-ui/packages/form/src/form";
  import ElInput from "../../node_modules/element-ui/packages/input/src/input";
  import ElButton from "../../node_modules/element-ui/packages/button/src/button";
  import ElMain from "../../node_modules/element-ui/packages/main/src/main";
  import ElAside from "../../node_modules/element-ui/packages/aside/src/main";
  import ElDivider from "../../node_modules/element-ui/packages/divider/src/main";
  export default {
    name: 'newsinfo',
    components:{
      ElDivider,
      ElAside,
      ElMain,
      ElButton,
      ElInput,
      ElForm,
      headerno,
      headerok,
      okuserheader
    },
    data () {
      return {
        pics:[
          {src:require('../assets/index/lwdhw.jpg')},
          {src:require('../assets/index/sbp.jpg')},
          {src:require('../assets/index/sqdbw.jpg')},
          {src:require('../assets/index/fkqjjn.jpg')},
          {src:require('../assets/index/ydsy.jpg')}
        ],
          news:{
              nid:'',
              title:'',
              text:'',
              createTime:'',
              author:''
          }
      }
    },
    mounted(){

    this.query();
    },
    methods:{
      query:function () {
        var url='api/findnewById'
        var nid=this.$route.params.id
        axios.post(url,{nid:nid}).then(res=>{
          this.news=res.data;
        })
      }

    }
  }
</script>
<style>

</style>

