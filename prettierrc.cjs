/** @type { import("prettier").Options } */
module.exports = {
    endOfLine: "lf",
    printWidth: 120,
    tabWidth: 4,
    semi: true,
    singleQuote: false,
    trailingComma: "none",
    arrowParens: "always",
    overrides: [
        {
            files: ".prettierrc",
            options: {
                parser: "yaml",
                tabWidth: 2
            }
        },
        {
            files: ["*.html", "*.css", "*.less", "*.json", "*.jsonc", "*.yml"],
            options: {
                tabWidth: 2
            }
        },
        {
            files: "*.md",
            options: {
                proseWrap: "never",
                tabWidth: 2
            }
        }
    ]
};
