<template>
  <div id="app">
    <img src="./assets/image/newlogo.png">
    <router-view/>

    <br><br><br><br><br><br>
    <router-link to="/adminLogin">后台登录页面</router-link>
    <router-link to="/CRUD">增删改</router-link>

  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-top: 60px;*/
  }
</style>
