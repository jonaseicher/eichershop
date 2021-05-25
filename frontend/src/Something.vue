<template>
<div>

  <div class="article-container">
    <div class="article" v-for="article in articles" :key="article.id">
      <div style="text-align: end">
        <div v-if="article.amountInCart > 0">
          <button class="button left-semi-circle" style="text-align: center" @click="addToCart(article.id, -1)">-</button>
          <button class="button">{{ article.amountInCart }}</button>
          <button class="button right-semi-circle" @click="addToCart(article.id, 1)">+</button>
        </div>
        <div v-else>
          <button class="button round" @click="addToCart(article.id, 1)">+</button>
        </div>
      </div>
      <img :src="article.image" alt="" width="100%" height="300" style="object-fit: contain; margin: 1rem 0rem">
      <div class="price title">{{ article.price }}.00 €</div>
      <div class="title">{{ article.name }}</div>
      <!-- <div>{{ article.description }}</div> -->
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
}
</script>

<style scoped>
.article-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
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
}

.icon {
  /* padding: 1rem; */
  /* color: black; */
}

.title {
  font-size: 20px;
}

.price {
  font-size: 24px;
  margin-bottom: 1rem;
}

.button {
  background-color: rgb(21, 152, 204);
  border: none;
  color: white;
  padding: 0;
  border: 1px solid white;
  text-align: center;
  /* text-decoration: none; */
  /* display: inline-block; */
  font-size: 24px;
  margin: auto;
  width: 2.5rem;
  height: 2.5rem;
}

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
