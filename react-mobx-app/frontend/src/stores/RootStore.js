import { CalcToolStore } from './CalcToolStore';
import { ColorToolStore } from './ColorToolStore';
import { CarToolStore } from './CarToolStore';

export class RootStore {

  constructor() {
    this.calcToolStore = new CalcToolStore(this);
    this.colorToolStore = new ColorToolStore(this);
    this.carToolStore = new CarToolStore(this);
  }

}