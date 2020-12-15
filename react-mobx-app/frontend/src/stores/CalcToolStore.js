import { makeAutoObservable } from 'mobx';

// observable store


export class CalcToolStore {

  // stateful data
  // result = 0;
  history = [];

  get result() {

    // let result = 0;

    // this.history.forEach(entry => {

    //   switch (entry.opName) {
    //     case 'Add':
    //       result += entry.opValue;
    //       break;
    //     case 'Subtract':
    //       result -= entry.opValue;
    //       break;
    //     case 'Multiply':
    //       result *= entry.opValue;
    //       break;
    //     case 'Divide':
    //       result /= entry.opValue;
    //       break;
    //     default:
    //       break;
    //   }
    // });

    // return result;

    return this.history.reduce((acc, cur) => {

      switch (cur.opName) {
        case 'Add':
          return acc + cur.opValue;
        case 'Subtract':
          return acc - cur.opValue;
        case 'Multiply':
          return acc * cur.opValue;
        case 'Divide':
          return acc / cur.opValue;
        default:
          return acc;
      }

    }, 0);
  }

  get counts() {

    const counts = {
      add: 0, subtract: 0, multiply: 0, divide: 0,
    };

    this.history.forEach(entry => {

      switch (entry.opName) {
        case 'Add':
          counts.add++;
          break;
        case 'Subtract':
          counts.subtract++;
          break;
        case 'Multiply':
          counts.multiply++;
          break;
        case 'Divide':
          counts.divide++;
          break;
        default:
          break;
      }
    });

    return counts;

  }

  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  // stateful logic
  // class arrow function
  // bound action
  add = (num) => {
    this.history.push({
      id: Math.max(...this.history.map(he => he.id), 0) + 1,
      opName: 'Add',
      opValue: num,
    });
  }

  subtract = (num) => {
    this.history.push({
      id: Math.max(...this.history.map(he => he.id), 0) + 1,
      opName: 'Subtract',
      opValue: num,
    });
  }

  multiply = (num) => {
    this.history.push({
      id: Math.max(...this.history.map(he => he.id), 0) + 1,
      opName: 'Multiply',
      opValue: num,
    });
  }

  divide = (num) => {
    this.history.push({
      id: Math.max(...this.history.map(he => he.id), 0) + 1,
      opName: 'Divide',
      opValue: num,
    });
  }

  clear = () => {
    this.history = [];
  }

  deleteHistoryEntry = (entryId) => {
    const entryIndex = this.history.findIndex(he => he.id === entryId);
    this.history.splice(entryIndex, 1);
  }

}