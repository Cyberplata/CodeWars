function betterThanAverage(classPoints, yourPoints) {
   let sum = 0;
   let mean;

   for (let i = 0; i < classPoints.length; i++) {
      sum += classPoints[i];
      console.log('sum ' , sum)
   }
   mean = sum / classPoints.length;
   console.log('mean ' , mean);
   
   return mean < yourPoints;
}

// function betterThanAverage (classPoints, yourPoints) {
//    return yourPoints > classPoints.reduce((acc, curv) => (acc + curv), 0) / classPoints.length
// }

console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9)); 