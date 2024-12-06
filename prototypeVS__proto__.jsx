// // 1
// console.log( ({}).prototype === ({}).__proto__ ) // false
//
// // 2
// function ITKamasutra() {}
// console.log(ITKamasutra.prototype === ITKamasutra.__proto__) // false
//
// // 3 4
// function ITIncubator() {}
// function ITKamasutra() {}
// console.log(ITIncubator.__proto__ === ITKamasutra.__proto__) // true
// console.log(ITKamasutra.prototype === ITKamasutra.prototype) // false
//
// // 5
// let Component = (props) => {
//     return `<div> I don't know Prototype</div>`
// }
// console.log(Component.prototype === Object.prototype) // false
//
// // 6 7
// let age = 18
// console.log(age.prototype === Number.prototype) // false
// console.log(age.___proto === Number.__proto__) // true
//
// // 8
// class Hacker {}
// console.log(Hacker.__proto__ === Function.prototype) // true
//
// // 9
// function ITIncubator() {}
// console.log(ITIncubator.__proto__ === Function.prototype) // Function.prototype
//
// // 10
// const count = 12
// console.log(count.__proto__ === Number.prototype) // Number.prototype
// //1 false
// //2 false
// //3 true
// //4 false
// //5 false
// //6 false
// //7 true
// //8 true
// //9 Function.prototype
// //10 Number.prototype
//
// //=======================================================================
//
// let dimych = {name: 'Dimych'} // new Object
// console.log(dimych.prototype) // net, так как прототип есть только у Function и Class
// console.log(dimych.__proto__) // yes -> dimych.__proto__ === Object.prototype
//
// let numbers = [1,2,3,34]
// console.log(numbers.prototype) // net
// console.log(numbers.__proto__) // yes -> numbers.__proto__ === Array.prototype
//
// class Samurai {
//     constructor(name) {
//         this.name = name
//     }
//     hello() {
//         alert(this.name)
//     }
// }
// console.log(Samurai.prototype) // yes
// console.log(Samurai.__proto__) // yes
// console.log(Samurai.__proto__ === Function.prototype) //true
//
// let shogun = new Samurai("Dimych")
// console.log(shogun.prototype) // нет, так как прототип есть только у Function и Class
// console.log(shogun.__proto__) // yes -> shogun.__proto__ === Samurai.prototype
//
//
// class Samurai2 {
//     constructor(name) {
//         this.name = name
//     }
//     hello() {
//         alert(this.name)
//     }
// }
// console.log(Samurai2.prototype) // yes
// console.log(Samurai2.__proto__) // yes
// console.log(Samurai2.__proto__ === Function.prototype) //true
//
// let shogun = new Samurai2("Dimych")
// let shogun2 = new Samurai2("Viktor")
// console.log(shogun.__proto__ === shogun2.__proto__) // yes
//
//
// const Component = (props) => {return "asda"}
// console.log(Component.prototype) // net, так как прототип есть только у функций объявленных через function
// console.log(Component.__proto__) // есть
// console.log(Component.__proto__ === Function.prototype) // true
//
//
// //=================================================================================
// function Samurai3(name) {
//     this.name = name;
// }
//
// Samurai3.prototype.hello = function() {
//     alert(this.name)
// }
//
// let shogun3 = new Samurai3("Dimych")
// shogun3.hello() // shogun3.__proto__ => Samurai3.prototype, и там находит hello
//
// let shogun4 = new Samurai3("Viktor")
// shogun4.hello() // shogun4.__proto__ => Samurai3.prototype, и там находит hello


//========================================ДЗ=========================================
class Samurai {
    constructor(name) {
        this.name = name
    }
    hello() {alert(this.name)}
}

let shogun = new Samurai("Dimych")
console.log(shogun.__proto__.__proto__.__proto__ === ???) // Samurai.prototype
console.log(shogun.__proto__.constructor.__proto__ === ???) // Samurai.prototype
console.log(shogun.__proto__.__proto__.__proto__.__proto__ === ???) // Samurai.prototype

// Давайте разбираться с этой задачей шаг за шагом. Она связана с цепочкой прототипов в JavaScript.
//
// 1. **`shogun.__proto__.__proto__.__proto__ === ???`**
//
//    - `shogun` — это объект, созданный через класс `Samurai`.
//    - `shogun.__proto__` указывает на `Samurai.prototype` — прототип всех объектов, созданных через этот класс.
//    - `shogun.__proto__.__proto__` — это `Object.prototype`, потому что `Samurai.prototype` сам является объектом.
//    - `shogun.__proto__.__proto__.__proto__` — это `null`, так как `Object.prototype` является "вершиной" цепочки прототипов. У него нет прототипа.
//
//    Ответ: **`null`**.
//
// 2. **`shogun.__proto__.constructor.__proto__ === ???`**
//
//    - `shogun.__proto__` — это `Samurai.prototype`.
//    - `shogun.__proto__.constructor` — это `Samurai` (ссылка на сам конструктор класса).
//    - `shogun.__proto__.constructor.__proto__` — это `Function.prototype`, так как `Samurai` является функцией-конструктором (а все функции в JavaScript наследуют от `Function.prototype`).
//
//    Ответ: **`Function.prototype`**.
//
// 3. **`shogun.__proto__.__proto__.__proto__.__proto__ === ???`**
//
//    - Мы уже знаем, что `shogun.__proto__.__proto__.__proto__` — это `null`.
//    - Поскольку `null` не имеет прототипов, попытка обратиться к `null.__proto__` вернёт `undefined`.
//
//    Ответ: **`undefined`**.
//
// ### Итоговые ответы:
// 1. `shogun.__proto__.__proto__.__proto__ === null`
// 2. `shogun.__proto__.constructor.__proto__ === Function.prototype`
// 3. `shogun.__proto__.__proto__.__proto__.__proto__ === undefined`




