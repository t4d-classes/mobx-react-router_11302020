import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { ColorForm } from './ColorForm';

export const ColorTool = ({
  colors,
  onRefreshColors: refreshColors,
  onAppendColor: appendColor,
  onRemoveColor: removeColor,
}) => {

  useEffect(() => {
    refreshColors();
  }, [refreshColors]);

  return (
    <>
      <ul>
        {colors.map(color =>
          <li key={color.id}>
            {color.name}
            <button type="button" onClick={() => removeColor(color.id)}>X</button>
          </li>)}
      </ul>
      <ColorForm buttonText="Add Color" onSubmitColor={appendColor} />
    </>
  );

};

ColorTool.defaultProps = {
  colors: [],
};

ColorTool.propTypes = {
  colors: PropTypes.array.isRequired,
};