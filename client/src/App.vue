<template>
  <div id="app">
    <Autocomplete :items="user"
      filterby="name"
      @change="onChange"
      title="Look for a user"
      @selected="userSelected"/>
    <router-view></router-view>
    <!-- <Home/> -->
    <!-- <Signin/> -->
    <!-- <Signup/> -->
    <!-- <SetProfile/> -->
  </div>
 
</template>

<script>
export default {
  name: 'app',
    
};

 data() {
    return {
      users: []
    };
  },
methods: {
    userSelected(user) {
      console.log(`user Selected: ${user.name}`);
    };
    onChange(value) {
      // do something with the current value
    }
  },
  components: {
    autocomplete
  }

           
</script>

import autocomplete from './components/Autocomplete.vue'

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
