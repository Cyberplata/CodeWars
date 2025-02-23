/*
var uniqueInOrder=function(iterable){
  const res = [];
  
  if(typeof iterable === 'string') {
    const newArr = iterable.split('');
    
    for(let i=0; i<newArr.length; i++) {
        
    } 
  } else {
    for(let i=0; i<iterable.length; i++) {
        
    } 
  }
}
*/

var uniqueInOrder = function(iterable) {
  const res = [];

  if (typeof iterable === 'string') {
    const newArr = iterable.split('');

    for (let i = 0; i < newArr.length; i++) {
      if (res.length === 0 || res[res.length - 1] !== newArr[i]) {
        res.push(newArr[i]);
      }
    }
  } else {
    for (let i = 0; i < iterable.length; i++) {
      if (res.length === 0 || res[res.length - 1] !== iterable[i]) {
        res.push(iterable[i]);
      }
    }
  }

  return res;
}

const res1 = uniqueInOrder('AAAABBBCCDAABBB')
const res2= uniqueInOrder('ABBCcAD')      
const res3 = uniqueInOrder([1,2,2,3,3])  

console.log(res1) //['A', 'B', 'C', 'D', 'A', 'B']
console.log(res2) //['A', 'B', 'C', 'c', 'A', 'D']
console.log(res3) //[1,2,3]


// var2 - reducer
var uniqueInOrder = function(iterable) {
  if (typeof iterable === 'string') {
    iterable = iterable.split('');
  }

  return iterable.reduce((acc, current) => {
    if (acc.length === 0 || acc[acc.length - 1] !== current) {
      acc.push(current);
    }
    return acc;
  }, []);
}

const res1 = uniqueInOrder('AAAABBBCCDAABBB');
const res2 = uniqueInOrder('ABBCcAD');
const res3 = uniqueInOrder([1, 2, 2, 3, 3]);

console.log(res1); // ['A', 'B', 'C', 'D', 'A', 'B']
console.log(res2); // ['A', 'B', 'C', 'c', 'A', 'D']
console.log(res3); // [1, 2, 3]
 
 
 // var3 - spread + filter
var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}