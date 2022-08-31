let anillos = document.querySelectorAll(".plof")
let btn = document.querySelector(".boton")
let contador = 0;

function aparecerYdesaparecerAnillos(){
    anillos[contador].classList.toggle("desaparecer");
    contador++;
    if(contador == anillos.length){
        contador = 0;
        // tambien saldria porque es lo mismo
        // contador === anillos.length? contador = 0: contador;
    }
}

btn.addEventListener("click", aparecerYdesaparecerAnillos);
