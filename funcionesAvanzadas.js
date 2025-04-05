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
export {crearTablas}; 