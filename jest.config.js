module.exports = {
  // setupFilesAfterEnv: [
  //   '@testing-library/react/cleanup-after-each',
  //   '@testing-library/jest-dom/extend-expect'
  // ],
  testMatch: [
    '**/?(*.)test.ts?(x)'
  ],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
      diagnostics: false,
    },
  },
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testPathIgnorePatterns: ['node_modules'],
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "ts-jest"
 },
 moduleNameMapper: {
   "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
   "\\.(css|scss)$": "identity-obj-proxy"
 }
}