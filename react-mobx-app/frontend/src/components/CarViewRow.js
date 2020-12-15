import React from 'react';
import PropTypes from 'prop-types';

export const CarViewRow = ({
  car,
  onEditCar: editCar,
  onDeleteCar: deleteCar,
}) => {

  return (
    <tr>
      <td>{car.id}</td>
      <td>{car.make}</td>
      <td>{car.model}</td>
      <td>{car.year}</td>
      <td>{car.color}</td>
      <td>{car.price}</td>
      <td>
        <button type="button" onClick={() => editCar(car.id)}>
          Edit
        </button>
        <button type="button" onClick={() => deleteCar(car.id)}>
          Delete
        </button>
      </td>
    </tr>
  );

};

CarViewRow.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onEditCar: PropTypes.func.isRequired,
  onDeleteCar: PropTypes.func.isRequired,
};