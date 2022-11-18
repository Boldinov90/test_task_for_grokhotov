<template>
   <div class="orders-item">
      <div class="orders-item__img">
         <img alt="image" :src="require('../../public/img_orders/' + itemOrder.image)"/>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {

      }
   },
   methods: {

   },
   props: {
      itemOrder: Object,
   },
}
</script>

<style lang="scss" scoped>
.orders-item {
   width: 800px;
   height: 121px;
   background-color: aqua;
   margin-bottom: 25px;
}
</style>
