//var 1
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    
  const arr = [age1,age2,age3,age4,age5,age6,age7,age8]
  
  return Math.floor(Math.sqrt(arr
     .map(a=>a*a)
     .reduce((acc,item)=>acc+item,0)
  ) / 2)
}

//var2
const predictAge = (...ages) => Math.hypot(...ages) / 2 | 0;

const res = predictAge(65,60,75,55,60,63,64,45)
console.log(res) // 86