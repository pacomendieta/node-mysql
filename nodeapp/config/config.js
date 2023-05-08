import fs from 'fs'
 
export default {
  development: {
    username: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DATABASE,
    host: process.env.DBHOST,
    dialect: "mysql"
  },
  test: {
    username: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DATABASE,
    host: process.env.DBHOST,
    dialect: "mysql"
  },
  production: {
    username: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DATABASE,
    host: process.env.DBHOST,
    dialect: "mysql",
    dialectOptions: {
      bigNumberStrings: true,
     // ssl: {
     //   ca: fs.readFileSync(__dirname + '/mysql-ca-main.crt')
     // }
    }
  }
}
