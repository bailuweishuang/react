const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const js = [
  '@/js/util'
]
const win = typeof window === "undefined" ? this : window;
module.exports = {
  entry: {
    app: "./src/main.js",
    //vendor: ["react", "react-router-dom", "redux", "react-dom", "react-redux"],
    js
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build")
  },
  externals: {
    jquery: "jQuery",
    react: "React",
    "react-dom": "ReactDOM",
    "react-redux": "ReactRedux",
    "react-router": "ReactRouter",
    "react-router-dom": "ReactRouterDOM",
    redux: "Redux",
    moment: "moment",
    antd: "antd",
    'redux-thunk': "ReduxThunk",
    axios: "axios",
    qs: "Qs",
    mock: "Mock"
  },
  resolve: {
    extensions: [".js", ".css", ".json", ".jsx", ".scss"],
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        use: [
          {
            loader: "babel-loader"
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.s[c|a]ss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          //如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
          use: ["css-loader", "sass-loader"]
        })
      },
      {
        test: /(\.css|\.less)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true, // 指定启用css modules
              localIdentName: "[name]__[local]--[hash:base64:5]" // 指定css的类名格式
            }
          },
          {
            loader: "less-loader"
          },
          {
            loader: "postcss-loader"
          }
        ],
        exclude: /node_modules/ //那些文件不需要用上述loader
      },
      {
        test: /(\.css|\.less)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ],
        exclude: /src/ //那些文件不需要用上述loader
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["build"]),
    new HtmlWebpackPlugin({
      title: "Production",
      filename: "index.html",
      template: path.join(__dirname, "./index.html"),
      hash: true, //防止缓存
      minify: {
        removeAttributeQuotes: true //压缩 去掉引号
      }
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    //new BundleAnalyzerPlugin(),  webpack打包文件大小分析
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new ExtractTextPlugin({
      filename: "[name].css",
      allChunks: true
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: { name: "commons", chunks: "initial", minChunks: 2 }
      }
    }
  }
};
