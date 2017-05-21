var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  webpack: (config, { dev }) => {
    var loader = {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader', 
        use: 'css-loader'
      })
    }

    config.module.loaders=[loader];
    config.plugins.push(new ExtractTextPlugin("bundle.css"));

    return config
  },
  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config

    // Important: return the modified config
    return config
  }
}