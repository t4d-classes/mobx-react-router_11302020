// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import { observable, configure, autorun } from 'mobx';

const person = observable({
  // observable state
  firstName: 'Bob',
  lastName: 'Smith',
  // action
  updateFirstName(firstName) {
    this.firstName = firstName;
  },
  // computed
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  },
});

// autorun will run the function once initially
autorun(function outputFullName() {
  console.log('Output: ', person.getFullName());
});

function outputFullName2() {
  console.log('Output 2: ', person.getFullName());
}

// outputFullName(); - not needed because the function is called by autorun

// person.firstName = 'Sally';
person.updateFirstName('Sally');

// console.dir(person);

