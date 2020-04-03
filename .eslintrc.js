module.exports = {
    root: true,
    extends: "@react-native-community",
    rules: {
        // Turn Prettier rules off
        "prettier/prettier": ["off"],

        // React Native rule overrides
        "react-native/no-inline-styles": "off",
        "react/no-did-mount-set-state": "off",

        // Other rules
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "valid-typeof": ["error", { "requireStringLiterals": true }],
        "no-redeclare": "error",
        "no-inline-styles": "off",
        "no-empty-function": ["error", { "allow": ["arrowFunctions"] }],
        "no-multi-spaces": "warn",
        "key-spacing": [
            "error",
            {
                "singleLine": {
                    "beforeColon": false,
                    "afterColon": true,
                    "mode": "strict"
                },
                "multiLine": {
                    "beforeColon": false,
                    "afterColon": true,
                    "mode": "strict"
                }
            }
        ],
        "keyword-spacing": [
            "error",
            {
                "overrides": {
                    "return": { "after": false },
                    "switch": { "after": false }
                }
            }
        ],
        "no-multiple-empty-lines": ["warn", { "max": 2, "maxEOF": 0 }],
        "no-trailing-spaces": ["warn", { "ignoreComments": true, "skipBlankLines": true }],
        "no-whitespace-before-property": "error",
        "nonblock-statement-body-position": ["error", "beside"],
        "object-curly-newline": [
            "error",
            {
                "ImportDeclaration": { "multiline": true, "minProperties": 3 },
                "ExportDeclaration": { "multiline": true, "minProperties": 3 }
            }
        ],
        "object-curly-spacing": [
            "error",
            "always",
            {
                "arraysInObjects": true,
                "objectsInObjects": true
            }
        ],
        "curly": ["warn", "multi-line"],
        "comma-spacing": ["error", { "before": false, "after": true }],
        "comma-dangle": ["warn", "never"],
        "require-await": "error",
        "dot-notation": "off",
        "brace-style": ["warn", "allman", { "allowSingleLine": true }],
        "arrow-parens": ["error", "always"],
        "arrow-spacing": "error",
        "no-return-assign:": "off",
        "arrow-body-style": ["error", "as-needed", { "requireReturnForObjectLiteral": true }],
        "implicit-arrow-linebreak": ["error", "beside"],
        "eol-last": "off",
        "quotes": "off"
    }
};
