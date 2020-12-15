import { makeAutoObservable } from 'mobx';
import axios from 'axios';
import { omit } from 'lodash-es';

export class CarToolStore {

  cars = [];
  editCarId = -1;
  errorMessage = '';

  constructor() {
    makeAutoObservable(this);

    this.refreshCars = this.refreshCars.bind(this);
    this.appendCar = this.appendCar.bind(this);
    this.replaceCar = this.replaceCar.bind(this);
    this.removeCar = this.removeCar.bind(this);
  }

  *refreshCars() {
    const response = yield axios.get('/api/cars');
    this.cars = response.data.map(car => ({
      id: car.carId,
      make: car.make,
      model: car.model,
      year: car.year,
      color: car.color,
      price: car.price,
    }));
  }

  *appendCar(newCar) {
    try {
      yield axios.post('/api/cars', newCar);
      yield this.refreshCars();
      this.editCarId = -1;
      this.errorMessage = '';
    } catch (err) {
      console.log(err);
      this.errorMessage = 'The save failed.';
    }
  };

  *replaceCar(car) {
    yield axios.put(
      '/api/cars/' + encodeURIComponent(car.id),
      omit({ ...car, carId: car.id }, ['id']),
    );
    yield this.refreshCars();
    this.editCarId = -1;
  };

  *removeCar(carId) {
    yield axios.delete('/api/cars/' + encodeURIComponent(carId));
    yield this.refreshCars();
    this.editCarId = -1;
  };

  editCar = (carId) => {
    this.editCarId = carId;
  };

  cancelCar = () => {
    this.editCarId = -1;
  };
}