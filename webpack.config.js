const path = require('path')
const htmlWebpack = require ('html-webpack-plugin')
const MiniCssExtract = require ('mini-css-extract-plugin')

module.exports = {

    entry: './src/index.js',// entrace of file inside the src folder
    output: {//Output file from src folder 
        filename: 'main.js',//The new name of the previous file
        path: path.resolve(__dirname, 'dist')//The way where the new main.js file was created, within the dist folder
    },
    module: {
        rules: [
            {
               test: /\.(sa|c|sc)ss$/, //Regular expression
               use: [
                   MiniCssExtract.loader,
                   'css-loader',
                   'sass-loader'
                ]
            },
            {
                test: /\.css$/i, //Regular expression
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.js$/i,
                exclude: /node_modules/, //Ignore that folder
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(jpeg|jpg|png|svg|gif)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new htmlWebpack ({
            filename: 'index.html',//File name that will be create
            template: './src/index.html'//Path, where the file mentioned above will be found 
        }),
        new MiniCssExtract({
            filename: 'style.css'
        })
    ]
}