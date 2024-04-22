// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`
import '@testing-library/jest-dom'

import failOnConsole from 'jest-fail-on-console'

// Set the mock implementation of matchMedia
window.matchMedia = jest.fn().mockImplementation((query) => {
  return {
    matches: query.includes('max-width'),
    media: query,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  }
})

// Set the window object to the mock window

failOnConsole()
