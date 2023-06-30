import type { StorybookConfig } from '@storybook/nextjs';
const path = require('path');

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.css$/i,
      use: [
        {
          loader: 'postcss-loader',
          options: { implementation: require.resolve('postcss') },
        },
      ],
      include: path.resolve(__dirname, '../'),
    });
    config.resolve.alias['@/components'] = path.resolve(
      __dirname,
      '../src/components',
    );
    config.resolve.alias['@/utils'] = path.resolve(__dirname, '../src/utils');
    config.resolve.alias['@/hooks'] = path.resolve(__dirname, '../src/hooks');
    config.resolve.alias['@/store'] = path.resolve(__dirname, '../src/store');
    config.resolve.alias['@/public'] = path.resolve(__dirname, '../public');
    return config;
  },
};
export default config;
