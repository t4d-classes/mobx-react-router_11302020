import { makeAutoObservable } from 'mobx';
import axios from 'axios';

export class ColorToolStore {

  colors = [];

  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;

    this.refreshColors = this.refreshColors.bind(this);
    this.appendColor = this.appendColor.bind(this);
    this.removeColor = this.removeColor.bind(this);
  }

  *refreshColors() {
    const response = yield axios.get('/api/colors');
    this.colors = response.data.map(color => ({
      id: color.colorId,
      name: color.colorName,
      hexcode: color.hexcode,
    }));
  }

  *appendColor(newColor) {

    yield axios.post('/api/colors', {
      colorName: newColor.name,
      hexcode: newColor.hexcode,
    });

    yield this.refreshColors();

  };

  *removeColor(colorId) {

    yield axios.delete('/api/colors/' + encodeURIComponent(colorId));
    yield this.refreshColors();

  };

}