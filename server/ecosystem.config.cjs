module.exports = {
  apps: [
    {
      name: 'api-site',
      script: './dist/server.js', // ou o arquivo principal compilado
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      error_file: '/var/log/api-site-error.log',
      out_file: '/var/log/api-site-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G'
    }
  ]
};
