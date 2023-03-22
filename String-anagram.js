// 3rd video
// String Anagram
//'hello'->'llheo'
// Time complexity O(n)

// condition
// 1. length check (for both strings)
// 2. each letter should occur equal number of times.

const ana=(a,b)=>{
    const counts={};
    if(a.length!==b.length) return false;                           //first condition- length check 
    for(let key of a)
    counts[key]=counts[key]?counts[key]+1:1;                        //count the number of occurrence of letters
    for(let key of b){
        if(!counts[key]) return false;                              //if letter isnt available return false
        else counts[key]--;                                         //reduce the number of occurrences
    }
    return true;
}
ana('pranay','anpayr')?console.log('anagram'):console.log('not anagram');

// -------------------------------------------------------------------------------------------------