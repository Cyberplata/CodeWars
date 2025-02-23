//var1 Array.from+map
function fizzbuzz(n) {
  return Array.from({length:n},(_,i)=> i+1)
     .map(el=>{
        if(el%3===0 && el%5===0) return 'FizzBuzz'
        if(el%3===0) return 'Fizz'
        if(el%5===0) return 'Buzz'
        return el
     })
}


//var2 for+push
function fizzbuzz(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('FizzBuzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(i);
    }
  }
  return result;
}


//var3 reduce
function fizzbuzz(n) {
  return Array.from({ length: n }, (_, i) => i + 1).reduce((acc, el) => {
    if (el % 3 === 0 && el % 5 === 0) acc.push('FizzBuzz');
    else if (el % 3 === 0) acc.push('Fizz');
    else if (el % 5 === 0) acc.push('Buzz');
    else acc.push(el);
    return acc;
  }, []);
}

const res1 = fizzbuzz(10);
console.log(res1); // [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz']