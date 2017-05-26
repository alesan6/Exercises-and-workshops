//Konfiguracja Webpack

module.exports = {
    entry: [
        // "./js/zadanie00.jsx",
         // "./js/zadanie01.jsx",
         "./js/zadanie02.jsx"
        ],
    output: { filename: "./js/out.js"},
    devServer: {
        inline: true,
        contentBase: "./",
        port: 3001
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-2', 'react']
                }

            }
        ]
    }
}
