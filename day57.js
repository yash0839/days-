// // class Bottle{
// //     constructor(){
// //         this.color = 'transparent';
// //         this.material = 'plastic';
// //         this.price = 20;
// //     }
// //     fill(){}
// //     drink(){}
// // }

// // let bottle1 = new Bottle();
// // let bottle2 = new Bottle();

// class Sketch{
//     constructor(){
//         this.character = 'doraemon';
//         this.color = 'blue';
//         this.someFnc = function(){};
//     }
//     speck() {}
//     walk() {}
// }

// let sketch1 = new Sketch(); 

// // global -> window
// // function -> window
// // es5 function inside object -> object
// // es6 function inside object -> window
// // es5 function inside es5 function inside object -> windowes6 function 
// //es6 function inside object -> object 


// //call apply bind 
// let obj ={
//     name: 'yash',
// };

// function abcd(){
//      console.log(this);
// }
// abcd.call(obj); // this -> obj
// abcd.apply(obj); // this -> obj


// // Day 58 JS 


//create a user object stores name and eamil has a golin method which prints user logged in  Imagine you have 5 users.  first think how you would manage them without using a class. then covert the same logic using a class and observe how the code become cleaner. write code for both approaches.

// let user1 = {
//     name: 'yash',
//     eamil: 'yashpatil',
//     login:function(){
//         console.log('logged id');
//     },
// };

// let user2 = {
//     name: 'yash',
//     eamil: 'yashpatil',
//     login:function(){
//         console.log('logged id');
//     },
// };

// let user3 = {
//     name: 'yash',
//     eamil: 'yashpatil',
//     login:function(){
//         console.log('logged id');
//     },
// };
// let user4 = {
//     name: 'yash',
//     eamil: 'yashpatil',
//     login:function(){
//         console.log('logged id');
//     },
// };
// let user5 = {
//     name: 'yash',
//     eamil: 'yashpatil',
//     login:function(){
//         console.log('logged id');
//     },
// };

// user.login();

// class User {
//     constructor(name,email){
//         this.name;
//         this.email;
//     }
//     loggedIn(){
//         console.log('loggedin');
//     }
// }

// let user1 = new User('yash','yash@ysdhj');
// let user2 = new User('krunu','krunu@23');


//Q2. create a producet object that stores name and prices and has a method ehich return te final price after dice=ount.

// let product={
//     name:'cap',
//     price:3300,
//     discountedPrice: function(){
//         this.price
//     }
// };
// console.log(product.discountedPrice());

//Q3 


// class Car{
//     constructor(brand, speed){
//         this.brand = brand;
//         this.speed = speed;
//     }
//     drive(){
//         console.log(this.brand +'-' + this.speed);
//     }
// }

// let car1= new Car('Hyundai',120);
// let car2= new Car('maruti',110);

//Q4
// class Student{
//     constructor(name, rollnumber){
//         this.name = name;
//         this.rollnumber = rollnumber;
//     }
//     introduce(){
//         return this.name +'-'+ this.rollnumber;
//     }
// }

// // let st1= new Student('yash',101)

// let obj={
//     sayName: function() {
//         console.log(this);
//     },
//     sayArrowName: () =>{
//         console.log(this);
//     },
// };

// obj.sayArrowName();
// obj.sayName();


//Q5

// function User(){
//     this.name= 'yash';
//     // this.login = function(){
//     //     console.log('loggedin')
//     }
//     User.prototype.loggedin = function(){
//         console.log('loggedin')
//     };

// let user = new User();


// Q6

// function abcd() {
//     console.log(this.name);
// }
// let obj = {
//     name: 'yash',
// };
// abcd.call(obj);
// abcd.apply(obj);
