module.exports = {
    entry: ["./js/app.js",
            "./js/zadanie01.js",
            "./js/zadanie02.js",
            "./js/zadanie04.js"
        ],
    output: {
        filename: "./js/out.js"
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.js $/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}
