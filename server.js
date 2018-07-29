
let koa    = new (require('koa'))()
let router = new (require('koa-router'))()
let bodyParser = require('koa-bodyparser')
let format = require('./utils/format')
let host   = '0.0.0.0'
let port   = process.env.PORT
var cors = require('koa-cors');

let fs       = require('fs')
let homepage = fs.readFileSync('./index.html','utf-8')

// 首页
router.get('/', (ctx)=>{
  ctx.type = 'html'
  // ctx.body = homepage
  ctx.body = fs.readFileSync('./index.html','utf-8')
  // ctx.body = 'hello'+'<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>'
})

// 数据库相关接口
let sql    = require('./sql')
router.post('/sql/:table/:op', async(ctx)=>{
  let {table,op} = ctx.params
  // 设置跨域
  ctx.body = await sql(table,op,ctx.request.body);
})

koa.use(cors())
koa.use(bodyParser())
koa.use(router.routes())
   .use(router.allowedMethods())

koa.listen(port,host)
console.log(`server running in ${host}:${port}`);
