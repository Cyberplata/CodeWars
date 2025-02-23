function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  const current = new Date(currentDate);
  const expiration = new Date(expirationDate);
  
  
  return enteredCode === correctCode && current <= expiration;
}

const res1 = checkCoupon('123','123','September 5, 2014','October 1, 2014') // true
const res2 = checkCoupon('123a','123','September 5, 2014','October 1, 2014') // false

console.log(res1)
console.log(res2)