const path = require('path')
const merge = require('webpack-merge')
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
                                localIdentName: '[local]__[hash:base64:2]',
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
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
    ]
})