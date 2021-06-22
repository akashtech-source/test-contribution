class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log('Person is eating');
    };
    sleep() {
        console.log('Person is sleep');
    };
}

const sakib = new Person('Sakib', 31);
sakib.eat();