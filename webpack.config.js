const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
  // ...existing webpack configuration...

  plugins: [
    // ...existing plugins...

    new WorkboxWebpackPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      exclude: [/\.map$/, /manifest\.json$/], // Exclude map and manifest files
    }),
  ],
};
