// 1. Datos de entrada (Arreglo de notas)
let notas = [8, 4, 10, 6, 3, 9, 5, 7, 2];

// 2. Variables para contadores y acumulador
let aprobados = 0;
let supletorios = 0;
let reprobados = 0;
let sumaTotal = 0;

// 3. Recorrer el arreglo para clasificar y sumar
// Usamos un bucle for clásico como pediste en los requisitos originales
for (let i = 0; i < notas.length; i++) {
    let nota = notas[i];
    
    // Acumular nota para el promedio
    sumaTotal += nota;

    // Clasificación según rangos
    if (nota >= 7 && nota <= 10) {
        aprobados++;
    } else if (nota >= 5 && nota < 7) {
        supletorios++;
    } else {
        // Se asume nota entre 0 y 4
        reprobados++;
    }
}

// 4. Calcular el promedio
let promedio = sumaTotal / notas.length;

// 5. Determinar el estado del curso y preparar estilos
let estadoTexto = "";
let elementoEstado = document.getElementById("estado-curso");

// Limpiamos clases previas de color por seguridad
elementoEstado.classList.remove("text-success", "text-danger");

if (promedio >= 7) {
    estadoTexto = "CURSO APROBADO";
    elementoEstado.classList.add("text-success"); // Clase verde de Bootstrap
} else {
    estadoTexto = "EN RIESGO";
    elementoEstado.classList.add("text-danger");  // Clase roja de Bootstrap
}

// 6. Insertar los valores en el HTML
document.getElementById("total-aprobados").textContent = aprobados;
document.getElementById("total-supletorios").textContent = supletorios;
document.getElementById("total-reprobados").textContent = reprobados;

// toFixed(2) para mostrar solo dos decimales
document.getElementById("promedio-curso").textContent = promedio.toFixed(2);
elementoEstado.textContent = estadoTexto;