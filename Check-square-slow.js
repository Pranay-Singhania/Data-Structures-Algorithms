// 7th video
// Checking square in another array
// arr1= [1,2,3,4], arr2= [1,9,4,16]
// time complexity o[n^2]

const isSquareCheckSlow = (a, b) => {
  for (let i = 0; i < a.length; i++) {
    let flag = false;
    for (let j = 0; j < b.length; j++) {
      if (a[i] * a[i] === b[j]) flag = true;
      if (j === b.length - 1) {
        if (!flag) {
          return false;
        }
      }
    }
  }
  return true;
};

console.log(isSquareCheckSlow([1, 2, 3, 4], [1, 9, 4, 16]));

// ---------------------------------------------------------------------------------------------------
