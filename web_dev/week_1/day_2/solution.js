Array.prototype.myForEach = function (callback, thisArg) {
  if (thisArg === undefined) {
    thisArg = this;
  }
  for (let i = 0; i < thisArg.length; i++) {
    callback(thisArg[i], i, thisArg);
  }
}

function myForEach(callback, array) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i);
  }
}

Array.prototype.myMap = function (callback, thisArg) {
  if (thisArg === undefined) { thisArg = this; }
  let newArray = [];
  for (let i = 0; i < thisArg.length; i++) {
    newArray.push(callback(thisArg[i], i, thisArg));
  }
  return newArray;
}

function myMap(callback, array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i], i));
  }
  return newArray;
}

Array.prototype.myFilter = function (callback, thisArg) {
  if (thisArg === undefined) { thisArg = this; }
  let newArray = [];
  for (let i = 0; i < thisArg.length; i++) {
    if (callback(thisArg[i], i, thisArg)) {
      newArray.push(thisArg[i]);
    }
  }
  return newArray;
}

function myFilter(callback, array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i)) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

Array.prototype.mySome = function (callback, thisArg) {
  if (thisArg === undefined) { thisArg = this; }

  if (thisArg.length === 0) { return false; }

  for (let i = 0; i < thisArg.length; i++) {
    if (callback(thisArg[i], i, thisArg)) {
      return true;
    }
  }

  return false;
}

function mySome(callback, array) {
  if (array.length === 0) { return false; }

  for (let i = 0; i < array.length; i++) {
    if (callback(thisArg[i], i, thisArg)) {
      return true;
    }
  }

  return false;
}