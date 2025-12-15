//    let age = prompt("Enter your age:");
//    if (age === null){
//     console.error("you cancelled it.");
//    }else{
//     if( age.trim()===""){
//         console.error("please write something...");
//     }else{  
//         age= Number(age);
//         if (isNaN(age)){
//             console.error("please enter a number...");
//         }else{
//             if (age<0) {
//                 console.error("Age cannot be negative.");
//             }else if(age>=18){
//             console.log("you can vote");
//         }
//         else{
//             console.log("you cannot vote");
//         }
//     }
//    }
// }

// for (let i=1;i<=10;i++){
//     console.log(`5 x ${i} = ${5*i}`);
// }


// let count =0;
// for ( let i=0; i<16; i++){
//     if( i>8){
//         count++;
//         console.log(i);
//     }
// }
// console.log(`total number of count is ${count}`);


// let password = "yashpatil";
// let userInput = prompt("enter the your password:");
// if(userInput === null){
//     console.error("you cancelled it.");
// }else{
//     if( userInput === password){
//         console.log("welcome yash");
//     }else{
//         console.error("incorrect password");
//     }
// }


// let attempt =0;
// let password= "yashpatil";
// let userInput = prompt("enter your password:");
// attempt++;
// while(attempt<3 && userInput!== password){
//     userInput = prompt("enter your password:");
//     attempt++;
// }
// if( attempt===3 && userInput!== password){
//     console.error("Account locked");
// }else{
//     console.log("welcome yash");
// }

// for( let i=1; i<51; i++){
//     if( i%7===0){
//         console.log(`divisiblr by 7: ${i}`);
//     }
// }



// function getScore(...scores){
//     console.log(scores);
//     let total = 0;
//     scores.forEach(function(val) {
//         total =total + val;
//     });
//     return total;
// }
// console.log(getScore(10,12,14,18));


// function discountCalculator(discount){
//     return function(price){
//         return price - price*(discount/100);
//     };
// }

// let ten= discountCalculator(10);
// let twenty= discountCalculator(20);

// console.log(ten(1000));
// console.log(twenty(1200));



// day 39.js

// use rest parameters to make a funtion that adds unlimited numbers .

// function addUnlimited(...num){
//     let sum=0;
//     num.forEach(function (val){
//         sum = sum+val;
//     });
//     console.log(sum);
// }
// addUnlimited(2,3,4,5,6);

// function addUnilimited(...num){
//     let sum =0;
//     for( let i=0; i<=num.length; i++){
//         // sum= sum+ num[i];
//     }
//     console.log(sum);
// }
// addUnilimited(1,2,3);

 //Q4 create an IIFE that prints "I run instantly "

// (function(){
//     console.log("I run instantly");
// })();


// q5  Make a nested function where the inner one prints a variable from the outer one.

// function parent(){
//     let a=12;
//     function chaild(){
//         console.log(a);
//     }
//     chaild();
// }
// parent();

// Q6 create an arry of 5 fruits. add one at the end remove one from the beginning.

// let fruits = ["apple","banana","manago","grapes","cherry"];
// fruits.push("orange");
// fruits.unshift("chiku");
// fruits.pop();
// console.log(fruits);


// Q7 use a for loop to prints all element of an array.

// let arr = [1,2,3,4,5,6];
// for ( let i=0; i< arr.length; i++){
//     console.log(arr[i]);
// }

// Q8  create an object person with keys name, age, and city, and print each ley's and value.

// let object={
//     "name":"yash",
//     "age":20,
//     "city":"silvassa"
// };
// for (let key in object){
//     console.log(key+ ": "+object[key]);
//     console.log(`${key}: ${object[key]}`);
// }


// Q9 use set timeout to log "time's up" after 2 seconds.
// setTimeout(function() {
//     console.log("times up");
// },2000);






// leve 2 
// Q1 create one pure function that always return the same output for given input and one impure function using a global varible.

// function pure(a,b){
//     console.log(a+b);
// }
// pure(2,3);

// let c=10;
// function impure(a,b){
//     c++;
//     console.log(a+b+c);
// }
// impure(2,3);
// impure(2,3);


//Q2 write a function that usew object destructuring inside parameter to extract and print name and age.

// function abcd({name, age} ){
//    console.log(name, age);
// }
// abcd({name: "yash ", age: 20});


//Q3 demonstrete the difference between normwl function and array funtion when used as object methond 

// Q4 givren an array of no. sue map() to create a new array where each number is squared 

// let arr = [1,2,3,4,5];
// let newarr = arr.map(function (val){
//     return val*val;
// });
// console.log(newarr);

// Q5 use filter() to get on;y even number from an Array

// let arr = [1,2,3,4,5,6,7,8,9];
// let newarr = arr.filter(function (val){
//     return val%2===0; 
// });
// console.log(newarr);

// Q6 use reduse() to fined the total salry from an array of numberrs [1000, 2000,

let salary = [1000, 2000, 3000];
let ans=salary.reduce(function(acc,val){
    return acc+val;
},0)