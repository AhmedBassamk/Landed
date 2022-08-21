var header = document.getElementById('head');
window.onscroll = function(){
    if(window.scrollY >= 4){
        header.style.background = "black"
        header.style.transition = "1s"
    }else{
        header.style.background = "transparent"
    }
}