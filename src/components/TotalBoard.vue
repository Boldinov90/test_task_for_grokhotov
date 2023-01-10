<template>
   <div class="total-board">
      <div class="total-board__title">Итого</div>
      <div class="total-board__order-information">
         <div class="order-information__order-amount">
            Сумма заказа
            <span>50 576 ₽</span>
         </div>
         <div class="order-information__order-count">
            Количество
            <span>4 шт</span>
         </div>
         <div class="order-information__order-installation">
            Установка
            <span>Нет</span>
         </div>
      </div>
   </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.total-board {
   width: 425px;
   height: 458px;
   background: #f6f8fa;
   border-radius: 5px;
}
</style>
