const _arrayFind = (items, valueItem, keyItem) => {
  if (items.length > 0) {
    const find = items.find((item) => item[keyItem] == valueItem);
    return find;
  }
};

// IF YOU PREFER RETURN VALUE OUTSIDE CONDITION STATEMENT
const _arrayFindIndex = (items, valueItem, keyItem) => {
  let findIndex;
  if (items.length > 0) {
    findIndex = items.findIndex((item) => item[keyItem] === valueItem);
  }

  return findIndex;
};
