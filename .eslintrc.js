module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'comma-dangle': 0,
    'react-native/no-inline-styles': 0
  },
  env: {
    jest: true
  },
  plugins: ['detox']
};
