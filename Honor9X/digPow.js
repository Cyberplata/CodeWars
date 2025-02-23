function digPow(n, p){
  let sum = String(n).split('').map((el, index)=>Number(el)**(p+index)).reduce((acc,item)=>acc+item)
  return (sum%n) === 0 ? sum/n : -1
}


// var2
function digPow(n, p) {
  const digits = String(n).split('');
  const sum = digits.reduce((acc, el, index) => acc + el ** (p + index), 0);
  return sum % n === 0 ? sum / n : -1;
}
 

const res1 = digPow(89,1)
console.log(res1) // 1

const res2 = digPow(92,1)
console.log(res2) // -1

const res3 = digPow(46288,3)
console.log(res3) // 51