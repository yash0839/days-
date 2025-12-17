var btn = document.querySelector('button')
var main = document.querySelector('main')

btn.addEventListener('click',function(){
    var div = document.createElement('div')
    var x = Math.floor(Math.random()*100)
    var y = Math.floor(Math.random()*100)
    var z = Math.floor(Math.random()*360)

    var c1 = Math.floor(Math.random()*256)
    var c2 = Math.floor(Math.random()*256)
    var c3 = Math.floor(Math.random()*256)
    
    div.style.height= '120px'
    div.style.width= '120px'
    div.style.position = 'absolute'
    div.style.backgroundColor= `rgb(${c1},${c2},${c3})`
    div.style.left= x +'%'
    div.style.top = y+'%'
    div.style.rotate = z+'deg'
    
    main.appendChild(div)   
})


// var btn = document.querySelector('button')
// var main = document.querySelector('main')
// var arr = ['Stay positive always','Believe in yourself','Keep moving forward','You can do it','Never give up','Choose happiness daily','Be kind always','Dream big always']

// btn.addEventListener('click',function(){
//     var h1 = document.createElement('h1')
//     var a = Math.floor(Math.random()*arr.length)

//     var x = Math.random()*100
//     var y = Math.random()*100
    
//     var rot = Math.random()*360
//     var scl = Math.random()*3

//     h1.innerHTML = arr[a]
//     h1.style.position ='absolute'

//     h1.style.left = x + '%'
//     h1.style.top = y + '%'
//     h1.style.rotate = rot + 'deg'
       
//     h1.style.scale = scl

//     main.appendChild(h1)
    
// })