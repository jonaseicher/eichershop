<template>
  <div class="header">
    <mwc-icon class="icon">menu</mwc-icon>
    <mwc-icon class="icon" style="text-align: start">search</mwc-icon>
    <span class="title" style="height: 24px">
      <!-- <mwc-icon class="icon" style="margin-right: 1rem;">agriculture</mwc-icon> -->
      <span>

      Eicher Fanartikel Shop
      </span>
    </span>
    <!-- <mwc-icon class="icon">person</mwc-icon> -->
    <div>
      <span style="color:white; border-radius: 10px; border: 1px solid white; padding: 7px" v-if="cartTotalPrice > 0">{{ cartTotalPrice }} €</span>
    </div>
    <div style="height: 24px">
      <mwc-icon class="icon" v-if="cartNumberOfProducts > 0">shopping_cart</mwc-icon>
      <span style="color:white;" v-if="cartNumberOfProducts > 0">{{ cartNumberOfProducts }}</span>
      <!-- <mwc-icon class="round">4</mwc-icon> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import shopStore from './store/ShopStore';

@Component
export default class Header extends Vue {
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
  grid-template-columns: 1fr 4fr 16fr 3fr 2fr;
  background-color: var(--header);
  color: var(--primary-text);
  padding: 1rem;
  align-items: center;
  text-align: center;
}

.title {
  font-size: 20px;
}
</style>
