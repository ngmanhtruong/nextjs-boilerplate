import type { Config } from 'jest'
import nextJest from 'next/jest'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load `next.config.js` and `.env` files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const config: Config = {
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@/public/(.*)$': '<rootDir>/public/$1',
    '^test.utils$': '<rootDir>/test.utils.tsx',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  // set up test only with .test.tsx or .test.ts file in any folders
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    './src/**/*.{js,jsx,ts,tsx}',
    '!./src/**/_*.{js,jsx,ts,tsx}',
    '!./src/**/*.stories.{js,jsx,ts,tsx}',
    '!./src/{libs,app,providers,utils}/**/*.{js,jsx,ts,tsx}',
    '!./src/middleware.ts',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/tests/'],
  testMatch: ['**/*.test.{ts,tsx}'],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)
