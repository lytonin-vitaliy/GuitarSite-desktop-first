const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devServer = (isdev) => !isdev ? {} : {
    devServer: {
        open: true,
        hot: true,
        port: 8080,
        client: {
            overlay: false   // ← вот здесь добавляем настройку
        }
    }
};

module.exports = ({develop})=>({
  mode: develop ? 'development' : 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    assetModuleFilename: 'images/[hash][ext][query]',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
        filename: './styles/main.css'
    })
  ],
  module: {
    rules:[
        {
        test: /\.(png|svg|jpg|jpeg)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/i,
        use: [
            MiniCssExtractPlugin.loader, 'css-loader'
        ],
      },
      {
        test: /\.scss$/i,
        use: [
            MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ]
  },
 ...devServer(develop),
 infrastructureLogging: {
  level: 'error'
}
});