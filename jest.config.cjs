module.exports = {
  preset: 'ts-jest/presets/default-esm', // Use ESM preset
  testEnvironment: 'node',
  moduleNameMapper: {
    // Handle .js extensions in imports
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transform: {
    // Transform TypeScript files using ts-jest's ESM transformer
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
  transformIgnorePatterns: [
    // Allow @modelcontextprotocol/sdk to be transformed
    "/node_modules/(?!@modelcontextprotocol/sdk/)",
    "\\.pnp\\.[^\\/]+$",
  ],
  extensionsToTreatAsEsm: ['.ts'], // Treat .ts files as ESM
  testMatch: [ // Only look for tests in the src/tests directory
    "**/src/tests/**/*.test.ts",
  ],
};
