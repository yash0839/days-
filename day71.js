// let inp   = document.querySelector('input');

// inp.addEventListener('input',function(details){
//     if(details.data !== null){
//     console.log(details.data)
//     }
// })


// let selector = document.querySelector('select');
// let device = document.querySelector('#device');

// selector.addEventListener('change',function(details){
//     devise.textContent = `${details.target.value} Devise is selected`;
// })


// let h1 = document.querySelector('h1');

// window.addEventListener('keydown',function(details){
//     if(details.key === ' '){
//         h1.textContent = 'Spc';
//     }else{
//         h1.textContent = details.key;
//     }
// })



// let inputField = document.querySelector('#inputField');
// let span = document.querySelector('samp');

// inputField.addEventListener('input',function(details){
//     let left = 20 - details.target.value.length;
//     span.textContent = left;
//     if(left< 0){
//         span.style.color ="red";
//     }else{

//         span.style.color ="white";
//     }
// })

let nm = document.querySelector('#name')
let form = document.querySelector('form')

form.addEventListener("submit", function(dets){
    dets.preventDefault();

    if(nm.value.legth <= 2){
        document.querySelector("#hide").style.display= 'initial';
    }else{
        document.querySelector("#hide").style.display= 'hidde';
    }
})














































