<template>
<div>
  <div class="header">
    <mwc-icon class="icon">agriculture</mwc-icon>
    <div class="title">Eicher Fanartikel Shop</div>
    <mwc-icon class="icon">home</mwc-icon>
    <mwc-icon class="icon">person</mwc-icon>
    <div>
      <mwc-icon class="icon">shopping_cart</mwc-icon>
      <span class="round" v-if="cartNumberOfProducts > 0">{{ cartNumberOfProducts }}</span>
      <span class="round" v-if="cartTotalPrice > 0">{{ cartTotalPrice }}</span>
      <!-- <mwc-icon class="round">4</mwc-icon> -->
    </div>
    <mwc-icon class="icon">menu</mwc-icon>
  </div>
  <div class="article-container">
    <div class="article" v-for="article in articles" :key="article.id">
      <div style="float: right">
        <div v-if="article.amountInCart > 0">
          <button class="left-semi-circle" style="text-align: center" @click="addToCart(article.id, -1)">-</button>
          <button class="btn2">{{ article.amountInCart }}</button>
          <button class="right-semi-circle" @click="addToCart(article.id, 1)">+</button>
        </div>
        <div v-else>
          <button class="round" @click="addToCart(article.id, 1)">+</button>
        </div>
      </div>
      <img :src="article.image" alt="" width="400px">
      <div class="price title">{{ article.price }}</div>
      <div class="article-title">{{ article.name }}</div>
      <div>{{ article.description }}</div>
      <!-- <div>{{ article }}</div> -->
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
import shopStore from './store/ShopStore';

@Component
export default class Something extends Vue {
  get articles() {
    return shopStore.articles;
  }

  addToCart(id: number, amount: number) {
    shopStore.addToCart(id, amount);
  }

  get cartArticles() {
    return shopStore.getCartArticles();
  }

  get cartNumberOfProducts() {
    return shopStore.getCartNumberOfProducts();
  }

  get cartTotalPrice() {
    return shopStore.getCartTotalPrice();
  }
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
  font-size: 30px;
}

.article-title {
  /* font-size: 30px;
  margin-bottom: 1rem; */
}

button {
  background-color: rgb(21, 152, 204);
  border: none;
  color: white;
  padding: 0;
  border: 1px solid white;
  /* text-align: center; */
  /* text-decoration: none; */
  /* display: inline-block; */
  font-size: 24px;
  margin: auto;
  width: 2.5rem;
  height: 2.5rem;
}

/* .btn {
  background-color: rgb(21, 152, 204);
  color: white;
  font-size: 20px;
  padding: 0.4rem 0.6rem;
  border: 1px solid white;
} */

.left-semi-circle {
  border-radius: 50% 0 0 50%;
  cursor: pointer;
}

.round {
  background-color: white;
  color: rgb(21, 152, 204);
  /* width: 2.5rem;
  height: 2.5rem; */
  border-radius: 50%;
  border: 2px solid rgb(21, 152, 204);
  font-size: 24px;
  margin: auto;
}

.right-semi-circle {
  border-radius: 0 50% 50% 0;
  cursor: pointer;
}
</style>
