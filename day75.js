// // let a = 12 
//     let a = 12 
// function abcd(){
//     console.log(a)
// }

// function defg() {
//     let a =24
//     console.log(a) 
//     abcd()
// }
// defg()


// function abc(){
//     let a = 20;
//     return function def(){
//         console.log(a)
//     }
// }
// let fnc = abc()

// // fnc()


// function countForMe(){
//     let c =0
//     return function(){
//         c++;
//         console.log(c)
//     }
// }
// let a = countForMe();
// a()
// a()
// a()
// a()

function clickLimiter(){
    let click = 0;
    return function (){
        if(click < 5){
            click++;
            console.log(`click: ${click} times`)
        }else{
            console.log("limiter  exceeded, try after some time")
        }
    }
}
let fnc = clickLimiter()
fnc()
fnc()
fnc()
fnc()
fnc()
fnc()
fnc()