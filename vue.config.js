'use strict'
const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')// 引入gzip压缩插件
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ZipWebpackPlugin = require('zip-webpack-plugin')

const packageName = require('./package.json').name
function resolve (dir) {
  return path.join(__dirname, dir)
}

// 只需要复制的文件
const copyFiles = [
  {
    from: path.resolve('src/chrome/manifest.json'),
    to: `${path.resolve(packageName)}/manifest.json`
  },
  {
    from: path.resolve('src/assets'),
    to: path.resolve(packageName + '/assets')
  },
  {
    from: path.resolve('src/chrome/inject.js'),
    to: path.resolve(packageName)
  }
]

const plugins = [
  new CopyWebpackPlugin({
    patterns: copyFiles
  }),
  new CompressionPlugin({
    algorithm: 'gzip',
    test: /\.js$|\.html$|\.css/, // 匹配文件名
    threshold: 10240, // 对超过10kb的数据进行压缩
    deleteOriginalAssets: false, // 是否删除原文件
    minRatio: 0.8
  })
]

// 生产环境打包dist为zip
if (process.argv.includes('--zip')) {
  plugins.push(
    new ZipWebpackPlugin({
      path: path.resolve('./'),
      filename: `${packageName}.zip`
    })
  )
}

// 配置页面
const pages = {}
/**
 * popup 和 devtool 都需要html文件
 * 因此 chromeName 还可以添加devtool
 */
const chromeName = ['popup']

chromeName.forEach(name => {
  console.log('--------------------name-----------', name)
  pages[name] = {
    entry: `src/${name}/main.js`,
    template: `src/${name}/index.html`,
    filename: `${name}.html`
  }
})
module.exports = {
  publicPath: '/',
  outputDir: packageName,
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  pages,
  pluginOptions: {
    browserExtension: {
      componentOptions: {
        background: {
          entry: './src/chrome/background/index.js'
        },
        contentScripts: {
          entries: {
            'content-script': './src/chrome/content-script.js'
          }
        }
      }
    }
  },
  configureWebpack: {
    // // 多入口打包
    // entry: {
    //   content: './src/content/index.js',
    //   background: './src/chrome/background/index.js'
    // },
    // output: {
    //   filename: 'js/[name].js'
    // },
    plugins,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false
    /* proxy: { // axios跨域处理
      '^/api/*': {
        target: 'http://10.10.30.202:8011/', // 目标地址--api路径
        changeOrigin: true // 开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        // pathRewrite: { '^/api/v2/': '/' } // 这里重写路径--vue端口
      }
    } */
  },
  chainWebpack (config) {
    config.resolve.alias.set('@', path.resolve('src'))
    // 处理字体文件名，去除hash值
    const fontsRule = config.module.rule('fonts')

    // 清除已有的所有 loader。
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    fontsRule.uses.clear()
    fontsRule
      .test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/i)
      .use('url')
      .loader('url-loader')
      .options({
        limit: 1000,
        name: 'fonts/[name].[ext]'
      })

    config.plugins.delete('preload') // TODO: need test
    config.plugins.delete('prefetch') // TODO: need test
    if (process.env.NODE_ENV === 'prod') { // npm run build --report
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
        .end()
    }
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()

    // set preserveWhitespace
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()

    config
      .when(process.env.NODE_ENV === 'development',
        config => config.devtool('cheap-source-map')
      )
  },
  css: {
    extract: {
      filename: 'css/[name].css'
    }
  }
}
