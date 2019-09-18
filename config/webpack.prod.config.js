const path = require('path')
const merge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const webpackBaseConfig = require('./webpack.common.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(webpackBaseConfig, {
    module: {
        rules: [
            {
                test: [/.css$|.scss$/],
                loader: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader:
                            'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]___[hash:base64:10]',
                                context: path.resolve(__dirname, 'src'),
                                hashPrefix: 'my-custom-hash',
                            }
                        }
                    },
                    'postcss-loader',
                    'sass-loader'
                ]
            },
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin(),
            new OptimizeCSSAssetsPlugin()
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css'
        }),
    ]
})