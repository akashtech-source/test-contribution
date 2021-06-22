// higher order functions
function hello() {
    return function() {
        console.log('hello world');
    }
};

hello()();

// example 1 without hof
// var numbers = [1, 2, 3];
// var result = [];

// for (let i = 0; i < numbers.length; i++) {
//     result.push(numbers[i] * 2);
 
// }
// console.log(result);

// example 1 with hof
