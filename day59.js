  //js -> single threaded 
  //  Introduction to Asynchrony in javaScrip. 

  // call back -> ek function jo turanet nahi chalega ye chalega jab aapko koi kaam comlete hoga 

//   function abcd(fn){
//     fn(function(fn2){
//         fn2(function(){
//             console.log('hello');
//         });
//     })
//   }

//   abcd(function(fn) {
//     fn(function(fn3){
//         fn3();
//     });
// });


//day 60 
//Q1 ekk function banao after delay.  requirement: ye function 2 cheezein lega: time (milliseconds) callback function  givven time ke baad callback call kare. callback ke andar " callback executed" print hona chahiye use case socho: "2 second baad ek kaam karna hai"  goal: samajhana ki callback delay ke baad kaise execute hote hai  ye setti,e + callback connection hai 

// function afterDelay(time, cb){
//   setTimeout(function(){   
//     cb();
//   }, 2000);
// }

//  afterDelay(2000,function(){
//   console.log("callback executed");
//  })

//q2 

// function getUser(username,cb){
//   console.log('geting user details..')
//   setTimeout(() => {
//     cb({id: 1, username: 'yash'});
//   }, 2000);
// }

// function getUserPosts(id, cb){
//   console.log('getting user posts..')
//   setTimeout(() => {
//     cb(['helo', 'good day', 'nice to meet you']);
//   }, 3000);
// }

// getUser('yash', function(user){
//   getUserPosts(user.id, function(allposts){
//     console.log(user.username, allposts);
//   });
// });

//Q3 

// function loginUsser(username,cb){
//   console.log('logging in user..')
//   setTimeout(function() {
//     cb({id: 1212, username: 'yash'});
//   }, 2000);
// }

// function fetchPermissions(id,cb){
//   console.log('fetching permissions..')
//   setTimeout(function() {
//     cb(['read','write','delete'])
//   }, 3000);
// }

// function loadDashboard(permissions,cb){
//   console.log('loading dashboard..')
//   setTimeout(function(){
//     cb();
//   },4000)
// }

// loginUsser('yash',function(userdata){
//   fetchPermissions(userdata.id, function(permissions){
//     loadDashboard(permissions,function(){
//       console.log('dashboard loaded');
//     });
//   });
// });



///Day 61 
// promises, async await, settimeout and setinterval 

// const prm = new Promise((resolve, reject)=>{
//   setTimeout(() => {
//     resolve();
//   }, 3000);
// });

// prm.then (function(){
//   console.log('promise resolved');
// })
// .catch(function(){
//   console.log('promise rejected');
// });

//fetch 

// fetch(`http://randomuser.me/api/`)
// .then(raw=> raw.json())
// .then((data) => {
//   console.log(data.results[0].name.first);
// })
// .catch((err)=>{
//   console.log(err);
// });

//async await 
// async function abcd(){
//   let raw = await fetch(`http://randomuser.me/api/`);
//   let data = await raw.json();
//   console.log(data);
// }
// abcd();


//day 62

//  introduction to error handling 
// common types of errors in js {syntax errors, runtime errors, logical error }
//understanding the error object - {message , name, stack}
// handling exception using try-catch, try-catch-finally


