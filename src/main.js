import './App.css';
function component(){
  var ele=document.createElement('div');
  ele.innerHTML=['Hello','webpack','北京欢迎你'].join(' ');
  ele.classList.add('hello');

  return ele;
}
document.body.appendChild(component());


