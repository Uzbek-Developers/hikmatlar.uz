module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src',
  testRegex: '.*\\.spec\\.ts$',
  testEnvironment: 'node',
  // testMatch: ['<rootDir>/src/**/*spec.ts'],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  setupFilesAfterEnv: ['jest-extended/all']
  // jest: {
  //   setupFilesAfterEnv: ['jest-extended/all']
  // }
  // globals: {
  //   'ts-jest': {
  //     diagnostics: {
  //       ignoreCodes: ['TS151001']
  //     },
  //     tsconfig: '<rootDir>/tsconfig.app.json'
  //   }
  // }
};
