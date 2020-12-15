import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import { CarForm } from '../components/CarForm';
import { useRootStore } from '../contexts/rootStoreContext';

const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
`;

export const CarFormContainer = observer(function CarFormContainer() {

  const { carToolStore: store } = useRootStore();

  return (
    <>
      {store.errorMessage && <ErrorMessage>{store.errorMessage}</ErrorMessage>}
      < CarForm buttonText="Add Car" onSubmitCar={store.appendCar} />
    </>
  );
});
