// 5th video
// Count largest sum of consecutive digits
// [1,1,2,8,2,3,4,4,8,5,6,7] -> total elements-10
// num = 4
// 26 -> sum output
// Time complexity O(n^2)

// Conditions
// num>array -> error message
// 10 - 4 + 1 => 7

const findLargest = (a, num) => {
  if (num > a) throw new Error("num cannot be greater than array");
  else {
    let max = 0;
    for (let i = 0; i < a.length - num + 1; i++) {
      let tmp = 0;
      for (let j = 0; j < num; j++) tmp += a[i + j];
      if (tmp > max) max = tmp;
    }
    return max;
  }
};

console.log(findLargest([1, 1, 2, 8, 2, 3, 4, 4, 8, 5, 6, 7], 4));

// ---------------------------------------------------------------------------------------------------
