import { useState } from 'react';
import { observer } from 'mobx-react-lite';

// component reactions

export const CalcTool = observer(function CalcTool(props) {

  const [numInput, setNumInput] = useState(0);

  return (
    <>
      <div>
        Result: {props.store.result}
      </div>
      <form>
        <label>Num: <input type="number" value={numInput}
          onChange={(e) => setNumInput(Number(e.target.value))} /></label>
        <fieldset>
          <button type="button" onClick={() => props.store.add(numInput)}>
            +</button>
          <button type="button" onClick={() => props.store.subtract(numInput)}>
            -</button>
        </fieldset>
      </form>
    </>
  )

});