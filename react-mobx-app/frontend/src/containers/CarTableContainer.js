import { observer } from 'mobx-react-lite';

import { CarTable } from '../components/CarTable';
import { useRootStore } from '../contexts/rootStoreContext';

export const CarTableContainer = observer(function CarTableContainer() {

  const { carToolStore: store } = useRootStore();

  return (
    <CarTable cars={store.cars.slice()} editCarId={store.editCarId}
      onSaveCar={store.replaceCar}
      onDeleteCar={store.removeCar} onEditCar={store.editCar}
      onCancelCar={store.cancelCar} />
  );
});
