
var respFormat = require(process.cwd()+'/utils/format')
var name   = 'user'
var fields = [
  { name:'id', type:'int,unsigned', required:false, primary:true  },
  { name:'mobile', type:'varchar,32', required:true },
  { name:'psw', type:'varchar,128', required:false },
  { name:'type', type:'tinyint,3,unsigned', required:true },
  { name:'vip', type:'date', required:false },
  { name:'platform', type:'tinyint,3,unsigned', required:true },
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






/*
$.ajax({
    type:"post",
    url:"/sql/user/add",
    data:{"mobile":"13131313132","type":22,platform:'1',psw:'123123'},
    dataType:"json",
    success: function(data){
        console.log(data);
    }
});

$.ajax({
    type:"post",
    url:"/sql/user/list",
    data:{"mobile":"13131313132","type":22,platform:'1',psw:'123123'},
    dataType:"json",
    success: function(data){
        console.log(data);
    }
});
*/
