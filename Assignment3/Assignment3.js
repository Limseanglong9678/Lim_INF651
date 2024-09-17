//Challenge: Guessing Game (While Loop)
let randNum = Math.floor(Math.random() * 10) + 1;
let UserInput = Number(prompt("Please choose a number between 1 and 10: "));
while (UserInput != randNum){
    UserInput = Number(prompt("Incorrect Input: "));
}
alert("You guessed the right number, the random number was "+ randNum);
console.log("You guessed the right number, the random number was "+ randNum);

//Challenge: Password Validator (Do-While Loop)
let userPassword = prompt("Set Password");
let reEnter;
do{
    let reEnter = prompt("re-EnterPassword");
    if (userPassword === reEnter) {
        alert("Password confirmed!");
        break;
    } else {
        alert("Passwords do not match. Please try again.");
    }
}
while(true);

//Challenge: Multiplication Table Generator (For Loop)
let generatorTable = Number(prompt("Enter a number to generate a table"));
for(let i = 1; i < 11 ; i++){
    console.log(generatorTable + " x " + i + " = " + generatorTable * i);
}

//Challenge: Day Finder (Switch Case)
let dayGenerator;
do {
    dayGenerator = Number(prompt("Enter a number between 1 and 7"));
    if (dayGenerator < 1 || dayGenerator > 7) {
        alert("Number is out of range. Please try again.");
    }
} while (dayGenerator < 1 || dayGenerator > 7);  

let day;

switch (dayGenerator) {
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    case 7:
        day = "Sunday";
        break;
}

alert("The day is: " + day);
console.log("The day is: " + day);


//Challenge: Grade Evaluator (If-Else Statements)
let Grade = Number(prompt("Enter your score: "));
if (Grade >=90  && Grade <= 100 ) {
    console.log("the grade is A");
} 
else if (Grade >= 80 && Grade <= 89) {
    console.log("the Grade is B");
} 
else if (Grade >= 70 && Grade <= 79) {
    console.log("the Grade is C");
} 
else if (Grade >= 60 && Grade <= 69) {
    console.log("the Grade is D");
} 
else if (Grade < 60 && Grade >= 0) {
    console.log("the Grade is F");
} 
else{
    console.log("Invalid Score");
}
