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
