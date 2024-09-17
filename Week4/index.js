let myText  = 'I am a string';
let newString = myText.replace("string","sausage");
console.log(newString)

let myArray = ['I','love','chocolate','frogs'];
let madeAtString = myArray.join(' ');
console.log(madeAtString)

let myNumber = Math.random();

function sum(a,b){
return a+b;
}
let result = sum(1,2)
console.log(result)

function checkAge(age){
    if(age>=18){
        return true;
    }else{
        return confirm('Do you have permission from parents');
    }
}

let age = checkAge(17);
console.log(age)