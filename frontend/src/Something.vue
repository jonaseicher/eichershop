<template>
<div>
  <link href="https://fonts.googleapis.com/css?family=Material+Icons&display=block" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
  <div class="header">
    <mwc-icon class="icon">agriculture</mwc-icon>
    <div class="title">Eicher Fanartikel Shop</div>
    <mwc-icon class="icon">home</mwc-icon>
    <mwc-icon class="icon">person</mwc-icon>
    <mwc-icon class="icon">shopping_cart</mwc-icon>
    <mwc-icon class="icon">menu</mwc-icon>
  </div>
  <div class="article-container">
    <div class="article">
      Article
      <span class="btn btn1">-</span>
      <span class="btn btn2">0</span>
      <span class="btn btn3">+</span>
    </div>
    <div class="article">
      Article
    </div>
    <div class="article">
      Article
    </div>
    <div class="article">
      Article
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import '@material/mwc-icon';
// import { mdiTractorVariant } from '@mdi/js';

@Component
export default class Something extends Vue {

}
</script>

<style scoped>
.header {
  display: grid;
  grid-template-columns: 4rem auto 4rem 4rem 4rem 4rem;
  background-color: rgb(21, 152, 204);
  color: white;
  padding: 1rem;
}

.article-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem 2rem;
  padding: 2rem;
}

.article {
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
}

.article:hover {
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.30);
  /* background-image: linear-gradient(to bottom right, rgb(240, 240, 240), rgb(1,183, 180)); */
}

.icon {
  /* padding: 1rem; */
  /* color: black; */
}

.title {
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
}
.btn {
  background-color: lightgreen;
  padding: 0.5rem;
  border: 1px solid white;
}

.btn1 {
  border-radius: 50% 0 0 50%;
}
.btn2 {
  /* border-radius: 0 0 50% 50%; */
}
.btn3 {
  border-radius: 0 50% 50% 0;
}
</style>
