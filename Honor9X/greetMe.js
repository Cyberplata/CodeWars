// var1 
var greet = function(name) {
   const firstLetter = name[0].toUpperCase()
   const restOfLetter = name.slice(1).toLowerCase();
   const capitalized = firstLetter+restOfLetter
   return `Hello ${capitalized}!`
};

//var2 деструктуризация
const [first, ...rest] = [...name];
const capitalized = first.toUpperCase() + rest.join('').toLowerCase();

// var3 replace
const capitalized = name.replace(/^\w/, char => char.toUpperCase()).toLowerCase();
//var4
const capitalized = name.toLowerCase().replace(/^\w/, char => char.toUpperCase());

// var5 Метод с map() и join()
const capitalized = [...name].map((char, index) => index === 0 ? char.toUpperCase() : char.toLowerCase()).join('');

// var6 утилитная функция capitalize
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

const greet = (name) => `Hello ${capitalize(name)}!`;


const res1 = greet("riley")
const res2 = greet("JACK")
console.log(res1) // "Hello Riley!"
console.log(res2) // "Hello Jack!"