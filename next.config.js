var path = require("path");

module.exports = {
  webpack: function(config){
    // var vendor = {
    //   jquery : path.join(__dirname,"node_modules/jquery/dist/jquery.min.js"),
    //   bootstrap : path.join(__dirname,"node_modules/bootstrap/dist/js/bootstrap.min.js")
    // };

    // var loader = {
    //   test : require.resolve(vendor.jquery),
    //   loader: 'expose?jQuery!expose?$'
    // }

    // config.resolve = {
    //   alias: {
    //     jquery : vendor.jquery,
    //     bootstrap : vendor.bootstrap
    //   }
    // }

    // config.module.loaders=[loader];
    return config
  },
  webpackDevMiddleware: function(config) {
    // Perform customizations to webpack dev middleware config

    // Important: return the modified config
    return config
  }
}