const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: {
        main: './src/index.tsx'
    },
    output: {
        filename: '[name].[hash].js',
        publicPath: '/',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        open: false,
        writeToDisk: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    'babel-loader',
                    'awesome-typescript-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: [
                    'html-loader'
                ]
            },
            {
                test: /\.s?css$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
                
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
                options: {
                    url: true
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    // {
                    //     loader: 'file-loader',
                    //     options: {
                    //         name: 'assets/[name].[ext]'
                    //     }
                    // },
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 20000
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        // new webpack.HashedModuleIdsPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: './index.html'
        }),
        new webpack.ProvidePlugin({
            "React": 'react',
        })
    ]
}