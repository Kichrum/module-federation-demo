const webpackConfig = {
  ...require('./webpack.config'),
  mode: 'production',
};

webpackConfig.plugins[0]._options.remotes.login = './login/remoteEntry.js';

module.exports = webpackConfig;
