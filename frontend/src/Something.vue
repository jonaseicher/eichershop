<template>
<div>
  <div class="article-container">
    <article-tile-2 :article="article" v-for="article in articles" :key="article.id"/>
    <!-- <article-tile :article="article" v-for="article in articles" :key="article.id"/> -->
  </div>
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import '@material/mwc-icon';
import shopStore from './store/ShopStore';
import ArticleTile from './ArticleTile.vue';
import ArticleTile2 from './ArticleTile2.vue';

@Component({
  components: {
    ArticleTile,
    ArticleTile2,
  },
})
export default class Something extends Vue {
  get articles() {
    return shopStore.articles;
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
</style>
