<template>
<div class="article">
  <div style="display: table; width: 100%;">
    <span class="title" style="display:table-cell; vertical-align: middle;">
      {{ article.price }} €
    </span>
    <span style="display:table-cell; text-align: right">
      <span v-if="article.amountInCart > 0">
        <button
          class="button left-semi-circle noselect"
          style="text-align: center"
          @click="addToCart(article.id, -1)"
        >
          <span style="position: relative; bottom: 1px; left: 2px;">
            -
          </span>
        </button>
        <button class="button noselect">{{ article.amountInCart }}</button>
        <button
          class="button right-semi-circle noselect"
          @click="addToCart(article.id, 1)"
        >
        <span style="position: relative; top: 1px; right: 1px;">+</span>
        </button>
      </span>
      <span v-else>
        <button class="button round noselect" @click="addToCart(article.id, 1)">+</button>
      </span>
    </span>
  </div>
  <img :src="article.image" alt="" width="100%" max-height="300" class="noselect image-contain">
  <!-- <div class="price title">{{ article.price }} €</div> -->
  <div class="title">{{ article.name }}</div>
  <!-- <div>{{ article.description }}</div> -->
  <!-- <div>{{ article }}</div> -->
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Article from './store/Article';
import shopStore from './store/ShopStore';

@Component
export default class ArticleTile2 extends Vue {
  @Prop({ required: true })
  article!: Article;

  addToCart(id: number, amount: number) {
    shopStore.addToCart(id, amount);
  }
}
</script>

<style scoped>
.article {
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 8px var(--box-shadow);
  max-width: 30rem;
  margin: 0 auto;
  /* color: var(--secondary-text); */
}

.article:hover {
  box-shadow: 0px 0px 20px var(--box-shadow-hover);
}

.image-contain {
  object-fit: contain;
  margin: 0.5rem 0rem;
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
