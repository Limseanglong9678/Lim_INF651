 // Variables and Data Types
 let personName = "Jason";
 let personAge = 18;
 let student = new Boolean(false);
 
 // Basic Arithmetic Operations
 let num1 = 6;
 let num2 = 3;
 let addition = num1 + num2;
 let subtraction = num1 - num2;
 let multiplication = num1 * num2;
 let division = num1 / num2;
 console.log(addition,subtraction,multiplication,division)
 // Working with Strings
 let sentence = "Hello INF-651";
 let sentenceLength = sentence.length;
 let firstChar = sentence.charAt(0);
 let lastChar = sentence.charAt(sentence.length - 1);  // Fixed to get the last character correctly
 console.log(sentence,sentenceLength,firstChar,lastChar)
 // Math Object
 let negativeNumber = -4;
 let squareRoot = Math.sqrt(Math.abs(negativeNumber)); // Using absolute value for square root
 let squared = Math.pow(negativeNumber, 2);
 let absoluteValue = Math.abs(negativeNumber);
 console.log(negativeNumber,squareRoot,squared,absoluteValue)
 // Boolean Logic and Comparison Operators
 let biggerNum = 3;
 let smallerNum = 2;
 console.log(true ? biggerNum : smallerNum);

 // Logical Operators
 console.log(true && false);
 console.log(true && true);
 console.log(false || true);
 console.log(!true);
 
 // Using Template Literals
 console.log("string text line 1\n" + "string text line 2");