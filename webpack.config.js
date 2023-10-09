const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const entry = './src/index.js';
const outputFilename = 'main.js';
const postcssPlugins = [
    require('postcss-import'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
];
const postcssLoading = {
    loader: 'postcss-loader',
    options: {
        postcssOptions: {
            plugins: postcssPlugins
        }
    }
}

module.exports = (env, argv) => {
    let config = {
        entry,
        output: {
            filename: outputFilename
        },
        module:{
            rules: [{
                test: /\.css$/i
            }]
        }
    }

    if(argv.mode === 'development'){
        config.module.rules[0].use = ['style-loader', 'css-loader', postcssLoading];
        config.watch = true;
        config.output.path = path.resolve(__dirname,'app/dist');
    } else if (argv.mode === 'production'){
        config.module.rules[0].use = [MiniCssExtractPlugin.loader, 'css-loader', postcssLoading];
        config.plugins = [new MiniCssExtractPlugin({filename: 'main.css'})];
        config.optimization = {
            minimize: true,
            minimizer: [`...`, new CssMinimizerPlugin()]
        };
        config.output.path = path.resolve(__dirname,'app/dist');
    }


    return config;



}