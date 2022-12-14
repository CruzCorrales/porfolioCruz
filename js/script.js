const laEkis = document.querySelector(".laEkis");

function visualizarLista(){
    const lista = document.querySelector(".opcion");
    const listaLi = document.querySelectorAll(".opcion__li");

    lista.classList.toggle("opcion--activada");
    laEkis.classList.toggle("toggle");
    listaLi.forEach((li, index) => li.style.transition = `all ${0.6*index + 0.6}s`);
}
laEkis.addEventListener("click", visualizarLista);

const iconoHuella = document.querySelector(".huella");
const opciones = document.querySelector(".opcion__a");
const contenedorImagen = document.querySelector(".contenedor_imagen");

function cambiarColorCuadros () {
    contenedorImagen.style.backgroundColor = "white";
}
function deshabilitarColor(){
    iconoHuella.addEventListener("click", cambiarColorCuadros);
}
iconoHuella.addEventListener("click", cambiarColorCuadros);
iconoHuella.removeEventListener("mouseout", deshabilitarColor);

const icono = document.querySelector(".icono");
const maximizar = document.querySelector(".maximizar");

function agrandarLetras(){
    maximizar.classList.add("texto");
}

icono.addEventListener("click", agrandarLetras);