<template>
   <div class="shopping-cart container">
      <ShoppingCartHeader class="shopping-cart__header"/>
      <div class="shopping-cart__order-list order-list">
         <OrdersList class="order-list__order-list"/>
         <TotalBoard class="order-list__total-board"/>
      </div>
   </div>
</template>

<script>
import OrdersList from '@/components/OrdersList.vue'
import TotalBoard from '@/components/TotalBoard.vue'
import ShoppingCartHeader from '@/components/ShoppingCartHeader.vue'
export default {
   components: {
      OrdersList,
      ShoppingCartHeader,
      TotalBoard
   },
}
</script>

<style lang="scss" scoped>
.shopping-cart{
   .shopping-cart__header{
   }
   .shopping-cart__order-list{
      display: flex;
      .order-list__order-list{}
      .order-list__total-board{
         margin-left: 55px;
      }
   }
}
</style>
