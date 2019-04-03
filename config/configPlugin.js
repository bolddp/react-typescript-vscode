const webpack = require('webpack');

// BFF_URL : the URL of the REST API for the web page

const devConfig = {
  'process.env.BFF_URL': JSON.stringify('https://api-dev.example.com')
}

const liveConfig = {
  'process.env.BFF_URL': JSON.stringify('https://api.example.com')
}

module.exports = function configPlugin(envType) {
  console.log(`configPlugin : using '${envType}' configuration for production build`);

  if (envType === 'live') {
    return new webpack.DefinePlugin(liveConfig);
  } else {
    return new webpack.DefinePlugin(devConfig);
  }
}