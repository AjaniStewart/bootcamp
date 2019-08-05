let diff = require('./set-difference');
let intersect = require('./set-intersection');

const set1 = ["dogs", "cats", "red", "bananas", "code", "movies"];
const set2 = ["blue", "horses", "dogs", "code", "rain"];

console.log(diff(set1,set2));
console.log(intersect(set1,set2));