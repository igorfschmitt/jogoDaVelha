document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handTurn);
    })

})
function handTurn(event) {

    let square = event.target;
    let position = square.id;

    if(handleMove(position)){

        setTimeout(() =>{
            alert(" O jogo Acabou - Vencedor " + playerTurn)
        }, 75);
    };
    updateSquare(position);
}

function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
}