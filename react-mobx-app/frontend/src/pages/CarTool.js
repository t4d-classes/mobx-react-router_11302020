import { observer } from 'mobx-react-lite';

import { CarTool } from '../components/CarTool';

const CarToolPage = observer(function CarToolPage({ store }) {

  return (
    <>
      <div>
        <h2>Car Tool</h2>
      </div>
      <CarTool cars={store.cars.slice()} editCarId={store.editCarId}
        onAddCar={store.appendCar} onSaveCar={store.replaceCar}
        onDeleteCar={store.removeCar} onEditCar={store.editCar}
        onCancelCar={store.cancelCar} />
    </>
  );
});

export default CarToolPage;