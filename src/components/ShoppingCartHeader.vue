<template>
   <div class="shopping-cart-header">
      <div class="shopping-cart-header__title">Ваша корзина</div>
      <div class="shopping-cart-header__products-count">{{ORDER.length}} товара</div>
      <button class="shopping-cart-header__clear-products" @click="clearShoppingCart">
         Очистить корзину
      </button>
   </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
   methods:{
      ...mapActions(['CLEAR_SHOPPING_CART']),
      clearShoppingCart(){
         this.CLEAR_SHOPPING_CART()
      }
   },
   computed: {
      ...mapGetters(['ORDER']),
   },
}
</script>

<style lang="scss" scoped>
.shopping-cart-header {
   height: 53px;
   width: 800px;
   display: flex;
   align-items: flex-end;
   .shopping-cart-header__title {
      font-family: 'Lato', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 44px;
      line-height: 120.52%;
      color: #1f2432;
   }
   .shopping-cart-header__products-count {
      font-family: 'Lato', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 145%;
      color: #797b86;
      margin-bottom: 3px;
      margin-left: 22px;
   }
   .shopping-cart-header__clear-products {
      height: 21px;
      margin-bottom: 4px;
      background-color: transparent;
      border: none;
      border-bottom: 1px solid #797b86;
      color: #797b86;
      cursor: pointer;
   }
   .shopping-cart-header__clear-products:last-of-type {
      margin-left: auto;
   }
}
</style>
