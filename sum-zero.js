// 1st video
// Checking sum 0
// [-5,-4,-3,-2,0,2,4,6,8] -> input
// [? ?] -> output
// Time complexity O(n^2)

let a=[-5,-4,-3,-2,0,2,4,6,8]

const sumSlow=(b)=>{
    for(let i of b)
        for(let j of b)
            if((i+j)===0) 
                return [i,j];
}
console.log(sumSlow(a));

// -----------------------------------------------------------------------------------------------------

// 2nd video
// Checking sum 0
// [-5,-4,-3,-2,0,2,4,6,8] -> input
// [? ?] -> output
// Time complexity O(n)


const sumFast=(b)=>{
    li=0;
    ri=b.length-1;
    while(li<ri)
        if((b[li]+b[ri])>0) ri--;
        else if((b[li]+b[ri])<0) li++;
        else return [b[li],b[ri]];
}
console.log(sumFast(a))