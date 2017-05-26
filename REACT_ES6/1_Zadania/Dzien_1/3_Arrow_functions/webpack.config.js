module.exports = {
    entry: ["./js/app.js",
            "./js/zadanie00.js",
            "./js/zadanie07.js",
            "./js/zadanie08.js",
            "./js/zadanie09.js"
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
