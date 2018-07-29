

var respFormat = require(process.cwd()+'/utils/format')
var name   = 'comment'
var fields = [
  { name:'id', type:'int,unsigned', required:false, primary:true  },
  { name:'user', type:'int,unsigned', required:true },
  { name:'goods', type:'int,unsigned', required:true },
  { name:'content', type:'text', required:true },
]



function add(data) {
  if ( !data ) return respFormat(0,'参数不能为空');
}
function del(data) {
  if ( !data ) return respFormat(0,'参数不能为空');
}
function list() {

}
function update(data) {
  if ( !data ) return respFormat(0,'参数不能为空');
}





// 导出
module.exports = {
  name, fields, add, del, list, update
}
