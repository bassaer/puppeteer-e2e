module.exports = {
  launch: {
    dumpio: true,
    headless: process.env.HEADLESS !== 'false',
  },
  server: {
    command: 'yarn dev',
    port: 3000,
    launchTimeout: 10000
  },
  product: 'chrome',
}
