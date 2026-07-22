const config = {
  paths: ['src/features/**/*.feature'],
  require: ['src/support/**/*.ts', 'src/stepDefinitions/**/*.ts'],
  requireModule: ['ts-node/register'],
  format: [
    'progress-bar',
    'html:reports/cucumber-report.html',
    'json:reports/cucumber-report.json',
    'allure-cucumberjs/reporter',
  ],
  formatOptions: {
    resultsDir: 'allure-results',
  },
};

module.exports = {
  default: config,
};
