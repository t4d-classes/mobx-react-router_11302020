import { makeAutoObservable } from 'mobx';

export class CarToolStore {

  cars = [];
  editCarId = -1;

  constructor() {
    makeAutoObservable(this);
  }

  appendCar = (newCar) => {
    this.cars.push({
      ...newCar,
      id: Math.max(...this.cars.map(c => c.id), 0) + 1,
    });
    this.editCarId = -1;
  };

  replaceCar = (car) => {
    const carIndex = this.cars.findIndex(c => c.id === car.id);
    this.cars.splice(carIndex, 1, car);
    this.editCarId = -1;
  };

  removeCar = (carId) => {
    const carIndex = this.cars.findIndex(c => c.id === carId);
    this.cars.splice(carIndex, 1);
    this.editCarId = -1;
  };

  editCar = (carId) => {
    this.editCarId = carId;
  };

  cancelCar = () => {
    this.editCarId = -1;
  };
}