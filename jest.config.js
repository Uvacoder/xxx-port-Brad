const config = {
    clearMocks: true,
    collectCoverage: true,
    setupFilesAfterEnv: ["<rootDir>/src/test-utils/setup"],
    moduleDirectories: ["<rootDir>/src", "node_modules"],
    moduleNameMapper: {
        "\\.(svg)$": "<rootDir>/src/test-utils/svg.js",
        "\\.(css)$": "identity-obj-proxy",
        "@reach/router": "<rootDir>/node_modules/@gatsbyjs/reach-router",
    },
    testPathIgnorePatterns: ["<rootDir>/plop"],
}

module.exports = config
