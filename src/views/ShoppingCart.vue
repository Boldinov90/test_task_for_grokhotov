<template>
   <div class="shopping-cart container">
      <OrdersList />
   </div>
</template>

<script>
import OrdersList from '@/components/OrdersList.vue'
export default {
   components: {
      OrdersList,
   },
}
</script>

<style lang="scss" scoped>
.shopping-cart{

}
</style>
