let button = document.getElementById('more-btn');
let link =document.getElementById('link');
link.style.visibility="visible";
button.addEventListener('click',()=>{
    if(link.hidden){
        link.style.visibility="visible";
        link.hidden=false;
    }
    else{
        link.style.visibility="hidden";
        link.hidden=true;
    }

})
