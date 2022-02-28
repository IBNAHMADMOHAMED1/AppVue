 
<template>
<div id="app">
  <img alt="Vue logo" src="./assets/logo.png">
  <h1 class="title"> hi mohamed</h1>
  <FirstApp msg='Hello' /> 
  
</div>

</template>

<script>
 import FirstApp from './components/FirstApp';
  
export default {
  name: 'App',
  components: {
    FirstApp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>
