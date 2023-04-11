(function(){
    const listElements = document.querySelectorAll('.menu__item--show');
    const list = document.querySelector('.menu__links');
    const menu = document.querySelector('.menu__hamburguer');

    const addClick = ()=>{
        listElements.forEach(element =>{
            element.addEventListener('click', ()=>{

                
                let subMenu = element.children[1];
                let height = 0;
                element.classList.toggle('menu__item--active');


                if(subMenu.clientHeight === 0){
                    height = subMenu.scrollHeight;
                }

                subMenu.style.height = `${height}px`;

            });
        });
    }

    const deleteStyleHeight = ()=>{
        listElements.forEach(element=>{

            if(element.children[1].getAttribute('style')){
                element.children[1].removeAttribute('style');
                element.classList.remove('menu__item--active');
            }

        });
    }


    window.addEventListener('resize', ()=>{
        if(window.innerWidth > 800){
            deleteStyleHeight();
            if(list.classList.contains('menu__links--show'))
                list.classList.remove('menu__links--show');

        }else{
            addClick();
        }
    });

    if(window.innerWidth <= 800){
        addClick();
    }

    menu.addEventListener('click', ()=> list.classList.toggle('menu__links--show'));



})();

function animar() {
    var animar = document.querySelectorAll(".animate__animated");
  
    for (var i = 0; i < animar.length; i++){
        var windowHeight = window.innerHeight;
        var elementTop = animar[i].getBoundingClientRect().top;
        var elementVisible = 100;
  
        if (elementTop < windowHeight - elementVisible){
            animar[i].classList.add("animate__pulse");
            animar[i].classList.add("animate__repeat-2");
        } 
        else{
            animar[i].classList.remove("animate__pulse");
            animar[i].classList.remove("animate__repeat-2");
        }
    }
}
  
window.addEventListener("scroll", animar);