<template>
<div>
  <div class="category-header">
    <button
      :class="['category', { active: isCategoryActive(category) }]"
      v-for="category in categories"
      :key="category"
      @click="selectedTag = category"
    >{{ category }}</button>
    <button
      :class="['category', { active: selectedTag === '' }]"
      @click="selectedTag = ''"
    >
      Alles
    </button>
  </div>
  <div class="article-container">
    <article-tile-2 :article="article" v-for="article in filteredArticles" :key="article.id"/>
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
export default class ArticleContainer extends Vue {
  selectedTag = '';

  get articles() {
    return shopStore.articles;
  }

  get filteredArticles() {
    if (!this.selectedTag) {
      return this.articles;
    }
    return this.articles.filter((a) => a.tags.includes(this.selectedTag));
  }

  get categories() {
    return this.articles.flatMap((a) => a.tags).filter(this.onlyUnique);
  }

  onlyUnique(value: string, index: number, self: string[]) {
    return self.indexOf(value) === index;
  }

  isCategoryActive(category: string) {
    return this.selectedTag === category;
  }
}
</script>

<style scoped>
@media (max-width: 600px) {
  .article-container {
   --min-article-width: 140px;
  }
}
@media (min-width: 601px) {
  .article-container {
   --min-article-width: 250px;
  }
}

.article-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--min-article-width), 1fr));
  gap: 1rem 1rem;
  padding: 1rem;
  background: var(--background);
}
.category-header {
  background-color: var(--eicher-blue-purple);
  padding: 0rem;
  /* width: 100%; */
  margin: auto;
  text-align: center;
}
.category {
  background-color: var(--eicher-blue-purple);
  text-transform: uppercase;
  margin: 0 1rem;
  /* margin: auto; */
  border: none;
  color: var(--primary-text);
  padding: 1rem;
  text-align: center;
  cursor: pointer;
  /* text-decoration: none; */
  /* display: inline-block; */
  font-size: 20px;
}
.active {
  background-color: white;
  color: black;
  /* background-color: var(--eicher-blue-opposite); */
  /* border: 1px solid white; */
}
</style>
