import { makeAutoObservable } from 'mobx';

export class ColorToolStore {

  colors = [];

  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  appendColor = (newColor) => {

    this.colors.push({
      ...newColor,
      id: Math.max(...this.colors.map(c => c.id), 0) + 1,
    });

  };

  removeColor = (colorId) => {

    const colorIndex = this.colors.findIndex(c => c.id === colorId);
    this.colors.splice(colorIndex, 1);

  };

}