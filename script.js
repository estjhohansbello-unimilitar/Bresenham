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