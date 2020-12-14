import { makeAutoObservable } from 'mobx';

// observable store


export class CalcToolStore {

  // stateful data
  result = 0;

  constructor() {
    makeAutoObservable(this);
  }

  // stateful logic
  // class arrow function
  // bound action
  add = (num) => {
    this.result += num;
  }

  subtract = (num) => {
    this.result -= num;
  }

  multiply = (num) => {
    this.result *= num;
  }

  divide = (num) => {
    this.result /= num;
  }

}