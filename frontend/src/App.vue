<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css?family=Material+Icons&display=block" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
    <Header></Header>
    <Something></Something>
    <!-- <control-panel/> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Something from './Something.vue';
import Header from './Header.vue';

@Component({
  components: {
    Something,
    Header,
  },
})
export default class App extends Vue {
}
</script>

<style>
body {
  margin: 0 0 0 0;
  font-family: 'Roboto', sans-serif;
}
</style>
