module.exports = {
    setupFiles             : ['<rootDir>/jest.setup.js', 'jest-canvas-mock'],
    testPathIgnorePatterns : [
        '<rootDir>/dist/',
        '<rootDir>/node_modules/',
        '<rootDir>/storybook-static/',
        '<rootDir>/storybook-static/',
        '<rootDir>/.storybook/',
    ],
    snapshotSerializers : ['enzyme-to-json/serializer'],
    testEnvironment     : 'jest-environment-jsdom-global',
    collectCoverageFrom : [
        '<rootDir>/src/**/*.{js,jsx}',
        '!<rootDir>/.storybook/',
        '!<rootDir>/storybook-static/',
        '!<rootDir>/dist/',
        '!<rootDir>/node_modules/',
    ],
};
