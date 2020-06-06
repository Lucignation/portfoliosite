import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';

import './index.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

/** This is the code that toggles the brightness 
 * and darkness of the  whole Web Application **/

function clickedLight(){
  document.body.style.color = 'white';
  document.body.style.backgroundColor = 'black';
}

function clickedDark (){
  document.body.style.color = 'black';
  document.body.style.backgroundColor = 'white';
}

const night = document.querySelector('.dark');
  night.style.display = 'none';


const light = document.querySelector('.light');
light.addEventListener('click', function(){
  light.classList.toggle('.light');
  clickedLight();
  light.style.display = 'none';
  night.style.display = 'block';
});


night.addEventListener('click', function(){
  night.classList.toggle('.dark');
  clickedDark();
  night.style.display = 'none';
  light.style.display = 'block';
});

/*** This is the code for the toggling of the Hamburger Menu ***/


let slideMenu =  document.querySelector('.slideMenu');
let slideMenusec =  document.querySelector('.slideMenuTwo');
const checkbox =  document.querySelector('.checkbox');
const checkbox2 =  document.querySelector('.checkbox2');
const hamburgers = document.querySelector('.hamburgers');

slideMenu.style.display = 'none';
function moveIn(){
  slideMenu.style.display = 'block';
  hamburgers.style.opacity = '0.2';
}

function moveOut(){
  slideMenu.style.display = 'none';
  slideMenusec.style.display = 'block';
  hamburgers.style.opacity = '1';
}

checkbox2.addEventListener('click', function(){
  checkbox2.classList.toggle('.checkbox2');
  moveIn();
  checkbox2.style.display = 'none';
  checkbox.style.display = 'block';
});

checkbox.addEventListener('click', function(){
  checkbox.classList.toggle('.checkbox');
  moveOut();
  checkbox.style.display = 'none';
  checkbox2.style.display = 'block';
});








// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
