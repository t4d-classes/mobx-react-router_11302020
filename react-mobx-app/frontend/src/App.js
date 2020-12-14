import { CalcToolStore } from './stores/CalcToolStore';
import { CalcTool } from './components/CalcTool';

import './App.css';

const calcToolStore = new CalcToolStore();

function App() {
  return (
    <CalcTool store={calcToolStore} />
  );
}

export default App;
