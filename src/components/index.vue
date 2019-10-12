<template>
  <div class="index">
    <el-container>
      <el-header style="margin-top: -70px;margin-right: 10px">
        <userlogin></userlogin>
        <el-link @click="userRegist()" style="margin-left: 1350px;height: 30px;margin-top: -117px;font-size: 16px">注册</el-link>

        <el-link @click="userMain()" style="margin-left: 1500px;height: 30px;margin-top: -234px;font-size: 16px">个人中心</el-link>
      </el-header>
    </el-container>
    <el-header style="margin-top: -20px">
      <img src="../assets/images/logo.gif" height="60px" style="float: left;margin-left: 300px">
      <img src="../assets/images/newlogo.png" height="60px" style="float: left;margin-left: 0px">
      <el-input type="text" v-model="searchinput" style="width: 350px;float: left;margin-left: 40px"></el-input>
      <el-button style="width: 120px;text-align: center;margin-left: -462px" @click="search()">全网搜索</el-button>
      <el-link @click="ask()" type="primary" style="height: 30px;">向医生提问</el-link>
    </el-header>
    <div  style=" margin: auto;margin-top: 5px;width: 100%;height: 42px;
    border-radius:4px;background-color: darkturquoise;" >
      <span style="line-height: 42px;color: white;margin-left: -900px">欢迎您，病友！</span>
    </div>

    <div class="doctor-banner">
      <div class="num">
        已帮助
        <span>
          <em style="background-position: 0px -37px;">1</em>
          <em style="background-position: 0px -37px;">2</em>
          <em style="background-position: 0px -222px;">3</em>
          <em style="background-position: 0px -185px;">4</em>
          <em style="background-position: 0px -185px;">5</em>
          <em style="background-position: 0px -185px;">6</em>
          <em style="background-position: 0px -185px;">7</em>
          <em style="background-position: 0px -185px;">8</em>
          <em style="background-position: 0px -185px;">9</em>
          <em style="background-position: 0px -185px;">0</em>
        </span>
        位患者
      </div>
      <div class="slogan">
        <strong>小华佗online</strong>
        好医生就在身边
      </div>
      <el-button @click="ask()"
                 style="position: absolute;top: 258px;left: 50%;margin-left: -453px;background-color:#fff;height: 48px;width: 152px;font-size: 22px;background-color: blueviolet;color: white">
        普通咨询
      </el-button>
    </div>
    <br>
    <el-container>
      <h1 style="line-height: 15px;float: left;color: gold">专家名医</h1>
      <el-divider><i class="el-icon-lightning"></i></el-divider>
      <el-main>
        <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick"
                 style="line-height: 45px;text-align: center;width: 75%;margin: auto">
          <el-tab-pane label="全部" name="zero">
            这里是内容<br><br><br><br>
          </el-tab-pane>
          <el-tab-pane label="内科" name="one">
            这里是内容<br><br><br><br>
          </el-tab-pane>
          <el-tab-pane label="外科" name="two">
            这里是内容<br><br><br><br>
          </el-tab-pane>
          <el-tab-pane label="妇产科" name="three">
            这里是内容<br><br><br><br>
          </el-tab-pane>
          <el-tab-pane label="儿科" name="four">
            这里是内容<br><br><br><br>
          </el-tab-pane>
          <el-tab-pane label="五官科" name="five">
            这里是内容<br><br><br><br>
          </el-tab-pane>
          <el-tab-pane label="肿瘤科" name="six">
            这里是内容<br><br><br><br>
          </el-tab-pane>
          <el-tab-pane label="骨科" name="seven">
            这里是内容<br><br><br><br>
          </el-tab-pane>
          <el-tab-pane label="感染内科" name="eight">
            这里是内容<br><br><br><br>
          </el-tab-pane>
          <el-tab-pane label="整形外科" name="nine">
            这里是内容<br><br><br><br>
          </el-tab-pane>
        </el-tabs>
      </el-main>
      <el-header></el-header>
      <h1 style="line-height: 15px;float: left;color: blue">本周好评医生</h1>
      <el-divider><i class="el-icon-lightning"></i></el-divider>
      <el-main>
        <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card"
                 style="line-height: 45px;text-align: center;width: 75%;margin: auto">
          <el-tab-pane label="全部" name="zero">这里是内容</el-tab-pane>
          <el-tab-pane label="内科" name="one">这里是内容</el-tab-pane>
          <el-tab-pane label="外科" name="two">这里是内容</el-tab-pane>
          <el-tab-pane label="妇产科" name="three">这里是内容</el-tab-pane>
          <el-tab-pane label="儿科" name="four">这里是内容</el-tab-pane>
          <el-tab-pane label="五官科" name="five">这里是内容</el-tab-pane>
          <el-tab-pane label="皮肤性病" name="six">这里是内容</el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
    <el-header></el-header>
    <h2 style="line-height: 15px;color: lightpink;margin: auto;height: 10px">药品推荐</h2><br>
    <el-divider><i class="el-icon-lightning"></i></el-divider>
    <el-main style="width: 75%;margin: auto">
      <el-carousel trigger="click" height="424px" style="width: 424px;float: left">
        <!--<el-carousel-item v-for="item in 4" :key="item">-->
        <el-carousel-item v-for="item in pics" :key="item">
          <div class="grid-content">
            <div>
              <img :src="item.src" width="424px" height="424px">
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
      <el-table
        :data="yaos"
        style="width: 50%;line-height: 30px;margin-left: 524px"
        height="424">
        <!--<el-table-->
        <!--:data="yaos"-->
        <!--style="width: 600px;float: left;height: 424px;line-height: 30px;margin-left: 24px">-->
        <el-table-column
          fixed
          prop="y_name"
          label="药品名称"
          width="200px">
        </el-table-column>
        <el-table-column
          prop="address"
          label="产地"
          width="200px">
        </el-table-column>
        <el-table-column
          prop="des"
          label="详情"
          width="450px">
        </el-table-column>
      </el-table>
    </el-main>

    <!--<h1 style="line-height: 15px;float: left;color: blue">本周好评医生</h1>-->
    <el-header></el-header>
    <h2 style="line-height: 15px;color: green;margin: auto;height: 10px">健康资讯</h2><br>
    <el-divider><i class="el-icon-lightning"></i></el-divider>
    <el-main style="width: 75%;margin: auto;">
      <!--<el-table-->
      <!--:data="news"-->
      <!--stripe-->
      <!--style="width: 60%;line-height: 30px;float: left">-->
      <el-table
        :data="news"
        style="width: 50%;line-height: 30px;float: left"
        height="400">
        <el-table-column
          prop="author"
          label="作者"
          width="100">
        </el-table-column>
        <!--<el-table-column-->
        <!--prop="title"-->
        <!--label="标题">-->
        <!--</el-table-column>-->
        <el-table-column
          label="标题"
          prop="title">
          <template  slot-scope="news">
            <el-button @click="newsinfo(news.row.nid)">{{news.row.title}}</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-carousel trigger="click" height="400px" style="width: 400px;float: left;margin-left: 100px">
        <!--<el-carousel-item v-for="item in 4" :key="item">-->
        <el-carousel-item v-for="item in pics" :key="item">
          <div class="grid-content">
            <div>
              <img :src="item.src" width="400px" height="400px">
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </el-main>
    <!--</el-container>-->
    <div id="floatbtn">
      <img src="../assets/index/doctor.png" style="float: left">
      <h5>医生看这里</h5>
      &nbsp;<el-button style="width: 90px;height: 30px;line-height: 5px"><docterwel></docterwel></el-button>
      <el-button style="width: 90px;height: 30px;line-height: 5px" @click="docterregist()">注册</el-button>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import ElInput from "../../node_modules/element-ui/packages/input/src/input";
  import ElLink from "../../node_modules/element-ui/packages/link/src/main";
  import ElContainer from "../../node_modules/element-ui/packages/container/src/main";
  import ElButton from "../../node_modules/element-ui/packages/button/src/button";
  import foot from './foot'
  import userlogin from './userlogin'
  import docterwel from './docterwel.vue';
  export default {
    components: {
      ElButton,
      ElContainer,
      ElLink,
      ElInput,
      foot,
      userlogin,
      docterwel
    },
    name: 'index',
    data () {
      return {
        searchinput: '',
        pics:[
          {src:require('../assets/index/lwdhw.jpg')},
          {src:require('../assets/index/sbp.jpg')},
          {src:require('../assets/index/sqdbw.jpg')},
          {src:require('../assets/index/fkqjjn.jpg')},
          {src:require('../assets/index/ydsy.jpg')}
        ],
        news:[],
        yaos:[]
      }
    },
    mounted(){
      this.getnews();
    },
    methods: {
      userRegist() {
        this.$router.push("/userRegist")
      },
      ask(){
        var username=this.$route.params.username;
        this.$router.push({path:"/userAsk/"+username})
      },
      userMain(){
        var username=this.$route.params.username;
        this.$router.push({path:"/userMain/"+username})
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      search: function () {
        if (this.searchinput == '') {
          this.$message('请输入搜索关键字');
        } else {
          var road = 'https://www.baidu.com/s?ie=utf-8&si=muzhi.baidu.com&ct=2097152&wd=' + this.searchinput
          window.location.href = road;
        }
      },
      docter:function () {
        this.$router.push({name:'docterlogin'})
      },
      newsinfo:function (msg) {
        var nid = msg;
        this.$router.push({path:'/newsinfo/'+nid})
      },
      getnews:function () {
        var url='api/findNews'
        axios.get(url).then(res=>{
          this.news=res.data
        })
        this.getyaos();
      },
      getyaos:function () {
        var url='api/findYao'
        axios.get(url).then(res=>{
          this.yaos=res.data
        })
      },
      docterregist:function () {
        this.$router.push({name:'docterregist'})
      }
    }
  }
</script>
<style>
  #floatbtn{
    width: 105px;
    height: 80px;
    position: fixed;
    left: 1580px;
    top: 350px;
  }

  .doctor-banner {
    width: 100%;
    height: 399px;
    position: relative;
    font-family: 'microsoft Yahei';
    background: url('../assets/images/back.jpg') center top no-repeat #f3eee8;
  }

  .doctor-banner .num {
    position: absolute;
    left: 50%;
    top: 89px;
    _top: 99px;
    margin-left: -431px;
    height: 54px;
    line-height: 54px;
    font-size: 18px;
    color: #5b5b5b;
  }

  .doctor-banner .slogan {
    font-size: 30px;
    position: absolute;
    top: 160px;
    left: 50%;
    margin-left: -453px;
    color: #929292;
    font-family: 'microsoft yahei';
    line-height: 73px;
    font-weight: 700;
  }

  .el-header, .el-footer {
    /*background-color: #B3C0D1;*/
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    /*background-color: #D3DCE6;*/
    color: #333;
    text-align: center;
    line-height: 300px;
  }

  .el-main {
    /*background-color: #E9EEF3;*/
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>
