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

Array.prototype.myEvery = function (callback, thisArg) {
  if (thisArg === undefined) { thisArg = this; }

  if (thisArg.length === 0) { return true; }

  for (let i = 0; i < thisArg.length; i++) {
    if (!callback(thisArg[i], i, thisArg)) {
      return false;
    }
  }

  return true;
}

function myEvery(callback, array) {
  if (array.length === 0) { return true; }

  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i], i, array)) {
      return false;
    }
  }

  return true;
}

Array.prototype.myReduce = function (callback, initalValue) {
  if (this.length === 0) { throw TypeError; }
  let acc;
  let index = 0;

  if (initalValue === undefined) {
    acc = this[0];
    index++;
  } else {
    acc = initalValue;
  }

  for (; index < this.length; index++) {
    acc = callback(acc, this[index], index, this);
  }

  return acc;
}

function myReduce(array, callback, initalValue) {
  if (array.length === 0) { throw TypeError; }
  let acc;
  let index = 0;

  if (initalValue === undefined) {
    acc = array[0];
    index++;
  } else {
    acc = initalValue;
  }

  for (; index < array.length; index++) {
    acc = callback(acc, array[index], index, array);
  }

  return acc;
}

Array.prototype.myIncludes = function (valueToFind, fromIndex) {
  if (fromIndex === undefined) {
    fromIndex = 0;
  }
  if (fromIndex >= this.length) { return false; }

  return this.slice(fromIndex).mySome((x) => x === valueToFind);
}

function myIncludes(valueToFind, array, fromIndex) {
  if (fromIndex === undefined) {
    fromIndex = 0;
  }
  if (fromIndex >= array.length) { return false; }

  return array.slice(fromIndex).mySome((x) => x === valueToFind);
}

Array.prototype.myIndexOf = function (searchElement, fromIndex) {
  if (fromIndex === undefined) {
    fromIndex = 0;
  } else if (fromIndex >= this.length) {
    return -1;
  }

  for (; fromIndex < this.length; fromIndex++) {
    if (this[fromIndex] === searchElement) { return fromIndex; }
  }

  return -1;
}

function myIndexOf(searchElement, array, fromIndex) {
  if (fromIndex === undefined) {
    fromIndex = 0;
  } else if (fromIndex >= array.length) {
    return -1;
  }

  for (; fromIndex < array.length; fromIndex++) {
    if (array[fromIndex] === searchElement) { return fromIndex; }
  }

  return -1;
}

Array.prototype.myPush = function (...args) {
  for (let i = 0; i < args.length; i++) {
    this[this.length] = args[i];
  }
  return this.length;
}

function myPush(array, ...args) {
  for (let i = 0; i < args.length; i++) {
    array[array.length] = args[i];
  }
  return array.length;
}

Array.prototype.myLastIndexOf = function (searchElement, fromIndex) {
  if (fromIndex === undefined || fromIndex >= this.length) {
    fromIndex = this.length - 1;
  }

  if (fromIndex < 0) {
    fromIndex = this.length + fromIndex;
    if (fromIndex < 0) { return -1; }
  }

  for (; fromIndex >= 0; fromIndex--) {
    if (searchElement === this[fromIndex]) { return fromIndex; }
  }

  return -1;
}

function myLastIndexOf(searchElement, array, fromIndex) {
  if (fromIndex === undefined || fromIndex >= array.length) {
    fromIndex = array.length - 1;
  }

  if (fromIndex < 0) {
    fromIndex = array.length + fromIndex;
    if (fromIndex < 0) { return -1; }
  }

  for (; fromIndex >= 0; fromIndex--) {
    if (searchElement === array[fromIndex]) { return fromIndex; }
  }

  return -1;
}

Object.myKeys = function (obj) {
  let keys = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      keys.push(key);
    }
  }
  return keys;
}

function myKeys(obj) {
  let keys = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      keys.push(key);
    }
  }
  return keys;
}

Object.myValues = function (obj) {
  let values = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      values.push(obj[key]);
    }
  }
  return values;
}

function myValues(obj) {
  let values = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      values.push(obj[key]);
    }
  }
  return values;
}