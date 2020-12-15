import { CalcToolStore } from './CalcToolStore';
import { ColorToolStore } from './ColorToolStore';

export class RootStore {

  constructor() {
    this.calcToolStore = new CalcToolStore(this);
    this.colorToolStore = new ColorToolStore(this);
  }

}