const webpack = require("webpack");
module.exports = {
    devServer: {
        port: 8080, // 端口号配置
        proxy: {
            "/apidata": {
                target: "http://192.168.0.188:9080/",
                changeOrigin: true,
                pathRewrite: {
                    "^/apidata": ""
                }
            },
            "/apibase": {
                target: "http://192.168.0.188:9085/",
                changeOrigin: true,
                pathRewrite: {
                    "^/apibase": ""
                }
            },
            "/apifin": {
                target: "http://192.168.0.188:9086/",
                changeOrigin: true,
                pathRewrite: {
                    "^/apifin": ""
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
