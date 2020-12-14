import { makeAutoObservable } from 'mobx';

// observable store


export class CalcToolStore {

  // stateful data
  result = 0;
  history = [];

  constructor() {
    makeAutoObservable(this);
  }

  // stateful logic
  // class arrow function
  // bound action
  add = (num) => {
    this.result += num;

    this.history.push({
      id: Math.max(...this.history.map(he => he.id), 0) + 1,
      opName: 'Add',
      opValue: num,
    });

  }

  subtract = (num) => {
    this.result -= num;

    this.history.push({
      id: Math.max(...this.history.map(he => he.id), 0) + 1,
      opName: 'Subtract',
      opValue: num,
    });

  }

  multiply = (num) => {
    this.result *= num;

    this.history.push({
      id: Math.max(...this.history.map(he => he.id), 0) + 1,
      opName: 'Multiply',
      opValue: num,
    });

  }

  divide = (num) => {
    this.result /= num;

    this.history.push({
      id: Math.max(...this.history.map(he => he.id), 0) + 1,
      opName: 'Divide',
      opValue: num,
    });

  }

  clear = () => {
    this.result = 0;
    this.history = [];
  }

  deleteHistoryEntry = (entryId) => {
    const entryIndex = this.history.findIndex(he => he.id === entryId);
    this.history.splice(entryIndex, 1);
  }

}