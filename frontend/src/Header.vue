<template>
  <div class="header">
    <mwc-icon class="icon">agriculture</mwc-icon>
    <div class="title">Eicher Fanartikel Shop</div>
    <mwc-icon class="icon">home</mwc-icon>
    <mwc-icon class="icon">person</mwc-icon>
    <div>
      <mwc-icon class="icon">shopping_cart</mwc-icon>
      <span style="color:white;" v-if="cartNumberOfProducts > 0">{{ cartNumberOfProducts }}</span>
      <!-- <span class="round" v-if="cartTotalPrice > 0">{{ cartTotalPrice }}</span> -->
      <!-- <mwc-icon class="round">4</mwc-icon> -->
    </div>
    <mwc-icon class="icon">menu</mwc-icon>
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
  grid-template-columns: 4rem auto 4rem 4rem 4rem 4rem;
  background-color: rgb(21, 152, 204);
  color: white;
  padding: 1rem;
  align-items: center;
}

.title {
  font-size: 24px;
}
</style>
