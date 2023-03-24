// 6th video
// Divide & Conquerer Technique
// Find the index of given no. in a sorted array
// [1,1,2,2,3,4,4,5,6,7,8,8] -> index 6 -> output= 9

const binarySearch = (a, n) => {
  let left = 0;
  let right = a.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (n > a[mid]) left = mid + 1;
    else if (n < a[mid]) right = mid - 1;
    else return mid + 1;
  }
  return -1;
};

console.log(binarySearch([1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8, 9], 9));

// ---------------------------------------------------------------------------------------------------
