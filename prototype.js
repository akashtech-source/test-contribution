function Person(name, age) {

  this.name = name;
  this.age = age;
  
}

Person.prototype = {
    eat() {
        console.log("person is eating");
      },
      sleep() {
        console.log("person is sleep");
      },
}

const sakib = new Person('sakib', 35);
sakib.eat()
const tamim = new Person('tamim', 23);
