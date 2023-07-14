export const compareArrays = (firstArray, secondArray) => {
  let areEqual = false;
  if (firstArray?.length === secondArray?.length) {
    for (let index = 0; index < firstArray.length; index++) {
      if (firstArray[index] !== secondArray[index]) {
        areEqual = true;
        break;
      }
    }
  }
  return areEqual;
};

export const compareArraysByField = (firstArray, secondArray, key) => {
  let areEqual = false;
  if (firstArray?.length === secondArray?.length) {
    areEqual = true;
    for (let index = 0; index < firstArray.length; index++) {
      if (firstArray[index][key] !== secondArray[index][key]) {
        areEqual = false;
        break;
      }
    }
  }
  return areEqual;
};
