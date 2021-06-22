// implicit binding
// explicit binding 
// new Binding 
// window Binding 

// var printPlayerNameFunction = function(obj) {
//     obj.printPlayerName = function() {
//         console.log(this.name);
//     };
// };

// var sakib = {
//     name: 'sakib',
//     age: 35,
// };

// var tamim = {
//     name: 'tamim',
//     age: 36,
// };

// printPlayerNameFunction(sakib);
// printPlayerNameFunction(tamim);

// sakib.printPlayerName()

// var Person = function (name, age) {
//     return {
//         name: name,
//         age: age,
//         printName: function() {
//             console.log(this.name);
//         },
//         father: {
//             name: 'Mr X',
//             printName: function() {
//                 console.log(this.name);
//             }
//         }
//     }
// };

// var sakib = Person('Sakib', 35);
// var father = Person(this.nam, 55)
// sakib.printName()
// sakib.father.printName();

// var printName = function (v1, v2) {
//     console.log(`${this.name} is ${v1} and ${v2}`);
// };
// var sakib = {
//     name: 'Sakib',
//     age: 35,
    
// };
// var v1 = 'Handsome';
// var v2 = 'All-rounder';


// var newFunc = printName.bind(sakib, v1, v2 )
// newFunc()

// function Person(name, age) {
//     // let this = Object.create(null)
//     this.name = name;
//     this.age = age;
//     console.log(`${this.name} is ${this.age} years old`);
//     // return this;
// }

// var sakib = new Person('sakib', 35);

'use strict';
var PrintName = function() {
    console.log(this.name);
}

var sakib = {
    name: 'sakib'
};

PrintName()