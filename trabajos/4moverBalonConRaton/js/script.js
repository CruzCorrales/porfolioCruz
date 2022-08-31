let campo = document.querySelector("#campo");
let balon = document.querySelector("#balon");

function moverBalon(evento){
    let widthBalon = balon.getBoundingClientRect().width;
    let heightBalon = balon.getBoundingClientRect().height;
    balon.style.left = (evento.clientX - widthBalon / 2) +"px";
    balon.style.top = (evento.clientY - heightBalon / 2) +"px";
};

campo.addEventListener("click", moverBalon);
