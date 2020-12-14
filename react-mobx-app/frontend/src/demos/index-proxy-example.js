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

// Reveal how MobX works...

window.__app__ = {};
window.__app__.reactiveData = {};
window.__app__.currentContextFn = null;

const person = {
  firstName: 'Bob',
  lastName: 'Smith',
};

const reactiveDataHandler = {
  get(target, prop) {
    // console.log('called get ', prop);

    if (!window.__app__.reactiveData[prop]) {
      window.__app__.reactiveData[prop] = [];
    }

    if (window.__app__.currentContextFn) {
      window.__app__.reactiveData[prop].push(window.__app__.currentContextFn);
    }

    return target[prop];
  },
  set(target, prop, value) {
    // console.log('called set ', prop);

    target[prop] = value;

    if (window.__app__.reactiveData[prop]) {
      window.__app__.reactiveData[prop].forEach(fn => fn());
    }
  }
}

const autorun = (fn) => {
  window.__app__.currentContextFn = fn;
  fn();
  window.__app__.currentContextFn = null;
}

const personProxy = new Proxy(person, reactiveDataHandler);

autorun(function outputFirstName() {
  console.log('Output First Name: ' + personProxy.firstName);
});

let { firstName } = personProxy;

autorun(function outputFirstName() {
  console.log('Output 2 First Name: ' + firstName);
});

personProxy.firstName = 'Sally';
personProxy.firstName = 'Timmy';

// let { firstName } = personProxy;

// console.log(firstName);
// firstName = 'Joe'; // will not be picked up, need to access through the 
                   // firstName property of the proxy object