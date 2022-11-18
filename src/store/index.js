import { createStore } from 'vuex'

export default createStore({
   state: {
      order: [
         {
            image: 'product_1.png',
            title: 'Вытяжное устройство G2H',
            description: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
            article: 'G2H1065',
            count: 1,
            cost: 12644
         },
         {
            image: 'product_2.png',
            title: 'Вытяжное устройство BXC',
            description: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
            article: 'G2H1065',
            count: 2,
            cost: 12644
         },
         {
            image: 'product_3.png',
            title: 'Вытяжное устройство GHN',
            description: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
            article: 'G2H1065',
            count: 1,
            cost: 12644
         }
      ],
      // productsCount: 0
   },
   mutations: {
      CLEAR_SHOPPING_CART(state) {
         state.order = []
      }
   },
   actions: {
      CLEAR_SHOPPING_CART({commit}){
         commit('CLEAR_SHOPPING_CART')
      }
   },
   getters: {
      ORDER(state){
         return state.order
      }
   },
   modules: {
   }
})
