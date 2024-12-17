export default {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  moduleFileExtensions: ["js", "jsx"],
  moduleNameMapper: {
    "\\.(css)$": "identity-obj-proxy",
  },
};
