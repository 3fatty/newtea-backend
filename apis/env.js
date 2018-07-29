const envs = {
  development: {
    port:3030,
    baseURL : 'http://120.79.154.244:3030',
    database: {
      host     : 'localhost',
      // port     : 4030,
      // socketPath:'/tmp/mysql.sock',
      user     : 'root',
      password : '123',
      database : 'newtea'
    }
  },
  test: {
    port:3031,
    baseURL :'http://120.79.154.244:3031',
    database: {
      host     : 'localhost',
      user     : 'root',
      password : '123',
      database : 'newtea_test'
    }
  },
  production: {
    port:3032,
    baseURL : 'http://120.79.154.244:3030',
    database: {
      host     : 'localhost',
      user     : 'root',
      password : '123',
      database : 'newtea'
    }
  }
}

module.exports = envs[process.env.NODE_ENV];
