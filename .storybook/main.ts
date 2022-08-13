import type { StorybookViteConfig } from '@storybook/builder-vite';
import { mergeConfig } from 'vite';

import crypto from 'crypto';
import path from 'path';
const crypto_orig_createHash = crypto.createHash;
crypto.createHash = algorithm => crypto_orig_createHash(algorithm == "md4" ? "sha256" : algorithm);

const config: StorybookViteConfig = {
  stories: [
    'src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite'
  },
  features: {
    babelModeV7: true,
    storyStoreV7: true
  },
  async viteFinal(defaultConfig, options) {
    const config = mergeConfig(defaultConfig, {
      resolve: {
        alias: {
          '~': path.resolve(__dirname, '../src')
        }
      },
      // root: '..'
    })

    console.log(config)
    return config
  },
};

export default config;
