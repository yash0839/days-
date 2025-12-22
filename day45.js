var grow =0
var btn = document.querySelector('button')
var h2 = document.querySelector('h2')
var inner = document.querySelector('.inner')

btn.addEventListener('click',function(){

        console.log('Your file will be Downloaded in ',num/10,'Seconds');
        btn.style.pointerEvents='none'
        
        var num =50 + Math.floor(Math.random()*50)
        console.log(num);

     var int =setInterval(function(){
        grow++
        h2.innerHTML= grow+'%'
        inner.style.width=grow+'%'
     },num);
 
     setTimeout( function(){
        clearInterval(int)
        btn.innerHTML='Downloaded'
        btn.style.opacity= 0.5
     },num*100);

})



      
      
      
      
      
      
      
      
      
      
      
      
      











      
      
    //   var a =0
    //     var int=setInterval(function(){
    //         a++
    //         console.log(a);
    //     },100);

    //     setTimeout(function(){
    //         clearInterval(int)
    //     },5000);




// var btn = document.querySelector('button')
// var h1 = document.querySelector('h1')

// btn.addEventListener('click',function(){
//     console.log('button is clicked');
//     h1.innerHTML= 'loading...'
//     setTimeout(function(){
//         h1.innerHTML= 'Hello I am krunu'
//         console.log('hello gays');
//     },2000)
// })