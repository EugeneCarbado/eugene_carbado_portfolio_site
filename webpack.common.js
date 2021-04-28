const path = require("path");
const webpack = require("webpack");


module.exports = {
    output: {
        filename: 'main.[contentHash].js',
        path: path.resolve(__dirname, "dist")
    },
    devtool: 'source-map',
    entry: {
        main: "./src/js/index.js",
        vendor: "./src/vendor.js"
    },
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpeg|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs"
                    }
                }
            }
        ]
    }
}