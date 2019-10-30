const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(process.cwd(), "dist"),
        filename: 'js/[name].[chunkHash:8].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack',
            template: 'public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[chunkHash:8].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader',
                    'postcss-loader',
                ],
            }, {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        option: {
                            name: 'static/images/[name].[ext]',
                            outputPath: 'static/images',
                            publicPath: '/'
                        },

                    },
                    {
                        test: /\.js$/,
                        exclude: /(node_modules|bower_components)/,
                        use: {
                            loader: 'babel-loader',
                            option: {
                                presets: ['@babel/preset-env'],

                            }
                        }
                    }
                
                ]
            }
        ]
    }
}