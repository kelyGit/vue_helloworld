const path = require('path')

module.exports = {
    baseUrl: '/front/',   // 基本路径
    outputDir: 'dist', // 输出文件目录
    assetsDir: 'static',
    lintOnSave: false, // eslint-loader 是否在保存的时候检查
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    // webpack配置
    chainWebpack: (config) => {
        config.plugin("html").tap(args => {
            // args[0].chunksSortMode = 'none'
            args[0].template = process.env.template;
            return args;
        });
    },
    configureWebpack: (config) => {
        //关闭 webpack 的性能提示
        config.performance = {
            hints: false
        }
        //警告 webpack 的性能提示 
        // config.performance = {
        //     hints: 'warning',
        //     //入口起点的最大体积
        //     maxEntrypointSize: 50000000,
        //     //生成文件的最大体积
        //     maxAssetSize: 30000000,
        //     //只给出 js 文件的性能提示
        //     assetFilter: function (assetFilename) {
        //         return assetFilename.endsWith('.js');
        //     }
        // }
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            config.mode = 'production'
            config.externals = {
                vue: "Vue",
                vuex: "Vuex",
                "vue-router": "VueRouter",
                "element-ui": "ELEMENT"
            };
        } else {
            // 为开发环境修改配置...
            config.mode = 'development'
        }
        Object.assign(config, {
            // 开发生产共同配置
            resolve: {
                alias: {
                    '@': path.resolve(__dirname, './src'),
                    '@c': path.resolve(__dirname, './src/components'),
                    '@p': path.resolve(__dirname, './src/pages')
                } // 别名配置
            }
        })
    },
    productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
    // css相关配置
    css: {
        extract: true, // 是否使用css分离插件 ExtractTextPlugin
        sourceMap: false, // 开启 CSS source maps?
        loaderOptions: {
            css: {}, // 这里的选项会传递给 css-loader
            postcss: {} // 这里的选项会传递给 postcss-loader
        }, // css预设器配置项 详见https://cli.vuejs.org/zh/config/#css-loaderoptions
        modules: false // 启用 CSS modules for all css / pre-processor files.
    },
    parallel: require('os').cpus().length > 1, // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
    pwa: {}, // PWA 插件相关配置 see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    // webpack-dev-server 相关配置
    devServer: {
        // open: process.platform === 'darwin',
        host: '0.0.0.0', // 允许外部ip访问
        port: 8099, // 端口
        https: false, // 启用https
        overlay: {
            warnings: true,
            errors: true
        }, // 错误、警告在页面弹出
        proxy: {
            '/admin': {
                // target: 'http://192.168.1.101:9998',
                // target: 'https://vems-dev.infinitus.com.cn',
                // target: 'https://10.87.132.41:9998',
                target: 'http://localhost:9998',
                changeOrigin: true, // 允许websockets跨域
                // ws: true,
                pathRewrite: {
                    '^/admin': '/admin'
                }
            }
        } // 代理转发配置，用于调试环境
    },
    // 第三方插件配置
    pluginOptions: {}
}
