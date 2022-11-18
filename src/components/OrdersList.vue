<template>
   <div class="orders-list" >
      <OrdersItem v-for="itemOrder of ORDER" :key="itemOrder.id" :itemOrder="itemOrder" />
   </div>
</template>

<script>
import { mapGetters } from 'vuex'
import OrdersItem from '@/components/OrdersItem.vue'
export default {
   components:{
      OrdersItem
   },
   computed: {
      ...mapGetters(['ORDER']),
   },
}
</script>

<style lang="scss" scoped>
.orders-list{
   margin-top: 50px;
}
</style>
