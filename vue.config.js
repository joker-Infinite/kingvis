const webpack = require("webpack");
module.exports = {
  devServer: {
    port: 8080, // 端口号配置
    proxy: {
      /*通用接口代理*/
      "/api": {
        // target: "http://192.168.0.197:9080/",
        target: "http://111.47.3.250:9080/",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      },
      /*登录接口*/
      "/upi": {
        target: "http://192.168.0.145:9086/",
        // target: "http://192.168.0.188:9080/",
        changeOrigin: true,
        pathRewrite: {
          "^/upi": "/"
        }
      },
      /*登录接口*/
      "/mpi": {
        target: "http://192.168.0.145:9080/",
        // target: "http://192.168.0.188:9080/",
        changeOrigin: true,
        pathRewrite: {
          "^/mpi": "/"
        }
      },
      "/zyf": {
        target: "http://192.168.0.200:9080/",
        changeOrigin: true,
        pathRewrite: {
          "^/zyf": "/"
        }
      },
      "/wj": {
        target: "http://192.168.0.145:9080/",
        changeOrigin: true,
        pathRewrite: {
          "^/wj": "/"
        }
      }
    }
  },
  configureWebpack: {
    externals: {
      AMap: "window.AMap",
      AMapUI: "AMapUI"
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery"
      })
    ]
  },
  lintOnSave: false
};
