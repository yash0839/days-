var img = document.querySelector('img')
var love = document.querySelector('#love')

img.addEventListener('dblclick',function(){
    console.log('image double clicked');
    love.style.opacity = 1
    love.style.transform = 'translate(-50%,-50%) scale(1) rotate(0deg)';

    setTimeout(() => {
            love.style.transform = 'translate(-50%,-600%) scale(1) rotate(60deg)';

    },800);

    setTimeout(() => {
            love.style.opacity = 0
    }, 1000);

    setTimeout(() => {
             love.style.transform = 'translate(-50%,-50%) scale(0) rotate(-60deg)';

    }, 1200);
})