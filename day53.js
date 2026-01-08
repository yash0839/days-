const para = document.querySelector('p')
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
const text = para.innerText

let iteration = 0 

function randomText(){
    const str = text.split('').map((char, index)=>{
        if(index < iteration){
            return char
        }
        return characters.split("")[Math.floor(Math.random()*52)]
    }).join("")    

    para.innerText = str
    iteration += 0.5
}

setInterval(randomText,30)