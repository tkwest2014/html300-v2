<template>
<b-container class="bv-example-row">
<b-row>
<IndexTest></IndexTest>
  <b-col>1 of 3</b-col>
  <b-col>2 of 3</b-col>
  <b-col>3 of 3</b-col>
</b-row>
</b-container>

</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import IndexTest from './components/IndexTest.vue'

export default {
  name: 'App',
  components: {
    IndexTest
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
