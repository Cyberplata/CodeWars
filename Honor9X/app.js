/*function stray(numbers) {
  let count = new Map();
  
  for (let num of numbers) {
    if (count.has(num)) {
      count.set(num, count.get(num) + 1);
    } else {
      count.set(num, 1);
    }
  }
  
  for (let [key, value] of count.entries()) {
    if (value === 1) {
      return key;
    }
  }
}

const res1 = stray([1, 1, 2]) //2
console.log(res1)
const res2 = stray([17, 17, 3, 17, 17, 17, 17]) //3
console.log(res2)
//const res3 = minMax([2334454, 5])
//console.log(res3) //[5, 2334454]
//const res4 = removeSmallest([2, 2, 1, 2, 1])
//console.log(res4) // [2, 2, 2, 1]
*/

/*
function getDivisorsCnt(n){
  let count = 0;
  for (let i=1; i<=n; i++) {
      if (n % i === 0) {
         count += 1; 
      }
  }
  return count;
}

const res1 = getDivisorsCnt(1)
console.log(res1) //1
const res2 = getDivisorsCnt(10)
console.log(res2) //4
const res3 = getDivisorsCnt(11)
console.log(res3) //2
const res4 = getDivisorsCnt(54)
console.log(res4) //8
*/

/*
function sortByLength (array) {
  function sorting(a,b) {
      if (a.length>b.length) return 1;
      if (a.length<b.length) return -1
  }
  
  return array.sort(sorting)
}

const res1 = sortByLength(["Beg", "Life", "I", "To"]) //["I", "To", "Beg", "Life"]
console.log(res1)
*/


/*function nbDig(n, d) {
  let count = 0;
  let listNumbers = new Map()
  let newArr = [...Array(n)].map((_,i)=>i+1)
  console.log(newArr)
  let newArrDigits = newArr.map(n=>n**2)
  console.log(newArrDigits)
  
  let result = newArrDigits.filter(el=>el===d).length
  //let result = newArrDigits.includes(n).length
  return result
  /*for (let amount of listNumbers.values()) {
     amount
  }*/
  /*
  for (let d of newArrDigits) {
      count++
  }
  return count*/
//}

/*
function nbDig(n, d) {
  let count = 0;
  
  for (let i = 0; i <= n; i++) {
    let square = i * i;
    let squareStr = square.toString();
    count += squareStr.split(d.toString()).length - 1;
  }
  
  return count;
}


const res1 = nbDig(10, 1) // 4
console.log(res1)*/


//var1
/*
function likes(names) {
    const like = "like this";
    const likes = "likes this";
    const newCount = [...names].splice(2).length
    console.log(newCount)
    
    if (!names.length) {
        return "no one likes this"
    } else if (names.length < 2) {
        return names.join("") + " " + likes;
    } else if (names.length < 3) {
       return names.join(" and ") + " " + like;
    } else if (names.length < 4) {
       return `${names[0]}, ${names[1]} and ${names[2]} ${like}`;
    } else {
        return `${names[0]}, ${names[1]} and ${newCount} ${like}`;
    }
}

const res1 = likes([]) 
console.log(res1)//"no one likes this"
const res2 = likes(["Peter"]) 
console.log(res2)// "Peter likes this"
const res3 = likes(["Jacob", "Alex"]) 
console.log(res3)// "Jacob and Alex like this"
const res4 = likes(["Max", "John", "Mark"]) 
console.log(res4)// "Max, John and Mark like this"
const res5 = likes(["Alex", "Jacob", "Mark", "Max"]) 
console.log(res5)// "Alex, Jacob and 2 others like this"*/

//var2 через тернарник и десктруктуризацию
/*
function likes(names) {
    const [first, second, third, ...rest] = names;
    const likeCount = rest.length + 1;

    return names.length === 0 ? "no one likes this"
         : names.length === 1 ? `${first} likes this`
         : names.length === 2 ? `${first} and ${second} like this`
         : names.length === 3 ? `${first}, ${second} and ${third} like this`
         : `${first}, ${second} and ${rest.length + 1} others like this`;
}

const res1 = likes([]) 
console.log(res1) // "no one likes this"
const res2 = likes(["Peter"]) 
console.log(res2) // "Peter likes this"
const res3 = likes(["Jacob", "Alex"]) 
console.log(res3) // "Jacob and Alex like this"
const res4 = likes(["Max", "John", "Mark"]) 
console.log(res4) // "Max, John and Mark like this"
const res5 = likes(["Alex", "Jacob", "Mark", "Max"]) 
console.log(res5) // "Alex, Jacob and 2 others like this"*/

/*
//var3 - destruc + switch case
function likes(names) {
    const [first, second, third, ...rest] = names;

    switch (names.length) {
        case 0:
            return "no one likes this";
        case 1:
            return `${first} likes this`;
        case 2:
            return `${first} and ${second} like this`;
        case 3:
            return `${first}, ${second} and ${third} like this`;
        default:
            return `${first}, ${second} and ${rest.length + 1} others like this`;
    }
}

const res1 = likes([]) 
console.log(res1) // "no one likes this"
const res2 = likes(["Peter"]) 
console.log(res2) // "Peter likes this"
const res3 = likes(["Jacob", "Alex"]) 
console.log(res3) // "Jacob and Alex like this"
const res4 = likes(["Max", "John", "Mark"]) 
console.log(res4) // "Max, John and Mark like this"
const res5 = likes(["Alex", "Jacob", "Mark", "Max"]) 
console.log(res5) // "Alex, Jacob and 2 others like this"*/

/*
function findOdd(A) {
  let count = 0;
  let dictionary = new Map();
  
  for (let key of A) {
    dictionary.set(key, count+1)
  }
  return dictionary
  //return A.find(el=>el%2!==0);
}*/
/*
function findOdd(A) {
    const countMap = {};

    // Шаг 1: Подсчёт вхождений каждого элемента
    for (let i = 0; i < A.length; i++) {
        const key = A[i];
        if (countMap[key] !== undefined) {
            countMap[key]++;
        } else {
            countMap[key] = 1;
        }
    }

    // Шаг 2: Поиск элемента с нечётным количеством вхождений
    for (const key in countMap) {
        if (countMap[key] % 2 !== 0) {
            return parseInt(key, 10); // Преобразуем ключ обратно в число перед возвратом
        }
    }

    return null; // Если нечётный элемент не найден
}

// Пример использования
const arr = [1, 2, 3, 2, 3, 1, 3];
console.log(findOdd(arr)); // Выведет 3, так как 3 встречается 3 раза

const res1 = findOdd([7])
console.log(res1) //7
const res2 = findOdd([0])
console.log(res2) //0
const res3 = findOdd([1,1,2])
console.log(res3) // 2
const res4 = findOdd([0,1,0,1,0])
console.log(res4) //0
const res5 = findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1])
console.log(res5) // 4*/

//var1
/*
function arrayDiff(a, b) {
  let resArr = [];
  
  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      resArr = [...resArr, a[i]];
    }
  }
  
  return resArr;
}

const res1 = arrayDiff([1, 2, 2, 2, 3], [2]); // Ожидаемый результат: [1, 3]
console.log(res1); 

const res2 = arrayDiff([1, 2, 3], [1, 2]); // Ожидаемый результат: [3]
console.log(res2); */

/*
//var2
function arrayDiff(a, b) {
  return a.filter(el => !b.includes(el));
}

const res1 = arrayDiff([1, 2, 2, 2, 3], [2]); // Ожидаемый результат: [1, 3]
console.log(res1); 

const res2 = arrayDiff([1, 2, 3], [1, 2]); // Ожидаемый результат: [3]
console.log(res2);*/

/*
function duplicateCount(text){
  const charMap = new Map();
  let count = 0;
  const chars = text.toLowerCase().split("");

  // Заполняем Map
  for (let char of chars) {
    if (charMap.has(char)) {
      console.log(`Символ: ${char}, текущее значение: ${charMap.get(char)}`);
      charMap.set(char, charMap.get(char) + 1);
      console.log(`Символ: ${char}, новое значение: ${charMap.get(char)}`);
    } else {
      charMap.set(char, 1);
      console.log(`Символ: ${char}, добавлен с начальным значением: ${charMap.get(char)}`);
    }
  }

  // Подсчитываем дубликаты
  for (let value of charMap.values()) {
    if (value > 1) {
      count++;
    }
  }

  console.log('charMap:', charMap);
  return count;
}

// Примеры использования
const res1 = duplicateCount("")
console.log(res1) // 0
const res2 = duplicateCount("abcde")
console.log(res2) // 0
const res3 = duplicateCount("aabBcde")
console.log('res3', res3) // 2
const res4 = duplicateCount("Indivisibility")
console.log(res4) // 1
const res5 = duplicateCount("Indivisibilities")
console.log(res5) // 2
*/

/*
function duplicateEncode(word){
  const charMap = new Map();
  let count = 0;
  const chars = word.toLowerCase().split("");
  let result = "";

  for (let char of chars) {
    if (charMap.has(char)) {
      charMap.set(char, charMap.get(char) + 1);
    } else {
      charMap.set(char, 1);
    }
  }

  for (let value of charMap.values()) {
    if (value > 1) {
      count++;
      result += ")";
    } else {
      result += "("
    }
  }

  return result;
}

//Примеры использования
const res1 = duplicateEncode("din")
console.log(res1) // "((("
const res2 = duplicateEncode("recede")
console.log(res2) // "()()()"
const res3 = duplicateEncode("Success")
console.log('res3', res3) // ")())())""
const res4 = duplicateEncode("(( @")
//console.log(res4) // "))(("*/

/*
function duplicateEncode(word){
  const charMap = new Map();
  const chars = word.toLowerCase().split("");
  let result = "";

  // Подсчёт вхождений каждого символа
  for (let char of chars) {
    if (charMap.has(char)) {
      charMap.set(char, charMap.get(char) + 1);
    } else {
      charMap.set(char, 1);
    }
  }

  // Создание новой строки на основе данных
  for (let char of chars) {
    if (charMap.get(char) > 1) {
      result += ")";
    } else {
      result += "(";
    }
  }

  return result;
}

// Примеры использования
const res1 = duplicateEncode("din");
console.log(res1); // "((("
const res2 = duplicateEncode("recede");
console.log(res2); // "()()()"
const res3 = duplicateEncode("Success");
console.log(res3); // ")())())"
const res4 = duplicateEncode("(( @");
console.log(res4); // "))(("
*/


/* 1 var
function isValidWalk(walk) {
  let count = {};
  for (let elem of walk) {
      if (count[elem] === undefined) {
          count[elem] = 1;
      } else {
          count[elem]++;
      }
  }
  for (let key in count) {
      if (walk.length === 10 && вот здесь нужно указать условие, при котором количество значений 'n' === 's' и 'w'==='e' я не понимаю как и определить конкретный клюя и его значение?) 
      return true;
      else false;
  }
}

const res1 = isValidWalk(['n','s','n','s','n','s','n','s','n','s'])
console.log(res1) //true
const res2 = isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e')])
console.log(res2) //false
const res3 = isValidWalk(['w'])
console.log(res3) //false
const res4 = isValidWalk(['n','n','n','s','n','s','n','s','n','s'])
console.log(res4) //false
*/

/*
// 2var
function isValidWalk(walk) {
  // Проверяем, что длина массива равна 10
  if (walk.length !== 10) {
    return false;
  }

  // Создаем объект для подсчета количества каждого направления
  let count = { n: 0, s: 0, w: 0, e: 0 };

  // Подсчитываем количество каждого направления
  for (let elem of walk) {
    count[elem]++;
  }

  // Проверяем, что количество шагов на север равно количеству шагов на юг
  // и количество шагов на запад равно количеству шагов на восток
  if (count.n === count.s && count.w === count.e) {
    return true;
  } else {
    return false;
  }
}

// Тесты
const res1 = isValidWalk(['n','s','n','s','n','s','n','s','n','s']);
console.log(res1); // true

const res2 = isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']);
console.log(res2); // false

const res3 = isValidWalk(['w']);
console.log(res3); // false

const res4 = isValidWalk(['n','n','n','s','n','s','n','s','n','s']);
console.log(res4); // false

// 3 var
function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false;
  }

  const count = walk.reduce((acc, dir) => {
    acc[dir]++;
    return acc;
  }, { n: 0, s: 0, w: 0, e: 0 });

  return count.n === count.s && count.w === count.e;
}*/
/*
// var 1
function alphabetPosition(text) {
    // Создаем объект, где ключи - буквы алфавита, а значения - их позиции
    const alphabet = {
        'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10,
        'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20,
        'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26
    };

    // Преобразуем текст в нижний регистр
    text = text.toLowerCase();

    // Используем метод map для создания нового массива с позициями букв или null для других символов
    const mapped = text.split('').map(char => alphabet[char] || null);

    // Фильтруем массив, чтобы оставить только числа
    const filtered = mapped.filter(item => item !== null);

    // Возвращаем результат в виде строки, разделяя элементы пробелами
    return filtered.join(' ');
}

// Пример использования
const input = "The sunset sets at twelve o' clock.";
const output = alphabetPosition(input);
console.log(output); // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
*/
/*
// var 2
function alphabetPosition(text) {
    // Создаем объект, где ключи - буквы алфавита, а значения - их позиции
    const alphabet = {
        'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10,
        'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20,
        'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26
    };

    // Преобразуем текст в нижний регистр
    text = text.toLowerCase();

    // Инициализируем массив для хранения результатов
    let result = [];

    // Проходим по каждому символу в тексте
    for (let char of text) {
        // Если символ есть в объекте alphabet, добавляем его позицию в результат
        if (alphabet[char]) {
            result.push(alphabet[char]);
        }
    }

    // Возвращаем результат в виде строки, разделяя элементы пробелами
    return result.join(' ');
}

// Пример использования
const input = "The sunset sets at twelve o' clock.";
const output = alphabetPosition(input);
console.log(output); // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
*/
/*
function calculateYears(principal, interest, tax, desired) {
    let count = 0;
    
    if (desired <= principal) return 0;
    while(principal < desired) {
      let newI = principal * interest;
      let newT = newI * tax;
      principal = newI + principal - newT;
      count++
    }
    return count
}

const res1 = calculateYears(1000, 0.05, 0.18, 1100) // 3
console.log(res1)*/

/*
// var1
function arithmetic(a, b, operator) {
   switch (operator) {
       case "add":
           return a + b;
        case "subtract":
            return a-b;
        case "multiply":
            return a*b;
        default:
            return a / b;
   }
}*/

/*
//var2
function arithmetic(a, b, operator) {
    const operations = {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
        multiply: (a, b) => a * b,
        divide: (a, b) => a / b
    };

    return operations[operator] ? operations[operator](a, b) : "Unsupported operator";
}

const res1 = arithmetic(5,2,"add");
console.log(res1) // 7
const res2 = arithmetic(5,2,"subtract");
console.log(res2) // 3
const res3 = arithmetic(5,2,"multiply");
console.log(res3) // 10
const res4 = arithmetic(5,2,"divide");
console.log(res4) // 2,5
*/
/*
function gimme (triplet) {
  const copyArr = [...triplet];
  const sortedArr = copyArr.sort((a,b) => a-b);
  const middleElement = sortedArr[1];
  const resultIndex = triplet.indexOf(middleElement)
  return resultIndex
}

const res1 = gimme([2, 3, 1]);
console.log(res1) //0
const res2 = gimme([5, 10, 14]); 
console.log(res2) //1
const res3 = gimme([-2, -3, -1]);
console.log(res3) //0
const res4 = gimme([-5, -10, -14]); 
console.log(res4) //1*/

//var1
/*
const sequenceSum = (begin, end, step) => {
  if (begin > end) return 0;
  if ((end - begin) % step !== 0) {
      // Найдем ближайшее значение end, которое является результатом целого числа шагов от begin
      end = end - ((end - begin) % step);
  }
  return begin + sequenceSum(begin + step, end, step);
};*/

/*
//var2
const sequenceSum = (begin, end, step) => {
  if (begin > end) return 0;

  // Проверяем, что end является результатом целого числа шагов от begin
  if ((end - begin) % step !== 0) {
    end = end - ((end - begin) % step);
  }

  let sum = 0;
  for (let i = begin; i <= end; i += step) {
    sum += i;
  }

  return sum;
};

const res1 = sequenceSum(2,2,2)
console.log(res1) // 2
const res2 = sequenceSum(2,6,2)
console.log(res2) //12
const res3 = sequenceSum(1,5,1)
console.log(res3) // 15
const res4 = sequenceSum(1,5,3)
console.log(res4) // 5*/

/*
function roundToNext5(n) {
  const remainderOfDiv = n % 5;
  let diffUpNextMult;

  if (remainderOfDiv === 0) {
    return n;
  } else if (n > 0) {
    diffUpNextMult = 5 - remainderOfDiv;
  } else {
    diffUpNextMult = -remainderOfDiv;
  }

  const result = n + diffUpNextMult;
  return result;
}

const res1 = roundToNext5(3);
console.log(res1) //5
const res2 = roundToNext5(12);
console.log(res2) //15
const res3 = roundToNext5(-2);
console.log(res3) //0
const res4 = roundToNext5(-5);
console.log(res4) //-5*/

/*
function divisors(integer) {
  const newArr = [];
  
  for (let i = 2; i < integer; i++) {
    if(integer % i === 0) {
        newArr.push(i);
    }
  }
  if (newArr.length === 0) {
    return integer + " is prime";
  }

  return newArr;
}

const res1 = divisors(12);
console.log(res1) // [2,3,4,6]
const res2 = divisors(25);
console.log(res2) // [5]
const res3 = divisors(13);
console.log(res3) // "13 is prime"*/


//function removeUrlAnchor(url){
  //return url.replace(/#.*/, "");
//}

//const res1 = removeUrlAnchor('www.codewars.com#about') // 'www.codewars.com'
//console.log(res1)

/*
var capitals = function (word) {
	const capitalLetters = word.match(/[A-Z]/g)
	let resultArr = [];
	
	for(let i=0; i<capitalLetters.length; i++) {
	    let index = word.indexOf(capitalLetters[i]);
        resultArr.push(index);
	}
	return resultArr
	
};

const res1 = capitals('CodEWaRs')
console.log(res1) //[0,3,4,6]*/
/*
function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}

function declareWinner(fighter1, fighter2, firstAttacker) {
  
  return "Write your code here";
}*/


/*
function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
}

function declareWinner(fighter1, fighter2, firstAttacker) {
    let attacker = firstAttacker === fighter1.name ? fighter1 : fighter2;
    let defender = firstAttacker === fighter1.name ? fighter2 : fighter1;

    while (attacker.health > 0 && defender.health > 0) {
        // Атакующий наносит урон защитнику
        defender.health -= attacker.damagePerAttack;

        // Проверка, умер ли защитник
        if (defender.health <= 0) {
            return attacker.name;
        }

        // Меняем роли атакующего и защитника
        let temp = attacker;
        attacker = defender;
        defender = temp;
    }

    return attacker.name; // Если цикл завершился, значит атакующий победил
}
*/
/*
function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
}

function declareWinner(fighter1, fighter2, firstAttacker) {
    let attacker = firstAttacker === fighter1.name ? fighter1 : fighter2;
    let defender = firstAttacker === fighter1.name ? fighter2 : fighter1;

    while (attacker.health > 0 && defender.health > 0) {
        // Атакующий наносит урон защитнику
        defender.health -= attacker.damagePerAttack;

        // Проверка, умер ли защитник
        if (defender.health <= 0) {
            return attacker.name;
        }

        // Меняем роли атакующего и защитника
        [attacker, defender] = [defender, attacker];
    }

    return attacker.name; // Если цикл завершился, значит атакующий победил
}


const res1 = declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew") // "Lew"
console.log(res1)
*/

/*
//var1
function reverseLetter(str) {
  const newArr = str.match(/[A-Za-z]/g)
  return newArr.reverse().join("")
}

const res1 = reverseLetter("krishan") // "nahsirk"
console.log(res1)
*/
/*
//var2
function reverseLetter(str) {
  const letters = str.split('').filter(char => /[A-Za-z]/.test(char));
  return letters.reverse().join('');
}

const res1 = reverseLetter("krishan"); // "nahsirk"
console.log(res1);
*/

/*
//var1
function smallEnough(a, limit) {
  return a.every(el => el <= limit);
}

const res1 = smallEnough([66, 101], 200); // true
console.log(res1);

const res2 = smallEnough([201, 101], 200); // false
console.log(res2);
*/

/*
//var2 полифил метода every()
// Callback-функция
const isBelowLimit = (el, limit) => el <= limit;

// Функция every
function every(arr, callback, limit) {
  // Проверяем, что callback является функцией
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }

  // Проходим по всем элементам массива
  for (let i = 0; i < arr.length; i++) {
    // Если элемент не удовлетворяет условию, возвращаем false
    if (!callback(arr[i], limit)) {
      return false;
    }
  }

  // Если все элементы удовлетворяют условию, возвращаем true
  return true;
}

// Пример использования
const res1 = every([66, 101], isBelowLimit, 200); // true
console.log(res1); // true

const res2 = every([201, 101], isBelowLimit, 200); // false
console.log(res2); // false
*/
/*
// var3 
function smallEnough(array, limit) {
  return array.filter((value) => value > limit).length === 0;
}

// var4
function smallEnough(a, limit) {
  return Math.max(...a) <= limit;
}
*/

// Summing a number's digits

/*//var1
function sumDigits(number) {
  const absoluteNumber = Math.abs(number);
  
  return Array.from(String(absoluteNumber))
    .map(n=>+n)
    .reduce((acc, item)=> acc + item, 0)
}

const res1 = sumDigits(10) // 1
const res2 = sumDigits(99) // 18
const res3 = sumDigits(-32) // 5

console.log(res1)
console.log(res2)
console.log(res3)
/*
//var2
function sumDigits(number) {
  return Math.abs(number)
    .toString()
    .split('')
    .reduce(function(a,b){return +a + +b}, 0);
}
*/
/*
// Fix string case
//var1
function solve(s){
  const newArr = s.split("");
  
  let countUpper = 0;
  let countLower = 0;
  
  for (let item of newArr) {
      
    const convtCharToLower = item.toLowerCase()
    
    const convtCharToUpper = item.toUpperCase()
    
    if (item === convtCharToLower) {
      countLower++
    }
    if (item === convtCharToUpper) {
      countUpper++
    }
  }
  return countUpper > countLower 
    ? s.toUpperCase() 
    : s.toLowerCase()
  return 
}

const res1 = solve("coDe") // "code"
const res2 = solve("CODe") // "CODE"
const res3 = solve("coDE") // "code"

console.log(res1)
console.log(res2)
console.log(res3)

/*
//var2
function solve(s){
    let lowerC = 0;
    let upperC = 0;
    for( let i = 0;i<s.length;i++){
      if( s[i] == s[i].toUpperCase()){
        upperC++;
      }
      else{
        lowerC++;
      }
    }
    return lowerC >= upperC ? s.toLowerCase() : s.toUpperCase()
}*/

/*
function factorial(n) {
  if (n < 0 || n > 12) throw new RangeError();
  if (n === 0) return 1;
  return n * factorial(n - 1);
}


const res1 = factorial(0); // 1
const res2 = factorial(1); // 1
const res3 = factorial(2); // 2
const res4 = factorial(3); // 6
const res5 = factorial(5); // 120
const res6 = factorial(13); // RangeError
console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4)
console.log(res5)
console.log(res6)*/


//Form The Minimum
function minValue(values){
  return Number(
    Array.from(new Set(values))
    .sort((a, b) => a - b)
    .join('')
  );
}

const res1 = minValue([1, 3, 1]) // 13
console.log(res1);