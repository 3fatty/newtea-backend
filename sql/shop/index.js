

var respFormat = require(process.cwd()+'/utils/format')
var name   = 'shop'
var fields = [
  { name:'id', type:'int,unsigned', required:false, primary:true  },
  { name:'name', type:'varchar,64', required:true },
  { name:'images', type:'text', required:true },
  { name:'agent', type:'text', required:false },
  { name:'goods', type:'text', required:false },
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
