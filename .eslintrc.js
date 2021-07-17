module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        node: true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-recommended",
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module",
    },
    "plugins": [
        "vue",
    ],
    "rules": {
        "no-unused-vars": ["warn", {
            vars: "all",
            args: "after-used",
            ignoreRestSiblings: false,
        }],
        "comma-dangle": ["error", {
            arrays: "always-multiline",
            objects: "always-multiline",
            imports: "never",
            exports: "ignore",
            functions: "never",
        }],
        indent: ["error", 4],
        eqeqeq: "error",
        "space-before-function-paren": ["error", "never"],
        semi: ["error", "never"],
        "object-property-newline": [
            "warn",
            {
                allowAllPropertiesOnSameLine: false,
            },
        ],
        "linebreak-style": [
            "error",
            "unix",
        ],
        "quotes": [
            "error",
            "double",
        ],
        "vue/no-unused-components": ["warn"],
        "vue/html-indent": ["warn", 4],
        "vue/no-v-html": "off",
    },
}
