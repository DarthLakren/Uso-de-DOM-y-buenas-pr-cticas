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
    let codigo = "";
    codigo = codigo + "<table border='1'>";
    for(let x = 0; x<filas; x++){
        codigo= codigo + "<tr>";
        for(let y = 0; y<columnas; y++){
            codigo= codigo + "<td>"
            codigo= codigo + "</td>"
        }
        codigo= codigo + "</tr>";
    }
    codigo = codigo + "</table>";
    console.log(codigo);
    document.getElementById("tabla").innerHTML=codigo;
}