const {merge}= require ('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json')

const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8082/',
       },
    devServer: {
        port: 8082,
        historyApiFallback:{
            index: '/index.html'
        }
    },
    plugins:[
        new ModuleFederationPlugin ({
            name: 'auth',
            filename: 'remoteEntry.js',
            exposes:{
                './AuthApp':'./src/bootstrap'
            },
            shared: [packageJson.dependencies], //short cut to reduce the nuber of dependencies
           // shared: ['react', 'react-dom'] // reduce the number of duplicate dependencies
        }),
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        })
    ]
}

module.exports = merge(commonConfig, devConfig)