/**
 * 入口文件
 * */
function component(){
  var ele=document.createElement('div');
  ele.innerHTML=['Hello','webpack','北京欢迎你'].join(' ');

  return ele;
}
document.body.appendChild(component());


