// stylelint.config.cjs
module.exports = {
    extends: ['stylelint-config-standard-scss'],
    customSyntax: 'postcss-scss',
    rules: {
        'selector-class-pattern': null,
        'number-max-precision': [4, { severity: 'warning' }],
        indentation: null,
        'no-missing-end-of-source-newline': null,
    },
};
