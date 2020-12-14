import { CalcToolStore } from './stores/CalcToolStore';
import { CalcTool } from './components/CalcTool';
import { observer } from 'mobx-react-lite';

import './App.css';

const calcToolStore = new CalcToolStore();

const App = observer(function App() {
  return (
    <CalcTool result={calcToolStore.result}
      onAdd={calcToolStore.add}
      onSubtract={calcToolStore.subtract}
      onMultiply={calcToolStore.multiply}
      onDivide={calcToolStore.divide} />
  );
});

export default App;
