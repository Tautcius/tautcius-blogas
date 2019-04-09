module.exports = {
  env: {
    node: true,
    es6: true
  },
  plugins: ["gridsome"],
  rules: {
    "gridsome/format-query-block": "error"
  },
  parserOptions: {
    sourceType: "module"
  },
  parser: "vue-eslint-parser"
};
