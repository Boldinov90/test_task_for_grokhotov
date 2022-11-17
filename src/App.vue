<template>
   <!-- <div id="nav">
    <router-link to="/">ShoppingCart</router-link> 
    <router-link to="/about">About</router-link>
  </div> -->
   <router-view />
</template>

<script>
export default {}
</script>

<style lang="scss">
// @font-face {
//    font-family: 'LatoWeb';
//    src: local('Lato-Regular'), local('Lato-Regular'),
//       url('/src/assets/fonts/Lato-Regular.woff2') format('woff2'),
//       url('/src/assets/fonts/Lato-Regular.woff') format('woff');
//    font-weight: 700;
//    font-style: normal;
// }
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}
.container {
   max-width: 1240px;
   padding: 0 20px;
   margin: 0 auto;
}
</style>
