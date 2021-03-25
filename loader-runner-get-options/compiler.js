const webpack = require('webpack');
const path = require('path');

const compiler = webpack({
  context: __dirname,
  entry: `./index.js`,
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: [
          {
            loader: 'thread-loader'
          },
          {
            loader: path.resolve(__dirname, './loader1.js'),
            options: {
              loader: 1,
            },
          },
        ],
      },
    ],
  },
});

compiler.run((err, stats) => {
  if (err) console.error(err);
  if (stats.hasErrors()) console.error(stats.toJson().errors);

  console.info('end');
});
