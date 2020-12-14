import { makeAutoObservable } from 'mobx';

// observable store


export class CalcToolStore {

  // stateful data
  result = 0;

  constructor() {
    makeAutoObservable(this);
  }

  // stateful logic
  add(num) {
    this.result += num;
  }

  subtract(num) {
    this.result -= num;
  }
}