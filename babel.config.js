module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          components: './src/components',
          configs: './src/configs',
          elements: './src/elements',
          hooks: './src/hooks',
          navigation: './src/navigation',
          res: './src/res',
          screens: './src/screens',
          utils: './src/utils',
        },
      },
    ],
    [
      'react-native-reanimated/plugin',
    ],
  ],
};
