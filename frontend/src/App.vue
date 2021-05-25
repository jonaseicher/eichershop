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

:root {
  --eicher-blue: rgb(21, 152, 204);
  --box-shadow-dark: rgba(0, 0, 0, 0.2);
  --box-shadow-light: rgba(255, 255, 255, 0.5);

  --primary: var(--eicher-blue);
  --primary-text: white;
  --secondary-text: black;
  --secondary-text-note: rgb(80, 80, 80);
  --secondary: white;
  --background: white;
  /* --background: black; */

  --box-shadow: var(--box-shadow-dark);
  /* --box-shadow: var(--box-shadow-light); */
  --box-shadow-hover: var(--primary);
  --header: var(--primary);
}
</style>
