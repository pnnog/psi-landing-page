module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/prop-types': 0,
    'indent': ['error', 2], // Definir tamanho do tab para 2 espaços
    'quotes': ['error', 'single'], // Usar aspas simples
    'semi': ['error', 'always'], // Sempre colocar ponto e vírgula
    'comma-spacing': ['error', { 'before': false, 'after': true }], // Espaço após vírgula
    'comma-style': ['error', 'last'], // Vírgula no final
    // Adicione outras regras comuns aqui
  },
};