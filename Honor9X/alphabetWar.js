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
/*L
w - 4
p - 3
b - 2
s - 1
*/
 
 /*R
 m - 4
 q - 3
 d - 2
 z - 1
 */

//var0 через 2 объекта и for
function alphabetWar(fight){
   const alphabetLeft = {
       'w': 4,
       'p': 3,
       'b': 2,
       's': 1
   }
   const alphabetRight = {
       'm': 4,
       'q': 3,
       'd': 2,
       'z': 1
   }
   
  let countL = 0;
  let countR = 0;
  
  for (let i = 0; i < fight.length; i++) {
     const index = fight[i]
     if (alphabetLeft[index]) {
         countL+=alphabetLeft[index]
     }
     if (alphabetRight[index]) {
         countR+=alphabetRight[index]
     }
  }
  
  if (countL > countR) return "Left side wins!";
  if (countL < countR) return "Right side wins!";
  return "Let's fight again!";
}

const res1 = alphabetWar("z") // "Right side wins!"
const res2 = alphabetWar("zdqmwpbs") // "Let's fight again!"
const res3 = alphabetWar("zzzzs") // "Right side wins!"
const res4 = alphabetWar("wwwwww") // "Left side wins!"
console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4)

//var 1 - через 1 объект и for
function alphabetWar(fight) {
    const scores = {
        w: 4, p: 3, b: 2, s: 1, // Left side
        m: -4, q: -3, d: -2, z: -1 // Right side
    };

    // Подсчёт очков через reduce
    const result = fight.split('').reduce((total, char) => total + (scores[char] || 0), 0);

    // Возвращаем результат на основе подсчёта
    if (result > 0) return "Left side wins!";
    if (result < 0) return "Right side wins!";
    return "Let's fight again!";
}

//var2 RegExp
function alphabetWar(fight) {
    const alphabetLeft = /[wpbs]/g;
    const alphabetRight = /[mqdz]/g;

    // Считаем количество символов для каждой стороны и их "силу"
    const countL = (fight.match(alphabetLeft) || []).reduce((sum, char) => sum + { w: 4, p: 3, b: 2, s: 1 }[char], 0);
    const countR = (fight.match(alphabetRight) || []).reduce((sum, char) => sum + { m: 4, q: 3, d: 2, z: 1 }[char], 0);

    if (countL > countR) return "Left side wins!";
    if (countL < countR) return "Right side wins!";
    return "Let's fight again!";
}

//var3 - когда один объект с положительными и отрицательными числами
function alphabetWar(fight) {
    const scores = {
        w: 4, p: 3, b: 2, s: 1, // Left side
        m: -4, q: -3, d: -2, z: -1 // Right side
    };

    let total = 0;

    // Проходим строку обычным циклом
    for (let i = 0; i < fight.length; i++) {
        total += scores[fight[i]] || 0; // Если символ не в объекте, прибавляем 0
    }

    if (total > 0) return "Left side wins!";
    if (total < 0) return "Right side wins!";
    return "Let's fight again!";
}

// var4 функуиональный стиль через Map
function alphabetWar(fight) {
    const scores = new Map([
        ['w', 4], ['p', 3], ['b', 2], ['s', 1], // Left side
        ['m', -4], ['q', -3], ['d', -2], ['z', -1] // Right side
    ]);

    const result = fight.split('').reduce((total, char) => total + (scores.get(char) || 0), 0);

    if (result > 0) return "Left side wins!";
    if (result < 0) return "Right side wins!";
    return "Let's fight again!";
}
