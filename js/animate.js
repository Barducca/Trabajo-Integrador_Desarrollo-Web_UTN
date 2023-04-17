window.addEventListener("scroll", function(){

    if(document.getElementById("empresa")){
        animarEmpresa()
    }

});


function animarEmpresa() {

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