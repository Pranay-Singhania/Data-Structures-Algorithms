// 4th video
// Count unique numbers
// [1,1,2,2,3,4,4,5,6,7,8,8] -> input
// 8 -> output
// Time complexity O(n^2)

// const printUniqueElements=(a)=>{
//     let count={}
//     for(let key of a) count[key]=count[key]? count[key]+1:1;
//     for(let i in count) console.log(i);
// }

const printUniqueElements = (a) => {
  if (a.length > 0) {
    let i = 0;
    for (j = 1; j < a.length; j++)
      if (a[i] !== a[j]) {
        i++;
        a[i] = a[j];
      }
    return i + 1;
  } else {
    console.log("array is empty");
  }
};

console.log(printUniqueElements([1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8]));

// ---------------------------------------------------------------------------------------------------
