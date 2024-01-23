const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';

const filename = (ext) =>
  mode ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
  mode,
  target,
  devServer: {
    port: 2020,
    open: true,
  },
  // Входной файл
  entry: ['@babel/polyfill', path.resolve(__dirname, 'src', 'index.js')],

  // Выходной файл
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: filename('js'),
  },

  module: {
    rules: [
      // Транспилируем js с babel
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: 'defaults' }]],
          },
        },
      },

      // Компилируем SCSS в CSS
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          MiniCssExtractPlugin.loader, // Extract css to separate file
          'css-loader', // translates CSS into CommonJS
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('postcss-preset-env')],
              },
            },
          }, // parse CSS and add vendor prefixes to CSS rules
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      },

      // Подключаем шрифты из css
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },

      // Подключаем картинки из css
      {
        test: /\.(svg|png|jpg|jpeg|webp)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
      },

      // Подключаем Html
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },

  plugins: [
    // Подключаем файл html, стили и скрипты встроятся автоматически
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),

    // Кладем стили в отдельный файл
    new MiniCssExtractPlugin({
      filename: filename('css'),
    }),

    // Копируем картинки
    new CopyPlugin({
      patterns: [{ from: './src/images', to: 'images' }],
    }),
  ],
};
