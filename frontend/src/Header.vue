<template>
  <div class="header headergrid">
    <mwc-icon class="icon menu">menu</mwc-icon>
    <mwc-icon class="icon search" style="text-align: start">search</mwc-icon>
    <span class="title" style="height: 24px">
      <!-- <mwc-icon class="icon" style="margin-right: 1rem;">agriculture</mwc-icon> -->
      <span>

      Eicher Fanartikel Shop
      </span>
    </span>
    <!-- <mwc-icon class="icon">person</mwc-icon> -->
    <div>
      <span class="price" v-if="cartTotalPrice > 0">{{ cartTotalPrice }} €</span>
    </div>
    <div style="height: 24px">
      <mwc-icon class="icon cart" v-if="cartNumberOfProducts > 0">shopping_cart</mwc-icon>
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

@media (max-width: 35rem) {
  .headergrid {
    grid-template-columns: 1fr 4fr 2fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "title title title title"
      "menu search price cart";
    row-gap: 1rem;
    /* border: 1px solid green; */
  }
}
@media (min-width: 35rem) {
  .headergrid {
    grid-template-columns: 1fr 4fr 16fr 3fr 2fr;
    grid-template-rows: auto;
    grid-template-areas:
      "menu search title price cart";
    /* border: 1px solid red; */
  }
}

.header {
  display: grid;
  background-color: var(--header);
  color: var(--primary-text);
  padding: 1rem;
  align-items: center;
  text-align: center;
}

.menu {
  grid-area: menu;
}

.search {
  grid-area: search;
}

.title {
  font-size: 20px;
  grid-area: title;
}

.price {
  grid-area: price;
  color:white;
  border-radius: 10px;
  border: 1px solid white;
  padding: 7px
}

.cart {
  grid-area: cart;
}
</style>
