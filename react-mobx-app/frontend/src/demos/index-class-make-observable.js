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

import {
  observable, autorun, makeAutoObservable,
  computed, action, runInAction,
  reaction, when,
} from 'mobx';

class Person {

  firstName = '';
  lastName = '';
  address = null;
  emails = [];

  constructor() {

    // makeObservable(this, {
    //   firstName: observable, // stateful data
    //   lastName: observable,
    //   address: observable.struct,
    //   emails: observable,
    //   fullName: computed, // derived stateful data
    //   updateFirstName: action, // stateful logic
    //   updateLastName: action,
    //   updateAddress: action,
    // });

    makeAutoObservable(this, {
      address: observable.struct
    });
  }

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }

  updateFirstName(firstName) {
    this.firstName = firstName;
  }

  updateLastName(lastName) {
    this.lastName = lastName;
  }

  updateAddress(street, city, state, zipCode) {
    this.address = {
      street, city, state, zipCode,
    };
  }
}

const person = new Person();

// autorun(() => {
//   console.log(person.firstName);
//   // console.log({ ...person.address });
// });

// autorun(() => {
//   console.log('updating emails');
//   // person.emails.forEach((email, index) => console.log((index + 1) + '. ' + email));
//   console.log([...person.emails]);
// });

// const disposer = reaction(() => person.firstName, (values) => {
//   console.log('change first name');
//   console.log(values);
// });

const disposer = when(() => person.firstName === 'Timmy', () => {
  console.log('change first name');
  console.log(person.firstName);
});

// person.firstName = 'Bob';
person.updateFirstName('Bob');

person.updateFirstName('Timmy');

disposer();

person.updateFirstName('Sally');


// person.lastName = 'Smith';
person.updateLastName('Smith');

person.updateAddress('123 Oak Lane', 'Wilmington', 'DE', '19810');
// person.updateAddress('123 Oak Lane', 'Wilmington', 'DE', '19810');
// person.updateAddress('123 Oak Lane', 'King of Prussia', 'PA', '90210');

runInAction(() => {
  console.log('add email');
  // person.firstName = 'Sally';
  person.emails.push('sally@sally-thompkins.sally');
});

runInAction(() => {
  console.log('add email');
  // person.firstName = 'Sally';
  person.emails.push('sally@sally-thompkins.thompkins');
});

// runInAction(() => {
//   console.log('add email');
//   person.firstName = 'Sally';
//   person.emails = [...person.emails, 'thomkins@sally.sally'];
// });




