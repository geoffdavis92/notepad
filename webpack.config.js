"use strict";

const webpack = require("webpack");
const path = require("path");
const source = path.join(`${__dirname}/source/javascript/index.js`);
const destination = path.join(`${__dirname}/assets/js/`);

module.exports = {
    entry: source,
    output: {
        path: destination,
        filename: "index.js",
    },
    module: {
        loaders: [
            {
                test: /\.js(x)*$/,
                exclude: /node_modules/,
                loader: "babel-loader?presets[]=es2015&presets[]=react",
            },
        ],
    },
    plugins: [
        process.env.NODE_ENV && process.env.NODE_ENV === 'production' ? new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production"),
            },
        }) : () => null,
        process.env.NODE_ENV ? new webpack.optimize.UglifyJsPlugin() : () => null
    ],
};