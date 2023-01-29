<template>
   <div class="orders-list">
      <OrdersItem class="orders-list__orders-item" v-for="itemOrder of ORDER" :key="itemOrder.id"
         :itemOrder="itemOrder" />
      <Instalation v-if="ORDER.length > 0" />
      <div class="orders-list__missing-products" v-else="ORDER.length == 0">
         Корзина пуста
      </div>
   </div>
</template>

<script>
import { mapGetters } from 'vuex'
import OrdersItem from '@/components/OrdersItem.vue'
import Instalation from '@/components/Instalation.vue'
export default {
   components: {
      OrdersItem,
      Instalation
   },
   computed: {
      ...mapGetters(['ORDER']),
   },
}
</script>

<style lang="scss" scoped>
.orders-list {
   margin-top: 50px;
   // .orders-list__orders-item{}
   .orders-list__missing-products {
      font-family: 'Lato', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 145%;
      color: #1F2432;
      // width: 100%;
      // display: flex;
      // justify-content: center;
   }
}
</style>
