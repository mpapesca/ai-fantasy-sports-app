import { mergeConfig } from 'vite';
import { join } from 'path';

export default {
  stories: [join(process.cwd(), './src/**/*.stories.@(js|jsx|ts|tsx)')],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  core: {
    builder: 'storybook-builder-vite',
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@ui': join(process.cwd(), './src'),
        },
      },
    });
  },
};
