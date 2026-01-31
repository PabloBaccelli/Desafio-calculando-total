let precioElemento = document.querySelector("#precio");
let cantidadElemento = document.querySelector("#cantidad");
let botonSumar = document.querySelector("#sumar");
let botonRestar = document.querySelector("#restar");
let totalElemento = document.querySelector("#total");

let precio = 20000;
let cantidad =1;

function actualizarPantalla(){

    let total = precio*cantidad;
    cantidadElemento.innerHTML = "Cantidad: " + cantidad;
    precioElemento.innerHTML = "Precio Base: $"+precio;
    totalElemento.innerHTML = "$"+total

}

botonSumar.onclick = function(){
    cantidad = cantidad+1;
    actualizarPantalla();
}

botonRestar.onclick= function(){
    if(cantidad > 1){
        cantidad= cantidad-1;
        actualizarPantalla();
    }
}

actualizarPantalla();