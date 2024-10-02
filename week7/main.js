const professor = {
    name : "Sam",
    location: "FHSU hammond hall",
    email : "sam@gmail.com",
};

let keys = Object.keys(professor);
let values = Object.values(professor);
let entries = Object.values(professor);

console.log(keys);
console.log(values);
console.log(entries);

keys.forEach((key) => {
    console.log(key);
});

for (x in professor){
    console.log(`${x}: ${professor[x]}`);
}

const vehicle = new Object();

vehicle.wheels = 4;
vehicle.color = "red";

console.log(vehicle["color"]);

const eVehicle = {
    wheels : 4,
    color : "blue",
    engine() {
        return "vroom";
    },
};

const Car = Object.create(eVehicle);
console.log(Car.wheels);
Car.color = "Black";

console.log(Car.color);
console.log(eVehicle.color);

Car.engine = () => {
    return "Silent";
};

console.log(Car.engine());

const person ={
    name : "JohnDoe",
    replaceid: 3432,
}