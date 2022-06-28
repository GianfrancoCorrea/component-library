const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    'storybook-dark-mode'
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.less$/,
      use: ['style-loader', 'css-loader','less-loader'],
      include: path.resolve(__dirname, '../'),
    });
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve('./'),
    ];
    // Return the altered config
    return config;
  },
};
