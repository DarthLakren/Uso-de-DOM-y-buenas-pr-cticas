
import { crearTablas } from"./funcionesAvanzadas.js";
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("crear").addEventListener("click", leerDatos);
});
function leerDatos(){
    try{
        let filas = document.getElementById("filas").value;
        let columnas = document.getElementById("columnas").value;

        if (filas <= 0 || columnas <= 0) {
            alert("Por favor, ingresa valores numéricos mayores que 0 para filas y columnas.");
            return;
        }
    crearTablas(filas, columnas);
    }catch(error){
        alert("Error: " + error.message);
    }
}


