<template>
   <div class="total-board">
      <div class="total-board__title">Итого</div>
      <div class="total-board__order-information">
         <div class="order-information__order-amount item">
            <span>Сумма заказа</span>
            <span>50 576 ₽</span>
         </div>
         <div class="order-information__order-count item">
            <span>Количество</span>
            <span>4 шт</span>
         </div>
         <div class="order-information__order-installation item">
            <span>Установка</span>
            <span>Нет</span>
         </div>
      </div>
      <div class="total-board__line"></div>
      <div class="total-board__total-amount">
         Стоимость товаров
         <span>50 576 ₽</span>
      </div>
      <div class="total-board__btns">
         <button class="btns__set-order">Оформить заказ</button>
         <button class="btns__bye-one-click">Купить в 1 клик</button>
      </div>
   </div>
</template>

<script>
export default {
   methods: {},
}
</script>

<style lang="scss" scoped>
.total-board {
   width: 425px;
   height: 458px;
   background: #f6f8fa;
   border-radius: 5px;
   padding: 35px 30px;

   .total-board__title {
      font-family: 'Lato', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 120.52%;
      color: #1f2432;
      margin-bottom: 31px;
   }

   .total-board__order-information {

      .item {
         display: flex;
         justify-content: space-between;
      }
   }
}
</style>
