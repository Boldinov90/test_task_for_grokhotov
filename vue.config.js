module.exports = {
   css: {
      loaderOptions: {
         scss: {
            // additionalData: `@import "./src/scss/base.scss";`,
            prependData: `@import "@/scss/base.scss";`,
         },
      },
   //    chainWebpack: config => {
   //       config.module
   //          .rule("fonts")
   //          .test(/\.(ttf|otf|eot|woff|woff2)$/)
   //          .use("file-loader")
   //          .loader("file-loader")
   //          .tap(options => {
   //             options = {
   //                // limit: 10000,
   //                name: '/assets/fonts/Lato-Regular.ttf',
   //             }
   //             return options
   //          })
   //          .end()
   //    }
   },

}

