import { observer } from 'mobx-react-lite';

import { CarForm } from '../components/CarForm';
import { useRootStore } from '../contexts/rootStoreContext';

export const CarFormContainer = observer(function CarFormContainer() {

  const { carToolStore: store } = useRootStore();

  return (
    <CarForm buttonText="Add Car" onSubmitCar={store.appendCar} />
  );
});
