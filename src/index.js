import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.css'

const numbers = [1,2,3,4]
const squared = numbers.map(function(num){
  return num * num
})

const names = ["alice","bob","charlie"]
const upperName = names.map((name)=>
  name[0].toUpperCase()+name.slice(1)
)

const colors = ["red","black","green"]
const colors_para = colors.map(color=> `<p> ${color} </p>`)

console.log(squared)
console.log(upperName)
console.log(colors_para)
ReactDOM.render(
  
    <App />
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
