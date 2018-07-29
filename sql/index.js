// 数据库 & 数据库配置
var mysql    = require('mysql')
var env      = require('../apis/env')
var database = mysql.createConnection(env.database)
// 表
const tables = {
  user:require('./user'),
  goods:require('./goods'),
  shop:require('./shop'),
  comment:require('./comment')
}
// 通用操作
var respFormat = require('../utils/format')
const tableCommon  = require('./common')

// 连接
database.connect()

module.exports = function (table,op,query) {
  if ( !tables[table] ) return respFormat(0,'数据库不存在')
  else if ( !tables[table][op]&&!tableCommon[op] ) return respFormat(0,'接口不存在')
  return tableCommon[op]?
    tableCommon[op](database,tables[table],query):
    tables[table][op](database,query);
}

