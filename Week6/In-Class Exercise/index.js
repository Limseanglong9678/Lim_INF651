//Exercixe 1

const car = {
    doors: 2,
    color: "red",
    engine: "electric",
    models: ["coupe","turbo"]
}
console.log(car.models[0]);

//Exercise 2

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    getFullName: function(){
        console.log(`Hell my name is ${this.firstName}${this.lastName}`);
    },
};
person.getFullName();

//Exercixe 3

person.age = 25;

//Exercise 4

car.color = "red";
console.log(car.color);

//Exercise 5

const student = {
    name: "Jane",
    age: 20,
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA"
    }
}
console.log(student.address);
//Exercise 6

const rectangle ={
    length: 10,
    width: 5,
    getArea: function(){
        console.log(`The area is ${this.length*this.width}`);
    },
}
rectangle.getArea();



