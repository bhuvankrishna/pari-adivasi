<template>
  <header-block></header-block>

  <div id="app">
    <img alt="Vue logo" src="https://vuejs.org/images/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
  <main>
    <router-view></router-view>
  </main>
  <footer-block></footer-block>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import headerBlock from './components/headerBlock.vue';
import footerBlock from './components/footerBlock.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    headerBlock,
    footerBlock
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
