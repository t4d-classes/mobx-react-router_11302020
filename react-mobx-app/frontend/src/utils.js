

export const valueToNaN = (value) => {

  // checking for null or undefined
  // converts to string, then checks the length
  if (value == null || String(value).length === 0) {
    return NaN;
  } else {
    return Number(value);
  }

};

export const nanToValue = (value) => {

  if (value == null || isNaN(value)) {
    return '';
  } else {
    return String(value);
  }

}