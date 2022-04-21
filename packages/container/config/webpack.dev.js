const {merge}= require ('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json')

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080,
        historyApiFallback:{
            index: 'index.html'
        }
    },
    plugins:[
        new ModuleFederationPlugin ({
            name: 'container',
            remotes:{
                marketing: 'marketing@http://localhost:8081/remoteEntry.js' //"marketing@" have to match up with the name maketing that we worte inside marketing web dev file
            },
            shared: [packageJson.dependencies],
           // shared: ['react', 'react-dom'] // reduce the number of duplicate dependencies
        }),
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        }),
    ]
}

module.exports = merge(commonConfig, devConfig)