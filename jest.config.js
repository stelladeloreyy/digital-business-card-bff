/** @type {import('jest').Config} */
const config = {
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: [
        "**/*.{js,ts}",
    ],
    coverageDirectory: "coverage",
    coveragePathIgnorePatterns: [
        "/node_modules/",
        "/vendor/",
        "/databases/",
        "/index.js",
        "/jest.config.js",
        "/coverage/"
    ],
    coverageProvider: "v8",
    testMatch: [
        "**/?(*.)+(spec|test).[tj]s"
    ],
    verbose: true,
};

module.exports = config;