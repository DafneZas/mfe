module.exports= {
    module:{
        rules: [
            {
                test: /\.m?js$/, // when we import in a file that ends with an extension mjs or js, we want to be processed by bable 
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        presets: ['@babel/preset-react','@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],

                    },
                },
            }
        ]
    }
}