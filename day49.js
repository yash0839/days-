var allElem=document.querySelectorAll('button')

allElem.forEach(function(elem){
    elem.addEventListener('click',function(){
        if(elem.innerHTML == 'Add Friend'){
            elem.innerHTML ='Remove Friend'
        }
        else{
            elem.innerHTML="Add Friend"
        }  
    })
    
});