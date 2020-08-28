window.addEventListener("scroll", function(){
    let animacionUno = document.getElementById("ilustracionSVG")
    let posicionAnimacion1 = animacionUno.getBoundingClientRect().top;
    let animationDos = document.querySelectorAll('.card-acerca');
    let posicionAnimacion2 = animationDos[0].getBoundingClientRect().top;
    let tamanyoHeightPantalla =window.innerHeight/3.5;
    
    if(posicionAnimacion1 < tamanyoHeightPantalla){
        animacionUno.style.animation = "animacion1 1s ease-out";
    }
    if(posicionAnimacion2 < tamanyoHeightPantalla){
        animationDos[0].style.animation = "animacion2 0.5s  ease";
        animationDos[1].style.animation = "animacion2 0.5s 0.5s ease";
        animationDos[2].style.animation = "animacion2 0.5s  1s ease";
    }
})

$( document ).ready(function() {
    getMobileOperatingSystem();
});
