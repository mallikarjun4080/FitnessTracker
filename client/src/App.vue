<template>
  <div id="app">
    <router-view></router-view>
    <!-- <Home/> -->
    <!-- <Signin/> -->
    <!-- <Signup/> -->
    <!-- <SetProfile/> -->
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  overflow: hidden;
  height: 100vh;
}
</style>
