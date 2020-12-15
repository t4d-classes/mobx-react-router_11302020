import { observer } from 'mobx-react-lite';

import { CarTool } from '../components/CarTool';
import { useRootStore } from '../contexts/rootStoreContext';

const CarToolPage = observer(function CarToolPage() {

  const { carToolStore: store } = useRootStore();

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