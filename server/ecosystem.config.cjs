module.exports = {
  apps: [
    {
      name: 'api-site',
      script: './dist/server.js', // ou o arquivo principal compilado
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      error_file: './logs/api-site-error.log',
      out_file: './logs/api-site-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G'
    }
  ]
};
