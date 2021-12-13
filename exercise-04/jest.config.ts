/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
    moduleFileExtensions: ["ts", "js"],
    testMatch: ["**/__tests__/**/*.test.ts"],
    testEnvironment: "node",
    globals: {
        "ts-jest": {
            tsconfig: "tsconfig.json",
        },
    },
    transform: {
        "^.+\\.(ts)$": "ts-jest",
    },
};
