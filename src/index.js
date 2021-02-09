import _ from 'lodash';
import "./style.css"
import logo from './logo.jpg'
import printMe from './print.js'
import {cube} from './math.js'
function component() {
    const element = document.createElement('div')
    element.innerHTML = _.join(['hello', 'webpack']);
    element.classList.add('hello');

    const Mylogo = new Image();
    Mylogo.src = logo;
    element.appendChild(Mylogo);

    const btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console';
    btn.onclick = () => {
        printMe()
    }

    element.appendChild(btn);

    return element
}

document.body.appendChild(component())

console.log('5的平方是' + cube(5));