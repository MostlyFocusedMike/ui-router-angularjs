const path = require('path');

module.exports = {
    entry: {
        app: ['./src/js/app.js'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: "/angularjs-basic/", // this is required if you host it on github
    },
    mode: 'production',
    module: {
        rules : [
        {
            test:/\.(s*)css$/,
            use:['style-loader','css-loader', 'sass-loader']
        },
        {
            test: /\.html?$/,
            use: ['html-loader'],
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
              { loader: 'babel-loader' },
            ]
        },
        {
            test: /\.md$/,
            use: [
                {
                    loader: "html-loader"
                },
                {
                    loader: "markdown-loader",
                }
            ]
        }
        ]
    },
    resolve: {
        alias: {
            MainStyle: path.resolve(__dirname, 'src/styles/styles.css'),
            MainSass: path.resolve(__dirname, 'src/styles/main.scss'),
            Constants: path.resolve(__dirname, 'src/js/shared/constants.js'),
        }
    }
}
// https://medium.com/a-beginners-guide-for-webpack-2/webpack-loaders-css-and-sass-2cc0079b5b3a
// setup differs slighltly from traversy