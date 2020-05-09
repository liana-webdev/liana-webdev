import merge from 'webpack-merge';
import common from './webpack.config';

export default merge(common, {
  mode: 'production',
  devtool: false,
  optimization: {
    minimize: true,
    removeEmptyChunks: true,
    nodeEnv: 'production',
    removeAvailableModules: true,
    mergeDuplicateChunks: true,
    usedExports: true,
    splitChunks: {
      name: 'vendor',
      chunks: 'initial',
    },
  },
});
