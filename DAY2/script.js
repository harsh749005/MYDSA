// Area of Triangle
// let base = Number(prompt("Enter the bredth : "));
// let width = Number(prompt("Enter the width : "));
// let area = 1/2 * base * width;
// console.log(`Area of Triangle is : ${area}sq.units`)

// Greater Number 
// let num1 = Number(prompt("Enter the first number : "));
// let num2 = Number(prompt("Enter the second number : "));
// console.log(`${num1 > num2 ? num1 +" is greater than "+ num2:num2 +" is greater than "+ num1 }`)

// Number is odd or even
// let num = Number(prompt("Enter the number : "));
// console.log(`${num % 2 === 0 ? num +" is even number ": num + " odd number "}`);

// Leap Year
// let year = Number(prompt("Enter the year : "));
// if(year % 4 ===0 ){
//     if(year % 100 === 0 ){
//         if(year % 400 === 0 ){
//             console.log(year + " is a leap year");
//         }else{
//             console.log(year + " is not a year");
//         }
//     }
//     else{
//         console.log(year + "is a leap year");
//     }
// }
// else{
//     console.log(year + " is not leap year")
// }


// Print First N Natural Numbers
// let number = Number(prompt("Enter the number : "));
// for(let i = 1 ; i <= number;i++){
//     console.log(i);
// }

// Sum of First N Natural Numbers
// let number = Number(prompt("Enter the number : "));

// let sum = 0;
// for(let i = 1 ; i <= number;i++){
//     sum +=i;
// }
// console.log("Sum of first N numbers is : ",sum);

// Factorail
//  let number = Number(prompt("Enter the number : "));
// number === 0 || number === 0 ? console.log("Factorial of ",number," is " ,number)  : Factorial(number);
// function Factorial(number){
//     let sum = 1;
//     for(let i = number;i > 1;i--){
//         sum *=i;
//     }
//     console.log("Factorial of ",sum, " is ",sum);
// }

// Sum of entered number
// let number = Number(prompt("Enter the number : "));
// let sum = 0;
// let digits = String(number).split('').map(Number);
// for(let i =0;i < digits.length;i++){
//     sum+=digits[i];
// }
//  console.log("Sum of ",number , " is ",sum);


// Reverse Number
// function reverseNumber(num){
    
// let numStr = String(num);
// let charArray = numStr.split('');
// let reversedArray = charArray.reverse();
// let reversedStr = reversedArray.join('');
// return parseFloat(reversedStr) * Math.sign(num);
// }
// console.log(reverseNumber(123));
