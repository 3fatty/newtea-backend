// 新增
function add(database,table,data) {
  let fields = table.fields
  let names  = []
  let err    = ''
  let temp
  if ( !fields );

  let values = fields.map((item)=>{
    if ( err ) return;
    names.push(item.name)
    temp = data[item.name]
    if ( !!temp ) {
      return item.type.indexOf('int')>=0||item.type.indexOf('float')>=0?
        temp: `"${temp}"`
    } else {
      console.log(item);
      if ( item.required ) err={state:0,err:'参数错误'}
      else return 'null'
    }
  })

  if (err) return err;

  console.log(`insert ${table.name} (${names.join(',')}) values (${values.join(',')})`)

  return new Promise(function(resolve,reject) {
    database.query(
      `insert ${table.name} (${names.join(',')}) values (${values.join(',')})`,
      function(err,res,fileds) {
        if (err) reject({state:0, err:err.toString()})
        else resolve({state:1})
    })
  });
}
// 删除
function del() {

}
// 查看
function list( database,table,data ) {
  return new Promise(function(resolve,reject) {
    database.query(`select * from ${table.name}`, function(err,res,fields) {
      if (err) reject({state:0, err:err.toString()})
      else resolve({state:1, data:res})
    })
  })
}
// 修改
function update() {

}


module.exports = {
  add,list
}
