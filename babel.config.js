module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'babel-plugin-styled-components',
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: false,
      },
    ],
    [
      'babel-plugin-module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          screens: './src/screens',
          navigation: './src/navigation',
          components: './src/components',
          layout: './src/layout',
          config: './src/config',
          utils: './src/utils',
          store: './src/store',
          context: './src/context',
        },
      },
    ],
  ],
};
