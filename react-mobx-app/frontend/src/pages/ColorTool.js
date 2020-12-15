import { observer } from 'mobx-react-lite';

import { ColorTool } from '../components/ColorTool';
import { useRootStore } from '../contexts/rootStoreContext';

const ColorToolPage = observer(function ColorToolPage() {

  const { colorToolStore: store } = useRootStore();

  return (
    <>
      <div>
        <h2>Color Tool</h2>
      </div>
      <ColorTool colors={store.colors.slice()}
        onAppendColor={store.appendColor}
        onRemoveColor={store.removeColor} />
    </>
  );
});

export default ColorToolPage;