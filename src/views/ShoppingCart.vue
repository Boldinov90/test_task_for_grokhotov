<template>
   <div class="shopping-cart container">
      <ShoppingCartHeader class="shopping-cart__header"/>
      <OrdersList class="shopping-cart__order-list"/>
   </div>
</template>

<script>
import OrdersList from '@/components/OrdersList.vue'
import ShoppingCartHeader from '@/components/ShoppingCartHeader.vue'
export default {
   components: {
      OrdersList,
      ShoppingCartHeader
   },
}
</script>

<style lang="scss" scoped>
.shopping-cart{
   .shopping-cart__header{}
   .shopping-cart__order-list{}
}
</style>
