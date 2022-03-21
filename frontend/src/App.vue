<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css?family=Material+Icons&display=block" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
    <Header></Header>
    <ArticleContainer></ArticleContainer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ArticleContainer from './ArticleContainer.vue';
import Header from './Header.vue';

@Component({
  components: {
    ArticleContainer,
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
  --eicher-blue-dark: #0484B5; /* 4, 132, 181 */
  --eicher-blue-purple: #2742D4; /* 39, 66, 212 */
  --eicher-blue-green: #0ED95A; /* 14, 217, 90 */
  --eicher-blue-opposite: #FF8C10;

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

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
      -moz-user-select: none; /* Old versions of Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
          user-select: none; /* Non-prefixed version, currently
                                supported by Chrome, Edge, Opera and Firefox */
}
</style>
