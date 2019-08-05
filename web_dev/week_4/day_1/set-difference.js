const set_difference = (arr1, arr2) => {
  const set1 = {};
  arr1.forEach(element => {
    set1[element] = true;
  });

  const set2 = {}
  arr2.forEach(element => {
    set2[element] = true
  });

  res = []
  arr1.forEach(element => {
    if (!(set1[element] && set2[element]) && (set1[element] || set2[element])) {
      res.push(element);
    }
  });

  arr2.forEach(element => {
    if (!(set1[element] && set2[element]) && (set1[element] || set2[element])) {
      res.push(element);
    }
  });

  return res;
}


module.exports = set_difference;