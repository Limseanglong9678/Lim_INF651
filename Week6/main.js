const car = {
    doors: 2,
    color: "red",
    engine: "electric",
    models: ["coupe","turbo"]
}
console.log(car.models[0]);

const person = {
    firstName: "John",
    lastName: "Doe",
    height: "6'2",
    weight: 180,
    hobbies: ["eat","sleep","code"],
    greet: function(){
        console.log(`Hell my name is ${this.firstName}`);
    },
};

person.greet();
const weather = {
    city: "New York",      // Name of the city
    temperature: 75,       // Temperature in Fahrenheit
    humidity: 60,          // Humidity in percentage
    windSpeed: 10,         // Wind speed in mph
    description: "Sunny",  // Brief description of the weather
    feelsLike: 77,         // 'Feels like' temperature in Fahrenheit
    timestamp: new Date()  // Current date and time
};