import { observer } from 'mobx-react-lite';

import { CarTool } from '../components/CarTool';

const CarToolPage = observer(function CarToolPage() {

  return (
    <>
      <div>
        <h2>Car Tool</h2>
      </div>
      <CarTool />
    </>
  );
});

export default CarToolPage;