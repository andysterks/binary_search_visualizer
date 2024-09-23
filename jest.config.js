export default {
  testEnvironment: 'node',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx'],
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  extensionsToTreatAsEsm: ['.js', '.jsx'],
};