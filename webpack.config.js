const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./client/public/index.html", 
  filename: "./index.html"
});

module.exports = {
    entry: "./client/src/index.js",
    output: { // NEW
        path: path.join(__dirname, './client/dist'),
        filename: "sample.js"
    }, // NEW Ends
    plugins: [htmlPlugin],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};

// import HtmlWebPackPlugin from "html-webpack-plugin";
// import { webpack } from "webpack";
// import path from "path";

// export default (env, args) => {
//     const isProduction = args.mode === 'production';
//     const devtool = !isProduction && 'inline-source-map';
//     const rules = [
//         {
//             test: /\.(js|jsx)?$/,
//             exclude: /node_modules/,
//             use: ['babel-loader'],
//         },
//         {
//             test: /\.css$/,
//             use: ['style-loader', 'css-loader'],
//         },
//     ];
//     const htmlPlugin = new HtmlWebPackPlugin({
//         template: "./client/public/index.html",
//         filename: "./index.html"
//     });

//     return {
//         devtool,
//         entry: './client/src/index.js',
//         output: {
//             path: path.resolve(__dirname, './client/dist'),
//             filename: 'sample.js',
//         },
//         module: { rules },
//         resolve: {
//             // modules: ['node_modules'],
//             extensions: ['.js', '.jsx'],
//         },
//         plugins: [htmlPlugin]
//     };
// };