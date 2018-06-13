import './App.css';
import {print} from './print';
if (process.env.NODE_ENV !== 'production') {
  console.log('生产模式!');
}

function component(){
  var ele=document.createElement('div');
  ele.innerHTML=['Hello','webpack','北京欢迎你'].join(' ');
  ele.classList.add('hello');


  var btn=document.createElement('button');
  btn.innerHTML='点击我看看';
  btn.classList.add('button');
  btn.onclick=print;
  ele.appendChild(btn);

  return ele;
}
document.body.appendChild(component());


