// The Lodash Project
// This projects seeks to use lodash methods in functions by accesing it from the lodash.js library

// To use it in your html project, you wil need the cdn link
{
  /* <head>
      <script src='https://cdn.jsdelivr.net/npm/lodash@4.17.20/lodash.min.js'></script>
      <!-- Make sure that you load lodash before the file that uses it. -->
      <script src='file-that-uses-lodash.js'></script>
    </head> */
}

const _ = {
  clamp(number, lower, upper) {
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },

  inRange(number, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    }
    if (start > end) {
      let temp = end;
      end = start;
      start = temp;
    }
    let isInRange = start <= number && number < end;
    return isInRange;
  },

  words(string) {
    let words = string.split(" ");
    return words;
  },
  pad(string, length) {
    if (length <= string.length) {
      return string;
    }
    let startPaddingLength = Math.floor((length - string.length) / 2);
    let endPaddingLength = length - string.length - startPaddingLength;
    let paddedString =
      " ".repeat(startPaddingLength) + string + " ".repeat(endPaddingLength);
    return paddedString;
  },

  has(object, key) {
    let hasValue = object[key];
    if (hasValue !== undefined) {
      return true;
    }
    return false;
  },

  invert(object) {
    let invertedObject = {};
    for (let key in object) {
      let originalValue = object[key];
      invertedObject[originalValue] = key;
    }
    return invertedObject;
  },

  findKey(object, predicate) {
    for (let key in object) {
      let value = object[key];
      let predicateReturnValue = predicate(value);
      if (predicateReturnValue === true) {
        return key;
      }
    }
    return undefined;
  },

  drop(array, n) {
    if (n === undefined) {
      n = 1;
    }
    let droppedArray = array.slice(n, array.length);
    return droppedArray;
  },

  dropWhile(array, predicate) {
    let callback = (element, index) => {
      return !predicate(element, index, array);
    };
    let dropNumber = array.findIndex(callback);
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },

  chunk(array, size = 1) {
    // if(size === undefined){}
    let arrayChunks = [];
    for (let i = 0; i < array.length; i += size) {
      let arrayChunk = array.slice(i, i + size);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  },
};

// Do not write or modify code below this line.
module.exports = _;
