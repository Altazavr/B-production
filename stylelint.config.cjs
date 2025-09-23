// stylelint.config.cjs
module.exports = {
    extends: ['stylelint-config-standard-scss'],
    rules: {
        'selector-class-pattern': null,
        'number-max-precision': [4, { severity: 'warning' }],
    },
};
