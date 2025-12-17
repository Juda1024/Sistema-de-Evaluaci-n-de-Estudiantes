// Arreglo de notas
let notas = [8, 4, 10, 6, 3, 9, 5, 7, 2];

/*
// Descomentar y recargar lla pagina  si quiere ingresar las notas manualmente
let notas = [];
let n = parseInt(prompt("Cantidad de notas:"));

for (let i = 0; i < n; i++) {
    notas.push(parseFloat(prompt("Ingresa la nota:")));
}
*/

let notasValidas = [];
let notasInvalidas = [];

let aprobados = 0;
let supletorios = 0;
let reprobados = 0;
let suma = 0;

notas.forEach(nota => {
    if (nota < 0 || nota > 10 || isNaN(nota)) {
        notasInvalidas.push(nota);
        return;
    }

    notasValidas.push(nota);
    suma += nota;

    if (nota >= 7) {
        aprobados++;
    } else if (nota >= 5) {
        supletorios++;
    } else {
        reprobados++;
    }
});

let promedio = notasValidas.length ? suma / notasValidas.length : 0;

let estado = document.getElementById("estado-curso");
estado.classList.remove("text-success", "text-danger");

if (promedio >= 7) {
    estado.textContent = "CURSO APROBADO";
    estado.classList.add("text-success");
} else {
    estado.textContent = "EN RIESGO";
    estado.classList.add("text-danger");
}

document.getElementById("total-aprobados").textContent = aprobados;
document.getElementById("total-supletorios").textContent = supletorios;
document.getElementById("total-reprobados").textContent = reprobados;
document.getElementById("promedio-curso").textContent = promedio.toFixed(2);
