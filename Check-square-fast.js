// 8th video
// Checking square in another array
// arr1= [1,2,3,4], arr2= [1,9,4,16]
// map1 = { 1: 1, 2: 2, 4: 1 };
// map2 = { 1: 1, 4: 2, 16: 1 };
// time complexity- O(n)

const isSquareCheck = (a, b) => {
  let map1 = {};
  let map2 = {};
  for (let key of a) map1[key] = map1[key] ? map1[key] + 1 : 1;
  for (let key of b) map2[key] = map2[key] ? map2[key] + 1 : 1;
  for (let key in map1) {
    if (!map2[key * key]) return false;
    if (map1[key] !== map2[key * key]) return false;
  }
  return true;
};

console.log(isSquareCheck([1, 2, 3, 4], [1, 9, 4, 16]));

// ---------------------------------------------------------------------------------------------------
