import { useState } from 'react';

export function CalcTool(props) {

  const [numInput, setNumInput] = useState(0);

  const clear = () => {
    setNumInput(0);
    props.onClear();
  };

  return (
    <>
      <div>
        Result: {props.result}
      </div>
      <form>
        <label>Num: <input type="number" value={numInput}
          onChange={(e) => setNumInput(Number(e.target.value))} /></label>
        <fieldset>
          <button type="button" onClick={() => props.onAdd(numInput)}>
            +</button>
          <button type="button" onClick={() => props.onSubtract(numInput)}>
            -</button>
          <button type="button" onClick={() => props.onMultiply(numInput)}>
            *</button>
          <button type="button" onClick={() => props.onDivide(numInput)}>
            /</button>
          <button type="button" onClick={clear}>
            Clear</button>
        </fieldset>
      </form>
      <ul>
        {props.history.map(entry => <li key={entry.id}>
          {entry.opName} {entry.opValue}
          <button onClick={() => props.onDeleteHistoryEntry(entry.id)}>X</button>
        </li>)}
      </ul>
    </>
  )

};