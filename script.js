// Obtención del canvas y su contexto de dibujo 2D
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Escala: cada unidad del plano cartesiano equivale a 20px
const escala = 20;

/**
 * Limpia completamente el canvas y la tabla de resultados.
 * Se utiliza antes de cada nueva ejecución del algoritmo.
 */
function limpiar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.querySelector("#tabla tbody").innerHTML = "";
}

/**
 * Dibuja un "píxel" escalado en el canvas.
 * Se usa para representar los puntos calculados por Bresenham.
 * 
 * @param {number} x - Coordenada X
 * @param {number} y - Coordenada Y
 */
function plot(x, y) {
    // Se invierte el eje Y para simular plano cartesiano
    ctx.fillRect(
        x * escala,
        canvas.height - y * escala,
        escala,
        escala
    );
}
/**
 * Dibuja los ejes cartesianos (X e Y) junto con sus marcas numéricas.
 * Permite visualizar mejor la ubicación de los puntos.
 */
function dibujarEjes() {

    ctx.strokeStyle = "gray";
    ctx.beginPath();

    // Eje X (horizontal)
    ctx.moveTo(0, canvas.height);
    ctx.lineTo(canvas.width, canvas.height);

    // Eje Y (vertical)
    ctx.moveTo(0, 0);
    ctx.lineTo(0, canvas.height);

    ctx.stroke(); // dibuja la linea 

    // Dibujar marcas numéricas en eje X
    ctx.fillStyle = "black";
    for (let i = 0; i < canvas.width / escala; i++) {
        ctx.fillText(i, i * escala, canvas.height - 5);
    }

    // Dibujar marcas numéricas en eje Y
    for (let i = 0; i < canvas.height / escala; i++) {
        ctx.fillText(i, 5, canvas.height - i * escala);
    }
}