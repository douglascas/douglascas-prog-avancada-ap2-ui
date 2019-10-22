const proxy = [
  {
    target: 'http://localhost:4200',
    secure: 'false',
    context: '/api',
    pathRewrite: { '^/api': '' }
  }
];

module.exports = proxy;