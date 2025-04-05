function leerDatos(){
    let filas = document.getElementById("filas").value;
    let columnas = document.getElementById("columnas").value;

    if (filas <= 0 || columnas <= 0) {
        alert("Por favor, ingresa valores numéricos mayores que 0 para filas y columnas.");
        return;
    }
 crearTablas(filas, columnas);
}

function crearTablas(filas, columnas){
    let contenedor = document.getElementById("tabla");
    contenedor.innerHTML = "";
    
    // Crear la tabla
    let tabla = document.createElement("table");
    tabla.setAttribute("border", "1");

    for(let x = 0; x<filas; x++){
        let fila = document.createElement("tr");
        for(let y = 0; y<columnas; y++){
            let celda = document.createElement("td");
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    contenedor.appendChild(tabla);
}