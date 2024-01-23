let btn = document.getElementById('btn2');
let index = 1;
const totalMoves = 11;

btn.addEventListener('mouseover', movimiento);

function movimiento() {
    if (btn.classList.contains('pos-normal')) {
        // Eliminar la clase actual
        btn.classList.remove(`mov${index}`);
        
        // Incrementar el índice y reiniciar si llega al total de movimientos
        index = (index % totalMoves) + 1;

        // Agregar la nueva clase
        btn.classList.add(`mov${index}`);
    }
}

let boton = document.getElementById('btn1');

boton.addEventListener('click', function() {
    window.location.href = 'dijosi.html';
});