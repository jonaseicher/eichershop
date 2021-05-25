<template>
<div>
  <div class="article-container">
    <div class="article" v-for="article in articles" :key="article.id">
      <div style="text-align: end;">
        <div v-if="article.amountInCart > 0">
          <button class="button left-semi-circle" style="text-align: center" @click="addToCart(article.id, -1)">-</button>
          <button class="button">{{ article.amountInCart }}</button>
          <button class="button right-semi-circle" @click="addToCart(article.id, 1)">+</button>
        </div>
        <div v-else>
          <button class="button round" @click="addToCart(article.id, 1)">+</button>
        </div>
      </div>
      <img :src="article.image" alt="" width="100%" max-height="300" style="object-fit: contain; margin: 0.5rem 0rem">
      <div class="price title">{{ article.price }}.00 €</div>
      <div class="title" style="color: var(--secondary-text-note)">{{ article.name }}</div>
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem 2rem;
  padding: 2rem;
  background: var(--background);
}

.article {
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 8px var(--box-shadow);
  /* color: var(--secondary-text); */
}

.article:hover {
  box-shadow: 0px 0px 20px var(--box-shadow-hover);
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
  background-color: var(--primary);
  border: none;
  color: var(--primary-text);
  padding: 0;
  border: 1px solid var(--primary-text);
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
  background-color: var(--primary-text);
  color: var(--primary);
  /* width: 2.5rem;
  height: 2.5rem; */
  border-radius: 50%;
  border: 2px solid var(--primary);
  font-size: 24px;
  margin: auto;
}

.right-semi-circle {
  border-radius: 0 50% 50% 0;
  cursor: pointer;
}
</style>
