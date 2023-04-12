window.addEventListener("scroll", function(){

    if(document.getElementById("index")){
        animarIndex()
    }
    else if(document.getElementById("empresa")){
        animarEmpresa()
    }
});

function animarIndex(){

    console.log("asd");

    var animarImg = document.querySelectorAll(".article-img");
    var animarDesc = document.querySelectorAll(".descripcion");
  
    for (var i = 0; i < animarImg.length; i++){
        var windowHeight = window.innerHeight;
        var elementTop = animarImg[i].getBoundingClientRect().top;
        var elementVisible = 100;
  
        if (elementTop < windowHeight - elementVisible){
            animarImg[i].classList.add("animate__bounceInLeft");
        } 
        else{
            animarImg[i].classList.remove("animate__bounceInLeft");
        }
    }

    for (var i = 0; i < animarDesc.length; i++){
        var windowHeight = window.innerHeight;
        var elementTop = animarDesc[i].getBoundingClientRect().top;
        var elementVisible = 100;
  
        if (elementTop < windowHeight - elementVisible){
            animarDesc[i].classList.add("animate__bounceInRight");
        } 
        else{
            animarDesc[i].classList.remove("animate__bounceInRight");
        }
    }
}


function animarEmpresa() {

    console.log("jkl");

    var animar = document.querySelectorAll(".animate__animated");
  
    for (var i = 0; i < animar.length; i++){
        var windowHeight = window.innerHeight;
        var elementTop = animar[i].getBoundingClientRect().top;
        var elementVisible = 100;
  
        if (elementTop < windowHeight - elementVisible){
            animar[i].classList.add("animate__pulse");
            animar[i].classList.add("animate__repeat-2")
        } 
        else{
            animar[i].classList.remove("animate__pulse");
            animar[i].classList.remove("animate__repeat-2")
        }
    }
}
  


