module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["./src"],
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  testMatch: ["src/**/*.ts?(x)", "**/?(*.)+(spec|test).ts?(x)"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
