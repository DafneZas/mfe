const {merge}= require ('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json')

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8081,
        historyApiFallback:{
            index: 'index.html'
        }
    },
    plugins:[
        new ModuleFederationPlugin ({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes:{
                './MarketingApp':'./src/bootstrap'
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