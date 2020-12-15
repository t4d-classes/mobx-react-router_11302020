import React from 'react';

import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = ({
  cars, editCarId,
  onAddCar: addCar,
  onSaveCar: saveCar,
  onDeleteCar: deleteCar,
  onEditCar: editCar,
  onCancelCar: cancelCar,
}) => {

  return (
    <>
      <CarTable cars={cars} editCarId={editCarId}
        onEditCar={editCar} onDeleteCar={deleteCar}
        onSaveCar={saveCar} onCancelCar={cancelCar} />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </>
  );

};