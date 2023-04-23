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
      instalation: false,
      totalCount: 0,
      totalCost: 0
   },
   mutations: {
      CLEAR_SHOPPING_CART(state) {
         state.order = []
      },
      REMOVE_PRODUCT(state, product) {
         state.order = state.order.filter((item) => item !== product)
      },
      INCREMENT_COUNT(state, product) {
         state.order.find((item) => item === product).count++
      },
      DECREMENT_COUNT(state, product) {
         if (state.order.find((item) => item === product).count > 1) {
            state.order.find((item) => item === product).count--
         }
      },
      CANGE_INSTALATION_STATUS(state){
         state.instalation = !state.instalation
      },
      GET_TOTAL_COUNT(state){
         state.totalCount = 0
         state.order.forEach(item => {
            state.totalCount += item.count
         })
      },
      GET_TOTAL_COST(state){
         let cost = 0
         state.order.forEach(item => {
            cost += (item.cost * item.count)
         })
         state.totalCost = new Intl.NumberFormat('ru-RU').format(cost)
      }
   },
   actions: {
      CLEAR_SHOPPING_CART({ commit }) {
         commit('CLEAR_SHOPPING_CART')
      },
      REMOVE_PRODUCT({ commit }, product) {
         commit('REMOVE_PRODUCT', product)
      },
      INCREMENT_COUNT({ commit }, product) {
         commit('INCREMENT_COUNT', product)
      },
      DECREMENT_COUNT({ commit }, product) {
         commit('DECREMENT_COUNT', product)
      },
      CANGE_INSTALATION_STATUS({commit}){
         commit('CANGE_INSTALATION_STATUS')
      },
      GET_TOTAL_COUNT({commit}){
         commit('GET_TOTAL_COUNT')
      },
      GET_TOTAL_COST({commit}){
         commit('GET_TOTAL_COST')
      }
   },
   getters: {
      ORDER(state) {
         return state.order
      }, 
      INSTALATION(state){
         return state.instalation
         
      },
      TOTAL_COUNT(state){
         return state.totalCount
      },
      TOTAL_COST(state){
         return state.totalCost
      }
   },
   modules: {
   }
})
