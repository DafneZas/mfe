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


/* 
Deployment
- Deploy each microfront independently (including container)
- Location of child app remoteEntry.js files must be known at build time
- We need some deployment solution that can handle multiple different proyects 
- Probably need a CI/CD pipeline of some sort 
- 

*/