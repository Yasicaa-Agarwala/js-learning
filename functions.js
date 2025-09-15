//Write a function that returns the square of a number.
function square(num){
    return num * num
}
console.log(square(16));

//Write a function that takes a name and returns "Hello, <name>!".

function greet(name){
    return `Hello, ${name}!`

}
console.log(greet("Alice"));

//Write a function that adds two numbers.
function add(a,b){
    return a+b; 
}
console.log(add(100,70));

//Write a function that checks if a number is even or odd.
function checkEvenOdd(num){
    let result;
    if(num % 2 === 0){
        result = "Even";
    } else {
        result = "Odd";
    }
    return result;
}
console.log(checkEvenOdd(2022));

//Write a function that takes an array and returns the largest number.