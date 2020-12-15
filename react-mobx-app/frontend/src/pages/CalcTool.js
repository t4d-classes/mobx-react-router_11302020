import { observer } from 'mobx-react-lite';

import { CalcTool } from '../components/CalcTool';
import { useRootStore } from '../contexts/rootStoreContext';

const CalcToolPage = observer(function CalcToolPage() {

  const { calcToolStore } = useRootStore();

  return (
    <div>
      <h2>Calc Tool</h2>
      <CalcTool result={calcToolStore.result}
        history={[...calcToolStore.history]}
        counts={calcToolStore.counts}
        onDeleteHistoryEntry={calcToolStore.deleteHistoryEntry}
        onClear={calcToolStore.clear}
        onAdd={calcToolStore.add}
        onSubtract={calcToolStore.subtract}
        onMultiply={calcToolStore.multiply}
        onDivide={calcToolStore.divide} />
    </div>
  );
});

export default CalcToolPage;