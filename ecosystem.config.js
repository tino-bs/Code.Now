module.exports = {
  apps: [
    {
      name: 'frontend',
      cwd: './frontend',
      script: './node_modules/.bin/ng',
      args: 'serve',
    },
    {
      name: 'backend',
      cwd: './backend',
      script: './node_modules/.bin/nest',
      args: 'start --watch',
    }
  ],
}
