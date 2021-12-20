/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
    moduleFileExtensions: ["js"],
    testMatch: ["**/__tests__/**/*.test.js"],
    testEnvironment: "node",
    transform: {
        "^.+\\.(js)$": "babel-jest"
    }
};
