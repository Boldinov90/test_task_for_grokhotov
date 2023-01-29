<template>
   <div class="total-board" v-if="ORDER.length > 0">
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
         <button class="btns__set-order btn">Оформить заказ</button>
         <button class="btns__bye-one-click btn">Купить в 1 клик</button>
      </div>
   </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
   methods: {},
   computed: {
      ...mapGetters(['ORDER']),
   },
}
</script>

<style lang="scss" scoped>
.total-board {
   margin-top: 50px;
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
      font-family: 'Lato', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 145%;
      color: #1F2432;

      .order-information__order-amount {
         margin-bottom: 18px;
      }

      .order-information__order-count {
         margin-bottom: 18px;
      }

      .item {
         display: flex;
         justify-content: space-between;
      }
   }

   .total-board__line {
      margin-top: 28px;
      width: 365px;
      height: 1px;
      background: #AEB0B6;
   }

   .total-board__total-amount {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: 'Lato', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 145%;
      color: #1F2432;

      span {
         font-family: 'Roboto', sans-serif;
         font-style: normal;
         font-weight: 700;
         font-size: 26px;
         line-height: 130%;
         text-align: right;
         letter-spacing: 0.005em;
         color: #1F2432;
      }
   }

   .total-board__btns {
      margin-top: 30px;
      display: flex;
      flex-direction: column;

      .btn {
         cursor: pointer;
         font-family: 'Lato', sans-serif;
         font-style: normal;
         font-weight: 300;
         font-size: 18px;
         line-height: 145%;
         border-radius: 4px;
         height: 54px;
      }

      .btns__set-order {
         border: none;
         background: #0069B4;
         color: #FFFFFF;
         margin-bottom: 12px;
      }

      .btns__set-order:hover {
         background: #3d98da;
      }

      .btns__bye-one-click {
         background: #FFFFFF;
         border: 1px solid #0069B4;
         color: #0069B4;
      }

      .btns__bye-one-click:hover {
         background: #ededed;
      }
   }
}
</style>
