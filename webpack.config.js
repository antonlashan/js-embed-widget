const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const bundleOutputDir = './dist';

module.exports = (env) => {
  const isDevBuild = !(env && env.prod);
  const environment = (env && env.appEnv) || 'dev';

  return [
    {
      mode: isDevBuild ? 'development' : 'production',
      entry: './src/main.js',
      output: {
        filename: 'widget.js',
        path: path.resolve(bundleOutputDir),
      },
      optimization: {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            extractComments: (astNode, comment) => {
              if (/@extract/i.test(comment.value)) {
                return true;
              }

              return false;
            },
          }),
        ],
      },
      devServer: {
        contentBase: bundleOutputDir,
      },
      plugins: [
        new webpack.SourceMapDevToolPlugin(),
        new CopyPlugin({
          patterns: [{ from: 'demo/' }],
        }),
        new webpack.NormalModuleReplacementPlugin(/.\/src\/environment\/env\.js/, `./env.${environment}.js`),
      ],
      module: {
        rules: [
          { test: /\.html$/i, use: 'html-loader' },
          { test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader', 'sass-loader'] },
          {
            test: /\.js$/i,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  [
                    '@babel/preset-env',
                    {
                      useBuiltIns: 'entry',
                      corejs: { version: 3, proposals: true },
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
    },
  ];
};
