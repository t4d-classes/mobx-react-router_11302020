import { observer } from 'mobx-react-lite';

import { ColorTool } from '../components/ColorTool';

const ColorToolPage = observer(function ColorToolPage({ store }) {

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