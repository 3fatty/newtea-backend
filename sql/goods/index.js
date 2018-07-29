


var respFormat = require(process.cwd()+'/utils/format')
var name   = 'goods'
var fields = [
  { name:'id', type:'int,unsigned', required:false, primary:true  },
  { name:'shop', type:'int,unsigned', required:false },
  { name:'name', type:'varchar,32', required:false },
  { name:'price', type:'float', required:false },
  { name:'images', type:'text', required:false },
  { name:'invite', type:'int,unsigned', required:false },
  { name:'description', type:'text', required:false },
  { name:'comments', type:'text', required:false },
]


function add(data) {
  if ( !data ) return respFormat(0,'参数不能为空');
}
function del(data) {
  if ( !data ) return respFormat(0,'参数不能为空');
}
function list(data) {

}
function update(data) {
  if ( !data ) return respFormat(0,'参数不能为空');
}





// 导出
module.exports = {
  name, fields, add, del, list, update
}
