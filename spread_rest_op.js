function filterOutOdds() {
  var nums = [...arguments];
  return nums.filter(function (num) {
    return num % 2 === 0;
  });
}
console.log(filterOutOdds(1, 2, 3, 4, 5, 6, 7, 8));

function findMin() {
  if (arguments.length === 0) return false;
  var nums = [...arguments];
  return nums.reduce(function (acc, next) {
    return acc < next ? acc : next;
  });
}

console.log(findMin(1, 2, 3, 4, 5, 6, 7, 8));
function mergeObjects(object1, object2) {
  return { ...object1, ...object2 };
}

/** test mergeObjects({a:1, b:2}, {c:3, d:4}) */
console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }));

function doubleAndReturnArgs() {
  var args = [...arguments];
  return args.map(function (num) {
    return num * 2;
  });
}

console.log(doubleAndReturnArgs(1, 2, 3, 4));

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
  var randomIdx = Math.floor(Math.random() * items.length);
  return [...items.slice(0, randomIdx), ...items.slice(randomIdx + 1)];
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(removeRandom(arr));

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
  return [...array1, ...array2];
}

console.log(extend([1, 2, 3], [4, 5, 6]));

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
  obj[key] = val;
  return obj;
}

console.log(addKeyVal({ a: 1, b: 2 }, "c", 3));

/** Return a new object with a key removed. */

function removeKey(obj, key) {
  delete obj[key];
  return obj;
}

console.log(removeKey({ a: 1, b: 2 }, "b"));

/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

console.log(combine({ a: 1, b: 2 }, { c: 3, d: 4 }));
/** Return a new object with a modified key and value. */

function update(obj, key, val) {
  obj[key] = val;
  return obj;
}

console.log(update({ a: 1, b: 2 }, "b", 3));
