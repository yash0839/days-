// let count = 10 ;

// let Im =setInterval(function() {
//     if(count>=1) {
//         count--;
//         console.log(count);
//     }else{
//         clearInterval(Im);
//     }
// },1000);

let count = 0;

let progress = document.getElementById("progress-bar");
let percentage = document.getElementById("percent");

let interval = setInterval(function () {

    if (count < 100) {
         count++;
        progress.style.width = `${count}%`;
        percentage.textContent = `${count}%`;
       
    } else {
        clearInterval(interval);
        document.getElementById("h2").textContent = "Downloaded";
    }
    
}, 50);