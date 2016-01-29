module.exports = {
    // entry: __dirname + '/source/main.coffee',
    entry: __dirname + '/src/coffee/routing/appRouter.coffee',
    output: {
        filename: './build/bundle.js'
    },
    module: {
        loaders: [
            {   
                test: /\.coffee$/, 
                loader: "coffee-loader",
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
    ],
    devtool: 'source-map'
}