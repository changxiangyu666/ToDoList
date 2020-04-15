/**
 * Created by MrsChangXY on 2020/4/14.
 */
var webpack=require('webpack');
module.exports = {
    entry: "./runapp.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
    plugins:[
        new webpack.BannerPlugin('./index.html')
    ]
};
