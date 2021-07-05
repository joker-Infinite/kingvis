const webpack = require("webpack");
module.exports = {
    devServer: {
        port: 8080, // 端口号配置
        proxy: {
            "/apidata": {
                target: "http://127.0.0.1:9080/",
                changeOrigin: true,
                pathRewrite: {
                    "^/apidata": "http://127.0.0.1:9080/"
                }
            },
            "/apibase": {
                target: "http://127.0.0.1:9080/",
                changeOrigin: true,
                pathRewrite: {
                    "^/apibase": "http://127.0.0.1:9080/"
                }
            },
            "/apifin": {
                target: "http://127.0.0.1:9086/",
                changeOrigin: true,
                pathRewrite: {
                    "^/apifin": "http://127.0.0.1:9080/"
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
            },
            "/wpi": {
                target: "http://192.168.0.145:9087/",
                changeOrigin: true,
                pathRewrite: {
                    "^/wpi": "/"
                }
            },
            "/ypi": {
                target: "http://192.168.0.200:9088/",
                changeOrigin: true,
                pathRewrite: {
                    "^/ypi": "/"
                }
            },
            "/mtf": {
                target: "http://192.168.0.127:9086/",
                changeOrigin: true,
                pathRewrite: {
                    "^/mtf": "/"
                }
            },
            "/base_": {
                target: "http://192.168.0.145:9085/",
                changeOrigin: true,
                pathRewrite: {
                    "^/base_": "/"
                }
            },
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
