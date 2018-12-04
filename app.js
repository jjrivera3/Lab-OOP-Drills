// let person1 = {
//     name: 'Joseph',
//     sayHello: function(){
//         console.log(`hello my name is ${this.name}`);
//     }
// }

// let person2 = {
//     name: 'Hannah',
//     sayHello: function(){
//         console.log(`hello my name is ${this.name}`);
//     }
// }

// let person3 = {
//     name: 'Michael',
//     sayHello: function(){
//         console.log(`hello my name is ${this.name}`);
//     }
// }

// let person4 = {
//     name: 'Kelsey',
//     sayHello: function(){
//         console.log(`hello my name is ${this.name}`);
//     }
// }

// let person5 = {
//     name: 'Darius',
//     sayHello: function(){
//         console.log(`hello my name is ${this.name}`);
//     }
// }

// person1.sayHello();
// person2.sayHello();
// person3.sayHello();
// person4.sayHello();
// person5.sayHello(); 




// function Person(name, city, age) {
//     this.name = name;
//     this.city = city;
//     this.age = age;
// }  

// Person.prototype.sayHello = function() {
//     console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old, and I live in ${this.city}.`);
// } 

// class Person {
//      constructor(name, age, city) {
//          this.name = name;
//          this.age = age;
//          this.city = city;
//      }

//      sayHello() {
//          console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old, and I live in ${this.city}.`);
//      }

//  }

// let person1 = new Person('Joseph', 'San Jose', 25);
// let person2 = new Person('Hannah','Yardley', 23)
// let person3 = new Person('Maura','Long Beach', 55);

// person1.sayHello();
// person2.sayHello();
// person3.sayHello();

class Vehicle {
    constructor(manufacturer, numwheels){
        this.manufacturer = manufacturer;
        this.numWheels = numwheels;
        this.type = 'vehicle';
    }

    aboutVehicle(){
        console.log(`This ${vehicle} is a ${manufacturer} and it has ${numWheels} wheels`);
    }

}

class Truck extends Vehicle {
    constructor(manufacturer, numWheels, numDoors){
        super(manufacturer, numWheels);
        this.numDoors = numDoors;
        this.hasBed = true;
        this.type = 'truck';
    }

    aboutVehicle() {
        console.log(`This ${this.type} was made by ${this.manufacturer}. It has ${this.numDoors} doors, ${this.numWheels} wheels, and has a bed.`);
    }
}

class Sedan extends Vehicle {
    constructor(manufacturer, numwheels, numDoors, size, mpg){
        super(manufacturer, numwheels);
        this.numDoors = numDoors;
        this.size = size;
        this.mpg = mpg;
    }

    aboutVehicle() {
        console.log(`This ${this.size} ${this.type} was made by ${this.manufacturer}. It has ${this.numDoors} doors, ${this.numWheels} wheels, and gets ${this.mpg} mpg.`);
    }
}

class MotorCycle extends Vehicle {
    constructor(manufacturer, numWheels, numDoors){
        super(manufacturer, numWheels);
        this.numDoors = numDoors;
        this.handleBars = true;
        this.type = 'motorcycle';
    }

    aboutVehicle() {
        console.log(`This ${this.type} was made by ${this.manufacturer}. It has ${this.numDoors} doors, ${this.numWheels} wheels, and has handlebars instead of a steering wheel.`);
    }
}

vehicle1 = new Sedan('Honda', 4, 4, 'small', 29);
vehicle1.aboutVehicle();

vehicle2 = new Truck('Ford', 4, 4);
vehicle2.aboutVehicle();

vehicle3 = new MotorCycle('Yamaha', 2, 0);
vehicle3.aboutVehicle();
