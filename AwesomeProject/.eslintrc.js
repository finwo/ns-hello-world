module.exports = {
  root: true,
  extends: '@react-native',
  rules  : {
    indent           : ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    quotes           : ['error', 'single'],
    semi             : ['error', 'always'],
    'comma-dangle': [
      'error',
      {
        arrays   : 'always-multiline',
        objects  : 'always-multiline',
        imports  : 'always-multiline',
        exports  : 'always-multiline',
        functions: 'never',
      },
    ],
    'key-spacing': ['error', { align: 'colon' }],
  },
};
