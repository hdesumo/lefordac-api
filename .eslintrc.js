export default {
  env: {
    node: true,    // ✅ indique que process, __dirname etc. existent
    es2021: true,
  },
  extends: ["standard"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    // Règles personnalisées (exemple pour éviter no-unused-vars sur err)
    "no-unused-vars": ["error", { "argsIgnorePattern": "err" }]
  },
};

