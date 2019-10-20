module.exports = {
  parser: "@typescript-eslint/parser",  // Specifies the ESLint parser
  extends: [
    "plugin:@typescript-eslint/recommended",  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint",  // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2018,  // Allows for the parsing of modern ECMAScript features
    sourceType: "module",  // Allows for the use of imports
    ecmaFeatures: {
      jsx: true,  // Allows for the parsing of JSX
    },
  },
  rules: {
    "indent": "off",
    "no-invalid-this": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "require-jsdoc": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "off"
  },
  settings: {
    react: {
      version: "detect",  // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
