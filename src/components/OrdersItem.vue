<template>
   <div class="orders-item">
      <div class="orders-item__img">
         <img alt="image" :src="require('../../public/img_orders/' + itemOrder.image)" />
      </div>
      <div class="orders-item__info info">
         <div class="info__title">{{ itemOrder.title }}</div>
         <div class="info__description">{{ itemOrder.description }}</div>
         <div class="info__article">{{ itemOrder.article }}</div>
      </div>
      <div class="orders-item__count-group count-group">
         <div class="count-group__btn-minus btn" @click="decrementCount(itemOrder)">
            <img src="../assets/img_app/operant-minus.svg" alt="image" />
         </div>
         <div class="count-group__number btn">{{ itemOrder.count }}</div>
         <div class="count-group__btn-plus btn" @click="incrementCount(itemOrder)">
            <img src="../assets/img_app/operant-plus.svg" alt="image" />
         </div>
         <div class="count-group__original-cost" v-if="itemOrder.count > 1">
            {{ displayCost(itemOrder.cost) }} ₽/шт.
         </div>
      </div>
      <div class="orders-item__general-cost">
         {{ displayCost(itemOrder.cost * itemOrder.count) }} ₽
      </div>
      <div class="orders-item__btn-remove" @click="removeProduct(itemOrder)">
         <img src="../assets/img_app/btn-remove.svg" alt="remove" />
      </div>
   </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
   data() {
      return {}
   },
   methods: {
      ...mapActions([
         'REMOVE_PRODUCT',
         'INCREMENT_COUNT',
         'DECREMENT_COUNT',
         'GET_TOTAL_COUNT',
         'GET_TOTAL_COST'
      ]),
      displayCost(cost) {
         const numb = cost
         const numbFmt = new Intl.NumberFormat('ru-RU').format(numb)
         return numbFmt
      },
      removeProduct(product) {
         this.REMOVE_PRODUCT(product)
         this.GET_TOTAL_COUNT()
         this.GET_TOTAL_COST()
      },
      incrementCount(product) {
         this.INCREMENT_COUNT(product)
         this.GET_TOTAL_COUNT()
         this.GET_TOTAL_COST()
      },
      decrementCount(product) {
         this.DECREMENT_COUNT(product)
         this.GET_TOTAL_COUNT()
         this.GET_TOTAL_COST()
      },
   },
   props: {
      itemOrder: Object,
   },
}
</script>

<style lang="scss" scoped>
.orders-item {
   border-bottom: 1px solid #c4c4c4;
   width: 800px;
   height: 121px;
   margin-bottom: 25px;
   display: flex;

   .orders-item__img {
      margin-left: 15px;
   }

   .orders-item__info {
      height: 100%;
      width: 263px;
      margin-left: 31px;

      .info__title {
         margin-top: 8px;
         font-family: 'Lato', sans-serif;
         font-style: normal;
         font-weight: 600;
         font-size: 16px;
         line-height: 145%;
         color: #1f2432;
      }

      .info__description {
         margin-top: 6px;
         font-family: 'Lato', sans-serif;
         font-style: normal;
         font-weight: 400;
         font-size: 12px;
         line-height: 18px;
         color: #2c3242;
      }

      .info__article {
         margin-top: 7px;
         font-family: 'Lato', sans-serif;
         font-style: normal;
         font-weight: 400;
         font-size: 14px;
         line-height: 21px;
         color: #797b86;
      }
   }

   .orders-item__count-group {
      margin-top: 33px;
      margin-left: 79px;
      border-radius: 4px;
      width: 102px;
      height: 34px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;

      .btn {
         display: flex;
         justify-content: center;
         align-items: center;
         background: #f6f8fa;
         width: 32px;
         height: 32px;
         color: #1f2432;
      }

      .count-group__btn-minus {
         border-radius: 4px 0 0 4px;
         cursor: pointer;
      }

      .count-group__number {
         font-family: 'Lato', sans-serif;
         font-style: normal;
         font-weight: 400;
         font-size: 14px;
         line-height: 21px;
      }

      .count-group__btn-plus {
         border-radius: 0 4px 4px 0;
         cursor: pointer;
      }

      .count-group__original-cost {
         margin-top: 8px;
         font-family: 'Roboto', sans-serif;
         font-style: normal;
         font-weight: 400;
         font-size: 12px;
         line-height: 17px;
         color: #1f2432;
      }
   }

   .orders-item__general-cost {
      margin-top: 38px;
      margin-left: 84px;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 26px;
      color: #1f2432;
   }

   .orders-item__btn-remove:last-of-type {
      margin-left: auto;
      cursor: pointer;
   }
}
</style>
