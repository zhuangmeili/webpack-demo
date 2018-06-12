/**
 * 入口文件
 *
 * */

function component(){
  var ele=document.createElement('div');
  ele.innerHTML=_.join('Hello','webpack', ' ');
  return ele;
}

document.body.appendChild(component());


