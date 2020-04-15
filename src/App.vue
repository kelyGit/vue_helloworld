<template>
  <div id="app">
    <router-view class='top'  name='topHome'></router-view>
    <!--<router-view class='bodyHome'  name='bodyHome'></router-view>-->
  </div>
</template>

<script>
  import "./../h5/css/common.css";
  import "./../h5/css/index.css";

  import "./../h5/js/jquery-1.8.3.min.js";
  import "./../h5/js/common.js"
  import "./../h5/js/TouchSlide.1.1.js";
  import  "./../h5/js/jquery.SuperSlide.2.1.1.js";
  import "./../h5/js/js.js";

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
  margin-top: 60px;
}
</style>
