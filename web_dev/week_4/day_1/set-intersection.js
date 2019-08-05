const set_intersection = (arr1,arr2) => {
  let l_arr = (arr1.length > arr2.length ? arr1 : arr2);
  let s_arr = (arr1.length < arr2.length ? arr1 : arr2);

  let set = {};
  l_arr.forEach(element => {
    set[element] = true;
  });

  res = []
  s_arr.forEach(element => {
    if (set[element]) {
      res.push(element);
    }
  });

  return res;
}

module.exports = set_intersection;