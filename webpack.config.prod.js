const webpack = require("webpack");
const generalConfig = require("./webpack.config");
const assign = require("lodash").assign;
const CopyWebpackPlugin = require("copy-webpack-plugin");

const productionConfig = {
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    devtool: "cheap-module-source-map",
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
                'API_URL': JSON.stringify('.')
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new CopyWebpackPlugin([
            {from: "index.html", to: "index.html"}
        ])
    ]
};

const config = assign({}, generalConfig, productionConfig);

module.exports = config;