const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
module.exports = {
  entry: {
    app: "./src/main.js",
    vendor: ["react", "react-router-dom", "redux", "react-dom", "react-redux"]
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build")
  },
  externals: {
    react: "window.React",
    "react-dom": "window.ReactDOM",
    "react-redux": "window.ReactRedux",
    "react-router": "window.ReactRouter",
    "react-router-dom": "window.ReactRouterDom",
    redux: "window.Redux",
    moment: "window.Moment",
    antd: "window.antd"
  },
  resolve: {
    extensions: [".js", ".css", ".json"],
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
        use: ["style-loader", "css-loader", "sass-loader"]
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
