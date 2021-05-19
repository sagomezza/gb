/* eslint-disable */
module.exports = {
  root: true,
  extends: ["@react-native-community", "airbnb-typescript", "prettier"],
  parserOptions: {
    project: ["./tsconfig.json"],
  },
  rules: {
    "@typescript-eslint/no-loop-func": "off",
    "@typescript-eslint/no-redeclare": "off",
    "@typescript-eslint/no-shadow": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "better-styled-components/sort-declarations-alphabetically": 2,
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "off",
    "no-use-before-define": "off",
    "react/jsx-sort-props": [
      "error",
      {
        callbacksLast: true,
        shorthandFirst: true,
        shorthandLast: false,
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],
    "react/require-default-props": "off",
    "sort-destructure-keys/sort-destructure-keys": 2,
    "typescript-sort-keys/interface": "error",
    "typescript-sort-keys/string-enum": "error",
  },
  plugins: [
    "better-styled-components",
    "sort-destructure-keys",
    "typescript-sort-keys",
  ],
  overrides: [
    {
      files: ["*.{ts,tsx}"],
    },
  ],
};
