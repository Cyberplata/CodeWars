function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) return -1;
    
  const arr1Nums = a1.map(el=>el.length);
  const arr2Nums = a2.map(el=>el.length);
  
  const res1Max = Math.max(...arr1Nums);
  const res2Max = Math.max(...arr2Nums);
  
  const res1Min = Math.min(...arr1Nums);
  const res2Min = Math.min(...arr2Nums);
  
  const resultArr = [res1Max, res2Max, res1Min, res2Min];
  
  return Math.max(...resultArr) - Math.min(...resultArr)
}


const res1 = mxdiflg(
  ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"
  ],
  ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"
  ]) // 13
console.log(res1)

const res2 = mxdiflg(
  ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"
  ], [])
console.log(res2) // -1


//var2 избавляемся от лишних переменных
function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) return -1;
    
  const maxA1 = Math.max(...a1.map(el => el.length));
  const minA1 = Math.min(...a1.map(el => el.length));
  const maxA2 = Math.max(...a2.map(el => el.length));
  const minA2 = Math.min(...a2.map(el => el.length));
  
  return Math.max(Math.abs(maxA1 - minA2), Math.abs(maxA2 - minA1));
}


//var3 reduce
function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) return -1;

  // Находим максимальную и минимальную длину в a1
  const { max: maxA1, min: minA1 } = a1.reduce(
    (acc, str) => {
      const len = str.length;
      return {
        max: Math.max(acc.max, len),
        min: Math.min(acc.min, len),
      };
    },
    { max: -Infinity, min: Infinity }
  );

  // Находим максимальную и минимальную длину в a2
  const { max: maxA2, min: minA2 } = a2.reduce(
    (acc, str) => {
      const len = str.length;
      return {
        max: Math.max(acc.max, len),
        min: Math.min(acc.min, len),
      };
    },
    { max: -Infinity, min: Infinity }
  );

  return Math.max(Math.abs(maxA1 - minA2), Math.abs(maxA2 - minA1));
}


//var4 через вспомогательную функцию
function getMinMaxLengths(arr) {
  return arr.reduce(
    (acc, str) => {
      const len = str.length;
      return {
        max: Math.max(acc.max, len),
        min: Math.min(acc.min, len),
      };
    },
    { max: -Infinity, min: Infinity }
  );
}

function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) return -1;

  const { max: maxA1, min: minA1 } = getMinMaxLengths(a1);
  const { max: maxA2, min: minA2 } = getMinMaxLengths(a2);

  return Math.max(Math.abs(maxA1 - minA2), Math.abs(maxA2 - minA1));
}
